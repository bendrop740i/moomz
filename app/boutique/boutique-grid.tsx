"use client";

import { useState, useTransition } from "react";
import { buyCosmetic } from "../actions";
import { COSMETIC_PALETTES, isUnlocked } from "@/lib/cosmetics";

type Strings = {
  owned: string;
  free: string;
  unlocked: string;
  buy: string;
  insufficient: string;
};

const STR: Record<string, Strings> = {
  fr: { owned: "✓ Possédé", free: "Gratuit", unlocked: "Débloqué", buy: "Acheter", insufficient: "Pas assez de coins" },
  en: { owned: "✓ Owned", free: "Free", unlocked: "Unlocked", buy: "Buy", insufficient: "Not enough coins" },
  es: { owned: "✓ Tuyo", free: "Gratis", unlocked: "Desbloqueado", buy: "Comprar", insufficient: "Coins insuficientes" },
  it: { owned: "✓ Tuo", free: "Gratis", unlocked: "Sbloccato", buy: "Compra", insufficient: "Coins insufficienti" },
  pt: { owned: "✓ Seu", free: "Grátis", unlocked: "Desbloqueado", buy: "Comprar", insufficient: "Coins insuficientes" },
  de: { owned: "✓ Deins", free: "Gratis", unlocked: "Frei", buy: "Kaufen", insufficient: "Nicht genug Coins" },
  ja: { owned: "✓ 所持", free: "無料", unlocked: "解除済", buy: "購入", insufficient: "コインが足りません" },
  zh: { owned: "✓ 已拥有", free: "免费", unlocked: "已解锁", buy: "购买", insufficient: "金币不足" },
};

export default function BoutiqueGrid({
  balance,
  points,
  topStreak,
  owned: initialOwned,
  lang,
}: {
  balance: number;
  points: number;
  topStreak: number;
  owned: string[];
  lang: string;
}) {
  const s = STR[lang] ?? STR.en;
  const [owned, setOwned] = useState<string[]>(initialOwned);
  const [bal, setBal] = useState(balance);
  const [busy, setBusy] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  // "auto" is the per-slug hashed default — not a shop item.
  const palettes = COSMETIC_PALETTES.filter((p) => p.id !== "auto");

  const buy = (id: string) => {
    if (pending) return;
    setBusy(id);
    setErr(null);
    startTransition(async () => {
      const res = await buyCosmetic(id);
      if (res.ok) {
        setOwned((o) => [...o, id]);
        setBal(res.balance);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("moomz:coins", { detail: { balance: res.balance, gained: 0 } }),
          );
        }
      } else {
        setErr(res.error === "insufficient" ? s.insufficient : id);
      }
      setBusy(null);
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {palettes.map((p) => {
        const isOwned = owned.includes(p.id);
        const isFree = p.price === 0;
        // Already unlocked via points/streak grind (paid palette, earned free).
        const earned = !isOwned && !isFree && isUnlocked(p, { points, topStreak });
        const canAfford = bal >= p.price;
        return (
          <div key={p.id} className="glass rounded-2xl p-3 flex flex-col gap-2">
            <div
              className="h-16 rounded-xl"
              style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2}, ${p.c3})` }}
              aria-hidden
            />
            <div className="font-semibold text-white text-sm">{p.name}</div>
            {isOwned || isFree ? (
              <div className="text-xs font-medium text-emerald-300">
                {isOwned ? s.owned : s.free}
              </div>
            ) : earned ? (
              <div className="text-xs font-medium text-cyan-300">✓ {s.unlocked}</div>
            ) : (
              <button
                type="button"
                onClick={() => buy(p.id)}
                disabled={pending || !canAfford}
                className="rounded-xl bg-gradient-to-r from-amber-400 to-pink-500 text-black font-semibold text-sm py-2 disabled:opacity-40 hover:scale-[1.02] active:scale-95 transition"
              >
                {busy === p.id && pending ? "…" : `${s.buy} · ${p.price} 🪙`}
              </button>
            )}
          </div>
        );
      })}
      {err === s.insufficient && (
        <p className="col-span-full text-sm text-red-300">{s.insufficient}</p>
      )}
    </div>
  );
}
