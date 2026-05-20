"use client";

import { useEffect, useState } from "react";

type Streak = { pts: number; cur: number; top: number; ts: number };

type WalletLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

type WalletStrings = {
  points: string;
  streak: string;
  coins: string;
  empty: string;
};

const WALLET_T: Record<WalletLocale, WalletStrings> = {
  fr: {
    points: "Points",
    streak: "Série de jours",
    coins: "Coins",
    empty: "Vote pour gagner tes premiers coins 🪙",
  },
  en: {
    points: "Points",
    streak: "Day streak",
    coins: "Coins",
    empty: "Vote to earn your first coins 🪙",
  },
  es: {
    points: "Puntos",
    streak: "Racha de días",
    coins: "Coins",
    empty: "Vota para ganar tus primeros coins 🪙",
  },
  it: {
    points: "Punti",
    streak: "Serie di giorni",
    coins: "Coins",
    empty: "Vota per guadagnare i tuoi primi coins 🪙",
  },
  pt: {
    points: "Pontos",
    streak: "Sequência de dias",
    coins: "Coins",
    empty: "Vota para ganhar os teus primeiros coins 🪙",
  },
  de: {
    points: "Punkte",
    streak: "Tage-Serie",
    coins: "Coins",
    empty: "Stimme ab und verdiene deine ersten Coins 🪙",
  },
  ja: {
    points: "ポイント",
    streak: "連続日数",
    coins: "コイン",
    empty: "投票して最初のコインを手に入れよう 🪙",
  },
  zh: {
    points: "积分",
    streak: "连续天数",
    coins: "金币",
    empty: "投票赢取你的第一批金币 🪙",
  },
};

// Cookie parsers — exact mirror of app/streak-hud.tsx readStreak()/readCoins().
function readStreak(): Streak | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)moomz_streak=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

function readCoins(): number {
  if (typeof document === "undefined") return 0;
  const match = document.cookie.match(/(?:^|;\s*)moomz_coins=([^;]+)/);
  if (!match) return 0;
  return Number(decodeURIComponent(match[1])) || 0;
}

export default function WalletBanner({ locale }: { locale: WalletLocale }) {
  const t = WALLET_T[locale] ?? WALLET_T.en;
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [coins, setCoins] = useState(0);
  const [pointsFlash, setPointsFlash] = useState(false);
  const [coinFlash, setCoinFlash] = useState(false);

  // Initial values + live updates from the moomz:vote event (mirrors streak-hud).
  useEffect(() => {
    const s = readStreak();
    setPoints(s?.pts ?? 0);
    setStreak(s?.cur ?? 0);
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{
        gained: number;
        total: number;
        streak: number;
        multiplier: number;
      }>;
      setPoints(ev.detail.total);
      setStreak(ev.detail.streak);
      setPointsFlash(true);
      setTimeout(() => setPointsFlash(false), 700);
    };
    window.addEventListener("moomz:vote", handler);
    return () => window.removeEventListener("moomz:vote", handler);
  }, []);

  // Coin wallet — initial from cookie, live from the moomz:coins event.
  useEffect(() => {
    setCoins(readCoins());
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{ balance: number; gained: number }>;
      setCoins(ev.detail.balance);
      if (ev.detail.gained > 0) {
        setCoinFlash(true);
        setTimeout(() => setCoinFlash(false), 900);
      }
    };
    window.addEventListener("moomz:coins", handler);
    return () => window.removeEventListener("moomz:coins", handler);
  }, []);

  const allZero = points === 0 && streak === 0 && coins === 0;

  const tiles = [
    {
      emoji: "⭐",
      value: points,
      label: t.points,
      flash: pointsFlash,
      glow: "from-amber-400/20 to-yellow-500/10",
      text: "text-amber-200",
    },
    {
      emoji: "🔥",
      value: streak,
      label: t.streak,
      flash: pointsFlash,
      glow: "from-orange-500/20 to-pink-500/10",
      text: "text-orange-200",
    },
    {
      emoji: "🪙",
      value: coins,
      label: t.coins,
      flash: coinFlash,
      glow: "from-pink-500/20 to-purple-600/10",
      text: "text-pink-200",
    },
  ];

  return (
    <section className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className={`glass rounded-2xl px-3 py-4 flex flex-col items-center gap-1 text-center bg-gradient-to-br ${tile.glow} transition ${
              tile.flash ? "scale-105" : "scale-100"
            }`}
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {tile.emoji}
            </span>
            <span
              className={`font-display text-2xl sm:text-3xl tabular-nums ${tile.text}`}
            >
              {tile.value.toLocaleString()}
            </span>
            <span className="text-[0.65rem] uppercase tracking-widest text-white/40">
              {tile.label}
            </span>
          </div>
        ))}
      </div>
      {allZero && (
        <p className="text-center text-sm text-white/60 glass rounded-2xl px-4 py-3">
          {t.empty}
        </p>
      )}
    </section>
  );
}
