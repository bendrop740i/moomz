"use client";

import { useEffect, useState } from "react";

const EMOJIS = ["🎉", "✨", "💖", "🔥", "💫", "🌟"];

type Piece = { id: number; left: number; emoji: string; delay: number; duration: number; drift: number };

export default function Confetti({ trigger }: { trigger: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const count = 22;
    const next: Piece[] = Array.from({ length: count }, (_, i) => ({
      id: trigger * 100 + i,
      left: Math.random() * 100,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      delay: Math.random() * 200,
      duration: 1400 + Math.random() * 900,
      drift: (Math.random() - 0.5) * 200,
    }));
    setPieces(next);
    const timer = setTimeout(() => setPieces([]), 2600);
    return () => clearTimeout(timer);
  }, [trigger]);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute text-2xl"
          style={{
            left: `${p.left}%`,
            top: "-40px",
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
