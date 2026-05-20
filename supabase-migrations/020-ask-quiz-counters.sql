-- 020: ASK + quiz achievement counters.
--
--  • on_ask_change trigger — every ASK question bumps the recipient's
--    questions_received; answering bumps questions_answered. Abuse-proof
--    (fires only on real ask_questions rows).
--  • increment_profile_counter — a guarded self-increment RPC for counters
--    the user raises about themselves (questions_asked, quizzes_completed…).
--    Resolves the profile from identity tokens, so a caller can only ever
--    bump their own row; the column is whitelisted.
-- Idempotent.

-- ---------------------------------------------------------------------------
-- 1) ASK question/answer counters via trigger on ask_questions.
-- ---------------------------------------------------------------------------
create or replace function public.on_ask_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if TG_OP = 'INSERT' then
    update profiles set questions_received = coalesce(questions_received, 0) + 1
      where id = NEW.recipient_id;
  elsif TG_OP = 'UPDATE' then
    if NEW.status = 'answered' and coalesce(OLD.status, '') <> 'answered' then
      update profiles set questions_answered = coalesce(questions_answered, 0) + 1
        where id = NEW.recipient_id;
    end if;
  end if;
  return NEW;
end $$;

drop trigger if exists ask_questions_counters on public.ask_questions;
create trigger ask_questions_counters
  after insert or update on public.ask_questions
  for each row execute function public.on_ask_change();

-- ---------------------------------------------------------------------------
-- 2) Guarded self-increment for own-action counters.
-- ---------------------------------------------------------------------------
create or replace function public.increment_profile_counter(
  p_user_id uuid,
  p_claim_token text,
  p_column text,
  p_amount int
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_prof uuid;
begin
  if p_amount is null or p_amount <= 0 then return; end if;
  -- Whitelist — only counters a user legitimately raises about themselves.
  if p_column not in ('questions_asked', 'quizzes_completed', 'polls_seen', 'cosmetics_unlocked') then
    return;
  end if;
  v_prof := resolve_profile_id(p_user_id, p_claim_token);
  if v_prof is null then return; end if;
  perform pg_advisory_xact_lock(hashtextextended(v_prof::text, 0));
  execute format('update profiles set %I = coalesce(%I, 0) + $1 where id = $2', p_column, p_column)
    using p_amount, v_prof;
end $$;

grant execute on function public.increment_profile_counter(uuid, text, text, int)
  to anon, authenticated;
