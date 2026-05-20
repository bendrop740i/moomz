import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// Escape the PostgREST/SQL LIKE wildcards so user input is matched literally.
function escapeLike(input: string): string {
  return input.replace(/[\\%_]/g, (ch) => `\\${ch}`);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").trim();

  // Guard empty / too-short queries — avoids matching everything.
  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const supabase = getSupabase();
    // polls_with_stats already excludes dead polls (is_dead is not exposed
    // by the view at all — it is filtered inside the view definition).
    const { data, error } = await supabase
      .from("polls_with_stats")
      .select("slug,question,options,vote_count")
      .ilike("question", `%${escapeLike(q)}%`)
      .order("vote_count", { ascending: false })
      .limit(20);

    if (error) {
      return NextResponse.json({ results: [] });
    }

    return NextResponse.json({ results: data ?? [] });
  } catch {
    return NextResponse.json({ results: [] });
  }
}
