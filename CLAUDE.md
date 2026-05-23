# moomz — Project Context for Claude Code

> **For Claude on session resume**: this file IS the project memory. Read it cold — the user (bendrop740i, French speaker) returns without re-explaining. **Update it at the end of any meaningful change.** Keep it tight: compress the changelog, never let it grow back into a blow-by-blow log.

## Where we left off (most recent)
**2026-05-23 — Polish final avant gel MVP ~1 an.** Deux fixes : (1) « home charge 3-4 fois avant de s'afficher » → streaming SSR via `<Suspense fallback={<FeedSkeleton/>}>` autour du `<ImmersiveFeed/>` ; chrome + skeleton card plein écran (`app/_feed/feed-skeleton.tsx`) partent dans le 1er chunk HTML, le feed réel arrive en streaming dès que le RPC résout. (2) Pastille idle « ▶ Vibe radio » remise bas-droite quand rien ne joue (musique relançable depuis toutes les pages, pas seulement /music & /play), label i18n 8 langues.

**2026-05-22 — Version MVP FINALE : audit 6 agents, bugs réglés, menu refondu.** Utilisateur : « prépare la version MVP finale, résous les bugs sans demander, refais le menu (trop moche), vérifie trad/nav/ux, push ». À geler ~1 an.
- **Bug « pages qui se chargent plusieurs fois » = redirections 301/307 en cascade.** Des liens internes de la surface SEO pointaient sur des routes nues (`/quiz`, `/ideas/x`, `/?q=`…) que `middleware.ts` redirige → double-chargement visible à chaque clic. Réglé : `pageUrl()`/`pollLaunchUrl()` (`lib/seo/types.ts`) émettent l'URL finale locale-préfixée ; liens nus corrigés dans `seo-page`/`seo-hub`/`related-grid`, breadcrumbs des ~20 pages détail, hub `/vs`, deeplinks `/?q=`→`/create?q=`, sitemap. Zéro redirection sur clic interne.
- **Bug « moomz qui ressemblent à rien » = contenu poubelle dans le feed.** Nettoyage DB (mig 032) : 5610→5234 polls — supprimé 9 garbage (keysmash, polls de test), 175 polls en langues sans UI (ar/hi/ko/pl/tr/ru/nl), 192 doublons exacts. 8 langues, 0 doublon.
- **Menu refondu** (`bottom-nav-v2.tsx`) : glass premium, onglet actif = pilule gradient lumineuse (fondu), bouton central 60px avec halo respirant (`nav-fab-glow`) + sheen glossy. Badge profil affiné.
- **Footer fantôme** sous le feed immersif réglé : `footer-zone.tsx` masque footer + locale-switcher sur `/` et `/discover` (le feed 100dvh est désormais seul à l'écran).
- **Polish** : 5 `alert()` natifs → toast glassmorphism (`app/toast.tsx`) ; headers de sécurité (`next.config.mjs` — `frame-ancestors` garde `/embed` framable, `poweredByHeader:false`) ; 3 clés i18n manquantes ajoutées ×8 langues ; 9 fichiers morts supprimés (`bottom-nav.tsx` v1, `onboarding.tsx` orphelin, etc.) ; skeleton de chargement `/[slug]` ; SW `update()` throttlé.
- Vérifié : `tsc` clean, `next build` clean. **Toujours builder avec `NODE_OPTIONS=--max-old-space-size=8192`** (OOM Windows sinon, code `3221226505`).

## What it is
Free mini-SaaS: **vibe-check / shareable polls**. User asks a question (2-6 emoji options), gets a short link `moomz.com/abc12`, shares it; votes show live with animated bars. Anti-double-vote via cookie + SQL `unique(poll_id, voter_id)`. Audience: Gen Z, mobile-first. Plus a large SEO surface (~3200 routes, all 8 langs) for Google traffic. Live on `moomz.com` since 2026-05-18.

## Stack
- **Next.js 14** App Router + TypeScript + Tailwind. Design: dark glassmorphism, SSX-cartoon vibe, 3 animated blobs, fonts Space Grotesk + Bagel Fat One.
- **Supabase** (Postgres, free tier) — Auth = magic-link email via `@supabase/ssr`. Legacy anon `claim_token` flow still supported.
- **Vercel** (free tier) — auto-deploy on push to `main`. CLI not installed locally (use Vercel MCP/dashboard, or the user runs `! vercel …`).
- **Resend** — SMTP for auth emails. **Cloudflare R2** — planned music storage (code ready, not cut over). **Google Analytics** `G-8BFV1DWKY9` live in `app/layout.tsx`.
- Domain `moomz.com` (registrar GoDaddy).

## Core product — immersive Discover feed ✅
`/` opens directly on a TikTok-like full-screen opinion feed (shared component `app/_feed/immersive-feed.tsx`, mounted by `/` and `/discover`). Cards 100 dvh, color wash per poll, thumb-anchored vote, animated bar reveal + emotional verdict, swipe snap + preload, double-tap to vote, haptics, CTA every 5. Menu: `Feed · Explore · ➕ · Play · You`. Feed de-repeats via RPC `get_feed_polls` (random weighted sample over the whole lake) + localStorage "seen" memory. Daily editorial content via `moomzhq` account + `editorial_queue` + daily cron. Permanently declined: follower system / comments (kill the anonymous-fast loop). Spice Mode (@-tag people) — do NOT build without explicit go-ahead.

## Monetization — coins economy (M1+M2+M3 shipped & live)
Virtual **coins** backbone (no cashout — legal). Faucets = streaks/Daily/achievements/won predictions. Sinks = predictions, poll boost, cosmetics.
- **M1** — parametric achievement engine (`lib/achievements/`), 50 families × tiers = **418 achievements**, 8-lang. Migrations 016-020: counter columns on `profiles`, `coin_transactions` ledger, `achievement_defs` catalogue, RPCs `apply_coins`/`claim_achievements` (server re-validates) / `get_achievement_stats`. Vote→achievements→coins loop live in `castVote`+`createPoll`. Page `/haut-faits`.
- **M2 — predictions** (mig 021/022): bet coins on a poll outcome, `place_prediction` RPC, `resolve_predictions` cron (settles 24h after creation, payout clamped ×1.2–×8, refund if <10 votes). `prediction-widget.tsx` on the poll page.
- **M3 — poll boost** (mig 023): 150 coins → 24h boost (5× in `polls_trending`). **Coin shop** (mig 024): `/boutique`, buy palettes with coins.
- **SEO-page ads** — AdSense infra shipped, dark until the user sets `NEXT_PUBLIC_ADSENSE_CLIENT`+`_SLOT` in Vercel. `<AdSlot/>` on ~1300 SEO content pages only.
- **Next: M4 — Stripe** (needs the user: Stripe account + API keys). Buy coins for real money — the only revenue piece still missing.

## Auth
- **Magic-link email is the sole auth path.** Resend SMTP (`smtp.resend.com`, sender `hello@moomz.com`), DNS-verified, branded dark template.
- Flow: `/login` → `signInWithOtp` → email → `/auth/callback` exchanges code, links any legacy `claim_token` profile via `link_profile_to_user()`. `getProfileLookup()` resolves session `user_id` first, `claim_token` cookie second. `profiles.claim_token` is nullable (mig 017).
- Google sign-in removed 2026-05-20 (placeholder OAuth creds). To re-add: real OAuth client, redirect URI `https://tpncpfatthgssttzrchu.supabase.co/auth/v1/callback`, restore button in `app/login/login-form.tsx`.

## i18n
8 langs (fr en es it pt de ja zh) — `lib/i18n.ts` + `lib/i18n-server.ts`, `useT()`/`getT()`. AR = RTL flip only.
- **`LocaleProvider`** (`app/locale-context.tsx`) re-derives the locale **every render** — from the URL (`usePathname()`) on the SEO surface, from the `moomz_locale` cookie on the app surface. This fixed the recurring "nav chrome stuck in old language" bug (the root layout never re-renders on client nav).
- **URL-based locale routing for the SEO surface**: SEO pages live at `moomz.com/{locale}/...`. `middleware.ts` rewrites `/{loc}/{route}` → the route + an `x-moomz-locale` header that `getLocale()` reads. Localized route segments via `lib/seo/route-names.ts` (`/en/courses`, `/es/cursos`…). Twin routes (`word/mot`, `ideas/idees`, `quotes/citations`, `define/definition`) 301 to their fixed-locale prefix. Homepage + `/[slug]` polls + app surface stay at root with cookie locale. Internal SEO nav uses `lib/seo/seo-href.ts` helpers to link straight to `/{loc}/<seg>` (no 301 hop).
- **SEO content is fully translated in all 8 langs**: `/vs` `/compare` `/quiz` `/guides` `/blog` `/formation` `/idees`+`/ideas`, keyword pages, quotes, templates, tools.
- Poll content stays in the author's language (auto-translated at creation via MyMemory, mig 029, `lib/translate.ts` — shown in the reader's locale). Only chrome follows the visitor's locale.

