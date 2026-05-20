import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "moomz pricing — free polls, Creator tier €2.99/month",
  description:
    "moomz is free forever for polls and votes. Upgrade to Creator for €2.99/month: analytics, trending boost, verified badge, custom palette, priority support.",
  alternates: {
    canonical: "https://moomz.com/pricing",
  },
  openGraph: {
    title: "moomz pricing — free polls, Creator tier €2.99/month",
    description:
      "Free forever for polls. Creator at €2.99/mo unlocks analytics, trending boost, verified badge and more.",
    url: "https://moomz.com/pricing",
    type: "website",
  },
};

type Tier = {
  name: string;
  price: string;
  suffix?: string;
  pitch: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  disabled?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "€0",
    suffix: "/mo",
    pitch: "Everything you need to start vibing.",
    features: [
      "Unlimited polls",
      "Unlimited votes",
      "Anonymous voting",
      "8 languages",
      "Sharing tools (link, WhatsApp, X, Telegram)",
    ],
    ctaLabel: "Create a poll →",
    ctaHref: "/",
  },
  {
    name: "Creator",
    price: "€2.99",
    suffix: "/mo",
    pitch: "For people who actually post.",
    features: [
      "Everything in Free",
      "Poll analytics dashboard",
      "Boost-to-trending (24h)",
      "No watermark on embeds",
      "Custom palette",
      "Verified badge",
      "Priority support",
      "Early access to new features",
    ],
    ctaLabel: "Join the waitlist →",
    ctaHref: "/creators",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "Coming soon",
    pitch: "For brands and agencies running serious polls.",
    features: [
      "Everything in Creator",
      "Branded subdomain",
      "API access",
      "Team seats",
      "White-label embeds",
    ],
    ctaLabel: "We'll tell you",
    ctaHref: "/creators",
    disabled: true,
  },
];

const faq: { q: string; a: string }[] = [
  {
    q: "Is moomz really free?",
    a: "Yes. Creating polls, voting, sharing and viewing live results will always be free — that's the whole point. The Free plan is not a trial; it has no time limit, no card required, and no hidden poll cap. Paid tiers exist for power users who want analytics, a verified badge, or to boost a poll into the trending feed, but you never need them to use the product.",
  },
  {
    q: "When does Creator launch?",
    a: "Soon. We are finishing the analytics dashboard and the verified-badge flow first. If you join the waitlist on /creators you'll get an invite the day Creator opens, plus a founding-member price locked in for life — even if we raise the public price later.",
  },
  {
    q: "Will my free polls keep working?",
    a: "Always. Every poll you have ever created on moomz stays live forever on the Free plan, with no archive, no expiry and no rate limit. If you later cancel a Creator subscription your polls don't disappear either — you simply lose the Creator-only perks (analytics, boost, verified badge).",
  },
  {
    q: "How do I get the verified badge?",
    a: "The verified badge is included with Creator and Studio. It shows a pink check next to your username on your profile and on every poll you create, so people know you are the real account behind that handle. It's not an editorial review — any active Creator subscriber can have it.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, in one click from your account page. There is no minimum term, no cancellation fee and no email-to-support ritual. Your Creator perks stay active until the end of the period you already paid for, then your account quietly drops back to Free.",
  },
  {
    q: "Refunds?",
    a: "If something breaks or Creator doesn't deliver what we promised, email us within 14 days of payment and we'll refund you, no questions asked. After that we don't refund partial months, but you can always cancel to stop the next charge.",
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-12 fade-up">
      {/* Hero */}
      <header className="space-y-4 text-center pt-2">
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
          Simple pricing.
        </h1>
        <p className="text-white/60 text-base sm:text-lg max-w-md mx-auto">
          Free forever for polls and votes. Upgrade only if you want analytics, a verified badge and a trending boost.
        </p>
      </header>

      {/* Tiers grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tiers.map((tier) => {
          const isHighlighted = tier.highlighted;
          const cardClasses = [
            "relative rounded-2xl bg-white/[0.04] border backdrop-blur-md p-5 space-y-3 flex flex-col",
            isHighlighted
              ? "border-pink-400/40 shadow-[0_0_40px_-15px_rgba(255,61,139,0.5)]"
              : "border-white/10",
          ].join(" ");

          return (
            <div key={tier.name} className={cardClasses}>
              {isHighlighted && (
                <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-pink-500/90 text-white shadow-md">
                  Popular
                </span>
              )}

              <div className="space-y-1">
                <h2 className="font-display text-2xl text-white">{tier.name}</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.suffix && (
                    <span className="text-sm text-white/40">{tier.suffix}</span>
                  )}
                </div>
                <p className="text-sm text-white/60 pt-1">{tier.pitch}</p>
              </div>

              <ul className="space-y-2 text-sm text-white/80 flex-1 pt-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-pink-400 mt-0.5 shrink-0">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                {tier.disabled ? (
                  <Link
                    href={tier.ctaHref}
                    className="block w-full text-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-white/[0.04] border border-white/10 text-white/50 hover:text-white/70 hover:border-white/20 transition"
                  >
                    {tier.ctaLabel}
                  </Link>
                ) : isHighlighted ? (
                  <Link
                    href={tier.ctaHref}
                    className="block w-full text-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_0_25px_-8px_rgba(255,61,139,0.6)] hover:opacity-90 transition"
                  >
                    {tier.ctaLabel}
                  </Link>
                ) : (
                  <Link
                    href={tier.ctaHref}
                    className="block w-full text-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-white/10 border border-white/10 text-white hover:bg-white/15 transition"
                  >
                    {tier.ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ */}
      <section className="space-y-5">
        <h2 className="font-display text-3xl sm:text-4xl text-center bg-gradient-to-br from-white to-pink-200 bg-clip-text text-transparent">
          Pricing FAQ
        </h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-4 open:bg-white/[0.06] transition"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-white font-semibold text-sm sm:text-base">
                <span>{item.q}</span>
                <span className="text-pink-400 text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="text-center space-y-4 pt-2 pb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-white">
          Start free. Upgrade if you love it.
        </h2>
        <p className="text-white/60 text-sm max-w-md mx-auto">
          No card needed to create your first poll. You can be live in 10 seconds.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_0_25px_-8px_rgba(255,61,139,0.6)] hover:opacity-90 transition"
        >
          Create a poll →
        </Link>
      </section>
    </div>
  );
}
