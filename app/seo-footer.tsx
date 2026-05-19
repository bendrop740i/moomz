import Link from "next/link";
import { allPages } from "@/lib/seo";

const FOOTER_LINKS_FR = [
  { label: "Idées de sondage", href: "/idees" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Poll ideas (EN)", href: "/ideas" },
];

const FOOTER_LINKS_EN = [
  { label: "Poll ideas", href: "/ideas" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Idées (FR)", href: "/idees" },
];

const FEATURED_SLUGS_FR = [
  "instagram-story",
  "tiktok",
  "couple",
  "soiree",
  "drole",
  "this-or-that",
  "would-you-rather",
  "drama",
  "mariage",
  "voyage",
  "famille",
  "ado",
];

const FEATURED_SLUGS_EN = [
  "instagram-story-poll",
  "tiktok-poll",
  "couple-questions",
  "party-en",
  "this-or-that",
  "would-you-rather-en",
  "drama-polls",
  "wedding-en",
];

export default function SeoFooter({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const links = locale === "en" ? FOOTER_LINKS_EN : FOOTER_LINKS_FR;
  const slugs = locale === "en" ? FEATURED_SLUGS_EN : FEATURED_SLUGS_FR;
  const category = locale === "en" ? "ideas" : "idees";
  const featured = slugs
    .map((s) => allPages.find((p) => p.slug === s && p.category === category))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <footer className="mt-12 pt-8 border-t border-white/10 space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-white/60 hover:text-white transition"
          >
            {l.label}
          </Link>
        ))}
      </div>
      {featured.length > 0 && (
        <div>
          <div className="text-xs uppercase tracking-widest text-white/30 mb-2">
            {locale === "en" ? "Popular ideas" : "Idées populaires"}
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {featured.map((p) => (
              <li key={p.slug + p.category}>
                <Link
                  href={`/${p.category}/${p.slug}`}
                  className="inline-block rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/70 hover:text-white transition"
                >
                  {p.emoji} {p.h1.split(":")[0].replace(/^Sondages? /i, "").trim()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
}
