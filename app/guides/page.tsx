import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { getLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Guides moomz : tutos sondage Instagram, anonyme, WhatsApp",
  description:
    "Guides pratiques : faire un sondage Instagram, anonyme, sans inscription, partager sur WhatsApp. FR + EN.",
  alternates: { canonical: "https://moomz.com/guides" },
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
  return (
    <SeoHubView
      title="Guides moomz"
      description="Tutos pas-à-pas : sondage Instagram, anonyme, WhatsApp, Strawpoll alternatives."
      pages={pages}
      locale={pages[0]?.locale}
    />
  );
}
