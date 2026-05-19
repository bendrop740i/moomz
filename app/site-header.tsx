"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Pages that already render their own branded hero — don't double up.
const HIDE_EXACT = new Set(["/", "/discover"]);

export default function SiteHeader() {
  const pathname = usePathname();
  if (HIDE_EXACT.has(pathname)) return null;

  return (
    <div className="sticky top-0 z-30 -mx-5 mb-5 px-5 pt-2 pb-2 backdrop-blur-md bg-[#0b0613]/70 border-b border-white/10">
      <div className="mx-auto flex w-full max-w-xl items-center justify-between gap-3">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition"
          aria-label="moomz — home"
        >
          moomz
        </Link>
        <nav className="flex items-center gap-1.5 text-xs">
          <Link
            href="/discover"
            className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 text-white/70 hover:text-white transition whitespace-nowrap"
          >
            🔥 discover
          </Link>
          <Link
            href="/idees"
            className="hidden sm:inline-block rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 text-white/70 hover:text-white transition whitespace-nowrap"
          >
            💡 idées
          </Link>
        </nav>
      </div>
    </div>
  );
}
