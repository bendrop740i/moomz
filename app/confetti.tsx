"use client";

import { useEffect, useMemo, useState } from "react";

const EMOJI_POOLS = [
  ["🎉", "✨", "💖", "🔥", "💫", "🌟"],
  ["🔥", "💥", "⚡", "🚀", "💯", "🤘"],
  ["💖", "💕", "💘", "💗", "💞", "💓"],
  ["🤩", "🥳", "🎊", "✨", "🌈", "⭐"],
  ["🍑", "🍒", "🌶️", "🥵", "👀", "💋"],
];

const COMIC_WORDS = ["BOOM!", "NICE!", "POW!", "WOW!", "FIRE!", "YES!", "OOF!", "HOT!", "BOOSH!", "SLAY!"];

const STARBURST_EMOJIS = ["⭐", "✨", "💫", "🌟"];

type Piece = { id: number; left: number; emoji: string; delay: number; duration: number; drift: number };
type StarPiece = { id: number; emoji: string; dx: number; dy: number };

type Mode = "emojis" | "comic" | "starburst";

export default function Confetti({ trigger }: { trigger: number }) {
  const [mode, setMode] = useState<Mode | null>(null);
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [stars, setStars] = useState<StarPiece[]>([]);

  const word = useMemo(
    () => COMIC_WORDS[Math.floor(Math.random() * COMIC_WORDS.length)],
    [trigger],
  );

  useEffect(() => {
    if (trigger === 0) return;
    const modes: Mode[] = ["emojis", "comic", "starburst"];
    const m = modes[Math.floor(Math.random() * modes.length)];
    setMode(m);

    if (m === "emojis") {
      const pool = EMOJI_POOLS[Math.floor(Math.random() * EMOJI_POOLS.length)];
      const count = 22;
      setPieces(
        Array.from({ length: count }, (_, i) => ({
          id: trigger * 100 + i,
          left: Math.random() * 100,
          emoji: pool[Math.floor(Math.random() * pool.length)],
          delay: Math.random() * 200,
          duration: 1400 + Math.random() * 900,
          drift: (Math.random() - 0.5) * 200,
        })),
      );
    } else if (m === "starburst") {
      const count = 12;
      setStars(
        Array.from({ length: count }, (_, i) => {
          const angle = (i / count) * Math.PI * 2;
          const radius = 160 + Math.random() * 80;
          return {
            id: trigger * 100 + i,
            emoji: STARBURST_EMOJIS[Math.floor(Math.random() * STARBURST_EMOJIS.length)],
            dx: Math.cos(angle) * radius,
            dy: Math.sin(angle) * radius,
          };
        }),
      );
    }

    const t = setTimeout(() => {
      setMode(null);
      setPieces([]);
      setStars([]);
    }, 2200);
    return () => clearTimeout(t);
  }, [trigger]);

  if (!mode) return null;

  if (mode === "comic") {
    return (
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="absolute left-1/2 top-1/2">
          <div className="shockwave absolute left-0 top-0 w-32 h-32 rounded-full border-4 border-pink-400/70" />
        </div>
        <div
          className="comic-burst absolute left-1/2 top-1/2 font-display text-7xl sm:text-8xl tracking-wider"
          style={{
            color: "#fff",
            textShadow:
              "0 0 0 #000, 4px 4px 0 #000, 0 0 30px #ff3d8b, 0 0 60px #7c3aed",
            WebkitTextStroke: "2px #000",
          }}
        >
          {word}
        </div>
      </div>
    );
  }

  if (mode === "starburst") {
    return (
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {stars.map((s) => (
          <span
            key={s.id}
            className="starburst-piece absolute left-1/2 top-1/2 text-4xl"
            style={{
              ["--dx" as string]: `${s.dx}px`,
              ["--dy" as string]: `${s.dy}px`,
            }}
          >
            {s.emoji}
          </span>
        ))}
      </div>
    );
  }

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
