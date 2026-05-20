"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { askQuestion, answerQuestion, deleteAskQuestion } from "@/app/ask-actions";
import { useT, useLocale } from "@/app/locale-context";
import { getAskPrompts } from "@/lib/ask-prompts";

export type AskItem = {
  id: string;
  text: string;
  answer: string | null;
  status: "pending" | "answered" | "skipped";
  created_at: string;
  answered_at: string | null;
};

type Props = {
  recipientId: string;
  recipientUsername: string;
  isOwner: boolean;
  answered: AskItem[];
  pending: AskItem[];
};

const MAX_LEN = 280;

export default function AskSection({
  recipientId,
  recipientUsername,
  isOwner,
  answered,
  pending,
}: Props) {
  const t = useT();
  const locale = useLocale();
  const [pendingState, setPendingState] = useState<AskItem[]>(pending);
  const [answeredState, setAnsweredState] = useState<AskItem[]>(answered);

  const prompts = useMemo(() => getAskPrompts(locale, 8), [locale]);

  const onAsked = () => {
    // The composer success state handles itself; we just want a fresh prompt set.
  };

  const onAnswered = (id: string, answer: string) => {
    const item = pendingState.find((q) => q.id === id);
    if (!item) return;
    setPendingState((s) => s.filter((q) => q.id !== id));
    setAnsweredState((s) => [
      { ...item, answer, status: "answered", answered_at: new Date().toISOString() },
      ...s,
    ]);
  };

  const onDeleted = (id: string) => {
    setPendingState((s) => s.filter((q) => q.id !== id));
  };

  return (
    <div className="space-y-5">
      {!isOwner && (
        <AskComposer
          recipientId={recipientId}
          recipientUsername={recipientUsername}
          prompts={prompts}
          onAsked={onAsked}
        />
      )}

      {isOwner && pendingState.length > 0 && (
        <section className="space-y-2.5">
          <h3 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2">
            {t("ask.pending.title")}
            <span className="px-1.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold">
              {pendingState.length}
            </span>
          </h3>
          <ul className="space-y-2.5">
            {pendingState.map((q) => (
              <PendingCard
                key={q.id}
                q={q}
                onAnswered={onAnswered}
                onDeleted={onDeleted}
              />
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-2.5">
        {!isOwner && (
          <h3 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {t("ask.answered.title")}
            {answeredState.length > 0 && (
              <span className="ml-2 text-white/30 font-normal text-xs">{answeredState.length}</span>
            )}
          </h3>
        )}
        {answeredState.length === 0 ? (
          <div className="glass rounded-2xl p-5 text-center text-white/50 text-sm">
            {t("ask.answered.empty")}
          </div>
        ) : (
          <ul className="space-y-2.5">
            {answeredState.map((q) => (
              <AnsweredCard key={q.id} q={q} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function AskComposer({
  recipientId,
  recipientUsername,
  prompts,
  onAsked,
}: {
  recipientId: string;
  recipientUsername: string;
  prompts: string[];
  onAsked: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const [text, setText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!success) return;
    const id = setTimeout(() => setSuccess(false), 2600);
    return () => clearTimeout(id);
  }, [success]);

  const send = () => {
    const trimmed = text.trim();
    if (trimmed.length < 2 || trimmed.length > MAX_LEN) return;
    setError(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.set("recipient_id", recipientId);
      fd.set("text", trimmed);
      fd.set("locale", locale);
      fd.set("is_anonymous", isAnonymous ? "1" : "0");
      const res = await askQuestion(fd);
      if (res.ok) {
        setText("");
        setSuccess(true);
        onAsked();
      } else {
        const key = `ask.compose.error.${res.error}`;
        const fallback = t("ask.compose.error.generic");
        const msg = t(key);
        setError(msg === key ? fallback : msg);
      }
    });
  };

  const remaining = MAX_LEN - text.length;
  const len = text.trim().length;
  const canSend = !pending && len >= 2 && len <= MAX_LEN;

  return (
    <div className="glass rounded-2xl p-4 sm:p-5 space-y-3 relative overflow-hidden border-pink-400/20">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base sm:text-lg font-bold tracking-tight">
          {t("ask.compose.title")}
        </h3>
        <label className="flex items-center gap-1.5 cursor-pointer select-none shrink-0 group">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="sr-only"
            aria-label={t("ask.anonymous")}
          />
          <span
            className={`text-[10px] uppercase tracking-widest font-semibold transition ${
              isAnonymous
                ? "text-pink-300/90"
                : "text-white/40 group-hover:text-white/60"
            }`}
          >
            {isAnonymous ? "🤫" : "👤"} {t("ask.anonymous")}
          </span>
          <span
            className={`relative w-7 h-4 rounded-full transition ${
              isAnonymous ? "bg-pink-500/60" : "bg-white/15"
            }`}
            aria-hidden="true"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${
                isAnonymous ? "translate-x-3" : "translate-x-0"
              }`}
            />
          </span>
        </label>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, MAX_LEN))}
        placeholder={t("ask.compose.placeholder")}
        rows={3}
        style={{ ["fieldSizing" as string]: "content" } as React.CSSProperties}
        className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-pink-400/60 focus:outline-none px-3 py-2.5 text-sm placeholder:text-white/30 resize-y min-h-[88px]"
      />
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs tabular-nums font-medium ${remaining < 30 ? "text-orange-300" : "text-white/40"}`}>
          {text.length}/{MAX_LEN}
        </span>
        <button
          onClick={send}
          disabled={!canSend}
          className="rounded-xl px-4 py-2 min-h-[40px] text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 active:scale-95 transition shadow-lg shadow-pink-500/30 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {pending ? t("ask.compose.sending") : t("ask.compose.send")}
        </button>
      </div>

      {prompts.length > 0 && (
        <div className="pt-1 space-y-1.5">
          <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
            {t("ask.compose.suggestions")}
          </div>
          <div className="-mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-1.5 w-max">
              {prompts.slice(0, 6).map((p, i) => (
                <button
                  key={i}
                  onClick={() => setText(p.slice(0, MAX_LEN))}
                  className="snap-start shrink-0 rounded-full px-3.5 min-h-[44px] text-xs bg-white/[0.06] border border-white/10 hover:border-pink-400/40 hover:bg-pink-500/10 transition text-left max-w-[260px] truncate"
                  title={p}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center text-center px-4 fade-up">
          <div className="space-y-1">
            <div className="text-3xl">✨</div>
            <div className="font-bold">{t("ask.compose.success")}</div>
            <div className="text-xs text-white/50">@{recipientUsername}</div>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-xl bg-orange-500/15 border border-orange-400/40 px-3 py-2 text-xs text-orange-200">
          {error}
        </div>
      )}
    </div>
  );
}

function PendingCard({
  q,
  onAnswered,
  onDeleted,
}: {
  q: AskItem;
  onAnswered: (id: string, answer: string) => void;
  onDeleted: (id: string) => void;
}) {
  const t = useT();
  const [draft, setDraft] = useState("");
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);

  const publish = () => {
    const a = draft.trim();
    if (!a) return;
    setErr(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", q.id);
      fd.set("answer", a);
      const res = await answerQuestion(fd);
      if (res.ok) {
        onAnswered(q.id, a);
      } else {
        setErr(t("ask.compose.error.generic"));
      }
    });
  };

  const del = () => {
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", q.id);
      const res = await deleteAskQuestion(fd);
      if (res.ok) onDeleted(q.id);
    });
  };

  return (
    <li className="glass rounded-2xl p-3.5 sm:p-4 space-y-2.5 border border-pink-400/30 bg-pink-500/[0.04]">
      <div className="flex items-start gap-2">
        <span className="text-base shrink-0 leading-snug">👤</span>
        <p className="text-sm sm:text-base font-semibold leading-snug break-words min-w-0">{q.text}</p>
      </div>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value.slice(0, 500))}
        placeholder={t("ask.answer.placeholder")}
        rows={2}
        style={{ ["fieldSizing" as string]: "content" } as React.CSSProperties}
        className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-pink-400/60 focus:outline-none px-3 py-2 text-sm placeholder:text-white/30 resize-y min-h-[64px]"
      />
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={del}
          className="text-xs text-white/40 hover:text-orange-300 transition min-h-[40px] px-2"
          disabled={pending}
        >
          {t("ask.answer.delete")}
        </button>
        <button
          onClick={publish}
          disabled={pending || draft.trim().length < 1}
          className="rounded-xl px-4 py-1.5 min-h-[40px] text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 active:scale-95 transition disabled:opacity-40"
        >
          {pending ? t("ask.answer.sending") : t("ask.answer.send")}
        </button>
      </div>
      {err && <div className="text-xs text-orange-300">{err}</div>}
    </li>
  );
}

function AnsweredCard({ q }: { q: AskItem }) {
  const t = useT();
  return (
    <li className="glass rounded-2xl p-3.5 sm:p-4 space-y-2">
      <div className="flex items-start gap-2 text-white/70">
        <span className="text-base shrink-0 leading-snug">👤</span>
        <p className="text-sm font-medium leading-snug break-words min-w-0">{q.text}</p>
      </div>
      <div className="flex items-start gap-2 pl-1">
        <span className="text-base shrink-0 leading-snug">💬</span>
        <p className="text-sm sm:text-base font-semibold leading-snug whitespace-pre-wrap break-words min-w-0">
          {q.answer}
        </p>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/30 pl-7">
        {t("ask.anonymous")}
      </div>
    </li>
  );
}
