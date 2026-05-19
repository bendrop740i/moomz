-- Restore columns lost in migration 002 when polls_with_stats / polls_trending
-- were dropped & recreated. The app SELECTs `last_vote_at`, `profile_id`,
-- `image_url`, `topics` from these views; missing columns caused every list
-- page (home, discover, profile, mes-sondages) to silently return [] via the
-- try/catch in getTrending() / getPolls().
--
-- Idempotent: drops + recreates both views.

drop view if exists polls_with_stats cascade;
create view polls_with_stats as
select
  p.id,
  p.slug,
  p.question,
  p.options,
  p.created_at,
  p.profile_id,
  p.image_url,
  p.topics,
  coalesce(p.is_seed, false) as is_seed,
  coalesce(count(v.id), 0)::int as vote_count,
  max(v.created_at) as last_vote_at
from polls p
left join votes v on v.poll_id = p.id
where coalesce(p.is_dead, false) = false
group by p.id, p.slug, p.question, p.options, p.created_at, p.profile_id, p.image_url, p.topics, p.is_seed;
grant select on polls_with_stats to anon, authenticated;

drop view if exists polls_trending cascade;
create view polls_trending as
with vote_counts as (
  select poll_id, count(*)::int as total_votes, max(created_at) as last_vote_at
  from votes group by poll_id
),
recent as (
  select poll_id, count(*)::int as recent_votes
  from votes where created_at > now() - interval '10 minutes'
  group by poll_id
)
select
  p.id, p.slug, p.question, p.options, p.created_at,
  coalesce(vc.total_votes, 0) as vote_count,
  coalesce(r.recent_votes, 0) as recent_votes,
  coalesce(p.is_seed, false) as is_seed,
  p.profile_id, p.image_url, p.topics,
  vc.last_vote_at,
  coalesce(vc.total_votes, 0)::float *
    case when coalesce(p.is_seed, false) then 1.0 else 1.8 end *
    case when p.created_at > now() - interval '30 minutes' then 2.5 else 1.0 end *
    power(
      1.0 / greatest(extract(epoch from (now() - p.created_at)) / 3600.0 + 2, 0.1),
      1.2
    ) as trending_score
from polls p
left join vote_counts vc on vc.poll_id = p.id
left join recent r on r.poll_id = p.id
where p.created_at > now() - interval '14 days'
  and coalesce(p.is_dead, false) = false;
grant select on polls_trending to anon, authenticated;
