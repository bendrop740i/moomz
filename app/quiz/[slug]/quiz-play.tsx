"use client";

// Interactive quiz player. Steps through questions, shows the explainer
// after each pick, tallies the final score. Reads the full Quiz object
// from props — no fetch.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Quiz, QuizLocale } from "@/lib/quizzes/types";
import { seoHref } from "@/lib/seo/seo-href";
import { recordQuizDone } from "../../actions";

type Phase = "answering" | "revealed" | "done";

// Per-locale UI chrome. Keyed off the quiz's content locale so the player
// chrome matches the language of the questions. Quiz questions / answers /
// explainers themselves are authored content and never translated.
type PlayChrome = {
  result: string;
  verdictLegend: string;
  verdictPro: string;
  verdictOk: string;
  verdictRetry: string;
  msgPerfect: string;
  msgGood: string;
  msgLow: string;
  restart: string;
  otherQuizzes: string;
  seeDetail: string;
  answer: string;
  youAnswered: (opt: string) => string;
  score: string;
  correctAnswer: string;
  hereIsWhy: string;
  seeMyScore: string;
  nextQuestion: string;
  questionOf: (cur: number, total: number) => string;
  chooseAnswer: string;
  resultAria: (title: string) => string;
  questionAria: (cur: number, total: number) => string;
  optionAria: (i: number, opt: string) => string;
};

