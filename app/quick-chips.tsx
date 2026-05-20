"use client";

import Link from "next/link";

type ChipLabels = {
  vibe: string;
  drama: string;
  wtf: string;
  daily: string;
  read: string;
  rdv: string;
};

const BASE_CHIP =
  "inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 text-xs sm:text-sm font-medium text-white/80 whitespace-nowrap transition-colors";

export default function QuickChips({ labels }: { labels: ChipLabels }) {
  const chips: Array<{
    emoji: string;
    label: string;
    href: string;
    extraClass?: string;
  }> = [
    { emoji: "🔥", label: labels.vibe, href: "#trending" },
    { emoji: "💔", label: labels.drama, href: "/idees/drama" },
    { emoji: "👀", label: labels.wtf, href: "/read" },
    { emoji: "☀️", label: labels.daily, href: "/discover" },
    {
      emoji: "📖",
      label: labels.read,
      href: "/read",
      extraClass: "border-pink-400/40 shadow-[0_0_18px_-6px_rgba(244,114,182,0.55)]",
    },
    { emoji: "💌", label: labels.rdv, href: "/idees/premier-rdv" },
  ];

  return (
    <div className="relative py-1">
      <div
        className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {chips.map((chip, i) => (
          <Link
            key={i}
            href={chip.href}
            className={`${BASE_CHIP}${chip.extraClass ? ` ${chip.extraClass}` : ""}`}
          >
            <span aria-hidden>{chip.emoji}</span>
            <span>{chip.label}</span>
          </Link>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0b0613] to-transparent"
      />
    </div>
  );
}
