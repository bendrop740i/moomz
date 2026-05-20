# moomz — Briefs des prochaines sessions

> Sessions préparées d'avance. Chacune est auto-suffisante : ouvre une fenêtre Claude Code, colle la section correspondante comme prompt d'ouverture, lance.
> Contexte global : voir `CLAUDE.md`. Domaine live depuis le 2026-05-18 (très neuf → sandbox Google ~3-6 mois).

---

# SESSION C — Traduction de la Formation (es / it / pt / de / ja / zh)

## État
La base FR est COMPLÈTE : 1000 modules dans `lib/formation/data/<theme>.json` (10 thèmes × 100). Routes `/formation` + `/formation/[slug]` live, FR uniquement. Il faut traduire les 1000 modules dans les 6 autres langues = 6000 modules.

## Étape 0 — rendre /formation multilingue (à faire EN PREMIER, à la main, ~30 min)
Aujourd'hui le loader + les routes ne servent que le FR. Avant de traduire, rendre l'infra locale-aware :
- **Données** : passer à des fichiers par locale — `lib/formation/data/<theme>.<locale>.json` (le FR existant = `<theme>.json` ou `<theme>.fr.json`). Élargir `lib/formation/loader.ts` : `getAllFormation(locale)` / `getFormationBySlug(slug, locale)` qui lisent le bon fichier, avec fallback FR si la traduction manque.
- **Routes** : `app/formation/page.tsx` + `app/formation/[slug]/page.tsx` lisent la locale via `getLocale()` (`lib/i18n-server`) et passent au loader. Le chrome FR hardcodé des pages ("À appliquer maintenant", "Questions fréquentes", "Toute la formation", "Créer un moomz", "Des modules courts…") → passer en `t()` 8 langues (ajouter un namespace `formation.*` dans `lib/i18n.ts`).
- **Slugs** : garder les MÊMES slugs dans toutes les langues (le slug FR est ASCII, réutilisable) — une seule URL `/formation/<slug>` qui sert la locale du visiteur, comme le reste de l'app. Donc `generateStaticParams` reste sur les slugs FR.
- **Sitemap** : déjà OK (1 URL par slug).

## Étape 1 — traduire (agents, par vagues de ~3 pour éviter le throttle serveur)
Pour chaque locale (es, it, pt, de, ja, zh) et chaque thème (10), traduire `<theme>.json` (FR) → `<theme>.<locale>.json`. 60 fichiers. Découpage conseillé : **1 agent = 1 locale × ~3-4 thèmes** (≈18 agents en tout, lancés par vagues de 3). Brief par agent :
- Lire le fichier FR source `lib/formation/data/<theme>.json`.
- Traduire chaque module en <locale> : `title`, `intro`, `sections[].heading`, `sections[].body`, `steps[]`, `faq[]`. **GARDER identiques** : `slug`, `theme`, `emoji`, `updatedAt`. Garder la structure exacte.
- Traduction native et naturelle (pas littérale), ton encourageant, adapté à un lecteur de 17 ans. Garder les consignes de sécurité du contenu (santé/argent/mental responsables).
- JA/ZH : chaînes en guillemets simples si besoin pour éviter les bugs d'échappement.
- Écrire `lib/formation/data/<theme>.<locale>.json`, valider le JSON, ne rien lancer d'autre.

## Vérif finale
`npx tsc --noEmit` vert · `/formation` testé en changeant `moomz_locale` · sitemap OK · commit + push.

## Note throttling
Le serveur throttle quand trop d'agents tournent en parallèle (surtout si une autre fenêtre tourne aussi). Lancer par vagues de 3, pas 10 d'un coup.

---

# SESSION A — Localisation SEO (es / it / pt / de / ja / zh)

## Pourquoi
Les surfaces SEO éditoriales (`/idees`, `/guides`, `/blog`, `/compare`, `/template`) sont aujourd'hui **FR + EN seulement**. L'UI tourne en 8 langues, les seed polls existent en 15. Chaque langue est un index Google séparé → c'est du contenu **vrai, non-dupliqué**, qui multiplie la portée organique. C'est le meilleur usage d'un gros budget tokens : volume légitime, mesurable, faible risque.

**Ne PAS faire :** générer encore plus de pages du même type en FR/EN. Il y en a déjà des centaines — au-delà d'un seuil Google déprécie le "thin/doorway content" et ça pénalise tout le domaine. Ici on **traduit/adapte**, on ne démultiplie pas des variantes minces.

