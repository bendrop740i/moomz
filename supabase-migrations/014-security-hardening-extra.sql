-- 2026-05-20: Security hardening extras.
-- 1) Add avatar_url + cosmetic_id columns to profiles (idempotent).
-- 2) Add per-profile streak counters (vote_streak_count, vote_streak_last_at)
--    so the streak math can live in SQL and survive an unset cookie.
-- 3) Create apply_vote_streak RPC that wraps the streak/points update inside
--    a pg_advisory_xact_lock keyed on hashtext(voter_id) so two parallel votes
--    from the same voter can't double-credit the streak. CLAUDE.md flagged a
--    race condition where two votes in <3s would both compute streak +1 from
--    the same baseline.
--
-- The RPC takes the voter_id (cookie) and identity (user_id or claim_token),
-- looks up the matching profile, and applies the streak / points / daily /
-- achievements update atomically. It returns the streak result so the action
-- can hand it back to the client without an additional read.
--
-- Idempotent — safe to re-run.

-- ---------------------------------------------------------------------------
-- 1) New profile columns.
-- ---------------------------------------------------------------------------

alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists cosmetic_id text;
alter table public.profiles add column if not exists vote_streak_count int not null default 0;
alter table public.profiles add column if not exists vote_streak_last_at timestamptz;

-- ---------------------------------------------------------------------------
-- 2) Streak RPC with advisory lock.
-- ---------------------------------------------------------------------------

