-- Update fake_vote_burst so bot votes also get a random country code. Keeps
-- the home WorldVibes map alive during low-traffic windows. Country pool
-- mirrors the curated set used by lib/countries.ts so dots always land on a
-- visible pin.

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
        jsonb_array_length(options) AS nopts,
        EXTRACT(EPOCH FROM (NOW() - created_at)) / 60.0 AS age_min,
        is_seed,
        random() * (CASE WHEN is_seed THEN 1.0 ELSE 3.0 END) AS w
      FROM polls
      WHERE created_at > NOW() - INTERVAL '14 days'
    )
    SELECT id, nopts, age_min FROM ranked
    ORDER BY w DESC
    LIMIT 4
  LOOP
    IF p.age_min < 3 THEN max_votes := 1;
    ELSIF p.age_min < 15 THEN max_votes := 2;
    ELSIF p.age_min < 120 THEN max_votes := 3;
    ELSE max_votes := 4;
    END IF;
    num_votes := 1 + floor(random() * max_votes)::int;

    FOR i IN 1..num_votes LOOP
      SELECT COUNT(*) INTO human_total
      FROM votes WHERE poll_id = p.id AND voter_id NOT LIKE 'bot_%';

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
