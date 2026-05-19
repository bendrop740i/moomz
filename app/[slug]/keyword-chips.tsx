import Link from "next/link";
import { getAllKeywords } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";

// Renders chip-links to keyword pages whose matchPatterns appear in the
// current poll's question/options. Indexable internal links that turn each
// poll page into a hub for the topics it touches.
export default function KeywordChips({
  question,
  options,
  lang,
}: {
  question: string;
  options: string[];
  lang: string | null | undefined;
}) {
  const target: "fr" | "en" = lang === "fr" ? "fr" : "en";
  const haystack = `${question} ${options.join(" ")}`.toLowerCase();
  const seen = new Set<string>();
  const matches = getAllKeywords()
    .filter((k) => k.locale === target)
    .filter((k) => k.matchPatterns.some((p) => p && p.length >= 3 && haystack.includes(p.toLowerCase())))
    .filter((k) => {
      if (seen.has(k.slug)) return false;
      seen.add(k.slug);
      return true;
    })
    .slice(0, 10);
  if (matches.length === 0) return null;
  const label = target === "fr" ? "Mots-clés" : "Keywords";
  return (
    <section className="space-y-2 mt-2" aria-label={label}>
      <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">{label}</h2>
      <div className="flex flex-wrap gap-2">
        {matches.map((k) => (
          <Link
            key={k.slug}
            href={keywordUrl(k)}
            className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
          >
            {k.emoji ? <span className="mr-1">{k.emoji}</span> : null}
            {k.keyword}
          </Link>
        ))}
      </div>
    </section>
  );
}
