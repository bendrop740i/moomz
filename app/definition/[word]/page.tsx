import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FR_SLUGS, FR_WORDS, findFrWord } from "@/lib/tools/definition";
import DefinitionView from "@/app/_seo/definition-view";

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return FR_SLUGS.map((word) => ({ word }));
}

export function generateMetadata({
  params,
}: {
  params: { word: string };
}): Metadata {
  const entry = findFrWord(params.word);
  if (!entry) return {};
  const firstSense = entry.definitions[0]?.text ?? "";
  const title = `${entry.word} — définition, sens et exemples · dictionnaire moomz`;
  const description = `${entry.word} (${entry.partOfSpeech}) : ${firstSense}`;
  const url = `https://moomz.com/definition/${entry.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "moomz",
      locale: "fr_FR",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function DefinitionDetailPage({
  params,
}: {
  params: { word: string };
}) {
  const entry = findFrWord(params.word);
  if (!entry) notFound();
  return (
    <DefinitionView entry={entry} lang="fr" allSiblingSlugs={FR_WORDS.map((w) => w.slug)} />
  );
}
