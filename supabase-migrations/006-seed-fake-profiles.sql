-- 2026-05-19: 16 seed/bot profiles across 8 locales, each with pending ASK questions.
-- Idempotent — uses on conflict (username) do nothing for profiles
-- and a "skip if already seeded" pattern for questions.

-- ============================================================
-- Profiles (is_bot = true so they can be filtered/flagged later)
-- ============================================================
insert into profiles (username, display_name, bio, avatar_emoji, socials, is_bot, achievements, claim_token) values
  ('luna_fr',     'Luna',        'paris · vibes du soir 🌙',         '🌙', '{}'::jsonb, true, '["claimed","creator"]'::jsonb, 'seed_' || md5('luna_fr')),
  ('theo_fr',     'Théo',        'just here for the drama ☕',        '☕', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('theo_fr')),
  ('maya_en',     'Maya',        'spilling tea since forever ☕',     '🦋', '{}'::jsonb, true, '["claimed","creator"]'::jsonb, 'seed_' || md5('maya_en')),
  ('jay_en',      'Jay',         'red flags? never met her 🚩',      '🃏', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('jay_en')),
  ('sofia_es',    'Sofía',       'madrid · chaos energy ✨',          '🌶️', '{}'::jsonb, true, '["claimed","creator"]'::jsonb, 'seed_' || md5('sofia_es')),
  ('diego_es',    'Diego',       'cero filtros, todo verdad',         '🔥', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('diego_es')),
  ('giulia_it',   'Giulia',      'milano · spicy takes 🌶️',           '🍝', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('giulia_it')),
  ('matteo_it',   'Matteo',      'caffè + drama, sempre',             '🍕', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('matteo_it')),
  ('rita_pt',     'Rita',        'lisboa · sem filtros 🌊',           '🌊', '{}'::jsonb, true, '["claimed","creator"]'::jsonb, 'seed_' || md5('rita_pt')),
  ('joao_pt',     'João',        'só vibes, zero stress',             '🏄', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('joao_pt')),
  ('lara_de',     'Lara',        'berlin · weirdcore 🖤',             '🖤', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('lara_de')),
  ('finn_de',     'Finn',        'bin müde aber chronisch online',    '🌚', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('finn_de')),
  ('aoi_ja',      'あおい',       'tokyo · 深夜のバイブス 🌃',          '🌸', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('aoi_ja')),
  ('haru_ja',     'はる',         '草。',                              '🍵', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('haru_ja')),
  ('mei_zh',      '美 Mei',       'shanghai · 凌晨三点的能量',          '🐼', '{}'::jsonb, true, '["claimed","creator"]'::jsonb, 'seed_' || md5('mei_zh')),
  ('lin_zh',      'Lin',         '只发深夜动态',                       '🌙', '{}'::jsonb, true, '["claimed"]'::jsonb,           'seed_' || md5('lin_zh'))
on conflict (username) do nothing;

-- ============================================================
-- Pending questions on each profile.
-- Marked with a sentinel asker_id "seed_bot_<n>" so a re-run is detectable.
-- ============================================================
do $$
declare
  pid uuid;
  questions_for_profile jsonb;
  q text;
  loc text;
