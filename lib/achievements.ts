export type AchievementId =
  | "first_vote"
  | "first_rebel"
  | "streak_3"
  | "streak_7"
  | "streak_12"
  | "streak_18"
  | "creator"
  | "viral"
  | "marathon"
  | "rebel_x10"
  | "claimed";

export type Achievement = {
  id: AchievementId;
  emoji: string;
  title: string;
  desc: string;
};

export const ACHIEVEMENTS: Record<AchievementId, Achievement> = {
  first_vote: { id: "first_vote", emoji: "🎯", title: "Premier vote", desc: "T'as voté pour la 1ʳᵉ fois." },
  first_rebel: { id: "first_rebel", emoji: "🌶️", title: "Rebel", desc: "T'as voté contre la majorité." },
  streak_3: { id: "streak_3", emoji: "🔥", title: "Multiplicateur ×2", desc: "3 votes d'affilée." },
  streak_7: { id: "streak_7", emoji: "⚡", title: "Multiplicateur ×3", desc: "7 votes d'affilée." },
  streak_12: { id: "streak_12", emoji: "💥", title: "Multiplicateur ×4", desc: "12 votes d'affilée." },
  streak_18: { id: "streak_18", emoji: "🌟", title: "Multiplicateur ×5", desc: "18 votes d'affilée — max." },
  creator: { id: "creator", emoji: "📊", title: "Créateur", desc: "T'as posé ta première question." },
  viral: { id: "viral", emoji: "🚀", title: "Viral", desc: "Un de tes moomz a 50+ votes." },
  marathon: { id: "marathon", emoji: "💯", title: "Marathon", desc: "100 votes au compteur." },
  rebel_x10: { id: "rebel_x10", emoji: "😈", title: "Rebel ×10", desc: "10 fois dans la minorité." },
  claimed: { id: "claimed", emoji: "✨", title: "Username", desc: "T'as réservé ton @." },
};

export const ACHIEVEMENT_ORDER: AchievementId[] = [
  "first_vote", "first_rebel", "streak_3", "streak_7", "streak_12", "streak_18",
  "creator", "viral", "marathon", "rebel_x10", "claimed",
];
