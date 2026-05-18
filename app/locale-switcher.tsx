"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n";
import { setLocale } from "./actions";
import { useLocale } from "./locale-context";

export default function LocaleSwitcher() {
  const current = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const pick = async (l: Locale) => {
    setOpen(false);
    await setLocale(l);
    router.refresh();
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-[11px] text-white/40 hover:text-white/70 transition uppercase tracking-widest"
      >
        🌐 {current}
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 right-0 glass rounded-xl py-1 min-w-[120px] shadow-xl">
          {LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => pick(l)}
              className={`w-full text-left px-3 py-1.5 text-xs hover:bg-white/10 transition ${
                l === current ? "text-pink-300" : "text-white/70"
              }`}
            >
              {LOCALE_NAMES[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