## À investiguer EN PREMIER (~15 min, avant de lancer les agents)
L'architecture de routage diffère selon le type — il faut la cartographier avant de répartir le travail :
- `/compare/[slug]` — loader `lib/seo/compare/loader.ts` est générique (`fs.readdirSync` sur `data/*.json`), `ComparePage.locale` est une union `"fr" | "en"`. **À élargir** à 8 langues. Ajouter des JSON suffit ensuite.
- `/template/[slug]` — loader `lib/seo/templates/loader.ts` supporte **déjà** `fr/en/es/it/pt/de`. À élargir à `ja/zh`. Modèle le plus propre — s'en inspirer.
- `/idees` (FR) vs `/ideas` (EN), `/mot` (FR) vs `/word` (EN) — routes **séparées par langue**, données en TS dans `lib/seo/*.ts`. Décision à prendre : soit créer des routes localisées, soit (recommandé) un loader JSON unifié + un segment `[locale]`.
- Vérifier `app/sitemap.ts` : comment il agrège, pour que les nouvelles URLs y entrent.

**Décision recommandée par défaut :** élargir les unions `locale` à 8 langues, livrer le contenu en **JSON** (pattern compare/templates), laisser les loaders génériques + `generateStaticParams` ramasser automatiquement. Pour idees/mot (routes FR/EN figées) : ne PAS refactorer dans cette session — se concentrer sur compare + templates (infra déjà prête) + un nouveau set d'idées localisées JSON sous un loader neuf.

## Découpage — 6 agents (1 par langue) + 1 passe d'intégration main-thread
Chaque agent possède **une langue** (es / it / pt / de / ja / zh) et produit, dans cette langue :
- **~10 pages `/compare`** — JSON dans `lib/seo/compare/data/<lang>-*.json`, `locale: "<lang>"`. Suivre le schéma `ComparePage` (`lib/seo/compare/types.ts`) : slug, a/b parties (name+emoji+tagline), 8 highlights, verdict, pickA/pickB, 6 FAQ, related. Faits de pricing réels.
- **~12 templates `/template`** — JSON dans `lib/seo/templates/data/`, schéma `TemplatePage`. Question + 3-5 options, whyItWorks, 3-5 tips, 3 variations, 4 FAQ, related. Catégories variées (mariage, école, couple, soirée, food, voyage…).
- **~20 pages d'idées de sondages** — set localisé. Schéma à aligner sur celui décidé en investigation.

Cible : ~250-260 nouvelles pages SEO localisées. Passe d'intégration main-thread : élargir les unions `locale`, brancher les loaders, mettre à jour `app/sitemap.ts`, ajouter les hubs.

## Pièges (vécus sur des sessions passées)
- **JA / ZH** : utiliser des chaînes en **guillemets simples** pour éviter le bug de guillemets CJK non-échappés qui a cassé `lib/seo/read/r08.ts`.
- **PT** : **garder les diacritiques** (não, são, é…). Un fichier PT avait été livré tout dé-diacritisé — à ne pas reproduire. PT-BR cohérent (pas de mélange PT-PT/BR dans un même fichier).
- **Slugs ASCII-safe** (`cafe` pas `café`).
- Contenu **natif** par locale — pas une traduction littérale du FR ; varier les références culturelles.
- Pas de contenu sensible/NSFW.
- Chaque agent lance `npx tsc --noEmit` et vérifie 0 erreur dans ses fichiers.
- Ajouter les nouveaux segments de route à `RESERVED_USERNAMES` dans `app/actions.ts` s'il y en a.

## Vérification finale
`npx tsc --noEmit` vert · `app/sitemap.ts` contient les nouvelles URLs · spot-check de 3-4 pages par langue en local.

---

# SESSION B — Boucle virale (taux votant → créateur)

## Pourquoi
La boucle virale est le seul canal qui marche **dès le jour 1** (le SEO est en sandbox 3-6 mois). Coefficient : `k = (votants réels/sondage) × (taux votant→créateur)`. Le scénario réaliste est `k ≈ 0,6-0,9` → la boucle **multiplie l'acquisition ×2-3**. Le levier décisif est le **taux votant→créateur** : passer de 4 % à 8 % fait basculer `k` de 0,8 à 1,6 — de "décline" à "explose". Cette session optimise ce taux.

