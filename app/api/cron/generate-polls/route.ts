// Vercel Cron — generates 1 fresh vibe-check poll per language via Gemini Flash.
// Scheduled in vercel.json. Auth via Vercel's automatic x-vercel-cron header
// or manual CRON_SECRET bearer for local testing.

import { NextResponse } from "next/server";
import { geminiJson } from "@/lib/gemini";
import { getAdminSupabase } from "@/lib/supabase-admin";
import { tagQuestion } from "@/lib/topics";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

type Lang = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";
const LANGS: Lang[] = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];

const LANG_LABEL: Record<Lang, string> = {
  fr: "French (français)",
  en: "English (US, gen-Z)",
  es: "Spanish (español, casual)",
  it: "Italian (italiano, casual)",
  pt: "Portuguese (português BR, casual)",
  de: "German (Deutsch, casual)",
  ja: "Japanese (日本語, casual)",
  zh: "Simplified Chinese (中文, casual)",
};

const SYSTEM = `You write "vibe check" poll questions for a Gen-Z social app called moomz.
- Style: short, punchy, playful, slightly provocative, never toxic / hateful.
- Topics: food, relationships, drama, tech, lifestyle, money, sport, music, internet culture.
- 2 to 4 options. Each option < 22 chars. Add ONE emoji per option (food/drama/feelings appropriate).
- Question is < 80 chars, ends with "?".
- AVOID cliché topics: pineapple-on-pizza, dog vs cat, coffee vs tea, salty vs sweet crepe, hot dog is a sandwich.
- Mix formats: would-you-rather, hot takes, A-vs-B, this-or-that, controversial stances.
- Write idiomatic, native-feeling phrasing in the target language. Use modern slang where natural.
- No quotation marks inside the question or options.`;

type GenItem = { lang: Lang; question: string; options: string[] };

function isValidItem(x: unknown): x is GenItem {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  if (typeof o.question !== "string" || o.question.trim().length < 8) return false;
  if (typeof o.question === "string" && o.question.length > 120) return false;
  if (!Array.isArray(o.options) || o.options.length < 2 || o.options.length > 4) return false;
  if (!o.options.every((s) => typeof s === "string" && s.trim().length > 0 && s.length < 32))
    return false;
  // dup options
  const dedup = new Set(o.options.map((s) => String(s).toLowerCase().trim()));
  if (dedup.size !== o.options.length) return false;
  return true;
}

function shortHash(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36).slice(0, 6);
}

function isAuthorized(req: Request): boolean {
  // Vercel auto-sets this on cron invocations
  if (req.headers.get("x-vercel-cron")) return true;
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization") ?? "";
    if (auth === `Bearer ${secret}`) return true;
  }
  return false;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  // Optional manual override: ?langs=fr,en  or ?n=4
  const langsParam = url.searchParams.get("langs");
  const targetLangs = (langsParam
    ? langsParam.split(",").map((s) => s.trim().toLowerCase()).filter((s) => LANGS.includes(s as Lang))
    : LANGS) as Lang[];
  if (targetLangs.length === 0) {
    return NextResponse.json({ error: "no valid langs" }, { status: 400 });
  }

  const prompt = `${SYSTEM}

Generate exactly ${targetLangs.length} polls — one for EACH of these languages:
${targetLangs.map((l) => `- ${l}: ${LANG_LABEL[l]}`).join("\n")}

Output a JSON array (no wrapper object). Each element is:
  { "lang": "<lang-code>", "question": "...", "options": ["opt1 🔥", "opt2 💀", ...] }

The polls should NOT be translations of each other. Each one should feel native and fresh — pick a different topic per language.`;

  let items: GenItem[];
  try {
    const raw = await geminiJson<unknown>(prompt, {
      temperature: 1.1,
      maxTokens: 1500,
      schemaHint: `[{ "lang": "fr|en|es|it|pt|de|ja|zh", "question": "string", "options": ["string","string",...] }]`,
    });
    if (!Array.isArray(raw)) throw new Error("Gemini did not return an array");
    items = raw.filter(isValidItem) as GenItem[];
  } catch (e) {
    return NextResponse.json(
      { error: "gemini_failed", detail: e instanceof Error ? e.message : String(e) },
      { status: 502 },
    );
  }

  if (items.length === 0) {
    return NextResponse.json({ error: "no_valid_polls" }, { status: 502 });
  }

  const supabase = getAdminSupabase();
  const inserted: { slug: string; lang: Lang; question: string }[] = [];
  const failed: { lang: Lang; question: string; error: string }[] = [];

  for (const it of items) {
    const slug = `ai_${it.lang}${shortHash(it.question + Date.now())}`;
    const topics = tagQuestion(it.question, it.options);
    const { error } = await supabase.from("polls").insert({
      slug,
      question: it.question.trim(),
      options: it.options.map((s) => s.trim()),
      is_seed: true,
      topics,
    });
    if (error) {
      failed.push({ lang: it.lang, question: it.question, error: error.message });
    } else {
      inserted.push({ slug, lang: it.lang, question: it.question });
    }
  }

  return NextResponse.json({
    requested: targetLangs.length,
    generated: items.length,
    inserted: inserted.length,
    polls: inserted,
    failed,
  });
}
