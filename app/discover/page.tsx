import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import DiscoverFeed from "./discover-feed";

export const dynamic = "force-dynamic";

type TrendingRow = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
  trending_score: number;
};

export default async function DiscoverPage() {
  const supabase = getSupabase();
  const { data } = await supabase
    .from("polls_trending")
    .select("id,slug,question,options,vote_count,trending_score")
    .order("trending_score", { ascending: false })
    .limit(50);

  const rows = (data as TrendingRow[]) ?? [];
  const skipped = new Set(readSlugHistory("moomz_skipped_slugs"));
  const jar = cookies();

  const polls = rows
    .filter((r) => !skipped.has(r.slug))
    .map((r) => {
      const votedRaw = jar.get(`moomz_voted_${r.slug}`)?.value;
      const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;
      return { ...r, alreadyVoted };
    });

  const topScore = rows[0]?.trending_score ?? 0;

  return (
    <div className="fade-up -mx-5 -mt-8 sm:-mt-12">
      <header className="px-5 pb-3 pt-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          discover
        </h1>
        <span className="text-[10px] uppercase tracking-widest text-white/40">
          {polls.length} sondage{polls.length > 1 ? "s" : ""}
        </span>
      </header>
      <DiscoverFeed polls={polls} topScore={topScore} />
    </div>
  );
}
