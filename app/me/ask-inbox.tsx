"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import type { AskItem } from "../[slug]/ask-section";
import { answerQuestion, deleteAskQuestion } from "../ask-actions";
import { useT } from "../locale-context";

export default function AskInbox({
  username,
  pending,
}: {
  username: string;
  pending: AskItem[];
}) {
  const t = useT();
  const [items, setItems] = useState<AskItem[]>(pending);

  if (items.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="flex items-end justify-between gap-2">
        <h2 className="text-sm uppercase tracking-widest text-pink-300 font-semibold flex items-center gap-2">
          📬 {t("ask.pending.title")}
          <span className="px-1.5 py-0.5 rounded-full bg-pink-500 text-white text-[10px] font-bold">
            {items.length}
          </span>
        </h2>
        <Link href={`/${username}`} className="text-[11px] text-white/40 hover:text-white">
          @{username} →
        </Link>
      </div>
      <ul className="space-y-2.5">
        {items.map((q) => (
          <InboxCard
            key={q.id}
            q={q}
            onResolved={(id) => setItems((s) => s.filter((x) => x.id !== id))}
          />
        ))}
      </ul>
    </section>
  );
}

function InboxCard({
  q,
  onResolved,
}: {
  q: AskItem;
  onResolved: (id: string) => void;
}) {
  const t = useT();
  const [draft, setDraft] = useState("");
  const [pending, startTransition] = useTransition();

  const publish = () => {
    const a = draft.trim();
    if (!a) return;
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", q.id);
      fd.set("answer", a);
      const res = await answerQuestion(fd);
      if (res.ok) onResolved(q.id);
    });
  };

  const del = () => {
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", q.id);
      const res = await deleteAskQuestion(fd);
      if (res.ok) onResolved(q.id);
    });
  };

  return (
    <li className="glass rounded-2xl p-3.5 space-y-2.5 border-pink-400/20">
      <div className="flex items-start gap-2">
        <span className="text-base shrink-0">👤</span>
        <p className="text-sm sm:text-base font-semibold leading-snug">{q.text}</p>
      </div>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value.slice(0, 500))}
        placeholder={t("ask.answer.placeholder")}
        rows={2}
        className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-pink-400/60 focus:outline-none px-3 py-2 text-sm placeholder:text-white/30 resize-none"
      />
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={del}
          disabled={pending}
          className="text-xs text-white/40 hover:text-orange-300 transition"
        >
          {t("ask.answer.delete")}
        </button>
        <button
          onClick={publish}
          disabled={pending || draft.trim().length < 1}
          className="rounded-xl px-4 py-1.5 text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 active:scale-95 transition disabled:opacity-40"
        >
          {pending ? t("ask.answer.sending") : t("ask.answer.send")}
        </button>
      </div>
    </li>
  );
}
