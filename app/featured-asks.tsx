import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

type FeaturedRow = {
  id: string;
  username: string;
  display_name: string | null;
  avatar_emoji: string;
  bio: string | null;
  pending_count: number;
  sample_question: string | null;
};

async function getFeatured(limit = 8): Promise<FeaturedRow[]> {
  try {
    const supabase = getSupabase();
    // Pull bot profiles first (curated, fresh + spicy questions),
    // then any real users who have pending asks.
    const { data: bots } = await supabase
      .from("profiles_public")
      .select("id,username,display_name,avatar_emoji,bio")
      .eq("is_bot", true)
      .order("created_at", { ascending: false })
      .limit(20);
    if (!bots || bots.length === 0) return [];

    const ids = bots.map((b: { id: string }) => b.id);
    const { data: pending } = await supabase
      .from("ask_questions_public")
      .select("recipient_id,text,created_at")
      .in("recipient_id", ids)
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    const byProf = new Map<string, { count: number; sample: string }>();
    for (const row of (pending ?? []) as { recipient_id: string; text: string }[]) {
      const existing = byProf.get(row.recipient_id);
      if (existing) {
        byProf.set(row.recipient_id, { count: existing.count + 1, sample: existing.sample });
      } else {
        byProf.set(row.recipient_id, { count: 1, sample: row.text });
      }
    }

    return bots
      .map((b: { id: string; username: string; display_name: string | null; avatar_emoji: string; bio: string | null }) => {
        const info = byProf.get(b.id);
        return {
          ...b,
          pending_count: info?.count ?? 0,
          sample_question: info?.sample ?? null,
        };
      })
      .filter((r: FeaturedRow) => r.pending_count > 0)
      .sort((a: FeaturedRow, b: FeaturedRow) => b.pending_count - a.pending_count)
      .slice(0, limit);
  } catch {
    return [];
  }
}

export default async function FeaturedAsks() {
  const rows = await getFeatured(8);
  if (rows.length === 0) return null;
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  return (
    <section className="space-y-3">
      <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2">
        {tx("ask.featured.title")}
      </h2>
      <div className="-mx-5 px-5 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-3 snap-x snap-mandatory pb-1">
          {rows.map((r) => {
            const label = r.pending_count === 1
              ? tx("ask.featured.cta").replace("{n}", String(r.pending_count))
              : tx("ask.featured.ctaPlural").replace("{n}", String(r.pending_count));
            return (
              <li
                key={r.id}
                className="shrink-0 w-[220px] sm:w-[230px] snap-start"
              >
                <Link
                  href={`/${r.username}`}
                  className="glass rounded-2xl p-4 h-full min-h-[140px] flex flex-col gap-2 hover:border-pink-400/40 transition relative overflow-hidden"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="text-2xl shrink-0" aria-hidden>{r.avatar_emoji}</div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm truncate">
                        {r.display_name ?? `@${r.username}`}
                      </div>
                      <div className="text-[10px] text-white/40 truncate">
                        @{r.username}
                      </div>
                    </div>
                  </div>
                  {r.sample_question && (
                    <div className="text-xs text-white/70 leading-snug line-clamp-2 italic break-words">
                      &ldquo;{r.sample_question}&rdquo;
                    </div>
                  )}
                  <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-500/25 border border-pink-400/50 text-pink-100 whitespace-nowrap max-w-full truncate">
                      📬 {label}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
