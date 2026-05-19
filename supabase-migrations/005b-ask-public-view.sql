-- Tighten RLS on ask_questions and expose a safe public view for pending counts.

drop policy if exists "ask public read" on ask_questions;
drop policy if exists "ask read answered" on ask_questions;

-- Public sees only answered rows directly on the base table.
create policy "ask read answered" on ask_questions
  for select using (status = 'answered');

-- Refresh the safe public view (no asker_id) covering ALL statuses so anon
-- can count pending and preview question text without leaking asker_id.
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
