-- 018: Achievement stats read RPC + shared metric helper.
--
-- castVote (and the /haut-faits page) need the profile's full metric snapshot
-- to run the parametric evaluator in TS. This adds:
--   • profile_metrics(profiles) — the canonical metric snapshot, one source of
--     truth shared by claim_achievements + get_achievement_stats (no drift).
--   • get_achievement_stats — read-only: metrics + owned + coin balance.
--   • claim_achievements — recreated to use the helper.
-- Additive + idempotent.

-- ---------------------------------------------------------------------------
-- 1) Shared metric snapshot. accountAgeDays + distinctTopicsVoted are derived;
--    topic:* / tpoll:* are expanded from the jsonb maps.
-- ---------------------------------------------------------------------------
create or replace function public.profile_metrics(p public.profiles)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'votesCast',            coalesce(p.votes_cast, 0),
    'nightVotes',           coalesce(p.night_votes, 0),
    'dawnVotes',            coalesce(p.dawn_votes, 0),
    'weekendVotes',         coalesce(p.weekend_votes, 0),
    'voteStreakTop',        coalesce(p.top_streak, 0),
    'rebelStreakTop',       coalesce(p.rebel_streak_top, 0),
    'dailyStreak',          coalesce(p.daily_streak, 0),
    'activeDays',           coalesce(p.active_days, 0),
    'accountAgeDays',       greatest(0, (current_date - coalesce(p.created_at, now())::date)),
    'pollsCreated',         coalesce(p.polls_created, 0),
    'bestPollVotes',        coalesce(p.best_poll_votes, 0),
    'receivedVotesTotal',   coalesce(p.received_votes_total, 0),
    'rebelCount',           coalesce(p.rebel_count, 0),
    'majorityCount',        coalesce(p.majority_count, 0),
    'totalPoints',          coalesce(p.total_points, 0),
    'coinsEarnedTotal',     coalesce(p.coins_earned_total, 0),
    'coinsSpentTotal',      coalesce(p.coins_spent_total, 0),
    'cosmeticsUnlocked',    coalesce(p.cosmetics_unlocked, 0),
    'pollsBoosted',         coalesce(p.polls_boosted, 0),
    'questionsAsked',       coalesce(p.questions_asked, 0),
    'questionsAnswered',    coalesce(p.questions_answered, 0),
    'questionsReceived',    coalesce(p.questions_received, 0),
    'quizzesCompleted',     coalesce(p.quizzes_completed, 0),
    'pollsSeen',            coalesce(p.polls_seen, 0),
    'distinctTopicsVoted',  (select count(*) from jsonb_object_keys(coalesce(p.topic_votes, '{}'::jsonb))),
    'predictionsMade',      coalesce(p.predictions_made, 0),
    'predictionsWon',       coalesce(p.predictions_won, 0),
    'predictionStreakTop',  coalesce(p.prediction_streak_top, 0),
    'predictionMaxStake',   coalesce(p.prediction_max_stake, 0),
    'achievementsUnlocked', jsonb_array_length(coalesce(p.achievements_v2, '[]'::jsonb))
  )
  || coalesce((select jsonb_object_agg('topic:' || k, v)
       from jsonb_each(coalesce(p.topic_votes, '{}'::jsonb)) as e(k, v)), '{}'::jsonb)
  || coalesce((select jsonb_object_agg('tpoll:' || k, v)
       from jsonb_each(coalesce(p.topic_polls, '{}'::jsonb)) as e(k, v)), '{}'::jsonb);
$$;

-- ---------------------------------------------------------------------------
-- 2) Read-only: full stats for the evaluator + the achievements page.
-- ---------------------------------------------------------------------------
create or replace function public.get_achievement_stats(
  p_user_id uuid,
  p_claim_token text
)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_prof public.profiles%rowtype;
begin
  select * into v_prof from profiles
  where id = resolve_profile_id(p_user_id, p_claim_token);
  if v_prof.id is null then
    return jsonb_build_object(
      'has_profile', false, 'metrics', '{}'::jsonb, 'owned', '[]'::jsonb,
      'coin_balance', 0, 'coins_earned_total', 0
    );
  end if;
  return jsonb_build_object(
    'has_profile', true,
    'metrics', profile_metrics(v_prof),
    'owned', coalesce(v_prof.achievements_v2, '[]'::jsonb),
    'coin_balance', coalesce(v_prof.coin_balance, 0),
    'coins_earned_total', coalesce(v_prof.coins_earned_total, 0)
  );
end $$;

-- ---------------------------------------------------------------------------
-- 3) claim_achievements — recreated to use the shared helper.
-- ---------------------------------------------------------------------------
create or replace function public.claim_achievements(
  p_user_id uuid,
  p_claim_token text,
  p_ids text[]
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_prof public.profiles%rowtype;
  v_owned jsonb;
  v_metrics jsonb;
  v_id text;
  v_def achievement_defs%rowtype;
  v_have int;
  v_granted int := 0;
  v_applied text[] := array[]::text[];
  v_inserted boolean;
  v_balance int;
begin
  if p_ids is null or array_length(p_ids, 1) is null then
    return jsonb_build_object('applied', '[]'::jsonb, 'coins', 0, 'balance', 0);
  end if;

  select * into v_prof from profiles
  where id = resolve_profile_id(p_user_id, p_claim_token);
  if v_prof.id is null then
    return jsonb_build_object('applied', '[]'::jsonb, 'coins', 0, 'balance', 0, 'error', 'no_profile');
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_prof.id::text, 0));
  select * into v_prof from profiles where id = v_prof.id for update;
  v_owned := coalesce(v_prof.achievements_v2, '[]'::jsonb);
  v_metrics := profile_metrics(v_prof);

  foreach v_id in array p_ids loop
    if v_id is null or v_owned ? v_id then continue; end if;
    select * into v_def from achievement_defs where id = v_id;
    if v_def.id is null then continue; end if;
    v_have := coalesce((v_metrics->>v_def.metric)::int, 0);
    if v_have < v_def.threshold then continue; end if;  -- not actually earned

    begin
      insert into coin_transactions(profile_id, amount, reason, ref)
      values (v_prof.id, v_def.coin_reward, 'achievement', v_id);
      v_inserted := true;
    exception when unique_violation then
      v_inserted := false;
    end;
    v_owned := v_owned || jsonb_build_array(v_id);
    v_applied := array_append(v_applied, v_id);
    if v_inserted then
      v_granted := v_granted + v_def.coin_reward;
    end if;
  end loop;

  update profiles set
    achievements_v2 = v_owned,
    coin_balance = coin_balance + v_granted,
    coins_earned_total = coins_earned_total + v_granted
  where id = v_prof.id
  returning coin_balance into v_balance;

  return jsonb_build_object(
    'applied', to_jsonb(v_applied),
    'coins', v_granted,
    'balance', coalesce(v_balance, 0)
  );
end $$;

grant execute on function public.profile_metrics(public.profiles) to anon, authenticated;
grant execute on function public.get_achievement_stats(uuid, text) to anon, authenticated;
grant execute on function public.claim_achievements(uuid, text, text[]) to anon, authenticated;
