-- 2026-05-19: Polls auto-cleanup (kill the dead weight, keep the app alive).
-- Idempotent — safe to re-run. Paste into Supabase SQL editor.

-- 1. Add is_dead flag.
alter table polls add column if not exists is_dead boolean not null default false;
alter table polls add column if not exists dead_reason text;
create index if not exists polls_is_dead_idx on polls(is_dead) where is_dead = false;

-- 2. Noise detector — mirrors the JS `looksLikeNoise` in app/actions.ts.
--    Catches: 6+ repeated chars, no letters at all, fewer than 3 unique chars
--    in stripped form, < 30 % letters in strings of 8+ chars.
create or replace function poll_is_noise(p_text text)
returns boolean
language plpgsql
immutable
as $$
declare
  t text := trim(p_text);
  stripped text;
  letters int;
  unique_chars int;
begin
  if t is null or length(t) = 0 then return true; end if;
  -- short answers OK
  if length(t) < 4 then return false; end if;
  -- 6+ repeats
  if t ~ '(.)\1{5,}' then return true; end if;
  -- has at least one letter (any unicode letter)
  if not t ~ '[[:alpha:]]' then return true; end if;
  stripped := lower(regexp_replace(t, '[\s\W_]+', '', 'g'));
  if length(stripped) = 0 then return true; end if;
  if length(stripped) >= 5 then
    select count(distinct ch) into unique_chars from unnest(string_to_array(stripped, null)) ch;
    if unique_chars < 3 then return true; end if;
  end if;
  if length(t) >= 8 then
    letters := length(regexp_replace(t, '[^[:alpha:]]', '', 'g'));
    if letters::float / length(t) < 0.3 then return true; end if;
  end if;
  return false;
end;
$$;

-- 3. Auto-shutdown function — mark dead based on heuristics.
--    Runs cheaply (one pass over polls). Returns number of rows freshly killed.
create or replace function sweep_dead_polls()
returns int
language plpgsql
as $$
declare
  killed int := 0;
  delta  int := 0;
begin
  -- a. Noise questions.
  update polls
  set is_dead = true, dead_reason = 'noise'
  where is_dead = false and poll_is_noise(question);
  get diagnostics delta = row_count;
  killed := killed + delta;

  -- b. Real polls with 0 votes after 48 h.
  update polls p
  set is_dead = true, dead_reason = 'no_votes_48h'
  where p.is_dead = false
    and coalesce(p.is_seed, false) = false
    and p.created_at < now() - interval '48 hours'
    and not exists (select 1 from votes v where v.poll_id = p.id);
  get diagnostics delta = row_count;
  killed := killed + delta;

  -- c. Seed polls with 0 real (non-bot) votes after 14 days.
  update polls p
  set is_dead = true, dead_reason = 'seed_no_humans_14d'
  where p.is_dead = false
    and coalesce(p.is_seed, false) = true
    and p.created_at < now() - interval '14 days'
    and not exists (
      select 1 from votes v
      where v.poll_id = p.id and v.voter_id not like 'bot_%'
    );
  get diagnostics delta = row_count;
  killed := killed + delta;

  return killed;
end;
$$;

-- 4. Schedule the sweep every hour.
--    Requires pg_cron extension (already enabled per existing fake_vote_burst job).
do $$ begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule('sweep_dead_polls')
      where exists (select 1 from cron.job where jobname = 'sweep_dead_polls');
    perform cron.schedule(
      'sweep_dead_polls',
      '0 * * * *',
      $cron$ select sweep_dead_polls(); $cron$
    );
  end if;
end $$;

-- 5. Update public views to hide dead polls from every feed.
--    Drop first (column order/set may differ from existing definition,
--    which is illegal for CREATE OR REPLACE VIEW).
drop view if exists polls_with_stats cascade;
create view polls_with_stats as
select
  p.id,
  p.slug,
  p.question,
  p.options,
  p.created_at,
  coalesce(count(v.id), 0)::int as vote_count
from polls p
left join votes v on v.poll_id = p.id
where coalesce(p.is_dead, false) = false
group by p.id, p.slug, p.question, p.options, p.created_at;
grant select on polls_with_stats to anon, authenticated;

-- Re-create polls_trending preserving its current decay + boost logic but
-- with is_dead filter. (Keep your own seed/age multipliers if you've tweaked
-- them in the DB beyond what's here.)
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
  coalesce(vc.total_votes, 0)::float *
    case when coalesce(p.is_seed, false) then 1.0 else 1.8 end *
    case when p.created_at > now() - interval '30 minutes' then 2.5 else 1.0 end *
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

-- 6. Run one immediate sweep so existing junk is gone.
select sweep_dead_polls() as freshly_killed;
