-- Migration 031 — feed engine: random-mix feed RPC + editorial daily pack
--
-- (1) get_feed_polls — the immersive feed's data source. A random, vote-weighted
--     sample across the WHOLE poll lake (5.5k+ rows), no 14-day cap. Lively polls
--     surface more, but it's random enough that every app-open is different.
--     Fixes "always the same moomz": the old feed took the top 40 by
--     trending_score, a ranking that barely moves day to day.
--
-- (2) Editorial daily pack — the official `moomz` account + a queue of curated
--     poll questions + a daily cron that drips one fresh poll per language, so
--     the feed always has something genuinely new to come back for.

-- ── (1) Feed RPC ─────────────────────────────────────────────────────────────
create or replace function public.get_feed_polls(p_lang text, p_limit int default 80)
returns table (
  id uuid,
  slug text,
  question text,
  options jsonb,
  created_at timestamptz,
  vote_count int,
  recent_votes int,
  last_vote_at timestamptz,
  profile_id uuid,
  lang text
)
language sql
volatile
security definer
set search_path = public, pg_temp
as $$
  with vc as (
    select
      v.poll_id,
      count(*)::int as total,
      count(*) filter (where v.created_at > now() - interval '10 minutes')::int as recent,
      max(v.created_at) as last_at
    from votes v
    group by v.poll_id
  )
  select
    p.id, p.slug, p.question, p.options, p.created_at,
    coalesce(vc.total, 0)::int,
    coalesce(vc.recent, 0)::int,
    vc.last_at,
    p.profile_id, p.lang
  from polls p
  left join vc on vc.poll_id = p.id
  where coalesce(p.is_dead, false) = false
    and (p_lang is null or p.lang = p_lang)
  -- random first (so every call differs), nudged by vote activity and a strong
  -- freshness boost so brand-new polls (editorial + real users) surface fast.
  order by random()
         * (1 + ln(coalesce(vc.total, 0) + 2))
         * case when p.created_at > now() - interval '48 hours' then 3.0 else 1.0 end
  limit greatest(coalesce(p_limit, 80), 1);
$$;

grant execute on function public.get_feed_polls(text, int) to anon, authenticated;

-- ── (2a) Official moomz account ──────────────────────────────────────────────
-- NB: the username `moomz` is DB-reserved, so the official account is `moomzhq`.
insert into public.profiles (username, display_name, avatar_emoji, bio, is_verified, is_bot)
values ('moomzhq', 'Moomz', '💫', 'The daily vibe-check. A fresh moomz every day.', true, false)
on conflict (username) do nothing;

-- ── (2b) Editorial queue ─────────────────────────────────────────────────────
create table if not exists public.editorial_queue (
  id uuid primary key default gen_random_uuid(),
  lang text not null,
  question text not null,
  options text[] not null,
  topics text[] not null default '{}',
  sort int not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now()
);
-- RLS on, no policies → only SECURITY DEFINER functions / service role reach it.
alter table public.editorial_queue enable row level security;

-- ── (2c) Daily publisher — drips one queued poll per language ─────────────────
create or replace function public.publish_daily_editorial()
returns int
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_author uuid;
  v_count  int := 0;
  v_slug   text;
  r        record;
begin
  select id into v_author from profiles where username = 'moomzhq' limit 1;
  if v_author is null then
    return 0;
  end if;

  for r in
    select distinct on (lang) id, lang, question, options, topics
    from editorial_queue
    where published_at is null
    order by lang, sort, created_at
  loop
    -- unique short slug
    loop
      v_slug := substr(md5(random()::text || clock_timestamp()::text || r.id::text), 1, 7);
      exit when not exists (select 1 from polls where slug = v_slug);
    end loop;

    insert into polls (slug, question, options, profile_id, topics, lang, is_seed, created_at)
    values (v_slug, r.question, to_jsonb(r.options), v_author, r.topics, r.lang, false, now());

    update editorial_queue set published_at = now() where id = r.id;
    v_count := v_count + 1;
  end loop;

  return v_count;
end;
$$;

revoke execute on function public.publish_daily_editorial() from anon, authenticated;

-- ── (2d) Daily cron — 09:00 UTC ──────────────────────────────────────────────
do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    begin
      perform cron.unschedule('publish_daily_editorial_job');
    exception when others then null;
    end;
    perform cron.schedule(
      'publish_daily_editorial_job',
      '0 9 * * *',
      $cron$ select public.publish_daily_editorial(); $cron$
    );
  end if;
end $$;
