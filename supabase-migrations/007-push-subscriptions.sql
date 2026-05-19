-- Push notifications: store per-device subscriptions.
--
-- One row per (user_id, endpoint) for auth users, OR per (claim_token,
-- endpoint) for the anonymous legacy flow. We keep `endpoint` as the unique
-- key — a single device generates a stable endpoint, so re-subscribing
-- safely updates the row instead of duplicating it.
--
-- Permissions:
--   - anon  : can INSERT and DELETE their own subscription (matched by
--             endpoint or claim_token).
--   - authd : same, plus can list their own subs.
--   - server (service-role): SELECT * for sending pushes via web-push.

create table if not exists push_subscriptions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users(id) on delete cascade,
  claim_token text,
  endpoint    text not null unique,
  p256dh      text not null,
  auth        text not null,
  lang        text,
  ua          text,
  created_at  timestamptz not null default now(),
  last_seen   timestamptz not null default now(),
  -- soft-disable on 410 Gone from push service
  disabled    boolean not null default false
);

create index if not exists push_subscriptions_user_idx
  on push_subscriptions(user_id) where user_id is not null;

create index if not exists push_subscriptions_token_idx
  on push_subscriptions(claim_token) where claim_token is not null;

create index if not exists push_subscriptions_active_idx
  on push_subscriptions(disabled) where disabled = false;

alter table push_subscriptions enable row level security;

-- Anyone can insert (we accept anon devices with claim_token, and auth users)
drop policy if exists "push_subs insert" on push_subscriptions;
create policy "push_subs insert" on push_subscriptions
  for insert to anon, authenticated
  with check (true);

-- Owners can delete their own row
drop policy if exists "push_subs delete own (auth)" on push_subscriptions;
create policy "push_subs delete own (auth)" on push_subscriptions
  for delete to authenticated
  using (auth.uid() = user_id);

drop policy if exists "push_subs delete own (anon)" on push_subscriptions;
create policy "push_subs delete own (anon)" on push_subscriptions
  for delete to anon
  using (claim_token is not null);

-- Update (mainly to bump last_seen)
drop policy if exists "push_subs update own (auth)" on push_subscriptions;
create policy "push_subs update own (auth)" on push_subscriptions
  for update to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "push_subs update own (anon)" on push_subscriptions;
create policy "push_subs update own (anon)" on push_subscriptions
  for update to anon
  using (claim_token is not null) with check (claim_token is not null);

-- Select: authenticated users can read their own subs (useful for UI to
-- show "you have N devices connected"). The server-side cron sends
-- pushes via the service-role key, which bypasses RLS.
drop policy if exists "push_subs read own (auth)" on push_subscriptions;
create policy "push_subs read own (auth)" on push_subscriptions
  for select to authenticated
  using (auth.uid() = user_id);
