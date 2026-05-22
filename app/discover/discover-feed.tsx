"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import DiscoverCard from "./discover-card";
import { useT, useLocale } from "../locale-context";
import { trackEvent } from "@/lib/analytics";
import { getViralCopy } from "@/lib/viral-copy";

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
  authorCosmeticId?: string | null;
};

export default function DiscoverFeed({
  polls: initialPolls,
  topScore,
  firstInitialVoteCount,
}: {
  polls: Poll[];
  topScore: number;
  /**
   * Server-prefetched authoritative vote count for the first poll — lets the
   * first card paint a real number immediately instead of a 0 while the
   * client-side count preload catches up.
   */
  firstInitialVoteCount?: number;
}) {
  const t = useT();
  const locale = useLocale();

  // Bake the server-prefetched count into the first poll so the lead card
  // shows it on the very first paint.
  const seeded = useMemo<Poll[]>(() => {
    if (initialPolls.length === 0 || firstInitialVoteCount === undefined) {
      return initialPolls;
    }
    const [head, ...rest] = initialPolls;
    return [{ ...head, vote_count: firstInitialVoteCount }, ...rest];
  }, [initialPolls, firstInitialVoteCount]);

  const [polls, setPolls] = useState<Poll[]>(seeded);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight);
      setActiveIdx(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const skip = (slug: string) => {
    setPolls((curr) => curr.filter((p) => p.slug !== slug));
  };

  // Glide to the next slide — used on vote (auto-advance) and on skip.
  const scrollToNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const target = el.children[activeIdx + 1] as HTMLElement | undefined;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      el.scrollTo({ top: el.scrollTop + el.clientHeight, behavior: "smooth" });
    }
  };

  const vc = getViralCopy(locale);

  if (polls.length === 0) {
    return (
      <div className="fade-up flex min-h-[70dvh] flex-col items-center justify-center gap-5 px-6 py-10 pt-[calc(env(safe-area-inset-top)+4rem)] text-center">
        <div className="animate-bounce text-7xl drop-shadow-[0_8px_24px_rgba(236,72,153,0.35)] sm:text-8xl">
          🎉
        </div>
        <p className="font-display bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-3xl tracking-tight text-transparent">
          {t("discover.empty")}
        </p>
        <p className="max-w-xs text-sm text-white/50">{t("discover.emptyHint")}</p>
        <Link
          href="/"
          className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.03] active:scale-[0.98]"
        >
          {t("discover.create")}
        </Link>
      </div>
    );
  }

  const now = Date.now();

  // Inject a "your turn" create prompt every 5 polls — catch the user mid-flow.
  type Slide =
    | { kind: "poll"; poll: Poll; pollIndex: number }
    | { kind: "cta"; ctaIndex: number };
  const slides: Slide[] = [];
  polls.forEach((p, i) => {
    slides.push({ kind: "poll", poll: p, pollIndex: i });
    if ((i + 1) % 5 === 0 && i + 1 < polls.length) {
      slides.push({ kind: "cta", ctaIndex: i });
    }
  });

  return (
    <div
      ref={containerRef}
      className="scrollbar-hide h-[100dvh] snap-y snap-mandatory overflow-y-scroll overscroll-y-contain"
      style={{ scrollSnapStop: "always", WebkitOverflowScrolling: "touch" }}
    >
      {slides.map((slide) => {
        if (slide.kind === "cta") {
          return (
            <section
              key={`cta-${slide.ctaIndex}`}
              className="relative h-[100dvh] snap-start overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"
              />
              <div aria-hidden className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 px-8 pb-[calc(env(safe-area-inset-bottom)+6rem)] pt-[calc(env(safe-area-inset-top)+3.5rem)] text-center">
                <div className="text-7xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" aria-hidden>
                  👀
                </div>
                <div className="font-display text-4xl leading-tight tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
                  {vc.ctaTitle}
                </div>
                <p className="max-w-xs text-sm text-white/80">{vc.ctaSub}</p>
                <Link
                  href="/"
                  onClick={() =>
                    trackEvent("create_cta_click", { source: "discover-interstitial" })
                  }
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-base font-extrabold text-[#0b0613] shadow-xl shadow-black/30 transition hover:scale-[1.04] active:scale-[0.97]"
                >
                  {vc.ctaButton}
                </Link>
              </div>
            </section>
          );
        }

        const p = slide.poll;
        const i = slide.pollIndex;
        const isHot = topScore > 0 && p.trending_score >= topScore * 0.6 && p.vote_count >= 3;
        const isNew = now - new Date(p.created_at).getTime() < 30 * 60_000;
        const isRising = (p.recent_votes ?? 0) >= 4 && !isNew;
        const isLive = p.last_vote_at
          ? now - new Date(p.last_vote_at).getTime() < 90_000
          : false;
        return (
          <section key={p.id} className="h-[100dvh] snap-start">
            <DiscoverCard
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
              authorCosmeticId={p.authorCosmeticId ?? null}
              index={i + 1}
              feedSize={polls.length}
              onSkip={() => skip(p.slug)}
              onVoted={scrollToNext}
            />
          </section>
        );
      })}
    </div>
  );
}
