import type { Metadata } from "next";
import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import { getAllTemplates } from "@/lib/seo/templates/loader";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Poll templates: 100+ ready-to-launch polls · moomz",
  description:
    "Browse ready-made poll templates for wedding, classroom, couple, party, work, food, travel. One click to launch — your question and options pre-filled on moomz.",
  alternates: { canonical: "https://moomz.com/template" },
  openGraph: {
    title: "Poll templates · moomz",
    description:
      "100+ ready-to-launch poll templates. Wedding, classroom, party, couple, work. One click to launch on moomz.",
    url: "https://moomz.com/template",
    type: "website",
    siteName: "moomz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poll templates · moomz",
    description: "100+ ready-to-launch poll templates.",
  },
};

const CATEGORY_LABEL: Record<string, string> = {
  wedding: "💍 Wedding · Mariage",
  bachelorette: "👯 EVJF · Bachelorette",
  bachelor: "🥃 EVG · Bachelor",
  couple: "💖 Couple",
  party: "🎉 Soirée · Party",
  classroom: "📚 Classroom · Classe",
  icebreaker: "❄️ Icebreaker",
  work: "💼 Work · Travail",
  food: "🍕 Food · Restau",
  travel: "✈️ Travel · Voyage",
  teen: "🤳 Teen · Ado",
  valentine: "💘 St-Valentin · Valentine",
  halloween: "🎃 Halloween",
  christmas: "🎄 Noël · Christmas",
  newyear: "🎊 Nouvel An · New Year",
  birthday: "🎂 Birthday · Anniv",
  baby: "🍼 Baby shower",
  family: "👨‍👩‍👧 Family · Famille",
  gaming: "🎮 Gaming",
  music: "🎵 Music · Musique",
  sport: "🏆 Sport",
  drama: "🌶️ Drama",
  debate: "🗣️ Debate · Débat",
  finance: "💸 Money · Argent",
  beauty: "💄 Beauty · Mode",
};

export default function TemplateHub() {
  const all = getAllTemplates();
  const byCategory = new Map<string, typeof all>();
  for (const p of all) {
    const list = byCategory.get(p.category) ?? [];
    list.push(p);
    byCategory.set(p.category, list);
  }
  const categories = [...byCategory.keys()].sort();

  return (
    <div className="space-y-10 fade-up">
      <HubNav locale="fr" current="templates" />
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          template · moomz
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {all.length}+ poll templates
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          Ready-to-launch polls for every occasion — wedding, classroom, party,
          couple, work, food, travel, drama. Tap a template, your question and
          options land pre-filled on moomz. Share the link. Done.
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">moomz.com</div>
        <div className="text-xs text-white/50">
          Start from blank too — 10 seconds, anonymous, free
        </div>
      </Link>

      {categories.map((cat) => {
        const list = byCategory.get(cat) ?? [];
        return (
          <section key={cat} className="space-y-3">
            <h2 className="font-display text-2xl text-white">
              {CATEGORY_LABEL[cat] ?? cat}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {list.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/template/${p.slug}`}
                    className="glass rounded-2xl px-5 py-4 hover:bg-white/10 transition flex items-start gap-3 h-full"
                  >
                    <span className="text-3xl shrink-0">{p.emoji}</span>
                    <div className="min-w-0">
                      <div className="font-display text-base text-white leading-tight">
                        {p.title}
                      </div>
                      <div className="text-xs text-white/50 line-clamp-2 mt-1">
                        {p.question}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-widest text-white/30">
                        {p.locale.toUpperCase()} · {p.options.length} options
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        Create your free moomz poll →
      </Link>
    </div>
  );
}
