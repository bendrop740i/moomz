-- 2026-05-20: Anti-noise retroactive cleanup + bot calibration.
--
-- Problem: the home/discover feeds + SEO landing pages surface short / spammy
-- polls that look broken ("rttr", "gr", "test from claude"), and the bot
-- fake_vote_burst piles 800+ votes on them, which destroys credibility for
-- real visitors and signals "fake / low-quality" to Google.
--
-- Fix:
-- 1) Mark obviously-noisy polls is_dead=true. Reversible (no DELETE), and the
--    public views already filter is_dead=false so the home/SEO surfaces clean
--    up instantly.
-- 2) Rewrite fake_vote_burst() so it (a) skips polls that match the same
--    noise heuristic, and (b) enforces a cap: a poll's total vote_count can
--    never exceed (human_votes * 5 + 30). Stops the "test poll with 864 votes"
--    embarrassment.
-- 3) Bump the cron from every minute to every 3 minutes — 66% less bot
--    pressure, still plenty for ~100 active polls.
--
-- Idempotent — safe to re-run.

-- ---------------------------------------------------------------------------
-- 1) Helper: is_noisy_question(text) — mirrors lib/actions.ts looksLikeNoise.
--    Used both for the retro cleanup and inside fake_vote_burst to skip new
--    spam.
-- ---------------------------------------------------------------------------

create or replace function public.is_noisy_question(q text)
returns boolean
language plpgsql
immutable
as $$
declare
  t text;
  letters int;
  stripped text;
begin
  if q is null then return true; end if;
  t := btrim(q);
  if char_length(t) < 1 then return true; end if;
  -- Very short answers like "OK" / "X" are fine for OPTIONS but a question
  -- under 4 chars is almost always spam. We're strictly checking questions.
  if char_length(t) < 4 then return true; end if;
  -- 6+ consecutive same chars: "aaaaaa"
  if t ~* '(.)\1{5,}' then return true; end if;
  -- No letter at all
  if t !~ '[[:alpha:]]' then return true; end if;
  -- Stripped of whitespace + non-word chars
  stripped := regexp_replace(lower(t), '[^a-z0-9]+', '', 'g');
  if char_length(stripped) = 0 then return true; end if;
  -- < 3 distinct chars in a 5+ char string (catches "rttr", "rttrrt", "aaaaa", "ababab")
  if char_length(stripped) >= 5 then
    declare
      uniq int;
    begin
      select count(distinct ch) into uniq
      from (select unnest(string_to_array(stripped, null)) as ch) s;
      if uniq < 3 then return true; end if;
    end;
  end if;
  -- Long-ish text but <30% letters
  if char_length(t) >= 8 then
    letters := char_length(regexp_replace(t, '[^[:alpha:]]', '', 'g'));
    if (letters::float / char_length(t)::float) < 0.3 then return true; end if;
  end if;
  return false;
end;
$$;

-- ---------------------------------------------------------------------------
-- 2) Retroactive cleanup: mark noisy polls is_dead=true.
--    Also bumps slug-only / "test"-only patterns we know are demo data.
-- ---------------------------------------------------------------------------

update public.polls
set is_dead = true
where coalesce(is_dead, false) = false
  and (
    is_noisy_question(question)
    or lower(question) ~ '^(test|demo|asd|qwe|aze|aaa|bbb)\s*'
    or lower(question) like '%test from claude%'
    or lower(question) like '%test from code%'
  );

-- ---------------------------------------------------------------------------
-- 3) Bot v4: skip spam polls + hard cap per-poll vote count.
--    Cap rule: poll's current vote_count cannot exceed
--      max( 30, human_votes * 5 + 30 ).
--    So a poll with 0 humans tops out at 30 bot votes. A poll with 50 humans
--    can grow to 280 total. Plausible, not explosive.
-- ---------------------------------------------------------------------------

create or replace function public.fake_vote_burst()
returns void
language plpgsql
security definer
set search_path to 'public'
as $function$
DECLARE
  p RECORD;
  num_votes INT;
  max_votes INT;
  picked INT;
  i INT;
  total_w FLOAT;
  r FLOAT;
  cum FLOAT;
  weights FLOAT[];
  human_total INT;
  bot_total INT;
  poll_cap INT;
  cc TEXT;
  cc_pool TEXT[] := ARRAY[
    'FR','GB','IE','ES','PT','IT','DE','NL','BE','CH','AT','PL','SE','NO','FI',
    'DK','CZ','GR','RO','HU','UA','RU','TR','IL','SA','AE','IR','MA','DZ','TN',
    'EG','NG','SN','CI','KE','ZA','ET','IN','PK','BD','CN','JP','KR','TH','VN',
    'PH','ID','MY','SG','HK','TW','AU','NZ','US','CA','MX','CU','DO','GT','CR',
    'PA','BR','AR','CL','CO','PE','VE','UY','EC'
  ];
