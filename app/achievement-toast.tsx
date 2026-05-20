"use client";

import { useEffect, useState } from "react";
import { ACHIEVEMENTS, type AchievementId } from "@/lib/achievements";

type ToastItem = { id: AchievementId; key: number };

export default function AchievementToast() {
  const [queue, setQueue] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{ ids: string[] }>;
      const items: ToastItem[] = ev.detail.ids
        .filter((id): id is AchievementId => id in ACHIEVEMENTS)
        .map((id, i) => ({ id, key: Date.now() + i }));
      if (items.length === 0) return;
      setQueue((q) => [...q, ...items]);
    };
    window.addEventListener("moomz:achievements", handler);
    return () => window.removeEventListener("moomz:achievements", handler);
  }, []);

  useEffect(() => {
    if (queue.length === 0) return;
    const timer = setTimeout(() => setQueue((q) => q.slice(1)), 3200);
    return () => clearTimeout(timer);
  }, [queue]);

  if (queue.length === 0) return null;
  const item = queue[0];
  const ach = ACHIEVEMENTS[item.id];

  return (
    <div
      key={item.key}
      className="pointer-events-none fixed top-28 left-1/2 -translate-x-1/2 z-40 card-in w-[calc(100%-1.5rem)] max-w-sm"
      style={{ ["--i" as string]: 0 }}
    >
      <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl shadow-pink-500/30 border-pink-400/40">
        <div className="text-3xl">{ach.emoji}</div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-pink-300 font-semibold">
            Achievement débloqué
          </div>
          <div className="font-display text-lg leading-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {ach.title}
          </div>
          <div className="text-xs text-white/60">{ach.desc}</div>
        </div>
      </div>
    </div>
  );
}
