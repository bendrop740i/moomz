-- 017: Extra achievement counters + claim_achievements upgrade.
--
-- The catalog grew from 229 → 418 achievements across 12 domains (votes by
-- time-of-day, ASK, quiz, exploration, account age, audience, predictions,
-- per-topic creation…). This adds the counter columns those new families
-- read, and recreates claim_achievements so its server-side metric snapshot
-- covers every metric (including derived ones). Additive + idempotent.

-- ---------------------------------------------------------------------------
-- 1) New counter columns on profiles.
-- ---------------------------------------------------------------------------
alter table public.profiles add column if not exists night_votes int not null default 0;
alter table public.profiles add column if not exists dawn_votes int not null default 0;
alter table public.profiles add column if not exists weekend_votes int not null default 0;
alter table public.profiles add column if not exists rebel_streak_top int not null default 0;
alter table public.profiles add column if not exists rebel_streak_current int not null default 0;
alter table public.profiles add column if not exists received_votes_total int not null default 0;
alter table public.profiles add column if not exists cosmetics_unlocked int not null default 0;
alter table public.profiles add column if not exists polls_boosted int not null default 0;
alter table public.profiles add column if not exists questions_asked int not null default 0;
alter table public.profiles add column if not exists questions_answered int not null default 0;
alter table public.profiles add column if not exists questions_received int not null default 0;
alter table public.profiles add column if not exists quizzes_completed int not null default 0;
alter table public.profiles add column if not exists polls_seen int not null default 0;
alter table public.profiles add column if not exists prediction_streak_top int not null default 0;
alter table public.profiles add column if not exists prediction_streak_current int not null default 0;
alter table public.profiles add column if not exists prediction_max_stake int not null default 0;
alter table public.profiles add column if not exists topic_polls jsonb not null default '{}'::jsonb;

-- ---------------------------------------------------------------------------
-- 2) claim_achievements — recreated with the full metric snapshot.
--    accountAgeDays + distinctTopicsVoted are derived; topic:* / tpoll:* are
--    expanded from the topic_votes / topic_polls jsonb maps.
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
  v_prof profiles%rowtype;
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

  v_metrics := jsonb_build_object(
    'votesCast',            coalesce(v_prof.votes_cast, 0),
    'nightVotes',           coalesce(v_prof.night_votes, 0),
    'dawnVotes',            coalesce(v_prof.dawn_votes, 0),
    'weekendVotes',         coalesce(v_prof.weekend_votes, 0),
    'voteStreakTop',        coalesce(v_prof.top_streak, 0),
    'rebelStreakTop',       coalesce(v_prof.rebel_streak_top, 0),
    'dailyStreak',          coalesce(v_prof.daily_streak, 0),
    'activeDays',           coalesce(v_prof.active_days, 0),
    'accountAgeDays',       greatest(0, (current_date - coalesce(v_prof.created_at, now())::date)),
    'pollsCreated',         coalesce(v_prof.polls_created, 0),
    'bestPollVotes',        coalesce(v_prof.best_poll_votes, 0),
    'receivedVotesTotal',   coalesce(v_prof.received_votes_total, 0),
    'rebelCount',           coalesce(v_prof.rebel_count, 0),
    'majorityCount',        coalesce(v_prof.majority_count, 0),
    'totalPoints',          coalesce(v_prof.total_points, 0),
    'coinsEarnedTotal',     coalesce(v_prof.coins_earned_total, 0),
    'coinsSpentTotal',      coalesce(v_prof.coins_spent_total, 0),
    'cosmeticsUnlocked',    coalesce(v_prof.cosmetics_unlocked, 0),
    'pollsBoosted',         coalesce(v_prof.polls_boosted, 0),
    'questionsAsked',       coalesce(v_prof.questions_asked, 0),
    'questionsAnswered',    coalesce(v_prof.questions_answered, 0),
    'questionsReceived',    coalesce(v_prof.questions_received, 0),
    'quizzesCompleted',     coalesce(v_prof.quizzes_completed, 0),
    'pollsSeen',            coalesce(v_prof.polls_seen, 0),
    'distinctTopicsVoted',  (select count(*) from jsonb_object_keys(coalesce(v_prof.topic_votes, '{}'::jsonb))),
    'predictionsMade',      coalesce(v_prof.predictions_made, 0),
    'predictionsWon',       coalesce(v_prof.predictions_won, 0),
    'predictionStreakTop',  coalesce(v_prof.prediction_streak_top, 0),
    'predictionMaxStake',   coalesce(v_prof.prediction_max_stake, 0),
    'achievementsUnlocked', jsonb_array_length(v_owned)
  )
  || coalesce((select jsonb_object_agg('topic:' || k, v)
       from jsonb_each(coalesce(v_prof.topic_votes, '{}'::jsonb)) as e(k, v)), '{}'::jsonb)
  || coalesce((select jsonb_object_agg('tpoll:' || k, v)
       from jsonb_each(coalesce(v_prof.topic_polls, '{}'::jsonb)) as e(k, v)), '{}'::jsonb);

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

grant execute on function public.claim_achievements(uuid, text, text[]) to anon, authenticated;
