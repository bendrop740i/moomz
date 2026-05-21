import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EN_SLUGS, EN_WORDS, findEnWord } from "@/lib/tools/definition";
import DefinitionView from "@/app/_seo/definition-view";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

export function generateStaticParams() {
  return EN_SLUGS.map((word) => ({ word }));
}

export function generateMetadata({
  params,
}: {
  params: { word: string };
}): Metadata {
  const entry = findEnWord(params.word);
  if (!entry) return {};
  const firstSense = entry.definitions[0]?.text ?? "";
  const title = `${entry.word} — meaning, definition and examples · moomz dictionary`;
  const description = `${entry.word} (${entry.partOfSpeech}): ${firstSense}`;
  const url = `https://moomz.com/define/${entry.slug}`;
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
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function DefineDetailPage({
  params,
}: {
  params: { word: string };
}) {
  const entry = findEnWord(params.word);
  if (!entry) notFound();
  return (
    <DefinitionView entry={entry} lang="en" allSiblingSlugs={EN_WORDS.map((w) => w.slug)} />
  );
}
