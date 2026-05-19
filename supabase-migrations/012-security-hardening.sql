-- 2026-05-20: Security hardening pass.
-- 1) Recreate the 5 public views as SECURITY INVOKER (Postgres 15+) so they
--    respect the calling role's RLS instead of running with the view owner's
--    elevated rights. Supabase advisor flagged all 5 as ERROR.
-- 2) Revoke EXECUTE from anon + authenticated on cron-only / utility RPCs
--    that should not be callable from the REST endpoint. pg_cron runs as the
--    `postgres` role so the jobs keep working.
-- 3) Block anon + authenticated from setting `is_bot = true` on profiles via
--    a BEFORE INSERT/UPDATE trigger. Service role (seed migrations) bypasses.
-- 4) Filter `skipped` questions out of the public ASK view. Pending + answered
--    stay public because the FeaturedAsks home carousel intentionally surfaces
--    pending bot questions.
-- 5) Materialize `pick_daily_moomz` in the repo. It was previously applied
--    directly to Supabase via the PAT and never tracked locally — a fresh env
--    would have been missing the function the daily cron depends on.
--
-- Idempotent — safe to re-run.

-- ---------------------------------------------------------------------------
-- 1) SECURITY INVOKER on public views
-- ---------------------------------------------------------------------------

create or replace view public.polls_with_stats
with (security_invoker = true)
as
 select p.id,
    p.slug,
    p.question,
    p.options,
    p.created_at,
    p.profile_id,
    p.image_url,
    p.topics,
    coalesce(p.is_seed, false) as is_seed,
    coalesce(count(v.id), 0::bigint)::integer as vote_count,
    max(v.created_at) as last_vote_at
   from polls p
     left join votes v on v.poll_id = p.id
  where coalesce(p.is_dead, false) = false
  group by p.id, p.slug, p.question, p.options, p.created_at,
           p.profile_id, p.image_url, p.topics, p.is_seed;

create or replace view public.polls_trending
with (security_invoker = true)
as
 with vote_counts as (
         select votes.poll_id,
            count(*)::integer as total_votes,
            max(votes.created_at) as last_vote_at
           from votes
          group by votes.poll_id
        ), recent as (
         select votes.poll_id,
            count(*)::integer as recent_votes
           from votes
          where votes.created_at > (now() - '00:10:00'::interval)
          group by votes.poll_id
        )
 select p.id,
    p.slug,
    p.question,
    p.options,
    p.created_at,
    coalesce(vc.total_votes, 0) as vote_count,
    coalesce(r.recent_votes, 0) as recent_votes,
    coalesce(p.is_seed, false) as is_seed,
    p.profile_id,
    p.image_url,
    p.topics,
    vc.last_vote_at,
    coalesce(vc.total_votes, 0)::double precision *
        case
            when coalesce(p.is_seed, false) then 1.0
            else 1.8
        end::double precision *
        case
            when p.created_at > (now() - '00:30:00'::interval) then 2.5
            else 1.0
        end::double precision *
        power(1.0 / greatest(extract(epoch from now() - p.created_at) / 3600.0 + 2::numeric, 0.1), 1.2)::double precision
        as trending_score
   from polls p
     left join vote_counts vc on vc.poll_id = p.id
     left join recent r on r.poll_id = p.id
  where p.created_at > (now() - '14 days'::interval)
    and coalesce(p.is_dead, false) = false;

create or replace view public.profiles_public
with (security_invoker = true)
as
 select id, username, display_name, bio, socials, avatar_emoji,
        total_points, top_streak, daily_streak, achievements,
        votes_cast, rebel_count, majority_count, polls_created,
        created_at, is_bot
   from profiles;

-- Filter out skipped questions from the public surface. Pending stays because
-- the home FeaturedAsks intentionally surfaces bot-pending questions.
create or replace view public.ask_questions_public
with (security_invoker = true)
as
 select q.id,
    q.recipient_id,
    p.username as recipient_username,
    p.display_name as recipient_display_name,
    p.avatar_emoji as recipient_avatar,
    q.text,
    q.answer,
    q.status,
    q.locale,
    q.created_at,
    q.answered_at
   from ask_questions q
     join profiles p on p.id = q.recipient_id
  where q.status in ('pending', 'answered');

create or replace view public.votes_world_24h
with (security_invoker = true)
as
 select country,
    count(*)::integer as votes,
    max(created_at) as last_vote_at
   from votes
  where country is not null
    and created_at > (now() - '24:00:00'::interval)
  group by country
  order by count(*)::integer desc;

grant select on public.polls_with_stats        to anon, authenticated;
grant select on public.polls_trending          to anon, authenticated;
grant select on public.profiles_public         to anon, authenticated;
grant select on public.ask_questions_public    to anon, authenticated;
grant select on public.votes_world_24h         to anon, authenticated;

-- ---------------------------------------------------------------------------
-- 2) Revoke EXECUTE on cron / utility RPCs from anon + authenticated.
--    Cron jobs run as `postgres` and bypass these grants.
-- ---------------------------------------------------------------------------

revoke execute on function public.fake_vote_burst()    from anon, authenticated, public;
revoke execute on function public.pick_daily_moomz()   from anon, authenticated, public;
revoke execute on function public.rls_auto_enable()    from anon, authenticated, public;
revoke execute on function public.sweep_dead_polls()   from anon, authenticated, public;

-- ---------------------------------------------------------------------------
-- 3) Block anon + authenticated from setting profiles.is_bot = true.
--    Trigger runs BEFORE INSERT/UPDATE and rejects writes from non-privileged
--    roles. service_role + postgres bypass via `current_user` check.
-- ---------------------------------------------------------------------------

create or replace function public.block_is_bot_user_set()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  if coalesce(new.is_bot, false) = true
     and current_user not in ('postgres', 'supabase_admin', 'service_role') then
    raise exception 'profiles.is_bot can only be set by service role'
      using errcode = 'insufficient_privilege';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_block_is_bot on public.profiles;
create trigger profiles_block_is_bot
  before insert or update of is_bot on public.profiles
  for each row execute function public.block_is_bot_user_set();

-- ---------------------------------------------------------------------------
-- 4) Materialize pick_daily_moomz so a fresh env has it.
--    Function was previously applied via PAT only.
-- ---------------------------------------------------------------------------

create or replace function public.pick_daily_moomz()
returns uuid
language plpgsql
security definer
set search_path = public
as $function$
declare
  picked_id uuid;
begin
  select poll_id into picked_id from daily_moomz where date = current_date;
  if picked_id is not null then return picked_id; end if;

  with stats as (
    select p.id, p.is_seed, count(v.id) as vc
    from polls p
    left join votes v on v.poll_id = p.id
    where p.created_at > now() - interval '14 days'
    group by p.id, p.is_seed
  )
  select id into picked_id
  from stats
  where vc >= 30
  order by (not is_seed)::int desc, random()
  limit 1;

  if picked_id is null then
    select id into picked_id from polls
    where created_at > now() - interval '14 days'
    order by random() limit 1;
  end if;

  if picked_id is not null then
    insert into daily_moomz (date, poll_id) values (current_date, picked_id)
    on conflict (date) do nothing;
  end if;
  return picked_id;
end $function$;

-- After re-creating the function, the prior REVOKE applies to the new version
-- only if grants don't reset. Re-revoke to be explicit.
revoke execute on function public.pick_daily_moomz() from anon, authenticated, public;
