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
const RECENT_MAX = 60;

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolumeState] = useState(0.6);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(VOLUME_KEY);
    if (stored !== null) {
      const v = Number(stored);
      if (!Number.isNaN(v)) setVolumeState(v);
    }
  }, []);

  // Read recently played ids
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
      const el = audioRef.current;
      if (!el) return;
      el.src = track.blob_url;
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
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          // auto-advance with smart shuffle
          next();
        }}
        onError={() => {
          // bad blob URL / network — skip
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