begin
  -- For each (username, locale, [questions...]) tuple, insert pending asks
  -- only if no seeded ask exists yet for that recipient.
  for pid, loc, questions_for_profile in
    select
      p.id,
      x.locale,
      x.qs::jsonb
    from profiles p
    join (
      values
        -- FR ----------
        ('luna_fr', 'fr', '[
          "Ton dernier crush avait quoi de spécial ? 👀",
          "C''est qui le red flag de notre groupe selon toi ?",
          "Avoue : t''as déjà stalk un ex cette semaine ?",
          "Le truc le plus chaud que t''as fait à Paris ?",
          "Si je te paye 10€ tu dis quoi de moi en privé ? 😈",
          "Le DM que tu veux envoyer mais t''oses pas ?"
        ]'),
        ('theo_fr', 'fr', '[
          "Le pire date de ta vie en 1 phrase",
          "Tu kiff secrètement qui dans nos potes ?",
          "Ton fantasme le plus chelou ?",
          "Café, scroll ou drama — ta drogue ?",
          "T''as déjà ghosté quelqu''un ? Spill."
        ]'),
        -- EN ----------
        ('maya_en', 'en', '[
          "who do you secretly like in our group?",
          "biggest red flag you ignored?",
          "spill the last DM you regret sending",
          "would you take back an ex for 1 day?",
          "what do you google in private 👀",
          "describe your week in 3 emojis"
        ]'),
        ('jay_en', 'en', '[
          "worst date — go.",
          "ick you have on someone we know?",
          "the friend you''d kick from the group?",
          "have you cried this month? what to?",
          "$10K or 1 year of fame?"
        ]'),
        -- ES ----------
        ('sofia_es', 'es', '[
          "¿Por quién tienes vibes ahora? 👀",
          "La red flag más obvia que ignoras 🚩",
          "Confiesa la última mentira que dijiste",
          "¿Has stalkeado a tu ex este mes?",
          "¿La cuenta que stalkeas pero no sigues?",
          "Tu peor cita en 1 frase"
        ]'),
        ('diego_es', 'es', '[
          "Algo que aquí nadie sabe de ti",
          "Tu mayor inseguridad",
          "Volverías con tu ex 1 día?",
          "Fantasía más rara — escupe",
          "¿10K€ o 1 año de fama?"
        ]'),
        -- IT ----------
        ('giulia_it', 'it', '[
          "Per chi hai una cotta segreta? 👀",
          "La red flag che ignori comunque 🚩",
          "L''ultimo DM che ti sei pentita di mandare",
          "Hai stalkerato il tuo ex questo mese?",
          "Confessa una bugia recente",
          "10K€ o 1 anno di fama?"
        ]'),
        ('matteo_it', 'it', '[
          "L''ick più grosso che hai visto su qualcuno",
          "Il peggior appuntamento di sempre",
          "Tornereste insieme al tuo ex per 1 giorno?",
          "Caffè, scroll o drama — la tua droga?",
          "Una fantasia che non racconti mai"
        ]'),
        -- PT ----------
        ('rita_pt', 'pt', '[
          "Por quem tens vibes agora? 👀",
          "A red flag que ignoras 🚩",
          "Confessa a última mentira",
          "Stalkeaste o ex este mês?",
          "A pior date da tua vida",
          "Algo que ninguém aqui sabe de ti"
        ]'),
        ('joao_pt', 'pt', '[
          "Voltarias com a ex 1 dia?",
          "Fantasia mais estranha — diz",
          "10K€ ou 1 ano de fama?",
          "Conta que stalkeias mas não segues?",
          "A pior mensagem que enviaste"
        ]'),
        -- DE ----------
        ('lara_de', 'de', '[
          "Auf wen stehst du gerade heimlich? 👀",
          "Die Red Flag, die du ignorierst 🚩",
          "Beichte deine letzte Lüge",
          "Hast du diesen Monat deinen Ex gestalkt?",
          "Schlimmstes Date in 1 Satz",
          "10.000 € oder 1 Jahr Berühmtheit?"
        ]'),
        ('finn_de', 'de', '[
          "Ick auf jemanden, den wir kennen?",
          "Account, den du stalkst aber nicht followst",
          "Würdest du deinen Ex 1 Tag zurücknehmen?",
          "Eine Fantasie, die du nie erzählst",
          "Beschreib die Woche in 3 Emojis"
        ]'),
        -- JA ----------
        ('aoi_ja', 'ja', '[
          "今、密かに気になってる人は誰？ 👀",
          "気づいてるのに無視してるレッドフラッグ 🚩",
          "最後についた嘘を白状して",
          "今月、元カレをストーキングした？",
          "最悪のデート一文で",
          "10 万円 or 1 年間の有名人？"
        ]'),
        ('haru_ja', 'ja', '[
          "誰にも言えない妄想",
          "ここの誰も知らない秘密",
          "1 日だけ元カレと戻る？",
          "送ったメッセージで一番最悪なやつ",
          "親にまだついてる嘘"
        ]'),
        -- ZH ----------
        ('mei_zh', 'zh', '[
          "你最近偷偷喜欢谁？ 👀",
          "你假装看不到的红旗 🚩",
          "坦白上次撒的谎",
          "这个月偷看过前任动态吗？",
          "最糟糕的约会，一句话",
          "10000 块还是 1 年成名？"
        ]'),
        ('lin_zh', 'zh', '[
          "永远不会说的幻想",
          "这里没人知道的秘密",
          "愿意和前任复合 1 天吗？",
          "你发过最糟的消息",
          "你还在对爸妈撒的谎"
        ]')
    ) as x(uname, locale, qs) on p.username = x.uname
  loop
    -- Skip if questions already seeded for this profile
    if exists (select 1 from ask_questions where recipient_id = pid and asker_id like 'seed_bot_%') then
      continue;
    end if;
    for q in select jsonb_array_elements_text(questions_for_profile) loop
      insert into ask_questions (recipient_id, asker_id, text, status, locale, created_at)
      values (
        pid,
        'seed_bot_' || substr(md5(random()::text), 1, 8),
        q,
        'pending',
        loc,
        now() - (random() * interval '5 days')
      );
    end loop;
  end loop;
end $$;
