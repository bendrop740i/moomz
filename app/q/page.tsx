import Link from "next/link";
import type { Metadata } from "next";
import { TOPICS, AUDIENCES, THEMES } from "@/lib/seo/programmatic";
import { canonicalUrl, getLocale } from "@/lib/i18n-server";

export function generateMetadata(): Metadata {
  return {
    title: "Poll prompts hub — would you rather, this or that, hot takes",
    description:
      "Ready-to-launch poll prompts for couples, work, friends, college, first dates. Funny, deep, spicy, savage. Launch in 1 tap on moomz.",
    alternates: { canonical: canonicalUrl() },
  };
}

export default function ProgHub() {
  const total = TOPICS.length * AUDIENCES.length * THEMES.length * 2;
  // Visitor locale for the URL prefix — links straight to the middleware
  // rewrite target so a prompt-card click never takes a 301 hop.
  const visitorLocale = getLocale();
  return (
    <div className="space-y-8 fade-up">
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">moomz · /q</div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          Poll prompts
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          {TOPICS.length} formats × {AUDIENCES.length} audiences × {THEMES.length} vibes × 2 languages. {total} curated combos. Tap, launch, share.
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">Create a poll in 10 seconds</div>
        <div className="text-xs text-white/50">moomz.com — anonymous, free</div>
      </Link>

      {(["en", "fr"] as const).map((locale) => (
        <section key={locale} className="space-y-4">
          <h2 className="font-display text-2xl text-white">
            {locale === "fr" ? "Français" : "English"}
          </h2>
          {TOPICS.map((topic) => (
            <div key={topic.id} className="space-y-2">
              <div className="text-sm font-semibold text-white/70">
                {topic.emoji} {topic.label[locale]}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {AUDIENCES.slice(0, 6).map((a) =>
                  THEMES.slice(0, 4).map((th) => (
                    <Link
                      key={`${a.id}-${th.id}`}
                      href={`/${visitorLocale}/q/${locale}/${topic.id}/for-${a.id}-${th.id}`}
                      className="inline-flex items-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/70 hover:text-white transition"
                    >
                      {a.label[locale]} · {th.label[locale]}
                    </Link>
                  )),
                )}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
