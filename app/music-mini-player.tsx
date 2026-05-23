"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMusic } from "./music-provider";
import TrackCover from "./music/track-cover";
import { useLocale } from "./locale-context";
import type { Locale } from "@/lib/i18n";

const PLAYER_COPY: Record<Locale, {
  open: string;
  loadingAudio: string;
  play: string;
  pause: string;
  collapse: string;
  restart: string;
  next: string;
  position: string;
  ofWord: string;
  loading: string;
  launch: string;
}> = {
  fr: { open: "Ouvrir le lecteur", loadingAudio: "Chargement audio", play: "Lecture", pause: "Pause", collapse: "Réduire le lecteur", restart: "Recommencer la track", next: "Suivant", position: "Position dans la track", ofWord: "sur", loading: "Chargement…", launch: "Vibe radio" },
  en: { open: "Open player", loadingAudio: "Buffering", play: "Play", pause: "Pause", collapse: "Minimize player", restart: "Restart track", next: "Next", position: "Track position", ofWord: "of", loading: "Loading…", launch: "Vibe radio" },
  es: { open: "Abrir reproductor", loadingAudio: "Cargando audio", play: "Reproducir", pause: "Pausa", collapse: "Minimizar reproductor", restart: "Reiniciar pista", next: "Siguiente", position: "Posición en la pista", ofWord: "de", loading: "Cargando…", launch: "Vibe radio" },
  it: { open: "Apri il player", loadingAudio: "Caricamento audio", play: "Riproduci", pause: "Pausa", collapse: "Riduci player", restart: "Ricomincia traccia", next: "Avanti", position: "Posizione nella traccia", ofWord: "di", loading: "Caricamento…", launch: "Vibe radio" },
  pt: { open: "Abrir player", loadingAudio: "Carregando áudio", play: "Reproduzir", pause: "Pausa", collapse: "Minimizar player", restart: "Reiniciar faixa", next: "Próxima", position: "Posição na faixa", ofWord: "de", loading: "Carregando…", launch: "Vibe radio" },
  de: { open: "Player öffnen", loadingAudio: "Audio lädt", play: "Abspielen", pause: "Pause", collapse: "Player minimieren", restart: "Track neu starten", next: "Weiter", position: "Position im Track", ofWord: "von", loading: "Lädt…", launch: "Vibe radio" },
  ja: { open: "プレイヤーを開く", loadingAudio: "読み込み中", play: "再生", pause: "一時停止", collapse: "プレイヤーを閉じる", restart: "トラックを再開", next: "次へ", position: "トラックの位置", ofWord: "/", loading: "読み込み中…", launch: "Vibe radio" },
  zh: { open: "打开播放器", loadingAudio: "加载中", play: "播放", pause: "暂停", collapse: "最小化播放器", restart: "重新播放", next: "下一首", position: "播放位置", ofWord: "/", loading: "加载中…", launch: "Vibe radio" },
};

// localStorage key persisting the collapsed/expanded preference. Defaults to
// collapsed (compact pill) so the player stays out of the way until the user
// taps it open.
const COLLAPSED_KEY = "moomz_music_collapsed";

