"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// supabase-browser is intentionally NOT imported at module level — it pulls in
// ~187 kB of @supabase/supabase-js that would otherwise ship with every route
// (including 500+ SEO pages that never touch the radio). Loaded on-demand
// inside the idle prefetch and inside fetchNextTrack().

export type Track = {
  id: string;
  title: string;
  blob_url: string;
  duration_s: number | null;
};

type MusicState = {
  current: Track | null;
  isPlaying: boolean;
  isLoading: boolean;
  isBuffering: boolean;
  isLoadingNext: boolean;
  // Track id the user just clicked — flipped synchronously inside the click
  // handler so the UI can show "playing" before the audio element actually
  // emits `play`. Distinct from `current?.id` because for the very first
  // gesture we want instant veil feedback even before any state commit lands.
  intentId: string | null;
  volume: number;
  // Live playback position (seconds) + total duration (seconds, 0 if unknown).
  // Drives the mini-player scrubber + elapsed/total time labels.
  currentTime: number;
  duration: number;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  next: () => Promise<void>;
  setVolume: (v: number) => void;
  start: () => Promise<void>;
  playTrack: (t: Track) => Promise<void>;
  // Jump to an absolute position (seconds) within the current track.
  seek: (seconds: number) => void;
  // Restart the current track from 0 (single tap on the "previous" control).
  restart: () => void;
};

const Ctx = createContext<MusicState | null>(null);

