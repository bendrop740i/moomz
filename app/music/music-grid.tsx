"use client";

import { useMemo, useState } from "react";
import { useMusic, type Track } from "../music-provider";
import TrackCover from "./track-cover";

export default function MusicGrid({ tracks }: { tracks: Track[] }) {
  const { current, isPlaying, toggle, start, playTrack } = useMusic();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tracks;
    return tracks.filter((t) => t.title.toLowerCase().includes(q));
  }, [tracks, query]);

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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {filtered.map((t) => {
          const isCurrent = current?.id === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onCardClick(t)}
              className={`glass rounded-xl p-3 text-left transition hover:bg-white/[0.08] hover:border-pink-400/30 group ${
                isCurrent ? "border-pink-400/50 bg-white/[0.06]" : ""
              }`}
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-2 relative">
                <TrackCover seed={t.id} label={t.title} className="absolute inset-0 w-full h-full" />
                {isCurrent && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <span className="text-3xl drop-shadow-lg">
                      {isPlaying ? "⏸" : "▶"}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-xs font-medium text-white/90 truncate" title={t.title}>
                {t.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
