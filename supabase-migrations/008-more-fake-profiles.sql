-- 2026-05-19: 40 NEW fake profiles (5 per locale × 8 locales) + 5-7 pending/answered ASK questions per profile.
-- Idempotent — uses on conflict (username) do nothing for profiles
-- and a "skip if already seeded as v2" pattern for questions (asker_id like 'seed_bot_v2_%').

-- ============================================================
-- Profiles (all is_bot = true)
-- ============================================================
insert into profiles (username, display_name, bio, avatar_emoji, socials, is_bot, achievements, claim_token) values
  -- ============ FR (5) ============
  ('camille_fr',   'Camille',     'lyon · scroll infini 🌀',                '🌀', '{}'::jsonb, true, '["claimed","first_vote","streak_3"]'::jsonb,                  'seed_' || md5('camille_fr')),
  ('noah_fr',      'Noah',        'paname · tisane et drama 🍵',            '🍵', '{}'::jsonb, true, '["claimed"]'::jsonb,                                          'seed_' || md5('noah_fr')),
  ('lola_fr',      'Lola',        'bordeaux · trop d''opinions, désolée 🌸','🌸', '{}'::jsonb, true, '["claimed","creator","viral"]'::jsonb,                        'seed_' || md5('lola_fr')),
  ('hugo_fr',      'Hugo',        'marseille · ride or die ⚓',              '⚓', '{}'::jsonb, true, '["claimed","rebel_x10"]'::jsonb,                              'seed_' || md5('hugo_fr')),
  ('ines_fr',      'Inès',        'nice · soleil et red flags 🌞',           '🌞', '{}'::jsonb, true, '["claimed","streak_7","creator"]'::jsonb,                    'seed_' || md5('ines_fr')),

  -- ============ EN (5) ============
  ('zara_en',      'Zara',        'lowkey unhinged · hi 👋',                 '👽', '{}'::jsonb, true, '["claimed","first_vote","creator"]'::jsonb,                   'seed_' || md5('zara_en')),
  ('kai_en',       'Kai',         'nyc · 3am thoughts only',                 '🌃', '{}'::jsonb, true, '["claimed","viral"]'::jsonb,                                  'seed_' || md5('kai_en')),
  ('nova_en',      'Nova',        'permanent main character ✨',              '✨', '{}'::jsonb, true, '["claimed","streak_3","streak_7","creator"]'::jsonb,         'seed_' || md5('nova_en')),
  ('ezra_en',      'Ezra',        'unread on purpose 📵',                    '📵', '{}'::jsonb, true, '["claimed","rebel_x10"]'::jsonb,                              'seed_' || md5('ezra_en')),
  ('sage_en',      'Sage',        'la · iced everything 🧊',                  '🧊', '{}'::jsonb, true, '["claimed"]'::jsonb,                                          'seed_' || md5('sage_en')),

  -- ============ ES (5) ============
  ('lucia_es',     'Lucía',       'barcelona · drama y café ☕',              '☕', '{}'::jsonb, true, '["claimed","creator","streak_3"]'::jsonb,                     'seed_' || md5('lucia_es')),
  ('mateo_es',     'Mateo',       'sevilla · sin filtro ninguno',            '🍊', '{}'::jsonb, true, '["claimed"]'::jsonb,                                          'seed_' || md5('mateo_es')),
  ('valeria_es',   'Valeria',     'mx · ardiente y ya 🔥',                    '🔥', '{}'::jsonb, true, '["claimed","viral","streak_7"]'::jsonb,                       'seed_' || md5('valeria_es')),
  ('alex_es',      'Alex',        'buenos aires · noche eterna 🌙',           '🌙', '{}'::jsonb, true, '["claimed","rebel_x10"]'::jsonb,                              'seed_' || md5('alex_es')),
  ('paula_es',     'Paula',       'valencia · vibes mediterráneas 🌊',        '🌊', '{}'::jsonb, true, '["claimed","first_vote"]'::jsonb,                             'seed_' || md5('paula_es')),

  -- ============ IT (5) ============
  ('chiara_it',    'Chiara',      'roma · pizza dopo mezzanotte 🍕',         '🍕', '{}'::jsonb, true, '["claimed","creator"]'::jsonb,                                'seed_' || md5('chiara_it')),
  ('luca_it',      'Luca',        'napoli · scugnizzo digitale',             '⚡', '{}'::jsonb, true, '["claimed","streak_3"]'::jsonb,                               'seed_' || md5('luca_it')),
  ('aurora_it',    'Aurora',      'firenze · arte e tea spilling 🎨',         '🎨', '{}'::jsonb, true, '["claimed","viral","creator"]'::jsonb,                        'seed_' || md5('aurora_it')),
  ('leo_it',       'Leo',         'torino · ironico, ovviamente',            '🦁', '{}'::jsonb, true, '["claimed","rebel_x10","streak_7"]'::jsonb,                   'seed_' || md5('leo_it')),
  ('sofia_it',     'Sofia',       'bologna · drama universitario 🎓',        '🎓', '{}'::jsonb, true, '["claimed","first_vote"]'::jsonb,                             'seed_' || md5('sofia_it')),

  -- ============ PT (5) ============
  ('beatriz_pt',   'Beatriz',     'porto · só sai de noite 🌙',              '🌙', '{}'::jsonb, true, '["claimed","creator","streak_3"]'::jsonb,                     'seed_' || md5('beatriz_pt')),
  ('tiago_pt',     'Tiago',       'lisboa · ondas e treta 🏄',                '🏄', '{}'::jsonb, true, '["claimed"]'::jsonb,                                          'seed_' || md5('tiago_pt')),
  ('mariana_pt',   'Mariana',     'rio · carioca e ansiosa ✨',               '✨', '{}'::jsonb, true, '["claimed","viral","creator"]'::jsonb,                        'seed_' || md5('mariana_pt')),
  ('pedro_pt',     'Pedro',       'sp · zero paciência, max vibe',           '🎧', '{}'::jsonb, true, '["claimed","rebel_x10"]'::jsonb,                              'seed_' || md5('pedro_pt')),
  ('clara_pt',     'Clara',       'algarve · sol e segredinhos 🌴',           '🌴', '{}'::jsonb, true, '["claimed","streak_7","first_vote"]'::jsonb,                  'seed_' || md5('clara_pt')),

  -- ============ DE (5) ============
  ('emma_de',      'Emma',        'hamburg · sad girl autumn 🍂',            '🍂', '{}'::jsonb, true, '["claimed","creator"]'::jsonb,                                'seed_' || md5('emma_de')),
  ('jonas_de',     'Jonas',       'köln · meme dealer 🐸',                   '🐸', '{}'::jsonb, true, '["claimed","streak_3"]'::jsonb,                               'seed_' || md5('jonas_de')),
  ('mia_de',       'Mia',         'münchen · überarbeitet & sassy 💅',        '💅', '{}'::jsonb, true, '["claimed","viral","streak_7"]'::jsonb,                       'seed_' || md5('mia_de')),
  ('niko_de',      'Niko',        'leipzig · spät online, immer',            '🦝', '{}'::jsonb, true, '["claimed","rebel_x10","creator"]'::jsonb,                    'seed_' || md5('niko_de')),
  ('hanna_de',     'Hanna',       'frankfurt · zucker im kaffee 🍯',          '🍯', '{}'::jsonb, true, '["claimed","first_vote"]'::jsonb,                             'seed_' || md5('hanna_de')),

  -- ============ JA (5) ============
  ('yuki_ja',      'ゆき',         '渋谷 · 深夜の通知魔 🌌',                   '🌌', '{}'::jsonb, true, '["claimed","creator","streak_3"]'::jsonb,                     'seed_' || md5('yuki_ja')),
  ('ren_ja',       'れん',         '大阪 · ボケ担当 🍡',                       '🍡', '{}'::jsonb, true, '["claimed"]'::jsonb,                                          'seed_' || md5('ren_ja')),
  ('sakura_ja',    'さくら',       '京都 · 静かに毒舌 🌸',                     '🌸', '{}'::jsonb, true, '["claimed","viral","creator"]'::jsonb,                        'seed_' || md5('sakura_ja')),
  ('sora_ja',      'そら',         '福岡 · 雲の上の人 ☁️',                      '☁️', '{}'::jsonb, true, '["claimed","rebel_x10","streak_7"]'::jsonb,                  'seed_' || md5('sora_ja')),
  ('hina_ja',      'ひな',         '横浜 · エモ女子代表 💌',                   '💌', '{}'::jsonb, true, '["claimed","first_vote","streak_3"]'::jsonb,                  'seed_' || md5('hina_ja')),

  -- ============ ZH (5) ============
  ('xinyi_zh',     '欣怡',         '北京 · 凌晨emo专员 🌃',                    '🌃', '{}'::jsonb, true, '["claimed","creator"]'::jsonb,                                'seed_' || md5('xinyi_zh')),
  ('haoran_zh',    '浩然',         '深圳 · 卷不动了',                          '🍃', '{}'::jsonb, true, '["claimed","streak_3"]'::jsonb,                               'seed_' || md5('haoran_zh')),
  ('jiayi_zh',     '佳怡',         '成都 · 火锅+八卦双修 🌶️',                  '🌶️', '{}'::jsonb, true, '["claimed","viral","streak_7","creator"]'::jsonb,            'seed_' || md5('jiayi_zh')),
  ('zihan_zh',     '子涵',         '广州 · 夜猫子已上线 🦉',                   '🦉', '{}'::jsonb, true, '["claimed","rebel_x10"]'::jsonb,                              'seed_' || md5('zihan_zh')),
  ('ruoxi_zh',     '若曦',         '杭州 · 西湖边发呆 🍵',                     '🍵', '{}'::jsonb, true, '["claimed","first_vote"]'::jsonb,                             'seed_' || md5('ruoxi_zh'))
