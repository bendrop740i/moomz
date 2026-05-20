export type Topic =
  | "food"
  | "couple"
  | "tech"
  | "lifestyle"
  | "drama"
  | "debat"
  | "sport"
  | "musique"
  | "money"
  | "ado";

// `label` stays as a hardcoded FR fallback so legacy non-i18n callers keep
// working. Locale-aware UI should call `getTopicLabel(id, t)` instead, where
// `t` comes from `useT()` (client) or `getT(locale)` (server) and resolves
// the `topics.<id>` key in `lib/i18n.ts`.
export const TOPICS: { id: Topic; emoji: string; label: string }[] = [
  { id: "food", emoji: "🍕", label: "Bouffe" },
  { id: "couple", emoji: "💖", label: "Couple" },
  { id: "drama", emoji: "🌶️", label: "Drama" },
  { id: "tech", emoji: "📱", label: "Tech" },
  { id: "lifestyle", emoji: "✨", label: "Lifestyle" },
  { id: "debat", emoji: "🗣️", label: "Débat" },
  { id: "sport", emoji: "⚽", label: "Sport" },
  { id: "musique", emoji: "🎸", label: "Musique" },
  { id: "money", emoji: "💸", label: "Argent" },
  { id: "ado", emoji: "🤳", label: "Vibes ado" },
];

export const TOPIC_IDS = TOPICS.map((t) => t.id);

// Locale-aware label resolver. Pass either the `useT()` client hook return
// value or a `getT(locale)`-style server translator. Falls back to the
// hardcoded FR `label` from TOPICS if the `topics.<id>` key is missing in
// the active dictionary (the i18n `t()` helper returns the key as-is on miss,
// so we detect that and substitute the fallback).
export function getTopicLabel(id: Topic, t: (key: string) => string): string {
  const key = `topics.${id}`;
  const translated = t(key);
  if (translated && translated !== key) return translated;
  return TOPICS.find((x) => x.id === id)?.label ?? id;
}

// Heuristic tagging for user-created polls (no LLM).
const RULES: { topic: Topic; re: RegExp }[] = [
  { topic: "food", re: /(pizza|caf[ée]|kebab|sushi|cr[èe]me|glace|tacos|coca|pepsi|cr[êe]pe|chocolat|p[âa]tes|riz|tomate|burger|bouffe|d[éé]jeuner|d[îi]ner|restau|frites|bonbon|biere|alcool)/i },
  { topic: "couple", re: /(date|crush|texter|couple|aime|mariage|toxic|sortir|tinder|enfant|baby|romance|baiser|kiss|sex)/i },
  { topic: "tech", re: /(iphone|android|mac\b|pc\b|tiktok|insta|snap|whatsapp|chatgpt|google|spotify|netflix|prime|app|appli|tech|portable|smartphone)/i },
  { topic: "drama", re: /(cringe|bas[ée]|stalker|filtre|drama|tea|gossip|salty|tox|ex |snitch|backstab)/i },
  { topic: "debat", re: /(macron|smic|vegan|pma|rsa|patron|coll[èe]gue|t[éé]l[éé]trav|fac|alternance|d[éé]bat|politique|loi|vote)/i },
  { topic: "sport", re: /(psg|om|foot|tennis|olymp|nba|fifa|sport|match|but)/i },
  { topic: "musique", re: /(rap|chanson|concert|festival|musique|spotify|son|playlist|album|artist)/i },
  { topic: "money", re: /(€|euro|milli|cash|smic|salaire|riche|millionnaire|argent|prix|payer|tax)/i },
  { topic: "ado", re: /(crush|cringe|bas[ée]|y2k|vibe|hot take|rebel|tiktok|stori|ig|insta|reels)/i },
  { topic: "lifestyle", re: /(r[ée]veil|douche|chausse|karaok[ée]|cin[ée]ma|chien|chat|mer|montagne|tatouage|cheveu|c[ée]l[èe]bre|moustache|voyage|vacance)/i },
];

export function tagQuestion(question: string, options: string[]): Topic[] {
  const text = `${question} ${options.join(" ")}`;
  const hits = new Set<Topic>();
  for (const r of RULES) {
    if (r.re.test(text)) hits.add(r.topic);
  }
  if (hits.size === 0) hits.add("lifestyle");
  return Array.from(hits).slice(0, 3);
}

export function parseTopicsCookie(raw: string | undefined): Topic[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((t) => t.trim() as Topic)
    .filter((t) => (TOPIC_IDS as string[]).includes(t));
}
