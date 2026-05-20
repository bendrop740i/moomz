-- 016: Coins economy + parametric-achievement foundation.
--
-- Additive + idempotent — safe to re-run. Wires the data layer for M1 of the
-- monetization plan: a virtual coin currency (earned free now, buyable via
-- Stripe later) and the ~230-achievement parametric engine (lib/achievements).
--
-- Security model: coin grants are server-authoritative. claim_achievements
-- re-validates every claimed achievement against the profile's REAL counters
-- and uses the canonical coin_reward from achievement_defs — a client cannot
-- mint coins by lying. apply_coins only ever SPENDS (negative amounts). Both
-- resolve the profile from identity tokens, so a caller can't target someone
-- else's balance. Every movement is one immutable coin_transactions row.

-- ---------------------------------------------------------------------------
-- 1) Coin balance + achievement-engine counters on profiles.
-- ---------------------------------------------------------------------------
alter table public.profiles add column if not exists coin_balance int not null default 0;
alter table public.profiles add column if not exists coins_earned_total int not null default 0;
alter table public.profiles add column if not exists coins_spent_total int not null default 0;
alter table public.profiles add column if not exists active_days int not null default 0;
alter table public.profiles add column if not exists last_active_date date;
alter table public.profiles add column if not exists best_poll_votes int not null default 0;
alter table public.profiles add column if not exists topic_votes jsonb not null default '{}'::jsonb;
alter table public.profiles add column if not exists predictions_made int not null default 0;
alter table public.profiles add column if not exists predictions_won int not null default 0;
-- Parametric engine ids live here; legacy `achievements` (11 badges) stays.
alter table public.profiles add column if not exists achievements_v2 jsonb not null default '[]'::jsonb;

-- ---------------------------------------------------------------------------
-- 2) Coin ledger — one immutable row per movement (audit + idempotency).
-- ---------------------------------------------------------------------------
create table if not exists public.coin_transactions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  amount int not null,            -- >0 earn, <0 spend
  reason text not null,           -- 'achievement' | 'streak' | 'daily' | 'boost' | 'prediction'
  ref text,                       -- dedup key within (profile_id, reason)
  created_at timestamptz not null default now()
);
create index if not exists coin_tx_profile_idx on public.coin_transactions(profile_id, created_at desc);
create unique index if not exists coin_tx_dedup_idx
  on public.coin_transactions(profile_id, reason, ref) where ref is not null;
alter table public.coin_transactions enable row level security;
-- No policies → no direct anon/authenticated access. Writes go through the
-- SECURITY DEFINER RPCs below only.

-- ---------------------------------------------------------------------------
-- 3) Achievement catalog — seeded from lib/achievements (see 016b seed).
--    claim_achievements validates against this table, so it is the source of
--    truth for thresholds + coin rewards (client is never trusted).
-- ---------------------------------------------------------------------------
create table if not exists public.achievement_defs (
  id text primary key,            -- e.g. "votes.50"
  family text not null,
  metric text not null,           -- e.g. "votesCast" or "topic:food"
  threshold int not null,
  coin_reward int not null
);

-- ---------------------------------------------------------------------------
-- 4) Helper: resolve a profile id from identity tokens (user_id | claim_token).
-- ---------------------------------------------------------------------------
create or replace function public.resolve_profile_id(
  p_user_id uuid,
  p_claim_token text
)
returns uuid
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if p_user_id is not null then
    select id into v_id from profiles where user_id = p_user_id;
    if v_id is not null then return v_id; end if;
  end if;
  if p_claim_token is not null and length(p_claim_token) > 0 then
    select id into v_id from profiles where claim_token = p_claim_token;
  end if;
  return v_id;
end $$;

