"use client";

import { useState, useTransition } from "react";
import { boostPoll } from "../actions";

const COST = 150;

type Strings = {
  cta: string;
  sub: string;
  boost: string;
  boosted: string;
  insufficient: string;
  err: string;
};

const STRINGS: Record<string, Strings> = {
  fr: { cta: "⚡ Booster ce sondage", sub: "Pousse-le en tête de Trending & Discover pendant 24 h.", boost: "Booster", boosted: "⚡ Boosté — mis en avant 24 h", insufficient: "Pas assez de coins.", err: "Erreur, réessaie." },
  en: { cta: "⚡ Boost this poll", sub: "Push it to the top of Trending & Discover for 24h.", boost: "Boost", boosted: "⚡ Boosted — featured for 24h", insufficient: "Not enough coins.", err: "Error, try again." },
  es: { cta: "⚡ Impulsa esta encuesta", sub: "Llévala a lo más alto de Tendencias por 24 h.", boost: "Impulsar", boosted: "⚡ Impulsada — destacada 24 h", insufficient: "No tienes suficientes coins.", err: "Error, inténtalo de nuevo." },
  it: { cta: "⚡ Potenzia questo sondaggio", sub: "Spingilo in cima ai Trend per 24 h.", boost: "Potenzia", boosted: "⚡ Potenziato — in evidenza 24 h", insufficient: "Coins insufficienti.", err: "Errore, riprova." },
  pt: { cta: "⚡ Impulsione esta enquete", sub: "Leve-a ao topo dos Trends por 24 h.", boost: "Impulsionar", boosted: "⚡ Impulsionada — em destaque 24 h", insufficient: "Coins insuficientes.", err: "Erro, tente de novo." },
  de: { cta: "⚡ Diese Umfrage boosten", sub: "Bring sie für 24 Std. an die Spitze der Trends.", boost: "Boosten", boosted: "⚡ Geboostet — 24 Std. hervorgehoben", insufficient: "Nicht genug Coins.", err: "Fehler, versuch es erneut." },
  ja: { cta: "⚡ この投票をブースト", sub: "24時間トレンドの上位に押し上げよう。", boost: "ブースト", boosted: "⚡ ブースト中 — 24時間注目", insufficient: "コインが足りません。", err: "エラー、もう一度お試しください。" },
  zh: { cta: "⚡ 推广这个投票", sub: "让它在热门榜和发现页置顶 24 小时。", boost: "推广", boosted: "⚡ 已推广 — 置顶 24 小时", insufficient: "金币不足。", err: "出错了，请重试。" },
};

export default function BoostButton({
  pollId,
  boostUntil,
  lang,
}: {
  pollId: string;
  boostUntil: string | null;
  lang: string;
}) {
  const s = STRINGS[lang] ?? STRINGS.en;
  const [until, setUntil] = useState<string | null>(boostUntil);
  const [err, setErr] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const boosted = until !== null && new Date(until).getTime() > Date.now();

  if (boosted) {
    return (
      <section className="rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 to-pink-500/15 px-4 py-3">
        <div className="font-semibold text-amber-200">{s.boosted}</div>
      </section>
    );
  }

  const submit = () => {
    if (pending) return;
    setErr(null);
    startTransition(async () => {
      const res = await boostPoll(pollId);
      if (res.ok) {
        setUntil(res.boostUntil);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("moomz:coins", { detail: { balance: res.balance, gained: 0 } }),
          );
        }
      } else {
        setErr(res.error === "insufficient" ? s.insufficient : s.err);
      }
    });
  };

  return (
    <section className="glass rounded-2xl px-4 py-4 space-y-2.5">
      <div>
        <div className="font-semibold text-white">{s.cta}</div>
        <p className="text-sm text-white/55">{s.sub}</p>
      </div>
      {err && <p className="text-sm text-red-300">{err}</p>}
      <button
        type="button"
        onClick={submit}
        disabled={pending}
        className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-pink-500 py-3 font-display text-lg text-black disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition shadow-lg shadow-amber-500/20"
      >
        {pending ? "…" : `${s.boost} · ${COST} 🪙`}
      </button>
    </section>
  );
}
