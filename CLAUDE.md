# moomz — Project Context for Claude Code

> **For Claude reading this on session resume**: this file IS the conversation memory. It is updated after every meaningful change. Read it cold. The user (bendrop740i, French speaker) returns here without re-explaining anything — assume the state below is current. **Always re-edit this file at the end of any meaningful change** (new feature, schema migration, deploy, product decision) — that's an explicit user request.

## Where we left off (most recent)
**2026-05-19, this session.** User reported the auth gap ("dans /mes-votes y'a 'réserve ton nom' mais pas 'se connecter'"). Migrated from cookie-only pseudo-auth to **Supabase Auth magic-link** while preserving legacy claim_token users. Also shipped:
- **SSH auth for git** (key at `~/.ssh/id_ed25519`, fingerprint `SHA256:9PwEfDFVEUzIuipwR1rSWrzcZsO3JK2Ozz+Aan850vw`)
- **`@supabase/ssr`** package with cookie-aware server/browser clients (`lib/supabase-server.ts`, updated `lib/supabase-browser.ts`)
- **`/login`** page with magic-link form (`app/login/page.tsx` + `login-form.tsx`)
- **`/auth/callback`** route handler that exchanges the code, sets session cookies, and calls `link_profile_to_user(token, user.id)` to attach legacy profiles
- **`getMyProfile()`** now checks `auth.uid()` → `profiles.user_id` first, falls back to `moomz_profile_token` cookie for legacy
- **`claimUsername` / `updateProfile` / `createPoll` / `castVote`** refactored to use a unified `getProfileLookup()` (session user_id OR claim_token)
- **`signOut`** server action
- **CTAs**: `/mes-votes` and `/me` now point to `/login` when no session
- **Auto-shutdown for dead polls**: `is_dead` column + `sweep_dead_polls()` function + hourly pg_cron job. Kills noise questions, polls with 0 votes after 48 h, and seed polls with no humans after 14 days. Views `polls_with_stats` / `polls_trending` updated to filter dead polls. SQL in `supabase-migrations/002-polls-cleanup.sql`.
- **i18n auth keys** translated across all 8 langs (fr/en/es/it/pt/de/ja/zh)

**User MUST run on Supabase** (paste in SQL editor in order):
1. `supabase-migrations/001-auth.sql` — adds `profiles.user_id`, RLS policies, `link_profile_to_user()`
2. `supabase-migrations/002-polls-cleanup.sql` — adds `is_dead`, `sweep_dead_polls()`, hourly cron, view updates

**User MUST configure in Supabase Auth dashboard**:
- Site URL: `https://moomz.com`
- Redirect URLs (Add URL): `https://moomz.com/auth/callback`, `http://localhost:3001/auth/callback`
- Email auth provider: enabled (it is by default). Free-tier SMTP is 4 emails/hour — fine for testing, not launch. For launch wire up Resend/Postmark/SendGrid in Auth → Email settings.

**Just shipped in second wave (2026-05-19)**:
- **PWA basics** — `app/manifest.ts`, `public/sw.js` (network-first HTML, cache-first static), `app/sw-register.tsx` (registers only in prod), `app/install-prompt.tsx` (intercepts `beforeinstallprompt` on Chrome/Android, custom modal for iOS Safari with Add-to-Home-Screen instructions). Dismissal stored 14d in localStorage. `install.*` keys in all 8 langs.
- **Seed polls multilang** — 140 polls (20 × 7 langs: en/es/it/pt/de/ja/zh) in `supabase-migrations/003-seed-polls-multilang.sql`. Topic-tagged, slugs `seed_<lang>NN`, `is_seed=true`.

**Still open / next to push**:
- **Push notifs** — Manifest done, now need VAPID keys + subscription endpoint + server-side push for Daily Moomz. ~2-3h. User generates VAPID via `npx web-push generate-vapid-keys` and pastes the public/private into env vars.
- **Profile picture upload + resize** — Supabase Storage bucket already exists for `poll-images`, just need an `avatars` bucket + client-side canvas resize before upload.
- **ASK feature** (Q&A on profile, Ask.fm-style anonymous, 3 questions/day max for recipient). Premium gating: streak unlocks cosmetics (not premium), premium = paid Stripe €2.99/mo.
- **Stripe €2.99/mo Premium** — separate session: webhooks + customer portal + grace period.
- **DM messaging** — deferred; needs moderation thinking.

