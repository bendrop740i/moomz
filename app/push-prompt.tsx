"use client";

// Soft opt-in for web push. Shown once after the user has been on the site
// for a beat AND has interacted at least once (voted / created / loaded a
// poll detail). Dismissal is remembered for 14 days in localStorage.

import { useCallback, useEffect, useState } from "react";

const STORAGE_DISMISSED = "moomz_push_dismissed_until";
const STORAGE_SUBSCRIBED = "moomz_push_subscribed";
const STORAGE_INTERACTED = "moomz_push_interacted";

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
    const reg = await navigator.serviceWorker.ready;
    return reg;
  } catch {
    return null;
  }
}

export default function PushPrompt({
  strings,
}: {
  strings: { headline: string; body: string; allow: string; dismiss: string };
}) {
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("Notification" in window) || !("serviceWorker" in navigator)) return;
    if (Notification.permission !== "default") return;

    if (localStorage.getItem(STORAGE_SUBSCRIBED) === "1") return;
    const until = Number(localStorage.getItem(STORAGE_DISMISSED) || "0");
    if (Date.now() < until) return;
    if (!localStorage.getItem(STORAGE_INTERACTED)) return;

    // Wait 20s + idle to avoid jumping in front of the user on landing.
    const t = setTimeout(() => setShow(true), 20_000);
    return () => clearTimeout(t);
  }, []);

  // Listen for the "moomz:vote" / "moomz:interacted" window events that
  // existing components dispatch — once any fires, set the flag so on the
  // NEXT visit the prompt can show.
  useEffect(() => {
    const flag = () => {
      try {
        localStorage.setItem(STORAGE_INTERACTED, "1");
      } catch {
        // localStorage might be blocked in private mode — skip.
      }
    };
    window.addEventListener("moomz:vote", flag);
    window.addEventListener("moomz:interacted", flag);
    return () => {
      window.removeEventListener("moomz:vote", flag);
      window.removeEventListener("moomz:interacted", flag);
    };
  }, []);

  const subscribe = useCallback(async () => {
    setBusy(true);
    try {
      const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!pub) {
        console.error("[push] no public VAPID key in env");
        return;
      }
      const perm = await Notification.requestPermission();
      if (perm !== "granted") {
        localStorage.setItem(STORAGE_DISMISSED, String(Date.now() + 14 * 24 * 3600 * 1000));
        setShow(false);
        return;
      }
      const reg = await ensureRegistration();
      if (!reg) return;
      const existing = await reg.pushManager.getSubscription();
      // Copy into a fresh ArrayBuffer-backed Uint8Array so TS accepts it as
      // BufferSource (Uint8Array<ArrayBufferLike> isn't assignable).
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
          lang: typeof document !== "undefined" ? document.documentElement.lang : undefined,
        }),
      });
      localStorage.setItem(STORAGE_SUBSCRIBED, "1");
      setShow(false);
    } catch (e) {
      console.error("[push] subscribe failed", e);
    } finally {
      setBusy(false);
    }
  }, []);

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_DISMISSED, String(Date.now() + 14 * 24 * 3600 * 1000));
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 inset-x-3 sm:inset-x-auto sm:right-6 sm:max-w-sm z-50 fade-up">
      <div className="glass rounded-2xl p-4 shadow-2xl shadow-pink-500/20 border-pink-400/30 space-y-3">
        <div className="space-y-1">
          <div className="text-base font-bold tracking-tight">🔔 {strings.headline}</div>
          <p className="text-white/65 text-sm leading-snug">{strings.body}</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={dismiss}
            className="text-xs text-white/50 hover:text-white px-2 py-1.5"
          >
            {strings.dismiss}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={subscribe}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-3.5 py-2 text-sm hover:scale-[1.03] active:scale-95 transition shadow-lg shadow-pink-500/30 disabled:opacity-50"
          >
            {busy ? "…" : strings.allow}
          </button>
        </div>
      </div>
    </div>
  );
}
