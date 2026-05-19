-- SEO upgrade for polls:
--   1. explainer  JSONB  — per-option natural-language explanation, keyed
--                          by option index ({"0": "...", "1": "..."}).
--                          Renders below the question on /[slug] for both
--                          UX clarity ("éclaire les gens") and search
--                          engine indexable content.
--   2. lang       TEXT   — ISO 639-1 code of the poll's language. Drives
--                          locale-aware feed ranking and hreflang in the
--                          page <head>.
--
-- The slug column itself becomes the SEO URL (e.g. "pizza-ananas-oui-non-
-- a4b2"). New polls get keyword-derived slugs in app/actions.ts; seed
-- polls get their slugs rewritten in 007.

alter table polls
  add column if not exists explainer jsonb,
  add column if not exists lang text;

create index if not exists polls_lang_idx on polls(lang) where is_dead = false;
create index if not exists polls_explainer_present_idx on polls((explainer is not null));
