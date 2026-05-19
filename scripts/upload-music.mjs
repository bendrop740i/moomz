#!/usr/bin/env node
// Walks C:\Users\ben76\Downloads\SUNO Downloads, dedups Suno's "(1)" variants,
// uploads each unique MP3 to Vercel Blob, inserts into Supabase tracks table.
// Idempotent — re-run is safe. Reads creds from ../.secrets.txt.

import { readFileSync, readdirSync, statSync, createReadStream } from "node:fs";
import { resolve, join, basename, extname } from "node:path";
import { put } from "@vercel/blob";

const SECRETS_PATH = resolve(import.meta.dirname, "..", ".secrets.txt");
const MUSIC_DIR = "C:\\Users\\ben76\\Downloads\\SUNO Downloads";
const SUPABASE_REF = "tpncpfatthgssttzrchu";
const CONCURRENCY = 6;

function readSecret(name) {
  const txt = readFileSync(SECRETS_PATH, "utf8");
  const re = new RegExp("^\\s*" + name + "\\s*[:=]\\s*(.+)$", "m");
  const m = txt.match(re);
  if (!m) throw new Error(`Missing ${name} in .secrets.txt`);
  return m[1].trim().replace(/^["']+|["']+$/g, "");
}

const PAT = readSecret("supabase");
const BLOB_TOKEN = readSecret("blob_token");

function walkMp3(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walkMp3(full));
    else if (s.isFile() && extname(entry).toLowerCase() === ".mp3") out.push(full);
  }
  return out;
}

function titleFromFilename(filename) {
  // "Argent dans la Tête (1).mp3" -> "Argent dans la Tête"
  // "After Midnight Circuit.mp3" -> "After Midnight Circuit"
  return basename(filename, ".mp3").replace(/\s*\(\d+\)$/, "").trim();
}

function slugifyForKey(title) {
  return title
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function existingBlobUrls() {
  const res = await fetch(`https://api.supabase.com/v1/projects/${SUPABASE_REF}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${PAT}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: "select blob_url from tracks" }),
  });
  if (!res.ok) throw new Error(`Fetching existing tracks failed: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  return new Set(rows.map((r) => r.blob_url));
}

async function insertTracks(rows) {
  if (rows.length === 0) return;
  const values = rows
    .map((r) => {
      const t = r.title.replace(/'/g, "''");
      const u = r.blob_url.replace(/'/g, "''");
      return `('${t}','${u}')`;
    })
    .join(",");
  const sql = `insert into tracks (title, blob_url) values ${values} on conflict (blob_url) do nothing`;
  const res = await fetch(`https://api.supabase.com/v1/projects/${SUPABASE_REF}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${PAT}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: sql }),
  });
  if (!res.ok) throw new Error(`Insert failed: ${res.status} ${await res.text()}`);
}

async function uploadOne(filepath) {
  const title = titleFromFilename(filepath);
  const slug = slugifyForKey(title);
  const pathname = `tracks/${slug}.mp3`;
  const stream = createReadStream(filepath);
  const blob = await put(pathname, stream, {
    access: "public",
    token: BLOB_TOKEN,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "audio/mpeg",
  });
  return { title, blob_url: blob.url };
}

async function main() {
  console.log(`Reading ${MUSIC_DIR}...`);
  const all = walkMp3(MUSIC_DIR);
  console.log(`Found ${all.length} mp3 files total`);

  // Dedup: prefer file without "(N)" suffix; fall back to first encountered.
  const byTitle = new Map();
  for (const fp of all) {
    const title = titleFromFilename(fp);
    const hasSuffix = /\s\(\d+\)\.mp3$/i.test(fp);
    if (!byTitle.has(title) || (!hasSuffix && /\s\(\d+\)\.mp3$/i.test(byTitle.get(title)))) {
      byTitle.set(title, fp);
    }
  }
  console.log(`After dedup: ${byTitle.size} unique titles`);

  const existing = await existingBlobUrls();
  console.log(`Already in DB: ${existing.size} tracks`);

  const todo = [...byTitle.entries()].filter(([title]) => {
    const slug = slugifyForKey(title);
    const expectedUrl = `https://${slug}`; // can't predict exact host, so check more loosely below
    return ![...existing].some((u) => u.includes(`/tracks/${slug}.mp3`));
  });
  console.log(`To upload: ${todo.length}`);

  if (todo.length === 0) {
    console.log("Nothing to do — bye.");
    return;
  }

  const results = [];
  let done = 0;
  for (let i = 0; i < todo.length; i += CONCURRENCY) {
    const batch = todo.slice(i, i + CONCURRENCY);
    const out = await Promise.allSettled(batch.map(([, fp]) => uploadOne(fp)));
    for (const r of out) {
      if (r.status === "fulfilled") results.push(r.value);
      else console.error("  FAIL:", r.reason?.message ?? r.reason);
    }
    done += batch.length;
    if (results.length >= 50 || done === todo.length) {
      await insertTracks(results.splice(0));
      console.log(`  ${done}/${todo.length} uploaded + indexed`);
    } else {
      console.log(`  ${done}/${todo.length} uploaded`);
    }
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
