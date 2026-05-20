import React from "react";

type Locale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

type ValueProp = {
  emoji: string;
  headline: string;
  subline: string;
};

const CONTENT: Record<Locale, ValueProp[]> = {
  en: [
    {
      emoji: "⚡",
      headline: "10 seconds",
      subline: "Type a question, share a link, see the vibe live.",
    },
    {
      emoji: "🔒",
      headline: "Anonymous",
      subline: "No accounts. Voters stay private. Your reach stays public.",
    },
    {
      emoji: "🎯",
      headline: "Real vibe-check",
      subline: "Strangers + friends both weigh in. Real consensus, fast.",
    },
  ],
  fr: [
    {
      emoji: "⚡",
      headline: "10 secondes",
      subline: "Pose ta question, partage le lien, vois le vibe en live.",
    },
    {
      emoji: "🔒",
      headline: "Anonyme",
      subline: "Zéro compte. Les votes restent privés. Ta portée reste publique.",
    },
    {
      emoji: "🎯",
      headline: "Vibe-check réel",
      subline: "Inconnus + potes votent ensemble. Vrai consensus, rapide.",
    },
  ],
  es: [
    {
      emoji: "⚡",
      headline: "10 segundos",
      subline: "Escribe la pregunta, comparte el link, mira el vibe en vivo.",
    },
    {
      emoji: "🔒",
      headline: "Anónimo",
      subline: "Sin cuentas. Los votos son privados. Tu alcance es público.",
    },
    {
      emoji: "🎯",
      headline: "Vibe-check real",
      subline: "Desconocidos + amigos opinan. Consenso real, rápido.",
    },
  ],
  it: [
    {
      emoji: "⚡",
      headline: "10 secondi",
      subline: "Scrivi la domanda, condividi il link, vedi il vibe live.",
    },
    {
      emoji: "🔒",
      headline: "Anonimo",
      subline: "Niente account. Voti privati. La tua portata resta pubblica.",
    },
    {
      emoji: "🎯",
      headline: "Vibe-check vero",
      subline: "Sconosciuti + amici votano insieme. Consenso reale, veloce.",
    },
  ],
  pt: [
    {
      emoji: "⚡",
      headline: "10 segundos",
      subline: "Escreve a pergunta, partilha o link, vê o vibe ao vivo.",
    },
    {
      emoji: "🔒",
      headline: "Anônimo",
      subline: "Sem contas. Votos privados. Teu alcance fica público.",
    },
    {
      emoji: "🎯",
      headline: "Vibe-check real",
      subline: "Estranhos + amigos votam juntos. Consenso real, rápido.",
    },
  ],
  de: [
    {
      emoji: "⚡",
      headline: "10 Sekunden",
      subline: "Frage tippen, Link teilen, Vibe live sehen.",
    },
    {
      emoji: "🔒",
      headline: "Anonym",
      subline: "Keine Accounts. Stimmen bleiben privat. Reichweite bleibt offen.",
    },
    {
      emoji: "🎯",
      headline: "Echter Vibe-Check",
      subline: "Fremde + Freunde stimmen ab. Echter Konsens, schnell.",
    },
  ],
  ja: [
    {
      emoji: "⚡",
      headline: "10秒で",
      subline: "質問を書いて、リンクをシェア、リアルタイムで反応を見る。",
    },
    {
      emoji: "🔒",
      headline: "匿名",
      subline: "アカウント不要。投票は非公開、結果は公開。",
    },
    {
      emoji: "🎯",
      headline: "本音のvibeチェック",
      subline: "知らない人も友達も投票。リアルな空気が一瞬で。",
    },
  ],
  zh: [
    {
      emoji: "⚡",
      headline: "10秒搞定",
      subline: "写下问题，分享链接，实时看大家的反应。",
    },
    {
      emoji: "🔒",
      headline: "匿名",
      subline: "无需账号。投票保密，传播公开。",
    },
    {
      emoji: "🎯",
      headline: "真实vibe检测",
      subline: "陌生人和朋友一起投票。真共识，秒出炉。",
    },
  ],
};

export default function WhyMoomz({ locale }: { locale: Locale }) {
  const items = CONTENT[locale] ?? CONTENT.en;

  return (
    <section
      aria-label="Why moomz"
      className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-4 sm:p-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {items.map((item, i) => (
          <div
            key={i}
            className={[
              "flex flex-col gap-1 px-1 py-3 sm:py-1 sm:px-4",
              "border-b border-white/5 last:border-b-0",
              "sm:border-b-0 sm:border-r sm:border-white/5 sm:last:border-r-0",
            ].join(" ")}
          >
            <div className="text-2xl leading-none">{item.emoji}</div>
            <div className="font-semibold text-sm text-white">
              {item.headline}
            </div>
            <div className="text-xs text-white/60 leading-snug">
              {item.subline}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
