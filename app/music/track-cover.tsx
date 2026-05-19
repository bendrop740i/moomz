"use client";

import { useMemo } from "react";

// 8 cartoon-vibey palettes — each row is bg-start, bg-end, blob-a, blob-b, ink.
const PALETTES: [string, string, string, string, string][] = [
  ["#ff3d8b", "#7c3aed", "#f59e0b", "#22d3ee", "#fff"],
  ["#06b6d4", "#3b82f6", "#a855f7", "#fde047", "#fff"],
  ["#22d3ee", "#a3e635", "#f0abfc", "#7c3aed", "#0b0613"],
  ["#ef4444", "#f97316", "#facc15", "#a855f7", "#fff"],
  ["#10b981", "#22c55e", "#84cc16", "#06b6d4", "#0b0613"],
  ["#dc2626", "#f59e0b", "#fde047", "#7c3aed", "#fff"],
  ["#7c3aed", "#ec4899", "#0ea5e9", "#facc15", "#fff"],
  ["#fbbf24", "#f59e0b", "#fde047", "#ef4444", "#0b0613"],
  ["#0ea5e9", "#7c3aed", "#ec4899", "#22d3ee", "#fff"],
  ["#84cc16", "#22d3ee", "#a855f7", "#fbbf24", "#0b0613"],
];

function hashStr(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (s * 1664525 + 1013904223) | 0;
    return ((s >>> 0) % 10000) / 10000;
  };
}

export default function TrackCover({
  seed,
  label,
  className = "",
}: {
  seed: string;
  label: string;
  className?: string;
}) {
  const svg = useMemo(() => {
    const h = hashStr(seed);
    const palette = PALETTES[h % PALETTES.length];
    const [bg1, bg2, blobA, blobB, ink] = palette;
    const r = rng(h);

    // Blob positions + sizes derived from seed.
    const blobs = [
      { cx: 20 + Math.floor(r() * 30), cy: 20 + Math.floor(r() * 30), r: 25 + Math.floor(r() * 15), fill: blobA, op: 0.7 },
      { cx: 60 + Math.floor(r() * 30), cy: 50 + Math.floor(r() * 30), r: 22 + Math.floor(r() * 18), fill: blobB, op: 0.55 },
      { cx: 10 + Math.floor(r() * 40), cy: 70 + Math.floor(r() * 25), r: 18 + Math.floor(r() * 12), fill: blobA, op: 0.4 },
    ];

    // Big initial letter — first non-whitespace char of label.
    const letter = (label.replace(/^\W+/u, "")[0] ?? "♪").toUpperCase();

    // Tilt angle for the letter to feel "stamped"
    const angle = Math.floor(r() * 14) - 7;

    return { bg1, bg2, blobs, letter, ink, angle };
  }, [seed, label]);

  const gradId = `g-${seed.slice(0, 8).replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={svg.bg1} />
          <stop offset="100%" stopColor={svg.bg2} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#${gradId})`} />
      {svg.blobs.map((b, i) => (
        <circle
          key={i}
          cx={b.cx}
          cy={b.cy}
          r={b.r}
          fill={b.fill}
          opacity={b.op}
          style={{ mixBlendMode: "screen" }}
        />
      ))}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), sans-serif"
        fontSize="60"
        fontWeight="900"
        fill={svg.ink}
        style={{
          transform: `rotate(${svg.angle}deg)`,
          transformOrigin: "50px 50px",
          letterSpacing: "-3px",
        }}
        opacity="0.92"
      >
        {svg.letter}
      </text>
      {/* small note glyph in the corner */}
      <text
        x="86"
        y="92"
        fontSize="11"
        fill={svg.ink}
        opacity="0.7"
        fontFamily="-apple-system, sans-serif"
      >
        ♪
      </text>
    </svg>
  );
}