## Feature inventory (don't rebuild)
- **Core**: create poll, optimistic vote + Realtime live counts, share buttons, dynamic OG images (poll page renders live % bars; `/api/og/verdict` renders a personal verdict), branded 404.
- **Feeds**: immersive feed (home + `/discover`), `polls_trending` view (HN-decay), hot/rising/new badges, voted/skipped filtered out.
- **Gamification**: streak + points ×1-×5, StreakHUD, vote effects, majority/rebel reveal, Daily Moomz, cosmetics (`lib/cosmetics.ts`), 418-achievement engine.
- **Profiles**: `/[username]` public page, `/me` dashboard, ASK anonymous Q&A.
- **PWA**: manifest, versioned SW (`public/sw.js`), install prompt. **Push**: subscribe + SW handler + `lib/push.ts` + `daily-push` cron (18h UTC) — live in prod.
- **SEO surface** (~3200 routes, 8 langs): `/idees`+`/ideas` (581 pages — FR `idees`, others `ideas`, locale-aware hub), `/guides` `/blog`, `/mot`/`/word`/`/topic/[locale]` (keywords), `/compare` (120) `/vs` (~7840) `/template` (132) `/quiz` `/formation` (800 modules, `lib/formation/data/<theme>-<lang>.json`), `/citations`/`/quotes`/`/citation/[locale]`, 9 tools under `/outils`. Data in `lib/seo/**` + `lib/tools/**` + `lib/quizzes/**`. Wired into `app/sitemap.ts` + `app/seo-footer.tsx`; route names guarded in `RESERVED_USERNAMES`.
- **Other**: WorldVibes map, music player (`<audio>` module-level singleton in `music-provider.tsx` — survives navigation).
- **Nav**: `SiteHeader` + `BottomNavV2` (client `<Link>`s). `app/site-footer.tsx` — locale-aware footer, client component using `useLocale()`.

