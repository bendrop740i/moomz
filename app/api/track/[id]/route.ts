import { NextResponse, type NextRequest } from "next/server";
import { head } from "@vercel/blob";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Streams a private Vercel Blob track to the client by proxying the bytes
// with our BLOB_READ_WRITE_TOKEN. Range requests pass through so HTML audio
// elements can seek normally.
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("tracks")
    .select("blob_url")
    .eq("id", params.id)
    .maybeSingle();

  if (error || !data) {
    return new NextResponse("Track not found", { status: 404 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return new NextResponse("Blob token not configured", { status: 500 });
  }

  // Resolve pathname → private blob URL.
  let blobUrl: string;
  try {
    const info = await head(data.blob_url, { token });
    blobUrl = info.url;
  } catch (e) {
    return new NextResponse(
      `Blob lookup failed: ${e instanceof Error ? e.message : "unknown"}`,
      { status: 502 },
    );
  }

  const range = req.headers.get("range");
  const upstream = await fetch(blobUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(range ? { Range: range } : {}),
    },
  });

  if (!upstream.ok && upstream.status !== 206) {
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
  headers.set("cache-control", "public, max-age=3600");

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers,
  });
}
