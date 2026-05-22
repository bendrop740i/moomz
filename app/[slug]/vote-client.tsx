"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { castVote, refreshCounts } from "../actions";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { emojisFor } from "@/lib/emojis";
import { paletteFor } from "@/lib/palette";
import AnimatedNumber from "../animated-number";
import { useT, useLocale } from "../locale-context";
import { trackEvent } from "@/lib/analytics";
import { getViralCopy, pickSuggestions, suggestionHref } from "@/lib/viral-copy";
import type { Locale } from "@/lib/i18n";
import { useToast } from "../toast";

type VoteCopy = {
  homeAriaLabel: string;
  resultsAriaLabel: (total: number) => string;
  voteForAriaLabel: (opt: string, pct: number) => string;
  myVoteLabel: string;
  totalVotes: (n: number) => string;
  refreshAriaLabel: string;
  refreshLabel: string;
  voteErrGeneric: string;
  revealRebel: (pct: number) => string;
  revealMajority: (pct: number) => string;
  revealShared: (pct: number) => string;
};

const VOTE_COPY: Record<Locale, VoteCopy> = {
  fr: {
    homeAriaLabel: "moomz, retour à l'accueil",
    resultsAriaLabel: (n) => `Résultats du sondage, ${n} vote${n > 1 ? "s" : ""} au total`,
    voteForAriaLabel: (opt, pct) => `Voter pour: ${opt}, actuellement ${pct}%`,
    myVoteLabel: "· toi",
    totalVotes: (n) => `${n} vote${n > 1 ? "s" : ""} au total`,
    refreshAriaLabel: "Rafraîchir les résultats du sondage",
    refreshLabel: "⟳ rafraîchir",
    voteErrGeneric: "Erreur",
    revealRebel: (pct) => `t'es dans les ${pct}%`,
    revealMajority: (pct) => `avec la majorité · ${pct}%`,
    revealShared: (pct) => `partagé · ${pct}%`,
  },
  en: {
    homeAriaLabel: "moomz, back to home",
    resultsAriaLabel: (n) => `Poll results, ${n} vote${n > 1 ? "s" : ""} total`,
    voteForAriaLabel: (opt, pct) => `Vote for: ${opt}, currently ${pct}%`,
    myVoteLabel: "· you",
    totalVotes: (n) => `${n} vote${n > 1 ? "s" : ""} total`,
    refreshAriaLabel: "Refresh poll results",
    refreshLabel: "⟳ refresh",
    voteErrGeneric: "Error",
    revealRebel: (pct) => `you're in the ${pct}%`,
    revealMajority: (pct) => `with the majority · ${pct}%`,
    revealShared: (pct) => `split · ${pct}%`,
  },
  es: {
    homeAriaLabel: "moomz, volver al inicio",
    resultsAriaLabel: (n) => `Resultados, ${n} voto${n > 1 ? "s" : ""} en total`,
    voteForAriaLabel: (opt, pct) => `Votar por: ${opt}, actualmente ${pct}%`,
    myVoteLabel: "· tú",
    totalVotes: (n) => `${n} voto${n > 1 ? "s" : ""} en total`,
    refreshAriaLabel: "Actualizar resultados",
    refreshLabel: "⟳ actualizar",
    voteErrGeneric: "Error",
    revealRebel: (pct) => `estás en el ${pct}%`,
    revealMajority: (pct) => `con la mayoría · ${pct}%`,
    revealShared: (pct) => `empatado · ${pct}%`,
  },
  it: {
    homeAriaLabel: "moomz, torna alla home",
    resultsAriaLabel: (n) => `Risultati, ${n} voto${n > 1 ? "i" : ""} in totale`,
    voteForAriaLabel: (opt, pct) => `Vota per: ${opt}, attualmente ${pct}%`,
    myVoteLabel: "· tu",
    totalVotes: (n) => `${n} voto${n > 1 ? "i" : ""} in totale`,
    refreshAriaLabel: "Aggiorna i risultati",
    refreshLabel: "⟳ aggiorna",
    voteErrGeneric: "Errore",
    revealRebel: (pct) => `sei nel ${pct}%`,
    revealMajority: (pct) => `con la maggioranza · ${pct}%`,
    revealShared: (pct) => `diviso · ${pct}%`,
  },
  pt: {
    homeAriaLabel: "moomz, voltar ao início",
    resultsAriaLabel: (n) => `Resultados, ${n} voto${n > 1 ? "s" : ""} no total`,
    voteForAriaLabel: (opt, pct) => `Votar em: ${opt}, atualmente ${pct}%`,
    myVoteLabel: "· você",
    totalVotes: (n) => `${n} voto${n > 1 ? "s" : ""} no total`,
    refreshAriaLabel: "Atualizar resultados",
    refreshLabel: "⟳ atualizar",
    voteErrGeneric: "Erro",
    revealRebel: (pct) => `você está nos ${pct}%`,
    revealMajority: (pct) => `com a maioria · ${pct}%`,
    revealShared: (pct) => `dividido · ${pct}%`,
  },
  de: {
    homeAriaLabel: "moomz, zurück zur Startseite",
    resultsAriaLabel: (n) => `Umfrageergebnisse, ${n} Stimme${n > 1 ? "n" : ""} insgesamt`,
    voteForAriaLabel: (opt, pct) => `Abstimmen für: ${opt}, aktuell ${pct}%`,
    myVoteLabel: "· du",
    totalVotes: (n) => `${n} Stimme${n > 1 ? "n" : ""} insgesamt`,
    refreshAriaLabel: "Ergebnisse aktualisieren",
    refreshLabel: "⟳ aktualisieren",
    voteErrGeneric: "Fehler",
    revealRebel: (pct) => `du bist in den ${pct}%`,
    revealMajority: (pct) => `mit der Mehrheit · ${pct}%`,
    revealShared: (pct) => `geteilt · ${pct}%`,
  },
  ja: {
    homeAriaLabel: "moomz、ホームに戻る",
    resultsAriaLabel: (n) => `投票結果、合計 ${n} 票`,
    voteForAriaLabel: (opt, pct) => `投票する: ${opt}、現在 ${pct}%`,
    myVoteLabel: "· あなた",
    totalVotes: (n) => `合計 ${n} 票`,
    refreshAriaLabel: "結果を更新",
    refreshLabel: "⟳ 更新",
    voteErrGeneric: "エラー",
    revealRebel: (pct) => `あなたは ${pct}% の少数派`,
    revealMajority: (pct) => `多数派と同じ · ${pct}%`,
    revealShared: (pct) => `拮抗中 · ${pct}%`,
  },
  zh: {
    homeAriaLabel: "moomz，返回首页",
    resultsAriaLabel: (n) => `投票结果，共 ${n} 票`,
    voteForAriaLabel: (opt, pct) => `投票给：${opt}，当前 ${pct}%`,
    myVoteLabel: "· 你",
    totalVotes: (n) => `共 ${n} 票`,
    refreshAriaLabel: "刷新结果",
    refreshLabel: "⟳ 刷新",
    voteErrGeneric: "出错了",
    revealRebel: (pct) => `你在 ${pct}% 少数派`,
    revealMajority: (pct) => `与多数人一致 · ${pct}%`,
    revealShared: (pct) => `势均力敌 · ${pct}%`,
  },
};

