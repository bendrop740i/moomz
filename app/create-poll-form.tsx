"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createPoll } from "./actions";
import { useT, useLocale } from "./locale-context";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "./toast";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

const QUESTION_PLACEHOLDERS_BY_LOCALE: Record<string, string[]> = {
  fr: ["Pizza ananas, oui ou non ?", "Mac ou Windows ?", "Plage ou montagne ?", "Café ou thé ?", "Soirée ou Netflix ?", "Iphone ou Android ?", "Foot ou tennis ?"],
  en: ["Pineapple pizza, yes or no?", "Mac or Windows?", "Beach or mountains?", "Coffee or tea?", "Netflix or going out?", "iPhone or Android?", "Football or basketball?"],
  es: ["¿Pizza piña, sí o no?", "¿Mac o Windows?", "¿Playa o montaña?", "¿Café o té?", "¿Fiesta o Netflix?", "¿iPhone o Android?", "¿Fútbol o baloncesto?"],
  it: ["Pizza ananas, sì o no?", "Mac o Windows?", "Spiaggia o montagna?", "Caffè o tè?", "Serata o Netflix?", "iPhone o Android?", "Calcio o tennis?"],
  pt: ["Pizza abacaxi, sim ou não?", "Mac ou Windows?", "Praia ou montanha?", "Café ou chá?", "Sair ou Netflix?", "iPhone ou Android?", "Futebol ou basquete?"],
  de: ["Ananas auf Pizza, ja oder nein?", "Mac oder Windows?", "Strand oder Berge?", "Kaffee oder Tee?", "Feiern oder Netflix?", "iPhone oder Android?", "Fußball oder Tennis?"],
  ja: ["パイナップルピザ、あり？なし？", "MacとWindowsどっち？", "海と山どっち？", "コーヒーと紅茶どっち？", "外出とNetflixどっち？", "iPhoneとAndroidどっち？", "サッカーと野球どっち？"],
  zh: ["菠萝披萨，赞还是踩？", "Mac还是Windows？", "海滩还是山？", "咖啡还是茶？", "出去玩还是Netflix？", "iPhone还是Android？", "足球还是篮球？"],
};

const OPTION_EXAMPLES_BY_LOCALE: Record<string, [string, string][]> = {
  fr: [["oui carrément", "non jamais"], ["team A", "team B"], ["matin", "soir"], ["chaud", "pas chaud"]],
  en: [["yes definitely", "no way"], ["team A", "team B"], ["morning", "night"], ["hot", "not feeling it"]],
  es: [["sí totalmente", "jamás"], ["equipo A", "equipo B"], ["mañana", "noche"], ["a tope", "para nada"]],
  it: [["sì assolutamente", "mai"], ["team A", "team B"], ["mattina", "sera"], ["caldo", "freddo"]],
  pt: [["sim com certeza", "nunca"], ["time A", "time B"], ["manhã", "noite"], ["quente", "frio"]],
  de: [["auf jeden Fall", "niemals"], ["Team A", "Team B"], ["morgens", "abends"], ["warm", "kalt"]],
  ja: [["絶対あり", "絶対なし"], ["チームA", "チームB"], ["朝派", "夜派"], ["あり", "なし"]],
  zh: [["绝对支持", "绝不"], ["队A", "队B"], ["早上", "晚上"], ["热", "冷"]],
};

// Localized yes/no for the 1-tap option presets — kills blank-page friction.
const YESNO: Record<string, [string, string]> = {
  fr: ["Oui", "Non"],
  en: ["Yes", "No"],
  es: ["Sí", "No"],
  it: ["Sì", "No"],
  pt: ["Sim", "Não"],
  de: ["Ja", "Nein"],
  ja: ["はい", "いいえ"],
  zh: ["是", "否"],
};

// Fallback toast text when createPoll throws a non-Error (it normally throws
// localized validation Errors, so this is a rare last resort).
const GENERIC_ERR: Record<string, string> = {
  fr: "Oups, réessaie",
  en: "Oops, try again",
  es: "Ups, inténtalo de nuevo",
  it: "Ops, riprova",
  pt: "Ops, tenta de novo",
  de: "Hoppla, versuch's nochmal",
  ja: "おっと、もう一度お試しを",
  zh: "出错了，再试一次",
};

export default function CreatePollForm() {
  const t = useT();
  const locale = useLocale();
  const { toast, ToastHost } = useToast();
  const searchParams = useSearchParams();
  const prefillQ = searchParams.get("q") ?? "";
  const prefillOpts = (() => {
    const raw = searchParams.get("o");
    if (!raw) return null;
    const list = raw.split("|").map((s) => s.trim()).filter(Boolean).slice(0, 6);
    return list.length >= 2 ? list : null;
  })();
  const QUESTION_PLACEHOLDERS = QUESTION_PLACEHOLDERS_BY_LOCALE[locale] ?? QUESTION_PLACEHOLDERS_BY_LOCALE.en;
  const OPTION_EXAMPLES = OPTION_EXAMPLES_BY_LOCALE[locale] ?? OPTION_EXAMPLES_BY_LOCALE.en;
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

  const presets = useMemo<[string, string][]>(
    () => [YESNO[locale] ?? YESNO.en, ["🔥", "💀"], ["👍", "👎"], ["Team A", "Team B"]],
    [locale],
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
        trackEvent("poll_created", {
          source: prefillQ || prefillOpts ? "prefill" : "create-form",
        });
        try {
          await createPoll(fd);
        } catch (e) {
          toast(
            e instanceof Error
              ? e.message
              : GENERIC_ERR[locale] ?? GENERIC_ERR.en,
            "error",
          );
          setPending(false);
        }
      }}
      aria-labelledby={headingId}
      className="glass rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl shadow-pink-500/10"
    >
      <h2 id={headingId} className="sr-only">
        {t("form.create")}
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
          {t("form.question.label")} — 200 max
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
          {t("form.options.label")} — 2–6, 80 max
        </span>
        {options.length === 2 && !options[0] && !options[1] && (
          <div className="flex flex-wrap gap-1.5">
            {presets.map((p) => (
              <button
                type="button"
                key={p.join("|")}
                onClick={() => setOptions([p[0], p[1]])}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/65 transition hover:border-pink-400/40 hover:bg-white/10 hover:text-white active:scale-95"
              >
                {p[0]} / {p[1]}
              </button>
            ))}
          </div>
        )}
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
                  aria-label={`× ${i + 1}`}
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
              aria-label={t("form.add")}
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
            ? t("form.creating")
            : t("form.create")
        }
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 disabled:scale-100 shadow-lg shadow-pink-500/30"
      >
        {pending ? t("form.creating") : t("form.create")}
      </button>

      <ToastHost />
    </form>
  );
}
