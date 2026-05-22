import type { Locale } from "@/lib/i18n";

// Emotional post-vote verdict copy. Shared by the home PollCard and the
// immersive DiscoverCard so both surfaces speak with one voice.
export type RevealCopy = {
  rebel: (pct: number) => string;
  majority: (pct: number) => string;
  split: (pct: number) => string;
};

export const REVEAL_COPY: Record<Locale, RevealCopy> = {
  fr: { rebel: (p) => `🌶️ REBEL · t'es dans les ${p}%`, majority: (p) => `✅ avec la majorité · ${p}%`, split: (p) => `👀 partagé · ${p}%` },
  en: { rebel: (p) => `🌶️ REBEL · you're in the ${p}%`, majority: (p) => `✅ with the majority · ${p}%`, split: (p) => `👀 split · ${p}%` },
  es: { rebel: (p) => `🌶️ REBELDE · estás en el ${p}%`, majority: (p) => `✅ con la mayoría · ${p}%`, split: (p) => `👀 dividido · ${p}%` },
  it: { rebel: (p) => `🌶️ REBEL · sei nel ${p}%`, majority: (p) => `✅ con la maggioranza · ${p}%`, split: (p) => `👀 diviso · ${p}%` },
  pt: { rebel: (p) => `🌶️ REBELDE · você está nos ${p}%`, majority: (p) => `✅ com a maioria · ${p}%`, split: (p) => `👀 dividido · ${p}%` },
  de: { rebel: (p) => `🌶️ REBEL · du bist in den ${p}%`, majority: (p) => `✅ mit der Mehrheit · ${p}%`, split: (p) => `👀 geteilt · ${p}%` },
  ja: { rebel: (p) => `🌶️ REBEL · あなたは${p}%側`, majority: (p) => `✅ 多数派と同じ · ${p}%`, split: (p) => `👀 分かれている · ${p}%` },
  zh: { rebel: (p) => `🌶️ 反叛 · 你在 ${p}% 里`, majority: (p) => `✅ 与多数人一致 · ${p}%`, split: (p) => `👀 意见分歧 · ${p}%` },
};

export function getRevealCopy(locale: Locale): RevealCopy {
  return REVEAL_COPY[locale] ?? REVEAL_COPY.en;
}
