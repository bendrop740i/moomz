-- 2026-05-20: Tighten anti-noise + dedupe identical polls.
--
-- Two real-world spam patterns the previous version missed:
-- 1) "rttr" (4 chars, low entropy) — slipped through because the distinct-char
--    check only triggered at length >= 5. Tighten to >= 4.
-- 2) "les pied qui pue ou le slip qui pue ?" was created SIX TIMES, each with
--    900-1050 bot votes. The bot cap will prevent future explosions, but the
--    historical dupes still spam the home/SEO. Dedupe: keep one canonical poll
--    per normalized question, kill the rest.
--
-- Idempotent — safe to re-run.

-- 1) Tighten the noise rule.
create or replace function public.is_noisy_question(q text)
returns boolean
language plpgsql
immutable
as $$
declare
  t text;
  content text;
  stripped text;
begin
  if q is null then return true; end if;
  t := btrim(q);
  if char_length(t) < 1 then return true; end if;
  if char_length(t) < 4 then return true; end if;
  if t ~* '(.)\1{5,}' then return true; end if;
  content := regexp_replace(t, '[[:space:][:punct:][:digit:]]+', '', 'g');
  if char_length(content) = 0 then return true; end if;
  stripped := regexp_replace(lower(t), '[^a-z0-9]+', '', 'g');
  -- TIGHTENED: was >= 5, now >= 4 — catches "rttr" / "abab" / "lolo" etc.
  if char_length(stripped) >= 4 then
    declare
      uniq int;
    begin
      select count(distinct ch) into uniq
      from (select unnest(string_to_array(stripped, null)) as ch) s;
      if uniq < 3 then return true; end if;
    end;
  end if;
  if char_length(t) >= 8 then
    if (char_length(content)::float / char_length(t)::float) < 0.3 then
      return true;
    end if;
  end if;
  return false;
end;
$$;

-- 2) Re-flag noise with the tightened rule.
update public.polls
set is_dead = true
where coalesce(is_dead, false) = false
  and is_noisy_question(question);

-- 3) Dedupe by normalized question. Keep the row with the most HUMAN votes
--    (then most total votes, then oldest) per question. Mark the rest dead.
--
-- Normalization: lowercase + collapse whitespace + strip trailing punctuation.
with normalized as (
  select
    p.id,
    p.question,
    regexp_replace(lower(btrim(p.question)), '\s+', ' ', 'g') as norm_q,
    (select count(*) from votes v where v.poll_id = p.id and v.voter_id not like 'bot_%') as human_votes,
    (select count(*) from votes v where v.poll_id = p.id) as total_votes,
    p.created_at,
    coalesce(p.is_dead, false) as already_dead
  from polls p
  where coalesce(p.is_dead, false) = false
),
ranked as (
  select
    id,
    norm_q,
    row_number() over (
      partition by norm_q
      order by human_votes desc, total_votes desc, created_at asc
    ) as rn
  from normalized
)
update public.polls p
set is_dead = true
from ranked r
where p.id = r.id
  and r.rn > 1;
