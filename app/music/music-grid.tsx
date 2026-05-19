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

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Chercher un titre…"
        className="w-full glass rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-pink-400/40"
      />

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
          return (
            <button
              key={t.id}
              onClick={() => onCardClick(t)}
              className={`glass rounded-xl p-3 text-left transition hover:bg-white/[0.08] hover:border-pink-400/30 group ${
                showVeil ? "border-pink-400/50 bg-white/[0.06]" : ""
              }`}
            >
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
                    ) : (
                      <span className="text-3xl drop-shadow-lg">
                        {isCurrent && isPlaying ? "⏸" : "▶"}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div
                className="text-xs font-medium text-white/90 truncate"
                title={t.title}
              >
                {t.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Local keyframes (don't touch globals.css — sibling agent owns it). */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes moomz-pulse-dot {
  0%, 100% { transform: scale(1); opacity: 0.6; box-shadow: 0 0 0 0 rgba(244,114,182,0.6); }
  50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 0 6px rgba(244,114,182,0); }
}
`,
        }}
      />
    </div>
  );
}
