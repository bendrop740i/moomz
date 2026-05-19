-- 2026-05-19: Bulk-answer ~160 pending ASK questions on bot profiles to make
-- the profiles feel lived-in (currently most bots have 5-6 pending and only
-- 0-1 answered, which reads as dead). Picks 20 random pending per locale,
-- assigns a random plausible Gen Z reply from a per-locale pool, and stamps
-- answered_at in the last 30 days so the answer timeline looks organic.
--
-- Re-runnable: only targets pending rows, so a second run will pick a NEW set
-- (skipping rows we already answered). Safe to apply multiple times to
-- gradually drain the pending pool.

with answer_pool as (
  select 'fr'::text as locale, array[
    'bof',
    '💀💀💀 next',
    'ça dépend du jour',
    'préfère pas dire 😅',
    'next question pls',
    'tellement vrai',
    'askip oui mais bon',
    'j''avoue 🥲',
    'noooo arrête mdrr',
    'le red flag c''est moi en vrai',
    'no comment 😶',
    'genre… maybe',
    'pourquoi tu me demandes ça à 3h du mat 😭',
    'on en parle pas',
    'mood',
    'real',
    'ouais bon ok 🫠',
    'vous me cassez là'
  ]::text[] as pool
  union all
  select 'en', array[
    'lmao yes',
    'no comment 😭',
    'fr fr',
    'depends on the day',
    'next question pls',
    'deadass tho',
    'I plead the 5th',
    'honestly? maybe',
    '👀👀👀',
    'the red flag is me actually',
    'I''m not answering that here',
    'why u asking me this at 3am 😭',
    'mood tbh',
    'real',
    'idk man',
    'we don''t talk about that',
    'on god',
    'pls move on'
  ]::text[]
  union all
  select 'es', array[
    'jaja sí',
    'depende del día',
    'prefiero no decir',
    'siguiente 😅',
    'fr fr',
    'literal yo soy la red flag',
    '💀💀',
    'no contesto eso aquí',
    'depende',
    'mood',
    'real real',
    '¿por qué me preguntas eso a las 3am? 😭',
    'no comment',
    'nah pasa la siguiente',
    'creo que sí',
    'pos sí lol'
  ]::text[]
  union all
  select 'it', array[
    'boh',
    'dipende',
    'preferisco non dire',
    'next 😅',
    'morta 💀',
    'io sono la red flag in realtà',
    'lol sì',
    'deadass',
    'no comment',
    'real',
    'mi state stressando 😭',
    'cambiamo argomento pls',
    'forse',
    'mood',
    'non rispondo qui',
    'oddio sì'
  ]::text[]
  union all
  select 'pt', array[
    'depende',
    'tipo, prefiro não dizer',
    'kkkk sim',
    'next 😅',
    'eu sou a red flag',
    '💀',
    'fr fr',
    'morri kkk',
    'mood',
    'real',
    'sem comentários',
    'tô passando dessa pergunta',
    'pq tu tá perguntando isso 😭',
    'talvez',
    'pula essa',
    'foi mal'
  ]::text[]
  union all
  select 'de', array[
    'kommt drauf an',
    'lieber nicht 😅',
    'lmao ja',
    'real talk: ja',
    'ich bin die red flag 💀',
    'next bitte',
    'deadass',
    'no comment',
    'mood',
    'real',
    'frag mich das nicht hier',
    'wieso fragst du das um 3 nachts 😭',
    'vielleicht',
    'pass die nächste',
    'hmm'
  ]::text[]
  union all
  select 'ja', array[
    '草',
    'ノーコメント',
    'それな',
    'わかるw',
    '次',
    '答えられない 😅',
    '気分による',
    '💀',
    'ここでは言えない',
    'mood',
    'real',
    'なんで3時にそれ聞くの 😭',
    'うーん…たぶん',
    'パスで',
    'はいはい'
  ]::text[]
  union all
  select 'zh', array[
    '看心情',
    '下一题',
    '保密 😅',
    '真的',
    '💀',
    '懂的都懂',
    '拒答',
    '看缘分',
    '哈哈哈 是',
    '不在这儿讲',
    '凌晨三点问这个 😭',
    '可能吧',
    'mood',
    '过',
    '别问了'
  ]::text[]
),
candidates as (
  select
    aq.id,
    aq.locale,
    row_number() over (partition by aq.locale order by random()) as rn
  from ask_questions aq
  where aq.status = 'pending'
),
picks as (
  select
    c.id,
    c.locale,
    (ap.pool)[1 + floor(random() * array_length(ap.pool, 1))::int] as new_answer,
    now() - (random() * interval '30 days') as new_answered_at
  from candidates c
  join answer_pool ap on ap.locale = c.locale
  where c.rn <= 20
)
update ask_questions aq
set
  answer = p.new_answer,
  status = 'answered',
  answered_at = p.new_answered_at
from picks p
where aq.id = p.id;
