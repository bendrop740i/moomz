"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { castVote, refreshCounts, skipPoll } from "../actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { emojisFor } from "@/lib/emojis";
import { paletteFor } from "@/lib/palette";
import { palettePreviewFromCosmetic } from "@/lib/cosmetics";
import { REVEAL_COPY } from "@/lib/reveal-copy";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";
import AnimatedNumber from "../animated-number";
import { useT, useLocale } from "../locale-context";

// Confetti pulls ~4 kB of keyframe / emoji data — only needed after a vote, so
// load it lazily and keep the feed scroll cheap.
const Confetti = dynamic(() => import("../confetti"), { ssr: false });

// Small bottom-row action button — share / skip / open. Frosted so it reads on
// top of the vivid colour wash.
const ACTION_PILL =
  "inline-flex min-h-[34px] items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 text-[11px] font-bold uppercase tracking-wide text-white/85 backdrop-blur-md transition hover:bg-black/60 active:scale-95";

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
  authorCosmeticId?: string | null;
  /** 1-based position of this poll in the feed (for the "3 / 40" cue). */
  index: number;
  feedSize: number;
  onSkip?: () => void;
  onVoted?: () => void;
};

export default function DiscoverCard({
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
  index,
  feedSize,
  onSkip,
  onVoted,
}: Props) {
  const t = useT();
  const locale = useLocale();
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[] | null>(null);
  const [total, setTotal] = useState<number>(initialVoteCount);
  const [confettiKey, setConfettiKey] = useState(0);
  const [reveal, setReveal] = useState<{ isMajority: boolean; isRebel: boolean; userPct: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Armed one frame after a vote so the result bars tween 0 → pct.
  const [barsArmed, setBarsArmed] = useState(false);
  const [emojiPulse, setEmojiPulse] = useState<{ idx: number; k: number } | null>(null);
  const [bumpKey, setBumpKey] = useState<{ idx: number; k: number } | null>(null);
  const [pointsToast, setPointsToast] = useState<{ k: number; gained: number; mult: number } | null>(null);
  const [skipped, setSkipped] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const myVoterIdRef = useRef<string | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const preloadInFlightRef = useRef(false);
  // Mirror of `isVisible` so the post-vote auto-advance can read it without
  // re-arming a timeout on every visibility flip.
  const isVisibleRef = useRef(false);

  const showResults = voted !== null;
  const EMOJIS = emojisFor(slug, options.length);
  // The author's equipped cosmetic palette wins; otherwise the per-slug hashed
  // palette gives each poll its own colour identity in the feed.
  const pal = palettePreviewFromCosmetic(authorCosmeticId) ?? paletteFor(slug);
  const rc = REVEAL_COPY[locale as Locale] ?? REVEAL_COPY.en;

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  // This browser's voter id — so the realtime channel ignores echoes of our
  // own vote (we already counted it optimistically).
  useEffect(() => {
    const m =
      typeof document !== "undefined"
        ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
        : null;
    myVoterIdRef.current = m ? decodeURIComponent(m[1]) : null;
  }, []);

  // Arm the bars one frame after they're due so width animates from 0.
  useEffect(() => {
    if (voted !== null && counts && !barsArmed) {
      const id = requestAnimationFrame(() => setBarsArmed(true));
      return () => cancelAnimationFrame(id);
    }
  }, [voted, counts, barsArmed]);

  // Visibility gate — keeps a 40-card feed from opening 40 queries / channels.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setIsVisible((prev) => (prev === e.isIntersecting ? prev : e.isIntersecting));
        }
      },
      { rootMargin: "150px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Preload the vote distribution as the card nears the viewport.
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

  // Live counts — only while the card is on screen and results are showing.
  useEffect(() => {
    if (!showResults || !isVisible) return;
    const supabase = getBrowserSupabase();
    const channel = supabase
      .channel(`disco-${pollId}`)
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
          setTotal((tt) => tt + 1);
          setBumpKey({ idx, k: Date.now() });
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [showResults, pollId, isVisible]);

  const vote = (i: number) => {
    if (voted !== null || pending) return;
    setVoted(i);
    setEmojiPulse({ idx: i, k: Date.now() });
    setTotal((tt) => tt + 1);
    // Optimistic bump on top of the preloaded counts.
    setCounts((c) => {
      if (c) {
        const next = [...c];
        next[i] = (next[i] ?? 0) + 1;
        return next;
      }
      return options.map((_, idx) => (idx === i ? 1 : 0));
    });
    setConfettiKey((k) => k + 1);
    setBarsArmed(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarsArmed(true));
    });

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        trackEvent("vote", { slug, source: "discover-card" });
        setCounts(res.counts);
        setTotal(res.total);
        setPointsToast({ k: Date.now(), gained: res.points.gained, mult: res.points.multiplier });
        setTimeout(() => setPointsToast(null), 1600);
        setReveal({
          isMajority: res.reveal.isMajority,
          isRebel: res.reveal.isRebel,
          userPct: res.reveal.userPct,
        });
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
        // Let the reveal breathe (~3s), then glide to the next card — but only
        // if the user is still parked here. A manual swipe cancels the glide.
        if (onVoted) {
          setTimeout(() => {
            if (isVisibleRef.current) onVoted();
          }, 3000);
        }
      } catch (e) {
        alert(e instanceof Error ? e.message : "Error");
        setVoted(null);
        setCounts(null);
        setTotal(initialVoteCount);
      }
    });
  };

  const handleSkip = () => {
    if (skipped) return;
    setSkipped(true);
    trackEvent("skip", { slug, source: "discover-card" });
    skipPoll(slug).catch(() => {});
    if (onSkip) setTimeout(onSkip, 220);
  };

  const share = async () => {
    const url = `${window.location.origin}/${slug}`;
    trackEvent("share", { slug, source: "discover-card" });
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: "moomz", text: question, url });
      } catch {
        // user cancelled the native share sheet — nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 1600);
    } catch {
      // clipboard blocked — silently ignore
    }
  };

  return (
    <article
      ref={rootRef as React.RefObject<HTMLElement>}
      aria-labelledby={`poll-${slug}`}
      className="relative h-full w-full overflow-hidden"
    >
      {/* Vivid per-poll colour wash. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: `linear-gradient(155deg, ${pal.c1} 0%, ${pal.c2} 52%, ${pal.c3} 100%)` }}
      />
      {/* Soft glow behind the question for depth. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[34%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: pal.c1 }}
      />
      {/* Dark scrim — keeps text crisp, heaviest where the vote pills sit. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90"
      />

      <Confetti trigger={confettiKey} />

      <div className="relative z-10 flex h-full flex-col">
        {/* TOP — status badges */}
        <div className="flex flex-wrap items-center gap-1.5 px-5 pt-[calc(env(safe-area-inset-top)+3.25rem)]">
          {isNew && (
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-100">
              ✨ new
            </span>
          )}
          {isHot && !isNew && (
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-orange-400/50 bg-gradient-to-r from-orange-500/30 to-pink-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-100">
              {t("card.hot")}
            </span>
          )}
          {isRising && (
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-500/30 to-pink-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-100">
              📈 rising
            </span>
          )}
          {isLive && (
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-400/50 bg-emerald-500/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-100">
              <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t("card.live")}
            </span>
          )}
        </div>

        {/* CENTER — the question, the immersive hero */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
          {pointsToast && (
            <div
              key={pointsToast.k}
              className="points-float absolute left-1/2 top-1/2 z-20 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent drop-shadow"
            >
              +{pointsToast.gained}{" "}
              {pointsToast.mult > 1 && (
                <span className="text-lg text-pink-200">×{pointsToast.mult}</span>
              )}
            </div>
          )}
          <h2
            id={`poll-${slug}`}
            className="max-w-[22rem] text-balance break-words text-[1.75rem] font-extrabold leading-[1.16] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] sm:text-[2.4rem]"
          >
            {question}
          </h2>
        </div>

        {/* BOTTOM — verdict + vote pills + meta, all inside the thumb zone */}
        <div className="space-y-2.5 px-4 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
          {reveal && (
            <div
              className={`verdict-reveal rounded-2xl border px-4 py-2.5 text-center text-[15px] font-extrabold ${
                reveal.isRebel
                  ? "border-orange-300/50 bg-orange-500/30 text-orange-50"
                  : reveal.isMajority
                    ? "border-emerald-300/50 bg-emerald-500/30 text-emerald-50"
                    : "border-white/25 bg-white/20 text-white"
              }`}
            >
              {reveal.isRebel
                ? rc.rebel(reveal.userPct)
                : reveal.isMajority
                  ? rc.majority(reveal.userPct)
                  : rc.split(reveal.userPct)}
            </div>
          )}

          <div className="space-y-2">
            {options.map((opt, i) => {
              const c = counts?.[i] ?? 0;
              const pct = counts && total > 0 ? Math.round((c / total) * 100) : 0;
              const isMine = voted === i;
              const isPulsing = emojiPulse?.idx === i;

              if (!showResults) {
                return (
                  <button
                    key={i}
                    onClick={() => vote(i)}
                    disabled={pending}
                    aria-label={`Vote: ${opt}`}
                    className="flex min-h-[52px] w-full items-center gap-3 rounded-2xl border border-white/25 bg-black/40 px-4 py-3 text-left backdrop-blur-md transition hover:border-white/50 hover:bg-black/50 active:scale-[0.97] disabled:opacity-60"
                  >
                    <span
                      key={isPulsing ? emojiPulse!.k : undefined}
                      className={`shrink-0 text-2xl ${isPulsing ? "emoji-pop" : ""}`}
                      aria-hidden
                    >
                      {EMOJIS[i]}
                    </span>
                    <span className="min-w-0 break-words text-base font-bold text-white sm:text-lg">
                      {opt}
                    </span>
                  </button>
                );
              }

              const renderedPct = barsArmed ? pct : 0;
              return (
                <div
                  key={i}
                  className={`relative min-h-[52px] overflow-hidden rounded-2xl border px-4 py-3 backdrop-blur-md ${
                    isMine ? "border-white/70 bg-black/50" : "border-white/20 bg-black/30"
                  }`}
                >
                  <div
                    className={`absolute inset-y-0 left-0 transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isMine ? "bg-gradient-to-r from-white/40 to-white/10" : "bg-white/10"
                    }`}
                    style={{ width: `${renderedPct}%` }}
                  />
                  <div className="relative flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        key={isPulsing ? emojiPulse!.k : undefined}
                        className={`shrink-0 text-2xl ${isPulsing ? "emoji-pop" : ""}`}
                        aria-hidden
                      >
                        {EMOJIS[i]}
                      </span>
                      <span className="truncate text-base font-bold text-white sm:text-lg">{opt}</span>
                      {isMine && (
                        <span className="shrink-0 rounded-full bg-white/25 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                          {t("card.you")}
                        </span>
                      )}
                    </div>
                    <span
                      key={bumpKey?.idx === i ? bumpKey.k : undefined}
                      className={`shrink-0 text-base font-extrabold tabular-nums text-white ${
                        bumpKey?.idx === i ? "count-bump" : ""
                      }`}
                    >
                      <AnimatedNumber value={pct} />%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action row — votes count + share / skip / open, thumb-reachable. */}
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 tabular-nums">
              <AnimatedNumber value={total} /> {total === 1 ? t("card.vote") : t("card.votes")}
            </span>
            <div className="flex items-center gap-1.5">
              <button onClick={share} aria-label={t("linker.share.label")} className={ACTION_PILL}>
                🔗 {t("linker.share.label")}
              </button>
              {!showResults && (
                <button onClick={handleSkip} className={ACTION_PILL}>
                  {t("card.skip")}
                </button>
              )}
              <Link
                href={`/${slug}`}
                prefetch
                onClick={() => trackEvent("discover_open_detail", { slug })}
                className={ACTION_PILL}
              >
                {t("card.detail")}
              </Link>
            </div>
          </div>

          {/* Swipe cue */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            <span className="tabular-nums">
              {index}/{feedSize}
            </span>
            <span aria-hidden>·</span>
            <span>{t("discover.swipe")}</span>
            <span className="swipe-cue" aria-hidden>
              ↑
            </span>
          </div>
        </div>
      </div>

      {shareToast && (
        <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
          {t("share.copied")} ✓
        </div>
      )}
      {skipped && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 font-bold text-white/70 backdrop-blur-sm">
          {t("card.passed")}
        </div>
      )}
    </article>
  );
}
