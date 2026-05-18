"use client";

import { useState } from "react";
import { createPoll } from "./actions";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

export default function CreatePollForm() {
  const [options, setOptions] = useState(["", ""]);
  const [pending, setPending] = useState(false);

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
      className="glass rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl shadow-pink-500/10"
    >
      <div>
        <label className="block text-sm font-medium mb-2 text-white/70">
          Ta question
        </label>
        <input
          name="question"
          required
          maxLength={200}
          placeholder="Pizza ananas, oui ou non ?"
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-4 text-xl font-medium outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
        />
      </div>

      <div className="space-y-2.5">
        <label className="block text-sm font-medium text-white/70">Options</label>
        {options.map((opt, i) => (
          <div key={i} className="flex gap-2 items-center group">
            <span className="text-2xl select-none" aria-hidden>
              {EMOJIS[i]}
            </span>
            <input
              name="option"
              required
              maxLength={80}
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
              placeholder={`Option ${i + 1}`}
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
            />
            {options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(i)}
                className="rounded-xl w-10 h-10 flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-500/10 transition"
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
            className="text-sm text-white/50 hover:text-white transition ml-9"
          >
            + ajouter une option
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 text-lg hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? "Création…" : "Créer le moomz →"}
      </button>
    </form>
  );
}
