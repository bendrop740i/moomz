import { cookies } from "next/headers";
import PollCard from "../poll-card";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { parseTopicsCookie } from "@/lib/topics";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

type TrendingPoll = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
  vote_count: number;
  recent_votes: number;
  trending_score: number;
  last_vote_at: string | null;
  topics?: string[];
};

async function getTrending(limit = 40): Promise<TrendingPoll[]> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_trending")
      .select("id,slug,question,options,created_at,vote_count,recent_votes,trending_score,last_vote_at,topics")
      .order("trending_score", { ascending: false })
      .limit(limit);
    return (data as TrendingPoll[]) ?? [];
  } catch {
    return [];
  }
}

export default async function TrendingFeed() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  const allPolls = await getTrending(40);
  const jar = cookies();

  const votedSet = new Set(readSlugHistory("moomz_voted_slugs"));
  const skippedSet = new Set(readSlugHistory("moomz_skipped_slugs"));
  const myTopics = parseTopicsCookie(jar.get("moomz_topics")?.value);
  const myTopicsSet = new Set(myTopics);

  const matchesTopics = (p: TrendingPoll) =>
    myTopicsSet.size === 0 || (p.topics ?? []).some((t) => myTopicsSet.has(t as any));

  const fresh = allPolls.filter((p) => !votedSet.has(p.slug) && !skippedSet.has(p.slug));
  const onTopic = fresh.filter(matchesTopics);
  const offTopic = fresh.filter((p) => !matchesTopics(p));
  const alreadyVoted = allPolls.filter((p) => votedSet.has(p.slug) && !skippedSet.has(p.slug));
  const polls = [...onTopic, ...offTopic, ...alreadyVoted].slice(0, 15);

  const top1Score = polls[0]?.trending_score ?? 0;

  if (polls.length === 0) {
    return (
      <section className="text-center text-white/40 text-sm">
        {tx("home.empty")}
      </section>
    );
  }

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: tx("home.trending"),
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: Math.min(polls.length, 10),
    itemListElement: polls.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://moomz.com/${p.slug}`,
      name: p.question,
    })),
  };

  return (
    <section className="space-y-3">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2 min-w-0 truncate">
          <span>{tx("home.trending")}</span>
        </h2>
        <span className="text-xs text-white/30 tabular-nums shrink-0">
          {polls.length} {tx("home.active")}
        </span>
      </div>
      <div className="space-y-3">
        {polls.map((p, i) => {
          const votedRaw = jar.get(`moomz_voted_${p.slug}`)?.value;
          const alreadyVotedIdx = votedRaw !== undefined ? Number(votedRaw) : null;
          const isHot = p.trending_score >= top1Score * 0.6 && p.vote_count >= 3;
          const isLive = p.last_vote_at
            ? Date.now() - new Date(p.last_vote_at).getTime() < 90_000
            : false;
          const isNew = Date.now() - new Date(p.created_at).getTime() < 30 * 60_000;
          const isRising = (p.recent_votes ?? 0) >= 4 && !isNew;
          return (
            <div
              key={p.id}
              className="card-in"
              style={{ ["--i" as string]: i }}
            >
              <PollCard
                pollId={p.id}
                slug={p.slug}
                question={p.question}
                options={p.options}
                initialVoteCount={p.vote_count}
                alreadyVoted={alreadyVotedIdx}
                isHot={isHot}
                isLive={isLive}
                isNew={isNew}
                isRising={isRising}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
