import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";
import { canonicalUrl } from "@/lib/i18n-server";

export function generateMetadata(): Metadata {
  return {
    title: "Poll Ideas: 30+ Niches for Story, Party, Couples, Class",
    description:
      "30+ poll ideas sorted by niche: Instagram, TikTok, couples, parties, weddings, classroom, debates. Launch your moomz in 10 seconds.",
    alternates: { canonical: canonicalUrl() },
  };
}

export default function IdeasHub() {
  const pages = pagesByCategory("ideas");
  return (
    <SeoHubView
      title="Poll Ideas"
      description="30+ ideas by niche. Story, party, couples, classroom, debates — ready to launch."
      pages={pages}
      locale="en"
    />
  );
}
