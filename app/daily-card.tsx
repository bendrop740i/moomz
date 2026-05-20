"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  slug: string;
  question: string;
  voteCount: number;
  alreadyVoted: boolean;
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

export default function DailyCard({ slug, question, voteCount, alreadyVoted }: Props) {
  const [remaining, setRemaining] = useState("…");
  const [endIso, setEndIso] = useState<string | undefined>(undefined);

  useEffect(() => {
    setRemaining(formatRemaining());
    setEndIso(endOfUtcDayIso());
    const id = setInterval(() => {
      setRemaining(formatRemaining());
      setEndIso(endOfUtcDayIso());
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  const ctaLabel = alreadyVoted
    ? `Voir les résultats du Daily Moomz : ${question}`
    : `Voter au Daily Moomz : ${question}`;

  return (
    <article
      aria-labelledby="daily-moomz-title"
      className="relative rounded-3xl overflow-hidden border-2 border-pink-400/50 shadow-2xl shadow-pink-500/40 group"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,61,139,0.4), rgba(124,58,237,0.4), rgba(245,158,11,0.3))",
      }}
    >
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-pink-500/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-purple-500/30 blur-3xl" aria-hidden="true" />
      <div className="relative p-6 sm:p-8 space-y-4 min-h-[280px] sm:min-h-[320px] flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <h2 className="inline-flex items-center gap-2 m-0 text-sm font-bold uppercase tracking-widest text-pink-100">
            <span className="text-xl" aria-hidden="true">🌅</span>
            <span>Daily Moomz</span>
            <span className="text-[10px] font-medium normal-case tracking-normal text-white/60 hidden sm:inline">
              · le sondage du jour
            </span>
          </h2>
          <time
            dateTime={endIso}
            aria-live="polite"
            className="text-white/80 tabular-nums font-bold text-sm rounded-full bg-black/30 px-3 py-1"
          >
            <span aria-hidden="true">⏳ </span>
            <span className="sr-only">Temps restant : </span>
            {remaining}
          </time>
        </div>
        <h3
          id="daily-moomz-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] bg-gradient-to-br from-white via-pink-50 to-yellow-100 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)] flex-1"
        >
          <Link
            href={`/${slug}`}
            aria-label={ctaLabel}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-md after:absolute after:inset-0 after:content-['']"
          >
            {question}
          </Link>
        </h3>
        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="text-white/80 text-sm font-medium tabular-nums">
            <span className="text-pink-200 font-bold">{voteCount.toLocaleString()}</span> ont déjà voté
          </span>
          <span
            aria-hidden="true"
            className="rounded-full bg-white px-5 py-2 font-bold text-sm text-pink-600 group-hover:scale-105 transition shadow-lg"
          >
            {alreadyVoted ? "Voir résultats →" : "Voter →"}
          </span>
        </div>
      </div>
    </article>
  );
}
