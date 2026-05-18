import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slugsParam = url.searchParams.get("slugs");
  if (!slugsParam) return NextResponse.json([]);
  const slugs = slugsParam
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 50);
  if (slugs.length === 0) return NextResponse.json([]);

  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_with_stats")
      .select("slug,vote_count")
      .in("slug", slugs);
    return NextResponse.json(data ?? []);
  } catch {
    return NextResponse.json([]);
  }
}
