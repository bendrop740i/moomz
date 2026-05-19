import WorldVibes from "../world-vibes";
import { getSupabase } from "@/lib/supabase";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

async function getWorldVibes(): Promise<Array<{ cc: string; votes: number }>> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("votes_world_24h")
      .select("country,votes")
      .limit(120);
    if (!data) return [];
    return data
      .filter((r): r is { country: string; votes: number } => !!r.country)
      .map((r) => ({ cc: r.country, votes: r.votes }));
  } catch {
    return [];
  }
}

export default async function WorldVibesSection() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);
  const worldVibes = await getWorldVibes();
  return (
    <WorldVibes
      data={worldVibes}
      title={tx("world.title")}
      votesLabel={tx("world.votes")}
      countriesLabel={tx("world.countries")}
      emptyLabel={tx("world.empty")}
    />
  );
}
