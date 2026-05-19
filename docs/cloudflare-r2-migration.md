# Cloudflare R2 migration (music tracks)

We're moving the music storage from **Vercel Blob** to **Cloudflare R2**.

Why: R2 has **free egress** + S3-compatible API + edge CDN. Vercel Blob bills
per-GB egress on top of compute. For audio streaming (range requests, repeat
plays), R2 wins on every axis.

Architecture: bucket is **public**, fronted by a custom domain
(`music.moomz.com`). The `/api/track/[id]` route 302-redirects to that domain,
so the browser hits R2's edge directly — zero Vercel function compute or
bandwidth per play.

The runtime route auto-falls-back to the old Vercel-Blob proxy whenever
`R2_PUBLIC_BASE_URL` is not set, so the migration is non-disruptive: copy
the files first, flip the env var second, remove the fallback last.

---

## Step 1 — Create the R2 bucket on Cloudflare

1. Sign in at https://dash.cloudflare.com (use the moomz Google account).
2. Open **R2 Object Storage** (left sidebar). Enable it if first time
   (requires adding a payment method even though free tier covers us).
3. Click **Create bucket**.
   - Name: `moomz-music`
   - Location hint: `Automatic` (or pick a region closest to your listeners,
     but R2's edge distribution makes this nearly irrelevant).
4. Once created, open the bucket → **Settings** tab.

## Step 2 — Make it publicly readable via custom domain

Option A (preferred — custom domain, branded URLs):

1. **Settings → Public access → Custom Domains → Connect Domain**.
2. Enter `music.moomz.com`.
3. Cloudflare adds the CNAME automatically (since `moomz.com` is on
   Cloudflare). If it's on GoDaddy, add the CNAME shown there manually.
4. Wait ~1 min, then `curl https://music.moomz.com/` should return Cloudflare
   404 (proves DNS works; bucket is empty so 404 is normal).

Option B (faster, but uglier URL):

1. **Settings → Public access → R2.dev subdomain → Allow access**.
2. Copy the URL — looks like `https://pub-<hash>.r2.dev`.

Either way you end up with a public base URL. **Save it.** That's
`R2_PUBLIC_BASE_URL`.

## Step 3 — Create an R2 API token

1. Cloudflare dashboard → **R2 → Overview → Manage R2 API Tokens** (top-right).
2. **Create API Token**.
   - Token name: `moomz-music-rw`
   - Permissions: **Object Read & Write**
   - Specify bucket: `moomz-music`
   - TTL: forever (or rotate yearly, your call)
3. After creation you'll see four values — copy ALL FOUR, they're shown once:
   - **Access Key ID** (~32 chars)
   - **Secret Access Key** (~64 chars)
   - **Endpoint** — should match `https://<account-id>.r2.cloudflarestorage.com`
   - Account ID is in that endpoint URL.

## Step 4 — Drop the creds in `.secrets.txt`

Append to `C:\Users\ben76\moomz\.secrets.txt`:

```
r2_account_id        : <account id from the endpoint URL>
r2_access_key_id     : <Access Key ID>
r2_secret_access_key : <Secret Access Key>
r2_bucket            : moomz-music
```

(`.secrets.txt` is gitignored — never commit it.)

## Step 5 — Install the AWS S3 SDK locally (one-time)

The scripts use the AWS SDK to talk to R2's S3-compatible API.

```powershell
npm install
```

(Already added to `devDependencies` in `package.json`.)

## Step 6 — Copy existing tracks (Vercel Blob → R2)

Dry-run first to see what will happen:

```powershell
node scripts/migrate-blob-to-r2.mjs --dry-run
```

Expected output: `copied=<N> already-in-r2=0 failed=0`. If anything fails
(typically auth or network), fix and re-run — the script is idempotent
(checks R2 with `HeadObject` before each copy).

Then for real:

```powershell
node scripts/migrate-blob-to-r2.mjs
```

Verify a few tracks by opening `https://music.moomz.com/tracks/<slug>.mp3`
in the browser — should play directly.

## Step 7 — Set `R2_PUBLIC_BASE_URL` on Vercel

This is the flip-the-switch step. Once set, the runtime route stops proxying
through Vercel Blob and 302-redirects to R2 instead.

```powershell
vercel env add R2_PUBLIC_BASE_URL production
# When prompted, enter:  https://music.moomz.com
# (or your r2.dev URL)
```

Repeat for `preview` and `development` if you want the same behaviour there
(you usually do — fallback is fine in dev too).

Redeploy or wait for the next push to pick up the new env var.

## Step 8 — Verify in production

After the deploy is live:

1. Open the network tab on moomz.com, hit "Lancer la radio".
2. Look at the request to `/api/track/<id>`. It should respond **302** with
   `Location: https://music.moomz.com/tracks/<slug>.mp3`.
3. The next request should go straight to `music.moomz.com` and stream.
4. `Cache-Control: public, max-age=86400, immutable` should be on both the
   redirect AND the audio response (set at upload time).

If you still see the audio streaming through `/api/track/<id>` (with the
mp3 bytes in the response body, not a 302), `R2_PUBLIC_BASE_URL` isn't set
on the deployment yet — check `vercel env ls`.

## Step 9 — (Later) drop the Vercel Blob fallback

Once you've confirmed everything works for a few days:

1. Delete the `proxyFromVercelBlob()` function from
   `app/api/track/[id]/route.ts`.
2. Remove the `head` import and the `BLOB_URL_CACHE`.
3. Remove `@vercel/blob` from `package.json` `dependencies`.
4. Delete `BLOB_READ_WRITE_TOKEN` from Vercel envs.
5. Optionally: delete the Vercel Blob store from the Vercel dashboard
   to stop any residual billing.

The `scripts/upload-music.mjs` will already be R2-only by then (the
migration we just did writes new uploads straight to R2).

---

## Future uploads

`scripts/upload-music.mjs` is now R2-only. Drop new `.mp3` files in
`C:\Users\ben76\Downloads\SUNO Downloads` and run:

```powershell
node scripts/upload-music.mjs
```

It dedups Suno's `(N)` variants, skips anything already in the DB *and*
anything already in R2 (cheap re-runs), inserts the new rows into
`public.tracks`.

## Naming convention

We keep storing the **R2 key** (`tracks/<slug>.mp3`) in the
`tracks.blob_url` column. The column name is legacy from the Vercel Blob
era — renaming it would force a code-wide migration for no real gain.
Mental model: `blob_url` = "storage key", independent of which backend
serves it.

## Cost shape

- Vercel Blob: ~$0.15/GB stored/month + $0.15/GB egress.
- R2: $0.015/GB stored/month + **$0 egress**. ~10× cheaper at rest, infinitely
  cheaper for popular content.

For our music catalog (~hundreds of MB, low egress per user, high catalog
turnover via reshuffling) this saves real money the moment we get traction.
