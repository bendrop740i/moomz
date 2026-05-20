"use client";

// Interactive quiz player. Steps through questions, shows the explainer
// after each pick, tallies the final score. Reads the full Quiz object
// from props — no fetch.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Quiz } from "@/lib/quizzes/types";
import { recordQuizDone } from "../../actions";

type Phase = "answering" | "revealed" | "done";

export default function QuizPlay({ quiz, slug }: { quiz: Quiz; slug: string }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const current = quiz.questions[step];
  const total = quiz.questions.length;
  const phase: Phase =
    step >= total ? "done" : picked === null ? "answering" : "revealed";

  // Record the finished quiz once → quizzes_completed achievement counter.
  const recordedRef = useRef(false);
  useEffect(() => {
    if (phase === "done" && !recordedRef.current) {
      recordedRef.current = true;
      void recordQuizDone(slug);
    }
  }, [phase, slug]);

  const choose = useCallback(
    (i: number) => {
      if (picked !== null) return;
      setPicked(i);
      setHistory((h) => [...h, i]);
      if (i === current.correct) setScore((s) => s + 1);
    },
    [picked, current],
  );

  const next = useCallback(() => {
    setPicked(null);
    setStep((s) => s + 1);
  }, []);

  const restart = useCallback(() => {
    setStep(0);
    setPicked(null);
    setScore(0);
    setHistory([]);
  }, []);

  const verdict = useMemo(() => {
    if (phase !== "done") return null;
    const pct = Math.round((score / total) * 100);
    if (pct >= 90) return { label: "🏆 Légende", color: "from-amber-400 to-pink-500" };
    if (pct >= 70) return { label: "🔥 Pro", color: "from-pink-500 to-purple-600" };
    if (pct >= 50) return { label: "✨ Pas mal", color: "from-purple-500 to-cyan-500" };
    return { label: "🌱 Retente !", color: "from-cyan-400 to-emerald-500" };
  }, [phase, score, total]);

  if (phase === "done") {
    return (
      <section
        aria-label={`Résultat du quiz ${quiz.title}`}
        className="glass rounded-3xl p-6 sm:p-8 text-center space-y-4"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
          Résultat
        </div>
        <div
          className={`mx-auto inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${verdict?.color} text-2xl font-bold`}
          role="status"
          aria-live="polite"
        >
          {score}/{total}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{verdict?.label}</h2>
        <p className="text-white/60 text-sm max-w-sm mx-auto">
          {score >= total - 1
            ? "Score parfait ou presque. Tu maîtrises le sujet."
            : score >= total / 2
              ? "Tu connais bien. Quelques pièges t'ont eu, normal."
              : "Reviens en plus dur. Toutes les explications sont en dessous."}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={restart}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-2.5 text-sm hover:scale-[1.03] active:scale-95 transition"
          >
            🔁 Recommencer
          </button>
          <Link
            href="/quiz"
            className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-4 py-2.5 text-sm transition"
          >
            🎯 Autres quiz
          </Link>
        </div>
        <details className="text-left mt-6 group">
          <summary className="cursor-pointer text-sm text-white/50 hover:text-white/80 select-none">
            Voir le détail de mes réponses
          </summary>
          <ol className="mt-3 space-y-2 text-sm text-white/70">
            {quiz.questions.map((q, i) => {
              const my = history[i];
              const ok = my === q.correct;
              return (
                <li key={i} className="rounded-lg bg-white/5 p-2.5">
                  <div className="flex items-center gap-2 font-semibold text-white/90">
                    <span aria-hidden>{ok ? "✅" : "❌"}</span>
                    <span>Q{i + 1}. {q.q}</span>
                  </div>
                  <div className="text-xs text-white/55 mt-1">
                    Réponse : <span className="text-white/80">{q.options[q.correct]}</span>
                    {!ok && my !== undefined && (
                      <span className="ml-2 text-white/40">
                        (tu avais répondu {q.options[my]})
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </details>
      </section>
    );
  }

  const pickedIsCorrect = picked !== null && picked === current.correct;

  return (
    <section
      aria-label={`Question ${step + 1} sur ${total}`}
      className="glass rounded-3xl p-5 sm:p-6 space-y-4"
    >
      <header className="flex items-center justify-between gap-3 text-xs">
        <div
          className="font-bold uppercase tracking-widest text-white/40"
          aria-live="polite"
        >
          Q{step + 1} / {total}
        </div>
        <div className="text-white/40">
          Score : <span className="text-pink-300 font-bold">{score}</span>
        </div>
      </header>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={step + 1}
        className="h-1 rounded-full bg-white/10 overflow-hidden"
      >
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all"
          style={{ width: `${((step + 1) / total) * 100}%` }}
        />
      </div>

      <h3 className="text-lg sm:text-xl font-bold leading-snug">{current.q}</h3>

      <div className="space-y-2" role="radiogroup" aria-label="Choix de réponse">
        {current.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === current.correct;
          const reveal = phase === "revealed";
          const cls = !reveal
            ? "bg-white/5 hover:bg-white/10 border-white/10"
            : isCorrect
              ? "bg-emerald-500/20 border-emerald-400/50"
              : isPicked
                ? "bg-red-500/20 border-red-400/50"
                : "bg-white/5 border-white/10 opacity-60";
          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={isPicked}
              aria-label={`Option ${i + 1}: ${opt}`}
              onClick={() => choose(i)}
              disabled={reveal}
              className={`w-full text-left rounded-xl px-3.5 py-3 border transition ${cls}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm sm:text-base">{opt}</span>
                {reveal && isCorrect && <span aria-hidden>✅</span>}
                {reveal && isPicked && !isCorrect && <span aria-hidden>❌</span>}
              </div>
            </button>
          );
        })}
      </div>

      {phase === "revealed" && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl bg-white/5 border border-white/10 p-3.5 space-y-1"
        >
          <div className="text-xs uppercase tracking-widest font-bold text-white/40">
            {pickedIsCorrect ? "✅ Bonne réponse" : "👀 Voilà pourquoi"}
          </div>
          <p className="text-sm text-white/80 leading-relaxed">{current.explainer}</p>
        </div>
      )}

      {phase === "revealed" && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={next}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-2.5 text-sm hover:scale-[1.03] active:scale-95 transition"
          >
            {step + 1 === total ? "Voir mon score →" : "Question suivante →"}
          </button>
        </div>
      )}
    </section>
  );
}