create or replace function public.apply_vote_streak(
  p_voter_id text,
  p_user_id uuid,
  p_claim_token text,
  p_is_majority boolean,
  p_is_rebel boolean,
  p_is_daily boolean
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_now timestamptz := now();
  v_lock_key bigint;
  v_streak_window interval := interval '3 minutes';
  v_prof_id uuid;
  v_total_points int;
  v_top_streak int;
  v_votes_cast int;
  v_rebel_count int;
  v_majority_count int;
  v_achievements jsonb;
  v_daily_streak int;
  v_last_daily_date date;
  v_prev_streak_count int;
  v_prev_streak_last_at timestamptz;
  v_cur int;
  v_top int;
  v_multiplier int;
  v_gained int;
  v_new_votes_cast int;
  v_new_rebel int;
  v_new_majority int;
  v_owned jsonb;
  v_new jsonb;
  v_new_daily_streak int;
  v_new_last_daily date;
  v_today date := (v_now at time zone 'utc')::date;
  v_yesterday date := v_today - 1;
begin
  if p_voter_id is null or length(p_voter_id) = 0 then
    return jsonb_build_object(
      'gained', 0, 'multiplier', 1, 'current', 0, 'top', 0, 'total', 0,
      'achievements', '[]'::jsonb
    );
  end if;

  -- Serialize concurrent vote credit for the same voter within this txn.
  v_lock_key := hashtextextended(p_voter_id, 0);
  perform pg_advisory_xact_lock(v_lock_key);

  -- Locate the profile, if any. Prefer user_id (auth session), fall back to
  -- claim_token (anon legacy). FOR UPDATE locks the row so concurrent calls
  -- with the same identity queue cleanly.
  if p_user_id is not null then
    select
      id, total_points, top_streak, votes_cast, rebel_count, majority_count,
      achievements, daily_streak, last_daily_date,
      vote_streak_count, vote_streak_last_at
    into
      v_prof_id, v_total_points, v_top_streak, v_votes_cast, v_rebel_count,
      v_majority_count, v_achievements, v_daily_streak, v_last_daily_date,
      v_prev_streak_count, v_prev_streak_last_at
    from profiles
    where user_id = p_user_id
    for update;
  elsif p_claim_token is not null and length(p_claim_token) > 0 then
    select
      id, total_points, top_streak, votes_cast, rebel_count, majority_count,
      achievements, daily_streak, last_daily_date,
      vote_streak_count, vote_streak_last_at
    into
      v_prof_id, v_total_points, v_top_streak, v_votes_cast, v_rebel_count,
      v_majority_count, v_achievements, v_daily_streak, v_last_daily_date,
      v_prev_streak_count, v_prev_streak_last_at
    from profiles
    where claim_token = p_claim_token
    for update;
  end if;

  -- Compute streak. If no profile or no prior timestamp / out of window → 1.
  if v_prof_id is null or v_prev_streak_last_at is null
     or v_now - v_prev_streak_last_at >= v_streak_window then
    v_cur := 1;
  else
    v_cur := coalesce(v_prev_streak_count, 0) + 1;
  end if;

  v_top := greatest(coalesce(v_top_streak, 0), v_cur);
  v_multiplier := case
    when v_cur >= 18 then 5
    when v_cur >= 12 then 4
    when v_cur >= 7 then 3
    when v_cur >= 3 then 2
    else 1
  end;
  v_gained := v_multiplier;

  if v_prof_id is null then
    return jsonb_build_object(
      'gained', v_gained, 'multiplier', v_multiplier,
      'current', v_cur, 'top', v_top, 'total', v_gained,
      'achievements', '[]'::jsonb
    );
  end if;

  v_new_votes_cast := coalesce(v_votes_cast, 0) + 1;
  v_new_rebel    := coalesce(v_rebel_count, 0)    + case when p_is_rebel    then 1 else 0 end;
  v_new_majority := coalesce(v_majority_count, 0) + case when p_is_majority then 1 else 0 end;

  v_owned := coalesce(v_achievements, '[]'::jsonb);
  v_new := '[]'::jsonb;
  if not v_owned ? 'claimed' then
    v_owned := v_owned || jsonb_build_array('claimed');
    v_new := v_new || jsonb_build_array('claimed');
  end if;
  if v_new_votes_cast = 1 and not v_owned ? 'first_vote' then
    v_owned := v_owned || jsonb_build_array('first_vote');
    v_new := v_new || jsonb_build_array('first_vote');
  end if;
  if p_is_rebel and v_new_rebel = 1 and not v_owned ? 'first_rebel' then
    v_owned := v_owned || jsonb_build_array('first_rebel');
    v_new := v_new || jsonb_build_array('first_rebel');
  end if;
  if v_new_rebel >= 10 and not v_owned ? 'rebel_x10' then
    v_owned := v_owned || jsonb_build_array('rebel_x10');
    v_new := v_new || jsonb_build_array('rebel_x10');
  end if;
  if v_new_votes_cast >= 100 and not v_owned ? 'marathon' then
    v_owned := v_owned || jsonb_build_array('marathon');
    v_new := v_new || jsonb_build_array('marathon');
  end if;
  if v_cur >= 3 and not v_owned ? 'streak_3' then
    v_owned := v_owned || jsonb_build_array('streak_3');
    v_new := v_new || jsonb_build_array('streak_3');
  end if;
  if v_cur >= 7 and not v_owned ? 'streak_7' then
    v_owned := v_owned || jsonb_build_array('streak_7');
    v_new := v_new || jsonb_build_array('streak_7');
  end if;
  if v_cur >= 12 and not v_owned ? 'streak_12' then
    v_owned := v_owned || jsonb_build_array('streak_12');
    v_new := v_new || jsonb_build_array('streak_12');
  end if;
  if v_cur >= 18 and not v_owned ? 'streak_18' then
    v_owned := v_owned || jsonb_build_array('streak_18');
    v_new := v_new || jsonb_build_array('streak_18');
  end if;

  v_new_daily_streak := coalesce(v_daily_streak, 0);
  v_new_last_daily   := v_last_daily_date;
  if p_is_daily then
    if v_last_daily_date is null or v_last_daily_date <> v_today then
      if v_last_daily_date = v_yesterday then
        v_new_daily_streak := coalesce(v_daily_streak, 0) + 1;
      else
        v_new_daily_streak := 1;
      end if;
      v_new_last_daily := v_today;
    end if;
  end if;

  update profiles set
    total_points        = coalesce(total_points, 0) + v_gained,
    top_streak          = v_top,
    votes_cast          = v_new_votes_cast,
    rebel_count         = v_new_rebel,
    majority_count      = v_new_majority,
    achievements        = v_owned,
    daily_streak        = v_new_daily_streak,
    last_daily_date     = v_new_last_daily,
    vote_streak_count   = v_cur,
    vote_streak_last_at = v_now
  where id = v_prof_id;

  return jsonb_build_object(
    'gained', v_gained,
    'multiplier', v_multiplier,
    'current', v_cur,
    'top', v_top,
    'total', coalesce(v_total_points, 0) + v_gained,
    'achievements', v_new
  );
end $$;

grant execute on function public.apply_vote_streak(text, uuid, text, boolean, boolean, boolean)
  to anon, authenticated;
