"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createPoll } from "./actions";
import { useT } from "./locale-context";

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
  const t = useT();
  const searchParams = useSearchParams();
  const prefillQ = searchParams.get("q") ?? "";
  const prefillOpts = (() => {
    const raw = searchParams.get("o");
    if (!raw) return null;
    const list = raw.split("|").map((s) => s.trim()).filter(Boolean).slice(0, 6);
    return list.length >= 2 ? list : null;
  })();
  const [question, setQuestion] = useState(prefillQ);
  const [options, setOptions] = useState<string[]>(prefillOpts ?? ["", ""]);
  const [pending, setPending] = useState(false);
  const [pIdx, setPIdx] = useState(0);

  const reactId = useId();
  const formId = `create-poll-${reactId}`;
  const headingId = `${formId}-heading`;
  const questionId = `${formId}-question`;
  const questionHintId = `${formId}-question-hint`;
  const optionsLabelId = `${formId}-options-label`;
  const optionsHintId = `${formId}-options-hint`;

  useEffect(() => {
    if (prefillQ || prefillOpts) return;
    const id = setInterval(() => {
      setPIdx((i) => (i + 1) % QUESTION_PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(id);
  }, [prefillQ, prefillOpts]);

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
      aria-labelledby={headingId}
      className="glass rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl shadow-pink-500/10"
    >
      <h2 id={headingId} className="sr-only">
        Crée ton sondage en 10 secondes
      </h2>

      <div>
        <label
          htmlFor={questionId}
          className="block text-xs font-medium mb-1.5 text-white/60 uppercase tracking-wider"
        >
          {t("form.question.label")}
        </label>
        <input
          id={questionId}
          name="question"
          required
          aria-required="true"
          aria-describedby={questionHintId}
          maxLength={200}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={QUESTION_PLACEHOLDERS[pIdx]}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-base sm:text-lg font-medium outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
        />
        <span id={questionHintId} className="sr-only">
          Pose une question courte, 200 caractères maximum.
        </span>
      </div>

      <div className="space-y-2" role="group" aria-labelledby={optionsLabelId} aria-describedby={optionsHintId}>
        <div
          id={optionsLabelId}
          className="block text-xs font-medium text-white/60 uppercase tracking-wider"
        >
          {t("form.options.label")}
        </div>
        <span id={optionsHintId} className="sr-only">
          Ajoute entre 2 et 6 options de réponse, 80 caractères maximum chacune.
        </span>
        {options.map((opt, i) => {
          const optionId = `${formId}-option-${i}`;
          const optionLabel = `${t("form.options.label")} ${i + 1}`;
          return (
            <div key={i} className="flex gap-2 items-center group">
              <span className="text-xl select-none w-6 text-center shrink-0" aria-hidden>
                {EMOJIS[i]}
              </span>
              <label htmlFor={optionId} className="sr-only">
                {optionLabel}
              </label>
              <input
                id={optionId}
                name="option"
                required
                aria-required="true"
                aria-label={optionLabel}
                maxLength={80}
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                placeholder={i < 2 ? optionExample[i] : `Option ${i + 1}`}
                className="flex-1 min-w-0 rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-sm sm:text-base outline-none focus:bg-white/10 focus:border-pink-400/50 transition placeholder:text-white/30"
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(i)}
                  className="rounded-lg w-11 h-11 shrink-0 flex items-center justify-center text-xl leading-none text-white/40 hover:text-red-400 hover:bg-red-500/10 transition"
                  aria-label={`Supprimer l'option ${i + 1}`}
                >
                  <span aria-hidden="true">×</span>
                </button>
              )}
            </div>
          );
        })}
        {options.length < 6 && (
          <div className="flex gap-2 items-center">
            <span className="w-6 shrink-0" aria-hidden />
            <button
              type="button"
              onClick={addOption}
              aria-label={`Ajouter une option de réponse (${t("form.add")})`}
              className="flex-1 min-h-[44px] rounded-xl border border-dashed border-white/15 bg-white/[0.02] text-white/40 hover:text-white hover:border-pink-400/40 hover:bg-white/5 transition text-sm font-medium flex items-center justify-center gap-1.5"
            >
              <span className="text-lg leading-none" aria-hidden="true">+</span>
              <span className="hidden sm:inline">{t("form.add").replace(/^[+\s]+/, "")}</span>
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        aria-label={
          pending
            ? `${t("form.creating")} — création de votre sondage en cours`
            : `${t("form.create")} — publier le sondage et obtenir un lien partageable`
        }
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? t("form.creating") : t("form.create")}
      </button>
    </form>
  );
}
