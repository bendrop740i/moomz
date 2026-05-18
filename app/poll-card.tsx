"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { castVote, refreshCounts, skipPoll } from "./actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { emojisFor } from "@/lib/emojis";
import AnimatedNumber from "./animated-number";
import Confetti from "./confetti";

type Props = {
  pollId: string;
  slug: string;
  question: string;
  options: string[];
  initialVoteCount: number;
  alreadyVoted: number | null;
  isHot?: boolean;
  isLive?: boolean;
  onSkip?: () => void;
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
  onSkip,
}: Props) {
  const [skipped, setSkipped] = useState(false);
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[] | null>(null);
  const [total, setTotal] = useState<number>(initialVoteCount);
  const [confettiKey, setConfettiKey] = useState(0);
  const [bumpKey, setBumpKey] = useState<{ idx: number; k: number } | null>(null);
  const [flames, setFlames] = useState<{ id: number; idx: number }[]>([]);
  const myVoterIdRef = useRef<string | null>(null);
  const flameIdRef = useRef(0);

  const showResults = voted !== null;
  const EMOJIS = emojisFor(slug, options.length);

  useEffect(() => {
    const match =
      typeof document !== "undefined"
        ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
        : null;
    myVoterIdRef.current = match ? decodeURIComponent(match[1]) : null;
  }, []);

  useEffect(() => {
    if (!showResults || counts) return;
    let cancelled = false;
    refreshCounts(pollId, options.length).then((res) => {
      if (cancelled) return;
      setCounts(res.counts);
      setTotal(res.total);
    });
    return () => {
      cancelled = true;
    };
  }, [showResults, pollId, options.length, counts]);

  useEffect(() => {
    if (!showResults) return;
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
  }, [showResults, pollId]);

  const vote = (i: number) => {
    if (voted !== null || pending) return;
    setVoted(i);
    setTotal(total + 1);
    const optimistic = options.map((_, idx) => (idx === i ? 1 : 0));
    setCounts(optimistic);
    setConfettiKey((k) => k + 1);

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        setCounts(res.counts);
        setTotal(res.total);
      } catch (e) {
        alert(e instanceof Error ? e.message : "Erreur");
        setVoted(null);
        setCounts(null);
        setTotal(initialVoteCount);
      }
    });
  };

  return (
    <article className="glass rounded-2xl p-4 sm:p-5 space-y-3 relative overflow-hidden">
      <Confetti trigger={confettiKey} />

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg sm:text-xl font-bold leading-tight text-balance flex-1">
          {question}
        </h3>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {isHot && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 border border-orange-400/40 text-orange-200">
              🔥 hot
            </span>
          )}
          {isLive && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              live
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
                      toi
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

      <div className="flex items-center justify-between text-xs text-white/40">
        <span>
          <AnimatedNumber value={total} /> vote{total > 1 ? "s" : ""}
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
              passer ↓
            </button>
          )}
          <Link
            href={`/${slug}`}
            className="hover:text-white transition flex items-center gap-1"
          >
            Détail + partage →
          </Link>
        </div>
      </div>
      {skipped && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 rounded-3xl">
          Passé ↓
        </div>
      )}
    </article>
  );
}
