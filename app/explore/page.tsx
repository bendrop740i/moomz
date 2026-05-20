import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/lib/i18n-server";
import { getAllKeywords } from "@/lib/seo/keywords/loader";
import { getAllTemplates } from "@/lib/seo/templates/loader";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Explorer moomz — tout le contenu, toutes les langues",
  description:
    "Le plan complet de moomz : mots-clés dans 8 langues, modèles de sondage, quiz, comparatifs, outils gratuits, idées, guides et blog. Tout au même endroit.",
  alternates: { canonical: "https://moomz.com/explore" },
  openGraph: {
    title: "Explorer moomz",
    description:
      "Tout le contenu moomz au même endroit : mots-clés 8 langues, modèles, quiz, comparatifs, outils, idées, guides, blog.",
    url: "https://moomz.com/explore",
    type: "website",
    siteName: "moomz",
  },
};

const KEYWORD_LANGS: { code: HubLocale; label: string; href: string }[] = [
  { code: "fr", label: "Français", href: "/mot" },
  { code: "en", label: "English", href: "/word" },
  { code: "es", label: "Español", href: "/topic/es" },
  { code: "it", label: "Italiano", href: "/topic/it" },
  { code: "pt", label: "Português", href: "/topic/pt" },
  { code: "de", label: "Deutsch", href: "/topic/de" },
  { code: "ja", label: "日本語", href: "/topic/ja" },
  { code: "zh", label: "中文", href: "/topic/zh" },
];

const TOOLS: { emoji: string; fr: string; en: string; href: string }[] = [
  { emoji: "💱", fr: "Convertisseur", en: "Currency converter", href: "/convertisseur" },
  { emoji: "🌤️", fr: "Météo", en: "Weather", href: "/meteo" },
  { emoji: "🕐", fr: "Heure mondiale", en: "World clock", href: "/heure" },
  { emoji: "🎉", fr: "Jours fériés", en: "Holidays", href: "/jours-feries" },
  { emoji: "₿", fr: "Crypto", en: "Crypto", href: "/crypto" },
  { emoji: "📖", fr: "Dictionnaire", en: "Dictionary", href: "/definition" },
  { emoji: "🌌", fr: "Cosmos", en: "Cosmos", href: "/cosmos" },
  { emoji: "🍽️", fr: "Recettes", en: "Recipes", href: "/recettes" },
  { emoji: "♈", fr: "Horoscope", en: "Horoscope", href: "/astro" },
];

