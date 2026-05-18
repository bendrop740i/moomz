-- Run this in the Supabase SQL editor (one-shot).

create extension if not exists "pgcrypto";

create table if not exists polls (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  question text not null,
  options jsonb not null,
  created_at timestamptz default now()
);

create table if not exists votes (
  id uuid primary key default gen_random_uuid(),
  poll_id uuid not null references polls(id) on delete cascade,
  option_index int not null,
  voter_id text not null,
  created_at timestamptz default now(),
  unique (poll_id, voter_id)
);

create index if not exists votes_poll_id_idx on votes(poll_id);

-- Public view used by the home page to list recent polls + vote counts in one query.
create or replace view polls_with_stats as
select
  p.id,
  p.slug,
  p.question,
  p.options,
  p.created_at,
  coalesce(count(v.id), 0)::int as vote_count
from polls p
left join votes v on v.poll_id = p.id
group by p.id, p.slug, p.question, p.options, p.created_at;

grant select on polls_with_stats to anon, authenticated;

-- Trending feed view : Hacker News-style decay over a 14-day window.
create or replace view polls_trending as
with vote_counts as (
  select poll_id, count(*)::int as total_votes
  from votes
  group by poll_id
)
select
  p.id, p.slug, p.question, p.options, p.created_at,
  coalesce(vc.total_votes, 0) as vote_count,
  coalesce(vc.total_votes, 0)::float *
  power(
    1.0 / greatest(extract(epoch from (now() - p.created_at)) / 3600.0 + 2, 0.1),
    1.2
  ) as trending_score
from polls p
left join vote_counts vc on vc.poll_id = p.id
where p.created_at > now() - interval '14 days';

grant select on polls_trending to anon, authenticated;

-- Realtime: stream INSERTs on votes to subscribed clients.
do $$ begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'votes'
  ) then
    execute 'alter publication supabase_realtime add table votes';
  end if;
end $$;

-- RLS: allow public read + insert via anon key (no auth needed for v1).
alter table polls enable row level security;
alter table votes enable row level security;

drop policy if exists "polls public read" on polls;
create policy "polls public read" on polls for select using (true);

drop policy if exists "polls public insert" on polls;
create policy "polls public insert" on polls for insert with check (true);

drop policy if exists "votes public read" on votes;
create policy "votes public read" on votes for select using (true);

drop policy if exists "votes public insert" on votes;
create policy "votes public insert" on votes for insert with check (true);
