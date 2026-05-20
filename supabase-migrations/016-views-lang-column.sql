-- 016-views-lang-column.sql
-- Add the `lang` column to the polls_trending and polls_with_stats views so the
-- home / discover / daily feeds can filter polls by the visitor's UI locale.
-- The UI language must DRIVE which polls are shown (FR locale -> FR polls, etc).
-- `lang` is the ISO code text column on the base `polls` table (can be null on
-- old polls). Recreated with CREATE OR REPLACE so SECURITY INVOKER + grants are
-- preserved. NOTE: CREATE OR REPLACE VIEW can only APPEND columns, never insert
-- in the middle, so `lang` is added as the LAST column of each view. The app
-- selects columns by name so order is irrelevant.

CREATE OR REPLACE VIEW public.polls_trending
WITH (security_invoker = true) AS
 WITH vote_counts AS (
         SELECT votes.poll_id,
            count(*)::integer AS total_votes
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

CREATE OR REPLACE VIEW public.polls_with_stats
WITH (security_invoker = true) AS
 SELECT p.id,
    p.slug,
    p.question,
    p.options,
    p.created_at,
    p.profile_id,
    p.image_url,
    p.topics,
    COALESCE(p.is_seed, false) AS is_seed,
    COALESCE(count(v.id), 0::bigint)::integer AS vote_count,
    max(v.created_at) AS last_vote_at,
    p.lang
   FROM polls p
     LEFT JOIN votes v ON v.poll_id = p.id
  WHERE COALESCE(p.is_dead, false) = false
  GROUP BY p.id, p.slug, p.question, p.options, p.created_at, p.profile_id, p.image_url, p.topics, p.is_seed, p.lang;
