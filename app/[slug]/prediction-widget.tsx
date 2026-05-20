"use client";

import { useState, useTransition } from "react";
import { placePrediction } from "../actions";
import { emojisFor } from "@/lib/emojis";

export type ExistingPrediction = {
  optionIndex: number;
  stake: number;
  status: string; // pending | won | lost | refunded
  payout: number;
};

type Strings = {
  heading: string;
  sub: string;
  pick: string;
  stake: string;
  bet: string;
  need: string;
  your: string;
  pending: string;
  won: string;
  lost: string;
  refunded: string;
  errAlready: string;
  errLate: string;
  errInsufficient: string;
  errGeneric: string;
};

const STRINGS: Record<string, Strings> = {
  fr: {
    heading: "🔮 Pronostique le gagnant", sub: "Mise des coins sur l'option qui va l'emporter. Résultat sous 24 h.",
    pick: "Choisis une option", stake: "Mise", bet: "Parier",
    need: "Il te faut au moins 10 🪙 — vote pour en gagner.",
    your: "Ton prono", pending: "En attente du résultat…", won: "Gagné", lost: "Perdu", refunded: "Remboursé",
    errAlready: "Tu as déjà parié sur ce sondage.", errLate: "Trop tard pour parier.",
    errInsufficient: "Pas assez de coins.", errGeneric: "Erreur, réessaie.",
  },
  en: {
    heading: "🔮 Predict the winner", sub: "Stake coins on the option that'll win. Result within 24h.",
    pick: "Pick an option", stake: "Stake", bet: "Bet",
    need: "You need at least 10 🪙 — vote to earn some.",
    your: "Your prediction", pending: "Waiting for the result…", won: "Won", lost: "Lost", refunded: "Refunded",
    errAlready: "You already predicted this poll.", errLate: "Too late to predict.",
    errInsufficient: "Not enough coins.", errGeneric: "Error, try again.",
  },
  es: {
    heading: "🔮 Predice el ganador", sub: "Apuesta coins a la opción que va a ganar. Resultado en 24 h.",
    pick: "Elige una opción", stake: "Apuesta", bet: "Apostar",
    need: "Necesitas al menos 10 🪙 — vota para ganar.",
    your: "Tu pronóstico", pending: "Esperando el resultado…", won: "Ganado", lost: "Perdido", refunded: "Reembolsado",
    errAlready: "Ya hiciste un pronóstico en esta encuesta.", errLate: "Demasiado tarde para apostar.",
    errInsufficient: "No tienes suficientes coins.", errGeneric: "Error, inténtalo de nuevo.",
  },
  it: {
    heading: "🔮 Pronostica il vincitore", sub: "Punta coins sull'opzione che vincerà. Risultato entro 24 h.",
    pick: "Scegli un'opzione", stake: "Puntata", bet: "Punta",
    need: "Ti servono almeno 10 🪙 — vota per guadagnarne.",
    your: "Il tuo pronostico", pending: "In attesa del risultato…", won: "Vinto", lost: "Perso", refunded: "Rimborsato",
    errAlready: "Hai già pronosticato questo sondaggio.", errLate: "Troppo tardi per puntare.",
    errInsufficient: "Coins insufficienti.", errGeneric: "Errore, riprova.",
  },
  pt: {
    heading: "🔮 Preveja o vencedor", sub: "Aposte coins na opção que vai vencer. Resultado em 24 h.",
    pick: "Escolhe uma opção", stake: "Aposta", bet: "Apostar",
    need: "Você precisa de pelo menos 10 🪙 — vote para ganhar.",
    your: "Seu palpite", pending: "Aguardando o resultado…", won: "Ganhou", lost: "Perdeu", refunded: "Reembolsado",
    errAlready: "Você já palpitou nesta enquete.", errLate: "Tarde demais para apostar.",
    errInsufficient: "Coins insuficientes.", errGeneric: "Erro, tente de novo.",
  },
  de: {
    heading: "🔮 Tippe den Gewinner", sub: "Setze Coins auf die Option, die gewinnt. Ergebnis in 24 Std.",
    pick: "Wähle eine Option", stake: "Einsatz", bet: "Tippen",
    need: "Du brauchst mindestens 10 🪙 — stimme ab, um welche zu verdienen.",
    your: "Dein Tipp", pending: "Warte auf das Ergebnis…", won: "Gewonnen", lost: "Verloren", refunded: "Erstattet",
    errAlready: "Du hast diese Umfrage schon getippt.", errLate: "Zu spät zum Tippen.",
    errInsufficient: "Nicht genug Coins.", errGeneric: "Fehler, versuch es erneut.",
  },
  ja: {
    heading: "🔮 勝者を予想", sub: "勝つと思う選択肢にコインを賭けよう。結果は24時間以内。",
    pick: "選択肢を選ぶ", stake: "賭け金", bet: "賭ける",
    need: "最低10🪙が必要 — 投票して稼ごう。",
    your: "あなたの予想", pending: "結果を待っています…", won: "的中", lost: "はずれ", refunded: "返金",
    errAlready: "この投票にはすでに予想済みです。", errLate: "予想の締め切りを過ぎました。",
    errInsufficient: "コインが足りません。", errGeneric: "エラー、もう一度お試しください。",
  },
  zh: {
    heading: "🔮 预测赢家", sub: "把金币押在你认为会赢的选项上。24 小时内出结果。",
    pick: "选择一个选项", stake: "押注", bet: "下注",
    need: "至少需要 10 🪙 — 投票来赚取。",
    your: "你的预测", pending: "等待结果…", won: "猜中", lost: "未中", refunded: "已退还",
    errAlready: "你已经预测过这个投票了。", errLate: "已过预测时间。",
    errInsufficient: "金币不足。", errGeneric: "出错了，请重试。",
  },
};