## Bots / content seeding
- **Fake votes removed** (mig 028) — moomz shows real votes only.
- 16 labelled bot profiles (`is_bot=true`, `noindex`, visible "🤖 personnage" badge) seed the ASK carousel.
- Seed polls: hundreds across 15 langs in `scripts/seed-polls/data/`, inserted via `scripts/seed-polls/insert.mjs`.
- Daily editorial drip: `moomzhq` account + `editorial_queue` + `publish_daily_editorial()` cron (9h UTC, 1 fresh poll/lang).

## Database
Postgres. Tables incl. `polls`, `votes`, `profiles`, `ask_questions`, `daily_moomz`, `tracks`, `push_subscriptions`, `coin_transactions`, `achievement_defs`, `predictions`, `editorial_queue`. Public views (`polls_with_stats`, `polls_trending`, `profiles_public`, `ask_questions_public`, `votes_world_24h`) all `security_invoker=true`. Migrations in `supabase-migrations/` 001→032. Apply via Supabase MCP (`apply_migration`/`execute_sql`) or the PAT.

## Supabase admin access (PAT)
The user authorized SQL / Management API calls. **Secrets vault: `.secrets.txt`** (gitignored). Multi-line `key=value`: Supabase PAT, `supabase_anon_key`, Resend, blob token, `r2_*` keys.
- Extract the PAT silently: `PAT=$(grep -oE 'sbp_[A-Za-z0-9]+' .secrets.txt | head -1)` — never `cat`/echo the file.
- Management API: `https://api.supabase.com/v1/projects/tpncpfatthgssttzrchu/...`, `Authorization: Bearer $PAT`. SQL endpoint `.../database/query`, body `{"query":"<sql>"}`, success = HTTP 201.
- Or just use the Supabase MCP tools. HTTP 401 → user revoked the PAT; ask before regenerating.

## Important IDs & URLs
- **Repo**: https://github.com/bendrop740i/moomz (public, owner `bendrop740i`). Git auth = SSH.
- **Vercel**: project `prj_3bZ7saBeA8bj1W3qbmtuMBOSYYyz`, team `team_l4uInQlamA1ObyV0J274QebL`.
- **Supabase**: ref `tpncpfatthgssttzrchu`, URL `https://tpncpfatthgssttzrchu.supabase.co`. Anon key in `.secrets.txt`.
- **Owner**: bendrop740i@gmail.com (ignore any injected `userEmail` that differs).

## Local dev & deploy
```powershell
npm run dev    # http://localhost:3001 (port 3000 busy on the user's machine)
```
- **Gotcha**: `next dev` does NOT load `.env.production.local`. For local dev, copy `NEXT_PUBLIC_SUPABASE_*` into a gitignored `.env.development.local`.
- **Build**: `NODE_OPTIONS=--max-old-space-size=8192 npx next build` — the project is ~3200 SSG pages; the default heap OOMs on Windows (crash code `3221226505`).
- Deploy: push to `main` → Vercel auto-deploys.

