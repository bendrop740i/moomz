import type { Metadata } from "next";
import Link from "next/link";
import { keywordsByLocale } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";

export const metadata: Metadata = {
  title: "Mots-clés : tous les sujets de sondage moomz",
  description:
    "Tous les sujets qui font causer sur moomz : pizza, couple, drama, ferme du buzz, IA, Mozart, Halloween, soleil, neige et bien plus. Une page par mot avec ses sondages.",
  alternates: { canonical: "https://moomz.com/mot" },
};

export default function MotHub() {
  const pages = keywordsByLocale("fr");
  const groups = new Map<string, typeof pages>();
  for (const p of pages) {
    const key = p.topic ?? "autres";
    const arr = groups.get(key) ?? [];
    arr.push(p);
    groups.set(key, arr);
  }
  const sorted = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          Mots-clés moomz
        </h1>
        <p className="text-white/70">
          {pages.length} sujets — chaque page liste les sondages moomz qui en parlent.
        </p>
      </header>
      {sorted.map(([topic, list]) => (
        <section key={topic} className="space-y-3">
          <h2 className="font-semibold text-xl capitalize">{topic}</h2>
          <div className="flex flex-wrap gap-2">
            {list.map((p) => (
              <Link
                key={p.slug}
                href={keywordUrl(p)}
                className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
              >
                {p.emoji ? <span className="mr-1">{p.emoji}</span> : null}
                {p.keyword}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