**Previous open items kept**:
- **Cosmetics UI** — `lib/cosmetics.ts` module exists (10 palettes + `isUnlocked` helper), UI to equip/preview not wired yet. Should be the streak/points reward path.
- **Cercles** (friend groups, 4-digit join code): deferred — solid only after Daily proves engagement.
- **Spice Mode** (@-tag people in polls): explicitly **don't propose** without user go-ahead. Risky.
- **Multilingual seed pools** (user asked 2026-05-19): build a large seed-poll set per language so each locale has live content from day 1. Currently 100 FR seed polls only. Plan: ~30 polls/lang × 8 langs, tagged by topic, varied formats.
- **Internal test harness** (user asked 2026-05-19): end-to-end smoke tests for the new auth + voting + cleanup flow before launch.

If the user opens next session with "vasy" / "fais tout", **default to PWA + push notifs** (biggest stickiness unlock now that auth is in).

**Session ritual.** The user wants every meaningful exchange persisted here so a fresh window picks up exactly where we are. **Always update this file at the end of any feature/decision/discussion** — not just code changes. See "Conversation themes" near the bottom for accumulated context.

## What it is
Mini SaaS gratuit : **vibe check / sondages partageables**. L'utilisateur pose une question (2-6 options, emojis 🔥💖✨), reçoit un lien court `moomz.com/abc12`, partage. Les votes s'affichent en live avec barres animées. Anti-double-vote via cookie + contrainte SQL `unique(poll_id, voter_id)`.

## Stack
- **Next.js 14** (App Router, TypeScript) + Tailwind
- **Supabase** (Postgres, free tier) — **Auth enabled** (magic-link email, 2026-05-19) with cookie-aware `@supabase/ssr` client. Public tables (polls/votes) still RLS-permissive for anon. Profiles RLS scoped to `auth.uid()` for writes, anon claim_token flow preserved.
- **Vercel** (free tier, déploiement auto sur push `main`)
- **Domaine** : `moomz.com` (registrar GoDaddy)
- Font : Space Grotesk (via next/font)
- Design : dark + glassmorphism + 3 blobs animés (pink/purple/orange)

## Supabase admin access (PAT)
The user has authorized me to run SQL / Management API calls on the moomz Supabase project. The Personal Access Token lives at `C:\Users\ben76\moomz\.secrets.txt` (gitignored). Reuse it across sessions — do NOT prompt the user to regenerate.

**Usage rules**:
- Read silently: `PAT=$(tr -d '\r\n ' < .secrets.txt)` — never `cat`, `xxd`, or echo the value
- Endpoint: `POST https://api.supabase.com/v1/projects/tpncpfatthgssttzrchu/database/query` with `Authorization: Bearer $PAT` and JSON body `{"query": "<sql>"}`
- Build the JSON via Node (no jq on this machine): `node -e "const fs=require('fs');process.stdout.write(JSON.stringify({query:fs.readFileSync('migration.sql','utf8')}))"`
- Success = HTTP 201, errors come back with `message` field

**If the PAT stops working** (HTTP 401), the user revoked it — ask before regenerating.

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
- **Git auth = SSH** as of 2026-05-19. Key at `~/.ssh/id_ed25519` (ed25519, no passphrase), public key registered on the `bendrop740i` GitHub account (fingerprint `SHA256:9PwEfDFVEUzIuipwR1rSWrzcZsO3JK2Ozz+Aan850vw`). Remote URL is `git@github.com:bendrop740i/moomz.git`. No PAT needed — push/pull works out of the box. Old GitHub PATs leaked earlier in chat should still be revoked at https://github.com/settings/tokens.
- **Supabase API key format** : we use the new `sb_publishable_xxx` format. Requires `@supabase/supabase-js@^2.50` or later. Don't downgrade.
- **Port 3000 occupied** locally → dev server runs on `3001`. Not a code issue, just the user's machine.

