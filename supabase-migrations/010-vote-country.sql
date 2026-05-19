-- Vote geo: record ISO-3166 alpha-2 country code per vote (best-effort, from
-- the x-vercel-ip-country header). Used by the home-page WorldVibes map to
-- show where the global activity is happening in the last 24h.
--
-- We keep it nullable: anon visitors behind privacy proxies / dev / cron-bot
-- inserts simply have no country, and the map only counts rows that do.

alter table votes
  add column if not exists country text;

-- 2-letter ISO code: cheap CHECK so we never store garbage like "FRANCE"
alter table votes
  drop constraint if exists votes_country_iso2_check;
alter table votes
  add constraint votes_country_iso2_check
  check (country is null or country ~ '^[A-Z]{2}$');

-- For the home aggregate query (recent activity grouped by country)
create index if not exists votes_country_recent_idx
  on votes (country, created_at desc)
  where country is not null;

-- Materialized snapshot for the home map: country code + count of votes in
-- the last 24h. Refreshed periodically (pg_cron). View instead of a table so
-- the home page can read it directly with RLS bypass via the SQL view.
create or replace view votes_world_24h as
  select
    country,
    count(*)::int as votes,
    max(created_at) as last_vote_at
  from votes
  where country is not null
    and created_at > now() - interval '24 hours'
  group by country
  order by votes desc;

-- Allow anon reads on the aggregate
grant select on votes_world_24h to anon, authenticated;
