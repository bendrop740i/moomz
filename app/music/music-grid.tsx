"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useMusic, type Track } from "../music-provider";
import { useLocale } from "../locale-context";
import TrackCover from "./track-cover";

type MusicGridLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";
type GridCopy = {
  startRadio: string;
  searchPlaceholder: string;
  clearSearch: string;
  noResults: (q: string) => string;
  resultsCount: (n: number) => string;
  noResultsEmpty: string;
  loading: string;
  nowPlaying: string;
};
const GRID_COPY: Record<MusicGridLocale, GridCopy> = {
  fr: {
    startRadio: "▶️ Lancer la radio (shuffle)",
    searchPlaceholder: "Chercher un titre…",
    clearSearch: "Effacer la recherche",
    noResults: (q) => `Aucun titre pour « ${q} »`,
    resultsCount: (n) => `${n} résultat${n > 1 ? "s" : ""}`,
    noResultsEmpty: "Rien trouvé. Essaie un autre mot ou lance la radio.",
    loading: "Chargement",
    nowPlaying: "Lecture en cours",
  },
  en: {
    startRadio: "▶️ Start radio (shuffle)",
    searchPlaceholder: "Search a track…",
    clearSearch: "Clear search",
    noResults: (q) => `No track for "${q}"`,
    resultsCount: (n) => `${n} result${n > 1 ? "s" : ""}`,
    noResultsEmpty: "Nothing found. Try another word or start the radio.",
    loading: "Loading",
    nowPlaying: "Now playing",
  },
  es: {
    startRadio: "▶️ Iniciar la radio (shuffle)",
    searchPlaceholder: "Buscar una canción…",
    clearSearch: "Borrar búsqueda",
    noResults: (q) => `Ningún título para « ${q} »`,
    resultsCount: (n) => `${n} resultado${n > 1 ? "s" : ""}`,
    noResultsEmpty: "Nada encontrado. Prueba otra palabra o lanza la radio.",
    loading: "Cargando",
    nowPlaying: "Reproduciendo",
  },
  it: {
    startRadio: "▶️ Avvia la radio (shuffle)",
    searchPlaceholder: "Cerca un brano…",
    clearSearch: "Cancella ricerca",
    noResults: (q) => `Nessun titolo per « ${q} »`,
    resultsCount: (n) => `${n} risultat${n > 1 ? "i" : "o"}`,
    noResultsEmpty: "Niente trovato. Prova un'altra parola o avvia la radio.",
    loading: "Caricamento",
    nowPlaying: "In riproduzione",
  },
  pt: {
    startRadio: "▶️ Iniciar a rádio (shuffle)",
    searchPlaceholder: "Pesquisar uma faixa…",
    clearSearch: "Limpar pesquisa",
    noResults: (q) => `Nenhum título para « ${q} »`,
    resultsCount: (n) => `${n} resultado${n > 1 ? "s" : ""}`,
    noResultsEmpty: "Nada encontrado. Tenta outra palavra ou inicia a rádio.",
    loading: "A carregar",
    nowPlaying: "A reproduzir",
  },
  de: {
    startRadio: "▶️ Radio starten (Shuffle)",
    searchPlaceholder: "Einen Titel suchen…",
    clearSearch: "Suche löschen",
    noResults: (q) => `Kein Titel für „${q}"`,
    resultsCount: (n) => `${n} Ergebnis${n > 1 ? "se" : ""}`,
    noResultsEmpty: "Nichts gefunden. Versuche ein anderes Wort oder starte das Radio.",
    loading: "Wird geladen",
    nowPlaying: "Wird abgespielt",
  },
  ja: {
    startRadio: "▶️ ラジオ開始（シャッフル）",
    searchPlaceholder: "トラックを検索…",
    clearSearch: "検索をクリア",
    noResults: (q) => `「${q}」に一致するトラックなし`,
    resultsCount: (n) => `${n} 件`,
    noResultsEmpty: "見つかりませんでした。別のキーワードを試すか、ラジオを開始してください。",
    loading: "読み込み中",
    nowPlaying: "再生中",
  },
  zh: {
    startRadio: "▶️ 开始电台（随机播放）",
    searchPlaceholder: "搜索歌曲…",
    clearSearch: "清除搜索",
    noResults: (q) => `没有找到「${q}」`,
    resultsCount: (n) => `${n} 个结果`,
    noResultsEmpty: "未找到。尝试另一个词或开始电台。",
    loading: "加载中",
    nowPlaying: "正在播放",
  },
};

