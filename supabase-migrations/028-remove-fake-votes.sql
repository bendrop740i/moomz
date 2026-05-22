-- 2026-05-22: Remove fake votes entirely.
--
-- The fake_vote_burst bot had inserted 23,813 bot votes (voter_id 'bot_%')
-- vs only 191 real human votes — 99% of all votes were fake. Two crons were
-- running it (the old per-minute 'moomz-fake-votes' was never removed by
-- migration 013, plus 'fake_vote_burst_every_3min'). Decision: real votes
-- only, no bot seeding.
--
-- This migration (applied via the Supabase MCP as `remove_fake_votes`):
--  1) Unschedules every fake-vote cron.
--  2) Deletes every bot vote (voter_id like 'bot_%').
--  3) Recomputes profiles.received_votes_total / best_poll_votes from the
--     surviving human votes — on_vote_bump_author only increments on INSERT,
--     so the purge would otherwise leave them inflated.
--  4) Drops the fake_vote_burst() function. is_noisy_question() is kept.
-- Idempotent.

do $$
declare jid bigint;
begin
  for jid in
    select jobid from cron.job
    where jobname in ('moomz-fake-votes','fake_vote_burst_every_3min','fake_vote_burst_each_minute')
  loop
    perform cron.unschedule(jid);
  end loop;
end $$;

delete from votes where voter_id like 'bot_%';

with poll_counts as (
  select pl.profile_id, pl.id as poll_id, count(v.id) as cnt
  from polls pl
  left join votes v on v.poll_id = pl.id
  where pl.profile_id is not null
  group by pl.profile_id, pl.id
),
agg as (
  select profile_id, sum(cnt)::int as total, max(cnt)::int as best
  from poll_counts group by profile_id
)
update profiles p set
  received_votes_total = coalesce(agg.total, 0),
  best_poll_votes = coalesce(agg.best, 0)
from agg where p.id = agg.profile_id;

update profiles set received_votes_total = 0, best_poll_votes = 0
where id not in (select distinct profile_id from polls where profile_id is not null)
  and (coalesce(received_votes_total,0) <> 0 or coalesce(best_poll_votes,0) <> 0);

drop function if exists public.fake_vote_burst();
