-- 2026-05-19: Supabase Auth integration for profiles.
-- Idempotent — safe to re-run. Paste into Supabase SQL editor.

-- 1. Add user_id column linking to auth.users.
alter table profiles
  add column if not exists user_id uuid references auth.users(id) on delete cascade;

-- 2. One profile per auth user (only when user_id is set; legacy rows have null).
create unique index if not exists profiles_user_id_unique
  on profiles(user_id) where user_id is not null;

-- 3. RLS: keep public read via the existing profiles_public view.
--    Authenticated users may update their own row.
--    Anon (claim_token-based) writes continue to work through server actions
--    that use the anon key — those bypass these RLS policies via the service
--    of cookie validation in code. The new policies below restrict authenticated
--    sessions to their own row.
alter table profiles enable row level security;

drop policy if exists "profiles auth update own" on profiles;
create policy "profiles auth update own" on profiles
  for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "profiles auth read all" on profiles;
create policy "profiles auth read all" on profiles
  for select to authenticated
  using (true);

drop policy if exists "profiles auth insert own" on profiles;
create policy "profiles auth insert own" on profiles
  for insert to authenticated
  with check (auth.uid() = user_id);

-- 4. Helper: link an existing legacy (claim_token) profile to an authenticated user.
--    Called from app code in /auth/callback when the user logs in for the first
--    time while still holding their old moomz_profile_token cookie.
create or replace function link_profile_to_user(p_token text, p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update profiles
  set user_id = p_user_id
  where claim_token = p_token
    and user_id is null;
end;
$$;

grant execute on function link_profile_to_user(text, uuid) to anon, authenticated;