on conflict (username) do nothing;

-- ============================================================
-- Pending + answered ASK questions per profile.
-- Sentinel asker_id LIKE 'seed_bot_v2_%' makes this idempotent and
-- distinct from the v1 seed batch (006).
-- About 30% of the inserted asks are pre-answered.
-- ============================================================
do $$
declare
  pid uuid;
  questions_for_profile jsonb;
  answers_for_profile jsonb;
  q text;
  a text;
  loc text;
  idx int;
  total int;
begin
  for pid, loc, questions_for_profile, answers_for_profile in
    select
      p.id,
      x.locale,
      x.qs::jsonb,
      x.ans::jsonb
    from profiles p
    join (
      values
        -- =================== FR ===================
        ('camille_fr', 'fr',
          '[
            "Le red flag que t''ignores encore aujourd''hui 🚩",
            "Avoue le dernier DM que t''aurais voulu pas envoyer",
            "C''est qui dans le groupe que tu kiff secrètement ?",
            "Ton ick ultime sur quelqu''un ?",
            "T''as déjà pleuré pour un mec ce mois-ci ?",
            "Le mensonge que t''as encore raconté à tes parents ?"
          ]',
          '[
            null,
            "le ''bonsoir'' à mon ex à 2h du mat 💀",
            null,
            "les gens qui parlent fort au tel dans le métro 😤",
            null,
            null
          ]'),
        ('noah_fr', 'fr',
          '[
            "Ta pire date en une phrase",
            "Tu reprendrais ton ex pour une nuit ?",
            "Le secret que personne ici sait sur toi",
            "Ton fantasme le plus chelou — go",
            "10k€ ou être célèbre 1 an ?",
            "Le pote que tu virerais du groupe ?"
          ]',
          '[
            null,
            null,
            null,
            null,
            "10k€ sans réfléchir 💸",
            null
          ]'),
        ('lola_fr', 'fr',
          '[
            "Ton compte stalké en mode privé 👀",
            "Le crush le plus chelou que t''as eu",
            "La dernière fois que t''as menti pour pas sortir",
            "Tu donnes quoi comme note à ta last relation ?",
            "L''insulte que tu balances dans ta tête tous les jours",
            "T''as déjà ghosté quelqu''un ? Pourquoi ?"
          ]',
          '[
            null,
            null,
            "j''ai dit que j''étais malade mais j''étais juste fatiguée 😅",
            null,
            null,
            null
          ]'),
        ('hugo_fr', 'fr',
          '[
            "Ton red flag à toi tu le connais ?",
            "Pire moment de honte cette année",
            "Tu kiff qui dans les commentaires Insta ?",
            "Ton dernier achat impulsif > 50€",
            "T''es plutôt drama ou ghoster ?",
            "Le truc que t''as jamais avoué à ta meuf/mec"
          ]',
          '[
            null,
            null,
            null,
            "des sneakers que je remettrai jamais 😭",
            null,
            null
          ]'),
        ('ines_fr', 'fr',
          '[
            "Ton crush du moment, allez vasy",
            "Le DM que tu relis encore aujourd''hui",
            "Combien de fois t''as stalk ton ex cette semaine ?",
            "Une vérité que t''as gardée trop longtemps",
            "T''as déjà embrassé quelqu''un et regretté direct ?",
            "Si tu pouvais effacer 1 souvenir tu choisis quoi ?"
          ]',
          '[
            null,
            null,
            "trop, genre vraiment trop 😩",
            null,
            null,
            null
          ]'),

        -- =================== EN ===================
        ('zara_en', 'en',
          '[
            "spill the last red flag you ignored 🚩",
            "who in our group secretly bothers you?",
            "last text you reread 50 times",
            "describe your ex in 3 words",
            "would you cheat for 1M€?",
            "biggest ick you''ve ever had"
          ]',
          '[
            null,
            null,
            null,
            "manipulative funny gone",
            null,
            null
          ]'),
        ('kai_en', 'en',
          '[
            "what''s your 3am google search?",
            "the friend you''d unfollow if you could",
            "have you ever lied about who you voted for?",
            "secret skill nobody here knows",
            "1M$ or 1 year of fame — pick",
            "have you stalked your ex this week?"
          ]',
          '[
            "is it normal to miss someone you hate 😭",
            null,
            null,
            null,
            null,
            null
          ]'),
        ('nova_en', 'en',
          '[
            "current crush · go",
            "the unsent DM that haunts you",
            "what made you cry recently?",
            "deepest insecurity in one word",
            "rate your last relationship 1-10",
            "would you take back an ex for 24h?"
          ]',
          '[
            null,
            null,
            null,
            null,
            "a generous 4 lmao",
            null
          ]'),
        ('ezra_en', 'en',
          '[
            "the lie you''re still telling your parents",
            "biggest ick on someone here",
            "would you rather be loved or feared?",
            "what app do you hide on your phone?",
            "spill a secret nobody knows",
            "your hottest take · don''t hold back"
          ]',
          '[
            null,
            null,
            "loved, obviously. fear is exhausting",
            null,
            null,
            null
          ]'),
        ('sage_en', 'en',
          '[
            "the most toxic friendship you''re in rn",
            "describe your week in 3 emojis",
            "ick — go.",
            "would you read your partner''s phone?",
            "the celeb you''d trade lives with"
          ]',
          '[
            null,
            "🌪️🥲☕",
            null,
            null,
            null
          ]'),

        -- =================== ES ===================
        ('lucia_es', 'es',
          '[
            "¿Por quién tienes vibes secretas? 👀",
            "La red flag que ignoras a propósito 🚩",
            "Confiesa el último mensaje del que te arrepientes",
            "¿Has stalkeado a tu ex esta semana?",
            "¿Tu peor cita en una frase?",
            "¿La cuenta que stalkeas pero no sigues?"
          ]',
          '[
            null,
            null,
            "le dije ''te extraño'' a las 3am 💀",
            null,
            null,
            null
          ]'),
        ('mateo_es', 'es',
          '[
            "El secreto que nadie aquí sabe",
            "Tu mayor inseguridad — escupe",
            "¿Volverías con tu ex 1 día?",
            "El amigo del grupo que más te molesta",
            "¿10K€ o un año de fama?",
            "Tu fantasía más rara, vamos"
          ]',
          '[
            null,
            null,
            null,
            null,
            "10K€ y desaparezco 🥷",
            null
          ]'),
        ('valeria_es', 'es',
          '[
            "El ick más fuerte que has sentido",
            "¿Has llorado por alguien este mes?",
            "Cuenta una mentira reciente",
            "¿Engañarías por 1M€?",
            "La canción que pones cuando estás triste",
            "Describe a tu ex en 3 palabras"
          ]',
          '[
            null,
            "sí, dos veces 🥲",
            null,
            null,
            null,
            "encantador tóxico ido"
          ]'),
        ('alex_es', 'es',
          '[
            "Tu peor habito digital",
            "¿La app que escondes en la última pantalla?",
            "Hot take · suéltalo",
            "¿Qué buscas en Google a las 3am?",
            "El crush que te avergüenza recordar"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('paula_es', 'es',
          '[
            "Confesión rápida · ya",
            "¿Por quién darías la vida pero no lo dirías?",
            "Tu peor decisión del 2026",
            "¿Cambiarías de vida con un famoso?",
            "El secreto más random sobre ti",
            "¿Has llorado en el baño del trabajo?"
          ]',
          '[
            null,
            null,
            "salir de fiesta el martes pasado 😵",
            null,
            null,
            null
          ]'),

        -- =================== IT ===================
        ('chiara_it', 'it',
          '[
            "Per chi hai una cotta segreta? 👀",
            "La red flag che ignori sempre 🚩",
            "L''ultimo DM che ti sei pentita di mandare",
            "Hai stalkerato il tuo ex questo mese?",
            "Confessa una bugia recente",
            "10K€ o 1 anno di fama?"
          ]',
          '[
            null,
            null,
            null,
            "ovvio sì, fa parte della routine 😅",
            null,
            null
          ]'),
        ('luca_it', 'it',
          '[
            "L''ick più grande che hai visto",
            "Peggior appuntamento di sempre",
            "Torneresti col tuo ex per 1 giorno?",
            "Caffè, scroll o drama — la tua droga?",
            "Una fantasia che non racconti mai"
          ]',
          '[
            null,
            null,
            null,
            "scroll, 100%",
            null
          ]'),
        ('aurora_it', 'it',
          '[
            "Il segreto che nessuno qui sa",
            "Hai pianto per qualcuno questo mese?",
            "Descrivi il tuo ex in 3 parole",
            "Cosa cerchi su Google alle 3 di notte?",
            "Il crush più imbarazzante che hai avuto",
            "Tradiresti per 1 milione?"
          ]',
          '[
            null,
            null,
            "intenso bello sparito",
            null,
            null,
            null
          ]'),
        ('leo_it', 'it',
          '[
            "Hot take, sparalo",
            "L''app che nascondi nella seconda pagina",
            "Il pettegolezzo più succoso che sai",
            "Una cosa di te che cambieresti subito",
            "Il complimento che ricevi sempre ma odi"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('sofia_it', 'it',
          '[
            "Confessione veloce · vai",
            "Per chi daresti la vita ma non lo diresti?",
            "La tua peggior decisione del 2026",
            "Cambieresti vita con un VIP?",
            "Hai mai pianto in bagno al lavoro?"
          ]',
          '[
            null,
            null,
            null,
            "sì sempre. ogni martedì 😭",
            null
          ]'),

        -- =================== PT ===================
        ('beatriz_pt', 'pt',
          '[
            "Por quem tens vibes agora? 👀",
            "A red flag que ignoras 🚩",
            "Confessa a última mentira",
            "Stalkaste o ex este mês?",
            "A pior date da tua vida",
            "Algo que ninguém aqui sabe"
          ]',
          '[
            null,
            null,
            null,
            null,
            "fui jantar e ele falou só do trabalho dele 2h 💀",
            null
          ]'),
        ('tiago_pt', 'pt',
          '[
            "Voltarias com a ex 1 dia?",
            "Fantasia mais estranha — diz",
            "10K€ ou 1 ano de fama?",
            "Conta que stalkas mas não segues?",
            "A pior mensagem que enviaste"
          ]',
          '[
            null,
            null,
            "10K€ e sumir",
            null,
            null
          ]'),
        ('mariana_pt', 'pt',
          '[
            "O ick mais forte que sentiste",
            "Choraste por alguém este mês?",
            "Mentira recente, confessa",
            "Trairias por 1M?",
            "Música que pões quando tás triste",
            "Descreve o teu ex em 3 palavras"
          ]',
          '[
            null,
            null,
            null,
            null,
            null,
            "engraçado manipulador foi-se"
          ]'),
        ('pedro_pt', 'pt',
          '[
            "Hot take · solta",
            "App que escondes no celular",
            "O fofoca mais saboroso que sabes",
            "Coisa de ti que mudarias já",
            "O elogio que recebes mas odeias"
          ]',
          '[
            null,
            null,
            null,
            null,
            "''você é tão maduro pra sua idade'' 🤢"
          ]'),
        ('clara_pt', 'pt',
          '[
            "Confissão rápida — vai",
            "Por quem darias a vida mas não dirias?",
            "Pior decisão de 2026",
            "Trocavas de vida com algum famoso?",
            "Choraste no banheiro do trabalho?"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),

        -- =================== DE ===================
        ('emma_de', 'de',
          '[
            "Auf wen stehst du heimlich? 👀",
            "Die Red Flag, die du ignorierst 🚩",
            "Letzte Lüge — beichte",
            "Hast du diesen Monat deinen Ex gestalkt?",
            "Schlimmstes Date in einem Satz",
            "10.000 € oder 1 Jahr Berühmtheit?"
          ]',
          '[
            null,
            null,
            "ich hab gesagt ich bin krank, war nur müde 😴",
            null,
            null,
            null
          ]'),
        ('jonas_de', 'de',
          '[
            "Ick auf jemanden hier?",
            "Account, den du stalkst aber nicht followst",
            "Würdest du deinen Ex 1 Tag zurücknehmen?",
            "Eine Fantasie, die du nie erzählst",
            "Beschreib deine Woche in 3 Emojis"
          ]',
          '[
            null,
            null,
            null,
            null,
            "🥲☕🌀"
          ]'),
        ('mia_de', 'de',
          '[
            "Das Geheimnis, das hier niemand kennt",
            "Hast du diesen Monat geweint?",
            "Beschreib deinen Ex in 3 Worten",
            "Was googelst du um 3 Uhr morgens?",
            "Peinlichster Crush ever",
            "Würdest du für 1M € fremdgehen?"
          ]',
          '[
            null,
            "ja, mehrfach 🥲",
            null,
            null,
            null,
            null
          ]'),
        ('niko_de', 'de',
          '[
            "Hot take · raus damit",
            "Die App, die du auf der letzten Seite versteckst",
            "Das saftigste Gossip, das du weißt",
            "Was würdest du sofort an dir ändern?",
            "Kompliment, das du hasst zu hören"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('hanna_de', 'de',
          '[
            "Schnelle Beichte · los",
            "Für wen würdest du sterben aber sagst es nicht?",
            "Schlechteste Entscheidung 2026",
            "Würdest du mit einem Promi tauschen?",
            "Hast du auf dem Klo geweint bei der Arbeit?"
          ]',
          '[
            "ich krieg manchmal panik vor sonntagabend",
            null,
            null,
            null,
            null
          ]'),

        -- =================== JA ===================
        ('yuki_ja', 'ja',
          '[
            "今、密かに気になってる人 👀",
            "見て見ぬふりしてるレッドフラッグ 🚩",
            "最後についた小さな嘘",
            "今月、元カレ／カノをストーキングした？",
            "最悪のデートを一文で",
            "10 万円 or 1 年間の有名人？"
          ]',
          '[
            null,
            null,
            null,
            "見た。普通に毎日見てる 😅",
            null,
            null
          ]'),
        ('ren_ja', 'ja',
          '[
            "誰にも言ってない妄想",
            "ここの誰も知らない秘密",
            "1 日だけ元カレと戻る？",
            "送ったメッセージで一番最悪なやつ",
            "親にまだついてる嘘"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('sakura_ja', 'ja',
          '[
            "今までで一番ひどい ick",
            "今月、誰かのために泣いた？",
            "最近ついた嘘を白状",
            "100 万円もらえたら浮気する？",
            "悲しい時に聴く 1 曲",
            "元カレを 3 単語で"
          ]',
          '[
            null,
            null,
            null,
            null,
            null,
            "優しい 嘘つき 消えた"
          ]'),
        ('sora_ja', 'ja',
          '[
            "ホットテイク・遠慮しないで",
            "スマホの 2 ページ目に隠してるアプリ",
            "知ってる中で一番美味しいゴシップ",
            "自分のすぐ変えたいところ",
            "言われると嫌な褒め言葉"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('hina_ja', 'ja',
          '[
            "速攻で告白 · さあ",
            "命をかけるけど絶対言わない相手",
            "2026 年の最悪な決断",
            "芸能人と人生交換する？",
            "職場のトイレで泣いたことある？"
          ]',
          '[
            null,
            null,
            null,
            null,
            "週 2 で。普通の事 🥲"
          ]'),

        -- =================== ZH ===================
        ('xinyi_zh', 'zh',
          '[
            "你现在偷偷喜欢谁？ 👀",
            "你假装看不到的红旗 🚩",
            "坦白上次撒的小谎",
            "这个月偷看过前任动态吗？",
            "最糟糕的约会，一句话",
            "10000 块还是 1 年成名？"
          ]',
          '[
            null,
            null,
            null,
            "看了。每天都看 😅",
            null,
            null
          ]'),
        ('haoran_zh', 'zh',
          '[
            "永远不会说出口的幻想",
            "这里没人知道的秘密",
            "愿意和前任复合 1 天吗？",
            "你发过最糟的消息",
            "你还在对爸妈撒的谎"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('jiayi_zh', 'zh',
          '[
            "你经历过最强的 ick 是？",
            "这个月为别人哭过吗？",
            "最近撒的谎，坦白",
            "100 万你会出轨吗？",
            "难过时听的那首歌",
            "用三个词形容前任"
          ]',
          '[
            null,
            "哭过两次 🥲",
            null,
            null,
            null,
            "温柔 撒谎 消失"
          ]'),
        ('zihan_zh', 'zh',
          '[
            "暴论 · 别客气",
            "手机第二屏藏的 app",
            "你听过最劲爆的八卦",
            "你想立刻改掉的一点",
            "你最讨厌被夸的一句话"
          ]',
          '[
            null,
            null,
            null,
            null,
            null
          ]'),
        ('ruoxi_zh', 'zh',
          '[
            "速速坦白 · 来",
            "你愿意为谁拼命却不说？",
            "2026 最差决定",
            "和明星换人生你换吗？",
            "在公司厕所哭过吗？"
          ]',
          '[
            null,
            null,
            "周一加班到 11 点 💀",
            null,
            null
          ]')
    ) as x(uname, locale, qs, ans) on p.username = x.uname
  loop
    -- Skip if v2 questions already seeded for this profile
    if exists (select 1 from ask_questions where recipient_id = pid and asker_id like 'seed_bot_v2_%') then
      continue;
    end if;
    total := jsonb_array_length(questions_for_profile);
    idx := 0;
    while idx < total loop
      q := questions_for_profile->>idx;
      a := answers_for_profile->>idx;
      if a is null or a = '' then
        insert into ask_questions (recipient_id, asker_id, text, status, locale, created_at)
        values (
          pid,
          'seed_bot_v2_' || substr(md5(random()::text), 1, 8),
          q,
          'pending',
          loc,
          now() - (random() * interval '20 days')
        );
      else
        insert into ask_questions (recipient_id, asker_id, text, answer, status, locale, created_at, answered_at)
        values (
          pid,
          'seed_bot_v2_' || substr(md5(random()::text), 1, 8),
          q,
          a,
          'answered',
          loc,
          now() - (random() * interval '20 days' + interval '1 day'),
          now() - (random() * interval '15 days')
        );
      end if;
      idx := idx + 1;
    end loop;
  end loop;
end $$;
