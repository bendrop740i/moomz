"use client";

import Link from "next/link";
import { useState } from "react";
import { signFromDate, signName, formatDateRange, type Sign } from "@/lib/tools/astro";

type Props = {
  locale: string;
  labels: {
    findYourSign: string;
    birthday: string;
    birthdayHint: string;
    findButton: string;
    yourSignIs: string;
    seeSign: string;
  };
};

export default function SignFinder({ locale, labels }: Props) {
  const [date, setDate] = useState<string>("");
  const [result, setResult] = useState<Sign | null>(null);
  const [error, setError] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!date) {
      setError(labels.birthdayHint);
      return;
    }
    // input[type=date] format: YYYY-MM-DD
    const parts = date.split("-");
    if (parts.length !== 3) {
      setError(labels.birthdayHint);
      return;
    }
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (
      !Number.isFinite(month) ||
      !Number.isFinite(day) ||
      month < 1 ||
      month > 12 ||
      day < 1 ||
      day > 31
    ) {
      setError(labels.birthdayHint);
      return;
    }
    setResult(signFromDate(month, day));
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass rounded-3xl p-5 sm:p-6 space-y-4"
      aria-label={labels.findYourSign}
    >
      <div className="space-y-1">
        <label
          htmlFor="astro-bday"
          className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold"
        >
          {labels.birthday}
        </label>
        <input
          id="astro-bday"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-pink-400/60 focus:bg-white/8 transition"
          required
        />
        <p className="text-xs text-white/40">{labels.birthdayHint}</p>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 text-base font-bold active:scale-[0.98] transition"
      >
        {labels.findButton}
      </button>

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      {result ? (
        <div
          className="rounded-2xl p-4 border border-white/10 bg-white/5 flex items-center gap-4 fade-up"
          role="status"
          aria-live="polite"
        >
          <div
            className="text-5xl shrink-0"
            aria-hidden
            style={{ color: result.color }}
          >
            {result.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs text-white/50">{labels.yourSignIs}</div>
            <div className="font-display text-2xl leading-tight">
              {signName(result, locale)}
            </div>
            <div className="text-xs text-white/55 mt-0.5">
              {formatDateRange(result, locale)}
            </div>
          </div>
          <Link
            href={`/astro/${result.slug}`}
            className="shrink-0 rounded-full bg-white/10 hover:bg-white/15 px-3 py-2 text-sm font-semibold transition"
          >
            {labels.seeSign} →
          </Link>
        </div>
      ) : null}
    </form>
  );
}
