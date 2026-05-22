-- 2026-05-22: Auto-translation of human-created polls.
--
-- When a real human creates a poll, lib/translate.ts (free MyMemory machine
-- translation) translates the question + options into the other 7 moomz
-- locales at creation time, capped at a few seconds and best-effort. The poll
-- page then shows the question/options in the viewer's language — a shared
-- link reads natively anywhere. Votes still record by option index.
--
-- Applied via the Supabase MCP as `poll_translations_column`. Idempotent.

alter table public.polls add column if not exists translations jsonb;

comment on column public.polls.translations is
  'Per-locale machine translations: { "<locale>": { "question": text, "options": [text] } }. Null until translated.';
