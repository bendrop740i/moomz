// Parametric achievement engine — families × tiers.
//
// Each FAMILY is one progression axis (votes cast, polls created, day streak…).
// Each family has a list of TIERS (thresholds). One concrete achievement is
// generated per (family, threshold) → id = `${family.id}.${threshold}`.
//
// This is how we ship ~420 achievements in 8 languages from ~40 families of
// data + one i18n template per family — instead of thousands of hand-written
// strings. Add a family or a tier → new achievements, free, auto-translated.
//
// `metric` names a value on `UserStats` (see engine.ts). Topic families use
// the synthetic metrics `topic:<id>` (votes) and `tpoll:<id>` (polls created).

export type AchCategory =
  | "voting"
  | "creating"
  | "streak"
  | "loyalty"
  | "rebel"
  | "economy"
  | "predictions"
  | "ask"
  | "explore"
  | "performance"
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

// Core families — every domain of the app. Prediction / boost families are
// defined now but only progress once M2 / M3 ship (they show as locked goals).
export const CORE_FAMILIES: AchFamily[] = [
  // — Voting —
  { id: "votes", metric: "votesCast", emoji: "🗳️", category: "voting",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500, 750, 1000, 1500, 2500, 5000, 10000, 25000, 50000] },
  { id: "nightowl", metric: "nightVotes", emoji: "🌙", category: "voting",
    tiers: [1, 5, 10, 25, 50, 100, 250, 500] },
  { id: "earlybird", metric: "dawnVotes", emoji: "🌅", category: "voting",
    tiers: [1, 5, 10, 25, 50, 100, 250, 500] },
  { id: "weekend", metric: "weekendVotes", emoji: "🎉", category: "voting",
    tiers: [5, 25, 75, 200, 500, 1000, 2500] },
  // — Streaks —
  { id: "streak", metric: "voteStreakTop", emoji: "🔥", category: "streak",
    tiers: [3, 5, 7, 10, 12, 15, 18, 21, 25, 30, 40, 50] },
  { id: "rebelstreak", metric: "rebelStreakTop", emoji: "🏴", category: "streak",
    tiers: [3, 5, 10, 15, 20, 30, 50] },
  // — Loyalty —
  { id: "daily", metric: "dailyStreak", emoji: "📅", category: "loyalty",
    tiers: [2, 3, 5, 7, 10, 14, 21, 30, 45, 60, 90, 120, 180, 270, 365] },
  { id: "days", metric: "activeDays", emoji: "🗓️", category: "loyalty",
    tiers: [1, 3, 7, 14, 30, 60, 100, 150, 250, 365, 500, 750, 1000] },
  { id: "veteran", metric: "accountAgeDays", emoji: "🎂", category: "loyalty",
    tiers: [1, 7, 30, 90, 180, 365, 545, 730, 1095] },
  // — Creating —
  { id: "polls", metric: "pollsCreated", emoji: "📊", category: "creating",
    tiers: [1, 3, 5, 10, 20, 35, 50, 75, 100, 150, 250, 400, 650, 1000] },
  { id: "viral", metric: "bestPollVotes", emoji: "🚀", category: "creating",
    tiers: [10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000] },
  // — Performance —
  { id: "audience", metric: "receivedVotesTotal", emoji: "📣", category: "performance",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000] },
  // — Rebel —
  { id: "rebel", metric: "rebelCount", emoji: "😈", category: "rebel",
    tiers: [1, 5, 10, 25, 50, 100, 175, 300, 500, 750, 1000] },
  { id: "majority", metric: "majorityCount", emoji: "✅", category: "rebel",
    tiers: [1, 5, 10, 25, 50, 100, 175, 300, 500, 750, 1000] },
  // — Economy —
  { id: "points", metric: "totalPoints", emoji: "⭐", category: "economy",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000] },
  { id: "coins", metric: "coinsEarnedTotal", emoji: "🪙", category: "economy",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000] },
  { id: "spender", metric: "coinsSpentTotal", emoji: "💸", category: "economy",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000] },
  { id: "decorator", metric: "cosmeticsUnlocked", emoji: "🎨", category: "economy",
    tiers: [1, 2, 3, 5, 7, 10] },
  { id: "booster", metric: "pollsBoosted", emoji: "⚡", category: "economy",
    tiers: [1, 3, 5, 10, 25, 50, 100] },
  // — ASK —
  { id: "asker", metric: "questionsAsked", emoji: "❓", category: "ask",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500] },
  { id: "answerer", metric: "questionsAnswered", emoji: "💬", category: "ask",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500] },
  { id: "inbox", metric: "questionsReceived", emoji: "📨", category: "ask",
    tiers: [1, 5, 10, 25, 50, 100, 250, 500, 1000] },
  // — Explore —
  { id: "quizzer", metric: "quizzesCompleted", emoji: "🧠", category: "explore",
    tiers: [1, 3, 5, 10, 20, 35, 50, 75, 100] },
  { id: "explorer", metric: "pollsSeen", emoji: "🧭", category: "explore",
    tiers: [10, 50, 100, 250, 500, 1000, 2500, 5000, 10000] },
  { id: "globetrotter", metric: "distinctTopicsVoted", emoji: "🌐", category: "explore",
    tiers: [1, 3, 5, 7, 10] },
  // — Predictions (M2) —
  { id: "predictions", metric: "predictionsMade", emoji: "🎲", category: "predictions",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500, 1000] },
  { id: "oracle", metric: "predictionsWon", emoji: "🔮", category: "predictions",
    tiers: [1, 5, 10, 25, 50, 100, 200, 350, 500] },
  { id: "prophet", metric: "predictionStreakTop", emoji: "🎯", category: "predictions",
    tiers: [2, 3, 5, 10, 15, 25, 50] },
  { id: "highroller", metric: "predictionMaxStake", emoji: "💎", category: "predictions",
    tiers: [50, 100, 250, 500, 1000, 2500, 5000] },
  // — Meta —
  { id: "collector", metric: "achievementsUnlocked", emoji: "🏅", category: "meta",
    tiers: [1, 5, 10, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300] },
];

// Per-topic vote families — one per onboarding topic.
export const TOPIC_VOTE_FAMILIES: AchFamily[] = ACH_TOPICS.map((t) => ({
  id: `tvote_${t.id}`,
  metric: `topic:${t.id}`,
  emoji: t.emoji,
  category: "topics" as const,
  tiers: [5, 20, 60, 150, 400, 1000],
}));

// Per-topic poll-creation families — one per onboarding topic.
export const TOPIC_CREATE_FAMILIES: AchFamily[] = ACH_TOPICS.map((t) => ({
  id: `tcreate_${t.id}`,
  metric: `tpoll:${t.id}`,
  emoji: t.emoji,
  category: "topics" as const,
  tiers: [1, 3, 10, 25, 60, 150],
}));

export const ALL_FAMILIES: AchFamily[] = [
  ...CORE_FAMILIES,
  ...TOPIC_VOTE_FAMILIES,
  ...TOPIC_CREATE_FAMILIES,
];
