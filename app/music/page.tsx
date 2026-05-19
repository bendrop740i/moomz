import { getSupabase } from "@/lib/supabase";
import MusicGrid from "./music-grid";

export const dynamic = "force-dynamic";

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

  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <h1 className="text-3xl font-display tracking-tight bg-gradient-to-br from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
          Vibe radio
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
