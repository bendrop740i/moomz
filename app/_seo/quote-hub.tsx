import Link from "next/link";
import type { QuoteLocale } from "@/lib/seo/quotes/types";
import { quoteUrl } from "@/lib/seo/quotes/types";
import { quotesByLocale } from "@/lib/seo/quotes/loader";

type HubStrings = { title: string; tagline: string; count: (n: number) => string };

const HUB: Record<QuoteLocale, HubStrings> = {
  fr: {
    title: "Citations & phrases cultes",
    tagline:
      "Des citations soigneusement attribuées, par thème. Lis, partage, et transforme-les en sondage.",
    count: (n) => `${n} thèmes`,
  },
  en: {
    title: "Quotes & famous sayings",
    tagline:
      "Carefully attributed quotes, sorted by theme. Read, share, and turn them into a poll.",
    count: (n) => `${n} themes`,
  },
  es: {
    title: "Frases y citas célebres",
    tagline:
      "Frases bien atribuidas, por tema. Lee, comparte y conviértelas en una encuesta.",
    count: (n) => `${n} temas`,
  },
  it: {
    title: "Frasi e citazioni celebri",
    tagline:
      "Citazioni ben attribuite, per tema. Leggi, condividi e trasformale in un sondaggio.",
    count: (n) => `${n} temi`,
  },
  pt: {
    title: "Frases e citações célebres",
    tagline:
      "Frases bem atribuídas, por tema. Leia, compartilhe e transforme em uma enquete.",
    count: (n) => `${n} temas`,
  },
  de: {
    title: "Zitate & berühmte Sprüche",
    tagline:
      "Sorgfältig zugeordnete Zitate, nach Thema. Lies, teile und mach eine Umfrage daraus.",
    count: (n) => `${n} Themen`,
  },
  ja: {
    title: "名言・名句集",
    tagline: "出典付きで正確な名言をテーマ別に。読んで、シェアして、投票にしよう。",
    count: (n) => `${n}のテーマ`,
  },
  zh: {
    title: "名言名句大全",
    tagline: "准确标注出处的名言，按主题分类。阅读、分享，并变成投票。",
    count: (n) => `${n} 个主题`,
  },
};

export default function QuoteHub({ locale }: { locale: QuoteLocale }) {
  const pages = quotesByLocale(locale).sort((a, b) => a.theme.localeCompare(b.theme));
  const s = HUB[locale] ?? HUB.en;
  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {s.title}
        </h1>
        <p className="text-white/70">{s.tagline}</p>
        <p className="text-xs uppercase tracking-widest text-white/40">{s.count(pages.length)}</p>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {pages.map((p) => (
          <Link
            key={p.slug}
            href={quoteUrl(p)}
            className="glass rounded-2xl px-4 py-5 hover:bg-white/10 hover:scale-[1.02] transition flex flex-col items-center text-center gap-2"
          >
            <span className="text-3xl" aria-hidden>
              {p.emoji}
            </span>
            <span className="font-semibold text-white">{p.label}</span>
            <span className="text-xs text-white/40">{p.quotes.length}</span>
          </Link>
        ))}
      </div>
    </article>
  );
}
