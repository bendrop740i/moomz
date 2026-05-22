import type { Metadata } from "next";
import Link from "next/link";
import { seoHref } from "@/lib/seo/seo-href";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";

export function generateMetadata(): Metadata {
  const url = canonicalUrl();
  return {
    title: "moomz for creators — embed polls, see who voted, grow your audience",
    description:
      "Embeddable polls + real-time analytics for YouTubers, IG creators, podcasters and newsletter writers. Free to start, Creator tier €2.99/mo. No watermark.",
    alternates: { canonical: url },
    openGraph: {
      title: "moomz for creators — polls that fit anywhere you post",
      description:
        "Embeddable polls + real-time analytics for YouTubers, IG creators, podcasters and newsletter writers. Free to start, Creator tier €2.99/mo.",
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "moomz for creators",
      description:
        "Embeddable polls + real-time analytics for creators. Free to start, Creator tier €2.99/mo.",
    },
  };
}

const FEATURES: { emoji: string; h: string; body: string }[] = [
  {
    emoji: "🔗",
    h: "Embed on any site",
    body: "One iframe drops a live poll into Substack, WordPress, Ghost, Notion or your own site. No code.",
  },
  {
    emoji: "📊",
    h: "Real-time results",
    body: "Charts update live as votes land. Your audience sees the room shift in real time and stays longer.",
  },
  {
    emoji: "🕶️",
    h: "Anonymous voting",
    body: "No sign-up wall. People vote in one tap, which is why participation rates beat IG Stories polls.",
  },
  {
    emoji: "🎨",
    h: "Your branding",
    body: "Custom palette, your handle on the card, no moomz watermark. The poll feels like part of your brand.",
  },
];

const STEPS: { n: number; h: string; body: string }[] = [
  {
    n: 1,
    h: "Create a poll in 10 seconds",
    body: "Type your question, drop 2–6 options, add emojis if you want. That's it.",
  },
  {
    n: 2,
    h: "Share or embed",
    body: "Copy the short link for stories, or paste the iframe snippet into your post, newsletter or site.",
  },
  {
    n: 3,
    h: "Watch the vibe live",
    body: "Real-time bars, top option, rebel rate, total votes. Screenshot the result for your next post.",
  },
];

const CREATOR_PERKS: string[] = [
  "Poll analytics dashboard — votes over time, drop-off, top referrers",
  "Boost-to-trending — get one weekly slot on the moomz home feed",
  "Embed without watermark on any site",
  "Custom palette and accent color to match your brand",
  "Verified creator badge on your moomz profile",
  "Export results as CSV for posts, decks, or newsletters",
  "Unlimited polls with longer retention",
  "Priority support and early access to new features",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I embed a moomz poll?",
    a: "Open any poll you've created, hit Share, and copy the iframe snippet. Paste it anywhere that accepts HTML — Substack, WordPress, Ghost, Webflow, Framer, Notion. The poll loads live, votes update in real time, and the embed is fully responsive on mobile.",
  },
  {
    q: "Is moomz really free?",
    a: "Yes. Creating polls, sharing links, embedding, voting — all free, no account required to start. Creator (€2.99/month) adds analytics, branding controls, the verified badge, no-watermark embeds, CSV export and the weekly boost slot.",
  },
  {
    q: "What does the Creator tier add?",
    a: "Three things your audience will notice: clean embeds without the moomz watermark, your custom colors on every card, and a verified badge on your profile. Three things you'll notice: a full analytics dashboard, a weekly home-feed boost, and CSV export.",
  },
  {
    q: "Can I see who voted?",
    a: "No personal data — moomz is anonymous by design, which is exactly why people actually vote. You see aggregate stats: total votes, option breakdown, votes over time, where traffic came from. Enough to know what your audience thinks, never enough to identify anyone.",
  },
  {
    q: "When does Creator launch?",
    a: "Creator is in private beta now and opens publicly in the coming weeks. Join the waitlist on the pricing page to get an early invite and locked-in launch pricing (€2.99/month, no annual lock-in).",
  },
];

export default function CreatorsPage() {
  // /pricing 301s to /{visitorLocale}/pricing — link straight to the final URL.
  const locale = getLocale();
  return (
    <article className="space-y-10 fade-up">
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-pink-300/80">
          moomz for creators
        </div>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-[1.05]">
          Polls that fit anywhere you post.
        </h1>
        <p className="text-white/70 text-base sm:text-lg text-balance leading-relaxed">
          Drop a live poll into your newsletter, video description, blog post or
          IG bio. See real-time votes, get clean analytics, and grow an audience
          that actually talks back — with a Gen Z aesthetic that doesn't look
          like a 2014 SurveyMonkey.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
        >
          Start free <span aria-hidden>→</span>
        </Link>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-white">Why creators love moomz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FEATURES.map((f) => (
            <div key={f.h} className="glass rounded-2xl p-4 space-y-2">
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="font-display text-lg text-white">{f.h}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-white">How it works</h2>
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li key={s.n} className="glass rounded-2xl p-4 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-display text-lg shadow-lg shadow-pink-500/30">
                {s.n}
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg text-white">{s.h}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-white">
          What you get with Creator <span className="text-pink-300">(€2.99/month)</span>
        </h2>
        <div className="glass rounded-2xl p-5 space-y-4 border border-pink-400/20">
          <ul className="space-y-2.5">
            {CREATOR_PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 shrink-0 text-pink-400">✓</span>
                <span className="text-sm leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
          <Link
            href={seoHref("pricing", locale)}
            className="block rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-3 text-center font-display text-lg hover:from-pink-500/30 hover:to-purple-600/30 transition"
          >
            Join the waitlist <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="text-center">
        <p className="text-white/55 text-sm">
          Used by creators on{" "}
          <span className="text-white/80">YouTube</span>,{" "}
          <span className="text-white/80">TikTok</span>,{" "}
          <span className="text-white/80">Substack</span> and{" "}
          <span className="text-white/80">Instagram</span>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">Frequently asked</h2>
        <div className="space-y-2">
          {FAQ.map((f) => (
            <details key={f.q} className="glass rounded-xl px-4 py-3 group">
              <summary className="font-medium text-white cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{f.q}</span>
                <span className="text-white/40 group-open:rotate-45 transition shrink-0">+</span>
              </summary>
              <p className="text-white/70 mt-2 leading-relaxed text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        Start free — create your first poll →
      </Link>
    </article>
  );
}
