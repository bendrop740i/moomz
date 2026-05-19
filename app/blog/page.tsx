import type { Metadata } from "next";
import { pagesByCategory } from "@/lib/seo";
import SeoHubView from "@/app/_seo/seo-hub";

export const metadata: Metadata = {
  title: "Blog moomz : sondage, vibe-check, culture Gen Z",
  description:
    "Analyses et tendances : pourquoi les sondages cartonnent, vibe-check, culture Gen Z, dating poll, sondage anonyme.",
  alternates: { canonical: "https://moomz.com/blog" },
};

export default function BlogHub() {
  const pages = pagesByCategory("blog");
  return (
    <SeoHubView
      title="Blog moomz"
      description="Vibe-check, culture du sondage, comparatifs, viral case studies. FR + EN."
      pages={pages}
    />
  );
}
