"use client";

import { useEffect, useMemo, useState } from "react";
import { createPoll } from "./actions";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

const QUESTION_PLACEHOLDERS = [
  "Pizza ananas, oui ou non ?",
  "Mac ou Windows ?",
  "Plage ou montagne ?",
  "Café ou thé ?",
  "Soirée ou Netflix ?",
  "Iphone ou Android ?",
  "Foot ou tennis ?",
];

const OPTION_EXAMPLES: [string, string][] = [
  ["oui carrément", "non jamais"],
  ["team A", "team B"],
  ["matin", "soir"],
  ["chaud", "pas chaud"],
];

export default function CreatePollForm() {
  const [options, setOptions] = useState(["", ""]);
  const [pending, setPending] = useState(false);
  const [pIdx, setPIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPIdx((i) => (i + 1) % QUESTION_PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const optionExample = useMemo(
    () => OPTION_EXAMPLES[Math.floor(Math.random() * OPTION_EXAMPLES.length)],
    [],
  );

  const updateOption = (i: number, v: string) => {
    const next = [...options];
    next[i] = v;
    setOptions(next);
  };
  const addOption = () => options.length < 6 && setOptions([...options, ""]);
  const removeOption = (i: number) =>
    options.length > 2 && setOptions(options.filter((_, idx) => idx !== i));

  return (
    <form
      action={async (fd) => {
        setPending(true);
        try {
          await createPoll(fd);
        } catch (e) {
          alert(e instanceof Error ? e.message : "Erreur");
          setPending(false);
        }
      }}
      className="glass rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl shadow-pink-500/10"
    >
      <div>
        <label className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider">
          Question
        </label>
        <input
          name="question"
          required
          maxLength={200}
          placeholder={QUESTION_PLACEHOLDERS[pIdx]}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-base sm:text-lg font-medium outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider">
          Options
        </label>
        {options.map((opt, i) => (
          <div key={i} className="flex gap-2 items-center group">
            <span className="text-xl select-none" aria-hidden>
              {EMOJIS[i]}
            </span>
            <input
              name="option"
              required
              maxLength={80}
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
              placeholder={i < 2 ? optionExample[i] : `Option ${i + 1}`}
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm sm:text-base outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
            />
            {options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(i)}
                className="rounded-lg w-8 h-8 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-500/10 transition"
                aria-label="Supprimer"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {options.length < 6 && (
          <button
            type="button"
            onClick={addOption}
            className="text-xs text-white/50 hover:text-white transition ml-8"
          >
            + ajouter une option
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? "Création…" : "Créer le moomz →"}
      </button>
    </form>
  );
}
