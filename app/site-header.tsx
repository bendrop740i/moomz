"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useT } from "./locale-context";

// `/` and `/discover` render their own full-bleed branded hero — a top bar there
// would just double up the wordmark. Hiding is a deliberate choice: the bottom
// nav still covers navigation on those pages.
const HIDE_EXACT = new Set(["/", "/discover"]);

type NavLink = {
  href: string;
  emoji: string;
  labelKey: string;
  fallback: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/discover", emoji: "🔥", labelKey: "nav.discover", fallback: "Discover" },
  { href: "/idees", emoji: "💡", labelKey: "nav.ideas", fallback: "Idées" },
  { href: "/read", emoji: "📖", labelKey: "nav.read", fallback: "Read" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const t = useT();
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

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  const label = (link: NavLink) => {
    const translated = t(link.labelKey);
    return translated === link.labelKey ? link.fallback : translated;
  };

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

        {/* Nav chips — clear hover + active states, mobile-first (overflow scroll) */}
        <nav className="scrollbar-hide flex min-w-0 items-center gap-1.5 overflow-x-auto">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition active:scale-95 ${
                  active
                    ? "border-pink-400/40 bg-gradient-to-r from-pink-500/30 to-purple-500/25 text-white shadow-[0_0_12px_-2px_rgba(255,61,139,0.5)]"
                    : "border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span aria-hidden>{link.emoji}</span>
                <span>{label(link)}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