const PLAY_CHROME: Record<QuizLocale, PlayChrome> = {
  fr: {
    result: "Résultat",
    verdictLegend: "🏆 Légende",
    verdictPro: "🔥 Pro",
    verdictOk: "✨ Pas mal",
    verdictRetry: "🌱 Retente !",
    msgPerfect: "Score parfait ou presque. Tu maîtrises le sujet.",
    msgGood: "Tu connais bien. Quelques pièges t'ont eu, normal.",
    msgLow: "Reviens en plus dur. Toutes les explications sont en dessous.",
    restart: "🔁 Recommencer",
    otherQuizzes: "🎯 Autres quiz",
    seeDetail: "Voir le détail de mes réponses",
    answer: "Réponse :",
    youAnswered: (opt) => `(tu avais répondu ${opt})`,
    score: "Score :",
    correctAnswer: "✅ Bonne réponse",
    hereIsWhy: "👀 Voilà pourquoi",
    seeMyScore: "Voir mon score →",
    nextQuestion: "Question suivante →",
    questionOf: (cur, total) => `Question ${cur} sur ${total}`,
    chooseAnswer: "Choix de réponse",
    resultAria: (title) => `Résultat du quiz ${title}`,
    questionAria: (cur, total) => `Question ${cur} sur ${total}`,
    optionAria: (i, opt) => `Option ${i}: ${opt}`,
  },
  en: {
    result: "Result",
    verdictLegend: "🏆 Legend",
    verdictPro: "🔥 Pro",
    verdictOk: "✨ Not bad",
    verdictRetry: "🌱 Try again!",
    msgPerfect: "Perfect score or nearly. You know your stuff.",
    msgGood: "You know this well. A few traps got you, that's fine.",
    msgLow: "Come back tougher. All the explanations are below.",
    restart: "🔁 Restart",
    otherQuizzes: "🎯 Other quizzes",
    seeDetail: "See my answers in detail",
    answer: "Answer:",
    youAnswered: (opt) => `(you answered ${opt})`,
    score: "Score:",
    correctAnswer: "✅ Correct answer",
    hereIsWhy: "👀 Here's why",
    seeMyScore: "See my score →",
    nextQuestion: "Next question →",
    questionOf: (cur, total) => `Question ${cur} of ${total}`,
    chooseAnswer: "Choose an answer",
    resultAria: (title) => `Result of quiz ${title}`,
    questionAria: (cur, total) => `Question ${cur} of ${total}`,
    optionAria: (i, opt) => `Option ${i}: ${opt}`,
  },
  es: {
    result: "Resultado",
    verdictLegend: "🏆 Leyenda",
    verdictPro: "🔥 Pro",
    verdictOk: "✨ Nada mal",
    verdictRetry: "🌱 ¡Reintenta!",
    msgPerfect: "Puntuación perfecta o casi. Dominas el tema.",
    msgGood: "Lo conoces bien. Algunas trampas te atraparon, es normal.",
    msgLow: "Vuelve más fuerte. Todas las explicaciones están abajo.",
    restart: "🔁 Reiniciar",
    otherQuizzes: "🎯 Otros quiz",
    seeDetail: "Ver el detalle de mis respuestas",
    answer: "Respuesta:",
    youAnswered: (opt) => `(respondiste ${opt})`,
    score: "Puntuación:",
    correctAnswer: "✅ Respuesta correcta",
    hereIsWhy: "👀 Por eso",
    seeMyScore: "Ver mi puntuación →",
    nextQuestion: "Siguiente pregunta →",
    questionOf: (cur, total) => `Pregunta ${cur} de ${total}`,
    chooseAnswer: "Elige una respuesta",
    resultAria: (title) => `Resultado del quiz ${title}`,
    questionAria: (cur, total) => `Pregunta ${cur} de ${total}`,
    optionAria: (i, opt) => `Opción ${i}: ${opt}`,
  },
  it: {
    result: "Risultato",
    verdictLegend: "🏆 Leggenda",
    verdictPro: "🔥 Pro",
    verdictOk: "✨ Niente male",
    verdictRetry: "🌱 Riprova!",
    msgPerfect: "Punteggio perfetto o quasi. Padroneggi l'argomento.",
    msgGood: "Lo conosci bene. Qualche trabocchetto ti ha fregato, è normale.",
    msgLow: "Torna più agguerrito. Tutte le spiegazioni sono qui sotto.",
    restart: "🔁 Ricomincia",
    otherQuizzes: "🎯 Altri quiz",
    seeDetail: "Vedi il dettaglio delle mie risposte",
    answer: "Risposta:",
    youAnswered: (opt) => `(avevi risposto ${opt})`,
    score: "Punteggio:",
    correctAnswer: "✅ Risposta corretta",
    hereIsWhy: "👀 Ecco perché",
    seeMyScore: "Vedi il mio punteggio →",
    nextQuestion: "Domanda successiva →",
    questionOf: (cur, total) => `Domanda ${cur} di ${total}`,
    chooseAnswer: "Scegli una risposta",
    resultAria: (title) => `Risultato del quiz ${title}`,
    questionAria: (cur, total) => `Domanda ${cur} di ${total}`,
    optionAria: (i, opt) => `Opzione ${i}: ${opt}`,
  },
  pt: {
    result: "Resultado",
    verdictLegend: "🏆 Lenda",
    verdictPro: "🔥 Pro",
    verdictOk: "✨ Nada mal",
    verdictRetry: "🌱 Tente de novo!",
    msgPerfect: "Pontuação perfeita ou quase. Você domina o assunto.",
    msgGood: "Você conhece bem. Algumas pegadinhas te pegaram, é normal.",
    msgLow: "Volte mais preparado. Todas as explicações estão abaixo.",
    restart: "🔁 Recomeçar",
    otherQuizzes: "🎯 Outros quizzes",
    seeDetail: "Ver o detalhe das minhas respostas",
    answer: "Resposta:",
    youAnswered: (opt) => `(você respondeu ${opt})`,
    score: "Pontuação:",
    correctAnswer: "✅ Resposta correta",
    hereIsWhy: "👀 Veja por quê",
    seeMyScore: "Ver minha pontuação →",
    nextQuestion: "Próxima pergunta →",
    questionOf: (cur, total) => `Pergunta ${cur} de ${total}`,
    chooseAnswer: "Escolha uma resposta",
    resultAria: (title) => `Resultado do quiz ${title}`,
    questionAria: (cur, total) => `Pergunta ${cur} de ${total}`,
    optionAria: (i, opt) => `Opção ${i}: ${opt}`,
  },
  de: {
    result: "Ergebnis",
    verdictLegend: "🏆 Legende",
    verdictPro: "🔥 Pro",
    verdictOk: "✨ Nicht schlecht",
    verdictRetry: "🌱 Versuch's nochmal!",
    msgPerfect: "Perfekte Punktzahl oder fast. Du beherrschst das Thema.",
    msgGood: "Du kennst dich gut aus. Ein paar Fallen haben dich erwischt, normal.",
    msgLow: "Komm härter zurück. Alle Erklärungen stehen unten.",
    restart: "🔁 Neu starten",
    otherQuizzes: "🎯 Andere Quizze",
    seeDetail: "Meine Antworten im Detail ansehen",
    answer: "Antwort:",
    youAnswered: (opt) => `(du hast ${opt} geantwortet)`,
    score: "Punkte:",
    correctAnswer: "✅ Richtige Antwort",
    hereIsWhy: "👀 Darum",
    seeMyScore: "Mein Ergebnis ansehen →",
    nextQuestion: "Nächste Frage →",
    questionOf: (cur, total) => `Frage ${cur} von ${total}`,
    chooseAnswer: "Wähle eine Antwort",
    resultAria: (title) => `Ergebnis des Quiz ${title}`,
    questionAria: (cur, total) => `Frage ${cur} von ${total}`,
    optionAria: (i, opt) => `Option ${i}: ${opt}`,
  },
  ja: {
    result: "結果",
    verdictLegend: "🏆 レジェンド",
    verdictPro: "🔥 プロ",
    verdictOk: "✨ なかなか",
    verdictRetry: "🌱 もう一度!",
    msgPerfect: "ほぼ満点。テーマを完璧に理解しています。",
    msgGood: "よく知っています。いくつかのひっかけに引っかかったけど普通です。",
    msgLow: "もっと手強くなって戻ってきて。解説はすべて下にあります。",
    restart: "🔁 もう一度",
    otherQuizzes: "🎯 ほかのクイズ",
    seeDetail: "自分の回答の詳細を見る",
    answer: "答え:",
    youAnswered: (opt) => `(あなたの回答: ${opt})`,
    score: "スコア:",
    correctAnswer: "✅ 正解",
    hereIsWhy: "👀 その理由",
    seeMyScore: "スコアを見る →",
    nextQuestion: "次の問題 →",
    questionOf: (cur, total) => `問題 ${cur} / ${total}`,
    chooseAnswer: "答えを選ぶ",
    resultAria: (title) => `クイズ ${title} の結果`,
    questionAria: (cur, total) => `問題 ${cur} / ${total}`,
    optionAria: (i, opt) => `選択肢 ${i}: ${opt}`,
  },
  zh: {
    result: "结果",
    verdictLegend: "🏆 传奇",
    verdictPro: "🔥 高手",
    verdictOk: "✨ 还不错",
    verdictRetry: "🌱 再试一次!",
    msgPerfect: "满分或接近满分。你完全掌握了这个主题。",
    msgGood: "你很了解。被几个陷阱坑了,很正常。",
    msgLow: "变强了再回来。所有解析都在下面。",
    restart: "🔁 重新开始",
    otherQuizzes: "🎯 其他测验",
    seeDetail: "查看我的答案详情",
    answer: "答案:",
    youAnswered: (opt) => `(你选的是 ${opt})`,
    score: "得分:",
    correctAnswer: "✅ 回答正确",
    hereIsWhy: "👀 原因如下",
    seeMyScore: "查看我的得分 →",
    nextQuestion: "下一题 →",
    questionOf: (cur, total) => `第 ${cur} / ${total} 题`,
    chooseAnswer: "选择答案",
    resultAria: (title) => `测验 ${title} 的结果`,
    questionAria: (cur, total) => `第 ${cur} / ${total} 题`,
    optionAria: (i, opt) => `选项 ${i}: ${opt}`,
  },
};

