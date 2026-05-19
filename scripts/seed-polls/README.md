# Seed polls

Curated vibe-check polls with per-option explainer paragraphs for SEO.

## Structure

`data/*.json` — one file per language. Each entry:

```json
{
  "q": "Question ending with ?",
  "o": ["Option 1 🔥", "Option 2 💖"],
  "e": {
    "0": "Why option 1 — natural sentence indexable by Google.",
    "1": "Why option 2 — same."
  },
  "t": ["food", "couple"]
}
```

Fields: `q` question, `o` options array (2–4), `e` explainer keyed by option index (string keys), `t` topics array (max 3, from `lib/topics.ts` TOPIC_IDS).

## Insert

```
node scripts/seed-polls/insert.mjs            # all langs, ~50 inserts per batch
node scripts/seed-polls/insert.mjs --lang fr  # only one
node scripts/seed-polls/insert.mjs --dry      # show what would be inserted, no DB call
```

Slugs are built from the question (kebab-cased keywords) + language + index, e.g. `pizza-ananas-oui-non-fr-014`. Re-runnable — uses `on conflict (slug) do nothing`.
