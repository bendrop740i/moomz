-- 021: M2 — Predictions. Bet coins on a poll's outcome.
--
-- Model (deliberately legal — virtual coins, NO cashout, free coins playable):
--   • You may predict on a poll while it is < 24h old (outcome still open),
--     one prediction per poll, stake 10-1000 coins (spent immediately).
--   • A prediction resolves 24h after the POLL was created (cron, every 15min):
--       - poll got < 10 votes  → refund the stake (too quiet to call).
--       - predicted the winning option → payout = stake / winnerShare,
--         clamped ×1.2–×8 (longshots pay more — self-balancing).
--       - else → lost.
-- Wires the predictions_made / predictions_won / prediction_streak /
-- prediction_max_stake achievement counters. Idempotent.

-- ---------------------------------------------------------------------------
-- 1) predictions table.
-- ---------------------------------------------------------------------------
create table if not exists public.predictions (
  id uuid primary key default gen_random_uuid(),
  poll_id uuid not null references public.polls(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  option_index int not null,
  stake int not null,
  status text not null default 'pending',   -- pending | won | lost | refunded
  payout int not null default 0,
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  unique (poll_id, profile_id)
);
create index if not exists predictions_pending_idx on public.predictions(poll_id) where status = 'pending';
create index if not exists predictions_profile_idx on public.predictions(profile_id, created_at desc);

alter table public.predictions enable row level security;
-- Predictions aren't secret (a poll page can show the pot). Reads open; all
-- writes go through the SECURITY DEFINER RPCs below.
drop policy if exists predictions_read on public.predictions;
create policy predictions_read on public.predictions for select using (true);

-- ---------------------------------------------------------------------------
-- 2) place_prediction — spend coins + record a bet. Identity-token resolved,
--    fully validated; a caller can only ever spend their own balance.
-- ---------------------------------------------------------------------------
create or replace function public.place_prediction(
  p_user_id uuid,
  p_claim_token text,
  p_poll_id uuid,
  p_option_index int,
  p_stake int
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_prof uuid;
  v_poll public.polls%rowtype;
  v_opt_count int;
  v_balance int;
  v_pred_id uuid;
begin
  v_prof := resolve_profile_id(p_user_id, p_claim_token);
  if v_prof is null then
    return jsonb_build_object('ok', false, 'error', 'no_profile');
  end if;
  if p_stake is null or p_stake < 10 or p_stake > 1000 then
    return jsonb_build_object('ok', false, 'error', 'bad_stake');
  end if;

  select * into v_poll from polls where id = p_poll_id;
  if v_poll.id is null then
    return jsonb_build_object('ok', false, 'error', 'no_poll');
  end if;
  if coalesce(v_poll.is_dead, false) then
    return jsonb_build_object('ok', false, 'error', 'closed');
  end if;
  if v_poll.created_at <= now() - interval '24 hours' then
    return jsonb_build_object('ok', false, 'error', 'too_late');
  end if;
  v_opt_count := jsonb_array_length(v_poll.options);
  if p_option_index is null or p_option_index < 0 or p_option_index >= v_opt_count then
    return jsonb_build_object('ok', false, 'error', 'bad_option');
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_prof::text, 0));

  if exists (select 1 from predictions where poll_id = p_poll_id and profile_id = v_prof) then
    return jsonb_build_object('ok', false, 'error', 'already');
  end if;

  select coin_balance into v_balance from profiles where id = v_prof for update;
  if coalesce(v_balance, 0) < p_stake then
    return jsonb_build_object('ok', false, 'error', 'insufficient', 'balance', coalesce(v_balance, 0));
  end if;

  insert into predictions (poll_id, profile_id, option_index, stake)
  values (p_poll_id, v_prof, p_option_index, p_stake)
  returning id into v_pred_id;

  insert into coin_transactions (profile_id, amount, reason, ref)
  values (v_prof, -p_stake, 'prediction', v_pred_id::text);

  update profiles set
    coin_balance = coin_balance - p_stake,
    coins_spent_total = coins_spent_total + p_stake,
    predictions_made = coalesce(predictions_made, 0) + 1,
    prediction_max_stake = greatest(coalesce(prediction_max_stake, 0), p_stake)
  where id = v_prof
  returning coin_balance into v_balance;

  return jsonb_build_object('ok', true, 'balance', v_balance, 'prediction_id', v_pred_id);
