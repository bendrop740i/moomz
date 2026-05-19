import { NextResponse, type NextRequest } from "next/server";
import { head } from "@vercel/blob";
import { getSupabase } from "@/lib/supabase";
import { r2PublicUrl } from "@/lib/r2";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// In-memory cache per Lambda instance. Track rows in Supabase are immutable —
// once a track is created its `blob_url` (R2 key / Vercel Blob pathname) never
// changes. Caching the lookup means the very first play hits the DB, every
// subsequent play (or range request for seeking) skips it entirely.
const KEY_CACHE = new Map<string, string>();

// Vercel-Blob fallback only: `head()` returns a short-lived signed CDN URL
// (~24h), so the Resolved tuple needs a TTL. R2 public URLs are permanent and
// don't need this.
type Resolved = { url: string; resolvedAt: number };
const BLOB_URL_CACHE = new Map<string, Resolved>();
const BLOB_TTL_MS = 10 * 60 * 1000;

// Headers we want on every redirect so the browser and any shared CDN cache
// the redirect itself aggressively. Tracks are immutable.
const REDIRECT_CACHE_HEADERS = {
  // The redirect target (R2 public URL) is itself cached at the browser layer
  // forever. The redirect status can be cached too — same track id always
  // routes to the same key.
  "Cache-Control": "public, max-age=86400, immutable",
};

/**
 * GET /api/track/[id]
 *
 * Resolves the track key in Supabase, then 302-redirects to the R2 public URL.
 * Falls back to a Vercel-Blob proxy if R2 isn't configured yet (handy during
 * the migration window — flip R2_PUBLIC_BASE_URL on Vercel and the route
 * automatically prefers R2).
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  let key = KEY_CACHE.get(id);
  if (!key) {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("tracks")
      .select("blob_url")
      .eq("id", id)
      .maybeSingle();
    if (error || !data) {
      return new NextResponse("Track not found", { status: 404 });
    }
    key = data.blob_url as string;
    KEY_CACHE.set(id, key);
  }

  // Primary path: R2 public URL — let the browser fetch directly, no Vercel
  // compute in the audio loop.
  const r2 = r2PublicUrl(key);
  if (r2) {
    return NextResponse.redirect(r2, { status: 302, headers: REDIRECT_CACHE_HEADERS });
  }

  // Fallback: legacy Vercel Blob proxy. This branch keeps the site working
  // until R2_PUBLIC_BASE_URL is set on Vercel + tracks are copied over.
  return proxyFromVercelBlob(req, id, key);
}

async function proxyFromVercelBlob(req: NextRequest, id: string, key: string) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return new NextResponse(
      "Neither R2_PUBLIC_BASE_URL nor BLOB_READ_WRITE_TOKEN is configured",
      { status: 500 },
    );
  }

  const now = Date.now();
  let resolved = BLOB_URL_CACHE.get(id);
  if (!resolved || now - resolved.resolvedAt > BLOB_TTL_MS) {
    try {
      const info = await head(key, { token });
      resolved = { url: info.url, resolvedAt: now };
      BLOB_URL_CACHE.set(id, resolved);
    } catch (e) {
      return new NextResponse(
        `Blob lookup failed: ${e instanceof Error ? e.message : "unknown"}`,
        { status: 502 },
      );
    }
  }

  const range = req.headers.get("range");
  const upstream = await fetch(resolved.url, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(range ? { Range: range } : {}),
    },
  });

  if (!upstream.ok && upstream.status !== 206) {
    if (upstream.status === 401 || upstream.status === 403) {
      BLOB_URL_CACHE.delete(id);
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
  headers.set("cache-control", "public, max-age=86400, immutable");

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers,
  });
}
