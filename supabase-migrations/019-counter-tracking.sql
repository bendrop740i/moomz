-- 019: Track the remaining achievement counters.
--
--  • apply_vote_streak — rewritten to also track night/dawn/weekend votes,
--    active_days, per-topic votes (new p_topics param), and the rebel streak.
--    Same return shape — castVote's parsing is unchanged.
--  • on_vote_bump_author trigger — every vote bumps the poll AUTHOR's
--    received_votes_total + best_poll_votes (abuse-proof: fires only on a
--    real vote row, never trusts a client number).
-- Idempotent.

-- ---------------------------------------------------------------------------
-- 1) apply_vote_streak v2 — drop the old 6-arg signature, recreate with
--    p_topics (defaulted so any stray caller still works).
-- ---------------------------------------------------------------------------
drop function if exists public.apply_vote_streak(text, uuid, text, boolean, boolean, boolean);

create or replace function public.apply_vote_streak(
  p_voter_id text,
  p_user_id uuid,
  p_claim_token text,
  p_is_majority boolean,
  p_is_rebel boolean,
  p_is_daily boolean,
  p_topics text[] default '{}'
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
  v_night int; v_dawn int; v_weekend int;
  v_active_days int; v_last_active date;
  v_topic_votes jsonb;
  v_rebel_streak_cur int; v_rebel_streak_top int;
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
  v_hour int;
  v_dow int;
  v_new_night int; v_new_dawn int; v_new_weekend int;
  v_new_active_days int; v_new_last_active date;
  v_new_topic_votes jsonb;
  v_new_rebel_streak_cur int; v_new_rebel_streak_top int;
  v_topic text;
  v_today date := (v_now at time zone 'utc')::date;
  v_yesterday date := v_today - 1;
begin
  if p_voter_id is null or length(p_voter_id) = 0 then
    return jsonb_build_object(
      'gained', 0, 'multiplier', 1, 'current', 0, 'top', 0, 'total', 0,
      'achievements', '[]'::jsonb
    );
  end if;

  v_lock_key := hashtextextended(p_voter_id, 0);
  perform pg_advisory_xact_lock(v_lock_key);

  if p_user_id is not null then
    select
      id, total_points, top_streak, votes_cast, rebel_count, majority_count,
      achievements, daily_streak, last_daily_date,
      vote_streak_count, vote_streak_last_at,
      night_votes, dawn_votes, weekend_votes, active_days, last_active_date,
      topic_votes, rebel_streak_current, rebel_streak_top
    into
      v_prof_id, v_total_points, v_top_streak, v_votes_cast, v_rebel_count,
      v_majority_count, v_achievements, v_daily_streak, v_last_daily_date,
      v_prev_streak_count, v_prev_streak_last_at,
      v_night, v_dawn, v_weekend, v_active_days, v_last_active,
      v_topic_votes, v_rebel_streak_cur, v_rebel_streak_top
    from profiles
    where user_id = p_user_id
    for update;
  elsif p_claim_token is not null and length(p_claim_token) > 0 then
    select
      id, total_points, top_streak, votes_cast, rebel_count, majority_count,
      achievements, daily_streak, last_daily_date,
      vote_streak_count, vote_streak_last_at,
      night_votes, dawn_votes, weekend_votes, active_days, last_active_date,
      topic_votes, rebel_streak_current, rebel_streak_top
    into
      v_prof_id, v_total_points, v_top_streak, v_votes_cast, v_rebel_count,
      v_majority_count, v_achievements, v_daily_streak, v_last_daily_date,
      v_prev_streak_count, v_prev_streak_last_at,
      v_night, v_dawn, v_weekend, v_active_days, v_last_active,
      v_topic_votes, v_rebel_streak_cur, v_rebel_streak_top
    from profiles
    where claim_token = p_claim_token
    for update;
  end if;

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

  -- Legacy 11-badge achievements (unchanged).
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

  -- Daily-Moomz streak (unchanged).
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

  -- New parametric-engine counters.
  v_hour := extract(hour from (v_now at time zone 'utc'))::int;
  v_dow  := extract(isodow from (v_now at time zone 'utc'))::int;  -- 1=Mon..7=Sun
  v_new_night   := coalesce(v_night, 0)   + case when v_hour < 5 then 1 else 0 end;
  v_new_dawn    := coalesce(v_dawn, 0)    + case when v_hour >= 5 and v_hour < 8 then 1 else 0 end;
  v_new_weekend := coalesce(v_weekend, 0) + case when v_dow >= 6 then 1 else 0 end;

  if v_last_active is null or v_last_active <> v_today then
    v_new_active_days := coalesce(v_active_days, 0) + 1;
    v_new_last_active := v_today;
  else
    v_new_active_days := coalesce(v_active_days, 0);
    v_new_last_active := v_last_active;
  end if;

  v_new_topic_votes := coalesce(v_topic_votes, '{}'::jsonb);
  if p_topics is not null then
    foreach v_topic in array p_topics loop
      if v_topic is not null and length(v_topic) > 0 then
        v_new_topic_votes := jsonb_set(
          v_new_topic_votes, array[v_topic],
          to_jsonb(coalesce((v_new_topic_votes->>v_topic)::int, 0) + 1), true);
      end if;
    end loop;
  end if;

  if p_is_rebel then
    v_new_rebel_streak_cur := coalesce(v_rebel_streak_cur, 0) + 1;
  else
    v_new_rebel_streak_cur := 0;
  end if;
  v_new_rebel_streak_top := greatest(coalesce(v_rebel_streak_top, 0), v_new_rebel_streak_cur);

  update profiles set
    total_points         = coalesce(total_points, 0) + v_gained,
    top_streak           = v_top,
    votes_cast           = v_new_votes_cast,
    rebel_count          = v_new_rebel,
    majority_count       = v_new_majority,
    achievements         = v_owned,
    daily_streak         = v_new_daily_streak,
    last_daily_date      = v_new_last_daily,
    vote_streak_count    = v_cur,
    vote_streak_last_at  = v_now,
    night_votes          = v_new_night,
    dawn_votes           = v_new_dawn,
    weekend_votes        = v_new_weekend,
    active_days          = v_new_active_days,
    last_active_date     = v_new_last_active,
    topic_votes          = v_new_topic_votes,
    rebel_streak_current = v_new_rebel_streak_cur,
    rebel_streak_top     = v_new_rebel_streak_top
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

grant execute on function public.apply_vote_streak(text, uuid, text, boolean, boolean, boolean, text[])
  to anon, authenticated;

-- ---------------------------------------------------------------------------
-- 2) Vote → poll-author stats trigger. Fires only on a real vote insert, so
--    received_votes_total / best_poll_votes can't be inflated by a client.
-- ---------------------------------------------------------------------------
create or replace function public.on_vote_bump_author()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_owner uuid;
  v_total int;
begin
  select profile_id into v_owner from polls where id = NEW.poll_id;
  if v_owner is not null then
    select count(*) into v_total from votes where poll_id = NEW.poll_id;
    perform pg_advisory_xact_lock(hashtextextended(v_owner::text, 0));
    update profiles set
      received_votes_total = coalesce(received_votes_total, 0) + 1,
      best_poll_votes = greatest(coalesce(best_poll_votes, 0), v_total)
    where id = v_owner;
  end if;
  return NEW;
end $$;

drop trigger if exists votes_bump_author on public.votes;
create trigger votes_bump_author
  after insert on public.votes
  for each row execute function public.on_vote_bump_author();
