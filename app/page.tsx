import { cookies } from "next/headers";
import CreatePollForm from "./create-poll-form";
import PollCard from "./poll-card";
import DailyCard from "./daily-card";
import Onboarding from "./onboarding";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { parseTopicsCookie } from "@/lib/topics";

export const dynamic = "force-dynamic";

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
  image_url?: string | null;
};

async function getTrending(limit = 40): Promise<TrendingPoll[]> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_trending")
      .select("id,slug,question,options,created_at,vote_count,recent_votes,trending_score,last_vote_at,topics,image_url")
      .order("trending_score", { ascending: false })
      .limit(limit);
    return (data as TrendingPoll[]) ?? [];
  } catch {
    return [];
  }
}

async function getDailyMoomz() {
  try {
    const supabase = getSupabase();
    const today = new Date().toISOString().slice(0, 10);
    const { data: daily } = await supabase
      .from("daily_moomz")
      .select("poll_id")
      .eq("date", today)
      .maybeSingle();
    if (!daily) return null;
    const { data: poll } = await supabase
      .from("polls_with_stats")
      .select("slug,question,vote_count")
      .eq("id", daily.poll_id)
      .maybeSingle();
    return poll as { slug: string; question: string; vote_count: number } | null;
  } catch {
    return null;
  }
}

import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

export default async function HomePage() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);
  const [allPolls, daily] = await Promise.all([getTrending(40), getDailyMoomz()]);
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

  const dailyVoted = daily ? votedSet.has(daily.slug) : false;

  const top1Score = polls[0]?.trending_score ?? 0;

  return (
    <div className="space-y-7 fade-up">
      <header className="text-center space-y-1.5">
        <h1 className="font-display text-6xl sm:text-7xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,61,139,0.4)]">
          moomz
        </h1>
        <p className="text-white/50 text-sm sm:text-base text-balance">
          {tx("home.tagline")}
        </p>
      </header>

      {daily && (
        <DailyCard
          slug={daily.slug}
          question={daily.question}
          voteCount={daily.vote_count}
          alreadyVoted={dailyVoted}
        />
      )}

      <CreatePollForm />

      <Onboarding />

      {polls.length > 0 ? (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2">
              <span>{tx("home.trending")}</span>
            </h2>
            <span className="text-xs text-white/30">
              {polls.length} {tx("home.active")}
            </span>
          </div>
          <div className="space-y-3">
            {polls.map((p, i) => {
              const votedRaw = jar.get(`moomz_voted_${p.slug}`)?.value;
              const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;
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
                    alreadyVoted={alreadyVoted}
                    isHot={isHot}
                    isLive={isLive}
                    isNew={isNew}
                    isRising={isRising}
                    imageUrl={p.image_url}
                  />
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="text-center text-white/40 text-sm">
          {tx("home.empty")}
        </section>
      )}

      <p className="text-center text-xs text-white/30">{tx("home.footer")}</p>
    </div>
  );
}
