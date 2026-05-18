"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PollCard from "../poll-card";
import { useT } from "../locale-context";

type Poll = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
  vote_count: number;
  recent_votes: number;
  trending_score: number;
  last_vote_at: string | null;
  alreadyVoted: number | null;
};

export default function DiscoverFeed({
  polls: initialPolls,
  topScore,
}: {
  polls: Poll[];
  topScore: number;
}) {
  const t = useT();
  const [polls, setPolls] = useState<Poll[]>(initialPolls);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const slideHeight = el.clientHeight;
      const idx = Math.round(el.scrollTop / slideHeight);
      setActiveIdx(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const skip = (slug: string) => {
    setPolls((curr) => curr.filter((p) => p.slug !== slug));
  };

  const scrollToNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const slideHeight = el.clientHeight;
    el.scrollTo({ top: el.scrollTop + slideHeight, behavior: "smooth" });
  };

  if (polls.length === 0) {
    return (
      <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-4 text-center px-6">
        <div className="text-6xl">🌶️</div>
        <p className="text-white/70 text-lg">{t("discover.empty")}</p>
        <p className="text-white/40 text-sm">{t("discover.emptyHint")}</p>
        <Link
          href="/"
          className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 mt-2 hover:scale-[1.02] transition"
        >
          {t("discover.create")}
        </Link>
      </div>
    );
  }

  const now = Date.now();

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-6rem)] scrollbar-hide"
        style={{ scrollSnapStop: "always" }}
      >
        {polls.map((p, i) => {
          const isHot = topScore > 0 && p.trending_score >= topScore * 0.6 && p.vote_count >= 3;
          const isNew = now - new Date(p.created_at).getTime() < 30 * 60_000;
          const isRising = (p.recent_votes ?? 0) >= 4 && !isNew;
          const isLive = p.last_vote_at
            ? now - new Date(p.last_vote_at).getTime() < 90_000
            : false;
          return (
            <section
              key={p.id}
              className="snap-start h-[calc(100vh-6rem)] flex items-center justify-center px-1 py-3"
            >
              <div className="w-full">
                <PollCard
                  pollId={p.id}
                  slug={p.slug}
                  question={p.question}
                  options={p.options}
                  initialVoteCount={p.vote_count}
                  alreadyVoted={p.alreadyVoted}
                  isHot={isHot}
                  isLive={isLive}
                  isNew={isNew}
                  isRising={isRising}
                  onSkip={() => skip(p.slug)}
                  onVoted={scrollToNext}
                />
                <div className="mt-3 text-center text-[11px] uppercase tracking-widest text-white/30">
                  {i + 1} / {polls.length} · {t("discover.swipe")}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-1.5">
        {polls.map((_, i) => (
          <span
            key={i}
            className={`block w-1 rounded-full transition-all ${
              i === activeIdx ? "h-6 bg-pink-400" : "h-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
