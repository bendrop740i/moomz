-- 2026-05-19: Multilingual seed polls (en/es/it/pt/de/ja/zh).
-- ~18 polls per language. Topic-tagged. is_seed = true so they're
-- treated identically to the existing FR seeds by the bot + trending logic.
-- Idempotent via on conflict (slug) do nothing.

-- ============ EN (20) ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_en01', 'Pineapple on pizza?',            '["Yes 🍍","Hell no ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_en02', 'iPhone or Android?',             '["iPhone 📱","Android 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_en03', 'Coffee or tea?',                 '["Coffee ☕","Tea 🍵","Both 🤝"]'::jsonb, true, '{food,lifestyle}'),
  ('seed_en04', 'Beach or mountains?',            '["Beach 🏖️","Mountains 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_en05', 'Texting or calling?',            '["Text 💬","Call 📞"]'::jsonb, true, '{tech,couple}'),
  ('seed_en06', 'Dogs or cats?',                  '["Dogs 🐶","Cats 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_en07', 'Early bird or night owl?',       '["Early 🌅","Late 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_en08', 'Pizza or burger?',               '["Pizza 🍕","Burger 🍔"]'::jsonb, true, '{food}'),
  ('seed_en09', 'Marvel or DC?',                  '["Marvel 🦸","DC 🦇"]'::jsonb, true, '{debat,lifestyle}'),
  ('seed_en10', 'Coke or Pepsi?',                 '["Coke 🥤","Pepsi 🧃","Neither 💧"]'::jsonb, true, '{food,debat}'),
  ('seed_en11', 'Read the book or watch the movie first?', '["Book first 📖","Movie first 🎬"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_en12', 'Hot or iced coffee?',            '["Hot ♨️","Iced 🧊"]'::jsonb, true, '{food,lifestyle}'),
  ('seed_en13', 'Tattoos: yes or no?',            '["Hell yes 🔥","No way 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_en14', 'Bedroom door open or closed at night?', '["Open 🚪","Closed 🔒"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_en15', 'Sweet or savory breakfast?',     '["Sweet 🥞","Savory 🍳"]'::jsonb, true, '{food}'),
  ('seed_en16', 'Sneakers or boots?',             '["Sneakers 👟","Boots 👢"]'::jsonb, true, '{lifestyle}'),
  ('seed_en17', 'TikTok or Instagram?',           '["TikTok 🎵","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_en18', 'Netflix or YouTube?',            '["Netflix 🎬","YouTube ▶️"]'::jsonb, true, '{tech,lifestyle}'),
  ('seed_en19', 'Would you live forever?',        '["Hell yes 🧬","Hard no ☠️","Maybe 🤔"]'::jsonb, true, '{debat,lifestyle}'),
  ('seed_en20', 'Win 1M$ or be famous?',          '["1M$ 💸","Famous 🌟"]'::jsonb, true, '{money,debat}')
on conflict (slug) do nothing;

-- ============ ES (20) ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_es01', '¿Piña en la pizza?',             '["Sí 🍍","Ni de coña ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_es02', '¿iPhone o Android?',             '["iPhone 📱","Android 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_es03', '¿Café o té?',                    '["Café ☕","Té 🍵"]'::jsonb, true, '{food}'),
  ('seed_es04', '¿Playa o montaña?',              '["Playa 🏖️","Montaña 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_es05', '¿Llamar o escribir?',            '["Llamar 📞","Escribir 💬"]'::jsonb, true, '{tech,couple}'),
  ('seed_es06', '¿Perro o gato?',                 '["Perro 🐶","Gato 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_es07', '¿Madrugar o trasnochar?',        '["Madrugar 🌅","Trasnochar 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_es08', '¿Pizza o hamburguesa?',          '["Pizza 🍕","Burger 🍔"]'::jsonb, true, '{food}'),
  ('seed_es09', '¿Real Madrid o Barça?',          '["Madrid 🤍","Barça 🔵🔴","Ni uno 🚫"]'::jsonb, true, '{sport,debat}'),
  ('seed_es10', '¿Reggaetón o rock?',             '["Reggaetón 🔥","Rock 🎸"]'::jsonb, true, '{musique,debat}'),
  ('seed_es11', '¿Tatuajes sí o no?',             '["Sí 🔥","No 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_es12', '¿Verano o invierno?',            '["Verano ☀️","Invierno ❄️"]'::jsonb, true, '{lifestyle}'),
  ('seed_es13', '¿Café frío o caliente?',         '["Frío 🧊","Caliente ♨️"]'::jsonb, true, '{food}'),
  ('seed_es14', '¿Dulce o salado para desayunar?','["Dulce 🥐","Salado 🍳"]'::jsonb, true, '{food}'),
  ('seed_es15', '¿WhatsApp o Instagram?',         '["WhatsApp 💚","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_es16', '¿1M€ o ser famoso?',             '["1M€ 💸","Famoso 🌟"]'::jsonb, true, '{money,debat}'),
  ('seed_es17', '¿Vivir en la ciudad o en el pueblo?', '["Ciudad 🏙️","Pueblo 🌳"]'::jsonb, true, '{lifestyle}'),
  ('seed_es18', '¿Series o películas?',           '["Series 📺","Películas 🎬"]'::jsonb, true, '{lifestyle}'),
  ('seed_es19', '¿Coca-Cola o Pepsi?',            '["Coca 🥤","Pepsi 🧃"]'::jsonb, true, '{food,debat}'),
  ('seed_es20', '¿Casarse antes de los 30?',      '["Sí 💍","No, ni hablar 🙅","Lo veo 🤔"]'::jsonb, true, '{couple,debat}')
on conflict (slug) do nothing;

-- ============ IT (20) ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_it01', 'Ananas sulla pizza?',            '["Sì 🍍","Mai ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_it02', 'iPhone o Android?',              '["iPhone 📱","Android 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_it03', 'Caffè o tè?',                    '["Caffè ☕","Tè 🍵"]'::jsonb, true, '{food}'),
  ('seed_it04', 'Mare o montagna?',               '["Mare 🏖️","Montagna 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_it05', 'Chiamare o scrivere?',           '["Chiamare 📞","Scrivere 💬"]'::jsonb, true, '{tech,couple}'),
  ('seed_it06', 'Cane o gatto?',                  '["Cane 🐶","Gatto 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_it07', 'Mattiniero o nottambulo?',       '["Mattino 🌅","Notte 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_it08', 'Pizza o pasta?',                 '["Pizza 🍕","Pasta 🍝"]'::jsonb, true, '{food,debat}'),
  ('seed_it09', 'Juve o Inter?',                  '["Juve ⚪⚫","Inter 🔵⚫","Né uno né l''altro 🚫"]'::jsonb, true, '{sport,debat}'),
  ('seed_it10', 'Cappuccino dopo le 11?',         '["Sì sempre ☕","Mai, è reato 🚫"]'::jsonb, true, '{food,debat}'),
  ('seed_it11', 'Tatuaggi sì o no?',              '["Sì 🔥","No 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_it12', 'Estate o inverno?',              '["Estate ☀️","Inverno ❄️"]'::jsonb, true, '{lifestyle}'),
  ('seed_it13', 'Caffè freddo o caldo?',          '["Freddo 🧊","Caldo ♨️"]'::jsonb, true, '{food}'),
  ('seed_it14', 'Colazione dolce o salata?',      '["Dolce 🥐","Salata 🍳"]'::jsonb, true, '{food,debat}'),
  ('seed_it15', 'WhatsApp o Instagram?',          '["WhatsApp 💚","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_it16', '1M€ o essere famoso?',           '["1M€ 💸","Famoso 🌟"]'::jsonb, true, '{money,debat}'),
  ('seed_it17', 'Città o campagna?',              '["Città 🏙️","Campagna 🌳"]'::jsonb, true, '{lifestyle}'),
  ('seed_it18', 'Serie TV o film?',               '["Serie 📺","Film 🎬"]'::jsonb, true, '{lifestyle}'),
  ('seed_it19', 'Coca o Pepsi?',                  '["Coca 🥤","Pepsi 🧃"]'::jsonb, true, '{food}'),
  ('seed_it20', 'Sposarsi prima dei 30?',         '["Sì 💍","No grazie 🙅","Forse 🤔"]'::jsonb, true, '{couple,debat}')
on conflict (slug) do nothing;

-- ============ PT (20) — pt-BR flavored ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_pt01', 'Abacaxi na pizza?',              '["Sim 🍍","Jamais ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_pt02', 'iPhone ou Android?',             '["iPhone 📱","Android 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_pt03', 'Café ou chá?',                   '["Café ☕","Chá 🍵"]'::jsonb, true, '{food}'),
  ('seed_pt04', 'Praia ou montanha?',             '["Praia 🏖️","Montanha 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_pt05', 'Ligar ou mandar mensagem?',      '["Ligar 📞","Mensagem 💬"]'::jsonb, true, '{tech,couple}'),
  ('seed_pt06', 'Cachorro ou gato?',              '["Cachorro 🐶","Gato 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_pt07', 'Acordar cedo ou virar a noite?', '["Cedo 🌅","Tarde 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_pt08', 'Pizza ou hambúrguer?',           '["Pizza 🍕","Hambúrguer 🍔"]'::jsonb, true, '{food}'),
  ('seed_pt09', 'Flamengo ou Corinthians?',       '["Flamengo 🔴⚫","Corinthians ⚪⚫","Nenhum 🚫"]'::jsonb, true, '{sport,debat}'),
  ('seed_pt10', 'Funk ou sertanejo?',             '["Funk 🔥","Sertanejo 🤠"]'::jsonb, true, '{musique,debat}'),
  ('seed_pt11', 'Tatuagem sim ou não?',           '["Sim 🔥","Não 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_pt12', 'Verão ou inverno?',              '["Verão ☀️","Inverno ❄️"]'::jsonb, true, '{lifestyle}'),
  ('seed_pt13', 'Café frio ou quente?',           '["Frio 🧊","Quente ♨️"]'::jsonb, true, '{food}'),
  ('seed_pt14', 'Café da manhã doce ou salgado?', '["Doce 🥐","Salgado 🍳"]'::jsonb, true, '{food}'),
  ('seed_pt15', 'WhatsApp ou Instagram?',         '["WhatsApp 💚","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_pt16', '1M ou ser famoso?',              '["1M 💸","Famoso 🌟"]'::jsonb, true, '{money,debat}'),
  ('seed_pt17', 'Cidade ou roça?',                '["Cidade 🏙️","Roça 🌳"]'::jsonb, true, '{lifestyle}'),
  ('seed_pt18', 'Série ou filme?',                '["Série 📺","Filme 🎬"]'::jsonb, true, '{lifestyle}'),
  ('seed_pt19', 'Coca ou Guaraná?',               '["Coca 🥤","Guaraná 🥤"]'::jsonb, true, '{food,debat}'),
  ('seed_pt20', 'Casar antes dos 30?',            '["Sim 💍","Nem pensar 🙅","Talvez 🤔"]'::jsonb, true, '{couple,debat}')
on conflict (slug) do nothing;

-- ============ DE (20) ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_de01', 'Ananas auf Pizza?',              '["Ja 🍍","Niemals ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_de02', 'iPhone oder Android?',           '["iPhone 📱","Android 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_de03', 'Kaffee oder Tee?',               '["Kaffee ☕","Tee 🍵"]'::jsonb, true, '{food}'),
  ('seed_de04', 'Meer oder Berge?',               '["Meer 🏖️","Berge 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_de05', 'Anrufen oder schreiben?',        '["Anrufen 📞","Schreiben 💬"]'::jsonb, true, '{tech,couple}'),
  ('seed_de06', 'Hund oder Katze?',               '["Hund 🐶","Katze 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_de07', 'Frühaufsteher oder Nachteule?',  '["Früh 🌅","Spät 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_de08', 'Pizza oder Döner?',              '["Pizza 🍕","Döner 🌯"]'::jsonb, true, '{food,debat}'),
  ('seed_de09', 'Bayern oder Dortmund?',          '["Bayern 🔴","BVB 🟡⚫","Keins 🚫"]'::jsonb, true, '{sport,debat}'),
  ('seed_de10', 'Bier oder Wein?',                '["Bier 🍺","Wein 🍷"]'::jsonb, true, '{food,debat}'),
  ('seed_de11', 'Tattoo: ja oder nein?',          '["Ja 🔥","Nein 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_de12', 'Sommer oder Winter?',            '["Sommer ☀️","Winter ❄️"]'::jsonb, true, '{lifestyle}'),
  ('seed_de13', 'Kaffee kalt oder heiß?',         '["Kalt 🧊","Heiß ♨️"]'::jsonb, true, '{food}'),
  ('seed_de14', 'Frühstück süß oder herzhaft?',   '["Süß 🥐","Herzhaft 🍳"]'::jsonb, true, '{food}'),
  ('seed_de15', 'WhatsApp oder Instagram?',       '["WhatsApp 💚","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_de16', '1 Mio € oder berühmt?',          '["1 Mio € 💸","Berühmt 🌟"]'::jsonb, true, '{money,debat}'),
  ('seed_de17', 'Stadt oder Land?',               '["Stadt 🏙️","Land 🌳"]'::jsonb, true, '{lifestyle}'),
  ('seed_de18', 'Serie oder Film?',               '["Serie 📺","Film 🎬"]'::jsonb, true, '{lifestyle}'),
  ('seed_de19', 'Cola oder Spezi?',               '["Cola 🥤","Spezi 🧃"]'::jsonb, true, '{food,debat}'),
  ('seed_de20', 'Vor 30 heiraten?',               '["Ja 💍","Nein, danke 🙅","Vielleicht 🤔"]'::jsonb, true, '{couple,debat}')
on conflict (slug) do nothing;

-- ============ JA (20) ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_ja01', 'ピザにパイナップル？',            '["あり 🍍","絶対なし ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_ja02', 'iPhone か Android？',            '["iPhone 📱","Android 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_ja03', 'コーヒーかお茶？',                '["コーヒー ☕","お茶 🍵"]'::jsonb, true, '{food}'),
  ('seed_ja04', '海派？山派？',                    '["海 🏖️","山 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_ja05', '電話派？LINE 派？',               '["電話 📞","LINE 💬"]'::jsonb, true, '{tech,couple}'),
  ('seed_ja06', '犬派？猫派？',                    '["犬 🐶","猫 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_ja07', '早起き or 夜更かし？',            '["早起き 🌅","夜更かし 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_ja08', 'ピザかラーメン？',                '["ピザ 🍕","ラーメン 🍜"]'::jsonb, true, '{food}'),
  ('seed_ja09', '巨人か阪神？',                    '["巨人 🟧","阪神 🐯","どっちも嫌 🚫"]'::jsonb, true, '{sport,debat}'),
  ('seed_ja10', 'きのこ vs たけのこ',              '["きのこ 🍄","たけのこ 🎋"]'::jsonb, true, '{food,debat}'),
  ('seed_ja11', 'タトゥーあり？なし？',            '["あり 🔥","なし 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_ja12', '夏か冬？',                        '["夏 ☀️","冬 ❄️"]'::jsonb, true, '{lifestyle}'),
  ('seed_ja13', 'アイス or ホット？',              '["アイス 🧊","ホット ♨️"]'::jsonb, true, '{food}'),
  ('seed_ja14', '朝ごはん 甘い or しょっぱい？',    '["甘い 🥐","しょっぱい 🍳"]'::jsonb, true, '{food}'),
  ('seed_ja15', 'LINE か Instagram？',             '["LINE 💚","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_ja16', '1億円 or 有名人？',               '["1億円 💸","有名人 🌟"]'::jsonb, true, '{money,debat}'),
  ('seed_ja17', '都会か田舎？',                    '["都会 🏙️","田舎 🌳"]'::jsonb, true, '{lifestyle}'),
  ('seed_ja18', 'ドラマか映画？',                  '["ドラマ 📺","映画 🎬"]'::jsonb, true, '{lifestyle}'),
  ('seed_ja19', 'コーラかペプシ？',                '["コーラ 🥤","ペプシ 🧃"]'::jsonb, true, '{food,debat}'),
  ('seed_ja20', '30 歳までに結婚？',               '["する 💍","しない 🙅","わからん 🤔"]'::jsonb, true, '{couple,debat}')
on conflict (slug) do nothing;

-- ============ ZH (20) — Simplified ============
insert into polls (slug, question, options, is_seed, topics) values
  ('seed_zh01', '披萨上加菠萝？',                  '["可以 🍍","绝对不行 ❌"]'::jsonb, true, '{food,debat}'),
  ('seed_zh02', 'iPhone 还是安卓？',                '["iPhone 📱","安卓 🤖"]'::jsonb, true, '{tech,debat}'),
  ('seed_zh03', '咖啡还是茶？',                    '["咖啡 ☕","茶 🍵"]'::jsonb, true, '{food}'),
  ('seed_zh04', '海边还是山里？',                  '["海边 🏖️","山里 🏔️"]'::jsonb, true, '{lifestyle}'),
  ('seed_zh05', '打电话还是发消息？',              '["打电话 📞","发消息 💬"]'::jsonb, true, '{tech,couple}'),
  ('seed_zh06', '狗派还是猫派？',                  '["狗 🐶","猫 🐱"]'::jsonb, true, '{lifestyle,debat}'),
  ('seed_zh07', '早睡早起还是熬夜？',              '["早睡 🌅","熬夜 🌙"]'::jsonb, true, '{lifestyle}'),
  ('seed_zh08', '披萨还是火锅？',                  '["披萨 🍕","火锅 🍲"]'::jsonb, true, '{food}'),
  ('seed_zh09', '甜豆腐脑还是咸豆腐脑？',          '["甜 🍮","咸 🧂"]'::jsonb, true, '{food,debat}'),
  ('seed_zh10', '抖音还是小红书？',                '["抖音 🎵","小红书 📕"]'::jsonb, true, '{tech,ado}'),
  ('seed_zh11', '纹身行不行？',                    '["行 🔥","不行 🙅"]'::jsonb, true, '{lifestyle,ado}'),
  ('seed_zh12', '夏天还是冬天？',                  '["夏天 ☀️","冬天 ❄️"]'::jsonb, true, '{lifestyle}'),
  ('seed_zh13', '冰咖啡还是热咖啡？',              '["冰的 🧊","热的 ♨️"]'::jsonb, true, '{food}'),
  ('seed_zh14', '早餐甜还是咸？',                  '["甜 🥐","咸 🍳"]'::jsonb, true, '{food}'),
  ('seed_zh15', '微信还是 Instagram？',             '["微信 💚","Insta 📸"]'::jsonb, true, '{tech,ado}'),
  ('seed_zh16', '一百万还是当网红？',              '["一百万 💸","当网红 🌟"]'::jsonb, true, '{money,debat}'),
  ('seed_zh17', '大城市还是小县城？',              '["大城市 🏙️","小县城 🌳"]'::jsonb, true, '{lifestyle}'),
  ('seed_zh18', '电视剧还是电影？',                '["电视剧 📺","电影 🎬"]'::jsonb, true, '{lifestyle}'),
  ('seed_zh19', '可口可乐还是百事？',              '["可口 🥤","百事 🧃"]'::jsonb, true, '{food,debat}'),
  ('seed_zh20', '30 岁前结婚？',                   '["会 💍","不会 🙅","看缘分 🤔"]'::jsonb, true, '{couple,debat}')
on conflict (slug) do nothing;
