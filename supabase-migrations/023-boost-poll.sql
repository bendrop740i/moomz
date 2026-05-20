-- 023: M3 — poll boost. Spend coins to push your own poll up Trending.
--
-- The `polls.boost_until` column + the 5× factor in the `polls_trending` view
-- already exist. This adds the coin-spend RPC: 150 coins → 24h of boost
-- (re-boost extends). Identity-resolved, owner-only, balance-checked — a
-- caller can only spend their own coins on their own poll. Wires the
-- `polls_boosted` counter (the `booster` achievement family). Idempotent.

create or replace function public.boost_poll(
  p_user_id uuid,
  p_claim_token text,
  p_poll_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_prof uuid;
  v_poll public.polls%rowtype;
  v_cost int := 150;
  v_balance int;
  v_new_until timestamptz;
begin
  v_prof := resolve_profile_id(p_user_id, p_claim_token);
  if v_prof is null then
    return jsonb_build_object('ok', false, 'error', 'no_profile');
  end if;

  select * into v_poll from polls where id = p_poll_id;
  if v_poll.id is null then
    return jsonb_build_object('ok', false, 'error', 'no_poll');
  end if;
  if coalesce(v_poll.is_dead, false) then
    return jsonb_build_object('ok', false, 'error', 'closed');
  end if;
  if v_poll.profile_id is null or v_poll.profile_id <> v_prof then
    return jsonb_build_object('ok', false, 'error', 'not_owner');
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_prof::text, 0));

  select coin_balance into v_balance from profiles where id = v_prof for update;
  if coalesce(v_balance, 0) < v_cost then
    return jsonb_build_object('ok', false, 'error', 'insufficient', 'balance', coalesce(v_balance, 0));
  end if;

  -- Extend from the later of (now, current boost end) by 24h.
  v_new_until := greatest(coalesce(v_poll.boost_until, now()), now()) + interval '24 hours';
  update polls set boost_until = v_new_until where id = p_poll_id;

  insert into coin_transactions (profile_id, amount, reason, ref)
  values (v_prof, -v_cost, 'boost', null);

  update profiles set
    coin_balance = coin_balance - v_cost,
    coins_spent_total = coins_spent_total + v_cost,
    polls_boosted = coalesce(polls_boosted, 0) + 1
  where id = v_prof
  returning coin_balance into v_balance;

  return jsonb_build_object('ok', true, 'balance', v_balance, 'boost_until', v_new_until);
end $$;

grant execute on function public.boost_poll(uuid, text, uuid) to anon, authenticated;
