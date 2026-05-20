-- 017-claim-token-nullable.sql
--
-- Bug: a logged-in (Supabase Auth) user with no profile could not reserve a
-- username. claimUsername() in app/actions.ts intentionally inserts
-- claim_token = NULL for session users (their identity is user_id, not the
-- legacy anonymous claim_token), but the column was declared NOT NULL.
--
-- The INSERT failed with `23502 null value in column "claim_token" ...`,
-- claimUsername() re-threw it, and in production Next.js sanitized the
-- server-action error into the generic "An error occurred in the Server
-- Components render" message shown in the profile form.
--
-- Fix: claim_token is only meaningful for anonymous profiles. Session-linked
-- profiles legitimately have none, so the column must be nullable. The UNIQUE
-- index on claim_token is unaffected (Postgres allows multiple NULLs).

alter table public.profiles alter column claim_token drop not null;
