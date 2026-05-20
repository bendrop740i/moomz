"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { setTopics } from "./actions";
import { TOPICS, type Topic } from "@/lib/topics";
import { useT } from "./locale-context";

const MAX_PICK = 5;

export default function Onboarding() {
  const router = useRouter();
  const t = useT();
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<Set<Topic>>(new Set());
  const [saving, setSaving] = useState(false);
  const [enter, setEnter] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const has = document.cookie.match(/(?:^|;\s*)moomz_topics=/);
    if (!has) {
      setOpen(true);
      // small delay so the slide-in animation can play after mount
      requestAnimationFrame(() => requestAnimationFrame(() => setEnter(true)));
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap: remember last focused element, move focus into the dialog,
  // keep Tab cycling inside, and restore focus on close.
  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current =
      (document.activeElement as HTMLElement | null) ?? null;

    const getFocusable = (): HTMLElement[] => {
      const root = dialogRef.current;
      if (!root) return [];
      const selector =
        'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
      return Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null,
      );
    };

    // Move initial focus inside the dialog.
    requestAnimationFrame(() => {
      const focusables = getFocusable();
      (focusables[0] ?? dialogRef.current)?.focus();
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        // Same behavior as the "Plus tard" button: persist empty picks + close.
        void (async () => {
          setSaving(true);
          await setTopics([]);
          setEnter(false);
          setTimeout(() => setOpen(false), 220);
        })();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (focusables.length === 0) {
        e.preventDefault();
        dialogRef.current?.focus();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !dialogRef.current?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last || !dialogRef.current?.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // Restore focus to the previously focused element.
      previouslyFocusedRef.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  const toggle = (id: Topic) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < MAX_PICK) next.add(id);
      return next;
    });
  };

  const submit = async () => {
    if (picked.size === 0) return;
    setSaving(true);
    await setTopics(Array.from(picked));
    setEnter(false);
    setTimeout(() => {
      setOpen(false);
      router.refresh();
    }, 220);
  };

  const skip = async () => {
    setSaving(true);
    await setTopics([]);
    setEnter(false);
    setTimeout(() => setOpen(false), 220);
  };

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md outline-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      tabIndex={-1}
    >
      {/* soft animated glow behind the sheet */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-80 h-80 rounded-full bg-pink-500/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl animate-pulse" style={{ animationDelay: "0.8s" }} />
      </div>

      <div
        className={`relative w-full sm:max-w-md sm:mx-4 flex flex-col bg-gradient-to-b from-[#1a0a26] to-[#0b0613] border border-pink-400/30 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-pink-500/30 transition-transform duration-300 ease-out ${
          enter ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          maxHeight: "min(92dvh, 760px)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* drag handle (mobile sheet affordance) */}
        <div className="sm:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* header */}
        <div className="px-5 sm:px-7 pt-3 sm:pt-7 pb-4 text-center shrink-0">
          <div className="text-3xl mb-1.5" aria-hidden>👋✨</div>
          <h2
            id="onboarding-title"
            className="font-display text-3xl sm:text-4xl leading-tight bg-gradient-to-br from-white via-pink-200 to-purple-300 bg-clip-text text-transparent"
          >
            {t("onboarding.title")}
          </h2>
          <p className="text-white/65 text-sm sm:text-base mt-2 max-w-xs mx-auto leading-snug">
            {t("onboarding.subtitle")}
          </p>

          {/* picked counter dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4" aria-hidden>
            {Array.from({ length: MAX_PICK }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < picked.size
                    ? "w-6 bg-gradient-to-r from-pink-400 to-purple-400"
                    : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>

        {/* topic grid */}
        <div className="overflow-y-auto overscroll-contain px-4 sm:px-6 pb-3 flex-1 min-h-0">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
            {TOPICS.map((topic) => {
              const active = picked.has(topic.id);
              const disabled = !active && picked.size >= MAX_PICK;
              const label = t(`onboarding.topic.${topic.id}`);
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => toggle(topic.id)}
                  disabled={disabled}
                  aria-pressed={active}
                  aria-label={label}
                  className={`group relative flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-3.5 min-h-[88px] transition-all duration-200 border-2 ${
                    active
                      ? "bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-amber-500/20 border-pink-400/80 shadow-lg shadow-pink-500/30 scale-[1.04]"
                      : disabled
                        ? "bg-white/[0.03] border-white/5 opacity-40 cursor-not-allowed"
                        : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.97]"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                    {label}
                  </span>
                  {active && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md shadow-pink-500/50">
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* sticky footer */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/10 bg-black/40 backdrop-blur rounded-b-3xl sm:rounded-b-3xl flex items-center gap-2">
          <button
            onClick={skip}
            disabled={saving}
            className="min-h-[48px] rounded-xl px-4 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition disabled:opacity-50 shrink-0"
          >
            {t("onboarding.skip")}
          </button>
          <button
            onClick={submit}
            disabled={saving || picked.size === 0}
            className="flex-1 min-h-[48px] rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-xl shadow-pink-500/40"
          >
            {saving
              ? "…"
              : picked.size === 0
                ? t("onboarding.pick_topics")
                : `${t("onboarding.continue")} (${picked.size})`}
          </button>
        </div>
      </div>
    </div>
  );
}