export default function MusicGrid({ tracks }: { tracks: Track[] }) {
  const {
    current,
    isPlaying,
    isBuffering,
    intentId,
    toggle,
    start,
    playTrack,
  } = useMusic();
  const locale = useLocale();
  const gc = GRID_COPY[(locale as MusicGridLocale) in GRID_COPY ? (locale as MusicGridLocale) : "en"] ?? GRID_COPY.en;
  const [query, setQuery] = useState("");
  // Defer the filter computation so typing stays smooth even with 200+ tracks
  // — the input updates synchronously, the grid catches up at the next idle.
  const deferredQuery = useDeferredValue(query);
  const isStale = deferredQuery !== query;

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return tracks;
    return tracks.filter((t) => t.title.toLowerCase().includes(q));
  }, [tracks, deferredQuery]);

  const onCardClick = (t: Track) => {
    if (current?.id === t.id) toggle();
    else playTrack(t);
  };

  return (
    <div className="space-y-3">
      <button
        onClick={start}
        className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 hover:scale-[1.01] active:scale-[0.99] transition shadow-lg shadow-pink-500/30"
      >
        {gc.startRadio}
      </button>

      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={gc.searchPlaceholder}
          className="w-full glass rounded-xl pl-9 pr-9 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-pink-400/40"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label={gc.clearSearch}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white text-xs flex items-center justify-center transition"
          >
            ✕
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="text-white/45 text-xs px-0.5">
          {filtered.length === 0
            ? gc.noResults(query.trim())
            : gc.resultsCount(filtered.length)}
        </p>
      )}

      {filtered.length === 0 && query.trim() ? (
        <div className="glass rounded-2xl p-6 text-center space-y-1">
          <div className="text-3xl">🤔</div>
          <p className="text-white/55 text-sm">
            {gc.noResultsEmpty}
          </p>
        </div>
      ) : (
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-2 transition-opacity ${
          isStale ? "opacity-70" : "opacity-100"
        }`}
      >
        {filtered.map((t) => {
          const isCurrent = current?.id === t.id;
          // Instant feedback: the just-clicked card shows the veil even
          // before the audio element actually transitions to "playing".
          const isIntent = intentId === t.id;
          const showVeil = isCurrent || isIntent;
          // Buffering only matters for the active track.
          const showBufferingDot = isCurrent && isBuffering;
          // Track is the active one AND audio is actually playing →
          // show the animated equalizer instead of a static play arrow.
          const showEqualizer = isCurrent && isPlaying && !showBufferingDot;
          return (
            <button
              key={t.id}
              onClick={() => onCardClick(t)}
              className={`glass rounded-xl p-3 text-left transition hover:bg-white/[0.08] hover:border-pink-400/30 group relative ${
                showVeil
                  ? "border-pink-400/70 bg-white/[0.07] shadow-lg shadow-pink-500/20"
                  : ""
              }`}
              aria-current={isCurrent ? "true" : undefined}
            >
              {/* "Now playing" ribbon — unmistakable which track is live. */}
              {isCurrent && (
                <span className="absolute -top-1.5 -right-1.5 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white shadow-md shadow-pink-500/40">
                  {showEqualizer ? (
                    <span
                      className="flex items-end gap-[1.5px] h-2"
                      aria-hidden
                    >
                      <i className="w-[2px] bg-white rounded-sm moomz-eq-bar moomz-eq-1" />
                      <i className="w-[2px] bg-white rounded-sm moomz-eq-bar moomz-eq-2" />
                      <i className="w-[2px] bg-white rounded-sm moomz-eq-bar moomz-eq-3" />
                    </span>
                  ) : (
                    "❚❚"
                  )}
                  {showEqualizer ? "Live" : gc.nowPlaying}
                </span>
              )}
              <div className="aspect-square rounded-lg overflow-hidden mb-2 relative">
                <TrackCover
                  seed={t.id}
                  label={t.title}
                  className="absolute inset-0 w-full h-full"
                />
                {showVeil && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    {showBufferingDot ? (
                      <span
                        className="w-3 h-3 rounded-full bg-pink-400"
                        style={{
                          animation:
                            "moomz-pulse-dot 1s ease-in-out infinite",
                        }}
                        aria-label={gc.loading}
                      />
                    ) : showEqualizer ? (
                      <span
                        className="flex items-end gap-1 h-7 drop-shadow-lg"
                        aria-label={gc.nowPlaying}
                      >
                        <i className="w-1.5 bg-pink-300 rounded-sm moomz-eq-bar moomz-eq-1" />
                        <i className="w-1.5 bg-pink-300 rounded-sm moomz-eq-bar moomz-eq-2" />
                        <i className="w-1.5 bg-pink-300 rounded-sm moomz-eq-bar moomz-eq-3" />
                        <i className="w-1.5 bg-pink-300 rounded-sm moomz-eq-bar moomz-eq-4" />
                      </span>
                    ) : (
                      <span className="text-3xl drop-shadow-lg">▶</span>
                    )}
                  </div>
                )}
              </div>
              <div
                className={`text-xs font-medium truncate ${
                  isCurrent ? "text-pink-200" : "text-white/90"
                }`}
                title={t.title}
              >
                {t.title}
              </div>
            </button>
          );
        })}
      </div>
      )}

      {/* Local keyframes (don't touch globals.css — sibling agent owns it). */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes moomz-pulse-dot {
  0%, 100% { transform: scale(1); opacity: 0.6; box-shadow: 0 0 0 0 rgba(244,114,182,0.6); }
  50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 0 6px rgba(244,114,182,0); }
}
@keyframes moomz-eq {
  0%, 100% { height: 25%; }
  50% { height: 100%; }
}
.moomz-eq-bar { animation: moomz-eq 0.7s ease-in-out infinite; }
.moomz-eq-1 { animation-delay: -0.1s; }
.moomz-eq-2 { animation-delay: -0.45s; }
.moomz-eq-3 { animation-delay: -0.25s; }
.moomz-eq-4 { animation-delay: -0.6s; }
@media (prefers-reduced-motion: reduce) {
  .moomz-eq-bar { animation: none; height: 60%; }
}
`,
        }}
      />
    </div>
  );
}
