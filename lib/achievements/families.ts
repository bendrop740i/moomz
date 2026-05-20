// Parametric achievement engine — families × tiers.
//
// Each FAMILY is one progression axis (votes cast, polls created, day streak…).
// Each family has a list of TIERS (thresholds). One concrete achievement is
// generated per (family, threshold) → id = `${family.id}.${threshold}`.
//
// This is how we ship hundreds of achievements in 8 languages from ~40 lines
// of data + ~25 i18n templates (one per family) instead of thousands of
// hand-written strings. Add a family or a tier → new achievements, free.
//
// `metric` names a value on `UserStats` (see engine.ts). Topic families use
// the synthetic metric `topic:<topicId>` resolved against `stats.topicVotes`.

export type AchCategory =
  | "voting"
  | "creating"
  | "streak"
  | "loyalty"
  | "rebel"
  | "economy"
  | "predictions"
  | "topics"
  | "meta";

export type AchFamily = {
  id: string;
  metric: string;
  emoji: string;
  category: AchCategory;
  // Ascending thresholds. The user unlocks tier T when metric >= T.
  tiers: number[];
};

// The 10 onboarding topics (lib/topics.ts) — used for per-topic families.
export const ACH_TOPICS: { id: string; emoji: string }[] = [
  { id: "food", emoji: "🍔" },
  { id: "couple", emoji: "💖" },
  { id: "drama", emoji: "🎭" },
  { id: "tech", emoji: "💻" },
  { id: "lifestyle", emoji: "🌿" },
  { id: "debat", emoji: "🗣️" },
  { id: "sport", emoji: "⚽" },
  { id: "musique", emoji: "🎵" },
  { id: "money", emoji: "💸" },
  { id: "ado", emoji: "🧃" },
];

// Core families — wired in M1 (counters already tracked or added in migration
// 016). Prediction families are defined now but only progress once M2 ships.
export const CORE_FAMILIES: AchFamily[] = [
  { id: "votes", metric: "votesCast", emoji: "🗳️", category: "voting",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500, 750, 1000, 1500, 2500, 5000, 10000, 25000, 50000] },
  { id: "streak", metric: "voteStreakTop", emoji: "🔥", category: "streak",
    tiers: [3, 5, 7, 10, 12, 15, 18, 21, 25, 30, 40, 50] },
  { id: "daily", metric: "dailyStreak", emoji: "📅", category: "loyalty",
    tiers: [2, 3, 5, 7, 10, 14, 21, 30, 45, 60, 90, 120, 180, 270, 365] },
  { id: "days", metric: "activeDays", emoji: "🗓️", category: "loyalty",
    tiers: [1, 3, 7, 14, 30, 60, 100, 150, 250, 365, 500, 750, 1000] },
  { id: "polls", metric: "pollsCreated", emoji: "📊", category: "creating",
    tiers: [1, 3, 5, 10, 20, 35, 50, 75, 100, 150, 250, 400, 650, 1000] },
  { id: "viral", metric: "bestPollVotes", emoji: "🚀", category: "creating",
    tiers: [10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000] },
  { id: "rebel", metric: "rebelCount", emoji: "😈", category: "rebel",
    tiers: [1, 5, 10, 25, 50, 100, 175, 300, 500, 750, 1000] },
  { id: "majority", metric: "majorityCount", emoji: "✅", category: "rebel",
    tiers: [1, 5, 10, 25, 50, 100, 175, 300, 500, 750, 1000] },
  { id: "points", metric: "totalPoints", emoji: "⭐", category: "economy",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000] },
  { id: "coins", metric: "coinsEarnedTotal", emoji: "🪙", category: "economy",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000] },
  { id: "spender", metric: "coinsSpentTotal", emoji: "💸", category: "economy",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000] },
  { id: "collector", metric: "achievementsUnlocked", emoji: "🏅", category: "meta",
    tiers: [1, 5, 10, 25, 50, 75, 100, 125, 150, 175, 200, 250] },
  { id: "predictions", metric: "predictionsMade", emoji: "🎲", category: "predictions",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500, 1000] },
  { id: "oracle", metric: "predictionsWon", emoji: "🔮", category: "predictions",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500] },
];

// Per-topic vote families — one family per onboarding topic.
export const TOPIC_FAMILIES: AchFamily[] = ACH_TOPICS.map((t) => ({
  id: `topic_${t.id}`,
  metric: `topic:${t.id}`,
  emoji: t.emoji,
  category: "topics" as const,
  tiers: [5, 20, 60, 150, 400, 1000],
}));

export const ALL_FAMILIES: AchFamily[] = [...CORE_FAMILIES, ...TOPIC_FAMILIES];
