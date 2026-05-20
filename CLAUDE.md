# moomz — Project Context for Claude Code

> **For Claude on session resume**: this file IS the project memory. Read it cold — the user (bendrop740i, French speaker) returns without re-explaining. **Update it at the end of any meaningful change** (feature, migration, deploy, decision). Keep it tight: compress the changelog, don't let it bloat back to a blow-by-blow log.

## Where we left off (most recent)
**2026-05-20, mega-session: viral loop + nav + security + 1191 polls.** Ran across many parallel agents (a second Claude window worked the nav header/`bottom-nav-v2`/`/vs` in parallel — light merge overlap, handled). Four commits pushed: `f827679` `d02b21b` `33e7d07` `fbbbbc1`.

- **Viral loop (`f827679`)** — lift the voter→creator rate. After-vote create CTA on the dopamine peak with curiosity-hook copy (`vote-client.tsx`, `poll-card.tsx`), 3 one-tap prefilled poll suggestions, "your turn" interstitial every 6 polls in Discover, 1-tap option presets in the create form, sticky condensed poll bar on the poll page (anchors the question on scroll). Analytics wired: `vote` / `poll_created` / `create_cta_click` via `lib/analytics.ts`. New `lib/viral-copy.ts` (8-lang curiosity copy + suggestion pool). Levers #1-4/#6 of `docs/next-sessions.md`; #5 (visible creation reward) deferred — needs `createPoll` to return instead of redirect.
- **CRITICAL feed-empty fix (`d02b21b`)** — users "couldn't vote on others' polls". Root cause: `polls_trending` lost its `last_vote_at` column when migration 016 recreated the view → `trending-feed.tsx` + `discover/page.tsx` SELECTs 400'd → feeds rendered empty. Migration `025-restore-trending-last-vote-at.sql` restores it (applied live, verified 40 real rows). Also: `/create` + `/search` routes created (bottom nav linked to 404s), music mini-player made collapsible to a corner pill, `/explore` + `/me` turned into nav hubs.
- **Security hardening (`33e7d07` + migration 027)** — pre-push scan found CRITICAL pre-existing holes: anon could `SELECT profiles.claim_token` (auth secret → account takeover) and `UPDATE` any profile. Fix: all anon claim_token lookups now route through the existing SECURITY DEFINER `resolve_profile_id()` RPC (`getProfileLookup`/`applyLookup` in actions.ts, `getMyProfile`, ask `getOwnedProfileId`, `/api/ask-pending`) — the anon client never reads the secret column. `PrivateProfile` no longer carries `claim_token`. Migration `027-profiles-column-lockdown.sql` (applied live AFTER the deploy went green): revokes anon/authenticated `SELECT` on `claim_token` + `UPDATE` on escalation columns (`user_id`, `is_bot`, `tier`, `is_verified`, `claim_token`) via column-level grants, sets `profiles_public` to `security_invoker`. Verified live with the anon key: `?select=claim_token` → permission denied; normal selects, `profiles_public`, and the RPC all still work. SECURITY DEFINER funcs unaffected (run as owner). **Still open from the scan (lower severity, not done): #4 JSON-LD `</script>` not escaped (~35 sites, stored-XSS, MEDIUM); #5 gameplay RPCs anon-executable (mitigated by #1).**
- **Content (`fbbbbc1`)** — +1191 FR seed polls inserted live (11 themed packs `scripts/seed-polls/data/fr/10..20-bulk.json`: food/couple/friends/drama/money/tech/lifestyle/sport/pop-culture/would-you-rather/voyage), every poll topic-tagged so the existing interlinking gives voters context — keeps Discover always fresh. `/explore` cleaned up: removed the noisy per-language keyword-page-count section, reorganized into clear sections (moomz polls lead, then templates/quiz/compare, free tools, read & inspire, your space).
- **Locale switcher** — user reported language-change kicks you to home. Investigated: `locale-switcher.tsx` does `setLocale()` (cookie only, no redirect) + `router.refresh()` — code is correct, stays on page. Likely a stale `public/sw.js` service-worker cache or the user was already on home. No code change made.
- **`docs/next-sessions.md`** — two ready-to-launch briefs: SEO localization (es/it/pt/de/ja/zh) and the viral-loop levers. Recommended order: viral before SEO (SEO sandboxed ~3-6 months on a 2-day-old domain).

