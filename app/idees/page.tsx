import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";

export const metadata: Metadata = {
  title: "Idées de sondage : 50+ niches pour story, soirée, couple, classe",
  description:
    "50+ idées de sondage rangées par niche : Insta, TikTok, couple, soirée, mariage, classe, débats. Lance ton moomz en 10 secondes.",
  alternates: { canonical: "https://moomz.com/idees" },
};

export default function IdeesHub() {
  const pages = pagesByCategory("idees").filter((p) => p.locale === "fr");
  return (
    <SeoHubView
      title="Idées de sondage"
      description="50+ idées rangées par niche. Story, soirée, couple, classe, débats — tout est prêt à lancer."
      pages={pages}
      locale="fr"
    />
  );
}
