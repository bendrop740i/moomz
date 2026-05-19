"use client";

import { useMusic } from "./music-provider";
import TrackCover from "./music/track-cover";

export default function MusicMiniPlayer() {
  const {
    current,
    isPlaying,
    isLoading,
    isBuffering,
    isLoadingNext,
    toggle,
    next,
  } = useMusic();

  // Only render once playback has started — no idle button cluttering the UI.
  if (!current) return null;

  const showBufferingDot = isBuffering && !isLoadingNext;

  return (
    <div className="fixed bottom-20 right-3 z-30 select-none">
      <div className="glass rounded-full shadow-lg shadow-black/30 pl-1 pr-1 py-1 flex items-center gap-2 text-xs max-w-[250px]">
        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 relative">
          <TrackCover
            seed={current.id}
            label={current.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
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
          <div className="truncate font-medium text-white/90 flex items-center gap-1.5">
            {isLoadingNext ? (
              <span className="italic text-white/70">Loading next…</span>
            ) : (
              <>
                <span className="truncate">{current.title}</span>
                {showBufferingDot && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"
                    style={{
                      animation: "moomz-mini-dot 1s ease-in-out infinite",
                    }}
                    aria-label="Chargement audio"
                  />
                )}
              </>
            )}
          </div>
          <div className="text-[10px] text-white/40">🎵 moomz radio</div>
        </div>
        <button
          onClick={next}
          disabled={isLoading || isLoadingNext}
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes moomz-mini-dot {
  0%, 100% { transform: scale(1); opacity: 0.55; }
  50% { transform: scale(1.4); opacity: 1; }
}
`,
        }}
      />
    </div>
  );
}