// Format a seconds count as m:ss (e.g. 184 -> "3:04"). Returns "–:––" when
// the value is unknown so the layout never collapses.
function fmt(s: number): string {
  if (!Number.isFinite(s) || s < 0) return "–:––";
  const total = Math.floor(s);
  const m = Math.floor(total / 60);
  const sec = total % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function MusicMiniPlayer() {
  const {
    current,
    isPlaying,
    isLoading,
    isBuffering,
    isLoadingNext,
    currentTime,
    duration,
    toggle,
    next,
    seek,
    restart,
    start,
  } = useMusic();
  const locale = useLocale();
  const pc = PLAYER_COPY[locale as Locale] ?? PLAYER_COPY.en;

  const barRef = useRef<HTMLDivElement | null>(null);

  // Collapsed = compact floating pill. Defaults to true (out of the way).
  // `null` until the effect below reads localStorage so SSR/first paint don't
  // flash the wrong state on the client.
  const [collapsed, setCollapsed] = useState<boolean | null>(null);

  useEffect(() => {
    let initial = true;
    try {
      const raw = localStorage.getItem(COLLAPSED_KEY);
      // Only an explicit "0" opts the user into the expanded layout.
      if (raw === "0") initial = false;
    } catch {}
    setCollapsed(initial);
  }, []);

  const setCollapsedPersisted = useCallback((value: boolean) => {
    setCollapsed(value);
    try {
      localStorage.setItem(COLLAPSED_KEY, value ? "1" : "0");
    } catch {}
  }, []);

  // Translate a pointer position over the progress track into a seek target.
  const seekFromPointer = useCallback(
    (clientX: number) => {
      const el = barRef.current;
      if (!el || !duration) return;
      const rect = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      seek(ratio * duration);
    },
    [duration, seek],
  );

  // Idle state: no track loaded yet. Show a compact "▶ Vibe radio" launcher
  // pill bottom-right so the radio is reachable from every page (not just
  // /music and /play). Once a track is playing, the same slot becomes the
  // collapsed mini-player and the <audio> singleton survives navigation.
  if (!current) {
    return (
      <div className="fixed bottom-20 right-3 z-30 select-none">
        <button
          onClick={() => start()}
          disabled={isLoading}
          aria-label={pc.launch}
          className="glass rounded-full shadow-lg shadow-black/40 pl-2.5 pr-3.5 py-2 flex items-center gap-2 text-xs font-semibold text-white/90 hover:bg-white/[0.08] transition active:scale-95 disabled:opacity-60"
        >
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md shadow-pink-500/30">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="white" aria-hidden>
              <path d="M3 2l7 4-7 4z" />
            </svg>
          </span>
          <span>{isLoading ? pc.loading : pc.launch}</span>
        </button>
      </div>
    );
  }

  const showBufferingDot = isBuffering && !isLoadingNext;
  // Prefer the live <audio> duration; fall back to the DB-stored duration_s
  // so the scrubber + total time work even before metadata finishes loading.
  const totalDuration =
    duration > 0 ? duration : current.duration_s && current.duration_s > 0 ? current.duration_s : 0;
  const hasDuration = totalDuration > 0;
  const progress = hasDuration
    ? Math.min(100, (currentTime / totalDuration) * 100)
    : 0;

  // Keyframes shared by both layouts.
  const sharedStyle = (
    <style
      dangerouslySetInnerHTML={{
        __html: `
@keyframes moomz-mini-dot {
  0%, 100% { transform: scale(1); opacity: 0.55; }
  50% { transform: scale(1.4); opacity: 1; }
}
@keyframes moomz-cover-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.85; }
}
@keyframes moomz-disc-spin {
  to { transform: rotate(360deg); }
}
`,
      }}
    />
  );

  // ---- COLLAPSED: compact floating pill ------------------------------------
  // ~48px tall. A spinning album disc + a play/pause control. Tapping the disc
  // expands; the play/pause button stays usable while collapsed.
  if (collapsed !== false) {
    return (
      <div className="fixed bottom-20 right-3 z-30 select-none">
        <div
          className="glass rounded-full shadow-lg shadow-black/40 p-1 flex items-center gap-1"
          style={{ animation: "moomz-fade-in 0.2s ease-out" }}
        >
          {/* Spinning album disc — tap to expand */}
          <button
            onClick={() => setCollapsedPersisted(false)}
            aria-label={pc.open}
            title={current.title}
            className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative ring-1 ring-white/15 transition active:scale-90"
          >
            <div
              className="absolute inset-0"
              style={
                isPlaying
                  ? { animation: "moomz-disc-spin 7s linear infinite" }
                  : undefined
              }
            >
              <TrackCover
                seed={current.id}
                label={current.title}
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Center spindle hole for the vinyl look */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0b0613] ring-1 ring-white/20" />
            {showBufferingDot && (
              <span
                className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-pink-400"
                style={{ animation: "moomz-mini-dot 1s ease-in-out infinite" }}
                aria-label={pc.loadingAudio}
              />
            )}
          </button>

          {/* Play / pause */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 transition active:scale-90 shadow-md shadow-pink-500/30"
            aria-label={isPlaying ? pc.pause : pc.play}
          >
            {isPlaying ? (
              <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                <rect x="2" y="2" width="3" height="8" rx="1" />
                <rect x="7" y="2" width="3" height="8" rx="1" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                <path d="M3 2l7 4-7 4z" />
              </svg>
            )}
          </button>
        </div>
        {sharedStyle}
        <style
          dangerouslySetInnerHTML={{
            __html: `@keyframes moomz-fade-in { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }`,
          }}
        />
      </div>
    );
  }

  // ---- EXPANDED: full player ----------------------------------------------
  return (
    <div className="fixed bottom-20 right-3 left-3 sm:left-auto z-30 select-none">
      <div
        className="glass rounded-2xl shadow-lg shadow-black/40 p-2 sm:max-w-[300px] sm:ml-auto"
        style={{ animation: "moomz-expand-in 0.22s ease-out" }}
      >
        <div className="flex items-center gap-2 text-xs">
          {/* Cover — tap to collapse */}
          <button
            onClick={() => setCollapsedPersisted(true)}
            aria-label={pc.collapse}
            title={pc.collapse}
            className="w-9 h-9 rounded-lg overflow-hidden shrink-0 relative transition active:scale-90"
          >
            <TrackCover
              seed={current.id}
              label={current.title}
              className="absolute inset-0 w-full h-full"
            />
            {/* Spinning vinyl-ish glow when actively playing */}
            {isPlaying && (
              <div
                className="absolute inset-0 rounded-lg ring-1 ring-pink-400/50"
                style={{ animation: "moomz-cover-glow 1.6s ease-in-out infinite" }}
              />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="truncate font-medium text-white/90 flex items-center gap-1.5">
              {isLoadingNext ? (
                <span className="italic text-white/70">{pc.loading}</span>
              ) : (
                <>
                  <span className="truncate" title={current.title}>
                    {current.title}
                  </span>
                  {showBufferingDot && (
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"
                      style={{
                        animation: "moomz-mini-dot 1s ease-in-out infinite",
                      }}
                      aria-label={pc.loadingAudio}
                    />
                  )}
                </>
              )}
            </div>
            <div className="text-[10px] text-white/40">🎵 moomz radio</div>
          </div>

          {/* Restart / previous */}
          <button
            onClick={restart}
            className="w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center shrink-0 transition active:scale-90"
            aria-label={pc.restart}
            title={pc.restart}
          >
            <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
              <rect x="2" y="2" width="2" height="8" rx="0.5" />
              <path d="M10 2L5 6l5 4z" />
            </svg>
          </button>

          {/* Play / pause */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 transition active:scale-90 shadow-md shadow-pink-500/30"
            aria-label={isPlaying ? pc.pause : pc.play}
          >
            {isPlaying ? (
              <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                <rect x="2" y="2" width="3" height="8" rx="1" />
                <rect x="7" y="2" width="3" height="8" rx="1" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                <path d="M3 2l7 4-7 4z" />
              </svg>
            )}
          </button>

          {/* Next */}
          <button
            onClick={next}
            disabled={isLoading || isLoadingNext}
            className="w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center shrink-0 disabled:opacity-50 transition active:scale-90"
            aria-label={pc.next}
            title={pc.next}
          >
            <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
              <path d="M2 2l5 4-5 4z" />
              <rect x="8" y="2" width="2" height="8" rx="0.5" />
            </svg>
          </button>

          {/* Collapse / minimize */}
          <button
            onClick={() => setCollapsedPersisted(true)}
            className="w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center shrink-0 transition active:scale-90"
            aria-label={pc.collapse}
            title={pc.collapse}
          >
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M2.5 7.5h7" />
            </svg>
          </button>
        </div>

        {/* Progress / scrubber */}
        <div className="flex items-center gap-2 mt-2 px-0.5">
          <span className="text-[9px] tabular-nums text-white/45 shrink-0 w-7 text-right">
            {fmt(currentTime)}
          </span>
          <div
            ref={barRef}
            role="slider"
            tabIndex={hasDuration ? 0 : -1}
            aria-label={pc.position}
            aria-valuemin={0}
            aria-valuemax={hasDuration ? Math.round(totalDuration) : 0}
            aria-valuenow={Math.round(currentTime)}
            aria-valuetext={`${fmt(currentTime)} ${pc.ofWord} ${fmt(totalDuration)}`}
            onPointerDown={(e) => {
              if (!hasDuration) return;
              e.currentTarget.setPointerCapture(e.pointerId);
              seekFromPointer(e.clientX);
            }}
            onPointerMove={(e) => {
              if (!hasDuration) return;
              if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                seekFromPointer(e.clientX);
              }
            }}
            onKeyDown={(e) => {
              if (!hasDuration) return;
              if (e.key === "ArrowRight") {
                e.preventDefault();
                seek(currentTime + 5);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                seek(currentTime - 5);
              }
            }}
            className={`group relative flex-1 h-4 flex items-center ${
              hasDuration ? "cursor-pointer" : "cursor-default"
            }`}
          >
            {/* track */}
            <div className="w-full h-1.5 rounded-full bg-white/12 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* thumb */}
            {hasDuration && (
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow shadow-black/40 ring-2 ring-pink-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            )}
          </div>
          <span className="text-[9px] tabular-nums text-white/45 shrink-0 w-7">
            {hasDuration ? fmt(totalDuration) : "live"}
          </span>
        </div>
      </div>

      {sharedStyle}
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes moomz-expand-in { from { opacity: 0; transform: translateY(6px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }`,
        }}
      />
    </div>
  );
}
