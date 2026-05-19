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
      className="relative rounded-3xl overflow-hidden border-2 border-pink-400/40 shadow-2xl shadow-pink-500/30 group"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,61,139,0.25), rgba(124,58,237,0.25), rgba(245,158,11,0.2))",
      }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <h2 className="inline-flex items-center gap-1.5 m-0 text-xs font-bold uppercase tracking-widest text-pink-200">
            <span className="text-base" aria-hidden="true">🌅</span> Daily Moomz
          </h2>
          <time
            dateTime={endIso}
            aria-live="polite"
            className="text-white/70 tabular-nums font-medium"
          >
            <span aria-hidden="true">⏳ </span>
            <span className="sr-only">Temps restant : </span>
            {remaining}
          </time>
        </div>
        <h3
          id="daily-moomz-title"
          className="font-display text-2xl sm:text-3xl leading-tight bg-gradient-to-br from-white via-pink-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]"
        >
          <Link
            href={`/${slug}`}
            aria-label={ctaLabel}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-md after:absolute after:inset-0 after:content-['']"
          >
            {question}
          </Link>
        </h3>
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/70">
            {voteCount.toLocaleString()} ont déjà voté
          </span>
          <span
            aria-hidden="true"
            className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white group-hover:bg-white/25 transition"
          >
            {alreadyVoted ? "Voir résultats →" : "Voter →"}
          </span>
        </div>
      </div>
    </article>
  );
}