export default function QuizPlay({ quiz, slug }: { quiz: Quiz; slug: string }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  // Player chrome follows the quiz's content locale, fallback FR.
  const c = PLAY_CHROME[quiz.lang] ?? PLAY_CHROME.fr;

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
    if (pct >= 90) return { label: c.verdictLegend, color: "from-amber-400 to-pink-500" };
    if (pct >= 70) return { label: c.verdictPro, color: "from-pink-500 to-purple-600" };
    if (pct >= 50) return { label: c.verdictOk, color: "from-purple-500 to-cyan-500" };
    return { label: c.verdictRetry, color: "from-cyan-400 to-emerald-500" };
  }, [phase, score, total, c]);

  if (phase === "done") {
    return (
      <section
        aria-label={c.resultAria(quiz.title)}
        className="glass rounded-3xl p-6 sm:p-8 text-center space-y-4"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
          {c.result}
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
            ? c.msgPerfect
            : score >= total / 2
              ? c.msgGood
              : c.msgLow}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={restart}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-2.5 text-sm hover:scale-[1.03] active:scale-95 transition"
          >
            {c.restart}
          </button>
          <Link
            href={seoHref("quiz", quiz.lang)}
            className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-4 py-2.5 text-sm transition"
          >
            {c.otherQuizzes}
          </Link>
        </div>
        <details className="text-left mt-6 group">
          <summary className="cursor-pointer text-sm text-white/50 hover:text-white/80 select-none">
            {c.seeDetail}
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
                    {c.answer}{" "}
                    <span className="text-white/80">{q.options[q.correct]}</span>
                    {!ok && my !== undefined && (
                      <span className="ml-2 text-white/40">
                        {c.youAnswered(q.options[my])}
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
      aria-label={c.questionAria(step + 1, total)}
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
          {c.score} <span className="text-pink-300 font-bold">{score}</span>
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

      <div className="space-y-2" role="radiogroup" aria-label={c.chooseAnswer}>
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
              aria-label={c.optionAria(i + 1, opt)}
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
            {pickedIsCorrect ? c.correctAnswer : c.hereIsWhy}
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
            {step + 1 === total ? c.seeMyScore : c.nextQuestion}
          </button>
        </div>
      )}
    </section>
  );
}
