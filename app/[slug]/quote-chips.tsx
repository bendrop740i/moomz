import Link from "next/link";
import { getAllQuotes, isQuoteLocale } from "@/lib/seo/quotes/loader";
import { quoteUrl } from "@/lib/seo/quotes/types";
import type { QuoteLocale } from "@/lib/seo/quotes/types";

// Renders chip-links to themed quote pages whose matchPatterns appear in the
// current poll's question/options — so a poll about love links out to the
// love-quotes page (and that page links matching polls back). Indexable
// internal links that connect every vote to a relevant quote collection.
export default function QuoteChips({
  question,
  options,
  lang,
}: {
  question: string;
  options: string[];
  lang: string | null | undefined;
}) {
  const target: QuoteLocale = lang && isQuoteLocale(lang) ? lang : "en";
  // CJK words are short (2 chars) — relax the min-length there.
  const minLen = target === "ja" || target === "zh" ? 2 : 3;
  const haystack = `${question} ${options.join(" ")}`.toLowerCase();
  const matches = getAllQuotes()
    .filter((q) => q.locale === target)
    .filter((q) =>
      q.matchPatterns.some(
        (p) => p && p.length >= minLen && haystack.includes(p.toLowerCase()),
      ),
    )
    .slice(0, 6);
  if (matches.length === 0) return null;

  const LABEL_MAP: Record<QuoteLocale, string> = {
    fr: "Citations sur ce sujet",
    en: "Quotes on this topic",
    es: "Frases sobre este tema",
    it: "Frasi su questo tema",
    pt: "Frases sobre este tema",
    de: "Zitate zu diesem Thema",
    ja: "このテーマの名言",
    zh: "相关名言",
  };
  const label = LABEL_MAP[target];

  return (
    <section className="space-y-2 mt-2" aria-label={label}>
      <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">{label}</h2>
      <div className="flex flex-wrap gap-2">
        {matches.map((q) => (
          <Link
            key={q.slug}
            href={quoteUrl(q)}
            className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition"
          >
            <span className="mr-1">{q.emoji}</span>
            {q.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
