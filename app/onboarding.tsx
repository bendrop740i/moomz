"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setTopics } from "./actions";
import { TOPICS, type Topic } from "@/lib/topics";

export default function Onboarding() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<Set<Topic>>(new Set());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const has = document.cookie.match(/(?:^|;\s*)moomz_topics=/);
    if (!has) setOpen(true);
  }, []);

  if (!open) return null;

  const toggle = (id: Topic) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < 5) next.add(id);
      return next;
    });
  };

  const submit = async () => {
    setSaving(true);
    await setTopics(Array.from(picked));
    setOpen(false);
    router.refresh();
  };

  const skip = async () => {
    setSaving(true);
    await setTopics([]);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass rounded-3xl p-5 sm:p-6 w-full max-w-md space-y-5 shadow-2xl shadow-pink-500/30 border-pink-400/40 fade-up">
        <div className="space-y-1 text-center">
          <h2 className="font-display text-3xl bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            Bienvenue
          </h2>
          <p className="text-white/60 text-sm">
            Pick tes vibes ({picked.size}/5) — on te montrera les bons polls.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {TOPICS.map((t) => {
            const active = picked.has(t.id);
            return (
              <button
                key={t.id}
                onClick={() => toggle(t.id)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2.5 transition border ${
                  active
                    ? "bg-gradient-to-r from-pink-500/30 to-purple-500/30 border-pink-400/60 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <span className="text-xl">{t.emoji}</span>
                <span className="text-sm font-medium">{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex gap-2">
          <button
            onClick={skip}
            disabled={saving}
            className="rounded-xl bg-white/5 border border-white/10 text-white/60 font-medium py-2.5 px-4 text-sm hover:bg-white/10 transition"
          >
            Plus tard
          </button>
          <button
            onClick={submit}
            disabled={saving || picked.size === 0}
            className="flex-1 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2.5 hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
          >
            {picked.size === 0 ? "Choisis-en au moins 1" : "C'est parti →"}
          </button>
        </div>
      </div>
    </div>
  );
}
