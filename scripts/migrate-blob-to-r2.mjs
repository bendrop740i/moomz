#!/usr/bin/env node
// One-shot: walks every row in the Supabase `tracks` table, downloads the mp3
// bytes from Vercel Blob (private — needs BLOB_READ_WRITE_TOKEN), uploads them
// to Cloudflare R2 under the same key. Idempotent: skips any key that already
// exists in R2.
//
// Run AFTER you've created the R2 bucket and dropped the credentials into
// ../.secrets.txt (same entries as upload-music.mjs). The runtime API route
// keeps falling back to Vercel Blob until R2_PUBLIC_BASE_URL is set on Vercel,
// so this migration is non-disruptive — flip the env var only once the
// dry-run shows 100% of tracks copied.
//
// Required entries in ../.secrets.txt:
//   supabase            : <supabase PAT>
//   blob_token          : <Vercel Blob R/W token>
//   r2_account_id       : <Cloudflare account id>
//   r2_access_key_id    : <R2 access key>
//   r2_secret_access_key: <R2 secret key>
//   r2_bucket           : <bucket name>
//
// Usage:
//   node scripts/migrate-blob-to-r2.mjs            # do the work
//   node scripts/migrate-blob-to-r2.mjs --dry-run  # report what would happen

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Readable } from "node:stream";
import { head } from "@vercel/blob";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";

const SECRETS_PATH = resolve(import.meta.dirname, "..", ".secrets.txt");
const SUPABASE_REF = "tpncpfatthgssttzrchu";
const CONCURRENCY = 4;
const DRY = process.argv.includes("--dry-run");

function readSecret(name) {
  const txt = readFileSync(SECRETS_PATH, "utf8");
  const re = new RegExp("^\\s*" + name + "\\s*[:=]\\s*(.+)$", "m");
  const m = txt.match(re);
  if (!m) throw new Error(`Missing ${name} in .secrets.txt`);
  return m[1].trim().replace(/^["']+|["']+$/g, "");
}

const PAT = readSecret("supabase");
const BLOB_TOKEN = readSecret("blob_token");
const R2_ACCOUNT = readSecret("r2_account_id");
const R2_KEY = readSecret("r2_access_key_id");
const R2_SECRET = readSecret("r2_secret_access_key");
const R2_BUCKET = readSecret("r2_bucket");

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_KEY, secretAccessKey: R2_SECRET },
});

async function listAllTracks() {
  const res = await fetch(`https://api.supabase.com/v1/projects/${SUPABASE_REF}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${PAT}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: "select id, title, blob_url from tracks order by created_at asc" }),
  });
  if (!res.ok) throw new Error(`Listing tracks failed: ${res.status} ${await res.text()}`);
  return res.json();
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

async function downloadFromBlob(pathname) {
  // head() returns a short-lived signed URL we can fetch with the bearer token.
  const info = await head(pathname, { token: BLOB_TOKEN });
  const resp = await fetch(info.url, {
    headers: { Authorization: `Bearer ${BLOB_TOKEN}` },
  });
  if (!resp.ok) throw new Error(`Blob fetch ${resp.status} for ${pathname}`);
  // Buffer the body so we can pass Content-Length to S3 PutObject — R2 rejects
  // chunked transfer encoding for objects without a length.
  const buf = Buffer.from(await resp.arrayBuffer());
  return { bytes: buf, contentType: resp.headers.get("content-type") || "audio/mpeg" };
}

async function migrateOne(row) {
  const key = row.blob_url;
  if (!key) return { id: row.id, status: "skip-no-key" };

  if (await r2Exists(key)) {
    return { id: row.id, key, status: "already-in-r2" };
  }

  if (DRY) {
    return { id: row.id, key, status: "would-copy" };
  }

  const { bytes, contentType } = await downloadFromBlob(key);
  await s3.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: bytes,
      ContentLength: bytes.length,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );
  return { id: row.id, key, status: "copied", bytes: bytes.length };
}

async function main() {
  const rows = await listAllTracks();
  console.log(`Found ${rows.length} tracks in DB${DRY ? " (DRY RUN)" : ""}`);

  let copied = 0;
  let already = 0;
  let failed = 0;
  let totalBytes = 0;

  for (let i = 0; i < rows.length; i += CONCURRENCY) {
    const batch = rows.slice(i, i + CONCURRENCY);
    const out = await Promise.allSettled(batch.map(migrateOne));
    for (let j = 0; j < out.length; j++) {
      const r = out[j];
      const row = batch[j];
      if (r.status === "fulfilled") {
        const v = r.value;
        if (v.status === "copied" || v.status === "would-copy") {
          copied++;
          if (v.bytes) totalBytes += v.bytes;
        } else if (v.status === "already-in-r2") {
          already++;
        }
      } else {
        failed++;
        console.error(`  FAIL ${row.id} (${row.title}):`, r.reason?.message ?? r.reason);
      }
    }
    console.log(`  ${Math.min(i + CONCURRENCY, rows.length)}/${rows.length} processed`);
  }

  console.log("");
  console.log(`Done. copied=${copied} already-in-r2=${already} failed=${failed}`);
  if (totalBytes > 0) {
    console.log(`Transferred: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
  }
  if (failed > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

// Tiny re-export so eslint doesn't complain about the unused import on some setups
void Readable;