BEGIN
  FOR p IN
    WITH ranked AS (
      SELECT
        id,
        question,
        jsonb_array_length(options) AS nopts,
        EXTRACT(EPOCH FROM (NOW() - created_at)) / 60.0 AS age_min,
        is_seed,
        random() * (CASE WHEN is_seed THEN 1.0 ELSE 3.0 END) AS w
      FROM polls
      WHERE created_at > NOW() - INTERVAL '14 days'
        AND coalesce(is_dead, false) = false
        AND is_noisy_question(question) = false
    )
    SELECT id, nopts, age_min FROM ranked
    ORDER BY w DESC
    LIMIT 4
  LOOP
    -- Compute current vote totals + the per-poll hard cap.
    SELECT
      COUNT(*) FILTER (WHERE voter_id NOT LIKE 'bot_%')::int,
      COUNT(*)::int
    INTO human_total, bot_total
    FROM votes WHERE poll_id = p.id;

    poll_cap := GREATEST(30, human_total * 5 + 30);
    -- bot_total here is the total including humans, so we want total < cap.
    IF bot_total >= poll_cap THEN
      CONTINUE;
    END IF;

    IF p.age_min < 3 THEN max_votes := 1;
    ELSIF p.age_min < 15 THEN max_votes := 2;
    ELSIF p.age_min < 120 THEN max_votes := 3;
    ELSE max_votes := 4;
    END IF;
    num_votes := 1 + floor(random() * max_votes)::int;
    -- Never overshoot the cap in this loop run.
    num_votes := LEAST(num_votes, poll_cap - bot_total);

    FOR i IN 1..num_votes LOOP
      IF human_total > 0 THEN
        SELECT array_agg(c ORDER BY idx) INTO weights
        FROM (
          SELECT idx, (1 + COUNT(v.id))::float AS c
          FROM generate_series(0, p.nopts - 1) AS idx
          LEFT JOIN votes v ON v.poll_id = p.id AND v.option_index = idx AND v.voter_id NOT LIKE 'bot_%'
          GROUP BY idx
        ) sub;
      ELSE
        SELECT array_agg(c ORDER BY idx) INTO weights
        FROM (
          SELECT idx, (1 + COUNT(v.id))::float AS c
          FROM generate_series(0, p.nopts - 1) AS idx
          LEFT JOIN votes v ON v.poll_id = p.id AND v.option_index = idx
          GROUP BY idx
        ) sub;
      END IF;

      total_w := 0;
      FOR i IN 1..p.nopts LOOP
        weights[i] := 0.8 * weights[i] + 0.2 * 1.0;
        total_w := total_w + weights[i];
      END LOOP;

      r := random() * total_w;
      cum := 0;
      picked := p.nopts - 1;
      FOR i IN 1..p.nopts LOOP
        cum := cum + weights[i];
        IF cum >= r THEN
          picked := i - 1;
          EXIT;
        END IF;
      END LOOP;

      cc := cc_pool[1 + floor(random() * array_length(cc_pool, 1))::int];

      BEGIN
        INSERT INTO votes (poll_id, option_index, voter_id, country)
        VALUES (
          p.id,
          picked,
          'bot_' || substr(md5(random()::text || clock_timestamp()::text), 1, 16),
          cc
        );
      EXCEPTION WHEN unique_violation THEN
      END;
    END LOOP;
  END LOOP;
END $function$;

revoke execute on function public.fake_vote_burst() from anon, authenticated, public;

-- ---------------------------------------------------------------------------
-- 4) Slow the bot cron from every minute to every 3 minutes.
--    Idempotent: drop + recreate.
-- ---------------------------------------------------------------------------

do $$
declare
  jid bigint;
begin
  for jid in select jobid from cron.job where jobname = 'fake_vote_burst_each_minute' loop
    perform cron.unschedule(jid);
  end loop;
  for jid in select jobid from cron.job where jobname = 'fake_vote_burst_every_3min' loop
    perform cron.unschedule(jid);
  end loop;
  perform cron.schedule(
    'fake_vote_burst_every_3min',
    '*/3 * * * *',
    $job$select public.fake_vote_burst();$job$
  );
end $$;
