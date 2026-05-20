"use client";

// Shared streak/coins HUD. One source of truth for the little "⭐ points 🪙 coins"
// pill — used inline inside SiteHeader on most pages, and as a floating pill by
// StreakHUD on the headerless pages (`/` and `/discover`). Reads the cookies
// set by castVote and stays live via the moomz:vote / moomz:coins events.

import Link from "next/link";
import { useEffect, useState } from "react";

type Streak = { pts: number; cur: number; top: number; ts: number };

const STREAK_WINDOW = 3 * 60 * 1000;

function multFor(streak: number) {
  return streak >= 18 ? 5 : streak >= 12 ? 4 : streak >= 7 ? 3 : streak >= 3 ? 2 : 1;
}

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

export type HudStats = {
  points: number;
  streakDays: number;
  multiplier: number;
  coins: number;
  active: boolean;
  flash: boolean;
  coinFlash: boolean;
  empty: boolean;
};

export function useHudStats(): HudStats {
  const [streak, setStreak] = useState<Streak | null>(null);
  const [coins, setCoins] = useState(0);
  const [flash, setFlash] = useState(false);
  const [coinFlash, setCoinFlash] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStreak(readStreak());
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{
        gained: number;
        total: number;
        streak: number;
        multiplier: number;
      }>;
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

  const multiplier = streak ? multFor(streak.cur) : 1;
  const points = streak?.pts ?? 0;
  return {
    points,
    streakDays: streak?.cur ?? 0,
    multiplier,
    coins,
    active,
    flash,
    coinFlash,
    empty: points === 0 && coins === 0,
  };
}

// The compact "⭐ points 🪙 coins" pill. Links to the Play hub. Renders nothing
// for a fresh visitor (no points, no coins) so the header stays clean.
export function HudPill({ className = "" }: { className?: string }) {
  const { points, multiplier, coins, active, flash, coinFlash, empty } = useHudStats();
  if (empty) return null;
  return (
    <Link
      href="/play"
      aria-label="Play — points et coins"
      className={`glass rounded-full px-2.5 py-1 flex items-center gap-1.5 text-xs font-semibold transition hover:bg-white/10 ${
        flash || coinFlash ? "scale-110" : "scale-100"
      } ${className}`}
    >
      <span className="text-base leading-none">
        {active && multiplier > 1 ? "🔥" : "⭐"}
      </span>
      <span className="tabular-nums text-white">{points.toLocaleString()}</span>
      {active && multiplier > 1 && (
        <span className={`tabular-nums text-pink-300 ${flash ? "count-bump" : ""}`}>
          ×{multiplier}
        </span>
      )}
      {coins > 0 && (
        <>
          <span className="w-px h-3.5 bg-white/15" aria-hidden />
          <span className="text-sm leading-none" aria-hidden>
            🪙
          </span>
          <span
            className={`tabular-nums text-amber-300 ${coinFlash ? "count-bump" : ""}`}
          >
            {coins.toLocaleString()}
          </span>
        </>
      )}
    </Link>
  );
}
