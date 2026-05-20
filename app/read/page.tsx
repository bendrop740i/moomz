import type { Metadata } from "next";
import Link from "next/link";
import { pagesByCategory } from "@/lib/seo";
import type { Locale } from "@/lib/seo/types";
import { pageUrl } from "@/lib/seo/types";
import { getLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Read — WTF threads, viral stories, plot twists | moomz",
  description:
    "Histoires WTF, threads viraux, twist incroyables, drames Reddit, mystères. Lis et vote sur ce que tu aurais fait. 8 langues.",
  alternates: { canonical: "https://moomz.com/read" },
};

const LANG_NAMES: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  de: "Deutsch",
  ja: "日本語",
  zh: "中文",
};

const HUB_HOOKS: Record<Locale, string> = {
  fr: "Threads WTF, twists, drames vrais, mystères et histoires virales. Lis le récit, vote sur la fin.",
  en: "WTF threads, plot twists, true dramas, mysteries and viral stories. Read it, vote on the ending.",
  es: "Hilos WTF, giros inesperados, dramas reales, misterios e historias virales. Lee y vota el final.",
  it: "Thread WTF, colpi di scena, drammi reali, misteri e storie virali. Leggi, vota il finale.",
  pt: "Threads WTF, reviravoltas, dramas reais, mistérios e histórias virais. Leia, vote no final.",
  de: "WTF-Threads, Plot-Twists, echte Dramen, Mysterien und virale Storys. Lies, stimm über das Ende ab.",
  ja: "WTFスレ、どんでん返し、リアルな修羅場、ミステリー、バズった話。読んで結末に投票。",
  zh: "WTF 帖子、神转折、真实狗血、悬疑、爆款故事。读完投票决定结局。",
};

const HEADER_HOOKS: Record<Locale, string> = {
  fr: "Threads WTF, plot twists, drames Reddit, mystères, histoires virales. Vote sur ce que tu aurais fait.",
  en: "WTF threads, plot twists, Reddit dramas, mysteries, viral stories. Vote on what you'd have done.",
  es: "Hilos WTF, giros inesperados, dramas de Reddit, misterios, historias virales. Vota qué habrías hecho.",
  it: "Thread WTF, colpi di scena, drammi di Reddit, misteri, storie virali. Vota cosa avresti fatto.",
  pt: "Threads WTF, reviravoltas, dramas do Reddit, mistérios, histórias virais. Vote no que você teria feito.",
  de: "WTF-Threads, Plot-Twists, Reddit-Dramen, Mysterien, virale Storys. Stimm ab, was du getan hättest.",
  ja: "WTFスレ、どんでん返し、Redditの修羅場、ミステリー、バズった話。あなたならどうする？投票しよう。",
  zh: "WTF 帖子、神转折、Reddit 狗血、悬疑、爆款故事。投票决定换作是你会怎么做。",
};

export default function ReadHub() {
  const locale = getLocale();
  const all = pagesByCategory("read");
  // Locale-pure: show only the visitor's-language stories. Fall back to the
  // full pool only if this locale genuinely has zero stories.
  const localized = all.filter((p) => p.locale === locale);
  const pages = localized.length > 0 ? localized : all;

  return (
    <div className="space-y-10 fade-up">
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">read · moomz</div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          📖 Stories
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          {HEADER_HOOKS[locale] ?? HEADER_HOOKS.en}
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">moomz.com</div>
        <div className="text-xs text-white/50">Crée ton sondage en 10 secondes</div>
      </Link>

      <section className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-2xl text-white">{LANG_NAMES[locale] ?? LANG_NAMES.en}</h2>
          <span className="text-xs text-white/40">{pages.length} stories</span>
        </div>
        <p className="text-sm text-white/50">{HUB_HOOKS[locale] ?? HUB_HOOKS.en}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {pages.map((p) => (
            <li key={p.slug + p.category}>
              <Link
                href={pageUrl(p)}
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-start gap-3 h-full"
              >
                {p.emoji && <span className="text-2xl shrink-0">{p.emoji}</span>}
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white line-clamp-2">{p.h1}</div>
                  <div className="text-xs text-white/40 line-clamp-2 mt-0.5">{p.description}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
