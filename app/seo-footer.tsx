import Link from "next/link";
import { allPages } from "@/lib/seo";
import type { SeoPage } from "@/lib/seo/types";

const FOOTER_LINKS_FR = [
  { label: "Idées de sondage", href: "/idees" },
  { label: "📖 Read", href: "/read" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
];

const FOOTER_LINKS_EN = [
  { label: "Poll ideas", href: "/ideas" },
  { label: "📖 Read", href: "/read" },
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

function Section({
  title,
  pages,
  limit,
}: {
  title: string;
  pages: SeoPage[];
  limit: number;
}) {
  if (pages.length === 0) return null;
  const list = pages.slice(0, limit);
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-white/30 mb-2">{title}</div>
      <ul className="flex flex-wrap gap-1.5">
        {list.map((p) => (
          <li key={p.slug + p.category} className="max-w-full">
            <Link
              href={`/${p.category}/${p.slug}`}
              className="inline-flex items-center max-w-full rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white transition whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <span className="truncate">
                {p.emoji ? `${p.emoji} ` : ""}
                {pillLabel(p)}
              </span>
            </Link>
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

  const labels = locale === "en"
    ? {
        ideas: "Popular ideas",
        guides: "Guides",
        vs: "moomz vs…",
        formats: "Poll formats",
        blog: "Blog",
        tools: "Free tools",
      }
    : {
        ideas: "Idées populaires",
        guides: "Guides",
        vs: "moomz vs…",
        formats: "Formats de sondage",
        blog: "Blog",
        tools: "Outils gratuits",
      };

  return (
    <footer className="mt-12 pt-8 border-t border-white/10 space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="min-h-[44px] inline-flex items-center text-white/60 hover:text-white transition"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest text-white/30 mb-2">{labels.tools}</div>
        <ul className="flex flex-wrap gap-1.5">
          {toolLinks.map((l) => (
            <li key={l.href} className="max-w-full">
              <Link
                href={l.href}
                className="inline-flex items-center max-w-full rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white transition whitespace-nowrap overflow-hidden text-ellipsis"
              >
                <span className="truncate">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Section title={labels.ideas} pages={buckets.ideas} limit={12} />
      <Section title={labels.guides} pages={buckets.guides} limit={8} />
      <Section title={labels.vs} pages={buckets.vs} limit={6} />
      <Section title={labels.formats} pages={buckets.formats} limit={6} />
      <Section title={labels.blog} pages={buckets.blog} limit={6} />
    </footer>
  );
}
