import { cookies } from "next/headers";
import CreatePollForm from "./create-poll-form";
import PollCard from "./poll-card";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type TrendingPoll = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
  vote_count: number;
  trending_score: number;
  last_vote_at: string | null;
};

async function getTrending(limit = 15): Promise<TrendingPoll[]> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_trending")
      .select("id,slug,question,options,created_at,vote_count,trending_score,last_vote_at")
      .order("trending_score", { ascending: false })
      .limit(limit);
    return (data as TrendingPoll[]) ?? [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const [polls, jar] = await Promise.all([getTrending(15), Promise.resolve(cookies())]);

  const top1Score = polls[0]?.trending_score ?? 0;

  return (
    <div className="space-y-7 fade-up">
      <header className="text-center space-y-1.5">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          moomz
        </h1>
        <p className="text-white/50 text-sm sm:text-base text-balance">
          Vote, partage, vois la vibe en live.
        </p>
      </header>

      <CreatePollForm />

      {polls.length > 0 ? (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2">
              <span>🔥 Trending</span>
            </h2>
            <span className="text-xs text-white/30">{polls.length} actifs</span>
          </div>
          <div className="space-y-3">
            {polls.map((p, i) => {
              const votedRaw = jar.get(`moomz_voted_${p.slug}`)?.value;
              const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;
              const isHot = p.trending_score >= top1Score * 0.6 && p.vote_count >= 3;
              const isLive = p.last_vote_at
                ? Date.now() - new Date(p.last_vote_at).getTime() < 90_000
                : false;
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
                  />
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="text-center text-white/40 text-sm">
          Pas encore de sondages — sois le premier.
        </section>
      )}

      <p className="text-center text-xs text-white/30">
        Gratuit · pas de compte · partage instantané
      </p>
    </div>
  );
}
