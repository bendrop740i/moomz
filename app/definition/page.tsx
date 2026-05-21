import type { Metadata } from "next";
import { FR_WORDS } from "@/lib/tools/definition";
import DefinitionHubView from "@/app/_seo/definition-hub-view";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Dictionnaire moomz — slang Gen Z et mots du quotidien · français",
  description:
    "Définitions courtes et claires de plus de 60 mots français : slang Gen Z (kiff, vibe, wesh, oklm), mots du quotidien et expressions familières. Étymologie, exemples, sondages.",
  alternates: { canonical: "https://moomz.com/definition" },
  openGraph: {
    title: "Dictionnaire moomz — français",
    description:
      "Slang Gen Z et mots du quotidien expliqués en quelques secondes, avec étymologie et exemples.",
    type: "website",
    url: "https://moomz.com/definition",
    siteName: "moomz",
  },
  twitter: { card: "summary_large_image" },
};

export default function DefinitionHub() {
  return <DefinitionHubView words={FR_WORDS} lang="fr" />;
}
