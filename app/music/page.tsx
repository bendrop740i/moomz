import type { Metadata } from "next";
import { Suspense } from "react";
import { getSupabase } from "@/lib/supabase";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";
import MusicGrid from "./music-grid";

// Tracks rarely change — let the rendered HTML cache at the edge and
// revalidate in the background every 5 minutes. Big speedup vs. force-dynamic
// which re-queried Supabase on every visit.
export const revalidate = 300;

type MusicMeta = { title: string; description: string; descShort: string; h1: string; shuffleHint: string; emptyHint: string; emptyLib: string };
const MUSIC_META: Record<Locale, MusicMeta> = {
  fr: {
    title: "Vibe radio — musique en shuffle infini · moomz",
    description: "Vibe radio moomz : une playlist ouverte qui tourne en shuffle infini. Découvre des tracks variées, lance la lecture en un clic, partage tes morceaux préférés à tes potes.",
    descShort: "Playlist moomz en shuffle infini. Découvre des tracks, lance la lecture en un clic, partage tes vibes.",
    h1: "Vibe radio — musique en shuffle infini",
    shuffleHint: "Shuffle infini — jamais deux fois la même.",
    emptyHint: "Bibliothèque vide pour l'instant.",
    emptyLib: "La bibliothèque arrive bientôt.",
  },
  en: {
    title: "Vibe radio — infinite shuffle music · moomz",
    description: "moomz vibe radio: an open playlist on infinite shuffle. Discover varied tracks, play with one tap, share your favourite tunes with friends.",
    descShort: "moomz infinite shuffle playlist. Discover tracks, play in one tap, share your vibes.",
    h1: "Vibe radio — infinite shuffle music",
    shuffleHint: "Infinite shuffle — never the same track twice.",
    emptyHint: "Library is empty for now.",
    emptyLib: "Library coming soon.",
  },
  es: {
    title: "Vibe radio — música en shuffle infinito · moomz",
    description: "Vibe radio moomz: una playlist abierta en shuffle infinito. Descubre tracks variadas, empieza a escuchar con un clic, comparte tus canciones favoritas.",
    descShort: "Playlist moomz en shuffle infinito. Descubre tracks, escucha con un clic, comparte tus vibes.",
    h1: "Vibe radio — música en shuffle infinito",
    shuffleHint: "Shuffle infinito — nunca dos veces la misma.",
    emptyHint: "Biblioteca vacía por ahora.",
    emptyLib: "La biblioteca llega pronto.",
  },
  it: {
    title: "Vibe radio — musica in shuffle infinito · moomz",
    description: "Vibe radio moomz: una playlist aperta in shuffle infinito. Scopri tracce varie, avvia la riproduzione con un clic, condividi i tuoi brani preferiti.",
    descShort: "Playlist moomz in shuffle infinito. Scopri tracce, avvia con un clic, condividi le tue vibes.",
    h1: "Vibe radio — musica in shuffle infinito",
    shuffleHint: "Shuffle infinito — mai la stessa due volte.",
    emptyHint: "Libreria vuota per ora.",
    emptyLib: "La libreria arriva presto.",
  },
  pt: {
    title: "Vibe radio — música em shuffle infinito · moomz",
    description: "Vibe radio moomz: uma playlist aberta em shuffle infinito. Descobre músicas variadas, inicia a reprodução com um clique, partilha as tuas faixas preferidas.",
    descShort: "Playlist moomz em shuffle infinito. Descobre músicas, reproduz com um clique, partilha as tuas vibes.",
    h1: "Vibe radio — música em shuffle infinito",
    shuffleHint: "Shuffle infinito — nunca a mesma duas vezes.",
    emptyHint: "Biblioteca vazia por enquanto.",
    emptyLib: "A biblioteca chega em breve.",
  },
  de: {
    title: "Vibe radio — Musik im Endlos-Shuffle · moomz",
    description: "moomz Vibe-Radio: eine offene Playlist im Endlos-Shuffle. Entdecke vielseitige Tracks, starte die Wiedergabe mit einem Klick, teile deine Lieblingstracks.",
    descShort: "moomz Endlos-Shuffle-Playlist. Tracks entdecken, mit einem Klick abspielen, Vibes teilen.",
    h1: "Vibe radio — Musik im Endlos-Shuffle",
    shuffleHint: "Endlos-Shuffle — nie zweimal das Gleiche.",
    emptyHint: "Bibliothek ist noch leer.",
    emptyLib: "Bibliothek kommt bald.",
  },
  ja: {
    title: "バイブラジオ — 無限シャッフル音楽 · moomz",
    description: "moomz バイブラジオ：無限シャッフルのオープンプレイリスト。多様なトラックを発見し、ワンタップで再生、お気に入りの曲をシェアしよう。",
    descShort: "moomz 無限シャッフルプレイリスト。トラックを発見して、ワンタップで再生、バイブを共有。",
    h1: "バイブラジオ — 無限シャッフル音楽",
    shuffleHint: "無限シャッフル — 同じ曲は二度と続かない。",
    emptyHint: "ライブラリは現在空です。",
    emptyLib: "ライブラリは近日公開。",
  },
  zh: {
    title: "氛围电台 — 无限随机播放音乐 · moomz",
    description: "moomz 氛围电台：一个无限随机播放的开放歌单。发现多样音乐，一键播放，与朋友分享你的最爱。",
    descShort: "moomz 无限随机播放歌单。发现音乐，一键播放，分享你的氛围。",
    h1: "氛围电台 — 无限随机播放音乐",
    shuffleHint: "无限随机 — 永不重复。",
    emptyHint: "曲库暂时为空。",
    emptyLib: "曲库即将上线。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const m = MUSIC_META[locale] ?? MUSIC_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: "https://moomz.com/music" },
    openGraph: {
      title: m.title,
      description: m.description,
      url: "https://moomz.com/music",
      siteName: "moomz",
      type: "music.playlist",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.descShort,
    },
  };
}

