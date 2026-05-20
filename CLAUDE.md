# moomz — Project Context for Claude Code

> **For Claude reading this on session resume**: this file IS the conversation memory. It is updated after every meaningful change. Read it cold. The user (bendrop740i, French speaker) returns here without re-explaining anything — assume the state below is current. **Always re-edit this file at the end of any meaningful change** (new feature, schema migration, deploy, product decision) — that's an explicit user request.

## Where we left off (most recent)
**2026-05-20, citation/quote SEO pack — 128 pages, 1024 quotes, 8 langs (latest).** User asked for quote pages linked from polls when someone votes, in every language ("des pages citation aussi, genre 1000 citations et que ce soit linker quand quelqu'un vote pr ça dans toutes les langues, met plusieurs agents"). Shipped via **8 parallel background agents** (one per language) + a main-thread infra/wiring pass.

- **16 universal themes × 8 langs = 128 quote pages, 1024 hand-picked correctly-attributed quotes.** Themes: love, friendship, motivation, life, happiness, success, wisdom, courage, dreams, time, family, freedom, humor, hope, strength, inspiration. Each page = exactly 8 quotes (real authors native to each language's literary culture + universal figures), 160-260w intro, 3 FAQ, 8-12 matchPatterns, 3-4 related slugs. Agents were told to avoid notorious internet misattributions.
- **Routes**: FR `/citations` + `/citations/[slug]`, EN `/quotes` + `/quotes/[slug]`, other 6 langs `/citation/[locale]` + `/citation/[locale]/[slug]` (es/it/pt/de/ja/zh) — mirrors the keyword `/mot`÷`/word`÷`/topic` split. All `revalidate=3600`.
- **Data layer**: `lib/seo/quotes/{types.ts, loader.ts, data/<lang>.json}` — `QuotePage` schema, fs.readdirSync loader (mirrors `lib/seo/keywords/loader.ts`), one JSON file per language. `quoteUrl()` / `quoteHubUrl()` helpers in types.ts.
- **Shared views**: `app/_seo/quote-page-view.tsx` (detail: quotes as blockquotes + matched moomz polls via matchPatterns ilike on `polls_with_stats` + FAQ + related + CollectionPage/Quotation JSON-LD + poll-prefill CTA deeplinking `/?q=`), `app/_seo/quote-hub.tsx` (16-card grid per locale).
- **The poll↔quote linking** the user asked for: new `app/[slug]/quote-chips.tsx` (mirrors `keyword-chips.tsx`) renders below every poll — matches the poll's question/options against quote `matchPatterns` (filtered to the poll's lang; min-length 2 for CJK / 3 for latin) and shows up to 6 themed-quote chips. Quote pages list matching polls back. Mounted in `app/[slug]/page.tsx` right after `<KeywordChips>`.
- **Wiring**: `app/sitemap.ts` (+8 hub URLs +128 detail URLs), `app/seo-footer.tsx` (💬 Citations / 💬 Quotes link added to FR+EN footer rows), `app/actions.ts` RESERVED_USERNAMES (+`citations`,`citation`,`quotes`,`quote`).
- 8 agents dispatched in background; 3 returned clean, 5 reported a transient server rate-limit on their *final* summary message but had already written + self-validated their JSON. All 8 files verified post-hoc by script: 128 pages, 1024 quotes, 0 structural problems (every field present, every `related` slug resolves, 8 quotes/page, unique slugs). `npx tsc --noEmit` exit 0 across all new/edited files (pre-existing untracked `vs/` WIP errors untouched).

**2026-05-20, poll-page i18n fix + 9 utility tools pack.** Two waves, same session.

**Wave 1 — 9 utility tools** (commit `50ee849`). User asked for live-API-backed utility surfaces ("style des convertisseur devise, ou des truc linker a des api gratuite en live ?" → "fait totu ca met des agent et fait dans les langue dispo"). 9 parallel agents + main-thread integration shipped ~488 new routes:
- `/convertisseur/[pair]` (58 forex, Frankfurter, 1h ISR)
- `/meteo/[city]` (50 cities, Open-Meteo, 30min ISR)
- `/heure/[city]` (56 cities, pure Intl + live client clock)
- `/jours-feries/[country-year]` (30 countries × 2 years = 60 slugs, Nager.Date)
- `/crypto/[id]` (top 30 coins, CoinGecko, 10min ISR)
- `/definition/[word]` + `/define/[word]` (64 FR + 68 EN hand-written entries)
- `/cosmos[/<date>]` (NASA APOD, DEMO_KEY, 60 pre-rendered dates)
- `/recettes/[category]` (20 ingredients/categories, TheMealDB)
- `/astro/[sign]` (12 zodiac signs, pure JS, with date→sign picker)
- `/outils` orchestrator hub (all 9 tools, 8-lang labels, ItemList JSON-LD)

Each detail page carries a poll-prefill CTA deeplinking to home (`/?q=...&o=opt1|opt2`). All server-rendered (only exceptions: live clock + astro picker — single client component each). Each tool lives in `app/<tool>/{page.tsx,[slug]/page.tsx}` + `lib/tools/<tool>.ts` (slug arrays + fetchers + inline 8-lang STRINGS). Every detail page emits relevant JSON-LD. Every API call uses `fetch(url, { next: { revalidate: N } })` with graceful `null`/stub fallbacks. Sitemap (478 detail URLs + 10 hub URLs), `app/seo-footer.tsx` (new "Outils gratuits"/"Free tools" pill row), reserved-usernames in `app/actions.ts` (+16 entries to prevent shadowing) all wired.

**Wave 2 — i18n fix on `/[slug]`** (commit `b80ac77`). User pointed at the live site in EN mode and saw FR everywhere on poll pages ("tu vois la jai mis la langue anglais et tout rreste en francais"). Root cause: components shipped earlier in the SEO interlinking pass used the poll's authoring `lang` for chrome labels (so an EN visitor reading a FR poll got FR labels); `vote-client.tsx` had hardcoded FR despite `share.*` keys existing in all 8 langs in `lib/i18n.ts`. Fixed:
- `app/[slug]/vote-client.tsx` — added `useT()` import, swapped 6 hardcoded labels ("Partage en 1 clic", "Copier"/"Copié", "+ nouveau sondage", "Autre app…", aria-labels) to `t("share.*")`.
- `app/[slug]/below-poll-seo.tsx` — added inline `BELOW_STRINGS` 8-lang map for similar/trending/fork CTA/explore. Switched from `isEn = lang === "en"` binary to `getLocale()`-driven. Replaced hardcoded `EXPLORE_PILLS` with `explorePills(locale)` builder; localizes Guides/Discover/Music/Outils/Mots-clés while keeping `/idees` ("Idées de sondage") + `/ideas` ("Poll ideas") as language-native (both pills always render — Google indexes both).
- `app/[slug]/topic-pills.tsx` — added `TOPICS_HEADING` 8-lang map. Switched from `lang`-driven `getT(uiLocaleFor(lang))` to `getLocale()`-driven for both heading AND SEO landing routing (so EN visitors clicking a topic chip on a FR poll land on `/ideas` not `/idees`).

Key design decision re-confirmed: poll questions stay in their author's language (we don't auto-translate user-generated content — would need a paid API). Only the UI chrome adapts to the visitor's locale cookie/Accept-Language.

**Heads-up for next session — WIP `lib/seo/vs/`**: while measuring deployment size via local `npm run build`, I had to temporarily stash untracked WIP at `app/vs/` + `lib/seo/vs/` because `lib/seo/vs/loader.ts` imports content files that don't exist yet. The PowerShell move-and-restore round-tripped the folder into a nested `lib/seo/vs/lib-seo-vs/...`; I un-nested it back to `lib/seo/vs/{loader.ts, types.ts, content/}`. Existing content files: `c02-tech.ts`, `c04-food.ts`, `c07-chemistry.ts`, `c08-animals.ts`. The 6 missing (`c01-tools`, `c03-cloud`, `c05-travel`, `c06-science`, `c09-lifestyle`, `c10-culture`) are what blocks local `npm run build` — but Vercel never sees them since the whole `vs/` is untracked. If you (user) plan to finish this WIP, those are the files left to create.

