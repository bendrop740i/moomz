import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import DiscoverFeed from "./discover-feed";

export const dynamic = "force-dynamic";

type TrendingRow = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
  vote_count: number;
  recent_votes: number;
  trending_score: number;
  last_vote_at: string | null;
};

export default async function DiscoverPage() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  const supabase = getSupabase();
  const { data } = await supabase
    .from("polls_trending")
    .select("id,slug,question,options,created_at,vote_count,recent_votes,trending_score,last_vote_at")
    .order("trending_score", { ascending: false })
    .limit(40);

  const rows = (data as TrendingRow[]) ?? [];
  const skipped = new Set(readSlugHistory("moomz_skipped_slugs"));
  const voted = new Set(readSlugHistory("moomz_voted_slugs"));
  const jar = cookies();

  const enrich = (r: TrendingRow) => {
    const votedRaw = jar.get(`moomz_voted_${r.slug}`)?.value;
    const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;
    return { ...r, alreadyVoted };
  };
  const fresh = rows.filter((r) => !voted.has(r.slug) && !skipped.has(r.slug)).map(enrich);
  const seenAgain = rows.filter((r) => voted.has(r.slug) && !skipped.has(r.slug)).map(enrich);
  const polls = [...fresh, ...seenAgain];

  const topScore = rows[0]?.trending_score ?? 0;

  return (
    <div className="fade-up -mx-5 -mt-8 sm:-mt-12 -mb-28">
      <header className="absolute left-0 right-0 top-0 z-20 px-5 pt-[calc(env(safe-area-inset-top)+0.5rem)] pb-3 flex items-center justify-between bg-gradient-to-b from-[#0b0613]/80 via-[#0b0613]/40 to-transparent backdrop-blur-sm pointer-events-none">
        <h1 className="font-display text-2xl sm:text-3xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent pointer-events-auto">
          {tx("discover.title")}
        </h1>
        <span className="text-[10px] uppercase tracking-widest text-white/50 pointer-events-auto">
          {polls.length} {tx("discover.count")}
          {polls.length > 1 ? "s" : ""}
        </span>
      </header>
      <DiscoverFeed polls={polls} topScore={topScore} />
    </div>
  );
}