-- ---------------------------------------------------------------------------
-- 5) apply_coins — SPEND only (negative amounts). Earning happens via
--    claim_achievements / apply_vote_streak so a caller can never mint coins.
-- ---------------------------------------------------------------------------
create or replace function public.apply_coins(
  p_user_id uuid,
  p_claim_token text,
  p_amount int,
  p_reason text,
  p_ref text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_prof uuid;
  v_balance int;
  v_inserted boolean := false;
begin
  v_prof := resolve_profile_id(p_user_id, p_claim_token);
  if v_prof is null then
    return jsonb_build_object('applied', false, 'balance', 0, 'error', 'no_profile');
  end if;
  -- Hard guard: this RPC only ever removes coins.
  if p_amount is null or p_amount >= 0 then
    select coin_balance into v_balance from profiles where id = v_prof;
    return jsonb_build_object('applied', false, 'balance', coalesce(v_balance,0), 'error', 'spend_only');
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_prof::text, 0));

  select coin_balance into v_balance from profiles where id = v_prof for update;
  if coalesce(v_balance, 0) + p_amount < 0 then
    return jsonb_build_object('applied', false, 'balance', coalesce(v_balance,0), 'error', 'insufficient');
  end if;

  begin
    insert into coin_transactions(profile_id, amount, reason, ref)
    values (v_prof, p_amount, coalesce(p_reason, 'spend'), p_ref);
    v_inserted := true;
  exception when unique_violation then
    v_inserted := false;
  end;

  if not v_inserted then
    return jsonb_build_object('applied', false, 'balance', coalesce(v_balance,0), 'error', 'duplicate');
  end if;

  update profiles set
    coin_balance = coin_balance + p_amount,
    coins_spent_total = coins_spent_total + (-p_amount)
  where id = v_prof
  returning coin_balance into v_balance;

  return jsonb_build_object('applied', true, 'balance', coalesce(v_balance,0));
end $$;

-- ---------------------------------------------------------------------------
-- 6) claim_achievements — unlock + grant coins, fully server-validated.
--    p_ids = the achievement ids the client believes it just unlocked. Each
--    is re-checked against achievement_defs + the profile's real counters.
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
  -- Re-read inside the lock for a consistent snapshot.
  select * into v_prof from profiles where id = v_prof.id for update;
  v_owned := coalesce(v_prof.achievements_v2, '[]'::jsonb);

  -- Build the full metric snapshot once: scalar counters + topic:* keys.
  v_metrics := jsonb_build_object(
    'votesCast',            coalesce(v_prof.votes_cast, 0),
    'voteStreakTop',        coalesce(v_prof.top_streak, 0),
    'dailyStreak',          coalesce(v_prof.daily_streak, 0),
    'activeDays',           coalesce(v_prof.active_days, 0),
    'pollsCreated',         coalesce(v_prof.polls_created, 0),
    'bestPollVotes',        coalesce(v_prof.best_poll_votes, 0),
    'rebelCount',           coalesce(v_prof.rebel_count, 0),
    'majorityCount',        coalesce(v_prof.majority_count, 0),
    'totalPoints',          coalesce(v_prof.total_points, 0),
    'coinsEarnedTotal',     coalesce(v_prof.coins_earned_total, 0),
    'coinsSpentTotal',      coalesce(v_prof.coins_spent_total, 0),
    'achievementsUnlocked', jsonb_array_length(v_owned),
    'predictionsMade',      coalesce(v_prof.predictions_made, 0),
    'predictionsWon',       coalesce(v_prof.predictions_won, 0)
  ) || coalesce(
    (select jsonb_object_agg('topic:' || k, v)
       from jsonb_each(coalesce(v_prof.topic_votes, '{}'::jsonb)) as e(k, v)),
    '{}'::jsonb
  );

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

-- ---------------------------------------------------------------------------
-- 7) Grants. Both RPCs are safe for anon/authenticated: they resolve the
--    profile from secret identity tokens and never trust client amounts.
-- ---------------------------------------------------------------------------
grant execute on function public.resolve_profile_id(uuid, text) to anon, authenticated;
grant execute on function public.apply_coins(uuid, text, int, text, text) to anon, authenticated;
grant execute on function public.claim_achievements(uuid, text, text[]) to anon, authenticated;
grant select on public.achievement_defs to anon, authenticated;
