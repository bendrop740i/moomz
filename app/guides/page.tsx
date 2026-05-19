import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";

export const metadata: Metadata = {
  title: "Guides moomz : tutos sondage Instagram, anonyme, WhatsApp",
  description:
    "Guides pratiques : faire un sondage Instagram, anonyme, sans inscription, partager sur WhatsApp. FR + EN.",
  alternates: { canonical: "https://moomz.com/guides" },
};

export default function GuidesHub() {
  const pages = pagesByCategory("guides");
  return (
    <SeoHubView
      title="Guides moomz"
      description="Tutos pas-à-pas : sondage Instagram, anonyme, WhatsApp, Strawpoll alternatives. Bilingue FR/EN."
      pages={pages}
    />
  );
}
