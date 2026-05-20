-- 2026-05-20: Fix unicode handling in is_noisy_question + restore false-positives.
--
-- The first version of is_noisy_question used POSIX [[:alpha:]] which under
-- the default Supabase collation does NOT match CJK / Hindi / Arabic / Korean
-- glyphs. Result: 730 legitimate seed polls in non-ASCII scripts got tagged
-- is_dead=true because they "had no letters" or had a "<30% letter ratio".
--
-- Fix:
-- 1) Restore the wrongly-killed polls (is_seed + non-ASCII).
-- 2) Rewrite is_noisy_question to count "content characters" by SUBTRACTING
--    whitespace / punctuation / digits, instead of trying to ADD up alpha.
--    This works in any script.
-- 3) Re-run the retro-cleanup pass with the fixed function (only re-checks
--    polls that are currently alive).

-- 1) Restore: any seed poll currently dead because of non-ASCII content.
--    We only restore seed polls (real-user spam is identifiable + Latin).
update public.polls
set is_dead = false
where is_dead = true
  and is_seed = true
  and question !~ '^[[:ascii:][:space:]]*$';

-- 2) Rewrite the function.
create or replace function public.is_noisy_question(q text)
returns boolean
language plpgsql
immutable
as $$
declare
  t text;
  content text;
  stripped text;
begin
  if q is null then return true; end if;
  t := btrim(q);
  if char_length(t) < 1 then return true; end if;
  if char_length(t) < 4 then return true; end if;
  -- 6+ consecutive same chars: "aaaaaa" / "啊啊啊啊啊啊"
  if t ~* '(.)\1{5,}' then return true; end if;
  -- "Content" chars = everything that is NOT whitespace, punctuation, or a digit.
  -- This captures Latin letters AND CJK / Hindi / Arabic / Cyrillic / Greek / Hebrew.
  content := regexp_replace(t, '[[:space:][:punct:][:digit:]]+', '', 'g');
  if char_length(content) = 0 then return true; end if;
  -- Distinct-character check on the stripped lowercase form (catches "rttr",
  -- "ababab", "aaaaa" — but not unicode polls because each char is "content").
  stripped := regexp_replace(lower(t), '[^a-z0-9]+', '', 'g');
  if char_length(stripped) >= 5 then
    declare
      uniq int;
    begin
      select count(distinct ch) into uniq
      from (select unnest(string_to_array(stripped, null)) as ch) s;
      if uniq < 3 then return true; end if;
    end;
  end if;
  -- For longer texts: at least 30% of chars must be "content".
  if char_length(t) >= 8 then
    if (char_length(content)::float / char_length(t)::float) < 0.3 then
      return true;
    end if;
  end if;
  return false;
end;
$$;

-- 3) Re-apply the retro-cleanup with the fixed function.
update public.polls
set is_dead = true
where coalesce(is_dead, false) = false
  and (
    is_noisy_question(question)
    or lower(question) ~ '^(test|demo|asd|qwe|aze|aaa|bbb)\s*'
    or lower(question) like '%test from claude%'
    or lower(question) like '%test from code%'
  );
