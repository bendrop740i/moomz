import Link from "next/link";
import { allPages } from "@/lib/seo";
import type { Locale } from "@/lib/seo/types";
import { getT, getLocale } from "@/lib/i18n-server";
import { getTopicLabel, type Topic } from "@/lib/topics";
import type { Locale as UiLocale } from "@/lib/i18n";

const TOPICS_HEADING: Record<UiLocale, string> = {
  fr: "Thèmes",
  en: "Topics",
  es: "Temas",
  it: "Temi",
  pt: "Temas",
  de: "Themen",
  ja: "テーマ",
  zh: "主题",
};

// Maps a poll topic (from `lib/topics.ts` Topic IDs, persisted on
// `polls.topics`) to the best-matching SEO landing slug per locale.
// When the slug doesn't exist in the catalogue we fall back to
// `/discover?topic=<id>` so every chip still resolves to something.
const TOPIC_TO_SEO: Record<string, { fr: string | null; en: string | null; label: string; emoji: string }> = {
  food: { fr: "nourriture", en: null, label: "Bouffe", emoji: "🍕" },
  couple: { fr: "couple", en: "couple-questions", label: "Couple", emoji: "💖" },
  tech: { fr: null, en: null, label: "Tech", emoji: "📱" },
  lifestyle: { fr: null, en: null, label: "Lifestyle", emoji: "✨" },
  drama: { fr: "drama", en: "drama-polls", label: "Drama", emoji: "🌶️" },
  debat: { fr: "debat", en: null, label: "Débat", emoji: "🗣️" },
  sport: { fr: "fitness-sport", en: null, label: "Sport", emoji: "⚽" },
  musique: { fr: "musique", en: null, label: "Musique", emoji: "🎸" },
  money: { fr: "argent-budget-jeune", en: null, label: "Argent", emoji: "💸" },
  ado: { fr: "ado", en: "teens-en", label: "Vibes ado", emoji: "🤳" },
};

// Pre-compute the (category, slug) pair available in lib/seo so we can verify
// link targets at render time without touching the filesystem.
const SEO_INDEX: Record<Locale, { idees: Set<string>; ideas: Set<string> }> = (() => {
  const acc = {
    fr: { idees: new Set<string>(), ideas: new Set<string>() },
    en: { idees: new Set<string>(), ideas: new Set<string>() },
    es: { idees: new Set<string>(), ideas: new Set<string>() },
    it: { idees: new Set<string>(), ideas: new Set<string>() },
    pt: { idees: new Set<string>(), ideas: new Set<string>() },
    de: { idees: new Set<string>(), ideas: new Set<string>() },
    ja: { idees: new Set<string>(), ideas: new Set<string>() },
    zh: { idees: new Set<string>(), ideas: new Set<string>() },
  } as Record<Locale, { idees: Set<string>; ideas: Set<string> }>;
  for (const p of allPages) {
    if (p.category === "idees") acc[p.locale].idees.add(p.slug);
    else if (p.category === "ideas") acc[p.locale].ideas.add(p.slug);
  }
  return acc;
})();

function topicHref(topic: string, lang: "fr" | "en"): string {
  const map = TOPIC_TO_SEO[topic];
  if (!map) return `/discover?topic=${encodeURIComponent(topic)}`;
  if (lang === "fr" && map.fr && SEO_INDEX.fr.idees.has(map.fr)) {
    return `/idees/${map.fr}`;
  }
  if (lang === "en" && map.en && SEO_INDEX.en.ideas.has(map.en)) {
    return `/ideas/${map.en}`;
  }
  // Cross-locale fallback: prefer any matching landing in the other locale
  // before bouncing to discover. Keeps the link useful for SEO crawl depth.
  if (map.fr && SEO_INDEX.fr.idees.has(map.fr)) return `/idees/${map.fr}`;
  if (map.en && SEO_INDEX.en.ideas.has(map.en)) return `/ideas/${map.en}`;
  return `/discover?topic=${encodeURIComponent(topic)}`;
}

// Map page locales (incl. EN/FR-only routes) to a UI locale that exists in
// `lib/i18n.ts`. Falls back to FR to match the rest of the app.
function uiLocaleFor(lang: string | null | undefined): UiLocale {
  switch (lang) {
    case "en":
    case "es":
    case "it":
    case "pt":
    case "de":
    case "ja":
    case "zh":
    case "fr":
      return lang;
    default:
      return "fr";
  }
}

export default function TopicPills({
  topics,
  lang,
  label,
}: {
  topics: string[] | null | undefined;
  lang: string | null | undefined;
  label?: string;
}) {
  if (!topics || topics.length === 0) return null;
  // Use the visitor's locale (cookie/Accept-Language) for chrome labels +
  // for which SEO landing to link to (/idees FR vs /ideas EN). The poll's
  // own authoring `lang` is only used as a last-resort fallback.
  const userLocale = getLocale() as UiLocale;
  const target: "fr" | "en" = userLocale === "fr" ? "fr" : "en";
  const t = getT(userLocale);
  const seen = new Set<string>();
  const items = topics
    .filter((topicId) => {
      if (seen.has(topicId)) return false;
      seen.add(topicId);
      return true;
    })
    .map((topicId) => ({
      topic: topicId,
      cfg: TOPIC_TO_SEO[topicId],
      href: topicHref(topicId, target),
      // Resolve via the locale-aware label helper; falls back to the
      // hardcoded FR `cfg.label` (or the raw id) when the topic isn't part
      // of `lib/topics.ts` Topic IDs.
      label: (TOPIC_TO_SEO[topicId]
        ? getTopicLabel(topicId as Topic, t)
        : topicId),
    }));
  if (items.length === 0) return null;

  const safeHeading = label ?? TOPICS_HEADING[userLocale] ?? TOPICS_HEADING.en;

  return (
    <section className="space-y-2" aria-label={safeHeading}>
      <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
        {safeHeading}
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map(({ topic, cfg, href, label: chipLabel }) => (
          <Link
            key={topic}
            href={href}
            className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition inline-flex items-center gap-1.5"
          >
            <span aria-hidden>{cfg?.emoji ?? "✨"}</span>
            <span>{chipLabel}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
