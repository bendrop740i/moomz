import type { Metadata } from "next";
import { getSupabase } from "@/lib/supabase";
import MusicGrid from "./music-grid";

// Tracks rarely change — let the rendered HTML cache at the edge and
// revalidate in the background every 5 minutes. Big speedup vs. force-dynamic
// which re-queried Supabase on every visit.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Vibe radio — musique en shuffle infini · moomz",
  description:
    "Vibe radio moomz : une playlist ouverte qui tourne en shuffle infini. Découvre des tracks variées, lance la lecture en un clic, partage tes morceaux préférés à tes potes.",
  alternates: { canonical: "https://moomz.com/music" },
  openGraph: {
    title: "Vibe radio — musique en shuffle infini · moomz",
    description:
      "Vibe radio moomz : playlist en shuffle infini, lecture instantanée, ambiance pour scroller, bosser ou chiller. Une alternative légère à Spotify pour vibe-checker tes potes.",
    url: "https://moomz.com/music",
    siteName: "moomz",
    type: "music.playlist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe radio — musique en shuffle infini · moomz",
    description:
      "Playlist moomz en shuffle infini. Découvre des tracks, lance la lecture en un clic, partage tes vibes.",
  },
};

type Track = {
  id: string;
  title: string;
  blob_url: string;
  duration_s: number | null;
};

export default async function MusicPage() {
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
    description:
      "Playlist moomz en shuffle infini : tracks variées, lecture instantanée, ambiance vibe-check.",
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
    <div className="space-y-6 fade-up">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-1">
        <h1 className="text-3xl font-display tracking-tight bg-gradient-to-br from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
          Vibe radio — musique en shuffle infini
        </h1>
        <p className="text-white/50 text-xs sm:text-sm">
          {tracks.length > 0
            ? `${tracks.length} tracks · shuffle infini, jamais 2x la même`
            : "Bibliothèque vide pour l'instant."}
        </p>
      </header>

      {tracks.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-center space-y-2">
          <div className="text-4xl">🎧</div>
          <p className="text-white/60 text-sm">
            La bibliothèque arrive bientôt.
          </p>
        </div>
      ) : (
        <MusicGrid tracks={tracks} />
      )}
    </div>
  );
}
