"use client";

import { useEffect, useState } from "react";

type Streak = { pts: number; cur: number; top: number; ts: number };

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

const STREAK_WINDOW = 3 * 60 * 1000;

export default function StreakHUD() {
  const [streak, setStreak] = useState<Streak | null>(null);
  const [flash, setFlash] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStreak(readStreak());
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{ gained: number; total: number; streak: number; multiplier: number }>;
      setStreak((prev) => ({
        pts: ev.detail.total,
        cur: ev.detail.streak,
        top: Math.max(prev?.top ?? 0, ev.detail.streak),
        ts: Date.now(),
      }));
      setFlash(true);
      setTimeout(() => setFlash(false), 600);
    };
    window.addEventListener("moomz:vote", handler);
    return () => window.removeEventListener("moomz:vote", handler);
  }, []);

  useEffect(() => {
    if (!streak) {
      setActive(false);
      return;
    }
    const update = () => setActive(Date.now() - streak.ts < STREAK_WINDOW);
    update();
    const id = setInterval(update, 5_000);
    return () => clearInterval(id);
  }, [streak]);

  if (!streak || streak.pts === 0) return null;

  const multiplier =
    streak.cur >= 18 ? 5 : streak.cur >= 12 ? 4 : streak.cur >= 7 ? 3 : streak.cur >= 3 ? 2 : 1;

  return (
    <div className="pointer-events-none fixed top-3 right-3 z-30">
      <div
        className={`glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold transition ${
          flash ? "scale-110" : "scale-100"
        }`}
      >
        <span className="text-lg leading-none">{active && multiplier > 1 ? "🔥" : "⭐"}</span>
        <span className="tabular-nums text-white">{streak.pts.toLocaleString()}</span>
        {active && multiplier > 1 && (
          <span
            className={`tabular-nums text-pink-300 ${flash ? "count-bump" : ""}`}
          >
            ×{multiplier}
          </span>
        )}
      </div>
    </div>
  );
}
