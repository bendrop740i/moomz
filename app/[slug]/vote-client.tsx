"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { castVote, refreshCounts } from "../actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

type Props = {
  pollId: string;
  slug: string;
  question: string;
  options: string[];
  counts: number[];
  total: number;
  alreadyVoted: number | null;
};

export default function VoteClient({
  pollId,
  slug,
  question,
  options,
  counts: initialCounts,
  total: initialTotal,
  alreadyVoted,
}: Props) {
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[]>(initialCounts);
  const [total, setTotal] = useState<number>(initialTotal);
  const [copied, setCopied] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const myVoterIdRef = useRef<string | null>(null);

  const showResults = voted !== null;

  useEffect(() => {
    const match = typeof document !== "undefined"
      ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
      : null;
    myVoterIdRef.current = match ? decodeURIComponent(match[1]) : null;
  }, []);

  useEffect(() => {
    if (!showResults) return;
    const supabase = getBrowserSupabase();
    const channel = supabase
      .channel(`poll-${pollId}`)
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
          setCounts((c) => {
            const next = [...c];
            next[row.option_index!] = (next[row.option_index!] ?? 0) + 1;
            return next;
          });
          setTotal((t) => t + 1);
          setAnimKey((k) => k + 1);
        },
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") setIsLive(true);
        if (status === "CLOSED" || status === "CHANNEL_ERROR") setIsLive(false);
      });
    return () => {
      supabase.removeChannel(channel);
      setIsLive(false);
    };
  }, [showResults, pollId]);

  const vote = (i: number) => {
    if (voted !== null || pending) return;
    setVoted(i);
    const optimistic = [...counts];
    optimistic[i] = (optimistic[i] ?? 0) + 1;
    setCounts(optimistic);
    setTotal(total + 1);
    setAnimKey((k) => k + 1);

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        setCounts(res.counts);
        setTotal(res.total);
      } catch (e) {
        alert(e instanceof Error ? e.message : "Erreur");
        setVoted(null);
        setCounts(initialCounts);
        setTotal(initialTotal);
      }
    });
  };

  const refresh = () => {
    startTransition(async () => {
      try {
        const res = await refreshCounts(pollId, options.length);
        setCounts(res.counts);
        setTotal(res.total);
        setAnimKey((k) => k + 1);
      } catch {}
    });
  };

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "moomz", text: question, url });
        return;
      } catch {}
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 fade-up">
      <header className="text-center">
        <a
          href="/"
          className="inline-block text-3xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent"
        >
          moomz
        </a>
      </header>

      <div className="glass rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl shadow-pink-500/10">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">{question}</h1>

        <div className="space-y-2.5">
          {options.map((opt, i) => {
            const c = counts[i] ?? 0;
            const pct = total > 0 ? Math.round((c / total) * 100) : 0;
            const isMine = voted === i;

            if (!showResults) {
              return (
                <button
                  key={i}
                  onClick={() => vote(i)}
                  disabled={pending}
                  className="w-full text-left rounded-2xl border-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.01] active:scale-[0.99] transition px-4 py-4 flex items-center gap-3 disabled:opacity-50"
                >
                  <span className="text-2xl">{EMOJIS[i]}</span>
                  <span className="font-medium text-lg">{opt}</span>
                </button>
              );
            }

            return (
              <div
                key={`${i}-${animKey}`}
                className={`relative overflow-hidden rounded-2xl border-2 ${
                  isMine ? "border-pink-400/60" : "border-white/10"
                } bg-white/5 px-4 py-4 ${isMine ? "pop" : ""}`}
              >
                <div
                  className={`absolute inset-y-0 left-0 ${
                    isMine
                      ? "bg-gradient-to-r from-pink-500/40 to-purple-500/40"
                      : "bg-white/8"
                  } bar-grow`}
                  style={{ width: `${pct}%` }}
                />
                <div className="relative flex justify-between items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0">{EMOJIS[i]}</span>
                    <span className="font-semibold text-lg truncate">
                      {opt}
                      {isMine && (
                        <span className="ml-2 text-pink-300 text-xs uppercase tracking-wide">
                          · toi
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="tabular-nums text-sm font-semibold text-white/80 shrink-0">
                    {pct}% <span className="text-white/40 font-normal">· {c}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {showResults && (
          <div className="flex items-center justify-between text-sm text-white/50">
            <span>
              {total} vote{total > 1 ? "s" : ""} au total
            </span>
            <span className="flex items-center gap-2">
              {isLive ? (
                <span className="flex items-center gap-1.5 text-emerald-300/90">
                  <span className="relative inline-flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  live
                </span>
              ) : (
                <button
                  onClick={refresh}
                  disabled={pending}
                  className="hover:text-white transition disabled:opacity-50"
                >
                  ⟳ rafraîchir
                </button>
              )}
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={share}
          className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-pink-500/30"
        >
          {copied ? "Lien copié ✓" : "📤 Partager le lien"}
        </button>
        <a
          href="/"
          className="rounded-2xl border-2 border-white/15 bg-white/5 hover:bg-white/10 font-semibold py-4 px-5 transition flex items-center"
        >
          + nouveau
        </a>
      </div>
    </div>
  );
}
