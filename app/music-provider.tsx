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
import { getBrowserSupabase } from "@/lib/supabase-browser";

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
  volume: number;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  next: () => Promise<void>;
  setVolume: (v: number) => void;
  start: () => Promise<void>;
  playTrack: (t: Track) => Promise<void>;
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
  const [volume, setVolumeState] = useState(0.6);
  const restoredRef = useRef(false);

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
      setCurrent(track);
      pushRecent(track.id);
      // New track → reset stored position.
      try {
        localStorage.setItem(POSITION_KEY, "0");
      } catch {}
      const el = audioRef.current;
      if (!el) return;
      // /api/track/[id] proxies a freshly-resolved Vercel Blob stream each play.
      el.src = `/api/track/${track.id}`;
      el.volume = volume;
      try {
        el.load();
        if (shouldPlay) {
          await el.play();
        }
      } catch {
        // Browser blocked autoplay (no user gesture yet). UI will show paused state.
      }
    },
    [pushRecent, volume],
  );

  const next = useCallback(async () => {
    setIsLoading(true);
    const t = await fetchNextTrack();
    setIsLoading(false);
    if (t) await loadAndMaybePlay(t, true);
  }, [fetchNextTrack, loadAndMaybePlay]);

  const start = useCallback(async () => {
    if (current) {
      const el = audioRef.current;
      if (el) {
        try {
          await el.play();
        } catch {}
      }
      return;
    }
    setIsLoading(true);
    const t = await fetchNextTrack();
    setIsLoading(false);
    if (t) await loadAndMaybePlay(t, true);
  }, [current, fetchNextTrack, loadAndMaybePlay]);

  const play = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;
    if (!current) {
      await start();
      return;
    }
    try {
      await el.play();
    } catch {}
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
    () => ({ current, isPlaying, isLoading, volume, play, pause, toggle, next, setVolume, start, playTrack }),
    [current, isPlaying, isLoading, volume, play, pause, toggle, next, setVolume, start, playTrack],
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        preload="metadata"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          // Auto-advance with smart shuffle.
          try {
            localStorage.setItem(POSITION_KEY, "0");
          } catch {}
          next();
        }}
        onError={() => {
          // Bad URL / network — skip to next.
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
