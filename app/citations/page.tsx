import type { Metadata } from "next";
import QuoteHub from "@/app/_seo/quote-hub";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Citations & phrases cultes par thème — moomz",
  description:
    "Les plus belles citations soigneusement attribuées, classées par thème : amour, amitié, motivation, vie, bonheur, sagesse… À lire, partager et transformer en sondage.",
  alternates: { canonical: "https://moomz.com/citations" },
};

export default function CitationsHub() {
  return <QuoteHub locale="fr" />;
}
