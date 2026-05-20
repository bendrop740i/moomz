import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { r2PublicUrl } from "@/lib/r2";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Track rows are immutable — once a track exists its `blob_url` (R2 key) never
// changes. Cache the Supabase lookup per Lambda instance so first play hits
// the DB and every subsequent play (or range request) skips it entirely.
const KEY_CACHE = new Map<string, string>();

const REDIRECT_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=86400, immutable",
};

/**
 * GET /api/track/[id]
 *
 * Resolves the track key in Supabase, then 302-redirects to the R2 public URL.
 * The audio bytes never pass through Vercel — browser fetches directly from
 * R2's edge CDN (free egress, no function compute, no bandwidth cost).
 */
export async function GET(
  _req: Request,
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

  const r2 = r2PublicUrl(key);
  if (!r2) {
    return new NextResponse("R2_PUBLIC_BASE_URL not configured", { status: 500 });
  }
  return NextResponse.redirect(r2, { status: 302, headers: REDIRECT_CACHE_HEADERS });
}
