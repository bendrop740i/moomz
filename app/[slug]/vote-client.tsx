"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { castVote, refreshCounts } from "../actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { emojisFor } from "@/lib/emojis";
import AnimatedNumber from "../animated-number";

type Props = {
  pollId: string;
  slug: string;
  question: string;
  options: string[];
  counts: number[];
  total: number;
  alreadyVoted: number | null;
};

export default function VoteClient({
  pollId,
  slug,
  question,
  options,
  counts: initialCounts,
  total: initialTotal,
  alreadyVoted,
}: Props) {
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[]>(initialCounts);
  const [total, setTotal] = useState<number>(initialTotal);
  const [copied, setCopied] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const myVoterIdRef = useRef<string | null>(null);

  const showResults = voted !== null;
  const EMOJIS = emojisFor(slug, options.length);

  useEffect(() => {
    const match = typeof document !== "undefined"
      ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
      : null;
    myVoterIdRef.current = match ? decodeURIComponent(match[1]) : null;
  }, []);

  useEffect(() => {
    if (!showResults) return;
    const supabase = getBrowserSupabase();
    const channel = supabase
      .channel(`poll-${pollId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "votes",
          filter: `poll_id=eq.${pollId}`,
        },
        (payload) => {
          const row = payload.new as { voter_id?: string; option_index?: number };
          if (row.voter_id && row.voter_id === myVoterIdRef.current) return;
          if (typeof row.option_index !== "number") return;
          setCounts((c) => {
            const next = [...c];
            next[row.option_index!] = (next[row.option_index!] ?? 0) + 1;
            return next;
          });
          setTotal((t) => t + 1);
          setAnimKey((k) => k + 1);
        },
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") setIsLive(true);
        if (status === "CLOSED" || status === "CHANNEL_ERROR") setIsLive(false);
      });
    return () => {
      supabase.removeChannel(channel);
      setIsLive(false);
    };
  }, [showResults, pollId]);

  const vote = (i: number) => {
    if (voted !== null || pending) return;
    setVoted(i);
    const optimistic = [...counts];
    optimistic[i] = (optimistic[i] ?? 0) + 1;
    setCounts(optimistic);
    setTotal(total + 1);
    setAnimKey((k) => k + 1);

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        setCounts(res.counts);
        setTotal(res.total);
      } catch (e) {
        alert(e instanceof Error ? e.message : "Erreur");
        setVoted(null);
        setCounts(initialCounts);
        setTotal(initialTotal);
      }
    });
  };

  const refresh = () => {
    startTransition(async () => {
      try {
        const res = await refreshCounts(pollId, options.length);
        setCounts(res.counts);
        setTotal(res.total);
        setAnimKey((k) => k + 1);
      } catch {}
    });
  };

  const url = typeof window !== "undefined" ? window.location.href : `https://moomz.com/${slug}`;
  const shareText = `Vote 👉 ${question}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${url}`)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
  const telegramHref = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "moomz", text: shareText, url });
      } catch {}
    } else {
      copyLink();
    }
  };

  return (
    <div className="space-y-8 fade-up">
      <header className="text-center">
        <a
          href="/"
          className="inline-block text-3xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent"
        >
          moomz
        </a>
      </header>

      <div className="glass rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl shadow-pink-500/10">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">{question}</h1>

        <div className="space-y-2.5">
          {options.map((opt, i) => {
            const c = counts[i] ?? 0;
            const pct = total > 0 ? Math.round((c / total) * 100) : 0;
            const isMine = voted === i;

            if (!showResults) {
              return (
                <button
                  key={i}
                  onClick={() => vote(i)}
                  disabled={pending}
                  className="w-full text-left rounded-2xl border-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.01] active:scale-[0.99] transition px-4 py-4 flex items-center gap-3 disabled:opacity-50"
                >
                  <span className="text-2xl">{EMOJIS[i]}</span>
                  <span className="font-medium text-lg">{opt}</span>
                </button>
              );
            }

            return (
              <div
                key={`${i}-${animKey}`}
                className={`relative overflow-hidden rounded-2xl border-2 ${
                  isMine ? "border-pink-400/60" : "border-white/10"
                } bg-white/5 px-4 py-4 ${isMine ? "pop" : ""}`}
              >
                <div
                  className={`absolute inset-y-0 left-0 ${
                    isMine
                      ? "bg-gradient-to-r from-pink-500/40 to-purple-500/40"
                      : "bg-white/8"
                  } bar-grow`}
                  style={{ width: `${pct}%` }}
                />
                <div className="relative flex justify-between items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0">{EMOJIS[i]}</span>
                    <span className="font-semibold text-lg truncate">
                      {opt}
                      {isMine && (
                        <span className="ml-2 text-pink-300 text-xs uppercase tracking-wide">
                          · toi
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="tabular-nums text-sm font-semibold text-white/80 shrink-0">
                    <AnimatedNumber value={pct} />% <span className="text-white/40 font-normal">· <AnimatedNumber value={c} /></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {showResults && (
          <div className="flex items-center justify-between text-sm text-white/50">
            <span>
              <AnimatedNumber value={total} /> vote{total > 1 ? "s" : ""} au total
            </span>
            <span className="flex items-center gap-2">
              {isLive ? (
                <span className="flex items-center gap-1.5 text-emerald-300/90">
                  <span className="relative inline-flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  live
                </span>
              ) : (
                <button
                  onClick={refresh}
                  disabled={pending}
                  className="hover:text-white transition disabled:opacity-50"
                >
                  ⟳ rafraîchir
                </button>
              )}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="text-center text-xs uppercase tracking-widest text-white/40">
          Partage en 1 clic
        </div>
        <div className="grid grid-cols-4 gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur WhatsApp"
            className="rounded-2xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-4 flex flex-col items-center justify-center gap-1 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
            </svg>
            <span className="text-[11px]">WhatsApp</span>
          </a>
          <a
            href={xHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur X"
            className="rounded-2xl bg-black hover:bg-neutral-900 text-white font-semibold py-4 flex flex-col items-center justify-center gap-1 border border-white/10 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-[11px]">X</span>
          </a>
          <a
            href={telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur Telegram"
            className="rounded-2xl bg-[#229ED9] hover:bg-[#1d8cc4] text-white font-semibold py-4 flex flex-col items-center justify-center gap-1 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-sky-500/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="text-[11px]">Telegram</span>
          </a>
          <button
            onClick={copyLink}
            aria-label="Copier le lien"
            className={`rounded-2xl ${
              copied
                ? "bg-emerald-500/90 text-white"
                : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
            } font-semibold py-4 flex flex-col items-center justify-center gap-1 transition hover:scale-[1.02] active:scale-[0.98]`}
          >
            {copied ? (
              <>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[11px]">Copié</span>
              </>
            ) : (
              <>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span className="text-[11px]">Copier</span>
              </>
            )}
          </button>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={nativeShare}
            className="flex-1 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium py-3 text-sm text-white/70 hover:text-white transition sm:hidden"
          >
            📤 Autre app…
          </button>
          <a
            href="/"
            className="flex-1 rounded-2xl border-2 border-white/15 bg-white/5 hover:bg-white/10 font-semibold py-3 text-center transition"
          >
            + nouveau sondage
          </a>
        </div>
      </div>
    </div>
  );
}
