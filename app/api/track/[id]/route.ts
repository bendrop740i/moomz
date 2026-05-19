import { NextResponse, type NextRequest } from "next/server";
import { head } from "@vercel/blob";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// In-memory caches per Lambda instance. Tracks are immutable, so we can keep
// these for the lifetime of the function instance to skip the Supabase +
// Vercel Blob lookups on subsequent plays / range requests for the same track.
type Resolved = { pathname: string; blobUrl: string; resolvedAt: number };
const TRACK_CACHE = new Map<string, Resolved>();
// Resolved blob URLs from `head()` are short-lived signed CDN URLs — keep for
// 10 minutes max so playback never hits a stale signature on long sessions.
const RESOLVE_TTL_MS = 10 * 60 * 1000;

// Streams a private Vercel Blob track to the client by proxying the bytes
// with our BLOB_READ_WRITE_TOKEN. Range requests pass through so HTML audio
// elements can seek normally.
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return new NextResponse("Blob token not configured", { status: 500 });
  }

  const id = params.id;
  const now = Date.now();
  let resolved = TRACK_CACHE.get(id);

  if (!resolved || now - resolved.resolvedAt > RESOLVE_TTL_MS) {
    // Need to (re)resolve: pathname + signed blob URL.
    let pathname = resolved?.pathname;
    if (!pathname) {
      const supabase = getSupabase();
      const { data, error } = await supabase
        .from("tracks")
        .select("blob_url")
        .eq("id", id)
        .maybeSingle();
      if (error || !data) {
        return new NextResponse("Track not found", { status: 404 });
      }
      pathname = data.blob_url as string;
    }
    try {
      const info = await head(pathname, { token });
      resolved = { pathname, blobUrl: info.url, resolvedAt: now };
      TRACK_CACHE.set(id, resolved);
    } catch (e) {
      return new NextResponse(
        `Blob lookup failed: ${e instanceof Error ? e.message : "unknown"}`,
        { status: 502 },
      );
    }
  }

  const range = req.headers.get("range");
  const upstream = await fetch(resolved.blobUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(range ? { Range: range } : {}),
    },
    // Vercel/Node fetch — no need to buffer, we stream the body straight back.
  });

  if (!upstream.ok && upstream.status !== 206) {
    // The signed URL may have expired mid-cache-window — drop and retry once.
    if (upstream.status === 401 || upstream.status === 403) {
      TRACK_CACHE.delete(id);
    }
    return new NextResponse(
      `Blob fetch failed: ${upstream.status}`,
      { status: 502 },
    );
  }

  const headers = new Headers();
  const passThrough = [
    "content-type",
    "content-length",
    "content-range",
    "accept-ranges",
    "etag",
    "last-modified",
  ];
  for (const k of passThrough) {
    const v = upstream.headers.get(k);
    if (v) headers.set(k, v);
  }
  if (!headers.has("content-type")) headers.set("content-type", "audio/mpeg");
  if (!headers.has("accept-ranges")) headers.set("accept-ranges", "bytes");
  // Tracks are immutable (same id always serves the same audio). Allow the
  // browser AND any shared CDN cache to keep the bytes for a long time so
  // repeated plays + range requests for seeking are instant.
  headers.set("cache-control", "public, max-age=86400, immutable");

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers,
  });
}
