-- ============================================================================
-- 011-creator-tier.sql
-- Adds the "creator tier" infrastructure to moomz.
-- Schema only — no Stripe, no business logic yet. Idempotent (safe to re-run).
--
-- What this migration does:
--   1. Adds tier / cosmetics / verification columns to `profiles`.
--   2. Adds boost + embed analytics + palette override columns to `polls`.
--   3. Rebuilds `polls_trending` to apply a 5x boost when `boost_until > now()`.
--   4. Rebuilds `profiles_public` to expose `tier` and `is_verified` to anon.
--   5. Adds `record_embed_view(slug)` RPC for the embed page analytics counter.
--
-- RLS: no policy changes needed. tier / is_verified are SELECT-only for
-- owners and existing read policies (profiles_public for anon, full row for
-- owners via auth.uid()) already cover the new columns.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. profiles: tier + creator metadata
-- ----------------------------------------------------------------------------

-- The tier ladder: free (default) → creator (paid) → studio (top tier).
-- CHECK lives on the column so any future tier addition must update it
-- explicitly — safer than enum (no painful ALTER TYPE migrations).
alter table profiles
  add column if not exists tier text not null default 'free';

-- Add CHECK separately so the migration is re-runnable: a previous run may
-- have created the column without the constraint. Drop-and-recreate guards
-- against "constraint already exists" while also catching any drifted defs.
alter table profiles drop constraint if exists profiles_tier_check;
alter table profiles
  add constraint profiles_tier_check
  check (tier in ('free', 'creator', 'studio'));

-- Set when tier flips from 'free' → 'creator' (or higher). NULL for free users.
-- Used to surface "creator since YYYY" badges + analytics cohorts.
alter table profiles
  add column if not exists creator_since timestamptz null;

-- Slug from lib/cosmetics.ts (e.g. 'sunset', 'cyber', 'mint'). Acts as the
-- creator's default poll palette. NULL = use the slug-hashed default palette.
alter table profiles
  add column if not exists palette text null;

-- Verified checkmark (manually granted, not tier-coupled — a free user can
-- be verified, and a creator may not be). Surfaced in profiles_public.
alter table profiles
  add column if not exists is_verified boolean not null default false;

-- Index for "all creators" / "all verified" filters (e.g. discover surfacing).
-- Partial indexes keep them tiny (only the rows we actually filter on).
create index if not exists profiles_tier_idx
  on profiles(tier) where tier <> 'free';
create index if not exists profiles_is_verified_idx
  on profiles(is_verified) where is_verified = true;


-- ----------------------------------------------------------------------------
-- 2. polls: boost + embed analytics + palette override
-- ----------------------------------------------------------------------------

-- When set to a future timestamp, the poll gets a 5x trending multiplier
-- (see view rebuild below). When the timestamp passes, boost auto-expires
-- with no cron needed — purely time-based.
alter table polls
  add column if not exists boost_until timestamptz null;

-- Incremented by record_embed_view() each time the poll's embed page is hit.
-- Separate from vote_count so embeds-without-votes still get tracked
-- (useful for "viral on Twitter / Reddit" creator analytics).
alter table polls
  add column if not exists embed_count int not null default 0;

-- Per-poll palette override. Falls back to creator's profile palette, then
-- to the slug-hashed default. NULL = inherit.
alter table polls
  add column if not exists palette text null;

-- Partial index so the trending view can quickly find currently-boosted polls
-- without scanning the whole table.
create index if not exists polls_boost_until_idx
  on polls(boost_until) where boost_until is not null;


-- ----------------------------------------------------------------------------
-- 3. polls_trending: add 5x boost multiplier when boost_until > now()
--
-- This is the canonical definition as of migration 002-polls-cleanup.sql.
-- If you've hand-tweaked the view in the DB beyond what's checked in, MERGE
-- the boost CASE below into your live definition instead of pasting this
-- verbatim. The only NEW line is the `case when ... boost_until > now()` term.
-- ----------------------------------------------------------------------------

drop view if exists polls_trending cascade;
create view polls_trending as
with vote_counts as (
  select poll_id, count(*)::int as total_votes
  from votes
  group by poll_id
),
recent as (
  select poll_id, count(*)::int as recent_votes
  from votes
  where created_at > now() - interval '10 minutes'
  group by poll_id
)
select
  p.id, p.slug, p.question, p.options, p.created_at,
  coalesce(vc.total_votes, 0) as vote_count,
  coalesce(r.recent_votes, 0) as recent_votes,
  coalesce(p.is_seed, false) as is_seed,
  p.profile_id,
  p.image_url,
  p.topics,
  p.boost_until,
  coalesce(vc.total_votes, 0)::float *
    case when coalesce(p.is_seed, false) then 1.0 else 1.8 end *
    case when p.created_at > now() - interval '30 minutes' then 2.5 else 1.0 end *
    -- NEW: creator-tier boost. 5x multiplier while boost_until is in the
    -- future. Costs nothing when boost_until is null or expired.
    case when p.boost_until is not null and p.boost_until > now() then 5.0 else 1.0 end *
    power(
      1.0 / greatest(extract(epoch from (now() - p.created_at)) / 3600.0 + 2, 0.1),
      1.2
    ) as trending_score
from polls p
left join vote_counts vc on vc.poll_id = p.id
left join recent r on r.poll_id = p.id
where p.created_at > now() - interval '14 days'
  and coalesce(p.is_dead, false) = false;

grant select on polls_trending to anon, authenticated;


-- ----------------------------------------------------------------------------
-- 4. profiles_public: expose tier + is_verified
--
-- Mirrors migration 005-ask-feature.sql's definition + the two new columns.
-- Anon can SELECT this view; the base `profiles` table stays locked behind
-- the existing claim_token / auth.uid() RLS policies.
-- ----------------------------------------------------------------------------

create or replace view profiles_public as
select
  id, username, display_name, bio, socials, avatar_emoji,
  total_points, top_streak, daily_streak, achievements,
  votes_cast, rebel_count, majority_count, polls_created,
  created_at, is_bot,
  -- NEW: creator tier surfaces for badges + paywalled UI states.
  tier, is_verified
from profiles;

grant select on profiles_public to anon, authenticated;


-- ----------------------------------------------------------------------------
-- 5. record_embed_view(slug) — anon-callable analytics counter
--
-- SECURITY DEFINER so anon can bump the counter without needing UPDATE rights
-- on the base table. Guarded by the slug lookup (no slug = no-op).
-- ----------------------------------------------------------------------------

create or replace function record_embed_view(p_slug text)
returns void
language sql
security definer
set search_path = public
as $$
  update polls
  set embed_count = embed_count + 1
  where slug = p_slug;
$$;

-- Lock down + re-grant: revoke from PUBLIC first so we control exactly who
-- can call it, then hand EXECUTE to anon (the embed page is unauthenticated).
revoke all on function record_embed_view(text) from public;
grant execute on function record_embed_view(text) to anon, authenticated;
