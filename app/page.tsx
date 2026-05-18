"use client";

import { useState } from "react";
import { createPoll } from "./actions";

export default function HomePage() {
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
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-black tracking-tight">moomz</h1>
        <p className="text-neutral-600">Pose ta question. Partage le lien. Vois la vibe.</p>
      </header>

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
        className="space-y-4 rounded-3xl bg-white/70 backdrop-blur p-6 shadow-xl shadow-pink-100/40 border border-white"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Ta question</label>
          <input
            name="question"
            required
            maxLength={200}
            placeholder="Pizza ananas, oui ou non ?"
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Options</label>
          {options.map((opt, i) => (
            <div key={i} className="flex gap-2">
              <input
                name="option"
                required
                maxLength={80}
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                placeholder={`Option ${i + 1}`}
                className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-pink-300"
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(i)}
                  className="rounded-xl px-3 text-neutral-400 hover:text-red-500 hover:bg-red-50 transition"
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
              className="text-sm text-neutral-500 hover:text-neutral-800 transition"
            >
              + ajouter une option
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-neutral-900 text-white font-semibold py-3 text-lg hover:bg-neutral-700 transition disabled:opacity-50"
        >
          {pending ? "Création…" : "Créer le moomz →"}
        </button>
      </form>

      <p className="text-center text-xs text-neutral-400">
        Gratuit, pas de compte, lien partageable instantanément.
      </p>
    </div>
  );
}
