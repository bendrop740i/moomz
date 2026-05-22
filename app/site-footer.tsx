"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { useLocale } from "./locale-context";
import {
  seoHref,
  keywordHubHref,
  quoteHubHref,
  ideasHubHref,
} from "@/lib/seo/seo-href";

// Locale-aware site footer — a compact responsive nav to every moomz surface.
// Mounted once in the root layout so it appears on every page. Each link
// resolves to the version that matches the visitor's locale: keyword + quote
// hubs have per-locale routes; the rest are single routes whose content
// already follows the locale cookie.
//
// Client component on purpose: the root layout never re-renders on client-side
// navigation, so a server `getLocale()` here would freeze the footer in the
// first-load language. `useLocale()` is URL/cookie-aware and updates live.

type FooterStrings = {
  tagline: string;
  create: string;
  discover: string;
  ideas: string;
  keywords: string;
  quotes: string;
  quiz: string;
  achievements: string;
  shop: string;
  tools: string;
  guides: string;
  blog: string;
};

const STR: Record<Locale, FooterStrings> = {
  fr: { tagline: "Le vibe-check qui se partage.", create: "Créer un sondage", discover: "Discover", ideas: "Idées", keywords: "Mots-clés", quotes: "Citations", quiz: "Quiz", achievements: "Haut faits", shop: "Boutique", tools: "Outils", guides: "Guides", blog: "Blog" },
  en: { tagline: "The vibe-check you share.", create: "Create a poll", discover: "Discover", ideas: "Ideas", keywords: "Keywords", quotes: "Quotes", quiz: "Quiz", achievements: "Achievements", shop: "Shop", tools: "Tools", guides: "Guides", blog: "Blog" },
  es: { tagline: "El vibe-check que se comparte.", create: "Crear encuesta", discover: "Discover", ideas: "Ideas", keywords: "Palabras clave", quotes: "Citas", quiz: "Quiz", achievements: "Logros", shop: "Tienda", tools: "Herramientas", guides: "Guías", blog: "Blog" },
  it: { tagline: "Il vibe-check da condividere.", create: "Crea sondaggio", discover: "Discover", ideas: "Idee", keywords: "Parole chiave", quotes: "Citazioni", quiz: "Quiz", achievements: "Imprese", shop: "Negozio", tools: "Strumenti", guides: "Guide", blog: "Blog" },
  pt: { tagline: "O vibe-check pra compartilhar.", create: "Criar enquete", discover: "Discover", ideas: "Ideias", keywords: "Palavras-chave", quotes: "Citações", quiz: "Quiz", achievements: "Conquistas", shop: "Loja", tools: "Ferramentas", guides: "Guias", blog: "Blog" },
  de: { tagline: "Der Vibe-Check zum Teilen.", create: "Umfrage erstellen", discover: "Discover", ideas: "Ideen", keywords: "Stichwörter", quotes: "Zitate", quiz: "Quiz", achievements: "Erfolge", shop: "Shop", tools: "Tools", guides: "Guides", blog: "Blog" },
  ja: { tagline: "シェアできるバイブチェック。", create: "投票を作成", discover: "Discover", ideas: "アイデア", keywords: "キーワード", quotes: "名言", quiz: "クイズ", achievements: "実績", shop: "ショップ", tools: "ツール", guides: "ガイド", blog: "ブログ" },
  zh: { tagline: "可分享的氛围测验。", create: "创建投票", discover: "Discover", ideas: "创意", keywords: "关键词", quotes: "名言", quiz: "测验", achievements: "成就", shop: "商店", tools: "工具", guides: "指南", blog: "博客" },
};

export default function SiteFooter() {
  const locale = useLocale() as Locale;
  const s = STR[locale] ?? STR.en;

  // [emoji, label, href] — order = display order.
  const links: [string, string, string][] = [
    ["🗳️", s.create, "/"],
    ["🔥", s.discover, "/discover"],
    ["💬", s.quotes, quoteHubHref(locale)],
    ["🧠", s.quiz, seoHref("quiz", locale)],
    ["🏅", s.achievements, "/haut-faits"],
    ["🛍️", s.shop, "/boutique"],
    ["💡", s.ideas, ideasHubHref(locale)],
    ["🔤", s.keywords, keywordHubHref(locale)],
    ["🧰", s.tools, seoHref("outils", locale)],
    ["📘", s.guides, seoHref("guides", locale)],
    ["✍️", s.blog, seoHref("blog", locale)],
  ];

  return (
    <footer className="mt-12 border-t border-white/10 pt-6 space-y-4">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="font-display text-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 bg-clip-text text-transparent"
        >
          moomz
        </Link>
        <span className="text-xs text-white/35">{s.tagline}</span>
      </div>
      <nav aria-label="moomz" className="flex flex-wrap gap-1.5">
        {links.map(([emoji, label, href]) => (
          <Link
            key={href}
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 px-3 py-1.5 text-xs text-white/70 hover:text-white transition-colors"
          >
            <span aria-hidden>{emoji}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
