import type { Metadata } from "next";
import QuoteHub from "@/app/_seo/quote-hub";
import { canonicalUrl } from "@/lib/i18n-server";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return {
    title: "Quotes & famous sayings by theme — moomz",
    description:
      "The best carefully attributed quotes, sorted by theme: love, friendship, motivation, life, happiness, wisdom… Read, share and turn them into a poll.",
    alternates: { canonical: canonicalUrl() },
  };
}

export default function QuotesHub() {
  return <QuoteHub locale="en" />;
}
