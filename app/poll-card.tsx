"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { castVote, refreshCounts, skipPoll } from "./actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { emojisFor } from "@/lib/emojis";
import { paletteFor } from "@/lib/palette";
import { palettePreviewFromCosmetic } from "@/lib/cosmetics";
import AnimatedNumber from "./animated-number";
import { useT, useLocale } from "./locale-context";
import { trackEvent } from "@/lib/analytics";
import { haptic } from "@/lib/haptics";
import { getViralCopy } from "@/lib/viral-copy";
import { REVEAL_COPY } from "@/lib/reveal-copy";
import type { Locale } from "@/lib/i18n";

// Confetti is only rendered after a vote — load its 4 kB of keyframe + emoji
// pool data lazily so the home/discover feed doesn't pay for it up-front.
const Confetti = dynamic(() => import("./confetti"), { ssr: false });

// Inject vote-flow micro-animations once. We define our own classes so this
// component keeps working even if the shared `.shimmer` from globals.css
// hasn't landed yet — the names are namespaced (`moomz-*`) to avoid collisions.
// If a `.shimmer` later exists in globals.css we keep this fallback locally
// scoped via class names; no override of the shared class.
const VOTE_FLOW_STYLE_ID = "moomz-vote-flow-style";
function ensureVoteFlowStyle() {
  if (typeof document === "undefined") return;
  if (document.getElementById(VOTE_FLOW_STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = VOTE_FLOW_STYLE_ID;
  el.textContent = `
@keyframes moomz-shimmer-sweep {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.moomz-shimmer {
  background-image: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0) 65%
  );
  background-size: 200% 100%;
  animation: moomz-shimmer-sweep 1.4s ease-in-out infinite;
  will-change: background-position;
}
/* Smoothly tween the result bars from 0 → target on mount and on every
   realtime update. Cubic-ease-out, ~400ms. */
.moomz-bar {
  transition: width 420ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: width;
}
@keyframes moomz-emoji-pulse {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.35); }
  60%  { transform: scale(0.92); }
  100% { transform: scale(1); }
}
.moomz-emoji-pulse {
  display: inline-block;
  animation: moomz-emoji-pulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}
@media (prefers-reduced-motion: reduce) {
  .moomz-shimmer { animation: none; }
  .moomz-bar { transition: none; }
  .moomz-emoji-pulse { animation: none; }
}
`;
  document.head.appendChild(el);
}

type Props = {
  pollId: string;
  slug: string;
  question: string;
  options: string[];
  initialVoteCount: number;
  alreadyVoted: number | null;
  isHot?: boolean;
  isLive?: boolean;
  isNew?: boolean;
  isRising?: boolean;
  // If the poll author has an equipped cosmetic palette, callers may pass it
  // here to override the per-slug hashed palette used for the question
  // gradient. Accepts a `cosmetic_id` string (e.g. "ocean", "galaxy") matching
  // a `PaletteId` in lib/cosmetics.ts. Unknown / "auto" / null → fall back to
  // paletteFor(slug).
  authorCosmeticId?: string | null;
  // Internal links to the SEO / keyword pages this poll's topic belongs to.
  // Computed server-side (lib/seo/match-poll.ts) and passed in as plain data
  // because this is a client component. The single `primary` entry renders as
  // a bold "source" badge; the rest as small chips. Empty/undefined → nothing.
  relatedPages?: { label: string; href: string; emoji?: string; primary?: boolean }[];
  onSkip?: () => void;
  onVoted?: () => void;
};

export default function PollCard({
  pollId,
  slug,
  question,
  options,
  initialVoteCount,
  alreadyVoted,
  isHot,
  isLive,
  isNew,
  isRising,
  authorCosmeticId,
  relatedPages,
  onSkip,
  onVoted,
}: Props) {
  const [skipped, setSkipped] = useState(false);
  const t = useT();
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[] | null>(null);
  const [total, setTotal] = useState<number>(initialVoteCount);
  const [confettiKey, setConfettiKey] = useState(0);
  const [bumpKey, setBumpKey] = useState<{ idx: number; k: number } | null>(null);
  // One flame burst at most per option — keyed by option index. A fresh
  // realtime vote on an option REPLACES any in-flight flame there (new `id`
  // remounts the element, restarting the CSS keyframe) instead of stacking a
  // second 🔥 at the identical `right-3 top-1/2` position. Each flame carries
  // a small random offset + rotation so even rapid sequential bursts fan out.
  const [flames, setFlames] = useState<
    Record<number, { id: number; dx: number; dy: number; rot: number } | undefined>
  >({});
  const [pointsToast, setPointsToast] = useState<{ k: number; gained: number; mult: number } | null>(null);
  const [reveal, setReveal] = useState<{ isMajority: boolean; isRebel: boolean; userPct: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Toggled to true one tick after the user votes so the bars tween from 0 → target width
  // instead of snapping to 100% on the chosen option.
  const [barsArmed, setBarsArmed] = useState(false);
  // Triggers a CSS pulse on the chosen option's emoji on click.
  const [emojiPulse, setEmojiPulse] = useState<{ idx: number; k: number } | null>(null);
  const myVoterIdRef = useRef<string | null>(null);
  const flameIdRef = useRef(0);
  const rootRef = useRef<HTMLElement | null>(null);
  const preloadInFlightRef = useRef(false);

  useEffect(() => {
    ensureVoteFlowStyle();
  }, []);

  // If the user landed already-voted, arm the bars right away so they render
  // at their final width on first paint (no 0% → target sweep on every reload).
  // Also arm the bars once counts arrive after a vote, in case the optimistic
  // requestAnimationFrame chain was raced by the server response.
  useEffect(() => {
    if (voted !== null && counts && !barsArmed) {
      const id = requestAnimationFrame(() => setBarsArmed(true));
      return () => cancelAnimationFrame(id);
    }
  }, [voted, counts, barsArmed]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Only call setState when the value actually flips — IntersectionObserver
          // can fire multiple events with the same isIntersecting during fast scroll,
          // and unnecessary re-renders would re-evaluate the realtime/preload effects.
          setIsVisible((prev) => (prev === e.isIntersecting ? prev : e.isIntersecting));
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showResults = voted !== null;
  const EMOJIS = emojisFor(slug, options.length);
  // Prefer the author's equipped cosmetic palette when present; otherwise fall
  // back to the per-slug hashed palette so existing polls keep their look.
  const pal = palettePreviewFromCosmetic(authorCosmeticId) ?? paletteFor(slug);
  const locale = useLocale();
  const vc = getViralCopy(locale);
  const rc = REVEAL_COPY[locale as Locale] ?? REVEAL_COPY.en;

  useEffect(() => {
    const match =
      typeof document !== "undefined"
        ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
        : null;
    myVoterIdRef.current = match ? decodeURIComponent(match[1]) : null;
  }, []);

  // Preload counts only when the card scrolls into view — avoids hammering
  // the DB with 50 simultaneous queries on long feeds like /discover.
  // The in-flight ref ensures we don't fire duplicate fetches if isVisible
  // toggles rapidly (e.g. during fast snap-scrolling) before the first request
  // resolves and populates `counts`.
  useEffect(() => {
    if (counts || !isVisible || preloadInFlightRef.current) return;
    let cancelled = false;
    preloadInFlightRef.current = true;
    refreshCounts(pollId, options.length)
      .then((res) => {
        if (cancelled) return;
        setCounts(res.counts);
        setTotal(res.total);
      })
      .finally(() => {
        preloadInFlightRef.current = false;
      });
    return () => {
      cancelled = true;
    };
  }, [pollId, options.length, counts, isVisible]);

  useEffect(() => {
    if (!showResults || !isVisible) return;
    const supabase = getBrowserSupabase();
    const channel = supabase
      .channel(`card-${pollId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "votes",
          filter: `poll_id=eq.${pollId}`,
        },
        (payload) => {
          const row = payload.new as { voter_id?: string; option_index?: number };
          if (row.voter_id && row.voter_id === myVoterIdRef.current) return;
          if (typeof row.option_index !== "number") return;
          const idx = row.option_index;
          setCounts((c) => {
            if (!c) return c;
            const next = [...c];
            next[idx] = (next[idx] ?? 0) + 1;
            return next;
          });
          setTotal((t) => t + 1);
          setBumpKey({ idx, k: Date.now() });
          const fid = ++flameIdRef.current;
          const flame = {
            id: fid,
            dx: Math.round((Math.random() - 0.5) * 22),
            dy: Math.round((Math.random() - 0.5) * 14),
            rot: Math.round((Math.random() - 0.5) * 24),
          };
          // Replace (not append) the flame for this option so concurrent
          // realtime votes on the same option never pile up at one spot.
          setFlames((f) => ({ ...f, [idx]: flame }));
          setTimeout(
            () =>
              setFlames((f) => (f[idx]?.id === fid ? { ...f, [idx]: undefined } : f)),
            1200,
          );
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [showResults, pollId, isVisible]);

  const vote = (i: number) => {
    if (voted !== null || pending) return;
    haptic("vote");
    setVoted(i);
    setEmojiPulse({ idx: i, k: Date.now() });
    setTotal((t) => t + 1);
    // Optimistic: increment the chosen option on top of current counts (which
    // were preloaded on mount). If counts haven't loaded yet, fall back to a
    // neutral starting array so we don't pretend it's 100%.
    setCounts((c) => {
      if (c) {
        const next = [...c];
        next[i] = (next[i] ?? 0) + 1;
        return next;
      }
      return options.map(() => 0).map((_, idx) => (idx === i ? 1 : 0));
    });
    setConfettiKey((k) => k + 1);
    // Arm bars on the next frame so the first paint has width:0 and the second
    // paint transitions to the target percentage (smooth 0 → target tween).
    setBarsArmed(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarsArmed(true));
    });

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        trackEvent("vote", { slug, source: "feed-card" });
        setCounts(res.counts);
        setTotal(res.total);
        setPointsToast({ k: Date.now(), gained: res.points.gained, mult: res.points.multiplier });
        setTimeout(() => setPointsToast(null), 1600);
        setReveal({ isMajority: res.reveal.isMajority, isRebel: res.reveal.isRebel, userPct: res.reveal.userPct });
        haptic(res.reveal.isRebel ? "rebel" : res.reveal.isMajority ? "majority" : "tap");
        window.dispatchEvent(
          new CustomEvent("moomz:vote", {
            detail: {
              gained: res.points.gained,
              total: res.points.total,
              streak: res.points.current,
              multiplier: res.points.multiplier,
            },
          }),
        );
        if (res.achievements.length > 0) {
          window.dispatchEvent(
            new CustomEvent("moomz:achievements", { detail: { ids: res.achievements } }),
          );
        }
        window.dispatchEvent(
          new CustomEvent("moomz:coins", {
            detail: { balance: res.coins.balance, gained: res.coins.gained },
          }),
        );
        if (onVoted) setTimeout(onVoted, 1800);
      } catch (e) {
        alert(e instanceof Error ? e.message : "Error");
        setVoted(null);
        setCounts(null);
        setTotal(initialVoteCount);
      }
    });
  };

  return (
    <article
      ref={rootRef as React.RefObject<HTMLElement>}
      aria-labelledby={`poll-${slug}`}
      className="glass rounded-2xl p-4 sm:p-5 space-y-3.5 relative overflow-hidden"
    >
      <Confetti trigger={confettiKey} />
      {pointsToast && (
        <div
          key={pointsToast.k}
          className="points-float absolute left-1/2 top-1/2 z-20 text-2xl sm:text-3xl font-extrabold tracking-tighter bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow"
        >
          +{pointsToast.gained}{" "}
          {pointsToast.mult > 1 && (
            <span className="text-base text-pink-300">×{pointsToast.mult}</span>
          )}
        </div>
      )}


      <div className="space-y-2">
        {(isNew || isHot || isRising || isLive) && (
          <div className="flex flex-wrap items-center gap-1.5">
            {isNew && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 text-cyan-100 whitespace-nowrap">
                ✨ new
              </span>
            )}
            {isHot && !isNew && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 border border-orange-400/50 text-orange-100 whitespace-nowrap">
                {t("card.hot")}
              </span>
            )}
            {isRising && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50 text-purple-100 whitespace-nowrap">
                📈 rising
              </span>
            )}
            {isLive && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-emerald-100 whitespace-nowrap">
                <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                {t("card.live")}
              </span>
            )}
          </div>
        )}
        <h3
          id={`poll-${slug}`}
          className="text-xl sm:text-2xl font-bold leading-tight text-balance break-words bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${pal.c1}, #ffffff 55%, ${pal.c2})`,
          }}
        >
          {question}
        </h3>
      </div>

      <div className="space-y-2">
        {options.map((opt, i) => {
          const c = counts?.[i] ?? 0;
          const pct = counts && total > 0 ? Math.round((c / total) * 100) : 0;
          const isMine = voted === i;
          const isPulsing = emojiPulse?.idx === i;

          if (!showResults) {
            // Counts haven't landed yet — overlay a subtle shimmer that fades out
            // the moment counts arrive. Height matches the voted row exactly so
            // there is no layout shift on transition.
            const isLoading = !counts && isVisible;
            return (
              <button
                key={i}
                onClick={() => vote(i)}
                disabled={pending}
                aria-label={`Vote for: ${opt}`}
                className="relative overflow-hidden w-full min-h-[44px] text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.01] active:scale-[0.97] transition px-3 py-3 flex items-center gap-2.5 disabled:opacity-50"
              >
                <span
                  aria-hidden
                  className="moomz-shimmer pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-200"
                  style={{ opacity: isLoading ? 1 : 0 }}
                />
                <span
                  key={isPulsing ? emojiPulse!.k : undefined}
                  className={`relative text-lg shrink-0 ${isPulsing ? "moomz-emoji-pulse" : ""}`}
                  aria-hidden
                >
                  {EMOJIS[i]}
                </span>
                <span className="relative font-medium text-sm sm:text-base break-words min-w-0">{opt}</span>
              </button>
            );
          }

          const fireForThis = flames[i];
          // Tween from 0 → pct on the first paint after voting; subsequent
          // realtime updates animate via the CSS `transition: width` rule.
          const renderedPct = barsArmed ? pct : 0;
          return (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl border min-h-[44px] ${
                isMine ? "border-pink-400/60" : "border-white/10"
              } bg-white/5 px-3 py-3`}
            >
              <div
                className={`moomz-bar absolute inset-y-0 left-0 ${
                  isMine
                    ? "bg-gradient-to-r from-pink-500/40 to-purple-500/40"
                    : "bg-white/[0.08]"
                }`}
                style={{ width: `${renderedPct}%` }}
              />
              <div className="relative flex justify-between items-center gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span
                    key={isPulsing ? emojiPulse!.k : undefined}
                    className={`text-lg shrink-0 ${isPulsing ? "moomz-emoji-pulse" : ""}`}
                    aria-hidden
                  >
                    {EMOJIS[i]}
                  </span>
                  <span className="font-semibold truncate text-sm sm:text-base min-w-0">{opt}</span>
                  {isMine && (
                    <span className="text-pink-300 text-[10px] uppercase tracking-wide shrink-0">
                      {t("card.you")}
                    </span>
                  )}
                </div>
                <span
                  key={bumpKey?.idx === i ? bumpKey.k : undefined}
                  className={`tabular-nums text-sm font-semibold text-white/80 shrink-0 ${
                    bumpKey?.idx === i ? "count-bump" : ""
                  }`}
                >
                  <AnimatedNumber value={pct} />%
                </span>
              </div>
              {fireForThis && (
                <span
                  key={fireForThis.id}
                  className="flame-burst absolute right-2 top-1/2 text-2xl"
                  style={{
                    ["--fx" as string]: `${fireForThis.dx}px`,
                    ["--fy" as string]: `${fireForThis.dy}px`,
                    ["--frot" as string]: `${fireForThis.rot}deg`,
                  }}
                  aria-hidden
                >
                  🔥
                </span>
              )}
            </div>
          );
        })}
      </div>

      {reveal && (
        <div
          className={`rounded-xl px-3 py-2 text-sm font-semibold text-center border ${
            reveal.isRebel
              ? "bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-400/40 text-orange-200"
              : reveal.isMajority
              ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/40 text-emerald-200"
              : "bg-white/5 border-white/15 text-white/70"
          }`}
        >
          {reveal.isRebel
            ? rc.rebel(reveal.userPct)
            : reveal.isMajority
            ? rc.majority(reveal.userPct)
            : rc.split(reveal.userPct)}
        </div>
      )}

      {showResults && (
        <Link
          href="/"
          onClick={() => trackEvent("create_cta_click", { source: "after-vote-card" })}
          className="flex items-center justify-between gap-2 rounded-xl border border-pink-400/30 bg-gradient-to-r from-pink-500/15 to-purple-500/10 px-3 py-2.5 transition hover:from-pink-500/25 hover:to-purple-500/20 active:scale-[0.98]"
        >
          <span className="text-sm font-semibold text-white">{vc.ctaTitle}</span>
          <span className="whitespace-nowrap text-xs font-bold text-pink-200">
            {vc.ctaButton} →
          </span>
        </Link>
      )}

      <div className="flex items-center justify-between text-xs text-white/40 pt-0.5">
        <span className="tabular-nums">
          <AnimatedNumber value={total} /> {total > 1 ? t("card.votes") : t("card.vote")}
        </span>
        <div className="flex items-center -mr-2">
          {!showResults && (
            <button
              onClick={() => {
                haptic("tap");
                setSkipped(true);
                skipPoll(slug).catch(() => {});
                if (onSkip) setTimeout(onSkip, 200);
              }}
              className="min-h-[44px] px-3 inline-flex items-center hover:text-white transition"
            >
              {t("card.skip")}
            </button>
          )}
          <Link
            href={`/${slug}`}
            prefetch={true}
            aria-label={`${t("card.detail")} → ${question}`}
            className="min-h-[44px] px-3 inline-flex items-center gap-1 hover:text-white transition"
          >
            {t("card.detail")}
          </Link>
        </div>
      </div>
      {relatedPages && relatedPages.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-white/[0.07]">
          {relatedPages.map((r) =>
            r.primary ? (
              <Link
                key={r.href}
                href={r.href}
                aria-label={`${t("card.relatedSource")}: ${r.label}`}
                className="group inline-flex items-center gap-1.5 min-h-[32px] rounded-full pl-2 pr-3 py-1 text-xs font-bold bg-gradient-to-r from-pink-500/25 to-purple-500/25 border border-pink-400/50 text-pink-50 hover:from-pink-500/40 hover:to-purple-500/40 hover:scale-[1.04] active:scale-[0.97] transition shadow-[0_2px_10px_rgba(236,72,153,0.25)]"
              >
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-pink-400/30 text-pink-100">
                  {t("card.relatedSource")}
                </span>
                {r.emoji ? <span aria-hidden>{r.emoji}</span> : null}
                <span className="max-w-[11rem] truncate">{r.label}</span>
              </Link>
            ) : (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1 min-h-[32px] rounded-full px-2.5 py-1 text-xs font-medium bg-white/[0.06] border border-white/10 text-white/70 hover:bg-white/[0.12] hover:text-white hover:border-pink-400/40 active:scale-[0.97] transition"
              >
                {r.emoji ? <span aria-hidden>{r.emoji}</span> : null}
                <span className="max-w-[8rem] truncate">{r.label}</span>
              </Link>
            ),
          )}
        </div>
      )}
      {skipped && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 rounded-2xl">
          {t("card.passed")}
        </div>
      )}
    </article>
  );
}
