"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import DiscoverCard from "./discover-card";
import { useT, useLocale } from "../locale-context";
import { trackEvent } from "@/lib/analytics";
import { getViralCopy, pickSuggestions, suggestionHref } from "@/lib/viral-copy";
import { getSeenSet, markSeen } from "@/lib/feed/seen-store";
import { mixFeed } from "@/lib/feed/mix";
import type { FeedPoll } from "@/lib/feed/types";

export default function DiscoverFeed({ polls: initialPolls }: { polls: FeedPoll[] }) {
  const t = useT();
  const locale = useLocale();

  const [polls, setPolls] = useState<FeedPoll[]>(initialPolls);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // On mount: drop polls already seen on this device and shuffle, so every
  // app-open is a genuinely fresh feed — never "the same moomz" twice.
  useEffect(() => {
    setPolls(mixFeed(initialPolls, getSeenSet()));
  }, [initialPolls]);

  // Prefilled create deeplink — resolved post-mount so SSR/hydration match.
  const [createHref, setCreateHref] = useState("/create");
  useEffect(() => {
    const s = pickSuggestions(locale, 1)[0];
    if (s) setCreateHref(suggestionHref(s));
  }, [locale]);

  // Track the active slide from scroll position.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight);
      setActiveIdx((prev) => (prev === idx ? prev : idx));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Hot threshold — 75th percentile of vote counts in the current pool.
  const hotThreshold = useMemo(() => {
    const counts = polls
      .map((p) => p.vote_count)
      .filter((n) => n > 0)
      .sort((a, b) => a - b);
    if (counts.length === 0) return Infinity;
    return Math.max(counts[Math.floor(counts.length * 0.75)] ?? 0, 5);
  }, [polls]);

  // Build slides — the poll feed with a "your turn" create prompt every 5.
  type Slide =
    | { kind: "poll"; poll: FeedPoll; pollIndex: number }
    | { kind: "cta"; ctaIndex: number };
  const slides = useMemo<Slide[]>(() => {
    const out: Slide[] = [];
    polls.forEach((p, i) => {
      out.push({ kind: "poll", poll: p, pollIndex: i });
      if ((i + 1) % 5 === 0 && i + 1 < polls.length) {
        out.push({ kind: "cta", ctaIndex: i });
      }
    });
    return out;
  }, [polls]);

  // Remember the active poll so it's filtered out of the next app-open.
  useEffect(() => {
    const slide = slides[activeIdx];
    if (slide && slide.kind === "poll") markSeen(slide.poll.slug);
  }, [activeIdx, slides]);

  const skip = (slug: string) => {
    markSeen(slug);
    setPolls((curr) => curr.filter((p) => p.slug !== slug));
  };

  // Glide to the next slide — used on vote (auto-advance) and on skip.
  const scrollToNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const target = el.children[activeIdx + 1] as HTMLElement | undefined;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    else el.scrollTo({ top: el.scrollTop + el.clientHeight, behavior: "smooth" });
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
          href={createHref}
          onClick={() => trackEvent("create_cta_click", { source: "discover-empty" })}
          className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.03] active:scale-[0.98]"
        >
          {t("discover.create")}
        </Link>
      </div>
    );
  }

  const now = Date.now();

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
                  href={createHref}
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
        const isNew = now - new Date(p.created_at).getTime() < 30 * 60_000;
        const isHot = p.vote_count >= hotThreshold && !isNew;
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
              authorCosmeticId={p.authorCosmeticId}
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