const RECENT_KEY = "moomz_music_recent";
const VOLUME_KEY = "moomz_music_volume";
const CURRENT_KEY = "moomz_music_current";
const POSITION_KEY = "moomz_music_position";
const RECENT_MAX = 60;

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [intentId, setIntentId] = useState<string | null>(null);
  const [volume, setVolumeState] = useState(0.6);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const restoredRef = useRef(false);
  // Speculatively-fetched next track so the first "Lancer la radio" click can
  // skip the Supabase RPC round-trip and go straight to play().
  const prefetchedRef = useRef<Track | null>(null);

  // Restore volume + last track from localStorage on first mount.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (restoredRef.current) return;
    restoredRef.current = true;

    const storedVol = localStorage.getItem(VOLUME_KEY);
    if (storedVol !== null) {
      const v = Number(storedVol);
      if (!Number.isNaN(v)) setVolumeState(v);
    }

    try {
      const raw = localStorage.getItem(CURRENT_KEY);
      if (raw) {
        const track = JSON.parse(raw) as Track;
        if (track && track.id) {
          // Load the track in <audio> but do NOT play (browser blocks autoplay without user gesture).
          const el = audioRef.current;
          if (el) {
            el.src = `/api/track/${track.id}`;
            const storedPos = Number(localStorage.getItem(POSITION_KEY) ?? "0");
            if (!Number.isNaN(storedPos) && storedPos > 0) {
              const onMeta = () => {
                try {
                  el.currentTime = storedPos;
                } catch {}
                el.removeEventListener("loadedmetadata", onMeta);
              };
              el.addEventListener("loadedmetadata", onMeta);
            }
          }
          setCurrent(track);
        }
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  // Persist current track id on change.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (current) {
      try {
        localStorage.setItem(CURRENT_KEY, JSON.stringify(current));
      } catch {}
    }
  }, [current]);

  // Speculatively fetch one candidate track so the first user click on
  // "Lancer la radio" skips the Supabase RPC round-trip. Runs in the
  // background after mount, only if there's nothing currently loaded.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (current) return; // already have something loaded from storage
    if (prefetchedRef.current) return;
    let cancelled = false;
    // Defer slightly so we don't compete with critical above-fold rendering.
    const idle = (window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    }).requestIdleCallback;
    const schedule = idle
      ? (cb: () => void) => idle(cb, { timeout: 1500 })
      : (cb: () => void) => window.setTimeout(cb, 600);
    schedule(async () => {
      if (cancelled) return;
      const { getBrowserSupabase } = await import("@/lib/supabase-browser");
      if (cancelled) return;
      const supabase = getBrowserSupabase();
      const recent = (() => {
        try {
          const raw = localStorage.getItem(RECENT_KEY);
          return raw ? (JSON.parse(raw) as string[]) : [];
        } catch {
          return [];
        }
      })();
      const { data, error } = await supabase.rpc("pick_random_track", {
        p_exclude: recent,
      });
      if (cancelled || error) return;
      const arr = data as unknown as Track[] | null;
      if (arr && arr.length > 0) {
        prefetchedRef.current = arr[0];
      }
    });
    return () => {
      cancelled = true;
    };
  }, [current]);

  // Read recently played ids.
  const readRecent = useCallback((): string[] => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  }, []);

  const pushRecent = useCallback((id: string) => {
    if (typeof window === "undefined") return;
    const list = readRecent().filter((x) => x !== id);
    list.unshift(id);
    if (list.length > RECENT_MAX) list.length = RECENT_MAX;
    localStorage.setItem(RECENT_KEY, JSON.stringify(list));
  }, [readRecent]);

  const fetchNextTrack = useCallback(async (): Promise<Track | null> => {
    // Use the speculatively-prefetched track if one is waiting.
    if (prefetchedRef.current) {
      const t = prefetchedRef.current;
      prefetchedRef.current = null;
      return t;
    }
    const { getBrowserSupabase } = await import("@/lib/supabase-browser");
    const supabase = getBrowserSupabase();
    const recent = readRecent();
    const { data, error } = await supabase.rpc("pick_random_track", {
      p_exclude: recent,
    });
    if (error) return null;
    const arr = data as unknown as Track[] | null;
    if (!arr || arr.length === 0) return null;
    return arr[0];
  }, [readRecent]);

  const loadAndMaybePlay = useCallback(
    async (track: Track, shouldPlay: boolean) => {
      const el = audioRef.current;
      // Flip UI state synchronously FIRST so the clicked card shows the veil
      // and the mini-player appears with the new title before any network /
      // codec work happens. `setCurrent` here is committed in the same React
      // batch as the synchronous `intentId` flag — together they remove the
      // 100-400ms "did my click register?" gap.
      setCurrent(track);
      setIntentId(track.id);
      // Optimistically mark as buffering until <audio> fires `canplay` /
      // `playing`. The mini-player listens to this to show the pulsing dot.
      if (shouldPlay) setIsBuffering(true);
      // CRITICAL: kick off the audio fetch BEFORE any awaited work so the
      // network round-trip overlaps with React commit. Calling .play() while
      // a fresh user gesture is still on the stack also avoids autoplay
      // blocks in some browsers (mobile Safari especially).
      if (el) {
        el.src = `/api/track/${track.id}`;
        el.volume = volume;
        // Don't call el.load() — setting `src` already triggers the load and
        // calling load() afterwards can interrupt the play() promise on some
        // browsers (Safari especially).
        if (shouldPlay) {
          // Fire-and-forget: don't await, so React can finish committing the
          // new state while the browser opens the connection in parallel.
          el.play().catch(() => {
            // Browser blocked autoplay (no user gesture yet). UI shows paused.
            setIsBuffering(false);
          });
        }
      }
      pushRecent(track.id);
      // New track → reset stored position.
      try {
        localStorage.setItem(POSITION_KEY, "0");
      } catch {}
    },
    [pushRecent, volume],
  );

  const next = useCallback(async () => {
    setIsLoading(true);
    setIsLoadingNext(true);
    const t = await fetchNextTrack();
    setIsLoading(false);
    if (t) {
      loadAndMaybePlay(t, true);
    }
    // Clear "Loading next…" once we have the track id wired up. The actual
    // audio-buffering indicator (`isBuffering`) takes over from here.
    setIsLoadingNext(false);
  }, [fetchNextTrack, loadAndMaybePlay]);

  const start = useCallback(async () => {
    if (current) {
      const el = audioRef.current;
      if (el) {
        // Don't await — keep the click handler synchronous so the browser
        // treats this as a user gesture and never throws autoplay errors.
        el.play().catch(() => {});
      }
      return;
    }
    // Fast path: if we already prefetched a candidate, kick off audio loading
    // synchronously inside this click handler. Critical for mobile Safari
    // which only allows .play() within the same user-gesture tick.
    const prefetched = prefetchedRef.current;
    if (prefetched) {
      prefetchedRef.current = null;
      loadAndMaybePlay(prefetched, true);
      return;
    }
    setIsLoading(true);
    const t = await fetchNextTrack();
    setIsLoading(false);
    if (t) loadAndMaybePlay(t, true);
  }, [current, fetchNextTrack, loadAndMaybePlay]);

  const play = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;
    if (!current) {
      await start();
      return;
    }
    el.play().catch(() => {});
  }, [current, start]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) play();
    else pause();
  }, [play, pause]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
    try {
      localStorage.setItem(VOLUME_KEY, String(v));
    } catch {}
  }, []);

  const playTrack = useCallback(
    async (t: Track) => {
      await loadAndMaybePlay(t, true);
    },
    [loadAndMaybePlay],
  );

  // Jump to an absolute position. Used by the mini-player scrubber.
  const seek = useCallback((seconds: number) => {
    const el = audioRef.current;
    if (!el) return;
    const dur = el.duration;
    const clamped = Number.isFinite(dur) && dur > 0
      ? Math.min(Math.max(0, seconds), dur)
      : Math.max(0, seconds);
    try {
      el.currentTime = clamped;
      setCurrentTime(clamped);
    } catch {}
  }, []);

  // Restart the current track from the beginning.
  const restart = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      setCurrentTime(0);
    } catch {}
    if (el.paused) el.play().catch(() => {});
  }, []);

  // Persist current playback position every 3s while playing, plus on pause.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = audioRef.current;
    if (!el) return;

    const save = () => {
      try {
        localStorage.setItem(POSITION_KEY, String(Math.floor(el.currentTime || 0)));
      } catch {}
    };
    const id = setInterval(() => {
      if (!el.paused) save();
    }, 3000);
    el.addEventListener("pause", save);
    el.addEventListener("seeked", save);
    window.addEventListener("beforeunload", save);
    return () => {
      clearInterval(id);
      el.removeEventListener("pause", save);
      el.removeEventListener("seeked", save);
      window.removeEventListener("beforeunload", save);
    };
  }, []);

  const value = useMemo<MusicState>(
    () => ({
      current,
      isPlaying,
      isLoading,
      isBuffering,
      isLoadingNext,
      intentId,
      volume,
      currentTime,
      duration,
      play,
      pause,
      toggle,
      next,
      setVolume,
      start,
      playTrack,
      seek,
      restart,
    }),
    [
      current,
      isPlaying,
      isLoading,
      isBuffering,
      isLoadingNext,
      intentId,
      volume,
      currentTime,
      duration,
      play,
      pause,
      toggle,
      next,
      setVolume,
      start,
      playTrack,
      seek,
      restart,
    ],
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
        onPlay={() => {
          setIsPlaying(true);
          setIsBuffering(false);
        }}
        onPlaying={() => {
          setIsPlaying(true);
          setIsBuffering(false);
        }}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsBuffering(true)}
        onStalled={() => setIsBuffering(true)}
        onCanPlay={() => setIsBuffering(false)}
        onTimeUpdate={(e) => {
          setCurrentTime(e.currentTarget.currentTime || 0);
        }}
        onDurationChange={(e) => {
          const d = e.currentTarget.duration;
          setDuration(Number.isFinite(d) && d > 0 ? d : 0);
        }}
        onLoadedMetadata={(e) => {
          const d = e.currentTarget.duration;
          setDuration(Number.isFinite(d) && d > 0 ? d : 0);
        }}
        onEmptied={() => {
          // New src loading — reset the scrubber so it doesn't show stale time.
          setCurrentTime(0);
          setDuration(0);
        }}
        onEnded={() => {
          // Auto-advance with smart shuffle.
          try {
            localStorage.setItem(POSITION_KEY, "0");
          } catch {}
          next();
        }}
        onError={() => {
          // Bad URL / network — skip to next.
          setIsBuffering(false);
          next();
        }}
      />
    </Ctx.Provider>
  );
}

export function useMusic() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useMusic outside MusicProvider");
  return v;
}
