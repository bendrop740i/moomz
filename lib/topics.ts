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
