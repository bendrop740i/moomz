-- 2026-05-19: ASK feature (Ask.fm-style anonymous Q&A on profiles).
-- Idempotent — safe to re-run.

create extension if not exists "pgcrypto";

-- ============================================================
-- 1. Flag column for bot/seed profiles (used by fake profiles).
-- ============================================================
alter table profiles add column if not exists is_bot boolean not null default false;
create index if not exists profiles_is_bot_idx on profiles(is_bot) where is_bot = true;

-- Refresh profiles_public so `is_bot` is exposed to anon (needed by FeaturedAsks).
create or replace view profiles_public as
select id, username, display_name, bio, socials, avatar_emoji,
       total_points, top_streak, daily_streak, achievements,
       votes_cast, rebel_count, majority_count, polls_created,
       created_at, is_bot
from profiles;
grant select on profiles_public to anon, authenticated;

-- ============================================================
-- 2. Questions table.
--    asker_id is a free-form string: cookie voter id or auth uid.
--    Anonymous by default (we never expose asker_id to the recipient).
-- ============================================================
create table if not exists ask_questions (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references profiles(id) on delete cascade,
  asker_id text,
  text text not null,
  answer text,
  status text not null default 'pending' check (status in ('pending','answered','skipped')),
  locale text,
  created_at timestamptz not null default now(),
  answered_at timestamptz
);

create index if not exists ask_questions_recipient_idx
  on ask_questions(recipient_id, created_at desc);
create index if not exists ask_questions_recipient_status_idx
  on ask_questions(recipient_id, status);
create index if not exists ask_questions_asker_idx
  on ask_questions(asker_id, recipient_id, created_at desc) where asker_id is not null;

-- ============================================================
-- 3. Public view — strips asker_id so anonymity is preserved.
-- ============================================================
create or replace view ask_questions_public as
select
  q.id,
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
join profiles p on p.id = q.recipient_id;

grant select on ask_questions_public to anon, authenticated;

-- ============================================================
-- 4. RLS — public can read answered; insert allowed via anon key
--    (rate limiting enforced in server actions).
-- ============================================================
alter table ask_questions enable row level security;

drop policy if exists "ask read answered" on ask_questions;
create policy "ask read answered" on ask_questions
  for select using (status = 'answered');

-- Public insert (we trust server-action validation; asker_id stays hidden via view).
drop policy if exists "ask public insert" on ask_questions;
create policy "ask public insert" on ask_questions
  for insert with check (true);

-- Recipient may read their own pending (via authenticated user_id link).
drop policy if exists "ask recipient read own" on ask_questions;
create policy "ask recipient read own" on ask_questions
  for select to authenticated
  using (
    exists (
      select 1 from profiles
      where profiles.id = ask_questions.recipient_id
        and profiles.user_id = auth.uid()
    )
  );

-- Recipient may update their own questions (answer or skip).
drop policy if exists "ask recipient update own" on ask_questions;
create policy "ask recipient update own" on ask_questions
  for update to authenticated
  using (
    exists (
      select 1 from profiles
      where profiles.id = ask_questions.recipient_id
        and profiles.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from profiles
      where profiles.id = ask_questions.recipient_id
        and profiles.user_id = auth.uid()
    )
  );

-- ============================================================
-- 5. Realtime — stream INSERTs so profile owners see new asks live.
-- ============================================================
do $$ begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'ask_questions'
  ) then
    execute 'alter publication supabase_realtime add table ask_questions';
  end if;
end $$;

-- ============================================================
-- 6. Rate-limit helper — count how many questions an asker sent
--    to a given recipient in the last 24h.
-- ============================================================
create or replace function ask_recent_count(p_recipient uuid, p_asker text)
returns int
language sql
stable
as $$
  select count(*)::int from ask_questions
  where recipient_id = p_recipient
    and asker_id = p_asker
    and created_at > now() - interval '24 hours';
$$;

grant execute on function ask_recent_count(uuid, text) to anon, authenticated;
