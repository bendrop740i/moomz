// Achievement engine — generates every concrete achievement from the families
// and evaluates a user's stats against them.

import { ALL_FAMILIES, type AchCategory, type AchFamily } from "./families";

export type Achievement = {
  // `${familyId}.${threshold}` — stable, stored in profiles.achievements_v2.
  id: string;
  familyId: string;
  metric: string;
  emoji: string;
  category: AchCategory;
  threshold: number;
  // 0-based index of this tier inside its family (drives display + rarity).
  tier: number;
  // Coins granted once, the first time this achievement unlocks.
  coinReward: number;
};

// Coin reward as a function of the threshold: a gentle power curve so easy
// early tiers trickle (~4) and brutal late tiers pay (~60), capped at 250.
// Kept deliberately modest — achievements are a faucet that builds the coin
// habit, not a flood that devalues the currency (and Stripe purchases).
export function coinRewardFor(threshold: number): number {
  const raw = 3 + 4 * Math.pow(Math.log10(threshold + 1), 1.6);
  return Math.max(3, Math.min(250, Math.round(raw)));
}

function buildAll(): Achievement[] {
  const out: Achievement[] = [];
  for (const fam of ALL_FAMILIES) {
    fam.tiers.forEach((threshold, tier) => {
      out.push({
        id: `${fam.id}.${threshold}`,
        familyId: fam.id,
        metric: fam.metric,
        emoji: fam.emoji,
        category: fam.category,
        threshold,
        tier,
        coinReward: coinRewardFor(threshold),
      });
    });
  }
  return out;
}

export const ALL_ACHIEVEMENTS: Achievement[] = buildAll();

export const ACHIEVEMENTS_BY_ID: Map<string, Achievement> = new Map(
  ALL_ACHIEVEMENTS.map((a) => [a.id, a]),
);

export const ACHIEVEMENT_COUNT = ALL_ACHIEVEMENTS.length;

export function familyById(id: string): AchFamily | undefined {
  return ALL_FAMILIES.find((f) => f.id === id);
}

// Every metric the engine can read. Topic metrics resolve via `topicVotes`.
export type UserStats = {
  votesCast: number;
  voteStreakTop: number;
  dailyStreak: number;
  activeDays: number;
  pollsCreated: number;
  bestPollVotes: number;
  rebelCount: number;
  majorityCount: number;
  totalPoints: number;
  coinsEarnedTotal: number;
  coinsSpentTotal: number;
  achievementsUnlocked: number;
  predictionsMade: number;
  predictionsWon: number;
  topicVotes: Record<string, number>;
};

export const EMPTY_STATS: UserStats = {
  votesCast: 0,
  voteStreakTop: 0,
  dailyStreak: 0,
  activeDays: 0,
  pollsCreated: 0,
  bestPollVotes: 0,
  rebelCount: 0,
  majorityCount: 0,
  totalPoints: 0,
  coinsEarnedTotal: 0,
  coinsSpentTotal: 0,
  achievementsUnlocked: 0,
  predictionsMade: 0,
  predictionsWon: 0,
  topicVotes: {},
};

export function metricValue(stats: UserStats, metric: string): number {
  if (metric.startsWith("topic:")) {
    return stats.topicVotes[metric.slice(6)] ?? 0;
  }
  const v = (stats as unknown as Record<string, unknown>)[metric];
  return typeof v === "number" ? v : 0;
}

export type EvalResult = {
  newlyUnlocked: Achievement[];
  coinsToGrant: number;
};

// Pure: given current stats + the set of already-owned achievement ids,
// return which achievements just crossed their threshold and the coin total
// to grant for them. The caller persists the result atomically (claim RPC).
export function evaluate(stats: UserStats, owned: Set<string>): EvalResult {
  const newlyUnlocked: Achievement[] = [];
  let coinsToGrant = 0;
  for (const a of ALL_ACHIEVEMENTS) {
    if (owned.has(a.id)) continue;
    if (metricValue(stats, a.metric) >= a.threshold) {
      newlyUnlocked.push(a);
      coinsToGrant += a.coinReward;
    }
  }
  return { newlyUnlocked, coinsToGrant };
}
