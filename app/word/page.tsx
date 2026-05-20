import type { Metadata } from "next";
import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import { keywordsByLocale } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";

export const metadata: Metadata = {
  title: "Keywords: every moomz poll topic in one place",
  description:
    "Every topic people poll about on moomz: pizza, couple, drama, AI, Mozart, Halloween, the Sun, snow and more. One page per word with its polls.",
  alternates: { canonical: "https://moomz.com/word" },
};

export default function WordHub() {
  const pages = keywordsByLocale("en");
  const groups = new Map<string, typeof pages>();
  for (const p of pages) {
    const key = p.topic ?? "other";
    const arr = groups.get(key) ?? [];
    arr.push(p);
    groups.set(key, arr);
  }
  const sorted = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  return (
    <article className="space-y-8 fade-up">
      <HubNav locale="en" current="keywords" showLanguages />
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          moomz keywords
        </h1>
        <p className="text-white/70">
          {pages.length} topics — every page lists the moomz polls that mention the word.
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
