"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HudPill } from "./hud-stats";

// On `/` and `/discover` SiteHeader is hidden (full-bleed heroes), so the stats
// HUD has no header to live in — here we float the compact pill at the top.
// Everywhere else the header already renders the pill, so this component only
// keeps the streak-milestone celebration burst.
const HEADER_HIDDEN = new Set(["/", "/discover"]);

function multFor(streak: number) {
  return streak >= 18 ? 5 : streak >= 12 ? 4 : streak >= 7 ? 3 : streak >= 3 ? 2 : 1;
}

export default function StreakHUD() {
  const pathname = usePathname();
  const [milestone, setMilestone] = useState<{ mult: number; k: number } | null>(
    null,
  );
  const prevMultRef = useRef(1);

  useEffect(() => {
    // Seed the previous multiplier from the cookie so a page load doesn't
    // mistake the first vote for a milestone jump.
    const m = document.cookie.match(/(?:^|;\s*)moomz_streak=([^;]+)/);
    if (m) {
      try {
        const s = JSON.parse(decodeURIComponent(m[1]));
        prevMultRef.current = multFor(s.cur ?? 0);
      } catch {
        // ignore malformed cookie
      }
    }
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{ multiplier: number }>;
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

  const floatPill = HEADER_HIDDEN.has(pathname);

  return (
    <>
      {floatPill && (
        <div className="fixed top-3 right-3 z-30">
          <HudPill />
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
