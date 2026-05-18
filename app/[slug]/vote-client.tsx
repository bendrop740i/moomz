"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { castVote } from "../actions";

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
  counts,
  total,
  alreadyVoted,
}: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [copied, setCopied] = useState(false);

  const showResults = voted !== null;

  const vote = (i: number) => {
    if (voted !== null) return;
    setVoted(i);
    startTransition(async () => {
      try {
        await castVote(pollId, slug, i);
        router.refresh();
      } catch (e) {
        alert(e instanceof Error ? e.message : "Erreur");
        setVoted(null);
      }
    });
  };

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
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
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <a href="/" className="text-2xl font-black tracking-tight inline-block">
          moomz
        </a>
      </header>

      <div className="rounded-3xl bg-white/70 backdrop-blur p-6 shadow-xl shadow-pink-100/40 border border-white space-y-5">
        <h1 className="text-2xl font-bold leading-tight">{question}</h1>

        <div className="space-y-2">
          {options.map((opt, i) => {
            const c = counts[i];
            const pct = total > 0 ? Math.round((c / total) * 100) : 0;
            const isMine = voted === i;

            if (!showResults) {
              return (
                <button
                  key={i}
                  onClick={() => vote(i)}
                  disabled={pending}
                  className="w-full text-left rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 hover:border-pink-400 hover:bg-pink-50 transition disabled:opacity-50"
                >
                  {opt}
                </button>
              );
            }

            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl border-2 ${
                  isMine ? "border-pink-400" : "border-neutral-200"
                } bg-white px-4 py-3`}
              >
                <div
                  className={`absolute inset-y-0 left-0 ${
                    isMine ? "bg-pink-100" : "bg-neutral-100"
                  } transition-all`}
                  style={{ width: `${pct}%` }}
                />
                <div className="relative flex justify-between items-center font-medium">
                  <span>
                    {opt} {isMine && <span className="text-pink-500 text-sm">· ton vote</span>}
                  </span>
                  <span className="tabular-nums text-sm text-neutral-600">
                    {pct}% · {c}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {showResults && (
          <p className="text-center text-sm text-neutral-500">
            {total} vote{total > 1 ? "s" : ""} au total
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={share}
          className="flex-1 rounded-xl bg-neutral-900 text-white font-semibold py-3 hover:bg-neutral-700 transition"
        >
          {copied ? "Lien copié ✓" : "Partager le lien"}
        </button>
        <a
          href="/"
          className="rounded-xl border-2 border-neutral-200 bg-white font-semibold py-3 px-4 hover:border-neutral-400 transition flex items-center"
        >
          + nouveau
        </a>
      </div>
    </div>
  );
}