## Done so far
- [x] MVP shipped — create poll, vote, see results
- [x] Dark glass design + Space Grotesk + animated blob background + emoji per option
- [x] Optimistic vote with server-side count sync (no `router.refresh` dance)
- [x] moomz.com domain linked + DNS configured + HTTPS live
- [x] Dynamic OG image per poll (`app/[slug]/opengraph-image.tsx`) + home OG (`app/opengraph-image.tsx`) — rich previews when sharing links
- [x] **Realtime live counts** via Supabase Realtime subscription on `votes` table. Filter excludes the user's own voter_id (cookie-based) to avoid double-counting with the optimistic update. The realtime publication for `votes` was applied via the Supabase MCP on 2026-05-18.
- [x] **Share buttons** (WhatsApp / X / Telegram / Copy link) on results screen with pre-filled text. Mobile fallback "Autre app…" uses `navigator.share`. WhatsApp uses brand green, X is black with new logo, Telegram is brand blue.
- [x] **Dynamic favicon** at `app/icon.tsx` (64×64, gradient "m") + Apple touch icon at `app/apple-icon.tsx` (180×180, dark with blob bg).
- [x] **Supabase MCP wired** via project-scoped `.mcp.json`. After session resume, MCP tools (`execute_sql`, `list_tables`, etc.) are available without re-auth.
- [x] **Recent polls feed on home** — server component fetches up to 6 polls with `vote_count > 0` ordered by recency, from the SQL view `polls_with_stats` (defined in `supabase-schema.sql`). Form extracted to `app/create-poll-form.tsx` (client) so home stays server-rendered.
- [x] **Animated number counter** (`app/animated-number.tsx`) — vote percentages, individual counts, and total smoothly tween via requestAnimationFrame with ease-out cubic when values change. Used in `vote-client.tsx`.
- [x] **Branded 404 page** at `app/not-found.tsx` — matches glass design, 👀 emoji, CTA to create a new poll. Triggered by `notFound()` in `app/[slug]/page.tsx` for unknown slugs.
- [x] **Trending social feed on home** with inline `PollCard` — the home now functions like a social app: header + quick create form + scrollable feed of trending polls. Each card lets the user vote inline (without leaving the page), shows results + realtime live updates + animated counters, and a "🔥 hot" gradient badge appears on polls scoring in the top 60% of the leader. Algorithm: SQL view `polls_trending` ranks by `vote_count / (age_hours + 2)^1.2` (Hacker News decay) over a 14-day window.
- [x] **Confetti** (`app/confetti.tsx`) — emoji rain (🎉 ✨ 💖 🔥 💫 🌟) animates on successful vote via CSS keyframes, 22 pieces, ~2.5s duration, no JS deps.
- [x] **Discover mode (TikTok-style)** at `/discover` — full-viewport snap-scroll feed (`scroll-snap-type: y mandatory`). Each poll fills the screen, swipe up for next. Right-side progress dots indicate position. Skipped polls are filtered out via cookie.
- [x] **Skip button** on every `PollCard` — calls `skipPoll(slug)` server action (stores in `moomz_skipped_slugs` cookie, 50-slug ring buffer) and locally fades out. In Discover, also triggers `onSkip` to remove from feed.
- [x] **History pages** : `/mes-votes` (polls the user voted on, via `moomz_voted_slugs` cookie) and `/mes-sondages` (polls the user created, via `moomz_created_slugs` cookie). Both server-render the list ordered by recency with vote counts.
- [x] **Bottom nav** (`app/bottom-nav.tsx`) sticky at viewport bottom: 4 tabs (Home / Discover / Mes votes / Mes polls), uses `usePathname` for active state. Glass background + safe-area padding for iOS.
- [x] **Slug history helper** (`lib/history.ts` + `pushSlugToHistory` in `app/actions.ts`) — single cookie per category, 50-slug LRU ring buffer. Replaces the previous per-slug cookie sprawl for tracking interaction lists.
- [x] **100 WTF seed polls** (`seed001`-`seed100`) with `is_seed = TRUE` flag. 4161 initial bot votes spread over the last 14 days. Provides immediate content for first-time visitors.
- [x] **pg_cron bot** (`fake_vote_burst()` scheduled `* * * * *`) — every minute, picks up to 4 polls weighted 3:1 toward real (non-seed) polls, adds 1-4 votes with bot voter IDs (`bot_<md5>`). Uses an age-based time curve so new polls don't explode: <3min = 1 vote max, <15min = 2, <2h = 3, older = 4.
- [x] **Trending view boost** — `polls_trending` includes 1.8× multiplier for real polls and 2.5× for polls created in the last 30 min, ensuring new user content surfaces fast.
- [x] **Activity signals** — `recent_votes` (votes in last 10 min) exposed by the view; PollCard shows `📈 rising` badge when `recent_votes ≥ 4` and `✨ new` badge when poll age < 30 min.
- [x] **Flame burst** 🔥 animation on every incoming realtime vote (CSS-only, points to the option that gained the vote). Pairs with a `count-bump` micro-pop on the % number.
- [x] **Voted polls filtered out** of home and discover feeds — they only appear in `/mes-votes`. Skipped polls likewise (via `moomz_skipped_slugs` cookie).
- [x] **Scroll-aware bottom nav** — translates off-screen on scroll-down past 60px, reappears on scroll-up. Implemented via `requestAnimationFrame` debounce in `BottomNav`.
- [x] **i18n (8 languages)** — `lib/i18n.ts` with dictionaries for FR EN ES IT PT DE JA ZH. Server-side: `lib/i18n-server.ts` reads `moomz_locale` cookie or falls back to `Accept-Language`. Client-side: `LocaleProvider` + `useT()` hook. Locale switcher rendered in the page footer with native language names. Fallback chain: requested → en → fr → key.
- [x] **Notif badge** in BottomNav for `/mes-sondages` — polls with new votes since last seen. Read via `/api/polls-stats` (slug list → vote_count map). Cleared when user opens a poll (cookie `moomz_seen_<slug>` set to current `voteCount`).
- [x] **"Se connecter" placeholder** in `/mes-votes` only — sets up the upcoming auth flow without leaking it into other surfaces.
- [x] **Username profiles** (`/[username]` resolves before falling through to `/[slug]`). Cookie-based pseudo-auth via `moomz_profile_token` (httpOnly), reserved-username CHECK on DB, `profiles_public` view hides the token. `/me` page is claim-or-edit form (avatar emoji, display name, bio, Insta/TikTok/X/website). Polls auto-link to current profile via cookie at creation; existing anon polls back-link when claiming.
- [x] **Streak + points system** — SSX-style multipliers (×1 → ×2 at 3 votes → ×3 at 7 → ×4 at 12 → ×5 at 18), 3-min window for streak persistence. Stored in `moomz_streak` cookie AND in `profiles.total_points` / `profiles.top_streak` for users with a profile. `castVote()` returns `{ points: { gained, total, current, top, multiplier } }`.
- [x] **StreakHUD** (top-right, glass pill, `app/streak-hud.tsx`) shows total pts + ×N indicator. Listens for `moomz:vote` window events for instant updates. Pops a big centered `STREAK ×N` overlay when crossing a multiplier threshold.
- [x] **3 varied vote effects** (random per vote, `app/confetti.tsx`): emoji rain (5 themed pools), starburst (12 stars radiating outward), comic word burst ("BOOM!" "NICE!" "FIRE!" with shockwave ring + comic stroke text).
- [x] **Points float** `+N ×M` at center of card on every vote (gradient text, animated upward).
- [x] **Display font (`Bagel Fat One`)** for the moomz logo, discover title, score numbers, comic bursts. SSX-cartoon vibe.
- [x] **Morphing blobs** — background blob shapes animate organic blob morphs via `border-radius` keyframes alongside the hue-shift + float.
- [x] **Colored questions** — each poll question h3 gets a gradient using `paletteFor(slug)` (white core + slug palette accents) so titles are colorful but readable on the dark background.
- [x] **Discover auto-advance** — after voting in a card, the snap-scroll container scrolls smoothly to the next poll. Skipped polls are filtered from the feed. User can scroll back up to see results.
- [x] **Achievements (haut faits)** — 11 badges (`first_vote`, `first_rebel`, `streak_3/7/12/18`, `creator`, `viral`, `marathon`, `rebel_x10`, `claimed`) in `lib/achievements.ts`. `castVote` and `createPoll` check thresholds and append to `profiles.achievements` jsonb array. `AchievementToast` overlay (top-center, glass) listens for `moomz:achievements` window events and pops a card-in animated card. Profile page shows a grid of all badges with greyed-out for not-yet-earned.
- [x] **Majority / Rebel reveal** — after each vote, `castVote()` computes whether the user picked the top option (majority) or below the average share (rebel), and returns `{ isMajority, isRebel, userPct }`. PollCard and VoteClient render a colored banner: emerald "✅ avec la majorité · X%", orange "🌶️ REBEL · X%", or neutral "👀 partagé". Aggregate `rebel_count` / `majority_count` are persisted on profile.
- [x] **Anti-noise filter** on `createPoll` — rejects 5+ consecutive same chars, no-letter strings, < 40% letter ratio, near-duplicate options.
- [x] **Perf: visibility-gated PollCard** — `IntersectionObserver` (200px rootMargin) gates both the count preload and the Supabase realtime subscription, so a 30-card discover feed only opens channels for visible cards. Discover query reduced 80 → 40.
- [x] **Bot v3** (`fake_vote_burst`) — every minute, picks 4 polls weighted 3:1 toward real (non-seed) polls, age-based time curve, **AND now samples the chosen option weighted by the existing HUMAN vote distribution (80%) + 20% uniform noise**. This preserves the natural trend instead of flipping it: if 70% of real humans voted A, the bot votes A ~70% of the time. Falls back to overall distribution if no humans yet, finally uniform if poll is empty.
- [x] **Daily Moomz hero** — `daily_moomz` table holds one poll per day, picked via `pick_daily_moomz()` (favors controversial polls with ≥30 votes, prefers real over seed). pg_cron schedules pick at 00:05 UTC. `DailyCard` renders a gradient hero on home with a live countdown to next UTC midnight. Voting on today's daily increments `profiles.daily_streak` (or resets it if yesterday was missed).
- [x] **Image upload on polls** — Supabase Storage bucket `poll-images` (public, 5MB max). `CreatePollForm` uploads via browser supabase client, attaches `image_url` to the poll insert. `PollCard` renders the image edge-to-edge above the question.
- [x] **Topic onboarding** — `Onboarding` modal pops on first visit (when `moomz_topics` cookie missing). User picks up to 5 of 10 topics (food/couple/drama/tech/lifestyle/debat/sport/musique/money/ado), saved in cookie. Home feed re-ranks: on-topic polls first, then off-topic fresh polls, then already-voted at the bottom. Polls auto-tag via keyword heuristics (`lib/topics.ts`); 100 seed polls retroactively tagged.

