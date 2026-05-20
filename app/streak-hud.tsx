"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Streak = { pts: number; cur: number; top: number; ts: number };

// Mirror of SiteHeader's HIDE_EXACT: on these routes the sticky header is not
// rendered, so the HUD can sit near the very top. Everywhere else the header
// (~52-60px tall, sticky top-0 z-30) occupies the top-right corner — the HUD
// must clear it or the two overlap.
const HEADER_HIDDEN = new Set(["/", "/discover"]);

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

const STREAK_WINDOW = 3 * 60 * 1000;

export default function StreakHUD() {
  const [streak, setStreak] = useState<Streak | null>(null);
  const [flash, setFlash] = useState(false);
  const [active, setActive] = useState(false);
  const [milestone, setMilestone] = useState<{ mult: number; k: number } | null>(null);
  const prevMultRef = useRef(1);

  useEffect(() => {
    const initial = readStreak();
    setStreak(initial);
    prevMultRef.current = initial ? multFor(initial.cur) : 1;
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
      const newMult = ev.detail.multiplier;
      if (newMult > prevMultRef.current && newMult >= 2) {
        setMilestone({ mult: newMult, k: Date.now() });
        setTimeout(() => setMilestone(null), 1500);
      }
      prevMultRef.current = newMult;
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

  const pathname = usePathname();
  const multiplier = streak ? multFor(streak.cur) : 1;
  const hidden = !streak || streak.pts === 0;
  // Below the header bar when it's visible, near the top when it's not.
  const offsetClass = HEADER_HIDDEN.has(pathname) ? "top-3" : "top-16";

  return (
    <>
      {!hidden && (
        <div className={`pointer-events-none fixed ${offsetClass} right-3 z-30`}>
          <div
            className={`glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold transition ${
              flash ? "scale-110" : "scale-100"
            }`}
          >
            <span className="text-lg leading-none">{active && multiplier > 1 ? "🔥" : "⭐"}</span>
            <span className="tabular-nums text-white">{streak!.pts.toLocaleString()}</span>
            {active && multiplier > 1 && (
              <span className={`tabular-nums text-pink-300 ${flash ? "count-bump" : ""}`}>
                ×{multiplier}
              </span>
            )}
          </div>
        </div>
      )}

      {milestone && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
          <div
            key={milestone.k}
            className="comic-burst font-display tracking-tight text-center"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 7rem)",
              color: "#fff",
              textShadow:
                "0 0 0 #000, 4px 4px 0 #000, 0 0 30px #ff3d8b, 0 0 60px #7c3aed",
              WebkitTextStroke: "2px #000",
            }}
          >
            STREAK
            <br />
            <span style={{ color: "#ffd1e6" }}>×{milestone.mult}</span>
          </div>
        </div>
      )}
    </>
  );
}
