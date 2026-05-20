import Link from "next/link";
import type { Metadata } from "next";
import { allPairs } from "@/lib/seo/vs/loader";
import type { VsCategoryId } from "@/lib/seo/vs/types";

export const metadata: Metadata = {
  title: "moomz /vs — head-to-head comparisons on 10 topics",
  description:
    "1000+ side-by-side comparisons: tools, tech, food, travel, science, chemistry, animals, lifestyle, culture. Pick a side, share the poll.",
  alternates: { canonical: "https://moomz.com/vs" },
};

const CATEGORIES: Array<{ id: VsCategoryId; emoji: string; label: string }> = [
  { id: "tools", emoji: "🛠️", label: "Tools & apps" },
  { id: "tech", emoji: "💻", label: "Tech & code" },
  { id: "cloud", emoji: "☁️", label: "Cloud & platforms" },
  { id: "food", emoji: "🍕", label: "Food & drink" },
  { id: "travel", emoji: "✈️", label: "Travel & places" },
  { id: "science", emoji: "🔬", label: "Science" },
  { id: "chemistry", emoji: "⚗️", label: "Chemistry" },
  { id: "animals", emoji: "🐾", label: "Animals" },
  { id: "lifestyle", emoji: "🧘", label: "Lifestyle" },
  { id: "culture", emoji: "🎭", label: "Culture & media" },
];

export default function VsHub() {
  const byCat = new Map<VsCategoryId, number>();
  for (const p of allPairs) byCat.set(p.category, (byCat.get(p.category) ?? 0) + 1);

  return (
    <div className="space-y-8 fade-up">
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">moomz · /vs</div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          Head-to-head
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          {allPairs.length} pairs. Pros, cons, and the only verdict that matters: yours. Vote on moomz.
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">Run your own showdown in 10 seconds</div>
        <div className="text-xs text-white/50">moomz.com — anonymous, free</div>
      </Link>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {CATEGORIES.map((c) => {
            const count = byCat.get(c.id) ?? 0;
            const sample = allPairs.find((p) => p.category === c.id);
            const firstLocale = sample ? (Object.keys(sample.content)[0] ?? "en") : "en";
            return (
              <Link
                key={c.id}
                href={sample ? `/vs/${firstLocale}/${sample.slug}` : "/vs"}
                className="glass rounded-2xl px-4 py-3 hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{c.emoji}</div>
                  <div className="text-xs text-white/40">{count}</div>
                </div>
                <div className="text-sm font-medium text-white mt-2">{c.label}</div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">Popular pairs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {allPairs.slice(0, 40).map((p) => {
            const firstLocale = Object.keys(p.content)[0] ?? "en";
            return (
              <Link
                key={p.slug}
                href={`/vs/${firstLocale}/${p.slug}`}
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition text-sm text-white/80 truncate"
              >
                {p.emoji_a ?? ""} {p.a} <span className="text-white/40">vs</span> {p.b} {p.emoji_b ?? ""}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