export default function ExplorePage() {
  const locale = getLocale();
  const hl: HubLocale = (
    ["fr", "en", "es", "it", "pt", "de", "ja", "zh"] as string[]
  ).includes(locale)
    ? (locale as HubLocale)
    : "en";
  const en = hl !== "fr";

  const keywords = getAllKeywords();
  const kwByLocale = new Map<string, number>();
  for (const k of keywords)
    kwByLocale.set(k.locale, (kwByLocale.get(k.locale) ?? 0) + 1);
  const templateCount = getAllTemplates().length;

  const t = en
    ? {
        title: "Explore moomz",
        sub: "Every piece of moomz content, in one place. Pick a language, a format, a topic — and dive in.",
        keywords: "Keyword pages",
        keywordsSub: "One page per topic, with the polls that talk about it.",
        templates: "Poll templates",
        templatesSub: "Ready-to-launch polls — one tap fills the create form.",
        quiz: "Quizzes",
        quizSub: "Scored multiple-choice quizzes across science, culture and more.",
        compare: "Comparisons",
        compareSub: "moomz vs other tools, and head-to-head matchups.",
        content: "Ideas, guides & blog",
        contentSub: "Inspiration, how-tos and stories about polls.",
        tools: "Free tools",
        toolsSub: "Live-data utilities — currency, weather, crypto and more.",
        pages: "pages",
        browse: "Browse",
        cta: "Create your free poll →",
      }
    : {
        title: "Explorer moomz",
        sub: "Tout le contenu moomz, au même endroit. Choisis une langue, un format, un sujet — et plonge.",
        keywords: "Pages mots-clés",
        keywordsSub: "Une page par sujet, avec les sondages qui en parlent.",
        templates: "Modèles de sondage",
        templatesSub: "Sondages prêts à lancer — un tap remplit le formulaire.",
        quiz: "Quiz",
        quizSub: "Quiz à choix multiples notés : sciences, culture et plus.",
        compare: "Comparatifs",
        compareSub: "moomz face aux autres outils, et duels thématiques.",
        content: "Idées, guides & blog",
        contentSub: "Inspiration, tutos et histoires autour des sondages.",
        tools: "Outils gratuits",
        toolsSub: "Utilitaires en temps réel — devises, météo, crypto et plus.",
        pages: "pages",
        browse: "Parcourir",
        cta: "Crée ton sondage gratuit →",
      };

  const contentLinks = en
    ? [
        { emoji: "💡", label: "Poll ideas", href: "/ideas" },
        { emoji: "📘", label: "Guides", href: "/guides" },
        { emoji: "✍️", label: "Blog", href: "/blog" },
        { emoji: "💬", label: "Quotes", href: "/quotes" },
        { emoji: "📖", label: "Read", href: "/read" },
      ]
    : [
        { emoji: "💡", label: "Idées de sondage", href: "/idees" },
        { emoji: "📘", label: "Guides", href: "/guides" },
        { emoji: "✍️", label: "Blog", href: "/blog" },
        { emoji: "💬", label: "Citations", href: "/citations" },
        { emoji: "📖", label: "Read", href: "/read" },
      ];

  return (
    <div className="space-y-8 fade-up">
      <HubNav locale={hl} current="explore" />

      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          🧭 explore · moomz
        </div>
        <h1 className="font-display text-4xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">{t.sub}</p>
      </header>

      {/* Keyword hubs — the 8-language tree */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🔤 {t.keywords}</h2>
          <p className="text-sm text-white/50">{t.keywordsSub}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {KEYWORD_LANGS.map((l) => (
            <li key={l.code}>
              <Link
                href={l.href}
                className="glass rounded-2xl px-4 py-4 hover:bg-white/10 transition flex flex-col gap-1 h-full"
              >
                <span className="font-display text-lg text-white">
                  {l.label}
                </span>
                <span className="text-xs text-white/45">
                  {kwByLocale.get(l.code) ?? 0} {t.pages}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Templates + Quiz + Compare */}
      <section className="grid gap-3 sm:grid-cols-3">
        <Link
          href="/template"
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">📋</span>
          <span className="font-display text-xl text-white mt-1">
            {t.templates}
          </span>
          <span className="text-xs text-white/50">{t.templatesSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">
            {templateCount} {t.pages} →
          </span>
        </Link>
        <Link
          href="/quiz"
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">🧠</span>
          <span className="font-display text-xl text-white mt-1">{t.quiz}</span>
          <span className="text-xs text-white/50">{t.quizSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">{t.browse} →</span>
        </Link>
        <Link
          href="/compare"
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">⚔️</span>
          <span className="font-display text-xl text-white mt-1">
            {t.compare}
          </span>
          <span className="text-xs text-white/50">{t.compareSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">{t.browse} →</span>
        </Link>
      </section>

      {/* Free tools */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🧰 {t.tools}</h2>
          <p className="text-sm text-white/50">{t.toolsSub}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
              >
                <span aria-hidden="true">{tool.emoji}</span>
                {en ? tool.en : tool.fr}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/outils"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500/25 to-purple-500/25 border border-pink-400/30 px-3.5 py-2 text-sm text-white hover:from-pink-500/35 hover:to-purple-500/35 transition"
            >
              🧰 {en ? "All tools" : "Tous les outils"} →
            </Link>
          </li>
        </ul>
      </section>

      {/* Ideas / guides / blog */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">📚 {t.content}</h2>
          <p className="text-sm text-white/50">{t.contentSub}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {contentLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
              >
                <span aria-hidden="true">{l.emoji}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>
    </div>
  );
}
