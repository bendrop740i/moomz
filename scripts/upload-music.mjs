#!/usr/bin/env node
// Walks C:\Users\ben76\Downloads\SUNO Downloads, dedups Suno's "(1)" variants,
// uploads each unique MP3 to Cloudflare R2, inserts into Supabase tracks table.
// Idempotent — re-run is safe. Reads creds from ../.secrets.txt.
//
// Required entries in ../.secrets.txt (one per line):
//   supabase            : <supabase PAT>
//   r2_account_id       : <Cloudflare account id>
//   r2_access_key_id    : <R2 access key>
//   r2_secret_access_key: <R2 secret key>
//   r2_bucket           : <bucket name, e.g. moomz-music>
//
// The script does NOT need R2_PUBLIC_BASE_URL — that's only for the runtime
// /api/track/[id] route. Here we only need write access via the S3 endpoint.

import { readFileSync, readdirSync, statSync, createReadStream } from "node:fs";
import { resolve, join, basename, extname } from "node:path";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";

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
const R2_ACCOUNT = readSecret("r2_account_id");
const R2_KEY = readSecret("r2_access_key_id");
const R2_SECRET = readSecret("r2_secret_access_key");
const R2_BUCKET = readSecret("r2_bucket");

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_KEY, secretAccessKey: R2_SECRET },
});

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

async function existingKeys() {
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

async function r2Exists(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    return true;
  } catch (e) {
    if (e?.$metadata?.httpStatusCode === 404 || e?.name === "NotFound") return false;
    throw e;
  }
}

async function uploadOne(filepath) {
  const title = titleFromFilename(filepath);
  const slug = slugifyForKey(title);
  const key = `tracks/${slug}.mp3`;

  // Skip if the byte already lives in R2 — keeps re-runs cheap.
  if (await r2Exists(key)) {
    return { title, blob_url: key, skipped: true };
  }

  // R2 PutObject doesn't reliably accept a Node ReadStream without
  // Content-Length, so we read the file size up front and pass the stream
  // alongside it (S3 SDK uses chunked upload internally).
  const stream = createReadStream(filepath);
  const size = statSync(filepath).size;

  await s3.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: stream,
      ContentLength: size,
      ContentType: "audio/mpeg",
      // Set at upload time so the browser + CDN cache forever — tracks are
      // immutable. The runtime route adds the redirect Cache-Control too.
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );

  return { title, blob_url: key };
}

async function main() {
  console.log(`Reading ${MUSIC_DIR}...`);
  const all = walkMp3(MUSIC_DIR);
  console.log(`Found ${all.length} mp3 files total`);

  const byTitle = new Map();
  for (const fp of all) {
    const title = titleFromFilename(fp);
    const hasSuffix = /\s\(\d+\)\.mp3$/i.test(fp);
    if (!byTitle.has(title) || (!hasSuffix && /\s\(\d+\)\.mp3$/i.test(byTitle.get(title)))) {
      byTitle.set(title, fp);
    }
  }
  console.log(`After dedup: ${byTitle.size} unique titles`);

  const existing = await existingKeys();
  console.log(`Already in DB: ${existing.size} tracks`);

  // With `--all`, attempt every local file (uploadOne() still skips when R2
  // already has the object). Without it, only files whose key isn't in the DB
  // yet — same behaviour as the legacy Vercel-Blob script.
  const allMode = process.argv.includes("--all");
  const todo = allMode
    ? [...byTitle.entries()]
    : [...byTitle.entries()].filter(([title]) => {
        const slug = slugifyForKey(title);
        const key = `tracks/${slug}.mp3`;
        return ![...existing].some((u) => u === key || u.includes(`/tracks/${slug}.mp3`));
      });
  console.log(`To upload (${allMode ? "all local" : "new to DB"}): ${todo.length}`);

  if (todo.length === 0) {
    console.log("Nothing to do — bye.");
    return;
  }

  const results = [];
  let done = 0;
  let skipped = 0;
  for (let i = 0; i < todo.length; i += CONCURRENCY) {
    const batch = todo.slice(i, i + CONCURRENCY);
    const out = await Promise.allSettled(batch.map(([, fp]) => uploadOne(fp)));
    for (const r of out) {
      if (r.status === "fulfilled") {
        if (r.value.skipped) skipped++;
        results.push({ title: r.value.title, blob_url: r.value.blob_url });
      } else {
        console.error("  FAIL:", r.reason?.message ?? r.reason);
      }
    }
    done += batch.length;
    if (results.length >= 50 || done === todo.length) {
      await insertTracks(results.splice(0));
      console.log(`  ${done}/${todo.length} processed + indexed (${skipped} skipped, already in R2)`);
    } else {
      console.log(`  ${done}/${todo.length} processed`);
    }
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
