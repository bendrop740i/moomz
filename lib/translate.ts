// Free machine translation (MyMemory) — auto-translates a human-created poll
// into the other moomz locales, so a shared link reads natively in any
// language. Provider-abstracted: swap MyMemory for a better backend later
// (Cloudflare Workers AI, an LLM…) by replacing translateOne().

import { LOCALES } from "./i18n";

export type PollTranslation = { question: string; options: string[] };

const MM_ENDPOINT = "https://api.mymemory.translated.net/get";
// The `de` param raises MyMemory's free quota to ~50k words/day.
const MM_EMAIL = "hello@moomz.com";

// Translate one short string. Graceful: any failure returns the original text.
async function translateOne(text: string, from: string, to: string): Promise<string> {
  const clean = text.trim();
  if (!clean) return text;
  // Pure emoji / symbols — nothing to translate.
  if (!/\p{L}/u.test(clean)) return text;
  try {
    const url =
      `${MM_ENDPOINT}?q=${encodeURIComponent(clean)}` +
      `&langpair=${from}|${to}&de=${encodeURIComponent(MM_EMAIL)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(7000) });
    if (!res.ok) return text;
    const json = (await res.json()) as {
      responseData?: { translatedText?: string };
    };
    const out = json?.responseData?.translatedText;
    if (typeof out === "string" && out.trim() && !/\bINVALID\b|QUERY LENGTH/i.test(out)) {
      return out;
    }
  } catch {
    /* network / timeout — fall through to the original */
  }
  return text;
}

// Translate a poll's question + options into every locale except its source.
// Per-string graceful fallback — a failed string keeps its original text.
export async function translatePoll(
  question: string,
  options: string[],
  sourceLang: string,
): Promise<Record<string, PollTranslation>> {
  const targets = LOCALES.filter((l) => l !== sourceLang);
  const result: Record<string, PollTranslation> = {};
  await Promise.all(
    targets.map(async (to) => {
      const [q, ...opts] = await Promise.all([
        translateOne(question, sourceLang, to),
        ...options.map((o) => translateOne(o, sourceLang, to)),
      ]);
      result[to] = { question: q, options: opts };
    }),
  );
  return result;
}

// Translate without ever blocking poll creation longer than `capMs`. Returns
// null on timeout — the poll then simply shows in its original language.
export async function translatePollSafe(
  question: string,
  options: string[],
  sourceLang: string,
  capMs = 6000,
): Promise<Record<string, PollTranslation> | null> {
  const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), capMs));
  try {
    return await Promise.race([translatePoll(question, options, sourceLang), timeout]);
  } catch {
    return null;
  }
}
