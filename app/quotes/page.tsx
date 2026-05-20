import type { Metadata } from "next";
import QuoteHub from "@/app/_seo/quote-hub";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Quotes & famous sayings by theme — moomz",
  description:
    "The best carefully attributed quotes, sorted by theme: love, friendship, motivation, life, happiness, wisdom… Read, share and turn them into a poll.",
  alternates: { canonical: "https://moomz.com/quotes" },
};

export default function QuotesHub() {
  return <QuoteHub locale="en" />;
}
