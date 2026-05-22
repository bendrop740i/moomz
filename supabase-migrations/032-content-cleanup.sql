-- 032 — Content cleanup for the MVP-final release.
-- Applied 2026-05-22 via the Management API (execute_sql), recorded here for
-- traceability. One-off data cleanup (no schema change). FK on votes /
-- predictions / daily_moomz is ON DELETE CASCADE, so deleting a poll cleans
-- up its dependent rows automatically.
--
-- Result: 5610 → 5234 polls (376 removed).

-- 1) Garbage polls — keysmash questions / leftover test polls that slipped
--    past the create-form anti-noise check (all owner test content).
DELETE FROM polls
WHERE question IN ('rttr', 'Test from claude', 'les pied qui pue ou le slip qui pue ?');
-- 9 rows.

-- 2) Polls authored in languages moomz no longer ships a UI for. The feed RPC
--    strict-filters by lang so these never surfaced, but they were orphan
--    /[slug] pages indexed in the sitemap with mismatched chrome. 0 votes.
DELETE FROM polls WHERE lang IN ('hi','ko','pl','tr','ru','nl','ar');
-- 175 rows.

-- 3) Exact-duplicate polls (identical question + options, created by repeated
--    seed-script runs). Keep the copy with the most votes per group; on a tie
--    keep the oldest.
WITH ranked AS (
  SELECT p.id,
         row_number() OVER (
           PARTITION BY p.question, p.options
           ORDER BY (SELECT count(*) FROM votes v WHERE v.poll_id = p.id) DESC,
                    p.created_at ASC
         ) AS rn
  FROM polls p
)
DELETE FROM polls WHERE id IN (SELECT id FROM ranked WHERE rn > 1);
-- 192 rows.
