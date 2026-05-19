// SEO slug derivation.
//
//   slugify("Pizza ananas, oui ou non ?")  →  "pizza-ananas-oui-ou-non"
//   slugify("コーヒーかお茶？")              →  ""  (caller falls back)
//
// We strip diacritics, lowercase, drop stop-words, replace runs of
// non-alphanumeric with single dash, trim leading/trailing dashes, and
// cap at ~50 chars (cut on word boundary). For CJK / non-Latin scripts
// the result is empty — callers should fall back to a short random slug.

const STOP_WORDS = new Set([
  // FR
  "le", "la", "les", "un", "une", "des", "du", "de", "ou", "et", "ce",
  "cet", "cette", "ces", "ton", "ta", "tes", "mon", "ma", "mes", "son",
  "sa", "ses", "à", "au", "aux", "en", "y", "est", "tu", "vous", "nous",
  "il", "elle", "qui", "que", "quoi", "où", "comment", "quand", "pourquoi",
  "c", "n", "d", "l", "j", "m", "t", "s", "qu", "si",
  // EN
  "the", "a", "an", "or", "and", "is", "are", "you", "your", "i", "my",
  "this", "that", "these", "those", "to", "in", "on", "at", "of", "for",
  "with", "by", "from", "as", "but", "not", "do", "does", "did", "be",
  "been", "being",
  // ES
  "el", "los", "las", "uno", "una", "y", "o", "tu", "su", "es", "son",
  "en", "de", "del", "para", "por",
  // IT
  "il", "lo", "i", "gli", "uno", "una", "e", "o", "tuo", "tua", "è",
  "sono", "di", "del", "della", "per",
  // PT
  "o", "os", "as", "um", "uma", "uns", "e", "ou", "teu", "tua", "é",
  "são", "de", "do", "da", "para", "por",
  // DE
  "der", "die", "das", "den", "dem", "ein", "eine", "und", "oder", "ist",
  "sind", "du", "dein", "deine", "im", "in", "an", "auf", "für", "von",
]);

export function slugify(text: string, opts: { maxLen?: number } = {}): string {
  const maxLen = opts.maxLen ?? 50;
  if (!text) return "";

  // Drop diacritics
  let s = text.normalize("NFD").replace(/[̀-ͯ]/g, "");
  s = s.toLowerCase();

  // Replace non-ASCII-alphanumeric with space (keeps Latin letters/digits)
  s = s.replace(/[^a-z0-9]+/g, " ");
  s = s.trim();
  if (!s) return "";

  // Drop stop-words
  const words = s.split(/\s+/).filter((w) => w && !STOP_WORDS.has(w) && w.length > 1);
  if (words.length === 0) return "";

  // Re-join with dashes
  let out = words.join("-");

  // Trim to maxLen on a word boundary
  if (out.length > maxLen) {
    out = out.slice(0, maxLen);
    const lastDash = out.lastIndexOf("-");
    if (lastDash > maxLen * 0.6) out = out.slice(0, lastDash);
  }
  out = out.replace(/^-+|-+$/g, "");
  return out;
}

// Random 4-char suffix, no ambiguous chars (no 0/o/1/l).
const SUFFIX_ALPHABET = "abcdefghijkmnpqrstuvwxyz23456789";

export function randomSuffix(len = 4): string {
  let s = "";
  for (let i = 0; i < len; i++) {
    s += SUFFIX_ALPHABET[Math.floor(Math.random() * SUFFIX_ALPHABET.length)];
  }
  return s;
}

// Build a candidate poll slug for a question. Caller is responsible for
// uniqueness (retry with a different suffix on collision).
//
//   buildPollSlug("Pizza ananas oui ou non ?")
//     → "pizza-ananas-oui-non-3xkr"
//
// If slugify gives nothing (CJK), returns just the random suffix so the
// caller can still produce a unique slug (legacy short-form).
export function buildPollSlug(question: string, lang?: string): string {
  const stem = slugify(question);
  const suffix = randomSuffix(4);
  if (!stem) {
    // CJK / unusable — prefix with lang for visual continuity with seed pattern
    return lang ? `${lang}-${suffix}-${randomSuffix(3)}` : suffix + randomSuffix(3);
  }
  return `${stem}-${suffix}`;
}
