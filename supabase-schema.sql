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
