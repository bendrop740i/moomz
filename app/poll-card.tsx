"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { castVote, refreshCounts, skipPoll } from "./actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { emojisFor } from "@/lib/emojis";
import { paletteFor } from "@/lib/palette";
import AnimatedNumber from "./animated-number";
import Confetti from "./confetti";
import { useT } from "./locale-context";

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
  const [flames, setFlames] = useState<{ id: number; idx: number }[]>([]);
  const [pointsToast, setPointsToast] = useState<{ k: number; gained: number; mult: number } | null>(null);
  const [reveal, setReveal] = useState<{ isMajority: boolean; isRebel: boolean; userPct: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const myVoterIdRef = useRef<string | null>(null);
  const flameIdRef = useRef(0);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setIsVisible(e.isIntersecting);
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showResults = voted !== null;
  const EMOJIS = emojisFor(slug, options.length);
  const pal = paletteFor(slug);

  useEffect(() => {
    const match =
      typeof document !== "undefined"
        ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
        : null;
    myVoterIdRef.current = match ? decodeURIComponent(match[1]) : null;
  }, []);

  // Preload counts only when the card scrolls into view — avoids hammering
  // the DB with 50 simultaneous queries on long feeds like /discover.
  useEffect(() => {
    if (counts || !isVisible) return;
    let cancelled = false;
    refreshCounts(pollId, options.length).then((res) => {
      if (cancelled) return;
      setCounts(res.counts);
      setTotal(res.total);
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
          setFlames((f) => [...f, { id: fid, idx }]);
          setTimeout(() => setFlames((f) => f.filter((x) => x.id !== fid)), 1200);
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

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        setCounts(res.counts);
        setTotal(res.total);
        setPointsToast({ k: Date.now(), gained: res.points.gained, mult: res.points.multiplier });
        setTimeout(() => setPointsToast(null), 1600);
        setReveal({ isMajority: res.reveal.isMajority, isRebel: res.reveal.isRebel, userPct: res.reveal.userPct });
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
        if (onVoted) setTimeout(onVoted, 1800);
      } catch (e) {
        alert(e instanceof Error ? e.message : "Erreur");
        setVoted(null);
        setCounts(null);
        setTotal(initialVoteCount);
      }
    });
  };

  return (
    <article
      ref={rootRef as React.RefObject<HTMLElement>}
      className="glass rounded-2xl p-4 sm:p-5 space-y-3 relative overflow-hidden"
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

      <div className="flex items-start justify-between gap-2">
        <h3
          className="text-lg sm:text-xl font-bold leading-tight text-balance flex-1 bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${pal.c1}, #ffffff 55%, ${pal.c2})`,
          }}
        >
          {question}
        </h3>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {isNew && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 text-cyan-200">
              ✨ new
            </span>
          )}
          {isHot && !isNew && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 border border-orange-400/40 text-orange-200">
              {t("card.hot")}
            </span>
          )}
          {isRising && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50 text-purple-200">
              📈 rising
            </span>
          )}
          {isLive && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              {t("card.live")}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        {options.map((opt, i) => {
          const c = counts?.[i] ?? 0;
          const pct = counts && total > 0 ? Math.round((c / total) * 100) : 0;
          const isMine = voted === i;

          if (!showResults) {
            return (
              <button
                key={i}
                onClick={() => vote(i)}
                disabled={pending}
                className="w-full text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.01] active:scale-[0.99] transition px-3 py-2.5 flex items-center gap-2 disabled:opacity-50"
              >
                <span className="text-lg">{EMOJIS[i]}</span>
                <span className="font-medium text-sm sm:text-base">{opt}</span>
              </button>
            );
          }

          const fireForThis = flames.filter((f) => f.idx === i);
          return (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl border ${
                isMine ? "border-pink-400/60" : "border-white/10"
              } bg-white/5 px-3 py-2.5`}
            >
              <div
                className={`absolute inset-y-0 left-0 ${
                  isMine
                    ? "bg-gradient-to-r from-pink-500/40 to-purple-500/40"
                    : "bg-white/[0.08]"
                } bar-grow`}
                style={{ width: `${pct}%` }}
              />
              <div className="relative flex justify-between items-center gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-lg shrink-0">{EMOJIS[i]}</span>
                  <span className="font-semibold truncate text-sm sm:text-base">{opt}</span>
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
              {fireForThis.map((f) => (
                <span
                  key={f.id}
                  className="flame-burst absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
                  style={{ ["--fx" as string]: `${(Math.random() - 0.5) * 30}px` }}
                  aria-hidden
                >
                  🔥
                </span>
              ))}
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
          {reveal.isRebel ? (
            <>🌶️ <b>REBEL</b> · t'es dans les {reveal.userPct}%</>
          ) : reveal.isMajority ? (
            <>✅ avec la majorité · {reveal.userPct}%</>
          ) : (
            <>👀 partagé · {reveal.userPct}%</>
          )}
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-white/40">
        <span>
          <AnimatedNumber value={total} /> {total > 1 ? t("card.votes") : t("card.vote")}
        </span>
        <div className="flex items-center gap-3">
          {!showResults && (
            <button
              onClick={() => {
                setSkipped(true);
                skipPoll(slug).catch(() => {});
                if (onSkip) setTimeout(onSkip, 200);
              }}
              className="hover:text-white transition"
            >
              {t("card.skip")}
            </button>
          )}
          <Link
            href={`/${slug}`}
            className="hover:text-white transition flex items-center gap-1"
          >
            {t("card.detail")}
          </Link>
        </div>
      </div>
      {skipped && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 rounded-3xl">
          {t("card.passed")}
        </div>
      )}
    </article>
  );
}
