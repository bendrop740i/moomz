"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useT } from "@/app/locale-context";

type SearchResult = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
};

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

export default function SearchClient() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const reactId = useId();
  const inputId = `search-${reactId}`;
  // Tracks the latest request so stale responses don't overwrite fresh ones.
  const reqRef = useRef(0);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults([]);
      setLoading(false);
      setSearched(false);
      return;
    }

    setLoading(true);
    const myReq = ++reqRef.current;
    const handle = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`);
        const json = (await res.json()) as { results?: SearchResult[] };
        if (myReq !== reqRef.current) return; // a newer request superseded this one
        setResults(json.results ?? []);
        setSearched(true);
      } catch {
        if (myReq !== reqRef.current) return;
        setResults([]);
        setSearched(true);
      } finally {
        if (myReq === reqRef.current) setLoading(false);
      }
    }, 250);

    return () => clearTimeout(handle);
  }, [query]);

  const trimmed = query.trim();
  const showHint = trimmed.length < 2;
  const showEmpty = !loading && searched && trimmed.length >= 2 && results.length === 0;

  return (
    <div className="space-y-5 max-w-xl mx-auto">
      <div className="relative">
        <label htmlFor={inputId} className="sr-only">
          {t("search.placeholder")}
        </label>
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-white/40"
          aria-hidden
        >
          🔍
        </span>
        <input
          id={inputId}
          type="search"
          value={query}
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("search.placeholder")}
          className="w-full rounded-2xl bg-white/5 border border-white/10 pl-11 pr-4 py-3.5 text-base sm:text-lg font-medium outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
        />
      </div>

      {loading && (
        <div className="space-y-2.5" aria-live="polite" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="glass rounded-2xl p-4 animate-pulse"
              aria-hidden
            >
              <div className="h-4 w-3/4 rounded bg-white/10" />
              <div className="mt-2.5 h-3 w-1/3 rounded bg-white/5" />
            </div>
          ))}
        </div>
      )}

      {!loading && showHint && (
        <p className="text-center text-white/45 text-sm py-8">
          {t("search.hint")}
        </p>
      )}

      {showEmpty && (
        <p
          className="text-center text-white/55 text-base py-8"
          aria-live="polite"
        >
          {t("search.empty")}
        </p>
      )}

      {!loading && results.length > 0 && (
        <ul className="space-y-2.5" aria-live="polite">
          {results.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/${r.slug}`}
                className="glass block rounded-2xl p-4 hover:scale-[1.01] active:scale-[0.99] transition group"
              >
                <h2 className="font-bold text-base leading-snug group-hover:text-white">
                  {r.question}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {(r.options ?? []).slice(0, 6).map((opt, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/65"
                    >
                      <span aria-hidden>{EMOJIS[i]} </span>
                      {opt}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-wider text-white/40">
                  {r.vote_count} {r.vote_count === 1 ? t("card.vote") : t("card.votes")}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
