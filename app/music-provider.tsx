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
  intentId: string | null;
  volume: number;
  currentTime: number;
  duration: number;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  next: () => Promise<void>;
  setVolume: (v: number) => void;
  start: () => Promise<void>;
  playTrack: (t: Track) => Promise<void>;
  seek: (seconds: number) => void;
  restart: () => void;
};

const Ctx = createContext<MusicState | null>(null);

const RECENT_KEY = "moomz_music_recent";
const VOLUME_KEY = "moomz_music_volume";
const CURRENT_KEY = "moomz_music_current";
const POSITION_KEY = "moomz_music_position";
const RECENT_MAX = 60;

// ---------------------------------------------------------------------------
// Module-level singletons. The <audio> element is created ONCE, imperatively,
// and lives outside React's render tree — so playback never stops even if the
// MusicProvider subtree re-renders or remounts during navigation. This is the
// fix for "music cuts when I navigate the site".
// ---------------------------------------------------------------------------
let sharedAudio: HTMLAudioElement | null = null;
function getSharedAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!sharedAudio) {
    const a = new Audio();
    a.preload = "auto";
    a.setAttribute("playsinline", "");
    sharedAudio = a;
  }
  return sharedAudio;
}
// Restore-from-storage runs once per real page load, never per remount (which
// would re-set `src` and restart playback).
let restoredOnce = false;
// Mirrors `current` so a remounted provider rehydrates the track instantly.
let lastTrack: Track | null = null;

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (audioRef.current === null) audioRef.current = getSharedAudio();

  const [current, setCurrent] = useState<Track | null>(() => lastTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [intentId, setIntentId] = useState<string | null>(null);
  const [volume, setVolumeState] = useState<number>(() => {
    if (typeof window === "undefined") return 0.6;
    const raw = localStorage.getItem(VOLUME_KEY);
    if (raw === null) return 0.6;
    const v = Number(raw);
    return Number.isNaN(v) ? 0.6 : v;
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Speculatively-fetched next track so the first "Lancer la radio" click can
  // skip the Supabase RPC round-trip and go straight to play().
  const prefetchedRef = useRef<Track | null>(null);

  // Keep the module mirror in sync so a remount rehydrates `current`.
  useEffect(() => {
    lastTrack = current;
  }, [current]);

  // Restore last track from localStorage — ONCE per page load. A remount finds
  // `restoredOnce` already true and skips, so it never re-sets `src`.
  useEffect(() => {
    if (typeof window === "undefined" || restoredOnce) return;
    restoredOnce = true;
    try {
      const raw = localStorage.getItem(CURRENT_KEY);
      if (raw) {
        const track = JSON.parse(raw) as Track;
        if (track && track.id) {
          const el = audioRef.current;
          // Only load into <audio> if nothing is loaded yet. If the singleton
          // already has a src (it survived from before), leave playback alone.
          if (el && !el.src) {
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
  // "Lancer la radio" skips the Supabase RPC round-trip.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (current) return;
    if (prefetchedRef.current) return;
    let cancelled = false;
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
      setCurrent(track);
      setIntentId(track.id);
      if (shouldPlay) setIsBuffering(true);
      if (el) {
        el.src = `/api/track/${track.id}`;
        el.volume = volume;
        if (shouldPlay) {
          el.play().catch(() => {
            setIsBuffering(false);
          });
        }
      }
      pushRecent(track.id);
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
    setIsLoadingNext(false);
  }, [fetchNextTrack, loadAndMaybePlay]);

  const start = useCallback(async () => {
    if (current) {
      const el = audioRef.current;
      if (el) {
        el.play().catch(() => {});
      }
      return;
    }
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

  const restart = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      setCurrentTime(0);
    } catch {}
    if (el.paused) el.play().catch(() => {});
  }, []);

  // Subscribe to the singleton's media events. Re-runs only when `next`
  // changes (ended/error auto-advance) — the audio element is never recreated,
  // so playback continues seamlessly across the re-subscribe.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => {
      setIsPlaying(true);
      setIsBuffering(false);
    };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsBuffering(true);
    const onStalled = () => setIsBuffering(true);
    const onCanPlay = () => setIsBuffering(false);
    const onTime = () => setCurrentTime(el.currentTime || 0);
    const onDur = () => {
      const d = el.duration;
      setDuration(Number.isFinite(d) && d > 0 ? d : 0);
    };
    const onEmptied = () => {
      setCurrentTime(0);
      setDuration(0);
    };
    const onEnded = () => {
      try {
        localStorage.setItem(POSITION_KEY, "0");
      } catch {}
      next();
    };
    const onError = () => {
      setIsBuffering(false);
      next();
    };
    el.addEventListener("play", onPlay);
    el.addEventListener("playing", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("waiting", onWaiting);
    el.addEventListener("stalled", onStalled);
    el.addEventListener("canplay", onCanPlay);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("durationchange", onDur);
    el.addEventListener("loadedmetadata", onDur);
    el.addEventListener("emptied", onEmptied);
    el.addEventListener("ended", onEnded);
    el.addEventListener("error", onError);
    // Sync UI state from the singleton on (re)mount — it may already be playing.
    setIsPlaying(!el.paused);
    if (el.currentTime) setCurrentTime(el.currentTime);
    if (Number.isFinite(el.duration) && el.duration > 0) setDuration(el.duration);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("playing", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("waiting", onWaiting);
      el.removeEventListener("stalled", onStalled);
      el.removeEventListener("canplay", onCanPlay);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("durationchange", onDur);
      el.removeEventListener("loadedmetadata", onDur);
      el.removeEventListener("emptied", onEmptied);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("error", onError);
    };
  }, [next]);

  // Persist playback position every 3s while playing, plus on pause.
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

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMusic() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useMusic outside MusicProvider");
  return v;
}
