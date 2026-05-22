import type { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "@/lib/seo/alternatives";
import { canonicalUrl } from "@/lib/i18n-server";

export function generateMetadata(): Metadata {
  const url = canonicalUrl();
  return {
    title: "moomz alternatives: Strawpoll, Mentimeter, Slido…",
    description:
      "Comparing moomz to Strawpoll, Mentimeter, Slido, Poll Everywhere, Google Forms and Doodle. Honest head-to-head — pricing, design, anonymity, share flow.",
    alternates: { canonical: url },
    openGraph: {
      title: "moomz alternatives: Strawpoll, Mentimeter, Slido…",
      description:
        "Honest comparison of moomz vs the big poll tools. Pick the right one for your question.",
      url,
      type: "website",
      siteName: "moomz",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "moomz alternatives: Strawpoll, Mentimeter, Slido…",
      description:
        "Honest comparison of moomz vs the big poll tools. Pick the right one for your question.",
    },
  };
}

export default function AlternativesHub() {
  return (
    <div className="space-y-10 fade-up">
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          alternatives · moomz
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          moomz vs the world
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">
          Honest head-to-head comparisons with Strawpoll, Mentimeter, Slido,
          Poll Everywhere, Google Forms and Doodle. No fluff — pick the right
          tool for your question.
        </p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">moomz.com</div>
        <div className="text-xs text-white/50">
          Free, anonymous, 10-second polls — try it first
        </div>
      </Link>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {alternatives.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/alternatives/${a.slug}`}
              className="glass rounded-2xl px-5 py-4 hover:bg-white/10 transition flex items-start gap-3 h-full"
            >
              <span className="text-3xl shrink-0">{a.emoji}</span>
              <div className="min-w-0">
                <div className="font-display text-lg text-white">
                  moomz vs {a.competitor}
                </div>
                <div className="text-xs text-white/50 line-clamp-3 mt-1">
                  {a.description}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        Create your free moomz poll →
      </Link>
    </div>
  );
}
