-- 2026-05-19: Music tracks table for the bg player + smart-shuffle.
-- Idempotent.

create table if not exists tracks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  blob_url text not null unique,
  duration_s int,
  created_at timestamptz default now()
);

create index if not exists tracks_created_at_idx on tracks(created_at desc);

alter table tracks enable row level security;

drop policy if exists "tracks public read" on tracks;
create policy "tracks public read" on tracks for select using (true);

-- Smart shuffle: pick one random track NOT in exclude[]. If exclude covers
-- everything (rare), fall back to fully random from the whole table.
create or replace function pick_random_track(p_exclude uuid[] default '{}'::uuid[])
returns table (id uuid, title text, blob_url text, duration_s int)
language plpgsql
stable
as $$
begin
  return query
    select t.id, t.title, t.blob_url, t.duration_s
    from tracks t
    where t.id <> all(coalesce(p_exclude, '{}'::uuid[]))
    order by random()
    limit 1;
  if not found then
    return query
      select t.id, t.title, t.blob_url, t.duration_s
      from tracks t
      order by random()
      limit 1;
  end if;
end;
$$;

grant execute on function pick_random_track(uuid[]) to anon, authenticated;
