import type { Metadata } from "next";
import { EN_WORDS } from "@/lib/tools/definition";
import DefinitionHubView from "@/app/_seo/definition-hub-view";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "moomz dictionary — Gen Z slang and everyday words · English",
  description:
    "Clear short definitions for 60+ English words: Gen Z slang (vibe, slay, lit, sus, bet) plus everyday vocabulary. Etymology, examples and polls included.",
  alternates: { canonical: "https://moomz.com/define" },
  openGraph: {
    title: "moomz dictionary — English",
    description:
      "Gen Z slang and everyday words explained fast, with etymology and examples.",
    type: "website",
    url: "https://moomz.com/define",
    siteName: "moomz",
  },
  twitter: { card: "summary_large_image" },
};

export default function DefineHub() {
  return <DefinitionHubView words={EN_WORDS} lang="en" />;
}
