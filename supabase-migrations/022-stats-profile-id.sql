-- 022: get_achievement_stats also returns profile_id.
--
-- The poll page needs the viewer's profile_id to look up their prediction on
-- the current poll (predictions table). Recreated with `profile_id` in the
-- payload; everything else unchanged. Idempotent.

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
      'owned', '[]'::jsonb, 'coin_balance', 0, 'coins_earned_total', 0
    );
  end if;
  return jsonb_build_object(
    'has_profile', true,
    'profile_id', v_prof.id,
    'metrics', profile_metrics(v_prof),
    'owned', coalesce(v_prof.achievements_v2, '[]'::jsonb),
    'coin_balance', coalesce(v_prof.coin_balance, 0),
    'coins_earned_total', coalesce(v_prof.coins_earned_total, 0)
  );
end $$;

grant execute on function public.get_achievement_stats(uuid, text) to anon, authenticated;
