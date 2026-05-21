"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { castVote, refreshCounts } from "./actions";
import { emojisFor } from "@/lib/emojis";
import { useT } from "./locale-context";

type Props = {
  pollId: string;
  slug: string;
  question: string;
  options: string[];
  voteCount: number;
  alreadyVoted: number | null;
};

function formatRemaining(): string {
  const now = new Date();
  const end = new Date();
  end.setUTCHours(24, 0, 0, 0); // next UTC midnight
  const diff = Math.max(0, end.getTime() - now.getTime());
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  if (h > 0) return `${h}h${String(m).padStart(2, "0")}`;
  return `${m}min`;
}

function endOfUtcDayIso(): string {
  const end = new Date();
  end.setUTCHours(24, 0, 0, 0);
  return end.toISOString();
}

export default function DailyCard({
  pollId,
  slug,
  question,
  options,
  voteCount,
  alreadyVoted,
}: Props) {
  const t = useT();
  const [remaining, setRemaining] = useState("…");
  const [endIso, setEndIso] = useState<string | undefined>(undefined);
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[] | null>(null);
  const [total, setTotal] = useState(voteCount);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    setRemaining(formatRemaining());
    setEndIso(endOfUtcDayIso());
    const id = setInterval(() => {
      setRemaining(formatRemaining());
      setEndIso(endOfUtcDayIso());
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  // When the visitor already voted, pull the live per-option counts so the
  // result bars render straight away — no bounce to the poll page needed.
  useEffect(() => {
    if (voted === null || counts) return;
    let cancelled = false;
    refreshCounts(pollId, options.length)
      .then((res) => {
        if (cancelled) return;
        setCounts(res.counts);
        setTotal(res.total);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [voted, counts, pollId, options.length]);

  const EMOJIS = emojisFor(slug, options.length);
  const showResults = voted !== null;

  const vote = (i: number) => {
    if (voted !== null || pending) return;
    setVoted(i);
    setTotal((x) => x + 1);
    setCounts((c) => {
      if (c) {
        const n = [...c];
        n[i] = (n[i] ?? 0) + 1;
        return n;
      }
      return options.map((_, idx) => (idx === i ? 1 : 0));
    });
    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        setCounts(res.counts);
        setTotal(res.total);
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
      } catch (e) {
        alert(e instanceof Error ? e.message : "Error");
        setVoted(null);
        setCounts(null);
        setTotal(voteCount);
      }
    });
  };

  return (
    <article
      aria-labelledby="daily-moomz-title"
      className="relative rounded-3xl overflow-hidden border-2 border-pink-400/50 shadow-2xl shadow-pink-500/40"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,61,139,0.4), rgba(124,58,237,0.4), rgba(245,158,11,0.3))",
      }}
    >
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-pink-500/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-purple-500/30 blur-3xl" aria-hidden="true" />
      <div className="relative p-6 sm:p-8 space-y-4 flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <h2 className="inline-flex items-center gap-2 m-0 text-sm font-bold uppercase tracking-widest text-pink-100">
            <span className="text-xl" aria-hidden="true">🌅</span>
            <span>Daily Moomz</span>
            <span className="text-[10px] font-medium normal-case tracking-normal text-white/60 hidden sm:inline">
              · {t("home.dailySub") === "home.dailySub" ? "poll of the day" : t("home.dailySub")}
            </span>
          </h2>
          <time
            dateTime={endIso}
            aria-live="polite"
            className="text-white/80 tabular-nums font-bold text-sm rounded-full bg-black/30 px-3 py-1"
          >
            <span aria-hidden="true">⏳ </span>
            <span className="sr-only">Time remaining: </span>
            {remaining}
          </time>
        </div>

        <h3
          id="daily-moomz-title"
          className="font-display text-3xl sm:text-4xl leading-[1.12] bg-gradient-to-br from-white via-pink-50 to-yellow-100 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]"
        >
          {question}
        </h3>

        {/* Inline vote — no bounce to another page. */}
        <div className="space-y-2">
          {options.map((opt, i) => {
            if (!showResults) {
              return (
                <button
                  key={i}
                  onClick={() => vote(i)}
                  disabled={pending}
                  aria-label={`Vote for: ${opt}`}
                  className="w-full min-h-[48px] text-left rounded-xl border border-white/25 bg-white/15 hover:bg-white/25 hover:border-white/40 hover:scale-[1.01] active:scale-[0.97] transition px-4 py-3 flex items-center gap-2.5 disabled:opacity-50"
                >
                  <span className="text-lg shrink-0" aria-hidden>
                    {EMOJIS[i]}
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-white break-words min-w-0">
                    {opt}
                  </span>
                </button>
              );
            }
            const c = counts?.[i] ?? 0;
            const pct = counts && total > 0 ? Math.round((c / total) * 100) : 0;
            const isMine = voted === i;
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl border min-h-[48px] px-4 py-3 ${
                  isMine ? "border-white/70" : "border-white/20"
                } bg-black/20`}
              >
                <div
                  className={`absolute inset-y-0 left-0 transition-[width] duration-500 ease-out ${
                    isMine ? "bg-white/35" : "bg-white/15"
                  }`}
                  style={{ width: `${pct}%` }}
                  aria-hidden
                />
                <div className="relative flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-lg shrink-0" aria-hidden>
                      {EMOJIS[i]}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-white truncate">
                      {opt}
                    </span>
                    {isMine && (
                      <span className="text-[10px] uppercase tracking-wide text-pink-100 shrink-0">
                        {t("card.you") === "card.you" ? "you" : t("card.you")}
                      </span>
                    )}
                  </div>
                  <span className="tabular-nums text-sm font-bold text-white shrink-0">
                    {pct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-3 pt-0.5">
          <span className="text-white/80 text-sm font-medium tabular-nums">
            <span className="text-pink-100 font-bold">{total.toLocaleString()}</span>{" "}
            {t("daily.voted") === "daily.voted" ? "voted" : t("daily.voted")}
          </span>
          <Link
            href={`/${slug}`}
            className="text-white/70 hover:text-white text-xs font-semibold underline-offset-2 hover:underline transition"
          >
            {t("card.detail") === "card.detail" ? "detail →" : t("card.detail")}
          </Link>
        </div>
      </div>
    </article>
  );
}