const STAKE_CHIPS = [10, 25, 50, 100];

export default function PredictionWidget({
  pollId,
  slug,
  options,
  predictOpen,
  coinBalance,
  existing,
  lang,
}: {
  pollId: string;
  slug: string;
  options: string[];
  predictOpen: boolean;
  coinBalance: number;
  existing: ExistingPrediction | null;
  lang: string;
}) {
  const s = STRINGS[lang] ?? STRINGS.en;
  const EMOJIS = emojisFor(slug, options.length);
  const [done, setDone] = useState<ExistingPrediction | null>(existing);
  const [pick, setPick] = useState<number | null>(null);
  const [stake, setStake] = useState(10);
  const [err, setErr] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  // Already predicted → show the result card (any state).
  if (done) {
    const opt = options[done.optionIndex] ?? "?";
    const emoji = EMOJIS[done.optionIndex] ?? "🔮";
    const tone =
      done.status === "won"
        ? "from-emerald-500/20 to-cyan-500/20 border-emerald-400/40"
        : done.status === "lost"
        ? "from-white/5 to-white/5 border-white/15"
        : done.status === "refunded"
        ? "from-amber-500/15 to-amber-500/15 border-amber-400/30"
        : "from-pink-500/15 to-purple-600/15 border-pink-400/30";
    return (
      <section className={`rounded-2xl border bg-gradient-to-r ${tone} px-4 py-3.5`}>
        <div className="text-xs uppercase tracking-widest text-white/45 font-semibold">
          {s.your}
        </div>
        <div className="mt-1 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl shrink-0" aria-hidden>{emoji}</span>
            <span className="font-semibold text-white truncate">{opt}</span>
            <span className="text-white/50 text-sm shrink-0">· {done.stake} 🪙</span>
          </div>
          <div className="shrink-0 text-sm font-bold">
            {done.status === "pending" && <span className="text-white/55">{s.pending}</span>}
            {done.status === "won" && <span className="text-emerald-300">✅ {s.won} +{done.payout} 🪙</span>}
            {done.status === "lost" && <span className="text-white/45">❌ {s.lost}</span>}
            {done.status === "refunded" && <span className="text-amber-300">↩️ {s.refunded} {done.payout} 🪙</span>}
          </div>
        </div>
      </section>
    );
  }

  if (!predictOpen) return null;

  // Not enough coins to play.
  if (coinBalance < 10) {
    return (
      <section className="glass rounded-2xl px-4 py-3.5">
        <div className="font-semibold text-white">{s.heading}</div>
        <p className="text-sm text-white/55 mt-1">{s.need}</p>
      </section>
    );
  }

  const chips = STAKE_CHIPS.filter((c) => c <= coinBalance);
  const errMsg =
    err === "already" ? s.errAlready
    : err === "too_late" ? s.errLate
    : err === "insufficient" ? s.errInsufficient
    : err ? s.errGeneric
    : null;

  const submit = () => {
    if (pick === null || pending) return;
    setErr(null);
    startTransition(async () => {
      const res = await placePrediction(pollId, pick, stake);
      if (res.ok) {
        setDone({ optionIndex: pick, stake, status: "pending", payout: 0 });
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("moomz:coins", { detail: { balance: res.balance, gained: 0 } }),
          );
        }
      } else {
        setErr(res.error);
      }
    });
  };

  return (
    <section className="glass rounded-2xl px-4 py-4 space-y-3">
      <div>
        <div className="font-semibold text-white">{s.heading}</div>
        <p className="text-sm text-white/55">{s.sub}</p>
      </div>

      <div className="space-y-1.5" role="radiogroup" aria-label={s.pick}>
        {options.map((opt, i) => (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={pick === i}
            onClick={() => setPick(i)}
            disabled={pending}
            className={`w-full text-left rounded-xl border px-3 py-2.5 flex items-center gap-2.5 transition ${
              pick === i
                ? "border-pink-400/60 bg-pink-500/15"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <span className="text-xl shrink-0" aria-hidden>{EMOJIS[i]}</span>
            <span className="text-sm font-medium text-white truncate">{opt}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">
          {s.stake}
        </span>
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setStake(c)}
            disabled={pending}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              stake === c
                ? "bg-amber-400/90 text-black"
                : "bg-white/10 text-white/70 hover:bg-white/15"
            }`}
          >
            {c} 🪙
          </button>
        ))}
      </div>

      {errMsg && <p className="text-sm text-red-300">{errMsg}</p>}

      <button
        type="button"
        onClick={submit}
        disabled={pick === null || pending || stake > coinBalance}
        className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-display text-lg text-white disabled:opacity-40 hover:scale-[1.01] active:scale-[0.99] transition shadow-lg shadow-pink-500/20"
      >
        {pending ? "…" : `${s.bet} ${stake} 🪙`}
      </button>
    </section>
  );
}