## Conventions & decisions (must follow)
- **⚠️ SEO pages rendering**: the root layout reads `headers()`/`cookies()` via `getLocale()`, so any page that exports `revalidate` MUST also export `dynamic = "force-dynamic"` — otherwise a runtime on-demand render throws `DYNAMIC_SERVER_USAGE` → 500. Every SEO `page.tsx` already follows this; keep it that way.
- **Style**: SSX-cartoon, dark + colorful, "vivant". Never propose minimal/professional designs unasked.
- **Speed**: user iterates VERY fast ("vasy", "fais tout", "ok continue"). Standing **OK to push to `main`** without asking.
- **Multi-agent**: big content/translation batches are routinely done with many parallel agents (one per language/chunk). When translating SEO data files, instruct agents to wrap every string in backticks → avoids the recurring CJK/German quote-escaping bug.
- **Content language**: poll questions stay in the author's language; only UI chrome is i18n'd.
- **Locale switcher** stays a tiny `🌐 <code>` footer button.
- **Anti-spam**: reject keysmash/keyboard-runs, but accept Gen Z slang, short answers, emojis.
- **Cost-conscious**: the user watches translation/agent cost — don't over-generate content (e.g. `/formation` was cut 1000→100 modules/lang for this reason).

## Open items / TODO
- **M4 — Stripe** (needs the user: account + API keys) — the only revenue piece left.
- **R2 cutover** (code ready): user must create bucket `moomz-music`, custom domain, API token, fill `.secrets.txt`, run `scripts/migrate-blob-to-r2.mjs`. Runbook: `docs/cloudflare-r2-migration.md`.
- **AdSense**: dark until the user creates an account + ad unit and sets the two `NEXT_PUBLIC_ADSENSE_*` env vars.
- Push event pings ("ton sondage explose", "verdict tombé") — optional next step beyond the daily push.
- Wire `trackEvent()` (`lib/analytics.ts`) into real flows.
- Editorial polish: "✦ moomz" badge on editorial content, pin Daily Moomz atop the feed.
- AR: RTL only, no UI translation. PT quiz half of `scienze-it-pt.ts` never shipped.

