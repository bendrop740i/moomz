// Bulk-insert seed polls from data/*.json into Supabase.
// Idempotent: ON CONFLICT (slug) DO NOTHING.
//
//   node scripts/seed-polls/insert.mjs            # all langs
//   node scripts/seed-polls/insert.mjs --lang fr  # one lang
//   node scripts/seed-polls/insert.mjs --dry      # don't hit the DB
//
// Reads PAT from .secrets.txt (must contain "sbp_xxx..." anywhere).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const DATA_DIR = path.join(__dirname, "data");
const PROJECT_REF = "tpncpfatthgssttzrchu";

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const langArg = (() => {
  const i = args.indexOf("--lang");
  return i >= 0 ? args[i + 1] : null;
})();

function readPat() {
  const txt = fs.readFileSync(path.join(ROOT, ".secrets.txt"), "utf8");
  const m = /sbp_[A-Za-z0-9_]+/.exec(txt);
  if (!m) throw new Error("No sbp_ token in .secrets.txt");
  return m[0];
}

const STOP = new Set([
  "le","la","les","un","une","des","du","de","ou","et","ce","cet","cette","ces",
  "ton","ta","tes","mon","ma","mes","son","sa","ses","à","au","aux","en","y","est",
  "tu","vous","nous","il","elle","qui","que","quoi","où","comment","quand","pourquoi",
  "the","a","an","or","and","is","are","you","your","i","my","this","that","these",
  "those","to","in","on","at","of","for","with","by","from","as","but","not","do",
  "el","los","las","uno","una","es","son","del","para","por","tuo","tua","è",
  "il","lo","i","gli","della","della","der","die","das","den","dem","ein","eine",
  "und","oder","ist","sind","dein","deine","im","an","auf","für","von",
]);

function slugify(text, maxLen = 50) {
  let s = String(text).normalize("NFD").replace(/[̀-ͯ]/g, "");
  s = s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (!s) return "";
  const words = s.split(/\s+/).filter((w) => w && !STOP.has(w) && w.length > 1);
  if (words.length === 0) return "";
  let out = words.join("-");
  if (out.length > maxLen) {
    out = out.slice(0, maxLen);
    const i = out.lastIndexOf("-");
    if (i > maxLen * 0.6) out = out.slice(0, i);
  }
  return out.replace(/^-+|-+$/g, "");
}

function buildSlug(lang, q, index) {
  const stem = slugify(q);
  const idx = String(index).padStart(3, "0");
  if (!stem) return `seed-${lang}-${idx}`;
  return `${stem}-${lang}-${idx}`;
}

async function sql(pat, q) {
  const res = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${pat}`, "content-type": "application/json" },
    body: JSON.stringify({ query: q }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 600)}`);
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function esc(s) {
  return String(s).replace(/'/g, "''");
}

function jsonLit(obj) {
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
}

function arrLit(arr) {
  // Postgres text[]: ARRAY['a','b']
  if (!arr || arr.length === 0) return "ARRAY[]::text[]";
  return `ARRAY[${arr.map((s) => `'${esc(s)}'`).join(",")}]::text[]`;
}

async function insertBatch(pat, rows) {
  // Build a single INSERT for the batch
  if (rows.length === 0) return { inserted: 0 };
  const values = rows
    .map(
      (r) =>
        `('${esc(r.slug)}', '${esc(r.question)}', ${jsonLit(r.options)}, ${arrLit(r.topics)}, '${esc(r.lang)}', ${jsonLit(r.explainer)}, true)`,
    )
    .join(",\n");
  const q = `insert into polls (slug, question, options, topics, lang, explainer, is_seed)
values
${values}
on conflict (slug) do nothing
returning slug;`;
  const res = await sql(pat, q);
  return { inserted: Array.isArray(res) ? res.length : 0, raw: res };
}

function* walkJson(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkJson(full);
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      yield full;
    }
  }
}

// Lang resolution: prefer parent dir name ("data/fr/01-food.json" → "fr"),
// fall back to file basename ("data/fr.json" → "fr").
function langFor(filePath) {
  const parent = path.basename(path.dirname(filePath));
  if (/^[a-z]{2}$/.test(parent)) return parent;
  return path.basename(filePath, ".json");
}

function loadDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    throw new Error(`No data dir at ${DATA_DIR}.`);
  }
  // index counter per-lang so slugs stay stable across multiple files.
  const idxByLang = new Map();
  const out = [];
  const files = [...walkJson(DATA_DIR)].sort(); // stable order
  for (const f of files) {
    const lang = langFor(f);
    if (langArg && lang !== langArg) continue;
    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(f, "utf8"));
    } catch (e) {
      console.error(`skipping ${f} — invalid JSON: ${e.message}`);
      continue;
    }
    if (!Array.isArray(parsed)) {
      console.error(`skipping ${f} — not an array`);
      continue;
    }
    for (const p of parsed) {
      if (!p || typeof p !== "object") continue;
      const idx = (idxByLang.get(lang) ?? 0) + 1;
      idxByLang.set(lang, idx);
      const slug = buildSlug(lang, p.q ?? "", idx);
      out.push({
        lang,
        slug,
        question: String(p.q ?? "").trim(),
        options: Array.isArray(p.o) ? p.o.map((s) => String(s).trim()).filter(Boolean) : [],
        explainer: p.e && typeof p.e === "object" ? p.e : null,
        topics: Array.isArray(p.t) ? p.t.slice(0, 3) : [],
      });
    }
  }
  return out;
}

async function main() {
  const all = loadDataFiles();
  console.log(`loaded ${all.length} polls across files`);

  // Basic validation
  const bad = all.filter(
    (r) => !r.question || r.options.length < 2 || r.options.length > 6 || !r.slug,
  );
  if (bad.length > 0) {
    console.error(`⚠ ${bad.length} invalid rows — first 5:`);
    bad.slice(0, 5).forEach((b) => console.error("  ", b.slug, "→", b.question));
  }
  const rows = all.filter((r) => r.question && r.options.length >= 2 && r.options.length <= 6 && r.slug);
  console.log(`valid: ${rows.length}`);

  if (dry) {
    console.log("--- DRY RUN — first 3 rows:");
    console.log(JSON.stringify(rows.slice(0, 3), null, 2));
    return;
  }

  const pat = readPat();
  const BATCH = 40;
  let total = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    try {
      const { inserted } = await insertBatch(pat, batch);
      total += inserted;
      process.stdout.write(`\rinserted ${total}/${rows.length}`);
    } catch (e) {
      console.error(`\nbatch ${i / BATCH} failed:`, e.message);
    }
  }
  process.stdout.write("\n");
  console.log(`done — ${total} new polls inserted (rest were duplicates)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