## What it is
Free mini-SaaS: **vibe-check / shareable polls**. User asks a question (2-6 emoji options), gets a short link `moomz.com/abc12`, shares it; votes show live with animated bars. Anti-double-vote via cookie + SQL `unique(poll_id, voter_id)`. Audience: Gen Z, mobile-first. Also a large SEO surface (~2000+ routes) to pull Google traffic.

## Stack
- **Next.js 14** App Router + TypeScript + Tailwind. Design: dark glassmorphism, SSX-cartoon vibe, 3 animated blobs, fonts Space Grotesk + Bagel Fat One.
- **Supabase** (Postgres, free tier) — Auth = magic-link email via `@supabase/ssr` cookie-aware client. Legacy anon `claim_token` flow still supported.
- **Vercel** (free tier) — auto-deploy on push to `main`. CLI **not** installed locally (use the Vercel MCP or dashboard).
- **Resend** — SMTP for auth emails. **Cloudflare R2** — planned music storage (code ready, not cut over).
- Domain `moomz.com` (registrar GoDaddy, live since 2026-05-18).

## Current state (2026-05-20)
Live and working: core poll/vote/share, home trending feed, Discover (TikTok snap-scroll), gamification (streak/points/achievements/Daily Moomz/cosmetics), profiles + ASK Q&A, 8-lang i18n, PWA, WorldVibes map, music player, a huge SEO content layer, and a bot that keeps feeds warm.
**Active workstream: M1 monetization** (see below).

## Current focus — M1 monetization (coins economy)
**Strategy (decided):** virtual **coins** as the backbone. Faucets = streaks, Daily, achievements, won predictions. Sinks = poll boost, predictions, cosmetics. Roadmap M1 foundation → M2 predictions (bet coins; legal — no cashout) → M3 poll boost + coin shop → M4 Stripe (buy coins). SEO-page ads = parallel passive revenue. NGL-style ASK de-anonymizing **deliberately rejected** (FTC fined NGL $5M).

