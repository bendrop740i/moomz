-- 024: M3 — coin shop. Buy cosmetic palettes with coins.
--
-- Adds profiles.cosmetics_owned, the buy_cosmetic RPC, and exposes
-- cosmetics_owned via get_achievement_stats so the shop page can render
-- owned/buyable state. Buying is an alternative to the points/streak unlock.
-- Idempotent.

alter table public.profiles
  add column if not exists cosmetics_owned text[] not null default '{}';

-- ---------------------------------------------------------------------------
-- buy_cosmetic — spend coins for a palette. Identity-resolved, server-priced
-- (the CASE is the source of truth — keep in sync with lib/cosmetics.ts).
-- ---------------------------------------------------------------------------
create or replace function public.buy_cosmetic(
  p_user_id uuid,
  p_claim_token text,
  p_cosmetic_id text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_prof uuid;
  v_price int;
  v_balance int;
  v_owned text[];
begin
  v_prof := resolve_profile_id(p_user_id, p_claim_token);
  if v_prof is null then
    return jsonb_build_object('ok', false, 'error', 'no_profile');
  end if;

  v_price := case p_cosmetic_id
    when 'candy'  then 200
    when 'sunset' then 350
    when 'neon'   then 600
    when 'fire'   then 800
    when 'matrix' then 1000
    when 'galaxy' then 1200
    when 'gold'   then 1500
    else 0
  end;
  if v_price <= 0 then
    return jsonb_build_object('ok', false, 'error', 'bad_item');
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_prof::text, 0));

  select coin_balance, coalesce(cosmetics_owned, '{}')
    into v_balance, v_owned
  from profiles where id = v_prof for update;

  if p_cosmetic_id = any(v_owned) then
    return jsonb_build_object('ok', false, 'error', 'already', 'balance', coalesce(v_balance, 0));
  end if;
  if coalesce(v_balance, 0) < v_price then
    return jsonb_build_object('ok', false, 'error', 'insufficient', 'balance', coalesce(v_balance, 0));
  end if;

  insert into coin_transactions (profile_id, amount, reason, ref)
  values (v_prof, -v_price, 'cosmetic', p_cosmetic_id);

  update profiles set
    coin_balance = coin_balance - v_price,
    coins_spent_total = coins_spent_total + v_price,
    cosmetics_owned = array_append(cosmetics_owned, p_cosmetic_id),
    cosmetics_unlocked = coalesce(cosmetics_unlocked, 0) + 1
  where id = v_prof
  returning coin_balance into v_balance;

  return jsonb_build_object('ok', true, 'balance', v_balance);
end $$;

grant execute on function public.buy_cosmetic(uuid, text, text) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- get_achievement_stats — recreated to also return cosmetics_owned.
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
      'has_profile', false, 'profile_id', null, 'metrics', '{}'::jsonb,
      'owned', '[]'::jsonb, 'coin_balance', 0, 'coins_earned_total', 0,
      'cosmetics_owned', '[]'::jsonb
    );
  end if;
  return jsonb_build_object(
    'has_profile', true,
    'profile_id', v_prof.id,
    'metrics', profile_metrics(v_prof),
    'owned', coalesce(v_prof.achievements_v2, '[]'::jsonb),
    'coin_balance', coalesce(v_prof.coin_balance, 0),
    'coins_earned_total', coalesce(v_prof.coins_earned_total, 0),
    'cosmetics_owned', coalesce(to_jsonb(v_prof.cosmetics_owned), '[]'::jsonb)
  );
end $$;

grant execute on function public.get_achievement_stats(uuid, text) to anon, authenticated;
