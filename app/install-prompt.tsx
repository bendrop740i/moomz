"use client";

import { useEffect, useState } from "react";

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "moomz_install_dismissed_at";
const DISMISS_DAYS = 14;

type Strings = {
  cta: string;
  iosTitle: string;
  iosBody: string;
  dismiss: string;
};

export default function InstallPrompt({ strings }: { strings: Strings }) {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOS, setShowIOS] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Already installed (standalone PWA) — never show.
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone) return;

    // Respect recent dismissal.
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) ?? 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 86400 * 1000) return;

    const ua = window.navigator.userAgent;
    const ios =
      /iPad|iPhone|iPod/.test(ua) && !(window as Window & { MSStream?: unknown }).MSStream;

    if (ios) {
      setIsIOS(true);
      setHidden(false);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setHidden(false);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (hidden) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    setHidden(true);
    setShowIOS(false);
  };

  return (
    <>
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 glass rounded-2xl shadow-xl shadow-black/40 px-3 py-2.5 flex items-center gap-2 text-sm card-in max-w-[90vw]">
        <span className="text-2xl">📲</span>
        <button
          onClick={() => {
            if (isIOS) {
              setShowIOS(true);
              return;
            }
            if (!deferred) return;
            deferred.prompt();
            deferred.userChoice.finally(() => {
              setDeferred(null);
              setHidden(true);
            });
          }}
          className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          {strings.cta}
        </button>
        <button
          onClick={dismiss}
          className="text-white/40 hover:text-white/70 text-lg leading-none px-1"
          aria-label={strings.dismiss}
        >
          ×
        </button>
      </div>

      {showIOS && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-end sm:items-center justify-center p-4"
          onClick={() => setShowIOS(false)}
        >
          <div
            className="glass rounded-2xl p-5 max-w-sm w-full space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-display">{strings.iosTitle}</h3>
            <p className="text-sm text-white/70 whitespace-pre-line">{strings.iosBody}</p>
            <button
              onClick={dismiss}
              className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2.5 text-sm"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
