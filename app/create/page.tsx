import type { Metadata } from "next";
import { Suspense } from "react";
import CreatePollForm from "@/app/create-poll-form";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const title = t("create.title", locale);
  const subtitle = t("create.subtitle", locale);
  return {
    title: `${title} · moomz`,
    description: subtitle,
    alternates: { canonical: "https://moomz.com/create" },
    openGraph: {
      title: `${title} · moomz`,
      description: subtitle,
      type: "website",
      url: "https://moomz.com/create",
    },
    twitter: { card: "summary_large_image" },
  };
}

function FormSkeleton() {
  return (
    <div
      className="glass rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xl shadow-pink-500/10"
      aria-hidden
    >
      <div className="h-3 w-24 rounded bg-white/10" />
      <div className="h-12 rounded-xl bg-white/5" />
      <div className="h-3 w-24 rounded bg-white/10" />
      <div className="h-12 rounded-xl bg-white/5" />
      <div className="h-12 rounded-xl bg-white/5" />
      <div className="h-12 rounded-xl bg-gradient-to-r from-pink-500/30 to-purple-600/30" />
    </div>
  );
}

export default function CreatePage() {
  const locale = getLocale();
  const title = t("create.title", locale);
  const subtitle = t("create.subtitle", locale);

  return (
    <div className="space-y-6 fade-up">
      <header className="text-center space-y-2">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
          {subtitle}
        </p>
      </header>

      <Suspense fallback={<FormSkeleton />}>
        <CreatePollForm />
      </Suspense>
    </div>
  );
}
