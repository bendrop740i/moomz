"use client";

import { useEffect, useState } from "react";

export default function PageHero({ taglines }: { taglines: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (!taglines || taglines.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 600);
      return () => clearTimeout(swap);
    }, 3500);

    return () => clearInterval(interval);
  }, [reducedMotion, taglines]);

  const current = taglines && taglines.length > 0 ? taglines[index] : "";

  return (
    <header className="flex flex-col items-center space-y-2 py-3 sm:py-5 text-center">
      <h1 className="font-display text-6xl sm:text-7xl bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,61,139,0.4)] leading-none">
        moomz
      </h1>

      <p
        className="text-sm sm:text-base text-white/80 min-h-[1.5rem] transition-opacity duration-[600ms]"
        style={{ opacity: reducedMotion ? 1 : visible ? 1 : 0 }}
        aria-live="polite"
      >
        {current}
      </p>

      <div
        className="h-px w-8 bg-pink-400/40 rounded-full"
        style={
          reducedMotion
            ? undefined
            : { animation: "moomzHeroPulse 2400ms ease-in-out infinite" }
        }
      />

      <style jsx>{`
        @keyframes moomzHeroPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </header>
  );
}
