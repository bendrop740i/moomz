import Link from "next/link";
import { allPages } from "@/lib/seo";
import type { SeoPage } from "@/lib/seo/types";

const FOOTER_LINKS_FR = [
  { label: "Idées de sondage", href: "/idees" },
  { label: "📖 Read", href: "/read" },
  { label: "💬 Citations", href: "/citations" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
];

const FOOTER_LINKS_EN = [
  { label: "Poll ideas", href: "/ideas" },
  { label: "📖 Read", href: "/read" },
  { label: "💬 Quotes", href: "/quotes" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
];

const TOOL_LINKS_FR = [
  { label: "💱 Convertisseur", href: "/convertisseur" },
  { label: "🌤️ Météo", href: "/meteo" },
  { label: "🕐 Heure dans le monde", href: "/heure" },
  { label: "🎉 Jours fériés", href: "/jours-feries" },
  { label: "₿ Crypto", href: "/crypto" },
  { label: "📖 Dictionnaire", href: "/definition" },
  { label: "🌌 Cosmos", href: "/cosmos" },
  { label: "🍽️ Recettes", href: "/recettes" },
  { label: "♈ Horoscope", href: "/astro" },
  { label: "🧰 Tous les outils", href: "/outils" },
];

const TOOL_LINKS_EN = [
  { label: "💱 Currency converter", href: "/convertisseur" },
  { label: "🌤️ Weather", href: "/meteo" },
  { label: "🕐 World clock", href: "/heure" },
  { label: "🎉 Holidays", href: "/jours-feries" },
  { label: "₿ Crypto", href: "/crypto" },
  { label: "📖 Dictionary", href: "/define" },
  { label: "🌌 Cosmos", href: "/cosmos" },
  { label: "🍽️ Recipes", href: "/recettes" },
  { label: "♈ Horoscope", href: "/astro" },
  { label: "🧰 All tools", href: "/outils" },
];

// Deterministic shuffle seeded by day-of-year so the footer rotates daily
// without breaking caching mid-day.
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = arr.slice();
  let s = seed >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function todaySeed(): number {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}

const VS_RE = /^moomz-vs-/;
const FORMAT_RE = /(-option-poll$|^sondage-\d-options$|yes-no-poll|sondage-oui-non|this-or-that-poll|sondage-this-or-that-fr|emoji-poll|sondage-emoji|image-poll|sondage-avec-image|anonymous-poll|sondage-anonyme)/;

function bucketize(pages: SeoPage[]) {
  const ideas: SeoPage[] = [];
  const guides: SeoPage[] = [];
  const vs: SeoPage[] = [];
  const formats: SeoPage[] = [];
  const blog: SeoPage[] = [];

  for (const p of pages) {
    if (p.category === "idees" || p.category === "ideas") ideas.push(p);
    else if (p.category === "blog") blog.push(p);
    else if (p.category === "guides") {
      if (VS_RE.test(p.slug)) vs.push(p);
      else if (FORMAT_RE.test(p.slug)) formats.push(p);
      else guides.push(p);
    }
  }
  return { ideas, guides, vs, formats, blog };
}

function pillLabel(p: SeoPage): string {
  // The H1 often starts with "Sondages " / "Poll " — strip and take the head before ":"
  const head = p.h1.split(":")[0].split("—")[0].trim();
  return head.replace(/^Sondages?\s+/i, "").replace(/^Polls?\s+/i, "").trim();
}

function Pill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center max-w-full rounded-full bg-white/[0.06] hover:bg-gradient-to-r hover:from-pink-500/25 hover:to-purple-500/25 border border-white/10 hover:border-white/25 px-3 py-1.5 text-xs text-white/70 hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
    >
      <span className="truncate">{children}</span>
    </Link>
  );
}

function Section({
  title,
  emoji,
  pages,
  limit,
}: {
  title: string;
  emoji: string;
  pages: SeoPage[];
  limit: number;
}) {
  if (pages.length === 0) return null;
  const list = pages.slice(0, limit);
  return (
    <div className="glass rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base leading-none">{emoji}</span>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
          {title}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {list.map((p) => (
          <li key={p.slug + p.category} className="max-w-full">
            <Pill href={`/${p.category}/${p.slug}`}>
              {p.emoji ? `${p.emoji} ` : ""}
              {pillLabel(p)}
            </Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SeoFooter({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const links = locale === "en" ? FOOTER_LINKS_EN : FOOTER_LINKS_FR;
  const toolLinks = locale === "en" ? TOOL_LINKS_EN : TOOL_LINKS_FR;

  // Filter pages by locale (with EN as fallback for FR-only readers if pool is thin)
  const localePages = allPages.filter((p) => p.locale === locale);
  const seed = todaySeed();
  const shuffled = seededShuffle(localePages, seed);
  const buckets = bucketize(shuffled);

  const year = new Date().getFullYear();

  const t =
    locale === "en"
      ? {
          tagline: "Free vibe-checks & polls. Ask anything, share a link, watch the votes roll in.",
          made: "made with",
          inParis: "in Paris",
          explore: "Explore",
          tools: "Free tools",
          ideas: "Popular ideas",
          guides: "Guides",
          vs: "moomz vs…",
          formats: "Poll formats",
          blog: "From the blog",
          rights: "All rights reserved.",
          cta: "Create a poll",
        }
      : {
          tagline: "Vibe-checks & sondages gratuits. Pose ta question, partage un lien, regarde les votes tomber.",
          made: "fait avec",
          inParis: "à Paris",
          explore: "Explorer",
          tools: "Outils gratuits",
          ideas: "Idées populaires",
          guides: "Guides",
          vs: "moomz vs…",
          formats: "Formats de sondage",
          blog: "Sur le blog",
          rights: "Tous droits réservés.",
          cta: "Créer un sondage",
        };

  return (
    <footer className="mt-12 cv-auto">
      {/* Top: brand block + nav columns */}
      <div className="glass rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand block */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-4xl bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 bg-clip-text text-transparent"
            >
              moomz
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t.tagline}
            </p>
            <p className="mt-4 text-xs text-white/40">
              {t.made} <span className="text-pink-400">💖</span> {t.inParis}
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:from-pink-400 hover:to-purple-400 transition-colors"
            >
              ✨ {t.cta}
            </Link>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                {t.explore}
              </h3>
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                {t.tools}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {toolLinks.map((l) => (
                  <li key={l.href} className="max-w-full">
                    <Pill href={l.href}>{l.label}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SEO pill clusters — grouped in subtle cards */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <Section title={t.ideas} emoji="💡" pages={buckets.ideas} limit={14} />
        </div>
        <Section title={t.guides} emoji="📘" pages={buckets.guides} limit={8} />
        <Section title={t.vs} emoji="⚔️" pages={buckets.vs} limit={6} />
        <Section title={t.formats} emoji="🗳️" pages={buckets.formats} limit={6} />
        <Section title={t.blog} emoji="✍️" pages={buckets.blog} limit={6} />
      </div>

      {/* Bottom bar */}
      <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-white/40">
          © {year} <span className="font-display text-white/60">moomz</span> · {t.rights}
        </p>
        <p className="text-xs text-white/30">
          {locale === "en" ? "Made for the chronically online 💫" : "Fait pour les ultra-connecté·e·s 💫"}
        </p>
      </div>
    </footer>
  );
}
