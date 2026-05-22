"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

/**
 * On-brand toast — replaces native `alert()` across the core loop.
 *
 * Self-contained: no global provider, no layout wiring. Each component that
 * needs feedback does:
 *
 *   const { toast, ToastHost } = useToast();
 *   ...
 *   catch (e) { toast(e instanceof Error ? e.message : "oops", "error"); }
 *   ...
 *   return (<>...<ToastHost />...</>);
 *
 * The host renders a `fixed`-positioned frosted pill near the bottom-center,
 * above the bottom nav, so its DOM location inside the tree is irrelevant.
 */

export type ToastKind = "error" | "success";

type ToastState = {
  /** Bumps on every `toast()` call so re-firing restarts the animation. */
  k: number;
  message: string;
  kind: ToastKind;
};

// Long enough to read a short server error, short enough not to nag.
const AUTO_DISMISS_MS = 2600;

export function useToast() {
  const [current, setCurrent] = useState<ToastState | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Stable id so the live region / animation key stay consistent per mount.
  const reactId = useId();

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    clearTimer();
    setCurrent(null);
  }, [clearTimer]);

  const toast = useCallback(
    (message: string, kind: ToastKind = "error") => {
      clearTimer();
      setCurrent({ k: Date.now(), message, kind });
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        setCurrent(null);
      }, AUTO_DISMISS_MS);
    },
    [clearTimer],
  );

  // Drop the pending auto-dismiss if the component unmounts mid-toast.
  useEffect(() => clearTimer, [clearTimer]);

  const ToastHost = useCallback(
    () => <ToastHostView state={current} onDismiss={dismiss} hostId={reactId} />,
    [current, dismiss, reactId],
  );

  return { toast, dismiss, ToastHost };
}

function ToastHostView({
  state,
  onDismiss,
  hostId,
}: {
  state: ToastState | null;
  onDismiss: () => void;
  hostId: string;
}) {
  if (!state) return null;

  const isError = state.kind === "error";
  // Per-host suffix so the keyframe + class are unique even if two components
  // both render a ToastHost on the same page.
  const sid = cssId(hostId);
  const animClass = `moomz-toast-in-${sid}`;

  return (
    <div
      // Above the bottom nav, clear of the iOS home indicator. `fixed` means
      // the host works no matter where it sits in the component tree.
      className="pointer-events-none fixed inset-x-0 bottom-[calc(6rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4"
    >
      <button
        type="button"
        // Re-keying on every `toast()` call restarts the slide/fade-in.
        key={state.k}
        onClick={onDismiss}
        role="status"
        aria-live="polite"
        aria-label={state.message}
        className={`${animClass} pointer-events-auto flex max-w-[20rem] items-center gap-2.5 rounded-2xl border bg-black/80 px-4 py-3 text-left text-sm font-semibold text-white shadow-2xl shadow-black/50 backdrop-blur-md transition active:scale-95 ${
          isError
            ? "border-pink-400/40 shadow-pink-500/20"
            : "border-emerald-400/40 shadow-emerald-500/20"
        }`}
      >
        <span className="shrink-0 text-lg leading-none" aria-hidden>
          {isError ? "😬" : "✨"}
        </span>
        <span className="min-w-0 break-words leading-snug">{state.message}</span>
      </button>
      {/* Scoped keyframe + class — host-unique names so we don't depend on a
          class landing in globals.css and don't collide across instances. */}
      <style>{`
        @keyframes moomz-toast-kf-${sid} {
          from { opacity: 0; transform: translateY(14px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .${animClass} {
          animation: moomz-toast-kf-${sid} 0.34s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .${animClass} { animation: none; }
        }
      `}</style>
    </div>
  );
}

/** `useId()` returns characters (`:`) invalid in a CSS identifier — strip them. */
function cssId(raw: string): string {
  return raw.replace(/[^a-zA-Z0-9_-]/g, "");
}
