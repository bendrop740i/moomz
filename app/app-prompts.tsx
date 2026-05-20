"use client";

// Single in-flow slot for the app's two soft prompts: "install moomz" (PWA) and
// "enable notifications". Rendered once at the top of <main> in the root layout.
//
// Why one component: install + push used to be two separate fixed overlays that
// both anchored to bottom-36 — they literally stacked on top of each other and
// on the bottom nav. This shows AT MOST ONE, in the document flow (no fixed
// positioning, no z-index fight, never near the bottom nav). Install wins over
// push when both are eligible. Renders nothing the rest of the time.

import { useCallback, useEffect, useState } from "react";

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type InstallStrings = {
  cta: string;
  iosTitle: string;
  iosBody: string;
  dismiss: string;
};
type PushStrings = {
  headline: string;
  body: string;
  allow: string;
  dismiss: string;
};

const INSTALL_DISMISS_KEY = "moomz_install_dismissed_at";
const INSTALL_DISMISS_DAYS = 14;
const PUSH_DISMISSED = "moomz_push_dismissed_until";
const PUSH_SUBSCRIBED = "moomz_push_subscribed";
const PUSH_INTERACTED = "moomz_push_interacted";

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; ++i) out[i] = raw.charCodeAt(i);
  return out;
}

async function ensureRegistration(): Promise<ServiceWorkerRegistration | null> {
  if (!("serviceWorker" in navigator)) return null;
  try {
    return await navigator.serviceWorker.ready;
  } catch {
    return null;
  }
}

type Mode = "none" | "install" | "install-ios" | "push";

export default function AppPrompts({
  installStrings,
  pushStrings,
}: {
  installStrings: InstallStrings;
  pushStrings: PushStrings;
}) {
  const [mode, setMode] = useState<Mode>("none");
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Keep the push "has interacted" flag fresh — push only becomes eligible
    // once the user has voted/created/opened a poll at least once.
    const flag = () => {
      try {
        localStorage.setItem(PUSH_INTERACTED, "1");
      } catch {
        // localStorage blocked (private mode) — skip.
      }
    };
    window.addEventListener("moomz:vote", flag);
    window.addEventListener("moomz:interacted", flag);

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true;

    // ---- INSTALL eligibility ----
    const dismissedAt = Number(localStorage.getItem(INSTALL_DISMISS_KEY) ?? 0);
    const installDismissed =
      dismissedAt &&
      Date.now() - dismissedAt < INSTALL_DISMISS_DAYS * 86400 * 1000;
    const ua = window.navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) &&
      !(window as Window & { MSStream?: unknown }).MSStream;

    let bipHandler: ((e: Event) => void) | null = null;
    if (!standalone && !installDismissed) {
      if (isIOS) {
        // iOS gives no beforeinstallprompt — offer the manual instructions.
        setMode((m) => (m === "none" ? "install-ios" : m));
      } else {
        bipHandler = (e: Event) => {
          e.preventDefault();
          setDeferred(e as BIPEvent);
          // Install outranks a push prompt if both want the slot.
          setMode((m) => (m === "none" || m === "push" ? "install" : m));
        };
        window.addEventListener("beforeinstallprompt", bipHandler);
      }
    }

    // ---- PUSH eligibility (takes the slot only if install hasn't) ----
    const pushEligible =
      "Notification" in window &&
      "serviceWorker" in navigator &&
      Notification.permission === "default" &&
      localStorage.getItem(PUSH_SUBSCRIBED) !== "1" &&
      Date.now() >= Number(localStorage.getItem(PUSH_DISMISSED) || "0") &&
      !!localStorage.getItem(PUSH_INTERACTED);
    if (pushEligible) setMode((m) => (m === "none" ? "push" : m));

    return () => {
      window.removeEventListener("moomz:vote", flag);
      window.removeEventListener("moomz:interacted", flag);
      if (bipHandler) window.removeEventListener("beforeinstallprompt", bipHandler);
    };
  }, []);

  const dismissInstall = useCallback(() => {
    try {
      localStorage.setItem(INSTALL_DISMISS_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setShowIOSModal(false);
    setMode("none");
  }, []);

  const dismissPush = useCallback(() => {
    try {
      localStorage.setItem(
        PUSH_DISMISSED,
        String(Date.now() + 14 * 24 * 3600 * 1000),
      );
    } catch {
      // ignore
    }
    setMode("none");
  }, []);

  const subscribePush = useCallback(async () => {
    setBusy(true);
    try {
      const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!pub) {
        console.error("[push] no public VAPID key in env");
        setMode("none");
        return;
      }
      const perm = await Notification.requestPermission();
      if (perm !== "granted") {
        dismissPush();
        return;
      }
      const reg = await ensureRegistration();
      if (!reg) return;
      const existing = await reg.pushManager.getSubscription();
      const rawKey = urlBase64ToUint8Array(pub);
      const keyBuf = new Uint8Array(new ArrayBuffer(rawKey.length));
      keyBuf.set(rawKey);
      const sub =
        existing ??
        (await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: keyBuf,
        }));
      const json = sub.toJSON();
      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          endpoint: json.endpoint,
          keys: json.keys,
          lang:
            typeof document !== "undefined"
              ? document.documentElement.lang
              : undefined,
        }),
      });
      localStorage.setItem(PUSH_SUBSCRIBED, "1");
      setMode("none");
    } catch (e) {
      console.error("[push] subscribe failed", e);
    } finally {
      setBusy(false);
    }
  }, [dismissPush]);

  if (mode === "none") return null;

  // ---- INSTALL banner (Android prompt + iOS manual instructions) ----
  if (mode === "install" || mode === "install-ios") {
    return (
      <>
        <div className="card-in glass mb-5 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
          <span className="text-2xl shrink-0" aria-hidden>
            📲
          </span>
          <button
            type="button"
            onClick={() => {
              if (mode === "install-ios") {
                setShowIOSModal(true);
                return;
              }
              if (!deferred) return;
              deferred.prompt();
              deferred.userChoice.finally(() => {
                setDeferred(null);
                setMode("none");
              });
            }}
            className="flex-1 text-left text-sm font-semibold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent"
          >
            {installStrings.cta}
          </button>
          <button
            type="button"
            onClick={dismissInstall}
            className="shrink-0 px-1 text-lg leading-none text-white/40 hover:text-white/70"
            aria-label={installStrings.dismiss}
          >
            ×
          </button>
        </div>

        {showIOSModal && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur sm:items-center"
            onClick={() => setShowIOSModal(false)}
          >
            <div
              className="glass w-full max-w-sm space-y-3 rounded-2xl p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-lg">{installStrings.iosTitle}</h3>
              <p className="whitespace-pre-line text-sm text-white/70">
                {installStrings.iosBody}
              </p>
              <button
                type="button"
                onClick={dismissInstall}
                className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-2.5 text-sm font-semibold text-white"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // ---- PUSH banner ----
  return (
    <div className="card-in glass mb-5 space-y-2.5 rounded-2xl border-pink-400/20 p-3.5">
      <div className="flex items-center gap-3">
        <span className="text-2xl shrink-0" aria-hidden>
          🔔
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-bold tracking-tight">
            {pushStrings.headline}
          </div>
          <p className="text-xs leading-snug text-white/60">
            {pushStrings.body}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={dismissPush}
          className="px-2 py-1.5 text-xs text-white/50 hover:text-white"
        >
          {pushStrings.dismiss}
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={subscribePush}
          className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-3.5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.03] active:scale-95 disabled:opacity-50"
        >
          {busy ? "…" : pushStrings.allow}
        </button>
      </div>
    </div>
  );
}