// Same vote-flow stylesheet as PollCard. Inject once into <head>; the dedupe
// guard means we don't re-add it if PollCard already mounted it elsewhere.
const VOTE_FLOW_STYLE_ID = "moomz-vote-flow-style";
function ensureVoteFlowStyle() {
  if (typeof document === "undefined") return;
  if (document.getElementById(VOTE_FLOW_STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = VOTE_FLOW_STYLE_ID;
  el.textContent = `
@keyframes moomz-shimmer-sweep {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.moomz-shimmer {
  background-image: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0) 65%
  );
  background-size: 200% 100%;
  animation: moomz-shimmer-sweep 1.4s ease-in-out infinite;
  will-change: background-position;
}
.moomz-bar {
  transition: width 420ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: width;
}
@keyframes moomz-emoji-pulse {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.35); }
  60%  { transform: scale(0.92); }
  100% { transform: scale(1); }
}
.moomz-emoji-pulse {
  display: inline-block;
  animation: moomz-emoji-pulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}
@media (prefers-reduced-motion: reduce) {
  .moomz-shimmer { animation: none; }
  .moomz-bar { transition: none; }
  .moomz-emoji-pulse { animation: none; }
}
`;
  document.head.appendChild(el);
}

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
  const t = useT();
  const { toast, ToastHost } = useToast();
  const [pending, startTransition] = useTransition();
  const [voted, setVoted] = useState<number | null>(alreadyVoted);
  const [counts, setCounts] = useState<number[]>(initialCounts);
  const [total, setTotal] = useState<number>(initialTotal);
  const [copied, setCopied] = useState(false);
  const [reveal, setReveal] = useState<{ isMajority: boolean; isRebel: boolean; userPct: number } | null>(null);
  const [isLive, setIsLive] = useState(false);
  // Toggled to true one tick after the user votes so the bars tween from 0 → target
  // width instead of snapping to 100% on the chosen option during the optimistic
  // window. Also armed on mount if the user landed already-voted.
  const [barsArmed, setBarsArmed] = useState(false);
  // Triggers a CSS pulse on the chosen option's emoji on click.
  const [emojiPulse, setEmojiPulse] = useState<{ idx: number; k: number } | null>(null);
  const myVoterIdRef = useRef<string | null>(null);
  // Sticky condensed poll bar — shown once the main card scrolls above the fold.
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const showResults = voted !== null;
  const EMOJIS = emojisFor(slug, options.length);
  const pal = paletteFor(slug);
  const locale = useLocale();
  const vc = getViralCopy(locale);
  const vc2 = VOTE_COPY[locale as Locale] ?? VOTE_COPY.en;
  const suggestions = useMemo(() => pickSuggestions(locale, 3), [locale]);

  useEffect(() => {
    ensureVoteFlowStyle();
  }, []);

  // Reveal the condensed sticky bar when the main poll card is scrolled past
  // the top of the viewport — keeps the question + result anchored while the
  // reader scrolls through explainers and related polls below.
  useEffect(() => {
    const card = cardRef.current;
    if (!card || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    io.observe(card);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const match = typeof document !== "undefined"
      ? document.cookie.match(/(?:^|;\s*)moomz_voter=([^;]+)/)
      : null;
    myVoterIdRef.current = match ? decodeURIComponent(match[1]) : null;
  }, []);

  // Arm the bars after voting (next paint), so width tweens from 0 → target.
  useEffect(() => {
    if (showResults && !barsArmed) {
      const id = requestAnimationFrame(() => setBarsArmed(true));
      return () => cancelAnimationFrame(id);
    }
  }, [showResults, barsArmed]);

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
    setEmojiPulse({ idx: i, k: Date.now() });
    const optimistic = [...counts];
    optimistic[i] = (optimistic[i] ?? 0) + 1;
    setCounts(optimistic);
    setTotal(total + 1);
    // Force a 0 → target tween on the result bars: paint once at width 0,
    // then arm on the next frame so CSS transitions interpolate to pct.
    setBarsArmed(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarsArmed(true));
    });

    startTransition(async () => {
      try {
        const res = await castVote(pollId, slug, i, options.length);
        trackEvent("vote", { slug, source: "poll-page" });
        setCounts(res.counts);
        setTotal(res.total);
        setReveal({ isMajority: res.reveal.isMajority, isRebel: res.reveal.isRebel, userPct: res.reveal.userPct });
        if (typeof window !== "undefined") {
          if (res.achievements.length > 0) {
            window.dispatchEvent(
              new CustomEvent("moomz:achievements", { detail: { ids: res.achievements } }),
            );
          }
          window.dispatchEvent(
            new CustomEvent("moomz:vote", {
              detail: {
                gained: res.points.gained,
                total: res.points.total,
                streak: res.points.current,
                multiplier: res.points.multiplier,
              },
            }),
          );
          window.dispatchEvent(
            new CustomEvent("moomz:coins", {
              detail: { balance: res.coins.balance, gained: res.coins.gained },
            }),
          );
        }
      } catch (e) {
        toast(e instanceof Error ? e.message : vc2.voteErrGeneric, "error");
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
      {/* Condensed sticky poll bar — anchors the question + result on scroll */}
      <div
        aria-hidden={!showStickyBar}
        className={`fixed top-0 inset-x-0 z-40 transition-transform duration-300 ease-out ${
          showStickyBar ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <div className="backdrop-blur-xl bg-[#0b0613]/90 border-b border-white/10 shadow-lg shadow-black/40">
          <div className="mx-auto flex max-w-xl items-center gap-3 px-4 py-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && window.history.length > 1) window.history.back();
                else if (typeof window !== "undefined") window.location.href = "/";
              }}
              aria-label={t("share.new")}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              aria-label={question}
              className="min-w-0 flex-1 text-left"
            >
              <div className="truncate text-sm font-semibold text-white">{question}</div>
              <div className="mt-1 flex h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                {showResults
                  ? options.map((_, i) => {
                      const pct = total > 0 ? Math.round(((counts[i] ?? 0) / total) * 100) : 0;
                      return (
                        <div
                          key={i}
                          className="h-full"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: voted === i ? "#ff3d8b" : "rgba(255,255,255,0.28)",
                            borderRight:
                              i < options.length - 1 ? "1px solid rgba(11,6,19,0.7)" : undefined,
                          }}
                        />
                      );
                    })
                  : null}
              </div>
            </button>
            <span className="shrink-0 tabular-nums text-xs text-white/45">{total}</span>
          </div>
        </div>
      </div>

      <header className="text-center">
        <Link
          href="/"
          aria-label={vc2.homeAriaLabel}
          className="inline-block text-3xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent"
        >
          moomz
        </Link>
      </header>

      <div ref={cardRef} className="glass rounded-3xl p-4 sm:p-7 space-y-5 shadow-2xl shadow-pink-500/10">
        <h1
          className="text-2xl sm:text-4xl font-bold leading-tight text-balance bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] break-words"
          style={{ backgroundImage: `linear-gradient(135deg, ${pal.c1}, #ffffff 55%, ${pal.c2})` }}
        >
          {question}
        </h1>

        <div
          className="space-y-2.5"
          role={showResults ? "status" : undefined}
          aria-live={showResults ? "polite" : undefined}
          aria-atomic="false"
          aria-label={showResults ? vc2.resultsAriaLabel(total) : undefined}
        >
          {options.map((opt, i) => {
            const c = counts[i] ?? 0;
            const pct = total > 0 ? Math.round((c / total) * 100) : 0;
            const isMine = voted === i;
            const isPulsing = emojiPulse?.idx === i;

            if (!showResults) {
              return (
                <button
                  key={i}
                  onClick={() => vote(i)}
                  disabled={pending}
                  aria-label={vc2.voteForAriaLabel(opt, pct)}
                  className="w-full text-left rounded-2xl border-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-400/50 hover:scale-[1.01] active:scale-[0.97] transition px-3 sm:px-4 py-3.5 sm:py-4 flex items-center gap-3 disabled:opacity-50 min-h-[56px]"
                >
                  <span
                    key={isPulsing ? emojiPulse!.k : undefined}
                    className={`text-2xl shrink-0 ${isPulsing ? "moomz-emoji-pulse" : ""}`}
                    aria-hidden
                  >
                    {EMOJIS[i]}
                  </span>
                  <span className="font-medium text-base sm:text-lg break-words min-w-0">{opt}</span>
                </button>
              );
            }

            // Tween from 0 → pct on the first paint after voting; subsequent
            // realtime updates animate via the CSS `transition: width` rule.
            const renderedPct = barsArmed ? pct : 0;
            return (
              <div
                // Stable key — re-mounting the row on every realtime update would
                // wipe the CSS transition and snap the bar to its new width.
                key={i}
                role="group"
                aria-label={`${opt}${isMine ? ` (${vc2.myVoteLabel.replace("· ", "")})` : ""}: ${pct}%, ${c} vote${c > 1 ? "s" : ""}`}
                className={`relative overflow-hidden rounded-2xl border-2 ${
                  isMine ? "border-pink-400/60" : "border-white/10"
                } bg-white/5 px-3 sm:px-4 py-3.5 sm:py-4 ${isMine ? "pop" : ""}`}
              >
                <div
                  aria-hidden
                  className={`moomz-bar absolute inset-y-0 left-0 ${
                    isMine
                      ? "bg-gradient-to-r from-pink-500/40 to-purple-500/40"
                      : "bg-white/8"
                  }`}
                  style={{ width: `${renderedPct}%` }}
                />
                <div className="relative flex justify-between items-center gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span
                      key={isPulsing ? emojiPulse!.k : undefined}
                      className={`text-2xl shrink-0 ${isPulsing ? "moomz-emoji-pulse" : ""}`}
                      aria-hidden
                    >
                      {EMOJIS[i]}
                    </span>
                    <span className="font-semibold text-base sm:text-lg truncate">
                      {opt}
                      {isMine && (
                        <span className="ml-2 text-pink-300 text-xs uppercase tracking-wide">
                          {vc2.myVoteLabel}
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="tabular-nums text-sm font-semibold text-white/80 shrink-0 flex items-baseline gap-1">
                    <span className="inline-block min-w-[2.5ch] text-right"><AnimatedNumber value={pct} /></span>
                    <span>%</span>
                    <span className="text-white/40 font-normal">· <AnimatedNumber value={c} /></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {reveal && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl px-3 py-2.5 text-sm font-semibold text-center border ${
              reveal.isRebel
                ? "bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-400/40 text-orange-200"
                : reveal.isMajority
                ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/40 text-emerald-200"
                : "bg-white/5 border-white/15 text-white/70"
            }`}
          >
            {reveal.isRebel ? (
              <>🌶️ <b>REBEL</b> · {vc2.revealRebel(reveal.userPct)}</>
            ) : reveal.isMajority ? (
              <>✅ {vc2.revealMajority(reveal.userPct)}</>
            ) : (
              <>👀 {vc2.revealShared(reveal.userPct)}</>
            )}
          </div>
        )}

        {showResults && (
          <div className="flex items-center justify-between text-sm text-white/50">
            <span>
              <AnimatedNumber value={total} /> {vc2.totalVotes(total).replace(/^\d+ /, "")}
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
                  aria-label={vc2.refreshAriaLabel}
                  className="hover:text-white transition disabled:opacity-50"
                >
                  {vc2.refreshLabel}
                </button>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Viral hook — create CTA on the dopamine peak (right after the reveal),
          curiosity-first copy + 1-tap prefilled ideas to kill the blank page. */}
      {showResults && (
        <div className="space-y-4 rounded-3xl border border-pink-400/30 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent p-5 shadow-lg shadow-pink-500/10">
          <div className="space-y-1">
            <div className="font-display text-2xl tracking-tight text-white">{vc.ctaTitle}</div>
            <p className="text-sm text-white/65">{vc.ctaSub}</p>
          </div>
          <Link
            href="/create"
            onClick={() => trackEvent("create_cta_click", { source: "after-vote-page" })}
            className="block w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
          >
            {vc.ctaButton}
          </Link>
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-white/40">{vc.suggestTitle}</div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s.q}
                  href={suggestionHref(s)}
                  onClick={() => trackEvent("create_cta_click", { source: "after-vote-suggestion" })}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:border-pink-400/40 hover:bg-white/10 active:scale-95"
                >
                  {s.q}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <div className="text-center text-xs uppercase tracking-widest text-white/40">
          {t("share.title")}
        </div>
        <div className="grid grid-cols-2 min-[420px]:grid-cols-4 gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("share.title")} · WhatsApp`}
            className="min-h-[56px] rounded-2xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-3 px-2 flex flex-col items-center justify-center gap-1 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20"
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
            aria-label={`${t("share.title")} · X`}
            className="min-h-[56px] rounded-2xl bg-black hover:bg-neutral-900 text-white font-semibold py-3 px-2 flex flex-col items-center justify-center gap-1 border border-white/10 transition hover:scale-[1.02] active:scale-[0.98]"
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
            aria-label={`${t("share.title")} · Telegram`}
            className="min-h-[56px] rounded-2xl bg-[#229ED9] hover:bg-[#1d8cc4] text-white font-semibold py-3 px-2 flex flex-col items-center justify-center gap-1 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-sky-500/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="text-[11px]">Telegram</span>
          </a>
          <button
            onClick={copyLink}
            aria-label={t("share.copy")}
            className={`min-h-[56px] rounded-2xl ${
              copied
                ? "bg-emerald-500/90 text-white"
                : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
            } font-semibold py-3 px-2 flex flex-col items-center justify-center gap-1 transition hover:scale-[1.02] active:scale-[0.98]`}
          >
            {copied ? (
              <>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[11px]">{t("share.copied")}</span>
              </>
            ) : (
              <>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span className="text-[11px]">{t("share.copy")}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={nativeShare}
            aria-label={t("share.other")}
            className="flex-1 min-h-[44px] rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium py-3 text-sm text-white/70 hover:text-white transition sm:hidden"
          >
            {t("share.other")}
          </button>
          <Link
            href="/create"
            aria-label={t("share.new")}
            className="flex-1 min-h-[44px] rounded-2xl border-2 border-white/15 bg-white/5 hover:bg-white/10 font-semibold py-3 text-center transition flex items-center justify-center"
          >
            {t("share.new")}
          </Link>
        </div>
      </div>

      <ToastHost />
    </div>
  );
}
