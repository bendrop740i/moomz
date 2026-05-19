"use client";

import { useMusic } from "./music-provider";

export default function MusicMiniPlayer() {
  const { current, isPlaying, isLoading, toggle, next } = useMusic();

  // Only render once playback has started — no idle button cluttering the UI.
  if (!current) return null;

  return (
    <div className="fixed bottom-20 right-3 z-30 select-none">
      <div className="glass rounded-full shadow-lg shadow-black/30 pl-2 pr-1 py-1 flex items-center gap-2 text-xs max-w-[230px]">
        <button
          onClick={toggle}
          className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
              <rect x="2" y="2" width="3" height="8" rx="1" />
              <rect x="7" y="2" width="3" height="8" rx="1" />
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
              <path d="M3 2l7 4-7 4z" />
            </svg>
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="truncate font-medium text-white/90">{current.title}</div>
          <div className="text-[10px] text-white/40">🎵 moomz radio</div>
        </div>
        <button
          onClick={next}
          disabled={isLoading}
          className="w-7 h-7 rounded-full hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center shrink-0 disabled:opacity-50"
          aria-label="Suivant"
          title="Suivant"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
            <path d="M2 2l5 4-5 4z" />
            <rect x="8" y="2" width="2" height="8" rx="0.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