**Shipped & live:** parametric achievement engine — `lib/achievements/{families.ts,engine.ts,i18n.ts}`, 50 families × tiers → **418 achievements**, 8-lang via `{n}`/`{topic}` templates. DB migrations 016/016b/017/018/019 applied: ~25 counter columns on `profiles`, `coin_transactions` ledger (idempotent), `achievement_defs` catalogue (418 rows), RPCs `apply_coins` (spend-only), `claim_achievements` (server re-validates — client can't cheat), `get_achievement_stats`, `profile_metrics`. The vote→achievements→coins loop runs live in `castVote` + `createPoll` (try/catch — never blocks). Page `/haut-faits` shows progress; StreakHUD shows 🪙 balance. **Counter tracking (mig 019+020):** `apply_vote_streak` v2 tracks night/dawn/weekend votes + `active_days` + `topic_votes` + rebel-streak (new `p_topics` param); `createPoll` tracks `topic_polls`; trigger `votes_bump_author` keeps every poll author's `received_votes_total`/`best_poll_votes`; trigger `ask_questions_counters` tracks `questions_received`/`questions_answered`; `askQuestion` + `recordQuizDone` use the guarded `increment_profile_counter` RPC (whitelisted, identity-resolved). `/haut-faits` claims earned-but-unclaimed achievements on open (universal sync, alongside `castVote`). **M1 effectively complete** — only `polls_seen`/explorer deferred (low value, fuzzy); `spender`/`decorator`/`booster`/prediction families wait on M2/M3 features.

**M2 — predictions: shipped & live.** Bet coins on a poll outcome (coin sink + viral hook; legal — no cashout, free coins playable). Migrations 021/022: `predictions` table, `place_prediction` RPC (spend + validate, identity-resolved), `resolve_predictions` cron (`resolve_predictions_job`, every 15 min) — settles 24h after poll creation, payout = `stake / winnerShare` clamped ×1.2–×8, refund if <10 votes; `get_achievement_stats` now also returns `profile_id`. `placePrediction` server action + `app/[slug]/prediction-widget.tsx` (8-lang, mounted on the poll page below the vote) — pick option + stake chip (10/25/50/100), shows your bet + win/lose/refund state. Wires the `predictions`/`oracle`/`prophet`/`highroller` achievement families. Verified end-to-end.

**M3 — poll boost: shipped & live.** Migration 023: `boost_poll` RPC — 150 coins → 24h boost (owner-only, validated, identity-resolved; re-boost extends). The `polls.boost_until` column + the 5× factor in `polls_trending` already existed. `boostPoll` server action + `app/[slug]/boost-button.tsx` (8-lang) shown to the poll owner below the prediction widget. Wires the `booster` achievement family. Verified end-to-end.

**M3 — coin shop: shipped & live.** Migration 024: `profiles.cosmetics_owned text[]` + `buy_cosmetic` RPC (server-priced CASE, identity-resolved); `get_achievement_stats` now returns `cosmetics_owned`. Page `/boutique` + `boutique-grid.tsx` (8-lang) — buy any of the 7 paid palettes with coins (200–1500 🪙) as an alternative to the points/streak grind. `lib/cosmetics.ts` got a `price` field; `isUnlocked` now also honours bought palettes; `profile-form` passes `owned` so bought palettes are equippable. Wires the `decorator` family. Linked from `/haut-faits`. Verified end-to-end. **M1+M2+M3 all shipped — the coin economy is complete: earn (418 achievements) → spend (predictions, boost, cosmetics).**

**SEO-page ads: infra shipped (dark until configured).** `app/ad-slot.tsx` (AdSense display unit) + loader `<Script>` in `layout.tsx` + dynamic `/ads.txt` route — all gated behind env vars `NEXT_PUBLIC_ADSENSE_CLIENT` (`ca-pub-…`) + `NEXT_PUBLIC_ADSENSE_SLOT`. `<AdSlot/>` mounted mid-content on the quote / keyword / idea-blog SEO views only (~1300 content pages — never the app surface). Renders nothing until **the user** creates an AdSense account + one display ad-unit and sets the two env vars in Vercel.

**Next: M4 — Stripe (needs the user: Stripe account + API keys).** Buy coins for real money — the actual revenue. This is the only money-making piece still missing; everything else (engagement economy + ad inventory) is in place.

## Auth
- **Magic-link email is the sole auth path.** Resend SMTP wired (`smtp.resend.com`, sender `hello@moomz.com`); `moomz.com` sending domain DNS-verified (DKIM+SPF+MX → not spam); branded dark email template live (`supabase-migrations/email-magic-link.html`).
- **Google sign-in was removed** 2026-05-20 (Supabase had placeholder OAuth creds → `invalid_client`). To re-add: create a real OAuth client in Google Cloud Console (redirect URI **must** be `https://tpncpfatthgssttzrchu.supabase.co/auth/v1/callback`), paste creds into Supabase, set `external_google_enabled: true`, restore the button in `app/login/login-form.tsx`. Unused `auth.login.google`/`auth.login.or` i18n keys were left in place.
- Flow: `/login` → `signInWithOtp` → email → `/auth/callback` exchanges code, links any legacy `claim_token` profile via `link_profile_to_user()`. `getProfileLookup()` in `app/actions.ts` resolves session `user_id` first, `claim_token` cookie second.
- `profiles.claim_token` is **nullable** (migration 017) — session users have no claim_token; their identity is `user_id`.

## Feature inventory (what already exists — don't rebuild)
- **Core**: create poll, optimistic vote + Supabase Realtime live counts, share buttons (WhatsApp/X/Telegram/copy), dynamic OG images, branded 404.
- **Feeds**: home trending feed (`polls_trending` view, HN-decay ranking), Discover snap-scroll, skip, hot/rising/new badges, voted/skipped filtered out.
- **Gamification**: streak + points with ×1-×5 multipliers, StreakHUD, 3 random vote effects (confetti/starburst/comic), majority/rebel reveal, Daily Moomz hero, cosmetics palettes (`lib/cosmetics.ts`), legacy 11-badge `lib/achievements.ts` + new 418-engine.
- **Profiles**: `/[username]` public page, `/me` claim/edit (avatar emoji or photo upload, socials), ASK anonymous Q&A feature (`ask_questions` table, `/api/ask-pending` badge).
- **i18n**: 8 langs (fr en es it pt de ja zh) — `lib/i18n.ts` + `lib/i18n-server.ts`, `useT()`/`getT()`. AR gets RTL flip only (no UI translation). Poll content stays in author's language; only chrome follows the visitor's locale.
- **PWA**: manifest, versioned service worker (`public/sw.js`), install prompt.
- **SEO surface** (~2000+ routes): `/idees` `/ideas` `/guides` `/blog` (landing pages), `/mot` `/word` + `/topic/[locale]` (keyword pages, ~990 across all 8 langs, poll interlinking), `/compare` (30) `/template` (132, all 8 langs) `/quiz` (~60) `/citations` `/quotes` `/citation/[locale]`, and 9 utility tools `/convertisseur /meteo /heure /jours-feries /crypto /definition+/define /cosmos /recettes /astro` under the `/outils` hub. Data in `lib/seo/**` + `lib/tools/**` + `lib/quizzes/**`, mostly JSON loaded via `fs.readdirSync`. All wired into `app/sitemap.ts` + `app/seo-footer.tsx`; route names guarded in `RESERVED_USERNAMES`.
- **Other**: WorldVibes map (`app/world-vibes.tsx`, vote geo), music player (`<audio>` is a module-level singleton in `music-provider.tsx` — survives navigation/remounts, never cuts), `fake_vote_burst` bot cron.
- **Nav**: `SiteHeader` + `BottomNavV2` (all `<Link>` — client nav). `app/site-footer.tsx` — locale-aware footer nav mounted in the root layout (every page): links to create/discover/quotes/quiz/haut-faits/boutique/ideas/keywords/tools/guides/blog, each resolving to the visitor's-locale route (quote + keyword hubs have per-locale URLs).

## Bots / content seeding
- `fake_vote_burst` cron (every 3 min) adds capped bot votes — skips noisy questions, caps at `max(30, humans×5+30)` per poll, samples the option weighted by real human distribution. Bots privilege real polls 3:1.
- 16 labelled bot profiles (`luna_fr`, `maya_en`, … `is_bot=true`, `noindex`, visible "🤖 personnage" badge) seed the ASK carousel.
- Seed polls: many hundreds across 15 langs in `scripts/seed-polls/data/<lang>/*.json`, inserted idempotently via `scripts/seed-polls/insert.mjs`.

## Database
Postgres tables incl. `polls`, `votes`, `profiles`, `ask_questions`, `daily_moomz`, `tracks`, `push_subscriptions`, `coin_transactions`, `achievement_defs`. Public views `polls_with_stats`, `polls_trending`, `profiles_public`, `ask_questions_public`, `votes_world_24h`. Migrations in `supabase-migrations/` numbered 001→018 (auth, polls-cleanup, seed, ask, vote-country, security-hardening, anti-noise/bot-cap, achievement/coins). Apply via the Supabase MCP (`apply_migration`/`execute_sql`) or the PAT.
**Known security debt:** advisors flag `polls_trending` + `profiles_public` as `SECURITY DEFINER` (a migration after 012 reverted them from INVOKER) — should be re-set to INVOKER.

## Supabase admin access (PAT)
The user authorized running SQL / Management API calls. **Secrets vault: `.secrets.txt`** (gitignored — verified). It is multi-line `key=value`; entries include the Supabase PAT, `supabase_anon_key`, Resend, blob token, and `r2_*` keys.
- Extract the PAT silently: `PAT=$(grep -oE 'sbp_[A-Za-z0-9]+' .secrets.txt | head -1)` — never `cat`/echo the file.
- Management API: `https://api.supabase.com/v1/projects/tpncpfatthgssttzrchu/...` with `Authorization: Bearer $PAT`. SQL endpoint `.../database/query`, body `{"query":"<sql>"}`, success = HTTP 201.
- Or just use the Supabase MCP tools (`execute_sql`, `apply_migration`, `get_logs`, `get_advisors`) — no PAT needed.
- HTTP 401 → user revoked the PAT; ask before regenerating.

## Important IDs & URLs
- **Repo**: https://github.com/bendrop740i/moomz (public, owner `bendrop740i`). Git auth = SSH (`~/.ssh/id_ed25519`).
- **Vercel**: project `prj_3bZ7saBeA8bj1W3qbmtuMBOSYYyz`, team `team_l4uInQlamA1ObyV0J274QebL`.
- **Supabase**: ref `tpncpfatthgssttzrchu`, URL `https://tpncpfatthgssttzrchu.supabase.co`. Anon key in `.secrets.txt` as `supabase_anon_key` (public-by-design; RLS protects data).
- **Owner**: bendrop740i@gmail.com (the injected `userEmail` may differ — ignore it; git author is `bendrop740i`).

## Local dev & deploy
```powershell
npm run dev    # http://localhost:3001 (port 3000 busy on the user's machine)
```
- **Gotcha**: `next dev` does NOT load `.env.production.local` (where the Supabase vars live). For local dev, copy `NEXT_PUBLIC_SUPABASE_*` into a `.env.development.local` (gitignored).
- **Gotcha**: untracked WIP `lib/seo/vs/` + `app/vs/` is missing 6 content files → breaks local `npm run build` typecheck, but is untracked so never ships.
- Deploy: push to `main` → Vercel auto-deploys.

## Conventions & decisions (must follow)
- **Style**: SSX-cartoon, dark + colorful, "vivant". Never propose minimal/professional designs unasked.
- **Speed**: user iterates VERY fast ("vasy", "fais tout", "ok continue") — ship without long checks. Standing **OK to push to `main`** without asking.
- **Multi-agent**: big content/feature batches are routinely done with many parallel agents (one per language/tool/domain).
- **Content language**: poll questions stay in the author's language (no auto-translate — needs a paid API). Only UI chrome is i18n'd, following the visitor's locale cookie/Accept-Language.
- **Locale switcher** stays a tiny `🌐 <code>` footer button. **No locale URL prefixes** (declined).
- **Anti-spam**: reject keysmash/low-effort, but accept Gen Z slang, short answers, emojis.
- **Bots** are an accepted launch tactic (seeding the lake), kept plausible via caps + time curves.
- **Spice Mode** (@-tag people in polls): do NOT build without explicit go-ahead.

## Open items / TODO
- **R2 cutover** (code ready): user must create bucket `moomz-music`, custom domain, API token, fill `.secrets.txt`, run `scripts/migrate-blob-to-r2.mjs`, set `R2_PUBLIC_BASE_URL`. Runbook: `docs/cloudflare-r2-migration.md`.
- **M1 remaining counters** (see "Current focus") then **M2 predictions**, M3 shop, M4 Stripe.
- **Security**: re-set `polls_trending` + `profiles_public` to `SECURITY INVOKER`.
- **Push notifs**: needs VAPID keys (`npx web-push generate-vapid-keys`).
- Wire `trackEvent()` (`lib/analytics.ts`) into real flows (createPoll/castVote/share/ASK).
- Finish or delete the `lib/seo/vs/` WIP (6 missing content files).
- AR: RTL only, no UI translation. PT quiz half of `scienze-it-pt.ts` never shipped.
- Pick a single audience (Gen Z vs adult/EVJF) — both surfaces currently live.

## Recent changelog (newest first)
- **2026-05-20** — i18n leak fix + navigation depth (10-agent pass, one per SEO surface). Many SEO components had UI-chrome strings hardcoded in one language (mostly French — e.g. the create-poll CTA subtitle) that leaked into every other locale; all localized to 8 langs via per-locale tables. `seo-footer` widened fr|en→8 locales; `/explore` made 8-lang; the `/template`/`/quiz`/`/compare`/`/outils` hubs no longer force `HubNav locale="fr"`. Navigation: removed `.slice()` caps that hid pages — `/vs` hub now lists all ~1000 pairs, `/cosmos` all 60 dates; cross-link grids widened (8→18, 12→30); keyword detail similar-cap 12→48; quote detail pages got a language switcher. Commit `8c0bf72`. Pattern reminder: chrome keys off `page.locale` for per-locale static pages, off `getLocale()` for mixed hubs (data content stays authored-language).
- **2026-05-20** — Fluid SEO intralink nav: new shared `app/_seo/hub-nav.tsx` (`<HubNav>`) mounted on all 13 SEO hub/detail surfaces (keyword/template/quiz/compare/tools/ideas/guides/blog) so every page links to every hub + the 8 keyword-language hubs. New `/explore` master index (`app/explore/page.tsx`) lists the whole tree. `SeoFooter` gained the hub links + an 8-language keyword-hub row. Fixes the per-locale island problem — the ~990 keyword + 132 template pages were unreachable from each other. Commit `3dd6668`.
- **2026-05-20** — Poll templates expanded to all 8 langs (idea #1, cont.): `TemplateLocale` + loader + route `T` table gained ja/zh; 60 new templates via 6 agents (es/it/pt/de 3→12 each, ja/zh 12 fresh). 132 templates total, each deeplinking to the prefilled create form. Commit `c977a09`. Template slugs are globally unique (loader dedups on slug, not locale:slug) — new ones suffixed `-<locale>`.
- **2026-05-20** — Keyword pages expanded to all 8 langs (idea #1 of a token-heavy brainstorm): `/topic/[locale]` ~750 new pages via ~23 parallel agents over 3 rounds — es/it/pt/de/ja/zh now ~120-130 each across 10 topics (sciences/food/couple/popculture/sport/holidays/tech/drama/money/travel), ~990 keyword pages total. Rounds 1-2 in `81f878a`, round 3 + de/it essentials dedup in `a334b3c`. Other 5 ideas parked: per-poll AI explainer, "Vibe Reader" profile analysis, ASK bot auto-answers, 10k-word city deep-dives, daily AI digest.
- **2026-05-20** — Auth fixes: `claim_token` made nullable (logged-in users couldn't reserve a username — `23502` crash surfaced as a generic "Server Components render" error); Google sign-in removed.
- **2026-05-20** — M1 monetization foundation: coins economy + 418-achievement engine, wired into `castVote`, `/haut-faits` page.
- **2026-05-20** — Citation/quote SEO pack (128 pages, 1024 quotes, 8 langs) with poll↔quote interlinking.
- **2026-05-20** — 9 utility tools (~488 routes) + `/outils` hub.
- **2026-05-20** — Poll-page i18n fix: chrome follows the visitor's locale, not the poll's language.
- **2026-05-20** — 8-agent security/UX hardening: secure+httpOnly cookies, real ASK anonymous toggle, atomic streak RPC, avatar photo upload, poll image upload, BottomNav polling cut ~80%, Vercel Analytics.
- **2026-05-20** — 10-agent i18n audit + fix: all 8 dicts aligned, RTL added for AR.
- **2026-05-20** — `/compare` (30) + `/template` (72) SEO; Science QCM pack (~39 quizzes, 8 langs).
- **2026-05-20** — Credibility hardening: anti-noise SQL, ~248 spam polls killed, bot capped + slowed to every 3 min, bot profiles labelled.
- **2026-05-20** — Site-wide perf pass: instant music playback, Suspense-streamed home, service worker rewrite.
- **2026-05-20** — Cloudflare R2 migration prep (code ready, awaiting user to provision the bucket).
- **2026-05-19** — Keyword landing pages (`/mot` `/word`, 240) + 375 rich seed polls in 15 langs.
- **2026-05-19** — WorldVibes map; SEO push (101 landing pages: `/idees` `/ideas` `/guides` `/blog`).
- **2026-05-19** — ASK feature + 16 bot profiles; migrated to Supabase Auth magic-link; dead-poll auto-sweep.
- **2026-05-18** — MVP live on moomz.com (create/vote/share, realtime, OG images, PWA basics).

## Reusable commands
```powershell
npm run dev                                    # local dev on :3001
# Verify Supabase REST API:
curl -s "https://tpncpfatthgssttzrchu.supabase.co/rest/v1/polls?select=id&limit=1" -H "apikey: $(grep -oE 'sb_publishable_[A-Za-z0-9_]+' .secrets.txt)"
nslookup moomz.com                             # DNS check
```
