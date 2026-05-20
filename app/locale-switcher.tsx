"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n";
import { setLocale } from "./actions";
import { useLocale } from "./locale-context";

// Tiny flag-ish emoji per locale — keeps the control playful + scannable.
const LOCALE_FLAGS: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  it: "🇮🇹",
  pt: "🇵🇹",
  de: "🇩🇪",
  ja: "🇯🇵",
  zh: "🇨🇳",
};

export default function LocaleSwitcher() {
  const current = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click + Escape — feels like a real menu.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = async (l: Locale) => {
    setOpen(false);
    if (l === current) return;
    await setLocale(l);
    router.refresh();
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Language"
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
      >
        <span aria-hidden className="text-sm leading-none">
          {LOCALE_FLAGS[current]}
        </span>
        <span className="uppercase tracking-wider">{current}</span>
        <svg
          aria-hidden
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="glass fade-in-content absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl p-1 shadow-2xl shadow-black/50"
        >
          {LOCALES.map((l) => {
            const active = l === current;
            return (
              <button
                key={l}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => pick(l)}
                className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm transition ${
                  active
                    ? "bg-gradient-to-r from-pink-500/25 to-purple-500/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span aria-hidden className="text-base leading-none">
                  {LOCALE_FLAGS[l]}
                </span>
                <span className="flex-1 font-medium">{LOCALE_NAMES[l]}</span>
                {active && (
                  <svg
                    aria-hidden
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-pink-300"
                  >
                    <path
                      d="M2.5 7.5L5.5 10.5L11.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