end $$;

-- ---------------------------------------------------------------------------
-- 3) resolve_predictions — cron worker. Settles every pending prediction on a
--    poll that is now mature (>=24h old) or dead. Runs as postgres → trusted
--    to credit payouts directly.
-- ---------------------------------------------------------------------------
create or replace function public.resolve_predictions()
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  v_poll record;
  v_pred record;
  v_counts int[];
  v_total int;
  v_max int;
  v_winner int;
  v_share numeric;
  v_mult numeric;
  v_payout int;
  v_resolved int := 0;
  v_streak_cur int;
begin
  for v_poll in
    select distinct p.id as poll_id, p.options
    from predictions pr
    join polls p on p.id = pr.poll_id
    where pr.status = 'pending'
      and (p.created_at <= now() - interval '24 hours' or coalesce(p.is_dead, false))
  loop
    select array_agg(c order by idx) into v_counts from (
      select g.idx, count(v.id)::int as c
      from generate_series(0, jsonb_array_length(v_poll.options) - 1) as g(idx)
      left join votes v on v.poll_id = v_poll.poll_id and v.option_index = g.idx
      group by g.idx
    ) s;
    v_total := coalesce((select sum(x) from unnest(v_counts) x), 0);

    v_max := 0; v_winner := 0;
    for i in 1 .. array_length(v_counts, 1) loop
      if v_counts[i] > v_max then
        v_max := v_counts[i];
        v_winner := i - 1;
      end if;
    end loop;

    for v_pred in
      select * from predictions
      where poll_id = v_poll.poll_id and status = 'pending'
      order by created_at
    loop
      if v_total < 10 then
        update predictions set status = 'refunded', payout = v_pred.stake, resolved_at = now()
          where id = v_pred.id;
        update profiles set coin_balance = coin_balance + v_pred.stake
          where id = v_pred.profile_id;
        insert into coin_transactions (profile_id, amount, reason, ref)
          values (v_pred.profile_id, v_pred.stake, 'prediction_refund', v_pred.id::text);
      elsif v_pred.option_index = v_winner then
        v_share := greatest(v_max::numeric / nullif(v_total, 0), 0.05);
        v_mult := least(greatest(1.0 / v_share, 1.2), 8.0);
        v_payout := round(v_pred.stake * v_mult);
        update predictions set status = 'won', payout = v_payout, resolved_at = now()
          where id = v_pred.id;
        select coalesce(prediction_streak_current, 0) + 1 into v_streak_cur
          from profiles where id = v_pred.profile_id;
        update profiles set
          coin_balance = coin_balance + v_payout,
          coins_earned_total = coins_earned_total + v_payout,
          predictions_won = coalesce(predictions_won, 0) + 1,
          prediction_streak_current = v_streak_cur,
          prediction_streak_top = greatest(coalesce(prediction_streak_top, 0), v_streak_cur)
        where id = v_pred.profile_id;
        insert into coin_transactions (profile_id, amount, reason, ref)
          values (v_pred.profile_id, v_payout, 'prediction_payout', v_pred.id::text);
      else
        update predictions set status = 'lost', payout = 0, resolved_at = now()
          where id = v_pred.id;
        update profiles set prediction_streak_current = 0
          where id = v_pred.profile_id;
      end if;
      v_resolved := v_resolved + 1;
    end loop;
  end loop;
  return v_resolved;
end $$;

-- ---------------------------------------------------------------------------
-- 4) Grants + cron. place_prediction is safe for anon (token-resolved,
--    validated). resolve_predictions is cron-only — revoke from clients.
-- ---------------------------------------------------------------------------
grant execute on function public.place_prediction(uuid, text, uuid, int, int) to anon, authenticated;
revoke execute on function public.resolve_predictions() from anon, authenticated;

do $$
begin
  perform cron.unschedule('resolve_predictions_job');
exception when others then null;
end $$;
select cron.schedule('resolve_predictions_job', '*/15 * * * *', $$ select public.resolve_predictions(); $$);
