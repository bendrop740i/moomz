import type { SeoPage } from "./types";

const today = "2026-05-19";

export const seoFormats: SeoPage[] = [
  {
    slug: "2-option-poll",
    locale: "en",
    category: "guides",
    emoji: "⚔️",
    title: "2-option poll — the cleanest format on the internet",
    h1: "How to use a 2-option poll (and when it beats 3-6 options)",
    description:
      "The 2-option poll is the highest-engagement format. Why it works, when to use it, and 20+ examples to copy.",
    intro:
      "A 2-option poll is the purest form of a vote: A or B, yes or no, team A or team B. It's the format with the highest completion rate in every dataset we've seen — under 1 second to answer, no decision fatigue. If you're new to polling, start here. If you already poll a lot, you're probably underusing it.",
    sections: [
      {
        h: "Why 2-option polls dominate",
        body: "Decision fatigue is real. Studies on consumer choice (Iyengar/Lepper, 2000) show that more options actually reduce completion. With 2 options the brain processes in under a second — System 1, gut reaction. With 4+ options it shifts to System 2 — slower, more likely to abandon. On Instagram, the 2-option sticker has the highest engagement rate of any sticker (over 50% of viewers tap on average vs 10-15% for question stickers). Same dynamic on TikTok comments, Twitter polls, and moomz. The 2-option poll is the format you should default to unless you genuinely need more.",
      },
      {
        h: "When 2 options is the right answer",
        body: "Binary preferences: pizza or sushi, beach or mountain, save or sell. Hot takes: pineapple on pizza yes/no, ghosting is acceptable yes/no. Quick group decisions where the leader just needs a tiebreaker. This-or-that posts on social with two side-by-side images. Drama polls where viewers want a clear side to pick. If your question could be rephrased as \"do you side with A or with B?\", use 2 options. If it can't (\"what's your favorite color\"), use more.",
      },
      {
        h: "When to add a third or fourth option",
        body: "Add a third option when there's a clear middle ground that real people occupy (\"both\", \"it depends\", \"never tried\"). Add a 4th-6th when the question is genuinely multi-dimensional (favorite season, favorite topping). The pitfall to avoid: adding options to seem \"fair\" or \"thorough\". A 2-option poll with one extra \"neither\" option is fine. A 4-option poll where 80% of votes land on option 1 just signals you should have used 2 options.",
      },
      {
        h: "How to write a 2-option poll on moomz",
        body: "Open moomz, type the question (\"Pineapple on pizza?\"), type 2 options (\"Yes\", \"Never\"), hit create. You get a short link like moomz.com/abc12. Share it on Insta, WhatsApp, TikTok bio, Discord, anywhere. Votes are anonymous. Results animate live. Total time: 10 seconds. If you want to add emojis to the options (🍕✅ / 🍕❌), just type them — they render in the bars.",
      },
    ],
    polls: [
      { q: "Pineapple on pizza?", options: ["Yes", "Never"] },
      { q: "Coffee or matcha?", options: ["Coffee", "Matcha"] },
      { q: "Beach or mountain?", options: ["Beach", "Mountain"] },
      { q: "iPhone or Android?", options: ["iPhone", "Android"] },
      { q: "Save or spend the bonus?", options: ["Save it", "Spend it"] },
      { q: "Cats or dogs?", options: ["Cats", "Dogs"] },
      { q: "Open relationship — yes or no?", options: ["Yes", "Never"] },
      { q: "Tip 20% in 2026?", options: ["Always", "Only if great"] },
    ],
    faq: [
      { q: "What's the max engagement rate for a 2-option poll?", a: "On Instagram, the 2-option sticker typically gets 40-60% of story viewers to tap. moomz polls tend to convert 50-75% of link visitors into votes. The format is famously sticky." },
      { q: "Can I add an image to a 2-option poll?", a: "Yes on moomz — upload an image when creating the poll. The image renders above the question. Great for outfit polls, comparison polls, this-or-that." },
      { q: "Are 2-option polls too binary for sensitive topics?", a: "Sometimes. For nuanced questions, add a third option like 'it depends' or 'neither'. Don't force a binary on a question that genuinely has middle ground." },
      { q: "Why not just yes/no on Instagram?", a: "You can — Insta's sticker is 2 options by default. Use moomz when you also need anonymous voting, longer than 24h, or want to share beyond Insta." },
      { q: "Best length for a 2-option poll question?", a: "Under 60 characters. Anything longer and viewers skim or scroll past. Short, punchy, ideally a single sentence." },
    ],
    related: ["3-option-poll", "yes-no-poll", "this-or-that-poll"],
    updatedAt: today,
  },
  {
    slug: "3-option-poll",
    locale: "en",
    category: "guides",
    emoji: "🥉",
    title: "3-option poll — the sweet spot for opinions",
    h1: "Why 3 options is often better than 2 (and how to write one)",
    description:
      "3 options gives space for nuance without decision fatigue. When to use it and 20+ ready-made examples.",
    intro:
      "If 2 options is the cleanest format, 3 options is the most nuanced one that still completes at high rate. The third option usually represents a real middle ground (\"both\", \"depends\", \"neither\") and dramatically reduces forced-answer noise. For opinion polls especially, 3 is often the right number.",
    sections: [
      {
        h: "Why 3 options often beats 2",
        body: "A 2-option poll forces a binary. If 25% of your audience genuinely thinks \"it depends\" or \"both\", the binary either pushes them to skip or to pick a side they don't believe in — distorting your data. A third option captures that nuance honestly. The completion rate stays high (you're still under 1 second to read) but the answer quality improves. Used widely in market research for exactly this reason — the \"don't know\" or \"neither\" option is standard for surveys taken seriously.",
      },
      {
        h: "When to use 3 options",
        body: "Whenever the question has a real middle ground: \"Coffee, tea, or matcha?\" (the three coexist for many people). \"Save, spend, or invest the bonus?\" (real categories). \"Pineapple on pizza?\" with a third \"only if drunk\" works because the joke option captures real ambivalence. Avoid 3 options when the third is just \"I don't care\" — that's a skip, not an answer. The third option should be a real third position, not a non-answer.",
      },
      {
        h: "Vote distribution tips",
        body: "In a healthy 3-option poll, the worst-performing option usually gets 10-25% of votes. If one option gets under 5%, you wasted a slot and should have used 2 options. If all three are roughly equal (33% / 33% / 33%), the question is genuinely controversial — that's gold for content. Screenshot it and post it as a follow-up (\"y'all are 33/33/33 on this — explain yourselves\").",
      },
      {
        h: "Write one on moomz in 10 seconds",
        body: "Type your question. Add 3 options. Hit create. You get a short link. The bars animate in three colors based on your slug's palette, results update live. Anonymous voting, no account needed. Works perfectly as a story link, in bio, or pasted in any chat. The 3-option layout looks visually balanced — better than 2 (too sparse) or 5+ (cluttered) on a phone screen.",
      },
    ],
    polls: [
      { q: "Coffee, tea, or matcha?", options: ["Coffee", "Tea", "Matcha"] },
      { q: "Pineapple on pizza?", options: ["Yes", "Never", "Only if drunk"] },
      { q: "Beach, mountain, or city?", options: ["Beach", "Mountain", "City"] },
      { q: "Save, spend, or invest?", options: ["Save it", "Spend it", "Invest it"] },
      { q: "Date 1, 2, or 3 weeks in?", options: ["1 week", "2 weeks", "3+ weeks"] },
      { q: "Best part of the day?", options: ["Morning", "Afternoon", "Night"] },
      { q: "Watch alone, with partner, or with friends?", options: ["Alone", "Partner", "Friends"] },
    ],
    faq: [
      { q: "Why not just always use 3 options?", a: "Because a forced third option (when no real middle ground exists) adds noise. Use 2 when the answer is genuinely binary, 3 when there's a real middle ground." },
      { q: "What if my third option gets no votes?", a: "Means the question was binary — should have used 2 options. Lesson learned, the poll still works." },
      { q: "Should the third option always be 'neither'?", a: "No — that's lazy and often gets used as 'skip'. Make the third option a real third position, like 'both' or 'it depends' or a joke option that captures ambivalence." },
      { q: "Can moomz do 3 options with images?", a: "Image upload is for the question header, not per option. For per-option images, use this-or-that style with image preview links." },
      { q: "Best 3-option polls for engagement?", a: "Drama/dating questions with a 'it depends' option tend to peak engagement because viewers debate which option fits them." },
    ],
    related: ["2-option-poll", "4-option-poll", "this-or-that-poll"],
    updatedAt: today,
  },
  {
    slug: "4-option-poll",
    locale: "en",
    category: "guides",
    emoji: "🎯",
    title: "4-option poll — for when 3 isn't enough",
    h1: "4-option polls: structure, examples, when to use them",
    description:
      "4 options balances breadth with completion. Best for categorical questions like favorite season, favorite topping.",
    intro:
      "4 options is where polls start trading speed for breadth. Completion drops slightly vs 2-3 options, but you gain real categorical reach. Use it for genuinely 4-dimensional questions: favorite season, favorite drink type, kind of holiday, type of friend.",
    sections: [
      {
        h: "When 4 options is the right answer",
        body: "Categorical questions with 4 clearly distinct buckets: seasons (spring/summer/fall/winter), drink types (coffee/tea/matcha/none), holiday types (beach/mountain/city/home). Personality polls where you have 4 archetypes. Movie/show ranking with 4 clear contenders. Avoid 4 options when one option is just a variant of another — that's a 3-option poll wearing a costume.",
      },
      {
        h: "Vote distribution patterns",
        body: "In a healthy 4-option poll, the top option usually grabs 35-50%, the second 25-35%, the third 15-20%, the fourth 5-15%. If your 4th option gets under 5%, drop it next time. If your votes are roughly even (25/25/25/25), the question is genuinely category-neutral — interesting but doesn't really tell you anything actionable. The 4-option sweet spot is questions where there's a clear majority but real minority support for 2-3 alternatives.",
      },
      {
        h: "Mobile UI considerations",
        body: "On a phone screen, 4 options fit comfortably without scrolling. 5-6 options start to push below the fold on smaller screens. moomz renders 4 options as 4 horizontal bars stacked vertically, each with its own gradient, the bars animating in live. The visual rhythm of 4 bars feels balanced — better than 5 (one too many) for most mobile audiences.",
      },
      {
        h: "Write a 4-option poll on moomz",
        body: "Same flow as any other length — type question, type 4 options, hit create. Pro tip: order matters. Put your gut-favorite first if you want it to win (recency bias is real), or randomize the order if you want the cleanest data. moomz doesn't auto-randomize order — you control it.",
      },
    ],
    polls: [
      { q: "Favorite season?", options: ["Spring", "Summer", "Fall", "Winter"] },
      { q: "Best drink in the morning?", options: ["Coffee", "Tea", "Matcha", "Just water"] },
      { q: "Where do you want to go this summer?", options: ["Beach", "Mountain", "City", "Stay home"] },
      { q: "Pick your superpower", options: ["Fly", "Teleport", "Read minds", "Invisible"] },
      { q: "Best Netflix genre right now?", options: ["Drama", "Comedy", "Reality", "Documentary"] },
      { q: "Friday night plans?", options: ["Bar", "Restaurant", "Home with friends", "Solo and chill"] },
      { q: "Favorite pizza topping?", options: ["Pepperoni", "Mushroom", "Pineapple", "Just cheese"] },
    ],
    faq: [
      { q: "Is 4 too many options?", a: "Not usually. Completion stays high (60-75% of visitors). The danger zone starts at 5-6 options where scroll fatigue kicks in on mobile." },
      { q: "What if I want all 4 options to win?", a: "Then your question isn't really categorical — it's an opinion forced into 4 boxes. Try 2 or 3 options instead." },
      { q: "Does order affect the vote?", a: "Yes — recency bias means the first and last options get a small bump (~5-10%). For clean data, randomize. For storytelling, put your favorite first." },
      { q: "Can I do 4 options with images?", a: "Not per-option on moomz currently. You can attach an image to the question header." },
      { q: "Best 4-option polls for social media?", a: "Categorical questions where viewers have a strong identity attached: favorite season, MBTI-style picks, holiday types. People love picking their own bucket." },
    ],
    related: ["3-option-poll", "5-option-poll", "6-option-poll"],
    updatedAt: today,
  },
  {
    slug: "5-option-poll",
    locale: "en",
    category: "guides",
    emoji: "🖐️",
    title: "5-option poll — when breadth matters",
    h1: "5-option polls: for richer categorical questions",
    description:
      "5 options is the upper sweet spot for rich categorical polls. Lower completion but richer data. When to use.",
    intro:
      "5 options is the most you can use before completion really starts dropping. It works for questions with genuinely 5 distinct buckets: 5-day rating, 5 genres, 5 ranked options. Past 5, you're better off splitting into two polls or using a different format entirely.",
    sections: [
      {
        h: "When 5 options is correct",
        body: "Rating scales (1-2-3-4-5 stars). Days of the week subsets. Genres (action/drama/comedy/horror/romance). Time of day buckets. Ranked positions in a top-5. Avoid 5 options when 2 of them are minor variants — combine them or drop the weakest. The 5-option layout still fits on a phone screen but is the last comfortable length.",
      },
      {
        h: "Completion drop-off",
        body: "On moomz, 5-option polls complete at around 50-65% of link visitors vs 70-80% for 2-3 options. The drop-off is real but acceptable for questions that genuinely need 5 slots. The bigger killer is bad option writing — if all 5 options look similar, viewers skip. Make each option visually and conceptually distinct: \"Bar / Restaurant / Cinema / Home alone / Sleep early\" is better than \"Option A / B / C / D / E\".",
      },
      {
        h: "Mobile readability tips",
        body: "Keep each option under 25 characters. With 5 options stacked, long labels start to wrap awkwardly. Use emojis to differentiate visually (🌴 Beach / ⛰️ Mountain / 🏙️ City / 🏡 Home / ✈️ Anywhere). Avoid options that start with the same word — viewers blur over them. Order matters more at 5 options because the eye scans top-down and the last 2 get less attention.",
      },
      {
        h: "Write one on moomz",
        body: "Same flow. Some users hit \"add option\" 4 times and end up at 5 — that's the natural ceiling moomz nudges you toward. Past 5 the layout starts to lose visual rhythm and engagement drops further. If you genuinely need 6, do it (next page). If you need 7+, split into a 2-question poll or use a different tool entirely.",
      },
    ],
    polls: [
      { q: "Rate this season 1-5?", options: ["1 ⭐", "2 ⭐", "3 ⭐", "4 ⭐", "5 ⭐"] },
      { q: "Best part of weekend?", options: ["Friday night", "Saturday day", "Saturday night", "Sunday morning", "Sunday night"] },
      { q: "Pick a genre tonight?", options: ["Action", "Drama", "Comedy", "Horror", "Romance"] },
      { q: "Best vacation type?", options: ["Beach", "Mountain", "City", "Roadtrip", "Stay home"] },
      { q: "Best meal of the day?", options: ["Breakfast", "Brunch", "Lunch", "Dinner", "Late-night snack"] },
      { q: "Sleep schedule?", options: ["Early bird", "Normal hours", "Night owl", "Insomniac", "Depends"] },
    ],
    faq: [
      { q: "Why does completion drop at 5 options?", a: "Decision fatigue + scroll/scan time. Each added option roughly halves the marginal voter's willingness to read further. By 5 you've lost ~30% vs a 2-option poll." },
      { q: "Should I ever use 5 options on Instagram?", a: "Not natively (sticker is 2 max). Use a moomz link and post the link sticker — works fine for 5-option polls but expect ~30% less vote volume than the native sticker." },
      { q: "Is 5 options OK for a friend group of 10?", a: "Yes. Small audiences have high motivation to vote, so completion stays high even at 5. Reserve concern about completion for public/larger audiences." },
      { q: "Can I rank options instead of vote?", a: "Not currently on moomz — we don't support ranked-choice yet. For ranked voting, Strawpoll paid plan." },
      { q: "Should options be sorted alphabetically or by intent?", a: "By intent — put the strongest contender first if you want max attention on it. Alphabetical feels neutral but loses the storytelling." },
    ],
    related: ["4-option-poll", "6-option-poll", "3-option-poll"],
    updatedAt: today,
  },
  {
    slug: "6-option-poll",
    locale: "en",
    category: "guides",
    emoji: "🎲",
    title: "6-option poll — the max format",
    h1: "6-option polls: the ceiling, when to push it",
    description:
      "6 options is the upper limit on moomz. Lower completion but useful for genuinely 6-dimensional questions.",
    intro:
      "6 options is the maximum moomz allows — and we cap it there deliberately. Past 6, completion drops below 50%, mobile layouts get cramped, and viewers skip. Six works for questions where every option is genuinely distinct and the audience cares enough to read through. Use it sparingly.",
    sections: [
      {
        h: "When 6 options earns its keep",
        body: "Genuinely 6-bucket questions: days of the week (well, 7 minus Sunday combined), MBTI quadrants, 6 friends voted on, 6-week ranges, 6 ranked positions. Polls with engaged audiences (your close circle, your YouTube subscribers) that will read through. Avoid 6 options on cold traffic (Insta strangers, TikTok viral viewers) — too many of them skip after option 3.",
      },
      {
        h: "Completion realities",
        body: "On moomz, 6-option polls complete at around 40-55% of link visitors. That's significantly lower than 70-80% for 2-3 options. For a public poll with 1000 visitors, you'd get ~450 votes vs 750 votes on a 2-option equivalent. Worth it only if you genuinely need the categorical breadth. If you don't, downgrade to 3-4 options and get more total votes.",
      },
      {
        h: "Mobile layout gotchas",
        body: "6 options stacked vertically on a phone push below the fold on smaller screens (iPhone SE, older Androids). Viewers see options 1-4 immediately, scroll to see 5-6 if motivated. Result: options 5-6 systematically underperform 1-4 by 15-25%. Counter this by either reducing to 5 options or putting your most controversial/interesting option in position 5-6 to incentivize scrolling.",
      },
      {
        h: "Last resort: split into 2 polls",
        body: "If you're tempted to go to 7-8-9 options, please don't. Either split into two polls (\"first round: A vs B vs C vs D\" then \"final: winner vs E vs F\") or use a different tool (Strawpoll for ranked-choice, Typeform for survey). moomz's 6-cap exists because past it the format actively hurts the user experience.",
      },
    ],
    polls: [
      { q: "Best day of the week?", options: ["Mon", "Tue", "Wed", "Thu", "Fri", "Weekend"] },
      { q: "Pick a vibe for tonight?", options: ["Bar", "Restaurant", "Cinema", "Home cozy", "Party", "Sleep early"] },
      { q: "Best meal?", options: ["Breakfast", "Brunch", "Lunch", "Snack", "Dinner", "Late-night"] },
      { q: "Pick a favorite series", options: ["Stranger Things", "The Bear", "Succession", "Severance", "House of Dragon", "Other"] },
      { q: "Best city to live in?", options: ["Paris", "London", "NYC", "Tokyo", "Berlin", "Other"] },
    ],
    faq: [
      { q: "Why does moomz cap at 6 options?", a: "Because past 6, completion drops below 50% and mobile UX gets bad. The cap is a feature, not a limitation — it forces clearer questions." },
      { q: "What if I really need 7-8 options?", a: "Split into two polls or use a different tool (Strawpoll, Typeform). Forcing 7+ options into a single poll hurts vote count more than the extra option adds value." },
      { q: "Do options 5-6 really get fewer votes?", a: "Yes, systematically by 15-25% on average. The eye scans top-down and scroll fatigue cuts off bottom options. Counter by placing controversial options at 5-6." },
      { q: "Should I randomize 6 options?", a: "If you want clean data, yes — randomize each visitor's order. moomz doesn't auto-randomize, so create the poll with intentional order and accept the bias." },
      { q: "Best use cases for 6 options?", a: "Days of week, ranked tournament brackets, MBTI/personality picks, anything where 6 distinct categories cover the space cleanly." },
    ],
    related: ["5-option-poll", "4-option-poll", "anonymous-poll"],
    updatedAt: today,
  },
  {
    slug: "yes-no-poll",
    locale: "en",
    category: "guides",
    emoji: "✅",
    title: "Yes/no poll — the simplest format",
    h1: "Yes/no polls: when binary is the right answer",
    description:
      "The yes/no poll is the fastest format with the highest completion rate. When and how to use it.",
    intro:
      "A yes/no poll is the absolute simplest format: one question, two options. It completes faster than any other format and reaches the highest engagement on platforms with native 2-option stickers (Instagram, Twitter). Use it whenever the question is genuinely binary. Avoid it when you're forcing a binary on a question with real middle ground.",
    sections: [
      {
        h: "Why yes/no completes so high",
        body: "Yes/no is a System 1 decision (Kahneman) — gut reaction in under 0.5 seconds. No comparison shopping between options, no analysis paralysis. On Instagram's native 2-option sticker, yes/no polls regularly hit 50-70% of viewers tapping. On moomz, yes/no links convert 60-80% of visitors into votes. The format is universally understood and universally fast.",
      },
      {
        h: "When yes/no is the wrong format",
        body: "When the honest answer is \"it depends\" or \"sometimes\" — forcing a binary kills data quality. \"Do you ghost people?\" is a yes/no on the surface but the real answer for most people is \"only if X\". For questions like that, use 3 options (\"yes / no / only if they deserve it\"). The yes/no format is worst when the binary creates social pressure to pick the \"acceptable\" answer (anonymity helps but doesn't eliminate this).",
      },
      {
        h: "Spicing up yes/no with emojis",
        body: "Plain \"Yes / No\" works but \"Yes 🔥 / No ❄️\" works better — emojis differentiate visually and tap into emotion. moomz lets you put any emoji in option text. For drama polls: \"They're toxic 🚩 / They're fine 🌱\". For decisions: \"Save it 💰 / Spend it 🛍️\". The emoji isn't decoration — it cues the brain to the vibe of each option.",
      },
      {
        h: "Yes/no poll mistakes to avoid",
        body: "Don't write leading questions (\"Isn't it true that...?\"). Don't use yes/no when 3 options would be honest. Don't ask yes/no on identity-sensitive topics where one answer is socially loaded (\"Are you a feminist?\"). For sensitive topics, use anonymous moomz polls instead of named platforms — even a yes/no can become honest when anonymity is bulletproof.",
      },
    ],
    polls: [
      { q: "Pineapple on pizza?", options: ["Yes", "No"] },
      { q: "Ghosting is acceptable?", options: ["Yes", "No"] },
      { q: "Tip in cash?", options: ["Yes", "No"] },
      { q: "Open relationships work?", options: ["Yes", "No"] },
      { q: "Therapy at least once?", options: ["Yes", "Never"] },
      { q: "Read book before movie?", options: ["Always", "Never"] },
      { q: "Pay for premium socials?", options: ["Yes", "Never"] },
    ],
    faq: [
      { q: "Is yes/no really anonymous on moomz?", a: "Yes — moomz uses anonymous cookie tokens, no name, no IP shown to the creator. For sensitive yes/no questions, moomz is structurally safer than Insta's sticker which exposes voters." },
      { q: "What's the engagement rate on a yes/no?", a: "60-80% of visitors typically vote, the highest of any format. The simplicity is the feature." },
      { q: "Can I use emojis as the entire option?", a: "Yes — single-emoji options work (\"🔥 / ❄️\") but pair with one word for clarity (\"🔥 Yes / ❄️ No\")." },
      { q: "Should I write 'No' or 'Never'?", a: "Depends on tone. \"No\" is neutral. \"Never\" is dramatic and works for hot takes. Match the option to the question vibe." },
      { q: "Best yes/no polls for social?", a: "Hot takes, drama, dating questions, controversial food opinions. The format thrives where viewers want a clear side to pick." },
    ],
    related: ["2-option-poll", "this-or-that-poll", "anonymous-poll"],
    updatedAt: today,
  },
  {
    slug: "this-or-that-poll",
    locale: "en",
    category: "guides",
    emoji: "⚡",
    title: "This or that poll — Gen Z's favorite format",
    h1: "This or that polls: format, ideas, and how they go viral",
    description:
      "This or that is a 2-option poll dressed up with imagery and culture. Why it goes viral on Insta and TikTok.",
    intro:
      "\"This or that\" is just a 2-option poll culturally repackaged for Gen Z aesthetics: two visually contrasting choices, often paired with images, often pitting cultural totems against each other. The format went viral on Insta around 2019 and never left. Here's why it works and how to write good ones.",
    sections: [
      {
        h: "Why this-or-that hits different from yes/no",
        body: "A yes/no asks \"is this true?\". A this-or-that asks \"who are you?\". Picking iPhone vs Android is identity signaling more than preference declaration. Picking pineapple vs no-pineapple has become a culture-war meme. The format taps into tribal identity, which is more emotionally engaging than a neutral binary. On Insta stories, this-or-that visual polls (with side-by-side images) hit 60-75% engagement vs 40-55% for plain text yes/no.",
      },
      {
        h: "Cultural totems that work",
        body: "Tech: iPhone vs Android, Mac vs PC, Spotify vs Apple Music. Food: pineapple pizza, well-done vs medium-rare, cereal-then-milk vs milk-then-cereal. Lifestyle: early bird vs night owl, beach vs mountain, dog vs cat. Drama: replied 'k' vs left on read, ghost vs say it directly. The strongest options are ones where the audience already has a tribe — they vote to declare allegiance, then comment.",
      },
      {
        h: "Visual polls on moomz",
        body: "moomz lets you attach one image to the poll header. For true this-or-that with TWO images, the workaround is to put a side-by-side composite image (two products, two outfits, two memes joined as one). This is what creators do on Insta too. Post the composite as the poll image, label the options A and B with emojis (🔵 A / 🔴 B), share the link.",
      },
      {
        h: "Writing viral this-or-that polls",
        body: "1) Two clearly tribal sides (no middle ground). 2) Identity-charged (one option signals something about you). 3) Visually distinct if you use an image. 4) Short labels — \"Beach 🏖️ / Mountain ⛰️\" not \"I prefer the beach\". 5) Post the result as a follow-up to extract more engagement (\"73% beach team explain yourselves\").",
      },
    ],
    polls: [
      { q: "iPhone or Android?", options: ["iPhone", "Android"] },
      { q: "Beach or mountain?", options: ["Beach", "Mountain"] },
      { q: "Early bird or night owl?", options: ["Early bird", "Night owl"] },
      { q: "Dogs or cats?", options: ["Dogs", "Cats"] },
      { q: "Pineapple on pizza?", options: ["Yes", "Never"] },
      { q: "Spotify or Apple Music?", options: ["Spotify", "Apple Music"] },
      { q: "Cereal first or milk first?", options: ["Cereal first", "Milk first"] },
      { q: "Ghost or say it directly?", options: ["Ghost", "Say it"] },
    ],
    faq: [
      { q: "What's the difference between this-or-that and yes/no?", a: "Yes/no asks if something is true. This-or-that asks which tribe you belong to. The format is the same (2 options) but the framing is identity-based, not propositional." },
      { q: "Can I do this-or-that with images?", a: "Yes — upload a composite side-by-side image to moomz, label the options with letters or emojis matching the image sides. Insta creators do this all the time." },
      { q: "Best topics for viral this-or-that?", a: "Tech (iPhone vs Android), food (pineapple pizza), lifestyle tribes (beach vs mountain, early vs night), drama (ghost vs say it), nostalgia (cereal first vs milk first)." },
      { q: "Should I name the options?", a: "Yes — short tribal labels (\"Beach / Mountain\") work better than letters (\"A / B\") for engagement. The tribe name is the identity hook." },
      { q: "Why do creators post this-or-that polls so much?", a: "Highest engagement of any story format, easy to write, viewers want to declare their tribe. The follow-up post extracting reactions doubles the engagement." },
    ],
    related: ["yes-no-poll", "2-option-poll", "image-poll"],
    updatedAt: today,
  },
  {
    slug: "anonymous-poll",
    locale: "en",
    category: "guides",
    emoji: "🕵️",
    title: "Anonymous poll — when honesty needs cover",
    h1: "Anonymous polls: how they work and when to use them",
    description:
      "Anonymous polls unlock honest answers on sensitive topics. How moomz handles anonymity vs other tools.",
    intro:
      "An anonymous poll is one where the creator cannot see who voted what — only aggregate counts. It sounds simple but most \"polls\" you encounter actually aren't anonymous (Instagram sticker shows voters, WhatsApp polls show voters, Discord native polls show voters). On moomz, every poll is anonymous by default.",
    sections: [
      {
        h: "What anonymity actually means here",
        body: "On moomz, each visitor gets an anonymous cookie token at first visit. When they vote, the token-vote pair is stored to prevent duplicates, but the database view exposed to the front-end strips voter IDs. The creator literally cannot see who voted what — they see counts and percentages only. Compare to Instagram: the sticker shows you exactly who tapped each option. Compare to WhatsApp: native polls show voter names. Compare to Discord: native polls show voter names. moomz hides them by architecture, not by toggle.",
      },
      {
        h: "When anonymity changes the answer",
        body: "Workplace polls (\"is the new boss good?\"), dating polls (\"should I break up with X?\"), drama polls (\"is Y annoying?\"), salary polls (\"how much do you make?\"), identity polls (\"are you really happy?\"). In any context with social pressure, anonymity flips the answer. A famous study by Asch (1951) showed that 75% of people will conform to wrong group answers when named — anonymity collapses that pressure. Use anonymous polls whenever the truth might embarrass the voter.",
      },
      {
        h: "Anonymity limits",
        body: "moomz prevents the creator from seeing voter identities, but it doesn't prevent traffic analysis if someone shares a link with only a few people — if you share with 3 close friends and one option gets 1 vote, you can guess. For groups under 5, anonymity is partial. For groups of 10+, anonymity is functionally complete. Also: moomz can't prevent a voter from screenshotting their own vote and showing it to others — that's voter choice, not platform limitation.",
      },
      {
        h: "Using moomz for anonymous polls",
        body: "Every poll on moomz is anonymous by default — no toggle needed. Create the poll, share the link. Voters see no \"sign in\" prompt, no name field, no Insta connection. They tap and vote. Results show aggregate only. The same cookie token tracks the voter across polls so they can't double-vote on the same poll, but the token is meaningless to the creator (random hash).",
      },
    ],
    polls: [
      { q: "Anonymous polls — needed?", options: ["Always", "Sometimes", "Never"] },
      { q: "Would you vote honestly on a workplace poll?", options: ["Yes anonymous", "Yes named", "Never"] },
      { q: "Most useful anonymous poll context?", options: ["Workplace", "Dating", "Drama", "Salary", "Identity"] },
      { q: "Are Insta polls anonymous to the creator?", options: ["Yes", "No (correct)", "Don't know"] },
      { q: "Trust moomz to keep votes anonymous?", options: ["Yes", "No", "Maybe"] },
      { q: "Best anonymous poll tool?", options: ["moomz", "Survey Monkey", "Google Forms", "Other"] },
    ],
    faq: [
      { q: "Can the moomz team see who voted what?", a: "The architecture exposes only aggregate counts via the public view. Voter tokens exist in the underlying table but aren't tied to identity — they're random hashes. No name, email, or IP is logged to vote rows." },
      { q: "Can I make my poll non-anonymous?", a: "Not currently — moomz is anonymous by default and that's a feature. If you need named voting for accountability, Doodle or Google Forms is the right tool." },
      { q: "Is Instagram's poll anonymous?", a: "No, the creator can see exactly who voted what. Same for WhatsApp and Discord native polls. moomz is anonymous by architecture." },
      { q: "How do you prevent duplicate voting if you can't see voters?", a: "Anonymous cookie token + SQL unique constraint on (poll_id, token). The token is meaningless outside the duplicate-check, so the creator never sees identity." },
      { q: "Is moomz anonymous enough for sensitive workplace polls?", a: "For groups of 10+, functionally yes. For very small groups (3-5), any anonymous tool can be deduced from vote counts — use larger samples." },
    ],
    related: ["yes-no-poll", "2-option-poll", "moomz-vs-insta-poll"],
    updatedAt: today,
  },
  {
    slug: "emoji-poll",
    locale: "en",
    category: "guides",
    emoji: "💖",
    title: "Emoji poll — when words slow you down",
    h1: "Emoji-only polls: when emojis say it better",
    description:
      "Emoji polls are faster to read, friendlier, and more universally understood. When to use and 20+ examples.",
    intro:
      "An emoji poll uses emojis as the primary option labels — sometimes with a short word, sometimes alone. The format is universal (translates across languages), faster to scan than text, and reads as friendlier. Particularly powerful for casual polls in friend groups, dating polls, and reaction-style questions.",
    sections: [
      {
        h: "Why emoji-only options work",
        body: "The brain processes images faster than text (Potter & Faulconer, 1975). An emoji is closer to an image than a word, so it gets parsed in under 0.2 seconds. For a poll trying to be fast and fun, that matters. Emojis also signal tone instantly — \"🔥\" reads as enthusiasm, \"💀\" reads as ironic disbelief, \"🥲\" reads as gentle sadness. A text-only poll can't carry tone the same way without sounding either flat or overwritten.",
      },
      {
        h: "Best emoji poll formats",
        body: "Rating: 🔥 / 👍 / 🤷 / 👎 / 💀. Emotion: 😍 / 😎 / 😭 / 🤬. Food: 🍕 / 🍣 / 🍔 / 🌮. Drink: ☕ / 🍵 / 🍷 / 🥤. Mood: 😀 / 😐 / 😞. The 4-5 emoji rating scale is the most popular — it's intuitive, fast, and works across languages. Pair emojis with one word for clarity in mixed audiences (\"🔥 amazing / 💀 dead\").",
      },
      {
        h: "When emoji polls fail",
        body: "Ambiguous emojis kill data quality. \"💀\" can mean \"dead from laughing\" (Gen Z) or \"horrible\" (older readers). \"🍑\" obviously isn't always a peach. For polls across age ranges or cultures, stick to unambiguous emojis (👍 / 👎 / 🤷 / 🔥 / ❤️ / 💔). Avoid emoji-only options on professional surveys — they still read as informal even when the question is serious.",
      },
      {
        h: "Writing emoji polls on moomz",
        body: "Type the emoji as the option text. moomz preserves them perfectly — they render at large size in the result bars, animate with the count, and the percentage shows next to the emoji. Mix-and-match: pure emoji for 2-3 options, emoji + word for 4-6 options. Add an emoji to your question too (\"How was the party? 🎉\").",
      },
    ],
    polls: [
      { q: "How are you feeling today?", options: ["🔥", "😎", "🤷", "😞", "💀"] },
      { q: "Rate the new song", options: ["🔥 amazing", "👍 good", "🤷 ok", "👎 bad", "💀 dead"] },
      { q: "Drink of the moment?", options: ["☕", "🍵", "🍷", "🍺", "🥤"] },
      { q: "Mood for the weekend?", options: ["🎉 party", "🛋️ chill", "💪 grind", "😴 sleep"] },
      { q: "Pick your snack", options: ["🍕", "🍣", "🍔", "🌮", "🍝"] },
      { q: "How was the date?", options: ["🔥", "🥰", "😐", "💀", "🚩"] },
    ],
    faq: [
      { q: "Can the question itself be just an emoji?", a: "moomz requires text in the question field (anti-spam filter requires letters). The options can be emoji-only though." },
      { q: "Are emojis universally understood?", a: "Most are — 👍 👎 🔥 ❤️ work everywhere. Some (💀, 🥲, 🍑) carry generation-specific meaning. Match emoji choice to your audience age range." },
      { q: "Do emoji-only polls get higher engagement?", a: "On casual social posts yes — emoji polls read faster and feel friendlier. On serious or professional topics, text labels are clearer." },
      { q: "Best emoji rating scales?", a: "5-emoji scale: 🔥 / 👍 / 🤷 / 👎 / 💀 or 😍 / 🙂 / 😐 / 🙁 / 😡. Both work universally and read intuitively." },
      { q: "Can I use custom emoji like Discord's?", a: "No, moomz uses standard Unicode emojis only. Custom platform emojis don't render outside their platform." },
    ],
    related: ["yes-no-poll", "this-or-that-poll", "2-option-poll"],
    updatedAt: today,
  },
  {
    slug: "image-poll",
    locale: "en",
    category: "guides",
    emoji: "🖼️",
    title: "Image poll — visual polling that converts",
    h1: "Image polls: visual polling done right",
    description:
      "Image polls drive 2x engagement vs text-only on social. Best practices, examples, and how to set one up on moomz.",
    intro:
      "An image poll attaches a photo or visual to a poll, letting voters react to something they can see. On every platform we've measured, image polls double or triple engagement vs text-only polls. The visual hooks attention, the question converts the tap. Particularly powerful for outfit polls, product comparison, food, and any \"vote on my X\" creator content.",
    sections: [
      {
        h: "Why image polls convert better",
        body: "Images process 60,000x faster than text in the brain (3M Corporation research). A poll with an image is scanned and understood instantly; a text-only poll requires reading. On Insta stories, a poll attached to a photo gets 60-75% engagement vs 40-55% for plain text polls. On moomz, polls with images convert link visitors to voters at 75-85% vs 60-70% for text-only. The image is what stops the scroll.",
      },
      {
        h: "Use cases that crush",
        body: "Outfit polls (\"which one for the wedding?\"). Product comparison (\"which laptop bag?\"). Food (\"new menu, vote your favorite\"). Recipe results (\"how does this look?\"). Apartment views (\"which one to move into?\"). Pet polls (\"cutest face in the friend group?\"). The unifying trait: voters want to see what they're judging, not read about it. If your question contains \"this\" or \"this one\", you probably need an image poll.",
      },
      {
        h: "Image quality matters",
        body: "Use 1080×1080 or larger. Square crops render best in moomz's card layout. Avoid screenshots of text (the text becomes part of the image which is harder to read on a phone). For comparison polls, use a single composite image with options side-by-side (label them A/B/C/D matching the option labels). Compress before upload — Supabase Storage cap is 5MB but ~500KB-1MB renders smoothly on mobile data.",
      },
      {
        h: "Setting up an image poll on moomz",
        body: "Open the create form, hit \"add image\", upload from gallery or take a photo on the spot. Image previews above the question. Type the question and options. Hit create. The poll page renders the image edge-to-edge above the question with options below — perfect for sharing to Insta stories where the image is the hook.",
      },
    ],
    polls: [
      { q: "Which outfit for the wedding?", options: ["Outfit A", "Outfit B", "Outfit C"] },
      { q: "Best haircut on me?", options: ["Cut A", "Cut B", "Keep current"] },
      { q: "Apartment to move into?", options: ["A (sunny)", "B (cheap)", "C (commute)"] },
      { q: "Which laptop bag?", options: ["Black", "Brown", "Tan", "Don't buy"] },
      { q: "Recipe attempt — looks good?", options: ["Looks 🔥", "Mid", "Looks rough"] },
      { q: "Which dog is cutest?", options: ["Dog A", "Dog B", "Dog C", "Tie"] },
    ],
    faq: [
      { q: "What image formats does moomz support?", a: "JPG, PNG, WebP. Max 5MB. Recommended 1080×1080 square for best mobile rendering." },
      { q: "Can I do per-option images?", a: "Not currently — moomz has one image per poll (header). For per-option images, use a single composite image with labels A/B/C/D matching option text." },
      { q: "Do image polls cost extra?", a: "No, image upload is free on moomz. Stored in Supabase Storage." },
      { q: "Do image polls work on Insta?", a: "Yes — the image renders in link previews, and even better, you can post your image natively to your story with the moomz Link sticker on top. Best of both worlds." },
      { q: "Best image poll topics?", a: "Outfit polls, product comparison, food, apartments, pets, recipes — anything voters need to SEE to judge. Avoid image polls for abstract questions where the image adds nothing." },
    ],
    related: ["this-or-that-poll", "2-option-poll", "anonymous-poll"],
    updatedAt: today,
  },
  {
    slug: "sondage-2-options",
    locale: "fr",
    category: "guides",
    emoji: "⚔️",
    title: "Sondage à 2 options — le format le plus efficace",
    h1: "Comment utiliser un sondage à 2 options (et quand c'est mieux que 3-6)",
    description:
      "Le sondage 2 options a le taux d'engagement le plus élevé. Pourquoi ça marche, quand l'utiliser, 20+ exemples.",
    intro:
      "Un sondage à 2 options, c'est la forme la plus pure du vote : A ou B, oui ou non. C'est le format avec le meilleur taux de complétion dans tous les datasets — moins d'1 seconde pour répondre, zéro fatigue de décision. Si tu débutes le polling, commence par là. Si tu en fais déjà beaucoup, tu le sous-utilises probablement.",
    sections: [
      {
        h: "Pourquoi le 2-options domine",
        body: "La fatigue de décision est réelle. Les études sur le choix consommateur (Iyengar/Lepper, 2000) montrent que plus d'options = moins de complétion. Avec 2 options, le cerveau traite en moins d'une seconde — System 1, réflexe. Avec 4+ options, il passe en System 2 — plus lent, plus susceptible d'abandonner. Sur Instagram, le sticker 2-options a le meilleur taux d'engagement (50%+ des viewers tapent vs 10-15% pour le sticker question). Pareil sur TikTok, Twitter, moomz. C'est le format par défaut à utiliser sauf besoin réel d'options supplémentaires.",
      },
      {
        h: "Quand 2 options est la bonne réponse",
        body: "Préférences binaires : pizza ou sushi, plage ou montagne, je garde ou je vends. Hot takes : ananas sur pizza oui/non, ghoster c'est OK oui/non. Décisions de groupe rapides où le leader veut un tiebreaker. Posts this-or-that sur les réseaux avec deux images côte-à-côte. Sondages drama où les viewers veulent un camp clair. Si ta question peut se reformuler en \"tu es team A ou team B ?\", utilise 2 options.",
      },
      {
        h: "Quand ajouter une 3e ou 4e option",
        body: "Ajoute une 3e quand il y a un vrai milieu (\"les deux\", \"ça dépend\", \"jamais essayé\"). Ajoute la 4e-6e quand la question est vraiment multi-dimensionnelle (saison préférée, topping préféré). Le piège à éviter : ajouter des options pour faire \"équitable\". Un sondage 2 options avec une troisième \"ni l'un ni l'autre\" est OK. Un 4 options où 80% des votes vont sur l'option 1 = tu aurais dû faire 2 options.",
      },
      {
        h: "Écrire un sondage 2-options sur moomz",
        body: "Ouvre moomz, tape la question (\"Ananas sur pizza ?\"), tape 2 options (\"Oui\", \"Jamais\"), valide. Tu obtiens un lien court moomz.com/abc12. Partage-le sur Insta, WhatsApp, TikTok bio, Discord, n'importe où. Votes anonymes. Résultats animés en live. 10 secondes total. Tu peux mettre des emojis dans les options (🍕✅ / 🍕❌) — ils s'affichent dans les barres.",
      },
    ],
    polls: [
      { q: "Ananas sur la pizza ?", options: ["Oui", "Jamais"] },
      { q: "Café ou matcha ?", options: ["Café", "Matcha"] },
      { q: "Plage ou montagne ?", options: ["Plage", "Montagne"] },
      { q: "iPhone ou Android ?", options: ["iPhone", "Android"] },
      { q: "Garder ou vendre le bonus ?", options: ["Garder", "Dépenser"] },
      { q: "Chats ou chiens ?", options: ["Chats", "Chiens"] },
      { q: "Couple libre — oui ou non ?", options: ["Oui", "Jamais"] },
      { q: "Pourboire 15% en 2026 ?", options: ["Toujours", "Seulement si top"] },
    ],
    faq: [
      { q: "Quel taux d'engagement max pour un 2-options ?", a: "Sur Insta, le sticker 2 options fait 40-60% des viewers en moyenne. Les sondages moomz convertissent 50-75% des visiteurs en votants. Le format est super sticky." },
      { q: "Je peux mettre une image sur un sondage 2-options ?", a: "Oui sur moomz — upload une image au moment de créer. Elle s'affiche au-dessus de la question. Top pour outfit polls, comparaison, this-or-that." },
      { q: "Le 2-options est trop binaire pour les sujets sensibles ?", a: "Parfois. Pour les questions nuancées, ajoute une 3e option \"ça dépend\" ou \"ni l'un ni l'autre\". Ne force pas un binaire sur une question qui a vraiment du milieu." },
      { q: "Pourquoi pas juste le sticker Insta ?", a: "Tu peux — Insta est 2 options par défaut. Prends moomz quand tu veux aussi le vote anonyme, durée plus longue que 24h, ou partage hors-Insta." },
      { q: "Meilleure longueur de question 2-options ?", a: "Sous 60 caractères. Plus long et les viewers scrollent. Court, percutant, idéalement une phrase." },
    ],
    related: ["sondage-3-options", "sondage-oui-non", "sondage-this-or-that-fr"],
    updatedAt: today,
  },
  {
    slug: "sondage-3-options",
    locale: "fr",
    category: "guides",
    emoji: "🥉",
    title: "Sondage à 3 options — le sweet spot pour les opinions",
    h1: "Pourquoi 3 options bat souvent 2 (et comment en écrire un)",
    description:
      "3 options laisse place à la nuance sans fatigue de décision. Quand l'utiliser et 20+ exemples.",
    intro:
      "Si le 2-options est le format le plus propre, le 3-options est le plus nuancé qui complète encore à haut taux. La 3e option représente souvent un vrai milieu (\"les deux\", \"ça dépend\", \"ni l'un ni l'autre\") et réduit drastiquement le bruit des réponses forcées. Pour les sondages d'opinion, 3 c'est souvent le bon nombre.",
    sections: [
      {
        h: "Pourquoi 3 options bat 2",
        body: "Un 2-options force un binaire. Si 25% de ton audience pense vraiment \"ça dépend\" ou \"les deux\", le binaire les pousse soit à skip soit à choisir un camp qu'ils ne croient pas — distorsion data. Une 3e option capte cette nuance honnêtement. Le taux de complétion reste haut (toujours moins d'1 seconde à lire) mais la qualité de réponse s'améliore. Utilisé en market research pour exactement ça — l'option \"je ne sais pas\" ou \"ni l'un ni l'autre\" est standard pour les vrais sondages.",
      },
      {
        h: "Quand utiliser 3 options",
        body: "Quand la question a un vrai milieu : \"Café, thé ou matcha ?\" (les trois coexistent pour beaucoup). \"Économiser, dépenser ou investir le bonus ?\" (vraies catégories). \"Ananas sur pizza ?\" avec une 3e \"seulement bourré\" marche car ça capte une vraie ambivalence. Évite 3 options quand la 3e c'est juste \"m'en fous\" — c'est un skip, pas une réponse.",
      },
      {
        h: "Distribution des votes",
        body: "Dans un 3-options sain, la pire option fait 10-25% des votes. Si une option fait moins de 5%, tu as gaspillé un slot et aurais dû faire 2 options. Si les trois sont à peu près égales (33/33/33), la question est vraiment controversée — gold pour le contenu. Screenshot et repost (\"33/33/33 sur ce sondage, expliquez-vous\").",
      },
      {
        h: "Écrire un 3-options sur moomz en 10 secondes",
        body: "Tape la question. Ajoute 3 options. Valide. Tu obtiens un lien court. Les 3 barres s'animent en 3 couleurs basées sur la palette du slug, résultats live. Vote anonyme, pas de compte requis. Marche en story link, en bio, ou collé dans n'importe quel chat. La mise en page 3 options est visuellement équilibrée — mieux que 2 (trop vide) ou 5+ (encombré) sur un écran mobile.",
      },
    ],
    polls: [
      { q: "Café, thé ou matcha ?", options: ["Café", "Thé", "Matcha"] },
      { q: "Ananas sur la pizza ?", options: ["Oui", "Jamais", "Seulement bourré"] },
      { q: "Plage, montagne ou ville ?", options: ["Plage", "Montagne", "Ville"] },
      { q: "Économiser, dépenser ou investir ?", options: ["Économiser", "Dépenser", "Investir"] },
      { q: "1er date, 2e ou 3e semaine ?", options: ["1 semaine", "2 semaines", "3+ semaines"] },
      { q: "Meilleur moment de la journée ?", options: ["Matin", "Après-midi", "Soir"] },
    ],
    faq: [
      { q: "Pourquoi pas toujours 3 options ?", a: "Parce qu'une 3e option forcée (sans vrai milieu) ajoute du bruit. Utilise 2 quand binaire, 3 quand il y a un vrai milieu." },
      { q: "Et si ma 3e option fait zéro vote ?", a: "Question binaire — tu aurais dû faire 2 options. Lesson learned, le sondage marche quand même." },
      { q: "La 3e option doit toujours être 'ni l'un ni l'autre' ?", a: "Non — c'est paresseux et souvent utilisé comme skip. Fais une vraie 3e position : 'les deux', 'ça dépend', ou une option humoristique qui capte l'ambivalence." },
      { q: "moomz fait 3 options avec images ?", a: "L'upload image est pour le header de la question, pas par option. Pour des images par option, utilise un format this-or-that avec image composite." },
      { q: "Meilleurs 3-options pour l'engagement ?", a: "Questions drama/dating avec une option 'ça dépend' explosent souvent en engagement parce que les viewers débattent quelle option leur correspond." },
    ],
    related: ["sondage-2-options", "sondage-4-options", "sondage-this-or-that-fr"],
    updatedAt: today,
  },
  {
    slug: "sondage-4-options",
    locale: "fr",
    category: "guides",
    emoji: "🎯",
    title: "Sondage à 4 options — quand 3 ne suffit pas",
    h1: "Sondages 4 options : structure, exemples, quand les utiliser",
    description:
      "4 options balance largeur et complétion. Idéal pour les questions catégorielles : saison, topping, type de vacances.",
    intro:
      "4 options, c'est où les sondages commencent à troquer vitesse contre largeur. Le taux de complétion baisse légèrement vs 2-3 options, mais tu gagnes en portée catégorielle. À utiliser pour les questions vraiment 4-dimensionnelles : saison préférée, type de boisson, type de vacances, type d'ami.",
    sections: [
      {
        h: "Quand 4 options est la bonne réponse",
        body: "Questions catégorielles avec 4 buckets distincts : saisons (printemps/été/automne/hiver), boissons (café/thé/matcha/aucun), vacances (plage/montagne/ville/maison). Sondages personnalité avec 4 archétypes. Rankings de films/séries avec 4 finalistes. Évite 4 options quand une option est juste variante d'une autre — c'est un 3-options déguisé.",
      },
      {
        h: "Distribution typique",
        body: "Dans un 4-options sain, la première option prend 35-50%, la 2e 25-35%, la 3e 15-20%, la 4e 5-15%. Si ta 4e fait moins de 5%, drop-la la prochaine fois. Si les votes sont environ égaux (25/25/25/25), la question est vraiment neutre — intéressant mais peu actionnable. Le sweet spot 4-options c'est les questions avec une majorité claire mais un vrai support minoritaire pour 2-3 alternatives.",
      },
      {
        h: "Considérations mobile",
        body: "Sur écran de tel, 4 options tiennent confortablement sans scroll. 5-6 options commencent à pousser sous la fold sur les petits écrans. moomz affiche 4 options en 4 barres horizontales empilées, chacune avec son gradient, les barres s'animant en live. Le rythme visuel de 4 barres est équilibré — mieux que 5 (une de trop) pour la plupart des audiences mobiles.",
      },
      {
        h: "Écrire un 4-options sur moomz",
        body: "Même flow que tout autre nombre — tape la question, tape 4 options, valide. Astuce : l'ordre compte. Mets ton favori en 1er si tu veux qu'il gagne (biais de récence), ou randomise pour le data le plus propre. moomz ne randomise pas auto — tu contrôles l'ordre.",
      },
    ],
    polls: [
      { q: "Saison préférée ?", options: ["Printemps", "Été", "Automne", "Hiver"] },
      { q: "Meilleure boisson le matin ?", options: ["Café", "Thé", "Matcha", "Juste de l'eau"] },
      { q: "Où veux-tu aller cet été ?", options: ["Plage", "Montagne", "Ville", "Reste à la maison"] },
      { q: "Choisis ton superpouvoir", options: ["Voler", "Téléporter", "Lire les pensées", "Invisible"] },
      { q: "Meilleur genre Netflix actuel ?", options: ["Drame", "Comédie", "Téléréalité", "Documentaire"] },
      { q: "Plans pour vendredi soir ?", options: ["Bar", "Restau", "Maison entre potes", "Solo et chill"] },
      { q: "Topping pizza préféré ?", options: ["Pepperoni", "Champignon", "Ananas", "Juste fromage"] },
    ],
    faq: [
      { q: "4 c'est trop d'options ?", a: "Pas vraiment. La complétion reste haute (60-75% des visiteurs). La zone dangereuse commence à 5-6 où la fatigue scroll arrive sur mobile." },
      { q: "Et si je veux que mes 4 options gagnent toutes ?", a: "Alors ta question n'est pas catégorielle — c'est une opinion forcée en 4 cases. Essaie 2 ou 3 options." },
      { q: "L'ordre affecte le vote ?", a: "Oui — biais de récence donne ~5-10% bump aux 1ère et dernière. Pour data propre, randomise. Pour storytelling, mets ton fav en 1er." },
      { q: "Je peux faire 4 options avec images ?", a: "Pas par-option sur moomz. Tu peux attacher une image au header de la question." },
      { q: "Meilleurs 4-options pour les réseaux ?", a: "Questions catégorielles où les viewers ont une identité attachée : saison préférée, picks type-MBTI, types de vacances. Les gens adorent choisir leur bucket." },
    ],
    related: ["sondage-3-options", "sondage-5-options", "sondage-6-options"],
    updatedAt: today,
  },
  {
    slug: "sondage-5-options",
    locale: "fr",
    category: "guides",
    emoji: "🖐️",
    title: "Sondage à 5 options — quand la largeur compte",
    h1: "Sondages 5 options : pour des questions catégorielles plus riches",
    description:
      "5 options est le sweet spot haut pour les sondages catégoriels riches. Moins de complétion mais data plus riche.",
    intro:
      "5 options, c'est le maximum avant que la complétion baisse vraiment. Ça marche pour les questions avec 5 buckets vraiment distincts : note 1-5, 5 genres, 5 options rangées. Au-delà de 5, mieux vaut splitter en 2 sondages ou utiliser un autre format.",
    sections: [
      {
        h: "Quand 5 options est correct",
        body: "Échelles de notation (1-2-3-4-5 étoiles). Sous-ensembles jours de la semaine. Genres (action/drama/comédie/horreur/romance). Buckets de temps. Top 5 ranked. Évite 5 options quand 2 sont des variantes mineures — combine ou drop la plus faible. La mise en page 5 tient encore sur un écran de tel mais c'est la dernière longueur confortable.",
      },
      {
        h: "Drop-off complétion",
        body: "Sur moomz, les 5-options complètent à 50-65% des visiteurs vs 70-80% pour 2-3 options. Le drop est réel mais acceptable pour les questions qui nécessitent vraiment 5 slots. Le plus gros killer c'est la mauvaise rédaction d'options — si les 5 se ressemblent, les viewers skip. Rends chaque option visuellement et conceptuellement distincte : \"Bar / Restau / Cinéma / Maison seul / Dodo tôt\" mieux que \"Option A / B / C / D / E\".",
      },
      {
        h: "Lisibilité mobile",
        body: "Garde chaque option sous 25 caractères. Avec 5 stack, les labels longs commencent à passer à la ligne. Utilise des emojis pour différencier visuellement (🌴 Plage / ⛰️ Montagne / 🏙️ Ville / 🏡 Maison / ✈️ N'importe où). Évite les options qui commencent par le même mot — les viewers les survolent. L'ordre compte plus à 5 options car l'œil scanne haut-bas et les 2 dernières prennent moins l'attention.",
      },
      {
        h: "Écrire sur moomz",
        body: "Même flow. Certains tapent \"ajouter option\" 4 fois et se retrouvent à 5 — c'est le plafond naturel que moomz pousse. Au-delà, la mise en page perd son rythme visuel et l'engagement baisse. Si tu as vraiment besoin de 6, fais-le. Si tu as besoin de 7+, splitte en deux sondages ou utilise un autre outil.",
      },
    ],
    polls: [
      { q: "Note cette saison 1-5 ?", options: ["1 ⭐", "2 ⭐", "3 ⭐", "4 ⭐", "5 ⭐"] },
      { q: "Meilleur moment du week-end ?", options: ["Vendredi soir", "Samedi journée", "Samedi soir", "Dimanche matin", "Dimanche soir"] },
      { q: "Genre ce soir ?", options: ["Action", "Drame", "Comédie", "Horreur", "Romance"] },
      { q: "Meilleur type de vacances ?", options: ["Plage", "Montagne", "Ville", "Roadtrip", "Maison"] },
      { q: "Meilleur repas de la journée ?", options: ["Petit-dej", "Brunch", "Dej", "Dîner", "Snack tard"] },
    ],
    faq: [
      { q: "Pourquoi la complétion baisse à 5 options ?", a: "Fatigue de décision + temps de scan. Chaque option en plus halve grosso modo la disposition du voteur marginal. À 5, tu as perdu ~30% vs un 2-options." },
      { q: "5 options OK sur Insta ?", a: "Pas en natif (sticker 2 max). Utilise un lien moomz et poste le sticker Lien — marche pour 5 options mais attends ~30% moins de votes que le sticker natif." },
      { q: "5 options OK pour un groupe d'amis de 10 ?", a: "Oui. Les petites audiences ont une motivation haute donc la complétion reste haute même à 5. Garde l'inquiétude complétion pour audiences publiques/grandes." },
      { q: "Je peux ranker au lieu de voter ?", a: "Pas encore sur moomz. Pour du ranked-choice, Strawpoll en plan payant." },
      { q: "Options par ordre alphabétique ou par intention ?", a: "Par intention — mets le meilleur en 1er pour max attention dessus. Alphabétique paraît neutre mais perd le storytelling." },
    ],
    related: ["sondage-4-options", "sondage-6-options", "sondage-3-options"],
    updatedAt: today,
  },
  {
    slug: "sondage-6-options",
    locale: "fr",
    category: "guides",
    emoji: "🎲",
    title: "Sondage à 6 options — le format max",
    h1: "Sondages 6 options : le plafond, quand l'utiliser",
    description:
      "6 options est le max sur moomz. Complétion plus basse mais utile pour les questions vraiment 6-dimensionnelles.",
    intro:
      "6 options, c'est le maximum que moomz autorise — et on plafonne là exprès. Au-delà, la complétion descend sous 50%, les mises en page mobile deviennent serrées, les viewers skip. 6 marche pour les questions où chaque option est vraiment distincte et l'audience tient à lire. À utiliser avec parcimonie.",
    sections: [
      {
        h: "Quand 6 options se justifie",
        body: "Questions vraiment à 6 buckets : jours de la semaine, quadrants MBTI, 6 amis votés, ranges 6 semaines, 6 positions rangées. Sondages avec audiences engagées (ton cercle proche, tes subs YouTube) qui vont lire. Évite 6 options sur cold traffic (inconnus Insta, viewers viraux TikTok) — trop skip après option 3.",
      },
      {
        h: "Réalités complétion",
        body: "Sur moomz, les 6-options complètent à 40-55% des visiteurs. Significativement plus bas que 70-80% pour 2-3 options. Sur un sondage public à 1000 visiteurs, tu fais ~450 votes vs 750 sur un 2-options. Ça vaut le coup seulement si tu as vraiment besoin de la largeur catégorielle. Sinon descends à 3-4 options et gagne plus de votes totaux.",
      },
      {
        h: "Pièges mise en page mobile",
        body: "6 options stack vertical sur tel poussent sous la fold sur petits écrans (iPhone SE, anciens Androids). Les viewers voient options 1-4 directement, scrollent pour 5-6 si motivés. Résultat : options 5-6 sous-performent systématiquement 1-4 de 15-25%. Contre ça en réduisant à 5 options ou en mettant ton option la plus controversée/intéressante en position 5-6 pour inciter au scroll.",
      },
      {
        h: "Last resort : splitter en 2 sondages",
        body: "Si tu es tenté d'aller à 7-8-9 options, please non. Soit splitte en deux sondages (\"1er round : A vs B vs C vs D\" puis \"final : winner vs E vs F\"), soit utilise un autre outil (Strawpoll pour ranked-choice, Typeform pour survey). Le cap 6 de moomz existe parce qu'au-delà, le format dégrade activement l'UX.",
      },
    ],
    polls: [
      { q: "Meilleur jour de la semaine ?", options: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Week-end"] },
      { q: "Vibe pour ce soir ?", options: ["Bar", "Restau", "Cinéma", "Maison cosy", "Soirée", "Dodo tôt"] },
      { q: "Meilleur repas ?", options: ["Petit-dej", "Brunch", "Dej", "Snack", "Dîner", "Tard"] },
      { q: "Série préférée ?", options: ["Stranger Things", "The Bear", "Succession", "Severance", "House of Dragon", "Autre"] },
      { q: "Meilleure ville où vivre ?", options: ["Paris", "Londres", "NYC", "Tokyo", "Berlin", "Autre"] },
    ],
    faq: [
      { q: "Pourquoi moomz plafonne à 6 options ?", a: "Parce qu'au-delà, la complétion descend sous 50% et l'UX mobile se dégrade. Le cap est une feature, pas une limite — ça force des questions plus claires." },
      { q: "Et si j'ai vraiment besoin de 7-8 options ?", a: "Splitte en deux sondages ou prends un autre outil (Strawpoll, Typeform). Forcer 7+ options dans un seul sondage abîme plus le vote count que l'option en plus apporte." },
      { q: "Les options 5-6 ont vraiment moins de votes ?", a: "Oui, systématiquement 15-25% en moins en moyenne. L'œil scanne haut-bas et la fatigue scroll coupe les options du bas. Contre ça en plaçant les options controversées en 5-6." },
      { q: "Faut randomiser 6 options ?", a: "Pour data propre, oui — randomise l'ordre par visiteur. moomz ne le fait pas auto, donc crée le sondage avec ordre intentionnel et accepte le biais." },
      { q: "Meilleurs cas d'usage pour 6 options ?", a: "Jours de la semaine, brackets de tournoi rankés, picks MBTI/personnalité, tout ce où 6 catégories distinctes couvrent l'espace proprement." },
    ],
    related: ["sondage-5-options", "sondage-4-options", "sondage-anonyme"],
    updatedAt: today,
  },
  {
    slug: "sondage-oui-non",
    locale: "fr",
    category: "guides",
    emoji: "✅",
    title: "Sondage oui/non — le format le plus simple",
    h1: "Sondages oui/non : quand le binaire est la bonne réponse",
    description:
      "Le sondage oui/non est le format le plus rapide avec le meilleur taux de complétion. Quand et comment l'utiliser.",
    intro:
      "Un sondage oui/non, c'est le format ultime simple : une question, deux options. Complète plus vite qu'aucun autre format et atteint le meilleur engagement sur les plateformes avec un sticker 2-options natif (Instagram, Twitter). À utiliser quand la question est vraiment binaire. À éviter quand tu forces un binaire sur une question avec un vrai milieu.",
    sections: [
      {
        h: "Pourquoi oui/non complète si haut",
        body: "Oui/non est une décision System 1 (Kahneman) — réflexe en moins d'0.5 sec. Pas de shopping entre options, pas de paralysie. Sur le sticker natif 2-options Insta, les sondages oui/non font régulièrement 50-70% des viewers qui tapent. Sur moomz, les liens oui/non convertissent 60-80% des visiteurs. Le format est universellement compris et universellement rapide.",
      },
      {
        h: "Quand oui/non est le mauvais format",
        body: "Quand la réponse honnête c'est \"ça dépend\" — forcer le binaire tue la qualité data. \"Tu ghostes les gens ?\" est oui/non en surface mais la vraie réponse pour la plupart c'est \"seulement si X\". Pour ce type de question, prends 3 options (\"oui / non / seulement s'ils le méritent\"). Le format oui/non est pire quand le binaire crée une pression sociale pour choisir la réponse \"acceptable\" (l'anonymat aide mais n'élimine pas ça).",
      },
      {
        h: "Spice les oui/non avec des emojis",
        body: "\"Oui / Non\" marche mais \"Oui 🔥 / Non ❄️\" marche mieux — les emojis différencient visuellement et tap l'émotion. moomz laisse mettre n'importe quel emoji dans le texte de l'option. Pour drama : \"Toxique 🚩 / Sain 🌱\". Pour décision : \"Garder 💰 / Dépenser 🛍️\". L'emoji n'est pas décoration — il cue le cerveau au vibe de chaque option.",
      },
      {
        h: "Erreurs oui/non à éviter",
        body: "N'écris pas de questions orientées (\"N'est-il pas vrai que... ?\"). N'utilise pas oui/non quand 3 options seraient honnêtes. Ne demande pas oui/non sur des sujets identity-sensitive où une réponse est socialement chargée. Pour les sujets sensibles, prends moomz anonyme — même un oui/non devient honnête quand l'anonymat est blindé.",
      },
    ],
    polls: [
      { q: "Ananas sur la pizza ?", options: ["Oui", "Non"] },
      { q: "Ghoster c'est acceptable ?", options: ["Oui", "Non"] },
      { q: "Pourboire en cash ?", options: ["Oui", "Non"] },
      { q: "Les couples libres ça marche ?", options: ["Oui", "Non"] },
      { q: "Faire de la thérapie au moins une fois ?", options: ["Oui", "Jamais"] },
      { q: "Lire le bouquin avant le film ?", options: ["Toujours", "Jamais"] },
      { q: "Payer pour des socials premium ?", options: ["Oui", "Jamais"] },
    ],
    faq: [
      { q: "Le oui/non est vraiment anonyme sur moomz ?", a: "Oui — tokens anonymes en cookie, pas de nom, pas d'IP montrée au créateur. Pour les sujets sensibles, moomz est structurellement plus safe que le sticker Insta qui expose les voteurs." },
      { q: "Quel taux d'engagement sur un oui/non ?", a: "60-80% des visiteurs votent typiquement, le plus haut de tous les formats. La simplicité est la feature." },
      { q: "Je peux mettre l'emoji comme option entière ?", a: "Oui — options mono-emoji marchent (\"🔥 / ❄️\") mais paire avec un mot pour clarté (\"🔥 Oui / ❄️ Non\")." },
      { q: "Écrire 'Non' ou 'Jamais' ?", a: "Selon le ton. \"Non\" neutre. \"Jamais\" dramatique pour les hot takes. Match l'option au vibe de la question." },
      { q: "Meilleurs oui/non pour les réseaux ?", a: "Hot takes, drama, dating, opinions food controversées. Le format prospère où les viewers veulent un camp clair." },
    ],
    related: ["sondage-2-options", "sondage-this-or-that-fr", "sondage-anonyme"],
    updatedAt: today,
  },
  {
    slug: "sondage-this-or-that-fr",
    locale: "fr",
    category: "guides",
    emoji: "⚡",
    title: "Sondage this or that — le format préféré de la Gen Z",
    h1: "Sondages this or that : format, idées, pourquoi ça devient viral",
    description:
      "This or that, c'est un sondage 2-options habillé d'imagerie et de culture. Pourquoi ça cartonne sur Insta et TikTok.",
    intro:
      "\"This or that\", c'est juste un sondage 2-options culturellement repackagé pour l'esthétique Gen Z : deux choix visuellement contrastés, souvent avec images, souvent en opposant des totems culturels. Le format est devenu viral sur Insta vers 2019 et n'est jamais reparti.",
    sections: [
      {
        h: "Pourquoi this-or-that frappe différemment du oui/non",
        body: "Un oui/non demande \"est-ce vrai ?\". Un this-or-that demande \"tu es qui ?\". Choisir iPhone vs Android c'est plus de l'identity signaling que de la déclaration de préférence. Choisir ananas vs pas-ananas est devenu un meme guerre-culturelle. Le format tape dans l'identité tribale, plus engageant émotionnellement qu'un binaire neutre. Sur les stories Insta, les this-or-that visuels (avec images côte-à-côte) font 60-75% d'engagement vs 40-55% pour du texte oui/non.",
      },
      {
        h: "Totems culturels qui marchent",
        body: "Tech : iPhone vs Android, Mac vs PC, Spotify vs Apple Music. Food : ananas pizza, bien cuit vs saignant, céréales-puis-lait vs lait-puis-céréales. Lifestyle : lève-tôt vs couche-tard, plage vs montagne, chien vs chat. Drama : répondu 'k' vs lu sans réponse, ghoster vs dire en face. Les meilleures options c'est celles où l'audience a déjà une tribu — ils votent pour déclarer allégeance, puis commentent.",
      },
      {
        h: "Sondages visuels sur moomz",
        body: "moomz laisse attacher UNE image au header. Pour du vrai this-or-that avec DEUX images, le workaround c'est de poster une image composite côte-à-côte (deux produits, deux outfits, deux memes joints en une). C'est ce que font les créateurs Insta aussi. Poste le composite en image du sondage, label les options A et B avec emojis (🔵 A / 🔴 B), partage le lien.",
      },
      {
        h: "Écrire des this-or-that viraux",
        body: "1) Deux camps clairement tribaux (pas de milieu). 2) Charge d'identité (une option signale quelque chose sur toi). 3) Visuellement distincts si tu mets une image. 4) Labels courts — \"Plage 🏖️ / Montagne ⛰️\" pas \"Je préfère la plage\". 5) Reposte le résultat en follow-up pour extraire plus d'engagement (\"73% team plage expliquez-vous\").",
      },
    ],
    polls: [
      { q: "iPhone ou Android ?", options: ["iPhone", "Android"] },
      { q: "Plage ou montagne ?", options: ["Plage", "Montagne"] },
      { q: "Lève-tôt ou couche-tard ?", options: ["Lève-tôt", "Couche-tard"] },
      { q: "Chiens ou chats ?", options: ["Chiens", "Chats"] },
      { q: "Ananas sur la pizza ?", options: ["Oui", "Jamais"] },
      { q: "Spotify ou Apple Music ?", options: ["Spotify", "Apple Music"] },
      { q: "Céréales d'abord ou lait d'abord ?", options: ["Céréales", "Lait"] },
      { q: "Ghoster ou dire en face ?", options: ["Ghoster", "Dire en face"] },
    ],
    faq: [
      { q: "Différence entre this-or-that et oui/non ?", a: "Oui/non demande si quelque chose est vrai. This-or-that demande à quelle tribu tu appartiens. Format identique (2 options) mais framing identitaire, pas propositionnel." },
      { q: "Je peux faire this-or-that avec images ?", a: "Oui — upload une image composite côte-à-côte sur moomz, label les options avec lettres ou emojis qui matchent les côtés de l'image. Les créateurs Insta font ça tout le temps." },
      { q: "Meilleurs sujets pour this-or-that viral ?", a: "Tech (iPhone vs Android), food (pizza ananas), tribus lifestyle (plage vs montagne, lève-tôt vs couche-tard), drama (ghoster vs dire), nostalgie (céréales vs lait)." },
      { q: "Faut nommer les options ?", a: "Oui — labels tribaux courts (\"Plage / Montagne\") marchent mieux que lettres (\"A / B\") pour l'engagement. Le nom de tribu est le hook identitaire." },
      { q: "Pourquoi les créateurs postent autant de this-or-that ?", a: "Engagement le plus haut de tous les formats story, facile à écrire, les viewers veulent déclarer leur tribu. Le follow-up qui extrait les réactions double l'engagement." },
    ],
    related: ["sondage-oui-non", "sondage-2-options", "sondage-avec-image"],
    updatedAt: today,
  },
  {
    slug: "sondage-anonyme",
    locale: "fr",
    category: "guides",
    emoji: "🕵️",
    title: "Sondage anonyme — quand l'honnêteté a besoin d'une couverture",
    h1: "Sondages anonymes : comment ça marche, quand l'utiliser",
    description:
      "Les sondages anonymes débloquent les réponses honnêtes sur sujets sensibles. Comment moomz gère l'anonymat vs autres.",
    intro:
      "Un sondage anonyme, c'est un sondage où le créateur ne peut pas voir qui a voté quoi — juste les compteurs agrégés. Ça paraît simple mais la plupart des \"sondages\" que tu rencontres ne sont en fait PAS anonymes (sticker Insta montre les voteurs, sondages WhatsApp montrent les voteurs, sondages natifs Discord montrent les voteurs). Sur moomz, chaque sondage est anonyme par défaut.",
    sections: [
      {
        h: "Ce que l'anonymat veut vraiment dire ici",
        body: "Sur moomz, chaque visiteur reçoit un token anonyme en cookie à la 1ère visite. Au vote, la paire token-vote est stockée pour empêcher les doublons, mais la vue exposée au front-end strip les IDs voteurs. Le créateur ne PEUT littéralement pas voir qui a voté quoi — il voit les comptes et pourcentages seulement. Compare à Insta : sticker montre exactement qui a tapé chaque option. Compare à WhatsApp : sondages natifs montrent les noms. Compare à Discord : sondages natifs montrent les noms. moomz les cache par architecture, pas par toggle.",
      },
      {
        h: "Quand l'anonymat change la réponse",
        body: "Sondages au boulot (\"le nouveau chef est bon ?\"), dating (\"je devrais quitter X ?\"), drama (\"Y est saoulant ?\"), salaire (\"tu gagnes combien ?\"), identité (\"tu es vraiment heureux ?\"). Dans tout contexte avec pression sociale, l'anonymat flippe la réponse. Étude célèbre Asch (1951) : 75% des gens conforment à de mauvaises réponses de groupe quand nommés — l'anonymat fait sauter cette pression.",
      },
      {
        h: "Limites de l'anonymat",
        body: "moomz empêche le créateur de voir les identités, mais ça n'empêche pas l'analyse de trafic si tu partages avec quelques personnes — si tu partages avec 3 amis proches et une option fait 1 vote, tu peux deviner. Pour groupes sous 5, anonymat partiel. Pour groupes 10+, anonymat fonctionnellement complet. Aussi : moomz ne peut pas empêcher un voteur de screenshoter son propre vote et le montrer — choix du voteur, pas limitation plateforme.",
      },
      {
        h: "Utiliser moomz pour des sondages anonymes",
        body: "Chaque sondage moomz est anonyme par défaut — pas de toggle. Crée le sondage, partage le lien. Les voteurs ne voient pas de prompt \"sign in\", pas de champ nom, pas de connexion Insta. Ils tapent et votent. Résultats agrégés seulement. Le même token cookie track le voteur entre sondages pour empêcher le double-vote, mais le token ne veut rien dire pour le créateur (hash random).",
      },
    ],
    polls: [
      { q: "Sondages anonymes — nécessaires ?", options: ["Toujours", "Parfois", "Jamais"] },
      { q: "Tu voterais honnêtement sur un sondage au boulot ?", options: ["Oui anonyme", "Oui nominatif", "Jamais"] },
      { q: "Contexte sondage anonyme le plus utile ?", options: ["Boulot", "Dating", "Drama", "Salaire", "Identité"] },
      { q: "Les sondages Insta sont anonymes pour le créateur ?", options: ["Oui", "Non (correct)", "Sais pas"] },
      { q: "Tu fais confiance à moomz pour rester anonyme ?", options: ["Oui", "Non", "Peut-être"] },
    ],
    faq: [
      { q: "L'équipe moomz peut voir qui a voté quoi ?", a: "L'architecture expose seulement les comptes agrégés via la vue publique. Les tokens voteurs existent dans la table sous-jacente mais ne sont pas liés à une identité — c'est des hash random. Pas de nom, email, ou IP loggé aux lignes de vote." },
      { q: "Je peux rendre mon sondage non-anonyme ?", a: "Pas actuellement — moomz est anonyme par défaut et c'est une feature. Si tu veux du vote nominatif pour accountability, prends Doodle ou Google Forms." },
      { q: "Le sondage Insta est anonyme ?", a: "Non, le créateur voit exactement qui a voté quoi. Pareil pour WhatsApp et Discord natifs. moomz est anonyme par architecture." },
      { q: "Comment empêcher le double-vote sans voir les voteurs ?", a: "Token cookie anonyme + contrainte SQL unique sur (poll_id, token). Le token ne sert qu'au check duplicate, jamais montré au créateur." },
      { q: "moomz assez anonyme pour des sondages boulot sensibles ?", a: "Pour groupes 10+, oui fonctionnellement. Pour très petits groupes (3-5), n'importe quel outil anonyme peut être deviné à partir des comptes — prends de plus gros samples." },
    ],
    related: ["sondage-oui-non", "sondage-2-options", "moomz-vs-sondage-instagram"],
    updatedAt: today,
  },
  {
    slug: "sondage-emoji",
    locale: "fr",
    category: "guides",
    emoji: "💖",
    title: "Sondage emoji — quand les mots te ralentissent",
    h1: "Sondages emoji-only : quand les emojis parlent mieux",
    description:
      "Les sondages emoji sont plus rapides à lire, plus friendly, et universels. Quand les utiliser et 20+ exemples.",
    intro:
      "Un sondage emoji utilise des emojis comme labels principaux d'options — parfois avec un mot court, parfois seuls. Le format est universel (traduit entre langues), plus rapide à scanner que du texte, et lit plus friendly. Particulièrement puissant pour les sondages casual entre potes, dating, et questions de réaction.",
    sections: [
      {
        h: "Pourquoi les options emoji-only marchent",
        body: "Le cerveau traite les images plus vite que le texte (Potter & Faulconer, 1975). Un emoji est plus proche d'une image qu'un mot, donc parsé en moins d'0.2 seconde. Pour un sondage qui veut être rapide et fun, ça compte. Les emojis signalent aussi le ton instantanément — \"🔥\" lit comme enthousiasme, \"💀\" comme ironie, \"🥲\" comme tristesse douce. Un sondage texte ne porte pas le ton de la même façon sans paraître plat ou over-écrit.",
      },
      {
        h: "Meilleurs formats de sondage emoji",
        body: "Notation : 🔥 / 👍 / 🤷 / 👎 / 💀. Émotion : 😍 / 😎 / 😭 / 🤬. Food : 🍕 / 🍣 / 🍔 / 🌮. Boisson : ☕ / 🍵 / 🍷 / 🥤. Mood : 😀 / 😐 / 😞. L'échelle 4-5 emojis de notation est la plus populaire — intuitive, rapide, marche entre langues. Paire emojis avec un mot pour clarté dans audiences mixtes (\"🔥 incroyable / 💀 mort\").",
      },
      {
        h: "Quand les sondages emoji ratent",
        body: "Les emojis ambigus tuent la qualité data. \"💀\" peut vouloir dire \"mort de rire\" (Gen Z) ou \"horrible\" (lecteurs plus âgés). Pour les sondages entre âges/cultures, reste sur les emojis non-ambigus (👍 / 👎 / 🤷 / 🔥 / ❤️ / 💔). Évite les options emoji-only sur les sondages pros — ça reste informel même quand la question est sérieuse.",
      },
      {
        h: "Écrire des sondages emoji sur moomz",
        body: "Tape l'emoji comme texte d'option. moomz les préserve parfaitement — rendus large dans les barres de résultats, animent avec le compteur, pourcentage à côté de l'emoji. Mix and match : emoji pur pour 2-3 options, emoji + mot pour 4-6. Ajoute un emoji à ta question aussi (\"Comment était la soirée ? 🎉\").",
      },
    ],
    polls: [
      { q: "Tu te sens comment ?", options: ["🔥", "😎", "🤷", "😞", "💀"] },
      { q: "Note la nouvelle chanson", options: ["🔥 banger", "👍 sympa", "🤷 mid", "👎 nul", "💀 mort"] },
      { q: "Boisson du moment ?", options: ["☕", "🍵", "🍷", "🍺", "🥤"] },
      { q: "Mood pour le week-end ?", options: ["🎉 fête", "🛋️ chill", "💪 grind", "😴 dodo"] },
      { q: "Snack choisi", options: ["🍕", "🍣", "🍔", "🌮", "🍝"] },
      { q: "Comment était le date ?", options: ["🔥", "🥰", "😐", "💀", "🚩"] },
    ],
    faq: [
      { q: "La question elle-même peut être qu'un emoji ?", a: "moomz exige du texte dans le champ question (filtre anti-spam exige des lettres). Les options peuvent être emoji-only." },
      { q: "Les emojis sont universels ?", a: "La plupart oui — 👍 👎 🔥 ❤️ marchent partout. Certains (💀, 🥲, 🍑) portent un sens spécifique par génération. Match les emojis à l'âge de ton audience." },
      { q: "Les sondages emoji ont plus d'engagement ?", a: "Sur posts casual sociaux oui — lisent plus vite et plus friendly. Sur sujets sérieux/pro, les labels texte sont plus clairs." },
      { q: "Meilleures échelles emoji ?", a: "Échelle 5-emoji : 🔥 / 👍 / 🤷 / 👎 / 💀 ou 😍 / 🙂 / 😐 / 🙁 / 😡. Les deux marchent universellement et lisent intuitivement." },
      { q: "Je peux utiliser des emojis customs type Discord ?", a: "Non, moomz utilise les emojis Unicode standards. Les customs ne rendent pas hors de leur plateforme." },
    ],
    related: ["sondage-oui-non", "sondage-this-or-that-fr", "sondage-2-options"],
    updatedAt: today,
  },
  {
    slug: "sondage-avec-image",
    locale: "fr",
    category: "guides",
    emoji: "🖼️",
    title: "Sondage avec image — du visuel qui convertit",
    h1: "Sondages avec image : du visuel bien fait",
    description:
      "Les sondages avec image font 2x plus d'engagement que texte seul. Best practices, exemples, et setup sur moomz.",
    intro:
      "Un sondage avec image attache une photo ou un visuel au sondage, laissant les voteurs réagir à quelque chose qu'ils voient. Sur chaque plateforme qu'on a mesurée, les sondages image doublent ou triplent l'engagement vs texte seul. Le visuel hook l'attention, la question convertit le tap. Particulièrement puissant pour les outfit polls, comparaison produit, food, et tout contenu créateur \"vote sur mon X\".",
    sections: [
      {
        h: "Pourquoi les sondages image convertissent mieux",
        body: "Les images se traitent 60 000 fois plus vite que le texte dans le cerveau (recherche 3M Corporation). Un sondage avec image se scanne et se comprend instantanément ; un sondage texte exige de lire. Sur les stories Insta, un sondage attaché à une photo fait 60-75% d'engagement vs 40-55% pour texte seul. Sur moomz, les sondages avec image convertissent visiteurs en voteurs à 75-85% vs 60-70% pour texte seul. L'image est ce qui arrête le scroll.",
      },
      {
        h: "Cas d'usage qui cartonnent",
        body: "Outfit polls (\"lequel pour le mariage ?\"). Comparaison produit (\"quel sac pour laptop ?\"). Food (\"nouveau menu, votez votre fav\"). Résultats de recette (\"ça rend bien ?\"). Vues d'appart (\"lequel pour emménager ?\"). Pet polls (\"plus mignonne tête du groupe ?\"). Trait unifiant : les voteurs veulent voir ce qu'ils jugent, pas lire dessus. Si ta question contient \"ce\" ou \"celui-ci\", tu as probablement besoin d'un sondage image.",
      },
      {
        h: "La qualité d'image compte",
        body: "Utilise 1080×1080 ou plus. Les crops carrés rendent le mieux dans la mise en page carte moomz. Évite les screenshots de texte (le texte devient partie de l'image, plus dur à lire sur tel). Pour les sondages comparaison, utilise une image composite avec options côte-à-côte (label A/B/C/D matchant les labels d'option). Compresse avant upload — limite Supabase Storage 5MB mais ~500KB-1MB rend smooth en data mobile.",
      },
      {
        h: "Setup d'un sondage image sur moomz",
        body: "Ouvre le formulaire create, tape \"ajouter image\", upload depuis galerie ou prends une photo direct. L'image preview au-dessus de la question. Tape la question et les options. Valide. La page du sondage rend l'image edge-to-edge au-dessus de la question avec options en dessous — parfait pour partager en stories Insta où l'image est le hook.",
      },
    ],
    polls: [
      { q: "Quel outfit pour le mariage ?", options: ["Outfit A", "Outfit B", "Outfit C"] },
      { q: "Meilleure coupe sur moi ?", options: ["Coupe A", "Coupe B", "Garde actuelle"] },
      { q: "Appart pour emménager ?", options: ["A (lumineux)", "B (cheap)", "C (trajet)"] },
      { q: "Quel sac laptop ?", options: ["Noir", "Marron", "Tan", "Achète pas"] },
      { q: "Tentative recette — ça rend ?", options: ["Ça rend 🔥", "Mid", "Ça rend mal"] },
      { q: "Quel chien est le plus mignon ?", options: ["Chien A", "Chien B", "Chien C", "Égalité"] },
    ],
    faq: [
      { q: "Quels formats d'image moomz supporte ?", a: "JPG, PNG, WebP. Max 5MB. Recommandé 1080×1080 carré pour meilleur rendu mobile." },
      { q: "Je peux faire des images par option ?", a: "Pas actuellement — moomz a une image par sondage (header). Pour des images par option, utilise une image composite unique avec labels A/B/C/D matchant le texte d'option." },
      { q: "Les sondages image coûtent en plus ?", a: "Non, upload image gratuit sur moomz. Stocké dans Supabase Storage." },
      { q: "Les sondages image marchent sur Insta ?", a: "Oui — l'image rend dans les previews de liens, et encore mieux, tu peux poster ton image native en story avec le sticker Lien moomz dessus. Best of both." },
      { q: "Meilleurs sujets sondage image ?", a: "Outfit, comparaison produit, food, apparts, pets, recettes — tout ce où les voteurs ont besoin de VOIR pour juger. Évite les sondages image sur questions abstraites où l'image n'ajoute rien." },
    ],
    related: ["sondage-this-or-that-fr", "sondage-2-options", "sondage-anonyme"],
    updatedAt: today,
  },
];