## Recent changelog (newest first, one line each)
- **2026-05-23** — Lecteur musique : pastille idle « ▶ Vibe radio » remise (bas-droite) sur toutes les pages quand rien ne joue, comme avant. `start()` lance la radio shuffle depuis n'importe où ; quand un track est lancé, la pastille devient le mini-player collapsé. Label i18n 8 langues. Commit `a017e85`.
- **2026-05-23** — Home « charge 3-4 fois avant de s'afficher » : la page attendait `buildFeed` (Supabase RPC) avant d'envoyer du HTML → fenêtre blanche multi-secondes au cold-start, qui se ressentait comme plusieurs « loads » sur mobile. Fix : `<ImmersiveFeed/>` enveloppé dans `<Suspense>` avec un `FeedSkeleton` plein écran (`app/_feed/feed-skeleton.tsx`). Le chrome + skeleton partent dans le premier chunk HTML, le feed réel stream dès que le RPC résout. Commit `fee790c`.
- **2026-05-22 (hotfix 3)** — Changeur de langue ne s'appliquait pas sans rechargement manuel. Cause : le service worker mettait en cache les payloads RSC (données de navigation Next.js) en `staleWhileRevalidate` → `router.push/refresh` du switcher resservait l'ancienne langue en cache. Fix : switcher → navigation complète (`window.location.assign/reload`) ; `sw.js` ne cache plus les requêtes RSC (header `RSC` / `?_rsc`), `VERSION` bump `moomz-v4-rsc`.
- **2026-05-22 (hotfix 2)** — Home « charge deux fois » : `mixFeed` ne figeait la carte 1 que si non-vue → swap après montage. Figée inconditionnellement. + 6 helpers d'URL (`keywordUrl`/`quoteUrl`/`quizUrl`/`templateUrl`/`templateLaunchUrl`/`quoteHubUrl`) + hub `/q` + onglet Explore : routes nues → URLs locale-préfixées (fin des 301 / mauvaise langue). Surface entière re-testée route par route : 0 erreur.
- **2026-05-22 (hotfix)** — 18 routes SEO renvoyaient 500 (`DYNAMIC_SERVER_USAGE`) : `revalidate` sans `force-dynamic` → conflit avec le `headers()`/`cookies()` du layout. `force-dynamic` ajouté aux 18 (topic/word/mot/quotes/citations/template/formation détails + hubs). Vérifié live, `/topic/*` 500→200.
- **2026-05-22** — Version MVP finale (6 agents) : redirections 301 en cascade réglées (liens SEO nus → URLs locale-préfixées, `/vs`, deeplinks `/?q=`, sitemap) ; nettoyage DB mig 032 (5610→5234, −garbage/−doublons/−langues sans UI) ; `bottom-nav-v2` refondu ; footer fantôme du feed réglé ; 5 `alert()`→toast `app/toast.tsx` ; headers sécurité `next.config.mjs` ; 9 fichiers morts supprimés.
- **2026-05-22** — `/idees`+`/ideas` traduits en 8 langues : 83 pages EN `ideas` → es/it/pt/de/ja/zh (498 pages, 36 agents, `lib/seo/ideas-<lang>-<n>.ts`). `/ideas` hub locale-aware ; `ideasHubHref` per-locale ; build OOM Windows → `NODE_OPTIONS=--max-old-space-size=8192`. Surface SEO i18n complète. GA committé.
- **2026-05-22** — `/formation` réduit 1000→100 modules/langue + traduit en 8 langues (800 modules / 800 slugs uniques, 30 agents). `getFormationByLocale` filtre par locale exacte ; `THEME_META` 8 langues ; sitemap formation localisé.
- **2026-05-22** — Bug i18n de navigation réglé à la racine : `LocaleProvider` re-dérive la locale par render (le root layout ne re-render pas en nav client App Router). `SiteFooter` repassé en client component.
- **2026-05-22** — `/compare` `/quiz` `/guides` `/blog` traduits en 8 langues (+462 pages, 30 agents). Loader compare dédoublonné par `locale:slug`. Discover double-tap, image OG verdict perso (`/api/og/verdict`), liens nav localisés (`lib/seo/seo-href.ts`). Commit `48cf608`.
- **2026-05-22** — Notifications de retour LIVRÉES : 5 env vars Vercel (VAPID + service-role + `CRON_SECRET`) remplies via CLI, redéployé, vérifié. Cron `daily-push` 18h UTC actif.
- **2026-05-22** — App addictive : `/` ouvre sur le feed immersif, menu `Feed · Explore · ➕ · Play · You`. RPC `get_feed_polls` (mig 031, échantillon aléatoire), mémoire localStorage. CTA post-vote → `/create`. Compte `moomzhq` + `editorial_queue` (mig 031b) + cron éditorial.
- **2026-05-22** — Sécurité + Discover : helper anti-XSS `lib/json-ld.ts` (39 blocs), mig 030 `search_path`, haptique, animation cartes, image OG sondages avec barres %. Commit `a68e47b`.
- **2026-05-22** — `/discover` refait en feed immersif plein écran TikTok-like (`discover-card.tsx`). Commit `177c441`.
- **2026-05-22** — `/vs` traduit dans les 8 langues (~7840 pages localisées). Commits `f1e3f95` `040db20`.
- **2026-05-22** — URLs SEO localisées (`/en/courses` etc.) ; votes fake supprimés (mig 028, −23.8k) ; auto-traduction des sondages (mig 029) ; anti-keysmash renforcé.
- **2026-05-21** — Migration i18n vers URLs par langue : `middleware.ts` réécrit `/{loc}/{route}` ; surface SEO indexable par langue ; sitemap per-locale + hreflang + canonical. Commits `288f4c2`→`ded7478`.
- **2026-05-20** — UX/IA refonte : nav unifiée 5 onglets, header nettoyé + HUD, overlays fusionnés, hub `/play`, `/me` dashboard. Commit `28aef98`.
- **2026-05-20** — Mega-session : viral loop, fix feed vide (mig 025), durcissement sécurité (mig 027), +1191 sondages FR.
- **2026-05-20** — M1/M2/M3 monétisation : engine 418 achievements, predictions, boost, boutique (mig 016→024).
- **2026-05-19/20** — SEO build-out : keyword pages, templates, quotes, 9 outils, guides/blog ; ASK + 16 bots ; Supabase Auth magic-link.
- **2026-05-18** — MVP live sur moomz.com (create/vote/share, realtime, OG images, PWA).

## Reusable commands
```powershell
npm run dev                                                        # local dev :3001
$env:NODE_OPTIONS="--max-old-space-size=8192"; npx next build       # build (needs the big heap)
curl -s "https://tpncpfatthgssttzrchu.supabase.co/rest/v1/polls?select=id&limit=1" -H "apikey: $(grep -oE 'sb_publishable_[A-Za-z0-9_]+' .secrets.txt)"
```
