"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useT, useLocale } from "./locale-context";
import { HudPill } from "./hud-stats";
import { seoHref } from "@/lib/seo/seo-href";

// `/` and `/discover` render their own full-bleed branded hero — a top bar there
// would just double up the wordmark. On those two pages the StreakHUD floats the
// stats pill instead; everywhere else the header carries it.
const HIDE_EXACT = new Set(["/", "/discover"]);

export default function SiteHeader() {
  const pathname = usePathname();
  const t = useT();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);

  // Subtle scroll behavior: deepen the blur + add a glow shadow once the user
  // moves past the fold, so the bar reads as "lifted" over content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDE_EXACT.has(pathname)) return null;

  const exploreTr = t("nav.explore");
  const exploreLabel = exploreTr === "nav.explore" ? "Explore" : exploreTr;
  const exploreHref = seoHref("explore", locale);
  // The Explore link now lands on /{locale}/explore — match any /…/explore.
  const exploreActive = pathname?.split("/").includes("explore") ?? false;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0b0613]/85 py-2.5 shadow-lg shadow-black/40 backdrop-blur-xl"
          : "border-b border-white/5 bg-[#0b0613]/55 py-3 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Wordmark — display font, SSX-cartoon gradient, playful "live" dot */}
        <Link
          href="/"
          aria-label="moomz — home"
          className="group flex items-center gap-1.5"
        >
          <span className="font-display text-2xl leading-none tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
            moomz
          </span>
          <span
            aria-hidden
            className="live-dot mt-0.5 h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_2px_rgba(255,61,139,0.6)]"
          />
        </Link>

        {/* Right cluster: the stats HUD + a single Explore door to the SEO/content
            surface. The 3 random nav chips are gone — primary nav lives in the
            bottom bar, the full content map lives behind this one button. */}
        <div className="flex shrink-0 items-center gap-1.5">
          <HudPill />
          <Link
            href={exploreHref}
            aria-current={exploreActive ? "page" : undefined}
            className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition active:scale-95 ${
              exploreActive
                ? "border-pink-400/40 bg-gradient-to-r from-pink-500/30 to-purple-500/25 text-white shadow-[0_0_12px_-2px_rgba(255,61,139,0.5)]"
                : "border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span aria-hidden>🧭</span>
            <span>{exploreLabel}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
