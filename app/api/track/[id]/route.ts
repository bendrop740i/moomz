import { NextResponse, type NextRequest } from "next/server";
import { head } from "@vercel/blob";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Returns a 302 redirect to a freshly-signed Vercel Blob URL for the track.
// Music player uses `/api/track/<id>` as the audio src; the browser follows
// the redirect each time it (re)opens the stream.
export async function GET(
  _req: NextRequest,
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

  // blob_url holds the stable pathname (e.g. "tracks/after-midnight.mp3").
  // head() resolves it to a fresh downloadUrl with a signed token.
  try {
    const info = await head(data.blob_url, {
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    const target = info.downloadUrl || info.url;
    if (!target) {
      return new NextResponse("No downloadable URL", { status: 502 });
    }
    return NextResponse.redirect(target, { status: 302 });
  } catch (e) {
    return new NextResponse(
      `Blob lookup failed: ${e instanceof Error ? e.message : "unknown"}`,
      { status: 502 },
    );
  }
}
