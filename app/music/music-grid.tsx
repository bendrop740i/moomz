"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useMusic, type Track } from "../music-provider";
import TrackCover from "./track-cover";

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
        ▶️ Lancer la radio (shuffle)
      </button>

      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none">
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Chercher un titre…"
          className="w-full glass rounded-xl pl-9 pr-9 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-pink-400/40"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Effacer la recherche"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white text-xs flex items-center justify-center transition"
          >
            ✕
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="text-white/45 text-xs px-0.5">
          {filtered.length === 0
            ? `Aucun titre pour « ${query.trim()} »`
            : `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}`}
        </p>
      )}

      {filtered.length === 0 && query.trim() ? (
        <div className="glass rounded-2xl p-6 text-center space-y-1">
          <div className="text-3xl">🤔</div>
          <p className="text-white/55 text-sm">
            Rien trouvé. Essaie un autre mot ou lance la radio.
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
                  {showEqualizer ? "Live" : "En cours"}
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
                        aria-label="Chargement"
                      />
                    ) : showEqualizer ? (
                      <span
                        className="flex items-end gap-1 h-7 drop-shadow-lg"
                        aria-label="Lecture en cours"
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
