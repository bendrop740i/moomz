# moomz — Project Context for Claude Code

## What it is
Mini SaaS gratuit : **vibe check / sondages partageables**. L'utilisateur pose une question (2-6 options, emojis 🔥💖✨), reçoit un lien court `moomz.com/abc12`, partage. Les votes s'affichent en live avec barres animées. Anti-double-vote via cookie + contrainte SQL `unique(poll_id, voter_id)`.

## Stack
- **Next.js 14** (App Router, TypeScript) + Tailwind
- **Supabase** (Postgres, free tier) — auth disabled, tables protected by RLS policies that allow public read/insert via anon key
- **Vercel** (free tier, déploiement auto sur push `main`)
- **Domaine** : `moomz.com` (registrar GoDaddy)
- Font : Space Grotesk (via next/font)
- Design : dark + glassmorphism + 3 blobs animés (pink/purple/orange)

## Important IDs & URLs
- **Repo GitHub** : https://github.com/bendrop740i/moomz (owner `bendrop740i`)
- **Vercel project** : `prj_3bZ7saBeA8bj1W3qbmtuMBOSYYyz` dans la team `team_l4uInQlamA1ObyV0J274QebL` (`bendrop740is-projects`)
- **Production URL Vercel** : moomz-*.vercel.app (SSO protection disabled, accessible publiquement)
- **Domaine custom** : moomz.com (linked au projet, DNS en cours de propagation)
- **Supabase project ref** : `tpncpfatthgssttzrchu`
- **Supabase URL** : `https://tpncpfatthgssttzrchu.supabase.co`
- **Supabase publishable (anon) key** : `sb_publishable_XgtHGO4uA5SGjcPv6I1gtQ_eIbEzOG0` (public, OK exposed)
- **Owner email** : bendrop740i@gmail.com (Vercel + GitHub + Supabase)

## File layout
```
app/
├── layout.tsx          # Space Grotesk font, animated blobs background, dark theme
├── page.tsx            # Create poll form (client component, optimistic submit)
├── globals.css         # Tailwind + blob/bar/fade animations
├── actions.ts          # Server actions: createPoll, castVote, refreshCounts
└── [slug]/
    ├── page.tsx        # Server component: fetch poll + initial counts
    └── vote-client.tsx # Client: optimistic vote, animated bars, share
lib/supabase.ts         # Lazy getSupabase() — throws if env vars missing
supabase-schema.sql     # Idempotent schema (polls, votes, RLS policies)
.env.local              # gitignored (contains NEXT_PUBLIC_SUPABASE_*)
.env.production.local   # gitignored, same vars for Vercel import
```

## Database schema
2 tables : `polls(id, slug, question, options jsonb, created_at)`, `votes(id, poll_id, option_index, voter_id, created_at, unique(poll_id, voter_id))`. RLS enabled with public read/insert policies on both.

Schema lives in `supabase-schema.sql` — idempotent (uses `if not exists` / `drop policy if exists`). Re-run safely.

## Local dev
```powershell
cd C:\Users\ben76\moomz
npm run dev    # http://localhost:3001 (port 3000 occupied by another app)
```

## Deploy
Pushes to `main` auto-deploy on Vercel. To force a redeploy : `vercel --prod` from project root (CLI installed, authenticated as `bendrop740i`).

## DNS status (as of 2026-05-18, post-cutover)
- Registrar : GoDaddy
- Nameservers : `ns45.domaincontrol.com`, `ns46.domaincontrol.com` (default GoDaddy)
- Apex `moomz.com` → A record `216.198.79.1` (Vercel's new range — old `76.76.21.21` also still works)
- `www.moomz.com` → CNAME `030303df38959843.vercel-dns-017.com` (Vercel-generated)
- ✅ **moomz.com is LIVE** as of 2026-05-18. Verified via curl HTTP 200.

## Known issues / decisions
- **GitHub PAT was leaked in chat earlier** (already revoked / should be revoked at https://github.com/settings/tokens). For future push from Claude Code, set up Git Credential Manager interactively from a real PowerShell once, OR use SSH keys, OR generate a fresh PAT (NEVER paste it in chat — drop it into a local file `.git-token` that's gitignored and never committed).
- **Supabase API key format** : we use the new `sb_publishable_xxx` format. Requires `@supabase/supabase-js@^2.50` or later. Don't downgrade.
- **Port 3000 occupied** locally → dev server runs on `3001`. Not a code issue, just the user's machine.

## Done so far
- [x] MVP shipped — create poll, vote, see results
- [x] Dark glass design + Space Grotesk + animated blob background + emoji per option
- [x] Optimistic vote with server-side count sync (no `router.refresh` dance)
- [x] moomz.com domain linked + DNS configured + HTTPS live
- [x] Dynamic OG image per poll (`app/[slug]/opengraph-image.tsx`) + home OG (`app/opengraph-image.tsx`) — rich previews when sharing links
- [x] **Realtime live counts** via Supabase Realtime subscription on `votes` table. Filter excludes the user's own voter_id (cookie-based) to avoid double-counting with the optimistic update. Requires `alter publication supabase_realtime add table votes;` to be run once in Supabase SQL editor (now part of `supabase-schema.sql`).

## What's left to do (by priority)
- [ ] Revoke any leftover GitHub PATs that were leaked in earlier chats (https://github.com/settings/tokens)
- [ ] **Pre-filled social share buttons** — WhatsApp / X / "Copy link" with prepared text
- [ ] **Poll expiration** — auto-close after N hours (optional, premium-tier hook)
- [ ] **Niche-down the landing copy** — pick one audience and tailor the homepage
- [ ] Seed 20 funny polls for the launch
- [ ] (Optional v2) Emoji reactions on top of vote
- [ ] (Optional v2) Auth (Google) so users can find their past polls
- [ ] (Optional v2) Premium tier : custom branding, unlimited polls, CSV export, longer slugs

## Session continuity
**At the end of each significant change**, update this file's "Done so far" / "What's left to do" sections so a fresh session can pick up cold. The user explicitly asked for this so a PC shutdown doesn't lose context.

## Reusable commands
```powershell
# Check deploy status
vercel ls

# Tail runtime logs
vercel logs <deployment-url>

# Force production redeploy from local
vercel --prod

# Verify Supabase REST API
curl -s "https://tpncpfatthgssttzrchu.supabase.co/rest/v1/polls?select=id&limit=1" -H "apikey: sb_publishable_XgtHGO4uA5SGjcPv6I1gtQ_eIbEzOG0"

# Check DNS propagation
nslookup moomz.com
```
