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

export default function DailyCard({ slug, question, voteCount, alreadyVoted }: Props) {
  const [remaining, setRemaining] = useState("…");

  useEffect(() => {
    setRemaining(formatRemaining());
    const id = setInterval(() => setRemaining(formatRemaining()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <Link
      href={`/${slug}`}
      className="relative block rounded-3xl overflow-hidden border-2 border-pink-400/40 shadow-2xl shadow-pink-500/30 group"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,61,139,0.25), rgba(124,58,237,0.25), rgba(245,158,11,0.2))",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-widest text-pink-200">
            <span className="text-base">🌅</span> Daily Moomz
          </span>
          <span className="text-white/70 tabular-nums font-medium">
            ⏳ {remaining}
          </span>
        </div>
        <h2
          className="font-display text-2xl sm:text-3xl leading-tight bg-gradient-to-br from-white via-pink-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]"
        >
          {question}
        </h2>
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/70">
            {voteCount.toLocaleString()} ont déjà voté
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white group-hover:bg-white/25 transition">
            {alreadyVoted ? "Voir résultats →" : "Voter →"}
          </span>
        </div>
      </div>
    </Link>
  );
}