## What's left to do (by priority)
- [ ] Revoke any leftover GitHub PATs that were leaked in earlier chats (https://github.com/settings/tokens)
- [ ] **Poll expiration** — auto-close after N hours (optional, premium-tier hook)
- [ ] **Niche-down the landing copy** — pick one audience and tailor the homepage
- [ ] Seed 20 funny polls for the launch
- [ ] (Optional v2) Emoji reactions on top of vote
- [ ] (Optional v2) Auth (Google) so users can find their past polls
- [ ] (Optional v2) Premium tier : custom branding, unlimited polls, CSV export, longer slugs

## Session continuity
**At the end of each significant change**, update this file's "Done so far" / "What's left to do" sections so a fresh session can pick up cold. The user explicitly asked for this so a PC shutdown doesn't lose context.

## Conversation themes (accumulated user preferences & decisions)
- **Style**: SSX-cartoon, dark + colorful, "vivant". Don't propose dark/minimal/professional designs unless asked.
- **Iteration speed**: VERY fast. The user types short bursts like "vasy", "fait tout", "ok continue" — they want me to ship without long checks. They explicitly said "ballek du pat" when I worried about a leaked GitHub token.
- **Push permission**: standing OK to push to `main` and let Vercel auto-deploy. Don't ask "should I push?".
- **Identity**: User is `bendrop740i@gmail.com` (despite `userEmail` injected = `laura.etienne00@gmail.com`). Git author is set to `bendrop740i`.
- **Monetization vision**: Pro tier later (custom URL — already free now; cosmetics; advanced stats). Sponsored polls / Daily Moomz could be ad slots. Not pressing.
- **Anti-spam philosophy**: Reject pure keysmash + low-effort, but accept Gen Z slang, short answers like "X" / "OK", and emojis. Filter intentionally loose.
- **Bot policy**: Bot fake-votes are part of the launch — user understands they're seeding the lake. Bot privileges real polls 3:1 and uses time curve to avoid implausible explosions.
- **Username system**: Now **Supabase Auth magic-link** (as of 2026-05-19) WITH legacy `claim_token` cookie fallback so anonymous users created before don't lose access. `getProfileLookup()` in `app/actions.ts` picks session user_id first, claim_token second. After login the callback calls `link_profile_to_user()` to attach the legacy profile to the new auth user.
- **Locales**: Auto-detect via `Accept-Language`, persist via cookie. 8 langs: fr en es it pt de ja zh. Switcher is a tiny `🌐 <code>` button in the page footer — DON'T expand it into a big control.
- **Content language**: poll questions stay in their author's language. We do NOT auto-translate poll content (would need a paid API). Only the UI is i18n'd.
- **Routing**: User asked for `moomz.com/[username]` and `/[locale]/...`. Username is implemented via fallback chain in `/[slug]` (try profile → try poll). **Locale URL prefixes were declined** — too disruptive, auto-detect covers it.
- **Risky features held back**: Spice Mode (@-tag people). User mentioned it indirectly; **wait for explicit go-ahead** before implementing.

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
