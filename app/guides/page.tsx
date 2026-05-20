import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/seo/types";

export const metadata: Metadata = {
  title: "Guides moomz : tutos sondage Instagram, anonyme, WhatsApp",
  description:
    "Guides pratiques : faire un sondage Instagram, anonyme, sans inscription, partager sur WhatsApp. FR + EN.",
  alternates: { canonical: "https://moomz.com/guides" },
};

// Hub chrome (title + intro) localized for every supported visitor locale.
// NOTE: the guide content itself only exists in FR/EN — this only translates
// the surrounding UI so non-FR/EN visitors aren't shown a French heading.
const GUIDES_HUB_COPY: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Guides moomz",
    description:
      "Tutos pas-à-pas : sondage Instagram, anonyme, WhatsApp, alternatives à Strawpoll.",
  },
  en: {
    title: "moomz guides",
    description:
      "Step-by-step tutorials: Instagram polls, anonymous polls, WhatsApp, Strawpoll alternatives.",
  },
  es: {
    title: "Guías moomz",
    description:
      "Tutoriales paso a paso: encuestas de Instagram, anónimas, WhatsApp, alternativas a Strawpoll.",
  },
  it: {
    title: "Guide moomz",
    description:
      "Tutorial passo passo: sondaggi Instagram, anonimi, WhatsApp, alternative a Strawpoll.",
  },
  pt: {
    title: "Guias moomz",
    description:
      "Tutoriais passo a passo: enquetes no Instagram, anônimas, WhatsApp, alternativas ao Strawpoll.",
  },
  de: {
    title: "moomz-Guides",
    description:
      "Schritt-für-Schritt-Anleitungen: Instagram-Umfragen, anonyme Umfragen, WhatsApp, Strawpoll-Alternativen.",
  },
  ja: {
    title: "moomz ガイド",
    description:
      "ステップ式チュートリアル：Instagram投票、匿名投票、WhatsApp、Strawpollの代替。",
  },
  zh: {
    title: "moomz 指南",
    description:
      "分步教程：Instagram 投票、匿名投票、WhatsApp、Strawpoll 替代方案。",
  },
};

export default function GuidesHub() {
  const locale = getLocale();
  const all = pagesByCategory("guides");
  // Locale-pure: only the visitor's-language guides. Guides exist in FR/EN
  // only, so non-FR/EN visitors fall back to EN, then to the full pool.
  const pages =
    all.filter((p) => p.locale === locale).length > 0
      ? all.filter((p) => p.locale === locale)
      : all.filter((p) => p.locale === "en").length > 0
        ? all.filter((p) => p.locale === "en")
        : all;
  // Chrome follows the visitor's locale (not the page-content locale) so the
  // heading reads naturally even when the listed guides fall back to EN.
  const copy = GUIDES_HUB_COPY[locale] ?? GUIDES_HUB_COPY.en;
  return (
    <SeoHubView
      title={copy.title}
      description={copy.description}
      pages={pages}
      locale={locale}
    />
  );
}
