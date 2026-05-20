"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import PollCard from "../poll-card";
import { useT, useLocale } from "../locale-context";
import { trackEvent } from "@/lib/analytics";
import { getViralCopy } from "@/lib/viral-copy";

// Serializable internal-link descriptor matching lib/seo/match-poll.ts's
// RelatedPage — kept inline so this client module imports no server code.
type RelatedPage = { label: string; href: string; emoji?: string; primary?: boolean };

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
  pollChips,
}: {
  polls: Poll[];
  topScore: number;
  /**
   * Server-prefetched authoritative vote count for the first poll. When the
   * server fetch lands before the trending-view aggregate updates, this gives
   * us a more accurate seed value than `polls_trending.vote_count` and lets
   * the first card render with a non-zero number on the very first paint —
   * no "blank for 500ms" while IntersectionObserver / refreshCounts catches up.
   */
  firstInitialVoteCount?: number;
  /**
   * Per-poll related SEO/keyword landing-page links, computed server-side
   * (one array per poll, same order as `polls`). Re-keyed by slug here so it
   * survives the client-side skip filter that removes polls from the feed.
   */
  pollChips?: RelatedPage[][];
}) {
  const t = useT();
  const locale = useLocale();
  // Map slug → its related-page chips so lookups stay correct after `skip`
  // mutates the polls array (index-based access would drift).
  const chipsBySlug = useMemo(() => {
    const m = new Map<string, RelatedPage[]>();
    if (pollChips) {
      initialPolls.forEach((p, i) => {
        const chips = pollChips[i];
        if (chips && chips.length > 0) m.set(p.slug, chips);
      });
    }
    return m;
  }, [initialPolls, pollChips]);
  // Bake the server-prefetched count into the first poll so the card shows it
  // immediately. The client-side refreshCounts call (gated by visibility) will
  // still re-sync per-option counts shortly after mount.
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
    const nextIdx = activeIdx + 1;
    const target = el.children[nextIdx] as HTMLElement | undefined;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      el.scrollTo({ top: el.scrollTop + el.clientHeight, behavior: "smooth" });
    }
  };

  if (polls.length === 0) {
    return (
      <div className="fade-up min-h-[70dvh] flex flex-col items-center justify-center gap-5 text-center px-6 py-10 pt-[calc(env(safe-area-inset-top)+4rem)]">
        <div className="text-7xl sm:text-8xl animate-bounce drop-shadow-[0_8px_24px_rgba(236,72,153,0.35)]">
          🎉
        </div>
        <p className="font-display text-3xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {t("discover.empty")}
        </p>
        <p className="text-white/50 text-sm max-w-xs">{t("discover.emptyHint")}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[44px] rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-7 mt-2 shadow-lg shadow-pink-500/30 hover:scale-[1.03] active:scale-[0.98] transition"
        >
          {t("discover.create")}
        </Link>
      </div>
    );
  }

  const now = Date.now();
  const vc = getViralCopy(locale);

  // Inject a "your turn" create prompt every 6 polls — catch the user mid-flow.
  type Slide =
    | { kind: "poll"; poll: Poll; pollIndex: number }
    | { kind: "cta"; ctaIndex: number };
  const slides: Slide[] = [];
  polls.forEach((p, i) => {
    slides.push({ kind: "poll", poll: p, pollIndex: i });
    if ((i + 1) % 6 === 0 && i + 1 < polls.length) {
      slides.push({ kind: "cta", ctaIndex: i });
    }
  });

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="snap-y snap-mandatory overflow-y-scroll overscroll-y-contain h-[100dvh] scrollbar-hide"
        style={{ scrollSnapStop: "always", WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((slide) => {
          if (slide.kind === "cta") {
            return (
              <section
                key={`cta-${slide.ctaIndex}`}
                className="snap-start h-[100dvh] flex items-center justify-center px-4 pt-[calc(env(safe-area-inset-top)+3.5rem)] pb-[calc(env(safe-area-inset-bottom)+5rem)]"
              >
                <div className="w-full max-w-md mx-auto glass rounded-3xl p-7 text-center space-y-5 shadow-2xl shadow-pink-500/10">
                  <div className="text-6xl" aria-hidden>
                    👀
                  </div>
                  <div className="font-display text-3xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
                    {vc.ctaTitle}
                  </div>
                  <p className="text-sm text-white/65">{vc.ctaSub}</p>
                  <Link
                    href="/"
                    onClick={() =>
                      trackEvent("create_cta_click", { source: "discover-interstitial" })
                    }
                    className="inline-flex items-center justify-center min-h-[48px] rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 shadow-lg shadow-pink-500/30 hover:scale-[1.03] active:scale-[0.98] transition"
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
            <section
              key={p.id}
              className="snap-start h-[100dvh] flex items-center justify-center px-2 pt-[calc(env(safe-area-inset-top)+3.5rem)] pb-[calc(env(safe-area-inset-bottom)+5rem)]"
            >
              <div className="w-full max-w-md mx-auto">
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
                  authorCosmeticId={p.authorCosmeticId ?? null}
                  relatedPages={chipsBySlug.get(p.slug)}
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

      <div
        aria-hidden
        className="pointer-events-none absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 hidden min-[360px]:flex flex-col gap-1.5"
      >
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block w-1 rounded-full transition-all duration-300 ease-out ${
              i === activeIdx ? "h-6 bg-pink-400" : "h-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
