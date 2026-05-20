-- 027 — profiles column lockdown (security audit fixes #1, #2, #3)
--
-- APPLY ONLY AFTER the app deploy that routes claim_token lookups through the
-- resolve_profile_id() RPC is fully live. Before that, the old code still
-- SELECTs profiles.claim_token directly and this migration would break it.
--
-- #1 claim_token exposure: anon/authenticated lose direct SELECT on the secret
--    claim_token column. An attacker can no longer dump tokens and hijack
--    accounts. Token -> id resolution goes via the SECURITY DEFINER
--    resolve_profile_id() RPC.
-- #2 privilege escalation: anon/authenticated lose UPDATE on the escalation
--    columns (claim_token, user_id, is_bot, tier, is_verified). No more
--    account-hijack via user_id, fake verification, or free premium tier.
-- #3 profiles_public runs with security_invoker (Supabase advisor).
--
-- SECURITY DEFINER functions (link_profile_to_user, apply_vote_streak,
-- claim_achievements, get_achievement_stats, resolve_profile_id, the gameplay
-- RPCs) run as the table owner and are UNAFFECTED by these column grants.

-- #1 — SELECT: revoke table-wide, re-grant every column except claim_token.
revoke select on public.profiles from anon, authenticated;
grant select (
  id, username, display_name, bio, socials, avatar_emoji, created_at,
  total_points, top_streak, achievements, votes_cast, rebel_count,
  majority_count, polls_created, daily_streak, last_daily_date, user_id,
  is_bot, tier, creator_since, palette, is_verified, avatar_url, cosmetic_id,
  vote_streak_count, vote_streak_last_at, coin_balance, coins_earned_total,
  coins_spent_total, active_days, last_active_date, best_poll_votes,
  topic_votes, predictions_made, predictions_won, achievements_v2,
  night_votes, dawn_votes, weekend_votes, rebel_streak_top,
  rebel_streak_current, received_votes_total, cosmetics_unlocked,
  polls_boosted, questions_asked, questions_answered, questions_received,
  quizzes_completed, polls_seen, prediction_streak_top,
  prediction_streak_current, prediction_max_stake, topic_polls,
  cosmetics_owned
) on public.profiles to anon, authenticated;

-- #2 — UPDATE: revoke table-wide, re-grant only non-escalation columns.
revoke update on public.profiles from anon, authenticated;
grant update (
  username, display_name, bio, socials, avatar_emoji, total_points,
  top_streak, achievements, votes_cast, rebel_count, majority_count,
  polls_created, daily_streak, last_daily_date, creator_since, palette,
  avatar_url, cosmetic_id, vote_streak_count, vote_streak_last_at,
  coin_balance, coins_earned_total, coins_spent_total, active_days,
  last_active_date, best_poll_votes, topic_votes, predictions_made,
  predictions_won, achievements_v2, night_votes, dawn_votes, weekend_votes,
  rebel_streak_top, rebel_streak_current, received_votes_total,
  cosmetics_unlocked, polls_boosted, questions_asked, questions_answered,
  questions_received, quizzes_completed, polls_seen, prediction_streak_top,
  prediction_streak_current, prediction_max_stake, topic_polls,
  cosmetics_owned
) on public.profiles to anon, authenticated;

-- #3 — profiles_public respects the caller RLS.
alter view public.profiles_public set (security_invoker = true);