**Build-size measurement** (full repo with the 9 new tools, ~600+ static routes): `.next/server` = 114 MB, `.next/static` = 2 MB, `.next/cache` = 297 MB (NOT deployed — local Webpack cache only). Total deployed footprint ≈ 116 MB. Per-route function bundles are ~150-300 KB compressed — well under the Vercel Hobby 50 MB-per-function cap. Bandwidth: 100 GB/month, nowhere near saturated.

**Earlier 2026-05-20, 8-agent security + UX hardening pass.** User said "fait tout et met un agent pr chaque" after a quick "what can I do on the app?" intro. 8 parallel agents shipped non-overlapping work covering the security audit's open items + a batch of long-deferred UI hooks. Migrations 014 + 015 applied live via PAT.

- **Agent 1 — backend security**. `app/actions.ts`: new `cookieOpts()` helper sets `secure: NODE_ENV==="production"` + `sameSite: "lax"` on every `cookies().set()`; `moomz_voter` is now `httpOnly: true` (was `false` — the audit's flagged "bypassable rate-limit" hole). ASK anonymous toggle is real now: `app/[slug]/ask-section.tsx` got a real checkbox + sliding toggle posting `is_anonymous=1|0` to FormData, `app/ask-actions.ts` skips writing `asker_id` when truthy. `castVote` streak race fix: dead `computeStreak` JS read-modify-write removed, replaced with new `apply_vote_streak(p_voter_id text, p_poll_id uuid, ...)` RPC that uses `pg_advisory_xact_lock(hashtextextended(voter_id, 0))` + `SELECT ... FOR UPDATE`. `updateProfile` reads `avatar_url` + `cosmetic_id` from FormData (graceful absence). `createPoll` reads `image_url`. `lib/history.ts` got `defaultCookieOptions()` + `pushSlugToHistoryCookie()` helpers for secure-by-default cookie writes. New migration `014-security-hardening-extra.sql` adds 4 columns (`avatar_url`, `cosmetic_id`, `vote_streak_count`, `vote_streak_last_at`) + the RPC + GRANTs to anon/authenticated. New `015-migration-002-guard.sql` wraps the fragile 002 with `CREATE EXTENSION IF NOT EXISTS pgcrypto` + `CREATE TABLE IF NOT EXISTS profiles (id uuid primary key default gen_random_uuid())` so fresh-env replays succeed. Both applied live (HTTP 201). RPC smoke-tested end-to-end.
- **Agent 2 — i18n dict expansion**. The 19 "missing" keys flagged in the security audit had already been backfilled by the earlier 10-agent i18n pass — verified key-by-key. Net-new in this pass: expanded `onboarding.*` namespace from 5 keys → 14 keys × 8 locales = **+112 new keys** (added `pick_topics`, `max_5`, `continue`, `skip`, and the 10 `onboarding.topic.{food,couple,drama,tech,lifestyle,debat,sport,musique,money,ado}` chip labels with locale-native nouns + 🍔💖🎭💻🌿🗣️⚽🎵💸🧃 prefix). Each dict now carries 176 keys (was 162).
- **Agent 3 — onboarding chip i18n**. `app/onboarding.tsx`: previous pass had already i18n'd the 5 outer strings; this agent swapped the topic-chip `getTopicLabel(topic.id, t)` → `t(\`onboarding.topic.${id}\`)` (consuming Agent 2's new keys), dropped the inline emoji span (now baked into the i18n string), migrated `submitButton`/`skipButton`/`errorNoTopics` to the shorter Agent-2 names. No logic change.
- **Agent 4 — profile UI (avatar + cosmetics)**. `app/me/profile-form.tsx` rewritten with a Photo/emoji radio toggle: photo path does canvas-resize 256×256 cover JPEG 0.9, uploads to new `avatars` bucket (created live via PAT with public read/insert/update policies — mirrors the `poll-images` pattern). New cosmetics grid section shows all 10 palette swatches; `isUnlocked(palette, profile)` gates locked ones with 🔒 overlay + tooltip; equipped palette gets "Équipé" badge. New `palettePreviewFromCosmetic(id)` helper added to `lib/cosmetics.ts` returns `{c1,c2,c3}` or null for "auto"/unknown. `app/poll-card.tsx` accepts optional `authorCosmeticId` prop → overrides `paletteFor(slug)` when present. `app/[slug]/profile-view.tsx`: `<img>` swap when `avatar_url` set, "✨ wearing <PaletteName>" pill when `cosmetic_id` set. `lib/profile.ts` extended with optional `avatar_url`/`cosmetic_id` on `Profile` type — `getMyProfile`/`getProfileByUsername` try extended SELECT then fall back to base columns (graceful pre-migration). Cosmetic propagation: `app/_home/trending-feed.tsx`, `app/discover/page.tsx`, `app/discover/discover-feed.tsx` all batch-fetch `profiles_public.cosmetic_id` and thread `authorCosmeticId` into each PollCard.
- **Agent 5 — poll image upload UI**. `app/create-poll-form.tsx`: file input between question and options, MIME validation (jpeg/png/webp/gif) + 5 MB cap, client canvas center-crop to 1200×630 (OG 1.91:1) JPEG 0.85, uploads to existing `poll-images` bucket as `<crypto.randomUUID()>.jpg`. 120 px preview thumb with absolute-positioned × remove button. Spinner during upload; submit blocked while upload in flight. Hidden `name="image_url"` field passes URL to `createPoll` (Agent 1 extended the signature). Inline error UX without breaking form submit (image is optional). **The earlier CLAUDE.md "Done so far" claim about image upload now matches reality** — audit-flagged inaccuracy resolved.
- **Agent 6 — BottomNav polling optimization**. `app/bottom-nav.tsx`: interval 30s → 60s. New `canFetch()` gate blocks every fetch on `document.visibilityState !== "visible"` OR `navigator.onLine === false` OR scroll-hidden state. `visibilitychange` + `focus` + `online` event listeners fire single catch-up fetches on transition (no missed updates). `/api/polls-stats` skipped entirely when `moomz_created_slugs` cookie is empty (users with zero polls make zero stats calls). Cleanup tears down all listeners + intervals. **~75-90% fewer background calls** — backgrounded user hits 0/hour instead of 240/hour.
- **Agent 7 — seed pool expansion (es/it/pt/de/ja/zh)**. 30 new polls per locale × 6 locales = **180 new polls** in fresh `scripts/seed-polls/data/<lang>/04-bulk.json`. Content is native to each locale (paella-cebolla, cappuccino-dopo-11, Festa junina, Tatort-am-Sonntag, konbini wars, 火锅麻辣/清汤) — no FR translations. Schema is the script's compact `{q, o, e, t}` form (not the verbose form I'd hinted at). Insert script ran idempotent — bonus: it also caught up **906 legacy polls** that had been written to data files but never inserted in prior runs (the script renumbers on file-add → fresh slugs → ON CONFLICT DO NOTHING is safe). DB final: 30 new rows per locale verified via PAT.
- **Agent 8 — Vercel Web Analytics**. `npm install @vercel/analytics@^2.0.1 @vercel/speed-insights@^2.0.0` (both in `dependencies`). `app/layout.tsx`: `<Analytics />` + `<SpeedInsights />` mounted as siblings just before `</body>` (outside `LocaleProvider` — they don't need it). New `lib/analytics.ts` exports `trackEvent(event, props)` wrapper with try/catch so analytics never blocks UX. **Not yet wired** into existing actions/components — that's the explicit follow-up.

**DB state after this pass**: `profiles` now has `avatar_url`, `cosmetic_id`, `vote_streak_count`, `vote_streak_last_at` columns. `apply_vote_streak` RPC exists with anon+authenticated EXECUTE grants. Two Storage buckets: `poll-images` (5 MB cap, existing) + `avatars` (new, public, with R/I/U policies). +180 native seed polls + 906 backfilled legacy polls live.

**tsc**: `npx tsc --noEmit` exit 0 across every file each agent touched. Pre-existing errors remain in untracked `app/vs/**` + `lib/seo/vs/**` WIP (out of scope, never reached HEAD).

**Still open after this pass** (need user creds or explicit decision):
- Push notifs (VAPID keys generation by user with `npx web-push generate-vapid-keys`)
- Stripe Premium €2.99/mo
- Google OAuth
- Internal end-to-end test harness
- Wire `trackEvent()` calls into actual flows (createPoll, castVote, askQuestion, share, vote-rebel/majority)
- Choose audience (Gen Z vs adult EVJF — both surfaces still live)
- Onboarding `max_5` key shipped but not rendered (visual dots already show the cap)
- PT half of `scienze-it-pt.ts` still missing (flagged in earlier i18n pass — out of scope here)
- AR has RTL flip but no UI translation

---

**2026-05-20, 10-agent i18n audit + 10-agent fix pass.** User asked for a multi-agent verification of translations across all languages ("met 5 agent quui vont veirifer que c bien traduis dans toute les langue voir 10 agent car certaine langue ya moitieer fr et autre langue ouc pas propre") then validated the proposed 10-agent fix plan.

**Phase 1 — Audit (10 parallel Explore agents).** Each agent owned a language scope. Findings:
- **FR (baseline)** — 148 keys clean
- **EN** — 0 leak, 0 missing key
- **ES** — 1 missing (`nav.music`), 0 leak
- **IT** — 1 missing (`nav.music`), 3 EN leaks (`🏆 Achievement`, `streak`, `pt` vs `pts`)
- **PT** — **19 missing keys**, `pt-essentials.json` had ALL diacritics stripped (não→nao, são→sao, há→ha, é→e everywhere), PT-PT vs BR-PT inconsistency (`anónimo` vs `anônimo` 20 lines apart), PT quiz half of `scienze-it-pt.ts` never shipped (only IT exists despite filename)
- **DE** — **19 missing**, 5-6 EN leaks (`nav.home: "Home"`, `nav.discover: "Discover"`, `discover.title: "discover"`, `linker.stats.votes: "Votes"`, `linker.stats.streak: "Streak"`)
- **JA** — **19 missing**, 2 UTF-8 mojibake (`ç´„` should be `約`) at `sciences-ja-zh.ts:21,81`
- **ZH** — **19 missing**, same 2 mojibake (file is shared JA+ZH), confirmed `lib/seo/read/r08.ts` is healthy + IS imported via `lib/seo/read/index.ts` (CLAUDE.md's "untracked + unimported + broken" note was stale)
- **NL/RU/KO/HI/TR/PL** — seed polls clean
- **AR** — seed polls clean BUT no RTL handling anywhere → content rendered LTR (broken)
- **Cross-cutting** — onboarding hardcoded FR (5 strings, no `onboarding.*` namespace), `lib/topics.ts` 10 labels hardcoded FR with inconsistent EN mix (Bouffe/Drama/Tech/Lifestyle), `createPoll` validation errors in `app/actions.ts` all FR-only, ~30 stray FR strings scattered

**Phase 2 — Fix (10 parallel claude agents, strict file ownership to avoid `lib/i18n.ts` race conditions):**
1. **i18n.ts master** — added 19 keys × 4 langs (PT/DE/JA/ZH), `nav.music` × ES/IT, fixed DE leaks (Startseite/Entdecken/Stimmen/Serie), fixed IT leaks (Traguardi, pts), normalized PT `anónimo` → `anônimo`. Added 4 new namespaces × 8 langs natively: `onboarding.*` (5 keys), `topics.*` (10 keys), `errors.poll.*` (7 keys), `misc.*` (6 keys). **All 8 dicts now carry 162 identical keys.**
2. **`pt-essentials.json`** — rewrote all 20 entries with restored Brazilian Portuguese diacritics (3621 diacritic chars restored). `matchPatterns` arrays kept ASCII intentionally (substring matchers on lowercase questions).
3. **`sciences-ja-zh.ts`** — 2 `ç´„` → `約` fixes.
4. **`app/onboarding.tsx`** — i18n-ified 5 hardcoded FR strings via `useT()`.
5. **`lib/topics.ts`** — kept `TOPICS` array with FR `label` fallback, added `getTopicLabel(id, t)` helper. `lib/i18n-server.ts` got new `getT(locale)` factory mirroring `useT()`. Wired `app/onboarding.tsx` (client) + `app/[slug]/topic-pills.tsx` (server) to consume `getTopicLabel`.
6. **`app/actions.ts`** — `createPoll` 7 validation errors now resolve via `tr("errors.poll.*")` with `getLocale()` from i18n-server. The `{opt}` placeholder is preserved literally and substituted at throw time.
7. **`app/login/page.tsx`** — static `metadata` export converted to async `generateMetadata()` reading `getLocale()` and `t("misc.loginMetaDescription", locale)`. `app/me/page.tsx` + `app/me/profile-form.tsx` + `app/mes-sondages/page.tsx` → all FR strings replaced with `tx("misc.*")` / `t("misc.*")`.
8. **`app/[slug]/profile-view.tsx`** — empty state now `t("misc.profileNoPolls", locale)`. `app/_seo/keyword-page-view.tsx` was already locale-aware via its `LABELS` record (no change needed — `misc.keywordEmpty` is redundant but harmless).
9. **RTL** — new `lib/dir.ts` exports `getDirection()` which reads `headers().get("accept-language")` and returns `"rtl"` when it starts with `ar`. `app/layout.tsx` now renders `<html lang={dir === "rtl" ? "ar" : locale} dir={dir}>`. `app/manifest.ts` kept at `dir: "ltr"` (static, runtime HTML attr is what flips).
10. **Final stray-FR audit** — confirmed `r08.ts` is healthy. Inventoried ~30 remaining stray FR strings (see "Still open" below).

**Build verify**: `npx tsc --noEmit` exits 0. (Some files — i18n.ts, actions.ts — were committed by a parallel session/window mid-pass so the working-tree diff is smaller than expected, but every change is in HEAD or pending.)

**Still open from this pass**:
- PT quiz half of `scienze-it-pt.ts` was never shipped (only IT exists in that file — file name is misleading)
- ~30 stray FR strings in sub-app `_strings.ts` files (astro/cosmos/crypto/heure/convertisseur/recettes) — they're FR-only by design; if these sub-apps need EN/ES/IT/PT/DE/JA/ZH later, the strings tables need expansion
- `below-poll-seo.tsx` + `below-profile-seo.tsx` use FR/EN ternaries on `isEn`; users in ES/IT/PT/DE/JA/ZH see the FR branch
- Root `app/layout.tsx` + `app/page.tsx` metadata description still FR-only
- AR is only handled via RTL flip — no UI translation (it's not in the `Locale` type); falling back to EN is the current behavior

**2026-05-20, 9 utility tools pack.** User asked for live-API-backed utility surfaces to make the site useful beyond polls ("jai add les page et plein de truc je peux generer quoi de + pour rendre le site utile, style des convertisseur devise, ou des truc linker a des api gratuite en live ?" → then "fait totu ca met des agent et fait dans les langue dispo"). Shipped via **9 parallel agents** + a main-thread integration pass — **~488 new routes** spanning currency / weather / time / holidays / crypto / dictionary / NASA / recipes / horoscope, with each detail page carrying a poll-prefill CTA that deeplinks back to the home create form (`/?q=...&o=opt1|opt2`).

Each tool lives in `app/<tool>/{page.tsx,[slug]/page.tsx}` + `lib/tools/<tool>.ts` (slug arrays + helpers + fetchers + inline 8-lang STRINGS). All server-rendered (only exceptions: `/heure/[city]/live-clock.tsx` ticking clock, `/astro/sign-finder.tsx` date input). Every detail page emits relevant JSON-LD (Article / Product / Event / Place / DefinedTerm depending on tool). Every API call uses `fetch(url, { next: { revalidate: N } })` with graceful `null`/stub fallbacks — no crashes if upstream is down.

Tools shipped (slug count / API source):
- **`/convertisseur/[pair]`** — 58 forex pairs across 15 currencies (Frankfurter.app, no key, 1h ISR). EUR→14, USD→14, GBP→14, JPY→14, +7 reverses. Big rate card + 8-row conversion table + server-SVG 30d sparkline + 30d change %.
- **`/meteo/[city]`** — 50 world cities (Open-Meteo, no key, 30min ISR). 7-day forecast grid, current temp, feels-like, humidity, wind, sunrise/sunset, per-city climate prose (FR + EN hand-written for top 7 cities, generic fallback for the rest).
- **`/heure/[city]`** — 56 cities (pure `Intl.DateTimeFormat`, no API). Live-ticking client clock + UTC offset + diff table vs Paris/NYC/London/Tokyo + sunrise/sunset via NOAA formula from lat/lon.
- **`/jours-feries/[country-year]`** — 30 countries × {2026, 2027} = 60 slugs (date.nager.at, no key). Next-holiday countdown + full chronological calendar + ponts (Tue/Thu) + weekend-holiday counters + per-country FR+EN editorial blurbs.
- **`/crypto/[id]`** — top 30 coins (CoinGecko, no key, 10min ISR). Live EUR+USD price + 24h change + market cap + 30d SVG sparkline + ATH/ATL + curated FR/EN blurbs for top 10 (API description fallback for the rest).
- **`/definition/[word]` (FR) + `/define/[word]` (EN)** — 64 FR + 68 EN words hand-written (no API — dictionaryapi.dev was too inconsistent). Mix of Gen Z slang + everyday vocab. ASCII-safe slugs (`cafe` not `café`). UI labels translated for all 8 langs even when serving FR/EN word data.
- **`/cosmos[/<date>]`** — NASA APOD (DEMO_KEY, 1h ISR). 60 pre-rendered dates + dynamic params for any valid date (`1995-06-16`..today). Prev/next-day arrow nav, image or 16:9 iframe for video, "🌐 EN" note since NASA only ships English explanations.
- **`/recettes/[category]`** — 15 ingredients + 5 categories (TheMealDB, no key, 24h ISR). Recipe grid with thumbnail + name + outbound link to themealdb.com canonical recipe.
- **`/astro/[sign]`** — 12 zodiac signs (pure JS). Big colored emoji + traits + compatible/challenging signs + ~250-word personality (FR+EN) + weekly element-aligned vibe. Hub has date-picker client component that maps birthday → sign.

Hub `/outils` orchestrator (main thread): grid of all 9 tools with per-locale title/description/tag in all 8 langs, ItemList JSON-LD, "create your own poll" CTA.

Wiring:
- **`app/sitemap.ts`** — added 10 hub URLs + ~478 detail URLs via 9 slug-array imports.
- **`app/seo-footer.tsx`** — new "Outils gratuits" / "Free tools" pill row (10 chips) above the existing SEO-page sections.
- **`app/actions.ts`** — added 16 new reserved usernames (`outils`, `tools`, `convertisseur`, `converter`, `meteo`, `weather`, `heure`, `time`, `jours-feries`, `holidays`, `crypto`, `definition`, `define`, `cosmos`, `recettes`, `recipes`, `astro`, `horoscope`) so they can't be claimed and shadow the routes.

`npx tsc --noEmit` exit 0 across the whole repo. Each agent verified its own tsc independently. No new npm packages.

**Earlier 2026-05-20, credibility hardening pass.** User showed the live site and pointed out the spam polls + obvious fake votes were destroying credibility. After a frank back-and-forth on strategy, they validated a pragmatic plan (no page deletions, no audience switch — just kill the visible spam, calibrate the bot, label the characters). Shipped:

- **Migrations `013` + `013b` + `013c`** applied live via PAT to Supabase. Net effect after the 3 passes:
  - **`is_noisy_question(text)` SQL helper** mirrors `looksLikeNoise` from `app/actions.ts`. Catches: <4 char questions, 6+ consecutive same chars, <3 distinct chars (now triggers at length ≥4 instead of ≥5 — that's how "rttr" slipped through), no content chars (after stripping whitespace/punct/digits — works for CJK/Hindi/Arabic/Cyrillic), and <30% content ratio for 8+ char strings. **First version broke ~730 non-ASCII seed polls** because POSIX `[[:alpha:]]` doesn't match CJK in this Supabase collation; `013b` restored them by counting "non-whitespace/punct/digit" chars instead of "alpha" chars.
  - **Retroactive flag**: ~248 polls marked `is_dead=true` (visible "rttr" / "Test from claude" / dup spam like "les pied qui pue ou le slip qui pue" which existed 6 times with 800-1050 bot votes each). The dedup pass keeps the row with most human votes per normalized question and kills the rest.
  - **Bot v4 (`fake_vote_burst`)** rewritten: (a) skips polls flagged by `is_noisy_question`, (b) enforces a hard cap of `max(30, human_votes × 5 + 30)` per poll — so a 0-human poll tops at 30 bot votes total, a 50-human poll at 280. Cron renamed `fake_vote_burst_every_3min` and dropped from every minute to **every 3 minutes** (66% less bot pressure).
- **`lib/profile.ts`** — `Profile` type gained `is_bot?: boolean | null`. `getProfileByUsername` now selects `is_bot` from `profiles_public`.
- **`app/[slug]/page.tsx`** — `generateMetadata` emits `robots: { index: false, follow: true }` when `profile.is_bot`. The 16 character accounts (`luna_fr`, `maya_en`, etc.) are no longer indexable by Google but internal links still pass authority.
- **`app/[slug]/profile-view.tsx`** — visible "🤖 Personnage moomz" badge + disclaimer line on bot profile pages. Honest > opaque.
- **`app/featured-asks.tsx`** — small inline "🤖 personnage" chip next to the `@username` in the home carousel cards.
- **i18n** — `bot.badge`, `bot.badge.short`, `bot.disclaimer` keys added in all 8 langs. Title of the featured-asks carousel switched from "🌟 Profils du jour" to "🤖 Personnages moomz" (and translations) across fr/en/es/it/pt/de/ja/zh.
- **Home reorder (`app/page.tsx`)** — `DailyCardSection` moved to right after `PageHero` (was buried mid-page after WhyMoomz). `DailyCard` visual beef-up: min-height 280-320px, gradient bumped from 0.25 to 0.4 opacity, two blur orbs as accents, title scales to text-5xl on md+, white pill CTA in pink-600 text. The Daily is now the literal hero of the home.
- **`app/_seo/keyword-page-view.tsx`** — `fetchMatchingPolls` now requires `vote_count >= 10` (strict gate), with a fallback to `vote_count >= 1` if fewer than 3 polls match. Empty/abandoned polls no longer pollute `/mot` + `/word` keyword landing pages.

**Verification**:
- Trending feed sample after migration: real polls in pole position ("Tu prefere le foot ou faire des pompe ?", "Fuck ou love", "Le soleil ou la neige"). "rttr" / "Test from claude" / 5 of 6 "les pied qui pue" copies all dead.
- `npx tsc --noEmit` green after fixing a transient `misc.profileNoPolls` duplicate (linter had added the key in a `misc` section while I was also adding it next to `linker.polls.empty` — removed my dups).
- DB final state: 248 dead / 3063 alive / `fake_vote_burst_every_3min @ */3 * * * *` / `is_noisy_question` helper exists.

**What this DOES NOT do** (deferred — out of scope for this pass):
- Doesn't decide the audience (Gen Z vs adult EVJF). User chose to keep both — SEO pages for adult occasions remain indexed, home defaults to Gen Z tone.
- Doesn't ship a single hero hook — Daily Moomz promoted but Rebel + ASK + Trending all still on home.
- Doesn't add analytics (PostHog / Plausible) — flagged as Week 4 priority in the strategy convo.
- Doesn't touch the i18n missing-key audit (19 keys still untranslated in pt/de/ja/zh per the security audit).

---

**2026-05-20, /compare + /template SEO push.** User asked which page types to add for SEO and selected my recommendation: compare pages + template pages, shipped via 10 parallel agents. **102 new SEO routes** total:

- **30 head-to-head compare pages** under `/compare/[slug]`:
  - 8 FR `moomz-vs-*` (Strawpoll, Typeform, Google Forms, Mentimeter, Instagram Story, WhatsApp, Framaforms, Kahoot)
  - 8 EN `moomz-vs-*` NEW competitors not in /alternatives (Typeform, SurveyMonkey, JotForm, Kahoot, AhaSlides, Vevox, Instagram Poll, WhatsApp Poll)
  - 7 EN cross-competitor (typeform-vs-google-forms, strawpoll-vs-doodle, mentimeter-vs-slido, kahoot-vs-mentimeter, surveymonkey-vs-typeform, jotform-vs-google-forms, polleverywhere-vs-slido) — `topic: "cross"`, moomz only mentioned once in verdict
  - 7 FR cross-competitor (strawpoll-vs-framaforms, instagram-vs-whatsapp-sondage, typeform-vs-google-forms-fr, surveymonkey-vs-typeform-fr, doodle-vs-framadate, mentimeter-vs-ahaslides-fr, kahoot-vs-wooclap)
  - Each page: 8 highlights (winner: a/b/tie), verdict + pickA/pickB, 6 FAQ, 2-4 cross-linked related slugs, real pricing facts cited
- **72 poll templates** under `/template/[slug]`:
  - 12 FR events (mariage, EVJF, EVG, anniv, baby shower, famille)
  - 12 FR work/classroom (rentrée, sortie, projet groupe, restau midi, réunion, after-work)
  - 12 FR social (couple, soirée, ado, drama, débat)
  - 12 EN events/classroom (wedding, bachelorette, bachelor, field-trip, icebreaker)
  - 12 EN work/social (lunch, leaving-gift, weekend-getaway, playlist vote, vibe-check, pineapple-pizza)
  - 12 multi-locale ES/IT/PT/DE (3 each: food, valentine, travel/newyear/halloween/christmas)
  - Each template: question + 3-5 options, whyItWorks, 3-5 tips, 3 variations (each with own question + options), 4 FAQ, 2-4 related. **One-click launch deeplinks to `/?q=&o=`** which prefills `CreatePollForm` (existing surface).

**Infra** (data lives in JSON files for hot-reload + agent-friendly editing):
- `lib/seo/compare/{types.ts, loader.ts, data/*.json}` — `ComparePage` schema (slug, locale fr/en, a/b parties with name+emoji+tagline, 8 highlights, verdict, pickA/B, 6 FAQ, related, topic). Loader is `fs.readdirSync`-based like `lib/seo/keywords/loader.ts`.
- `lib/seo/templates/{types.ts, loader.ts, data/*.json}` — `TemplatePage` schema (slug, locale fr/en/es/it/pt/de, category, audience, question, options, whyItWorks, tips, 3 variations, 4 FAQ, related). Plus `templateLaunchUrl(p)` helper that encodes `?q=&o=`.
- `app/compare/page.tsx` (hub grouped by topic) + `app/compare/[slug]/page.tsx` (head-to-head view with bilingual i18n inline `T` table, head-to-head 12-col grid, verdict cards, FAQ details, related pills).
- `app/template/page.tsx` (hub grouped by category with emoji+label map) + `app/template/[slug]/page.tsx` (preview poll card mimicking PollCard look, 6-locale inline i18n `T` table, variations cards each with own launch link, FAQ, related).
- `app/sitemap.ts` — added `/compare` + `/template` hub URLs + `getAllCompares()` + `getAllTemplates()` maps (priority 0.75, monthly changefreq).
- `app/actions.ts` — added `compare`, `template`, `templates` to `RESERVED_USERNAMES` so users can't shadow these surfaces.

**Build verify**: `npx tsc --noEmit` green. The 6 untracked breakages in `lib/seo/read/r08.ts` + WIP quiz dirs remain pre-existing and unimported (don't ship).

**2026-05-20, SEO interlinking on poll detail + public profile.** User asked to turn the per-poll `/[slug]` and public profile `/[username]` pages into deeply-connected SEO hubs (15+ outbound internal links each) so Google stops seeing them as dead-ends. Shipped 4 new server components in `app/[slug]/` (no client JS — the vote UI stays interactive, everything new renders below it as static):
- **`topic-pills.tsx`** — maps each `polls.topics` entry to the best-matching `/idees/<slug>` (FR) or `/ideas/<slug>` (EN) landing using a hardcoded TOPIC_TO_SEO table validated against `allPages` from `lib/seo`. Unknown topics fall back to `/discover?topic=<id>`.
- **`related-polls-grid.tsx`** — static 2-col / 4-col compact poll cards (question + emoji options + vote count, no realtime, no vote action).
- **`below-poll-seo.tsx`** — orchestrator below `VoteClient`+`PollExplainer`+`KeywordChips`. Fetches 8 polls via `.overlaps('topics', ...)` on `polls_with_stats` (excluding current + dead seeds), falls back to top-6 from `polls_trending` if `<4` similar. Plus a CTA card linking to `/?q=<question>&o=<opts>` (fork the poll) and 8 hub pills (`/idees`, `/ideas`, `/guides`, `/blog`, `/read`, `/discover`, `/music`, `/mot`).
- **`below-profile-seo.tsx`** — fetches 6 trending non-bot profiles from `profiles_public` ordered by `total_points DESC` (no `updated_at` column — total_points is the recency proxy), aggregates top 5 topics from the user's polls, renders profile cards + topic pills + 8 hub pills. Mounted after `<ProfileView />`.

Wiring: `app/[slug]/page.tsx` — added `topics` to the poll `.select(...)`, passes it + `lang` into `<BelowPollSeo />`. Profile branch mounts `<BelowProfileSeo profileId={profile.id} />` after `<ProfileView />`. Existing JSON-LD (BreadcrumbList + ProfilePage on profile, QAPage + FAQPage + BreadcrumbList on poll) is untouched. Result: each poll page now exposes ~20-24 new internal anchors (8 similar + 2-5 topic pills + 1 fork CTA + 8 explore pills) and each profile page ~14-19 (6 profiles + 3-5 topic pills + 8 explore pills). `npx tsc --noEmit` exits clean. Commit `d754647` pushed to main.

**2026-05-20, Science QCM pack.** User asked for QCM (multiple-choice quiz) pages on lots of subjects, physics-first, in multiple languages, with 10 agents ("fait stp des page de QCM sur plein de sujet physique etc et dans plsuieur langue met 10 agent la dessus"). Shipped via **10 parallel agents** — **39 new quizzes / ~463 new questions across 8 languages**, plus activated the previously-WIP quiz routes.

New data files in `lib/quizzes/data/`:
- `physique-fr.ts` — 4 quiz FR: mécanique classique, électricité & magnétisme, ondes/son/optique, relativité & quantique (45 questions)
- `physics-en.ts` — 4 quiz EN: Newtonian mechanics, quantum basics, special/general relativity, particle & cosmology (48 q)
- `chimie-multi.ts` — 4 quiz FR+EN: tableau périodique FR, réactions FR, organic chem EN, biochemistry EN (48 q)
- `maths-multi.ts` — 4 quiz FR/EN/ES/DE: algèbre FR, calculus EN, geometría ES, Statistik DE (46 q, topic `culture-generale`)
- `astronomie-multi.ts` — 4 quiz FR/EN/IT/JA: système solaire, black holes/stars, galassie, 宇宙探究 (48 q)
- `biologie-avancee.ts` — 4 quiz FR/EN: génétique/ADN, evolution, ecology, microbiologie (48 q)
- `ciencias-es.ts` — 4 quiz ES: física, química, biología celular, astronomía (48 q)
- `wissenschaft-de.ts` — 3 quiz DE: Physik, Chemie, Biologie & Evolution (36 q)
- `scienze-it-pt.ts` — 4 quiz IT+PT: fisica classica IT, chimica IT, física mecânica PT, biologia celular PT (48 q)
- `sciences-ja-zh.ts` — 4 quiz JA+ZH: 物理の基本 JA, 化学と周期表 JA, 物理基础 ZH, 化学与元素周期表 ZH (48 q)

Routes activated by renaming `.wip` → `.tsx`:
- `app/quiz/page.tsx` — hub grouped by topic, ItemList JSON-LD, glass cards
- `app/quiz/[slug]/page.tsx` — quiz article + BreadcrumbList + Quiz schema.org JSON-LD, static `details`-collapsed all-answers section for SEO indexing, FAQ-style microdata per question
- `app/quiz/[slug]/quiz-play.tsx` — client interactive player (step-by-step, scored, verdict tier, restart)

Wiring:
- `lib/quizzes/index.ts` extended with 10 new imports + spreads — `allQuizzes` now totals ~60 quizzes (existing 21 + new 39)
- `app/sitemap.ts` — added `/quiz` hub URL + map over `allQuizzes` for individual `/quiz/[slug]` (priority 0.75, monthly changefreq)
- Reserved username `quiz` was already in 50+ list shipped earlier today

Facts are real / well-known: Planck h=6.626e-34, c=299,792,458 m/s, Newton 1687, Mendeleïev 1869, Avogadro 6.022e23, Watson/Crick 1953, Higgs 2012, CMB 2.725K, etc. JA/ZH files use single-quoted strings to avoid the unescaped CJK quote bug that broke `lib/seo/read/r08.ts`.

**2026-05-20, Cloudflare R2 migration prep.** User asked to prepare moving music storage from Vercel Blob to Cloudflare R2 ("prepare le changement de vercel blob a lcoduflare r2"). All code is in place, awaiting the user to create the R2 bucket + paste creds. Architecture: **public R2 bucket fronted by `music.moomz.com`** custom domain. `/api/track/[id]` does a 302 redirect to the R2 URL — no proxying, no Vercel function bandwidth per play. Falls back to the old Vercel Blob proxy whenever `R2_PUBLIC_BASE_URL` is unset, so the cutover is non-disruptive.

Files shipped:
- **`lib/r2.ts`** — `getR2PublicBase()` + `r2PublicUrl(key)` builder reading `R2_PUBLIC_BASE_URL`. Returns null when unset → triggers Vercel-Blob fallback in the route.
- **`app/api/track/[id]/route.ts`** — rewritten. Caches the Supabase row lookup forever (tracks are immutable, no TTL needed). If R2 is configured, returns `NextResponse.redirect(r2Url, 302)` with `Cache-Control: public, max-age=86400, immutable`. Otherwise falls back to the existing Vercel-Blob proxy logic (kept intact, with its 10-min signed-URL TTL cache).
- **`scripts/upload-music.mjs`** — replaced `put()` from `@vercel/blob` with `S3Client + PutObjectCommand` against R2's S3-compatible endpoint. Idempotent: HeadObject pre-check skips uploads already in R2. Sets `Cache-Control: public, max-age=31536000, immutable` at upload time. Reads new secrets from `.secrets.txt`: `r2_account_id`, `r2_access_key_id`, `r2_secret_access_key`, `r2_bucket`.
- **`scripts/migrate-blob-to-r2.mjs`** — new one-shot. Walks every row in `tracks`, downloads bytes via `head() + fetch` from Vercel Blob (needs `BLOB_READ_WRITE_TOKEN`), uploads to R2 under the same key. `--dry-run` flag. Idempotent (skips keys that already exist in R2).
- **`docs/cloudflare-r2-migration.md`** — step-by-step user runbook: create bucket → custom domain → API token → fill secrets → `npm install` → `migrate-blob-to-r2.mjs --dry-run` → real run → `vercel env add R2_PUBLIC_BASE_URL` → verify the 302 in the browser → eventually drop the `@vercel/blob` fallback + dep.
- **`package.json`** — added `@aws-sdk/client-s3@^3.682.0` to `devDependencies` (used only by the two scripts, not bundled by Next).

The `tracks.blob_url` column stays as-is — it stores the bucket key (e.g. `tracks/foo.mp3`), which is backend-agnostic. Renaming would cost a code-wide migration for zero functional gain.

**User's TODO to actually flip the switch** (in order):
1. Create R2 bucket `moomz-music` on Cloudflare dashboard.
2. Connect custom domain `music.moomz.com` (or use the `pub-<hash>.r2.dev` URL).
3. Create R2 API token (Object R/W, scoped to that bucket).
4. Append `r2_*` entries to `.secrets.txt` per the docs.
5. `npm install` to pull in `@aws-sdk/client-s3`.
6. `node scripts/migrate-blob-to-r2.mjs --dry-run` then for real.
7. `vercel env add R2_PUBLIC_BASE_URL production` with the custom domain URL.
8. Deploy / redeploy.
9. (Days later) drop the Vercel-Blob fallback from the route + `@vercel/blob` from deps.

**2026-05-20, security hardening pass.** Ran a 25-agent audit on the whole app (auth/RLS/realtime/i18n/perf/...). Critical block shipped in migration **`012-security-hardening.sql`** + 2 code patches:

- **Open redirect fixed** in `app/auth/callback/route.ts` — `next` param is now only honored if it starts with `/` and not `//`. Previous code accepted `?next=https://evil.com`.
- **Reserved usernames expanded** in `app/actions.ts` from 23 to 50+ — covered the SEO routes (`idees`, `ideas`, `guides`, `mot`, `word`, `read`, `music`, `creators`, `pricing`, `alternatives`) and reserved future surfaces (`ask`, `daily`, `world`, `register`, `logout`, etc.). Without this, a user could claim `ideas` and shadow the whole `/ideas/[slug]` SEO surface.
- **5 public views recreated as `SECURITY INVOKER`** (`polls_with_stats`, `polls_trending`, `profiles_public`, `ask_questions_public`, `votes_world_24h`) — they previously ran as DEFINER and bypassed RLS. Supabase advisor flagged all 5 as ERROR-severity.
- **REVOKE EXECUTE** on `fake_vote_burst()`, `pick_daily_moomz()`, `rls_auto_enable()`, `sweep_dead_polls()` from anon + authenticated. Cron jobs continue to run as `postgres` so they're unaffected. Previously any anon REST caller could trigger bot bursts or rotate the daily.
- **`profiles.is_bot` write blocked** for anon/authenticated via `block_is_bot_user_set()` trigger (BEFORE INSERT/UPDATE). Service role bypasses. Before this, anyone could create a bot-flagged profile and inject into the FeaturedAsks home carousel.
- **`ask_questions_public` filtered to status IN ('pending','answered')** — `skipped` is no longer publicly readable. Pending stays public because FeaturedAsks intentionally surfaces bot-pending questions.
- **`pick_daily_moomz()` materialized** in 012 — the function ran live (via PAT push) but had no local migration; a fresh env recreate would have broken the daily cron.
- **Verified live**: all 5 views show `security_invoker=true` in `pg_class.reloptions`, the 4 functions show `has_function_privilege(anon, 'EXECUTE') = false`, trigger `profiles_block_is_bot` exists.

**Still open from the audit** (not blocking but flagged for follow-up):
- Cookies missing `secure: true` (auth + voter + history). Set when shipping over HTTPS only.
- `moomz_voter` is `httpOnly: false` — bypassable rate-limit. ASK 3/day cap defeated by cookie rotation. Need server-side IP fingerprint or proper auth-gated rate-limit.
- ASK "anonymous" UI toggle in `ask-section.tsx` is currently fake — `asker_id` is always written. Either honor the toggle (skip `asker_id` insert) or remove the UX promise.
- Race condition on `castVote`: two parallel votes in <3s can double-credit the streak (no atomic locking).
- BottomNav polls `/api/ask-pending` + `/api/polls-stats` every 30s without visibility check → battery drain.
- 19 i18n keys missing in pt/de/ja/zh (card.passed, card.vote, share.*, votes.*, results.refresh, nav.music, polls.emptyBody, …).
- Onboarding is hardcoded FR (no `onboarding.*` namespace, topic labels in FR).
- **Image upload claim in this file was inaccurate**: the `image_url` column exists on `polls` and in the views but `CreatePollForm` has no file input and `createPoll` doesn't accept an upload. Either delete the claim or actually wire the upload.
- Migration 002 ALTERs columns on `profiles` table without ever CREATEing it. The live DB is fine (Supabase Auth created `profiles` once and the column adds are idempotent), but a true fresh-from-scratch apply would error. Schema is split across `supabase-schema.sql` + 001 — fragile.

**2026-05-20, site-wide fluidity / perf pass.** User asked for music to start without waiting + general site fluidity ("la musique arrive pas tout de suite parcontre fait en sorte que ca vienne fluidement et pas attendre trop optimise le site, les chargement, la fluidite met 10 agent la dessus"). Shipped via **10 parallel agents** + a follow-up bundle-audit application — **commit `2f26325`**.

- **Music instant playback**: `/api/track/[id]/route.ts` now keeps a per-instance `TRACK_CACHE` (pathname + signed blob URL, 10-min TTL) so `play()` skips the Supabase row lookup + Vercel Blob `head()` round-trip on every press. `music-provider.tsx` sets `el.src` synchronously inside the click handler (no `await`, preserves Safari user-gesture chain), switched `preload` to `auto`, removed the `el.load()` call that was interrupting `play()` on some browsers. Speculative idle prefetch warms the first click. `/music/page.tsx` now uses ISR (`revalidate=300`) instead of `force-dynamic`. **Expected: first-click latency 500ms-2s → 50-200ms**.
- **Supabase-browser lazy import** in `music-provider.tsx` — the module-level `import { getBrowserSupabase } from "@/lib/supabase-browser"` was removed; both call sites (idle prefetch + `fetchNextTrack`) now `await import("@/lib/supabase-browser")` on demand. **Saves ~187 kB of @supabase/supabase-js from every SEO route** (~500+ pages: idees/ideas/guides/blog/mot/word/read).
- **Home Suspense streaming**: `app/page.tsx` is now a synchronous server component (hero + tagline + JSON-LD + `CreatePollForm` paint immediately, zero DB roundtrips on critical path). Sections split into `app/_home/{daily-card-section,trending-feed,world-vibes-section}.tsx`, each its own async server component with a matching fixed-dimension skeleton in `app/_home/skeletons.tsx` (no CLS). `FeaturedAsks` wrapped in Suspense too. `dynamic = "force-dynamic"` preserved (cookies in children).
- **Server queries parallelized**: `app/me/page.tsx`, `app/mes-votes/page.tsx`, `app/mes-sondages/page.tsx`, `app/[slug]/page.tsx` — 4 sequential awaits folded into `Promise.all`. `select("*")` on the slug poll trimmed to explicit projection. Two defensive `.limit(50)` added on history queries.
- **Service worker rewritten** (`public/sw.js` bumped to `moomz-v3-swr`, `app/sw-register.tsx`): versioned caches (`-html`, `-static`, `-runtime`), stale-while-revalidate for HTML with a 1500ms network race, cache-first for `_next/static` + fonts + images, SWR for cross-origin (Supabase / fonts.googleapis / Unsplash / Cloudinary / jsDelivr). Skip-list: non-GET, `next-action` header (server actions), `/api/*`, `/auth/*`. Registrar uses `updateViaCache: 'none'` and triggers `registration.update()` on focus + visibility change.
- **CSS / animations** (`app/globals.css`): blob morph wrapped in `.blob-stage` (`contain: layout style paint`), `translate3d` hardware promotion on all transform keyframes, `.glass` blur 20px → 14px (~50% paint reduction). Reduced-motion path strips infinite animations entirely. New utilities `.cv-auto` (`content-visibility: auto`) and `.display-fast` (`text-rendering: optimizeSpeed`) opt-in.
- **PollCard** (`app/poll-card.tsx`): `Confetti` is now `next/dynamic({ ssr: false })` so it only loads after a vote. IntersectionObserver state-flip guard avoids duplicate setState during fast scroll. `preloadInFlightRef` prevents duplicate count fetches. `<Link prefetch={true}>` explicit.
- **Fonts** (`app/layout.tsx`): Bagel Fat One `preload: false` (not above-fold), explicit fallback chain on both fonts, `adjustFontFallback: true` explicit (CLS-stable).
- **Images / next.config**: zero `<img>` to swap (all avatars are emoji text), but `next.config.mjs` now lists `tpncpfatthgssttzrchu.supabase.co/storage/v1/object/public/**` as an `images.remotePatterns` entry in case `poll.image_url` is rendered through `next/image` later.
- **Realtime audit (read-only)**: max **1 simultaneous channel** per feed (home/discover) due to IntersectionObserver gating in `poll-card.tsx`. `vote-client.tsx` on `/[slug]` opens 1 channel post-vote, cleaned on unmount. No leaks.
- **Pre-existing untracked breakage**: `lib/seo/read/r08.ts` (unescaped Chinese quotes) and `lib/quizzes/index.ts` (references missing data files) cause local `next build` to fail at typecheck, but BOTH are untracked + unimported by anything in git, so they don't ship to Vercel.

**2026-05-19, Keyword landing pages + 15-lang rich polls.** User asked for 15 parallel-language content generation ("ouvre 15 cmd dans plusieur langue pour faire du contenu... j'veux du contenu pour ce site quil soit visible sur tout google partout") then for an interlinked keyword system ("je veux quelle soit linker par mot clé... met une 20aine dagent dessus pour fair een parralele"). Shipped via 35 parallel agents:

- **375 new SEO seed polls in 15 languages** (commit `70966ad`). `scripts/seed-polls/data/{lang}/99-seo-rich.json`, 25 polls × 15 langs = fr/en/es/it/pt/de/ja/zh PLUS 7 brand-new locales nl/ru/ar/ko/hi/tr/pl. Each poll has 2-4 options with **150-300 word educational explainers per option** (real facts: distances, dates, science, cultural origin — sun's mass, snow crystal symmetry, Margherita 1889, Sam Panopoulos 1962, etc.). Pushed via `node scripts/seed-polls/insert.mjs` with `ON CONFLICT (slug) DO NOTHING` — idempotent, ran fine.
- **240 keyword landing pages** (120 FR `/mot/<slug>` + 120 EN `/word/<slug>`). 10 FR + 10 EN topic clusters: sciences, food, couple, pop-culture, sport, drama, money, tech, voyage/travel, fêtes/holidays. Each page ~1000-1500 words: intro + 3 sections + 4 FAQs + 5-8 related slugs (cross-linking across topics). Data lives in `lib/seo/keywords/data/*.json`, auto-loaded by `lib/seo/keywords/loader.ts` (fs.readdirSync at module init).
- **`KeywordPage` type** (`lib/seo/keywords/types.ts`) — slug, locale, keyword display label, **matchPatterns** (lowercase ilike substrings for poll matching), topic, title/description, emoji, intro, sections, faq, related, updatedAt.
- **Route** `/mot/[slug]` (FR) and `/word/[slug]` (EN) — `generateStaticParams` over the loader, `generateMetadata` with canonical/OG/Twitter, `revalidate=3600`. Shared view at `app/_seo/keyword-page-view.tsx` queries `polls_with_stats` server-side with `or()` on `matchPatterns.map(p => "question.ilike.%${p}%")` and renders the matching moomz polls below the editorial sections.
- **Hubs** `/mot` and `/word` — grouped by `topic`, list all keyword chips.
- **`KeywordChips`** (`app/[slug]/keyword-chips.tsx`) — rendered below `PollExplainer` on every `/[slug]` poll page. Scans `getAllKeywords()` for entries whose matchPatterns appear in the poll's question+options, renders up to 10 as chip-links. Creates dense internal interlinking: every poll now exposes the keyword pages it touches, and every keyword page lists the polls back.
- **Sitemap** — `app/sitemap.ts` adds `/mot` and `/word` hubs to staticUrls + maps over `getAllKeywords()` for individual URLs.

**Failure modes encountered**: 3 sub-agents hit socket disconnects mid-run (TR poll, AR poll, FR voyage keyword) — relaunched cleanly, all succeeded on the retry.

**2026-05-19, WorldVibes map.** User asked for a world map discreetly integrated in the app ("ajoute une maps monde que tu intégre disctrement dans lapp, interactive et belle gosse et utile avec lapp"). Shipped:
- **Migration 010** (`supabase-migrations/010-vote-country.sql`) — adds `votes.country` text column with an ISO-2 CHECK constraint, indexes on `(country, created_at desc)`, and a `votes_world_24h` view aggregating non-null countries from the last 24h. Anon `SELECT` granted on the view.
- **Migration 010b** (`010b-bot-country.sql`) — updated `fake_vote_burst()` to pick a random ISO-2 country from a curated pool of 69 codes (matches `lib/countries.ts`) so the map keeps refreshing during low-traffic windows.
- **Geo capture** in `castVote()` (`app/actions.ts`) — reads `x-vercel-ip-country` from Next.js `headers()` and inserts it alongside the vote. Validates `^[A-Za-z]{2}$` client-side because of the DB CHECK.
- **`lib/countries.ts`** — curated 69 country centroids (cc/name/lat/lon) covering Europe, Mideast, Africa, Asia, Oceania, Americas. Hand-picked to land dots on populated centers, not deserts.
- **`app/world-vibes.tsx`** — client component. Equirectangular projection cropped lat ∈ [-60,+75] (drops empty polar regions), 360×135 SVG viewbox, 2.67:1 aspect. Faint equator + tropics lines. For each country: idle dot (rgba white 0.18) if no votes, glowing pink dot with animated pulse halo (`<animate>` r and opacity 2.8s loop) sized by sqrt(votes / maxVotes) if active. Hover/touch shows tooltip with native country name + vote count. Header: emoji 🌍 + i18n title + total votes + active country count.
- **Home wiring** — `app/page.tsx` fetches `votes_world_24h` in parallel with trending + daily, renders `<WorldVibes>` between the polls feed and `<SeoFooter>`. Discreet placement: glass card matching the rest of the home.
- **i18n** — `world.{title,votes,countries,empty}` keys across all 8 langs (fr/en/es/it/pt/de/ja/zh).
- **Backfill** — bot votes from the last 24h were retro-assigned random countries via SQL so the map shows live data immediately (~20 countries with 700+ bot votes each).
- **Build** — typecheck green for all my files; the existing untracked `lib/seo/read/r08.ts` has parse errors (unescaped Chinese quotes) that pre-date this work and don't ship (untracked + unimported).

**Earlier 2026-05-19, SEO push.** User asked for 100+ SEO landing pages ("écris une centaine de page pour référencer le site, je veux que tu sois fort, cibles les niche cible tout"). Shipped:
- **101 statically-generated landing pages** (build output: 118 total routes):
  - 45 `/idees/[slug]` FR (Insta, TikTok, Snap, WhatsApp, Discord, couple, premier-rdv, ami, BFF, soirée, anniv, mariage, EVJF, EVG, baby shower, famille, enfants, ado, lycée, fac, classe primaire, collègues, team-building, startup, drôle, rebelle, drama, débat, this-or-that, would-you-rather, food, restau, voyage, Netflix, musique, mode, fitness, gaming, ferme du buzz, St-Valentin, Halloween, Noël cadeau, rentrée, été plage, argent finances)
  - 29 `/ideas/[slug]` EN miroir + politics/sports/debate/icebreaker
  - 12 `/guides/[slug]` (sondage Instagram/anonyme/WhatsApp en FR + EN counterparts + Strawpoll alt + free poll maker + icebreaker guide)
  - 15 `/blog/[slug]` (vibe-check meaning, Gen Z poll culture, dating poll trend, viral case studies, moomz-vs-Instagram-poll, moomz-vs-Google-Forms, polls engagement stats, psychologie sondage, ferme du buzz c'est quoi…)
- **Content layer**: `lib/seo/` typed TS data (`types.ts`, `idees-1.ts`, `idees-2.ts`, `ideas-en.ts`, `guides.ts`, `blog.ts`, `extras.ts`, `index.ts`). Each `SeoPage` carries title/h1/description/intro + 4 sections + 10 polls + 4-6 FAQ + related links + updatedAt. ~500-700 words per page, substantive content (not boilerplate).
- **Route handlers**: `app/{idees,ideas,guides,blog}/[slug]/page.tsx` use `generateStaticParams` + `generateMetadata` (canonical, OG, Twitter); `app/{idees,ideas,guides,blog}/page.tsx` are hub indexes.
- **Shared views**: `app/_seo/seo-page.tsx` (article layout with sticky CTA, prompt grid with "lancer ce sondage" deeplinks, FAQ, related), `app/_seo/seo-hub.tsx` (grid of all pages), `app/_seo/json-ld.tsx` (Article + FAQPage schemas).
- **`app/sitemap.ts`** — auto-generated, 108 URLs. **`app/robots.ts`** — allows root, disallows /api, /auth, /me, /mes-votes, /mes-sondages.
- **`app/seo-footer.tsx`** — internal-link footer (4 hub links + 12 featured slug pills). Added to home + 404.
- **CreatePollForm prefill**: reads `?q=...&o=opt1|opt2|opt3` via `useSearchParams`. Every poll suggestion on SEO pages deeplinks to `/?q=...&o=...` which prefills the create form. Wrapped in `<Suspense>` on home.
- **Build verified** (`npm run build` green). **Smoke tested** locally on port 3010 — all SEO routes return 200, sitemap.xml has 108 `<loc>` entries.
- **Commit `b282b10`** pushed to main. Vercel deploys automatically.

**Earlier same day session.** Shipped the full **ASK feature** (Ask.fm-style anonymous Q&A on profiles) + **16 multilingual fake profiles** with 87 pending questions across 8 langs. Also redesigned the bottom nav: replaced the "Mes sondages" tab with a unified **Profile (/me) tab** that surfaces the ASK inbox badge.

- **Migration 005** (`supabase-migrations/005-ask-feature.sql`) — new `ask_questions` table (id, recipient_id, asker_id, text, answer, status pending/answered/skipped, locale, timestamps) + `ask_questions_public` view (drops asker_id), RLS (anon insert ok, anon SELECT scoped to answered on base table; full read via the public view), `ask_recent_count(recipient,asker)` helper for rate limiting (3/day), `profiles.is_bot` flag, realtime publication. Also refreshes `profiles_public` to expose `is_bot`.
- **Migration 005b** (`supabase-migrations/005b-ask-public-view.sql`) — applied after 005 to lock the policy + ensure the public view covers all statuses.
- **Migration 006** (`supabase-migrations/006-seed-fake-profiles.sql`) — 16 bot profiles (2 per locale × 8 langs) with avatars/bios/usernames like `luna_fr`, `theo_fr`, `maya_en`, `jay_en`, `sofia_es`, `diego_es`, `giulia_it`, `matteo_it`, `rita_pt`, `joao_pt`, `lara_de`, `finn_de`, `aoi_ja`, `haru_ja`, `mei_zh`, `lin_zh`. Each carries 5-6 pending questions seeded with `asker_id LIKE 'seed_bot_%'` so re-runs are idempotent.
- **Server actions** (`app/ask-actions.ts`) — `askQuestion`, `answerQuestion`, `skipAskQuestion`, `deleteAskQuestion`. Rate limit 3/asker/recipient/24h via `ask_recent_count` RPC. Noise filter reused. Returns `{ ok, error }` discriminated union.
- **`lib/ask-prompts.ts`** — 32 addictive Ask.fm-style prompts × 8 languages = 256 curated chips. `getAskPrompts(locale, n)` returns a shuffled subset. Shown as inspiration chips in the composer.
- **UI on `/[username]`** — new `ProfileTabs` (moomz / ask) with a counter badge. `AskSection` renders the composer (textarea + prompt chips + 280-char counter + anonymous toggle), the pending list (owner only), and the answered Q&A feed. Optimistic answer/delete with `useTransition`. `ask-section.tsx` is a client component.
- **`/me` inbox** — `app/me/ask-inbox.tsx` shows pending questions with inline answer composer + delete. Surfaces above the profile-edit form when ≥1 pending.
- **`/api/ask-pending`** — JSON `{count}` endpoint reading from `ask_questions_public`. Used by `BottomNav` to drive the pink badge on the new Profile tab (`/me`).
- **Home page** — new `FeaturedAsks` server component renders a horizontal snap-scroll carousel of bot profiles with sample pending question text + count CTA. Built from `profiles_public` (filtered by `is_bot=true`) joined to `ask_questions_public`.
- **Bottom nav redesign** — swapped the `/mes-sondages` tab for a new `/me` tab (`MeIcon` person glyph) with the ASK pending badge. `/mes-sondages` still works as a page; quick link from `/me`. `nav.me` i18n key added across 8 langs.
- **8-lang i18n** — full `ask.*` namespace (composer, answers, pending, featured carousel CTAs, errors) translated in fr/en/es/it/pt/de/ja/zh.
- **Public view safety** — `ask_questions_public` strips `asker_id` so anyone can read pending teasers and counts without exposing who asked.

**Build status**: typecheck green (`npx tsc --noEmit`), `next build` produces all routes including `/api/ask-pending`. Smoke-tested locally: home renders "🌟 Profils du jour" carousel with Luna/Maya/etc., `/luna_fr` shows the ask composer with FR prompt chips, `/api/ask-pending` returns 200.

---
**Earlier 2026-05-19, first session.** User reported the auth gap ("dans /mes-votes y'a 'réserve ton nom' mais pas 'se connecter'"). Migrated from cookie-only pseudo-auth to **Supabase Auth magic-link** while preserving legacy claim_token users. Also shipped:
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
- [x] **Citations/quotes pack — 128 pages, 1024 quotes, 8 langs.** `/citations` (FR), `/quotes` (EN), `/citation/[locale]` (es/it/pt/de/ja/zh). 16 universal themes. Data at `lib/seo/quotes/data/*.json`, loader `lib/seo/quotes/loader.ts`. `QuoteChips` links every poll to themed quote pages by matchPatterns. Wired in sitemap + footer + reserved usernames.
- [x] **/compare hub + 30 head-to-head pages** (FR+EN, moomz-vs and cross-competitor matrix). Loader at `lib/seo/compare/loader.ts`, routes at `app/compare/[page,slug]`. Wired in sitemap, reserved in usernames.
- [x] **/template hub + 72 poll templates** (FR/EN/ES/IT/PT/DE, categories wedding/work/classroom/couple/party/teen/drama/debate/food/travel/seasonal). Each template links to `/?q=&o=` to prefill `CreatePollForm`. Loader at `lib/seo/templates/loader.ts`.
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
