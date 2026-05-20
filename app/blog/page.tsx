import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { getLocale } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Blog moomz : sondage, vibe-check, culture Gen Z",
  description:
    "Analyses et tendances : pourquoi les sondages cartonnent, vibe-check, culture Gen Z, dating poll, sondage anonyme.",
  alternates: { canonical: "https://moomz.com/blog" },
};

export default function BlogHub() {
  const locale = getLocale();
  const all = pagesByCategory("blog");
  // Locale-pure: only the visitor's-language posts. Blog exists in FR/EN
  // only, so non-FR/EN visitors fall back to EN, then to the full pool.
  const pages =
    all.filter((p) => p.locale === locale).length > 0
      ? all.filter((p) => p.locale === locale)
      : all.filter((p) => p.locale === "en").length > 0
        ? all.filter((p) => p.locale === "en")
        : all;
  return (
    <SeoHubView
      title="Blog moomz"
      description="Vibe-check, culture du sondage, comparatifs, viral case studies."
      pages={pages}
      locale={pages[0]?.locale}
    />
  );
}