type Track = {
  id: string;
  title: string;
  blob_url: string;
  duration_s: number | null;
};

function GridSkeleton() {
  // 6 cards mirroring the live grid (2 cols mobile / 3 cols sm+).
  const cards = Array.from({ length: 6 });
  return (
    <div className="space-y-3" aria-busy="true" aria-live="polite">
      <div className="w-full rounded-2xl bg-white/5 h-12 skeleton-box shimmer" />
      <div className="w-full glass rounded-xl h-10 opacity-60" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {cards.map((_, i) => (
          <div key={i} className="glass rounded-xl p-3">
            <div className="aspect-square rounded-lg overflow-hidden mb-2 skeleton-box shimmer" />
            <div className="h-3 rounded skeleton-box shimmer mb-1.5" />
            <div className="h-3 rounded skeleton-box shimmer w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}

async function TracksGrid() {
  const locale = getLocale() as Locale;
  const m = MUSIC_META[locale] ?? MUSIC_META.en;
  const supabase = getSupabase();
  const { data } = await supabase
    .from("tracks")
    .select("id,title,blob_url,duration_s")
    .order("title", { ascending: true })
    .limit(500);

  const tracks = (data ?? []) as Track[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicPlaylist",
    name: "moomz vibe radio",
    description: m.descShort,
    url: "https://moomz.com/music",
    numTracks: tracks.length,
    track: tracks.slice(0, 20).map((t) => ({
      "@type": "MusicRecording",
      name: t.title,
      url: t.blob_url,
      ...(t.duration_s
        ? { duration: `PT${Math.max(1, Math.round(t.duration_s))}S` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-white/50 text-xs sm:text-sm -mt-4">
        {tracks.length > 0 ? m.shuffleHint : m.emptyHint}
      </p>
      {tracks.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-center space-y-2">
          <div className="text-4xl">🎧</div>
          <p className="text-white/60 text-sm">
            {m.emptyLib}
          </p>
        </div>
      ) : (
        <MusicGrid tracks={tracks} />
      )}
    </>
  );
}

export default function MusicPage() {
  const locale = getLocale() as Locale;
  const m = MUSIC_META[locale] ?? MUSIC_META.en;
  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <h1 className="text-3xl font-display tracking-tight bg-gradient-to-br from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
          {m.h1}
        </h1>
      </header>

      <Suspense fallback={<GridSkeleton />}>
        <TracksGrid />
      </Suspense>
    </div>
  );
}
