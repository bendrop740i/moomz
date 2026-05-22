import type { Metadata } from "next";
import QuoteHub from "@/app/_seo/quote-hub";
import { canonicalUrl } from "@/lib/i18n-server";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return {
    title: "Citations & phrases cultes par thème — moomz",
    description:
      "Les plus belles citations soigneusement attribuées, classées par thème : amour, amitié, motivation, vie, bonheur, sagesse… À lire, partager et transformer en sondage.",
    alternates: { canonical: canonicalUrl() },
  };
}

export default function CitationsHub() {
  return <QuoteHub locale="fr" />;
}
