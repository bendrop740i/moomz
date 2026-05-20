import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import SearchClient from "./search-client";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const title = t("search.title", locale);
  const hint = t("search.hint", locale);
  return {
    title: `${title} · moomz`,
    description: hint,
    alternates: { canonical: "https://moomz.com/search" },
    robots: { index: false, follow: true },
    openGraph: {
      title: `${title} · moomz`,
      description: hint,
      type: "website",
      url: "https://moomz.com/search",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function SearchPage() {
  const locale = getLocale();
  const title = t("search.title", locale);

  return (
    <div className="space-y-6 fade-up">
      <header className="text-center space-y-2">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h1>
      </header>

      <SearchClient />
    </div>
  );
}
