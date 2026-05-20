-- 025-restore-trending-last-vote-at.sql
--
-- CRITICAL FEED FIX. The home Trending feed (app/_home/trending-feed.tsx) and
-- the Discover feed (app/discover/page.tsx) both SELECT `last_vote_at` from the
-- `polls_trending` view. Migration 005 had restored that column; migration 016
-- recreated the view via CREATE OR REPLACE to append `lang` and accidentally
-- dropped `last_vote_at`. PostgREST rejects a SELECT naming a non-existent
-- column with HTTP 400 ("column polls_trending.last_vote_at does not exist"),
-- so both feed queries returned NULL data -> the feeds rendered EMPTY -> users
-- could no longer see / vote on other people's polls. Voting itself is fine;
-- the feed just had nothing to vote on.
--
-- This recreates `polls_trending` with `last_vote_at` restored. The view has no
-- dependents (verified via pg_depend) so DROP ... CASCADE is safe. The view is
-- recreated WITH (security_invoker = true) to preserve the security posture
-- from migration 012. All other columns / scoring are byte-identical to the
-- current live definition (migrations 016 + 023) — only `last_vote_at` is added.

DROP VIEW IF EXISTS public.polls_trending CASCADE;

CREATE VIEW public.polls_trending
WITH (security_invoker = true) AS
 WITH vote_counts AS (
         SELECT votes.poll_id,
            count(*)::integer AS total_votes,
            max(votes.created_at) AS last_vote_at
           FROM votes
          GROUP BY votes.poll_id
        ), recent AS (
         SELECT votes.poll_id,
            count(*)::integer AS recent_votes
           FROM votes
          WHERE votes.created_at > (now() - '00:10:00'::interval)
          GROUP BY votes.poll_id
        )
 SELECT p.id,
    p.slug,
    p.question,
    p.options,
    p.created_at,
    COALESCE(vc.total_votes, 0) AS vote_count,
    COALESCE(r.recent_votes, 0) AS recent_votes,
    COALESCE(p.is_seed, false) AS is_seed,
    p.profile_id,
    p.image_url,
    p.topics,
    p.boost_until,
    vc.last_vote_at,
    COALESCE(vc.total_votes, 0)::double precision *
        CASE
            WHEN COALESCE(p.is_seed, false) THEN 1.0
            ELSE 1.8
        END::double precision *
        CASE
            WHEN p.created_at > (now() - '00:30:00'::interval) THEN 2.5
            ELSE 1.0
        END::double precision *
        CASE
            WHEN p.boost_until IS NOT NULL AND p.boost_until > now() THEN 5.0
            ELSE 1.0
        END::double precision * power(1.0 / GREATEST(EXTRACT(epoch FROM now() - p.created_at) / 3600.0 + 2::numeric, 0.1), 1.2)::double precision AS trending_score,
    p.lang
   FROM polls p
     LEFT JOIN vote_counts vc ON vc.poll_id = p.id
     LEFT JOIN recent r ON r.poll_id = p.id
  WHERE p.created_at > (now() - '14 days'::interval) AND COALESCE(p.is_dead, false) = false;

GRANT SELECT ON public.polls_trending TO anon, authenticated;