## Ordre d'exécution (séquentiel — les fichiers se chevauchent, PAS de 10 agents sauvages)
Fichiers centraux touchés en commun : `app/[slug]/vote-client.tsx`, `app/poll-card.tsx`, `app/create-poll-form.tsx`, `app/actions.ts`, `app/discover/discover-feed.tsx`, `app/streak-hud.tsx`. Faire les étapes dans l'ordre, vérifier `tsc` entre chaque.

### 0. Brancher l'analytics (PRÉREQUIS — sans ça on optimise à l'aveugle)
`lib/analytics.ts` exporte déjà `trackEvent(event, props)` (non branché). Câbler :
- `trackEvent("vote", { slug, optionIndex, source })` dans le flux de vote — `vote-client.tsx` (page sondage) **et** `poll-card.tsx` (feed inline).
- `trackEvent("poll_created", { source })` dans `create-poll-form.tsx` après succès. `source` ∈ `home | create-page | fork | after-vote | discover | seo`.
- `trackEvent("create_cta_click", { source })` sur chaque CTA "créer".
But : pouvoir lire le taux votant→créateur par source dans Vercel Analytics.

### 1. CTA "créer" sur le pic de dopamine
Aujourd'hui, après le vote `vote-client.tsx` montre le reveal (REBEL/majorité) → boutons de partage → un lien "créer" fin tout en bas. Inverser : **gros bouton créer juste sous le bloc `reveal`**, partage en secondaire. Idem dans `poll-card.tsx` (feed). C'est le moment émotionnel le plus fort (confettis + points + reveal).

### 2. Reframer le CTA en hook de curiosité
Copy : pas "Créer un sondage" mais *"Tes potes voteraient quoi ? 👀"* / *"Tu as voté 🍕 — et ton crew ?"*. On vend la réponse, pas le travail. Ajouter les clés i18n `viral.cta.*` aux 8 langues dans `lib/i18n.ts`.

### 3. Suggestions pré-remplies en 1 tap (tuer la page blanche)
Après le vote, afficher 3 idées tappables liées au topic du sondage, qui deeplinkent vers `/create?q=...&o=...` (form pré-rempli — le prefill `?q=&o=` existe déjà dans `create-poll-form.tsx`). Réutiliser l'infra `lib/seo/templates` + les prompt chips de `lib/ask-prompts.ts`.

### 4. Réduire la friction du formulaire
Dans `create-poll-form.tsx` : presets d'options en 1 tap (Oui/Non · 🔥/💀 · Ça/Ça), emoji auto, question = seul champ obligatoire pour soumettre. Objectif : un moomz créable en 2 taps.

### 5. Brancher la création sur l'économie de récompense
`createPoll` dans `app/actions.ts` doit créditer des points/streak **visiblement**. Faire réagir `streak-hud.tsx` à un event `moomz:created` (comme il réagit déjà à `moomz:vote`). Au reveal : *"Crée ton 1er moomz → +50 pts & débloque une tenue"*. L'achievement `creator` existe déjà dans `lib/achievements.ts` — le rendre saillant.

### 6. Carte "ton tour" dans le feed Discover
Dans `app/discover/discover-feed.tsx` : après ~5-7 votes, insérer une carte plein écran "À toi de poser une question" avec mini-formulaire inline. L'user est en flow — le capter là.

## Pièges
- Les **bots gonflent les compteurs mais ne sont pas viraux** — `k` ne dépend que des humains. Ne pas se fier aux vote_count pour juger l'engagement réel ; filtrer les bots dans toute mesure.
- Cookies `secure`/`httpOnly` déjà en place (session précédente) — ne pas régresser.
- Préserver le flux de vote optimiste existant dans `vote-client.tsx` / `poll-card.tsx`.
- `npx tsc --noEmit` vert après chaque étape.

## Vérification finale
Lancer le dev server, faire le parcours : voter → voir le CTA créer en évidence → tap suggestion → form pré-rempli → créer → voir la récompense. Confirmer que `trackEvent` émet bien `vote` et `poll_created` (Network tab / Vercel Analytics).

## Mesure du succès
Avant : taux votant→créateur (à établir une fois l'analytics branché, étape 0). Après : viser **+50-100 % de relatif** sur ce taux. C'est LE chiffre de la session.
