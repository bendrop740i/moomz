import type { Quiz } from "../types";

export const foodTrendsEnQuizzes: Quiz[] = [
  {
    slug: "quiz-bubble-tea-origin-flavors",
    title: "Bubble Tea 101: Origins, Tapioca and Trendy Flavors",
    description: "Test your boba IQ — where bubble tea was born, what the pearls are made of, why brown sugar milk tea blew up, and which variants are real classics.",
    topic: "food-trends",
    emoji: "🧋",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "In which country and decade was bubble tea invented?",
        options: ["Japan, 1970s", "Taiwan, 1980s", "Hong Kong, 1990s", "Vietnam, 2000s"],
        correct: 1,
        explainer: "Bubble tea was invented in Taichung, Taiwan in the early 1980s. Two tea houses, Chun Shui Tang and Hanlin, both claim to have first dropped tapioca pearls into iced sweet tea around 1986-1988."
      },
      {
        q: "What are classic boba pearls actually made of?",
        options: ["Sago palm starch", "Cassava (tapioca) starch", "Wheat flour and gelatin", "Rice flour and agar"],
        correct: 1,
        explainer: "The chewy black pearls are cooked tapioca starch, which comes from the cassava root. The dark color usually comes from brown sugar or caramel added during cooking, not from the cassava itself."
      },
      {
        q: "What does the 'bubble' in bubble tea originally refer to?",
        options: ["The tapioca pearls", "The foam from shaking the tea", "The straw bubbles", "The boiling pearls"],
        correct: 1,
        explainer: "The name comes from the frothy bubbles on top of the tea after it is shaken vigorously with ice. The Chinese word 'boba' was added later and slangly refers to the large tapioca pearls."
      },
      {
        q: "Which flavor went viral globally around 2018 and made brown sugar boba mainstream?",
        options: ["Taro milk tea", "Tiger sugar brown sugar boba", "Matcha latte boba", "Thai tea boba"],
        correct: 1,
        explainer: "Tiger Sugar, founded in Taichung in 2017, popularized the 'tiger stripe' look — brown sugar syrup drizzled inside a cup of fresh milk and warm pearls. It went viral on Instagram in 2018-2019."
      },
      {
        q: "What gives taro milk tea its signature purple color in most shops?",
        options: ["Real taro root", "Ube yam paste", "Taro powder with food coloring", "Butterfly pea flower"],
        correct: 2,
        explainer: "Real taro root is actually off-white with light purple specks. The bright lavender color in most chains comes from instant taro powder blended with milk powder and purple food coloring."
      },
      {
        q: "Which is NOT a typical bubble tea topping?",
        options: ["Aloe vera cubes", "Grass jelly", "Popping boba", "Pickled ginger"],
        correct: 3,
        explainer: "Pickled ginger belongs to sushi, not boba. Real bubble tea menus include tapioca pearls, popping fruit boba, grass jelly, aloe cubes, pudding and red beans."
      },
      {
        q: "Why does authentic Hong Kong-style milk tea taste so smooth?",
        options: ["Sweetened condensed milk", "It is strained through a cloth 'silk stocking'", "Use of oat milk", "It is fermented overnight"],
        correct: 1,
        explainer: "Hong Kong silk stocking milk tea gets its name from the fine cloth strainer used to filter strong black tea multiple times, giving an ultra-smooth texture before evaporated milk is added."
      },
      {
        q: "Thai iced tea gets its bright orange color mainly from what?",
        options: ["Saffron", "Annatto food coloring", "Turmeric", "Carrot juice"],
        correct: 1,
        explainer: "Traditional Thai tea mixes are dyed with annatto (a seed-based natural orange-red colorant) and sometimes synthetic dyes. The base tea itself is actually a strong black Ceylon-style brew."
      },
      {
        q: "Popping boba are made with which technique borrowed from molecular gastronomy?",
        options: ["Spherification with sodium alginate", "Freeze-drying", "Caramelization", "Emulsification with lecithin"],
        correct: 0,
        explainer: "Popping boba use reverse spherification: a liquid containing calcium reacts with a sodium alginate bath to form a thin gel skin around a liquid center that bursts in the mouth."
      },
      {
        q: "Roughly how many calories are in a typical 16 oz brown sugar boba milk tea?",
        options: ["Around 100", "Around 250", "Around 450", "Around 700"],
        correct: 2,
        explainer: "A standard 16 oz brown sugar boba clocks in around 400-500 kcal, mostly from added sugar, syrup and tapioca starch. It easily rivals a small meal and is closer to a dessert than a drink."
      }
    ]
  },
  {
    slug: "quiz-matcha-japan-history-grades",
    title: "Matcha Mastery: Japanese Origins, Grades and Lattes",
    description: "From shaded tea fields in Uji to your Saturday matcha latte — learn how matcha is made, what ceremonial really means, and why proper matcha is bright green.",
    topic: "food-trends",
    emoji: "🍵",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Matcha is a ground form of which type of green tea leaf?",
        options: ["Sencha", "Gyokuro", "Tencha", "Hojicha"],
        correct: 2,
        explainer: "Matcha is made from tencha — leaves grown in shade for 3-4 weeks before harvest to boost chlorophyll and L-theanine, then steamed, de-stemmed, de-veined and stone-ground into a fine powder."
      },
      {
        q: "Which Japanese region is most famous for premium matcha?",
        options: ["Shizuoka", "Uji (Kyoto)", "Kagoshima", "Hokkaido"],
        correct: 1,
        explainer: "Uji, just south of Kyoto, has been producing top-grade matcha since the 12th century when Zen Buddhist monk Eisai brought tea seeds back from China and helped popularize the powdered form."
      },
      {
        q: "What gives ceremonial-grade matcha its bright vivid green color?",
        options: ["Food coloring", "High chlorophyll from extended shading", "Wheatgrass blending", "Late harvest"],
        correct: 1,
        explainer: "Shading the tea bushes forces them to produce more chlorophyll and amino acids to capture limited light. The result is sweeter, less astringent tea and that distinctive jade-green color."
      },
      {
        q: "Why is high-grade matcha said to give 'calm focus' rather than coffee jitters?",
        options: ["It is decaffeinated", "L-theanine slows caffeine absorption", "It contains theobromine like chocolate", "It has no caffeine"],
        correct: 1,
        explainer: "Matcha contains L-theanine, an amino acid that crosses the blood-brain barrier and promotes alpha brain waves. Combined with caffeine, it creates a smoother, longer-lasting alertness without the crash."
      },
      {
        q: "Which utensil is used to whisk matcha in a traditional tea ceremony?",
        options: ["Chasen (bamboo whisk)", "Chashaku spoon", "Chawan bowl", "Hishaku ladle"],
        correct: 0,
        explainer: "The chasen is a bamboo whisk hand-carved from a single piece of bamboo into 80-120 fine tines. It froths matcha into a smooth foam without metal contact, which would alter the taste."
      },
      {
        q: "What is the difference between usucha and koicha?",
        options: ["Cold vs hot matcha", "Thin vs thick matcha preparations", "Black vs green tea", "Sweet vs unsweet matcha"],
        correct: 1,
        explainer: "Usucha (thin tea) uses about 2g matcha to 70ml water and is whisked into a foamy layer. Koicha (thick tea) uses about 4g matcha to 30ml water, producing a syrupy, intense preparation reserved for formal ceremonies."
      },
      {
        q: "Which is a red flag that you are drinking low-grade culinary matcha sold as ceremonial?",
        options: ["Yellow-brown color", "Mild grassy aroma", "Foam after whisking", "Slight sweetness"],
        correct: 0,
        explainer: "Yellow, brown or olive tones signal old, oxidized, or low-grade matcha made from late-harvest, unshaded leaves. True ceremonial matcha is vivid jade green and has a sweet, umami flavor with no harsh bitterness."
      },
      {
        q: "A typical 1g serving of matcha contains roughly how much caffeine?",
        options: ["5 mg", "30-35 mg", "80 mg", "150 mg"],
        correct: 1,
        explainer: "One gram of matcha has about 30-35 mg of caffeine, but because you ingest the whole leaf, you also get more antioxidants (especially EGCG) than from steeped green tea."
      },
      {
        q: "Hojicha differs from matcha mainly because hojicha is:",
        options: ["Roasted green tea", "Fermented", "Shaded longer", "Mixed with black tea"],
        correct: 0,
        explainer: "Hojicha is green tea pan-roasted at high temperature, turning the leaves reddish-brown. Roasting removes most of the caffeine and gives a toasty, caramel flavor that has become a TikTok favorite for lattes."
      },
      {
        q: "What is the proper water temperature for whisking matcha?",
        options: ["50 °C / 122 °F", "70-80 °C / 158-176 °F", "100 °C / 212 °F", "Iced 5 °C / 41 °F"],
        correct: 1,
        explainer: "Boiling water scorches matcha and brings out bitter catechins. Around 70-80 °C is the sweet spot: hot enough to dissolve the powder but cool enough to preserve the amino acids that create umami."
      }
    ]
  },
  {
    slug: "quiz-avocado-toast-history-nutrition",
    title: "Avocado Toast: From Aussie Brunch to Global Icon",
    description: "Who actually invented avocado toast, why millennials got blamed for it, and what you really get nutritionally from your $14 brunch order.",
    topic: "food-trends",
    emoji: "🥑",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Which chef is widely credited with popularizing modern avocado toast in 1993?",
        options: ["Yotam Ottolenghi", "Bill Granger in Sydney", "Gwyneth Paltrow", "Anthony Bourdain"],
        correct: 1,
        explainer: "Australian chef Bill Granger added smashed avocado on toast with lime, salt and pepper to the menu at Bills cafe in Sydney in 1993. It became the template for the global brunch dish."
      },
      {
        q: "Botanically speaking, avocado is classified as a:",
        options: ["Vegetable", "Single-seeded berry", "Nut", "Drupe"],
        correct: 1,
        explainer: "Avocado is technically a large single-seeded berry. The fleshy part surrounds a single big pit, which fits the botanical definition of a berry, even though it does not taste sweet."
      },
      {
        q: "About what percentage of avocados eaten in the US come from Mexico?",
        options: ["20%", "45%", "75%", "Over 90%"],
        correct: 3,
        explainer: "Roughly 90%+ of avocados consumed in the United States are imported from Mexico, primarily from the state of Michoacán. California produces most of the rest, mainly the Hass variety."
      },
      {
        q: "Most avocados sold worldwide are the Hass variety. Why?",
        options: ["Cheapest to grow", "Buttery flavor and thick skin that ships well", "Largest size", "Naturally pest-resistant"],
        correct: 1,
        explainer: "The Hass cultivar originated from a single tree in California in the 1920s. Its high oil content, creamy flesh and pebbly thick skin make it durable for shipping. Most Hass avocados today still trace back genetically to that one tree."
      },
      {
        q: "An average medium avocado contains roughly how many calories?",
        options: ["80 kcal", "160 kcal", "240 kcal", "400 kcal"],
        correct: 2,
        explainer: "A medium avocado (about 150g of flesh) provides around 230-240 kcal, mostly from monounsaturated fat — the same heart-healthy fat that dominates olive oil."
      },
      {
        q: "The healthy fat most abundant in avocado is:",
        options: ["Saturated fat", "Oleic acid (monounsaturated)", "Omega-3 EPA", "Trans fat"],
        correct: 1,
        explainer: "About 70% of the fat in an avocado is monounsaturated, primarily oleic acid — the same type found in olive oil. It is associated with lower LDL cholesterol when it replaces saturated fat."
      },
      {
        q: "Surprisingly, gram for gram, avocados contain MORE of which mineral than bananas?",
        options: ["Iron", "Magnesium", "Potassium", "Calcium"],
        correct: 2,
        explainer: "Avocados contain about 485 mg of potassium per 100g, versus around 358 mg in bananas. They are quietly one of the best potassium sources, important for blood pressure regulation."
      },
      {
        q: "What is guasacaca, sometimes called Venezuelan guacamole?",
        options: ["A fried avocado dish", "An avocado-based sauce with vinegar and herbs", "A pickled avocado", "An avocado smoothie"],
        correct: 1,
        explainer: "Guasacaca is a Venezuelan sauce made by blending avocado with bell pepper, onion, garlic, cilantro, parsley, vinegar and oil. It is thinner and tangier than Mexican guacamole and used as a condiment."
      },
      {
        q: "Why do avocados turn brown so quickly after being cut?",
        options: ["Bacterial growth", "Oxidation of polyphenols by an enzyme", "Loss of water", "Reaction with light"],
        correct: 1,
        explainer: "When you cut an avocado, the enzyme polyphenol oxidase reacts with oxygen to oxidize phenolic compounds in the flesh, creating brown melanin-like pigments. Lemon juice slows this by lowering pH."
      },
      {
        q: "Avocado farming has been criticized for which major sustainability issue?",
        options: ["High water use and deforestation", "Excessive carbon from refrigeration alone", "Soil-borne contagious viruses", "Plastic packaging only"],
        correct: 0,
        explainer: "Avocado trees are thirsty — about 230 liters of water per fruit on average — and demand has driven illegal deforestation in parts of Michoacán, Mexico, where forests are cleared for orchards."
      }
    ]
  },
  {
    slug: "quiz-sushi-101-nigiri-vs-maki",
    title: "Sushi 101: Nigiri vs Maki vs Sashimi Explained",
    description: "Stop pointing at random plates — learn the real difference between nigiri, maki, sashimi and temaki, plus the rules a true sushi chef would never break.",
    topic: "food-trends",
    emoji: "🍱",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Which of these is technically NOT sushi?",
        options: ["Nigiri", "Maki", "Sashimi", "Temaki"],
        correct: 2,
        explainer: "Sashimi is simply sliced raw fish served without rice. The word 'sushi' literally refers to vinegared rice, so by definition anything without that rice (like sashimi) is not sushi."
      },
      {
        q: "Nigiri is best described as:",
        options: ["A roll cut into 6-8 pieces", "Hand-pressed rice topped with fish or seafood", "Fish wrapped in seaweed cones", "Pickled fish over salad"],
        correct: 1,
        explainer: "Nigiri is an oval mound of seasoned rice formed by hand and topped with a slice of fish, seafood or egg, often with a tiny dab of wasabi between rice and topping."
      },
      {
        q: "The 'inside-out' California-style roll where rice is on the outside is called:",
        options: ["Hosomaki", "Futomaki", "Uramaki", "Temaki"],
        correct: 2,
        explainer: "Uramaki ('inside-out roll') was popularized in Los Angeles in the 1960s-70s, partly because American diners initially disliked the look of nori on the outside. The California roll is the classic example."
      },
      {
        q: "What does the word 'wasabi' refer to authentically?",
        options: ["Horseradish dyed green", "A rhizome from the Wasabia japonica plant", "Powdered mustard seed", "Crushed jalapeño paste"],
        correct: 1,
        explainer: "Real wasabi is the grated rhizome of Wasabia japonica, a Japanese plant that is notoriously hard to grow. Most 'wasabi' served in restaurants is dyed horseradish paste with mustard and green coloring."
      },
      {
        q: "Why is sushi rice seasoned with vinegar, sugar and salt?",
        options: ["For color", "It preserved fish historically and adds flavor", "To make it sticky", "To soften the rice"],
        correct: 1,
        explainer: "Sushi originated as 'narezushi' — fish fermented in salted rice for months. The vinegar in modern shari mimics that tangy preservation flavor and slows bacterial growth on raw fish."
      },
      {
        q: "Which fish is considered the most prized at high-end sushi auctions?",
        options: ["Salmon", "Bluefin tuna belly (otoro)", "Eel", "Yellowtail"],
        correct: 1,
        explainer: "Otoro, the fatty belly of bluefin tuna, is the most expensive cut. A single bluefin tuna sold for over $3 million at the Toyosu market in Tokyo in 2019."
      },
      {
        q: "What is the traditional rule about dipping nigiri in soy sauce?",
        options: ["Soak the rice side", "Dip the fish side, not the rice", "Mix soy with wasabi first", "Pour soy over the whole piece"],
        correct: 1,
        explainer: "You should flip nigiri and lightly touch only the fish side in soy. Dipping the rice causes it to fall apart and soak up too much salt, overpowering the fish."
      },
      {
        q: "Salmon nigiri was actually introduced to Japan by which country?",
        options: ["United States", "Norway", "Canada", "Russia"],
        correct: 1,
        explainer: "Norwegian Atlantic salmon was pushed into Japan in the 1980s through a marketing campaign called 'Project Japan'. Before that, Japanese chefs avoided raw Pacific salmon due to parasite risk."
      },
      {
        q: "Gari (the pink pickled ginger) is meant to be:",
        options: ["A topping for sushi", "A palate cleanser between pieces", "Mixed with soy sauce", "Eaten with chopsticks while chewing"],
        correct: 1,
        explainer: "Gari is meant to be eaten between different pieces of sushi to reset your palate. It is not a topping, and traditional sushi etiquette frowns on piling it onto each piece."
      },
      {
        q: "Temaki is best described as:",
        options: ["A pressed sushi block", "A hand roll in a cone of nori", "A small soup", "A fried sushi roll"],
        correct: 1,
        explainer: "Temaki is a hand-rolled cone of nori filled with rice, fish and vegetables. It is meant to be eaten immediately with your hands, before the seaweed loses its crispness."
      }
    ]
  },
  {
    slug: "quiz-poke-bowl-hawaiian-roots",
    title: "Poke Bowls: Hawaiian Roots, Global Hype",
    description: "Before the Instagram bowls, there was a Hawaiian fisherman snack. Test your knowledge of real poke vs the modern grain-bowl spin-off.",
    topic: "food-trends",
    emoji: "🍣",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "What does the Hawaiian word 'poke' (pronounced poh-KAY) literally mean?",
        options: ["To eat fast", "To slice or cut crosswise", "To marinate", "Fish in a bowl"],
        correct: 1,
        explainer: "Poke means 'to slice or cut crosswise into pieces' in Hawaiian. It originally referred simply to chunks of raw reef fish seasoned with sea salt, seaweed and kukui nut."
      },
      {
        q: "What was the original traditional fish used in Hawaiian poke?",
        options: ["Salmon", "Ahi (yellowfin tuna)", "Tilapia", "Cod"],
        correct: 1,
        explainer: "Classic Hawaiian poke used freshly caught ahi (yellowfin tuna), seasoned simply with Hawaiian sea salt, inamona (roasted candlenut), seaweed (limu) and chili. The salmon and avocado-loaded version is a mainland US invention."
      },
      {
        q: "Which ingredient was added to poke only AFTER Japanese immigrants arrived in Hawaii?",
        options: ["Sea salt", "Soy sauce", "Limu seaweed", "Kukui nut"],
        correct: 1,
        explainer: "Soy sauce (shoyu), sesame oil and green onions came to Hawaiian poke through Japanese immigrants in the late 19th and 20th centuries. The shoyu-style poke we see today is actually a fusion dish."
      },
      {
        q: "What is 'inamona' in traditional poke?",
        options: ["Pickled ginger", "Roasted, crushed candlenut", "Fried garlic", "Fermented soybean"],
        correct: 1,
        explainer: "Inamona is roasted kukui (candlenut) crushed with sea salt. It gives traditional poke a nutty, slightly smoky depth. It is still hard to find outside Hawaii, which is why most mainland poke skips it."
      },
      {
        q: "What is 'limu' in classic poke?",
        options: ["A spicy sauce", "Hawaiian seaweed", "A type of rice", "Pickled mango"],
        correct: 1,
        explainer: "Limu refers to edible seaweed used in Hawaiian cuisine, especially limu kohu, which has a peppery, slightly bitter flavor. It was a defining element of pre-fusion Hawaiian poke."
      },
      {
        q: "Roughly when did poke bowls explode on the US mainland as a fast-casual trend?",
        options: ["Early 2000s", "2014-2016", "2010", "2020"],
        correct: 1,
        explainer: "Poke chains like Sweetfin, Pokeworks and Wisefish opened around 2014-2016, riding the wave of healthier fast-casual concepts after Chipotle. It was Eater's most-covered trend in 2016."
      },
      {
        q: "Traditional Hawaiian poke was usually served:",
        options: ["Over white rice", "As a small standalone snack (pupu)", "With avocado and mango", "In a tortilla"],
        correct: 1,
        explainer: "Authentic poke was a snack or appetizer (pupu) eaten on its own, not piled over a bowl of rice. The 'poke bowl' format is a mainland US adaptation popularized by health-focused chains."
      },
      {
        q: "Why is sushi-grade tuna safer to eat raw than typical supermarket tuna?",
        options: ["It is cooked briefly", "It is flash-frozen at low temps to kill parasites", "It is treated with vinegar", "It is genetically modified"],
        correct: 1,
        explainer: "Sushi-grade fish is flash-frozen at -35 °C or below for a set number of hours to kill parasites like Anisakis. This is required by FDA guidelines before serving fish raw in most US states."
      },
      {
        q: "A typical 'spicy mayo' on poke is usually a mix of:",
        options: ["Mayo + Sriracha", "Mayo + wasabi", "Mayo + soy", "Mayo + chili oil"],
        correct: 0,
        explainer: "Spicy mayo on poke and sushi is most often Japanese Kewpie mayonnaise mixed with Sriracha or other chili sauce, sometimes with a splash of sesame oil. Simple, but a flavor bomb."
      },
      {
        q: "Which ingredient is NOT traditional in Hawaiian poke?",
        options: ["Edamame", "Limu seaweed", "Sea salt", "Green onion"],
        correct: 0,
        explainer: "Edamame, mango, sweet corn and pineapple are mainland and Westernized poke-bowl add-ons. Traditional poke sticks to fish, salt, seaweed, onion, and (after fusion) shoyu and sesame."
      }
    ]
  },
  {
    slug: "quiz-ramen-styles-tonkotsu-shoyu",
    title: "Ramen Decoded: Tonkotsu, Shoyu, Shio, Miso",
    description: "Not all ramen is the same. Learn the four classic broth styles, the truth about instant noodles, and what makes a real Hakata tonkotsu legendary.",
    topic: "food-trends",
    emoji: "🍜",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Which broth is made by boiling pork bones for many hours until milky white?",
        options: ["Shoyu", "Shio", "Miso", "Tonkotsu"],
        correct: 3,
        explainer: "Tonkotsu broth is simmered for 8-20 hours, breaking pork bones, fat and collagen into a creamy, opaque emulsion. It is the signature style of Hakata in Fukuoka, southern Japan."
      },
      {
        q: "Shoyu ramen is flavored primarily with:",
        options: ["Miso paste", "Soy sauce", "Salt only", "Curry powder"],
        correct: 1,
        explainer: "Shoyu means soy sauce. Shoyu ramen typically pairs a chicken-and-fish dashi broth with a soy-based tare seasoning. Tokyo-style ramen is often shoyu-based."
      },
      {
        q: "Miso ramen originated in which Japanese city?",
        options: ["Tokyo", "Sapporo", "Kyoto", "Osaka"],
        correct: 1,
        explainer: "Miso ramen was invented in Sapporo, Hokkaido, in the 1950s at the restaurant Aji no Sanpei. Its rich, hearty broth made sense in the cold northern climate."
      },
      {
        q: "Who invented instant ramen?",
        options: ["Toyo Suisan", "Momofuku Ando in 1958", "Nissin Foods (no specific person)", "David Chang"],
        correct: 1,
        explainer: "Momofuku Ando invented instant ramen in 1958 in Osaka, launching Chikin Ramen by Nissin. He later invented Cup Noodles in 1971. Japan voted instant ramen the country's best 20th-century invention."
      },
      {
        q: "What is 'tare' in ramen?",
        options: ["A type of noodle", "The concentrated seasoning base added to broth", "A garnish", "The pork topping"],
        correct: 1,
        explainer: "Tare is the salty, flavor-packed base that sits at the bottom of the bowl before broth is poured in. It is what makes a ramen shoyu, shio, or miso — the broth itself is usually neutral dashi or bone stock."
      },
      {
        q: "Chashu, the classic ramen pork topping, is traditionally:",
        options: ["Deep fried", "Grilled over charcoal", "Braised pork belly or shoulder", "Cured for weeks"],
        correct: 2,
        explainer: "Chashu in ramen is slow-braised pork (belly or shoulder) simmered in soy, sake, mirin and sugar until fork-tender. It is unrelated to Chinese char siu BBQ, despite the name."
      },
      {
        q: "Why are ramen noodles springy and yellow?",
        options: ["Egg yolk in the dough", "Alkaline kansui mineral water", "Saffron coloring", "Bleached wheat"],
        correct: 1,
        explainer: "Kansui is an alkaline solution containing potassium and sodium carbonates. It strengthens gluten (springy bite), turns the dough yellow, and gives ramen its characteristic 'noodle' flavor distinct from pasta."
      },
      {
        q: "Tsukemen differs from regular ramen because:",
        options: ["It uses rice noodles", "Noodles are served separately and dipped in concentrated broth", "It is always cold", "There is no broth"],
        correct: 1,
        explainer: "Tsukemen is dipping ramen. Cold or room-temperature noodles are served alongside a thicker, more concentrated hot broth. It became huge in Tokyo in the 1960s thanks to Taishoken."
      },
      {
        q: "Which ramen style is famous for having ultra-thin noodles you can order replaced for free until you are full?",
        options: ["Sapporo miso", "Hakata tonkotsu", "Tokyo shoyu", "Kitakata"],
        correct: 1,
        explainer: "In Hakata-style tonkotsu shops, you can order 'kaedama' — an extra batch of noodles dropped into your remaining broth. It is a regional custom you would not see in Tokyo shoyu shops."
      },
      {
        q: "What does 'ajitama' refer to on a ramen menu?",
        options: ["Seaweed", "Soft-boiled marinated egg", "Bamboo shoots", "Green onion"],
        correct: 1,
        explainer: "Ajitama (or ajitsuke tamago) is a soft-boiled egg marinated in soy, mirin and sake for several hours so the savory flavor permeates the white. The yolk should still be jammy."
      }
    ]
  },
  {
    slug: "quiz-mexican-street-food-tacos",
    title: "Mexican Street Food: Tacos al Pastor and Elote",
    description: "Spit-grilled pork from Lebanese immigrants, corn slathered in mayo and cheese, real birria — your crash course in authentic Mexican street eats.",
    topic: "food-trends",
    emoji: "🌮",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Tacos al pastor's cooking technique was inspired by which immigrant community in Mexico?",
        options: ["Spanish", "Lebanese", "Italian", "Chinese"],
        correct: 1,
        explainer: "Tacos al pastor descend from Lebanese shawarma. Lebanese immigrants who arrived in Puebla in the 1920s-30s brought the vertical spit (trompo). Mexicans swapped lamb for marinated pork and added pineapple."
      },
      {
        q: "What is the classic garnish placed on top of an al pastor taco?",
        options: ["Slice of grilled pineapple", "Sour cream", "Avocado slice", "Pickled jalapeño"],
        correct: 0,
        explainer: "A real al pastor cart has a fresh pineapple roasting on top of the trompo. The taquero slices a thin piece of pork directly off the spit and flicks a chunk of caramelized pineapple onto the tortilla."
      },
      {
        q: "Elote is grilled corn on the cob coated in:",
        options: ["Butter and sugar", "Mayo, cotija cheese, chili and lime", "Soy sauce and sesame", "Honey and salt"],
        correct: 1,
        explainer: "Elote is grilled or boiled corn slathered with mayonnaise or crema, then rolled in crumbly cotija cheese and dusted with chili powder and lime. Esquites is the off-the-cob cup version."
      },
      {
        q: "Birria originally comes from which Mexican state?",
        options: ["Jalisco", "Oaxaca", "Yucatán", "Sonora"],
        correct: 0,
        explainer: "Birria originated in Jalisco, traditionally made with goat meat slow-cooked in a chili-rich stew. Tijuana-style birria tacos with consommé dipping became a global TikTok hit in 2019-2020."
      },
      {
        q: "What's the difference between a quesadilla and a quesabirria?",
        options: ["Quesabirria has no cheese", "Quesabirria is filled with stewed beef birria and dipped in consommé", "Quesabirria uses flour tortillas only", "There is no real difference"],
        correct: 1,
        explainer: "Quesabirria are crispy fried tacos filled with shredded birria beef and melted cheese, typically Oaxaca cheese, served with a bowl of red consommé for dipping. They went viral on Instagram around 2019."
      },
      {
        q: "Why are corn tortillas traditionally made through 'nixtamalization'?",
        options: ["For longer shelf life", "Alkaline treatment makes niacin bioavailable and improves flavor", "Just for color", "To kill bacteria"],
        correct: 1,
        explainer: "Nixtamalization soaks dried corn in an alkaline lime (calcium hydroxide) solution. It softens the grains, frees up bound niacin (preventing pellagra), and gives masa its iconic aroma and pliability."
      },
      {
        q: "Mole poblano gets its dark color and complex flavor from:",
        options: ["Black beans", "Dried chilies, chocolate, nuts and many spices", "Dark beer", "Soy and miso"],
        correct: 1,
        explainer: "Mole poblano can contain 20-30+ ingredients including ancho, pasilla and mulato chilies, dark chocolate, nuts, seeds, plantain, raisins and spices, all toasted and ground. Origin: Puebla, possibly from the 17th century."
      },
      {
        q: "Cochinita pibil is traditionally cooked:",
        options: ["Flash fried", "Slow-roasted underground wrapped in banana leaves", "Boiled in milk", "Smoked with hickory"],
        correct: 1,
        explainer: "Cochinita pibil is a Yucatecan dish of pork marinated in achiote and bitter orange, wrapped in banana leaves and buried to cook in an underground pit oven (pib). The achiote gives it that bright orange color."
      },
      {
        q: "What is a 'campechano' taco?",
        options: ["A vegetarian taco", "A mix of two meats, often suadero and chorizo", "A dessert taco", "A taco with no tortilla"],
        correct: 1,
        explainer: "A campechano taco combines two or more meats in one tortilla — most commonly thinly sliced beef suadero plus crumbled chorizo. The name comes from 'campechana,' meaning a mix or blend."
      },
      {
        q: "Which Mexico City taqueria chain made al pastor famous in the 1960s and is still iconic?",
        options: ["Taqueria El Charro", "Tacos El Huequito", "Taqueria El Califa", "Both b and c are early icons (b is older)"],
        correct: 3,
        explainer: "El Huequito, opened in 1959 near the historic center of Mexico City, is one of the original al pastor taquerías. Many credit it as a key place where the modern recipe was standardized."
      }
    ]
  },
  {
    slug: "quiz-mediterranean-diet-science",
    title: "Mediterranean Diet: What Science Actually Shows",
    description: "Olive oil, fish, vegetables, red wine in moderation — but what does the research really say? Learn the food pyramid and the famous PREDIMED study.",
    topic: "food-trends",
    emoji: "🥗",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Which fat is the foundation of the traditional Mediterranean diet?",
        options: ["Butter", "Coconut oil", "Extra virgin olive oil", "Sunflower oil"],
        correct: 2,
        explainer: "Extra virgin olive oil is the primary fat source. It is rich in monounsaturated oleic acid and polyphenols, which are linked to lower inflammation and better cardiovascular outcomes."
      },
      {
        q: "Which food group sits at the very BASE of the Mediterranean food pyramid (eaten most often)?",
        options: ["Red meat", "Fruits, vegetables, whole grains and legumes", "Cheese and yogurt", "Wine"],
        correct: 1,
        explainer: "The base of the pyramid is plant foods — vegetables, fruits, whole grains, legumes, nuts and seeds — eaten at every meal. Animal protein, red meat especially, is at the top: occasional only."
      },
      {
        q: "The famous Spanish PREDIMED trial found that the Mediterranean diet (with extra olive oil or nuts) reduced major cardiovascular events by roughly:",
        options: ["No reduction", "5%", "30%", "70%"],
        correct: 2,
        explainer: "PREDIMED (2013, re-analyzed 2018) reported about a 30% relative reduction in heart attack, stroke or cardiovascular death over 5 years in high-risk adults assigned to a Mediterranean diet supplemented with olive oil or nuts."
      },
      {
        q: "Which type of fish is most emphasized in the Mediterranean diet?",
        options: ["Tilapia", "Fatty fish (sardines, anchovies, mackerel, salmon)", "Catfish", "Bluefin tuna only"],
        correct: 1,
        explainer: "Small fatty fish like sardines, anchovies and mackerel are encouraged 2-3 times per week for their omega-3 fatty acids EPA and DHA, which support heart and brain health."
      },
      {
        q: "Red wine is allowed in moderation, defined typically as:",
        options: ["A bottle per day", "1 glass per day for women, 1-2 for men, with meals", "Only on weekends", "Unlimited if low alcohol"],
        correct: 1,
        explainer: "Traditional Mediterranean guidelines suggest up to 1 small glass of red wine per day for women and 1-2 for men, taken WITH meals. Recent science is increasingly questioning whether any alcohol is truly beneficial."
      },
      {
        q: "Which country first attracted Ancel Keys' attention to the diet's heart benefits in the 1950s?",
        options: ["Spain", "Greece (especially Crete)", "Italy", "Lebanon"],
        correct: 1,
        explainer: "American researcher Ancel Keys studied the people of Crete after WWII and found extremely low rates of heart disease despite ~40% of calories from fat — all from olive oil. This led to the Seven Countries Study."
      },
      {
        q: "Which dairy products are favored in the Mediterranean diet?",
        options: ["Heavy cream and butter", "Yogurt and small amounts of cheese", "Skim milk only", "No dairy at all"],
        correct: 1,
        explainer: "Yogurt (especially Greek) and small portions of cheese like feta, halloumi, ricotta and parmesan are typical. Dairy is consumed in moderate amounts, not as a primary calorie source."
      },
      {
        q: "Polyphenols, abundant in olive oil and red wine, function mainly as:",
        options: ["Carbohydrates", "Antioxidants and anti-inflammatory compounds", "Hormones", "Proteins"],
        correct: 1,
        explainer: "Polyphenols (like oleocanthal in olive oil and resveratrol in red wine) are plant compounds that act as antioxidants and reduce inflammation. They are now thought to be one of the key bioactive drivers of the diet's benefits."
      },
      {
        q: "What does 'extra virgin' olive oil legally mean?",
        options: ["Mixed with refined oil", "First cold-pressed, less than 0.8% free acidity, no chemical treatment", "Pressed twice", "Light in color and calories"],
        correct: 1,
        explainer: "Extra virgin olive oil must be mechanically extracted without heat or solvents and have free acidity below 0.8%, with no organoleptic defects. It retains the most polyphenols and antioxidants."
      },
      {
        q: "Which population is the only one to score the Mediterranean diet as their official cultural heritage at UNESCO?",
        options: ["French only", "Italian only", "Spain, Italy, Greece, Morocco and others jointly", "Lebanese only"],
        correct: 2,
        explainer: "In 2010 (expanded 2013) UNESCO inscribed the Mediterranean Diet on its Intangible Cultural Heritage list, jointly representing Spain, Italy, Greece, Morocco, Portugal, Cyprus and Croatia."
      }
    ]
  },
  {
    slug: "quiz-plant-based-meat-beyond-impossible",
    title: "Plant-Based Meat: Beyond vs Impossible Science",
    description: "Heme molecules, pea protein, and the food-tech race. Test your knowledge of how Beyond Meat and Impossible Foods actually make plants taste like beef.",
    topic: "food-trends",
    emoji: "🍔",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "What is the main protein source in a Beyond Burger?",
        options: ["Soy", "Pea protein isolate", "Wheat gluten", "Mushroom"],
        correct: 1,
        explainer: "The Beyond Burger uses pea protein isolate as its primary protein, along with rice and mung bean protein. Beyond originally chose pea to be soy-free and gluten-free."
      },
      {
        q: "Impossible Foods' signature ingredient that gives a 'bleeding' look is:",
        options: ["Beetroot juice", "Soy leghemoglobin (heme)", "Red yeast extract", "Tomato paste"],
        correct: 1,
        explainer: "Impossible Foods uses soy leghemoglobin, an iron-carrying heme protein produced by genetically engineered yeast. Heme is what gives meat its 'meaty' flavor and pink color when raw."
      },
      {
        q: "Which oil is used in Impossible Burgers to mimic meat fat?",
        options: ["Coconut and sunflower oil", "Palm oil only", "Olive oil", "Avocado oil"],
        correct: 0,
        explainer: "Impossible uses coconut oil and sunflower oil to imitate the marbled fat of beef. Coconut oil is solid at room temperature, similar to beef tallow, so it 'melts' on the grill like real meat."
      },
      {
        q: "Compared to a 4 oz beef patty, a Beyond Burger has roughly:",
        options: ["Half the saturated fat and no cholesterol", "Twice the saturated fat", "No protein", "Five times more salt"],
        correct: 0,
        explainer: "A Beyond Burger has about 5g of saturated fat versus around 9g in 80/20 beef, and 0 mg of cholesterol versus 80 mg in beef. However, it has more sodium (around 390 mg) than plain beef."
      },
      {
        q: "Heme in meat is essentially:",
        options: ["A vitamin", "An iron-containing molecule found in hemoglobin and myoglobin", "A starch", "A fat-soluble pigment unrelated to iron"],
        correct: 1,
        explainer: "Heme is the iron-containing porphyrin ring found in hemoglobin (blood) and myoglobin (muscle). It catalyzes browning reactions and is largely responsible for the rich savory flavor of cooked meat."
      },
      {
        q: "Why is plant-based meat usually classified as 'ultra-processed' food?",
        options: ["It contains refined ingredients reassembled with industrial processing", "It is irradiated", "It has more than 5 ingredients always", "It is freeze-dried"],
        correct: 0,
        explainer: "Even when ingredients are plant-derived, plant-based burgers undergo high-pressure protein extrusion, oil emulsification and binder addition. By NOVA classification, that qualifies them as ultra-processed."
      },
      {
        q: "Which big chain first launched a national Impossible Whopper in the US in 2019?",
        options: ["McDonald's", "Burger King", "Wendy's", "Carl's Jr."],
        correct: 1,
        explainer: "Burger King launched the Impossible Whopper nationwide in August 2019, after a successful St. Louis pilot. It was the first major fast-food rollout of an Impossible product."
      },
      {
        q: "Which major chain partnered with Beyond Meat for a fried chicken-style nugget launch in 2021?",
        options: ["Chick-fil-A", "KFC", "Popeyes", "Chipotle"],
        correct: 1,
        explainer: "KFC and Beyond Meat introduced Beyond Fried Chicken nuggets in early 2022 after several pilot tests starting in 2019. It marked one of the largest fast-food plant-based protein rollouts."
      },
      {
        q: "Roughly how much do plant-based meats reduce greenhouse gas emissions compared to beef per kg?",
        options: ["No reduction", "About 50%", "Around 90%", "They emit more than beef"],
        correct: 2,
        explainer: "Studies (including peer-reviewed life-cycle analyses by Beyond and independent researchers) report ~90% lower greenhouse gas emissions per kg of plant-based patty versus US beef, plus large reductions in land and water use."
      },
      {
        q: "Plant-based meat sales in the US grew rapidly until ~2020 then:",
        options: ["Tripled", "Plateaued and partially declined due to price and taste fatigue", "Were banned", "Replaced beef entirely"],
        correct: 1,
        explainer: "After explosive 2018-2020 growth, US retail sales of plant-based meat plateaued and declined in 2022-2024, blamed on high prices, ultra-processed perception and inflation. Both Beyond and Impossible have laid off staff and refocused."
      }
    ]
  },
  {
    slug: "quiz-specialty-coffee-cold-brew",
    title: "Specialty Coffee: Cold Brew, Nitro and Pour-Over",
    description: "Why cold brew tastes smoother, how nitro coffee gets that creamy head, and what 'third wave' coffee really means. Brew up your knowledge.",
    topic: "food-trends",
    emoji: "☕",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Cold brew is brewed by:",
        options: ["Brewing hot coffee then chilling it", "Steeping coarse grounds in cold water for 12-24 hours", "Pulling espresso over ice", "Freeze-distilling hot coffee"],
        correct: 1,
        explainer: "Cold brew is made by steeping coarse coffee grounds in cold or room-temperature water for 12-24 hours, then filtering. There's no heat, which makes it different from iced coffee (which is hot-brewed and then cooled)."
      },
      {
        q: "Cold brew tastes smoother and less bitter than hot coffee mainly because:",
        options: ["It has less caffeine", "Cold water extracts fewer bitter acids and oils", "It is sweetened", "It uses different beans"],
        correct: 1,
        explainer: "Hot water extracts more bitter chlorogenic acids and aromatic oils. Cold extraction is slower and pulls more soluble sugars and less acidity, giving a naturally sweeter, smoother cup."
      },
      {
        q: "Nitro coffee gets its creamy head from:",
        options: ["Dairy milk", "Nitrogen gas pushed through a stout faucet", "CO2 like a soda", "Whipped cream"],
        correct: 1,
        explainer: "Nitro coffee is cold brew charged with nitrogen gas and dispensed through a pressurized stout-style faucet with a restrictor plate. The tiny nitrogen bubbles create the velvety cascading head, just like Guinness."
      },
      {
        q: "What is meant by 'third wave coffee'?",
        options: ["A type of espresso machine", "A movement treating coffee as artisanal, like wine, with single-origin transparency", "A subscription model", "Decaf coffee"],
        correct: 1,
        explainer: "The third wave (named by Trish Rothgeb in 2002) treats coffee as a craft product. It emphasizes single-origin beans, direct trade, light roasting and brewing methods that highlight terroir."
      },
      {
        q: "Which brewing method drips hot water slowly through coffee grounds in a paper filter?",
        options: ["Aeropress", "Pour-over (V60, Chemex)", "Moka pot", "French press"],
        correct: 1,
        explainer: "Pour-over methods like the Hario V60 or Chemex pour hot water in a controlled spiral over a paper-filtered cone of grounds. The result is a clean, bright cup that highlights origin flavor notes."
      },
      {
        q: "Espresso is defined by which key parameters?",
        options: ["Boiling water poured on grounds", "About 9 bars of pressure pushing 90-95 °C water through fine grounds in 25-30 seconds", "Cold extraction with pressure", "Steaming milk only"],
        correct: 1,
        explainer: "A traditional shot of espresso pushes water at 9 bars of pressure through about 18-20 g of finely ground coffee at 90-95 °C, extracting in 25-30 seconds. The result is a concentrated shot with a layer of crema on top."
      },
      {
        q: "Crema on espresso is:",
        options: ["Milk foam", "Emulsified oils and CO2 from fresh beans", "Whipped cream added after", "Espresso powder"],
        correct: 1,
        explainer: "Crema is a thin layer of emulsified oils and dissolved CO2 created by high pressure forcing water through fresh, well-roasted coffee. Lack of crema usually means stale beans or wrong grind."
      },
      {
        q: "Arabica beans differ from Robusta beans mainly because Arabica:",
        options: ["Has more caffeine", "Has less caffeine and more nuanced flavor", "Grows at sea level only", "Is always dark roasted"],
        correct: 1,
        explainer: "Arabica has roughly half the caffeine of Robusta (~1.5% vs ~2.7%) and a more complex, fruity, sweeter flavor. Robusta is hardier, cheaper, more bitter and is often used in commercial espresso blends."
      },
      {
        q: "Which dalgona-style coffee went viral on TikTok in 2020?",
        options: ["Whipped instant coffee + sugar + hot water over milk", "Cold brew with maple syrup", "Espresso tonic", "Iced flat white"],
        correct: 0,
        explainer: "Dalgona coffee is whipped instant coffee, sugar and hot water beaten until it forms a fluffy caramel-colored foam, then spooned over cold milk. It exploded on TikTok in spring 2020 during lockdown."
      },
      {
        q: "Roughly how much caffeine is in a 16 oz cold brew compared to a typical 16 oz iced coffee?",
        options: ["Half", "About the same", "Often 2-3 times more", "Five times less"],
        correct: 2,
        explainer: "Cold brew is brewed as a strong concentrate, so even when diluted, a 16 oz cold brew often contains 200-300 mg of caffeine versus around 165 mg in a similar size iced coffee. The smoothness is deceiving."
      }
    ]
  },
  {
    slug: "quiz-food-tiktok-viral-trends",
    title: "Food TikTok: Dalgona, Feta Pasta and Butter Boards",
    description: "From cloud bread to baked feta pasta to butter boards — test your knowledge of the food trends that broke the algorithm and emptied the grocery shelves.",
    topic: "food-trends",
    emoji: "🥯",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Baked feta pasta went so viral in 2021 that:",
        options: ["TikTok was banned in Finland", "Stores in Finland and the US ran out of feta cheese", "Pasta was renamed", "It became a Michelin dish"],
        correct: 1,
        explainer: "The TikTok-viral 'uunifetapasta' (oven-baked feta with tomatoes and pasta) made grocery stores in Finland and parts of the US sell out of feta cheese in early 2021. The original recipe is from Finnish blogger Jenni Häyrinen."
      },
      {
        q: "Cloud bread, popular in 2020, gets its fluffy texture from:",
        options: ["Yeast", "Beaten egg whites and cornstarch", "Self-rising flour", "Baking soda and vinegar"],
        correct: 1,
        explainer: "Cloud bread is made by whipping egg whites with sugar and cornstarch into stiff peaks and baking the meringue-like batter. It is essentially a soft, sweet cloud-shaped pavlova-meringue hybrid."
      },
      {
        q: "Who is generally credited with popularizing butter boards on TikTok in 2022?",
        options: ["Joshua Weissman", "Justine Doiron (Justine Snacks)", "Emily Mariko", "Gordon Ramsay"],
        correct: 1,
        explainer: "Recipe creator Justine Doiron posted a butter board video in September 2022 that exploded the trend, although chef Joshua McFadden originally proposed butter boards in his 2017 cookbook 'Six Seasons.'"
      },
      {
        q: "What did Emily Mariko's viral salmon bowl include?",
        options: ["Raw tuna and avocado", "Leftover salmon with rice, ice cube, soy sauce and Kewpie mayo", "Smoked salmon and bagel", "Salmon teriyaki and noodles"],
        correct: 1,
        explainer: "Emily Mariko's October 2021 viral video showed leftover salmon mashed onto rice with an ice cube to steam-reheat it, then drizzled with soy sauce and Kewpie mayo. It racked up tens of millions of views."
      },
      {
        q: "Dalgona coffee is named after:",
        options: ["A TikTok creator", "A Korean honeycomb candy with similar color", "A Japanese coffee shop", "A coffee bean"],
        correct: 1,
        explainer: "Dalgona is a Korean honeycomb toffee. The whipped coffee got the name because its caramel color reminded actor Jung Il-woo of the candy when he tried it in Macau. He featured it on a Korean TV show, then it went viral on TikTok in 2020."
      },
      {
        q: "Which slimy, viral, alleged 'miracle weight-loss' drink went viral in 2023?",
        options: ["Pickle juice", "Chia seed water with lemon (internal shower)", "Apple cider vinegar soda", "Lettuce water"],
        correct: 1,
        explainer: "The 'internal shower' (a tablespoon of chia seeds plus lemon juice in a glass of water) went viral in 2023 as a constipation remedy. Chia is high in fiber, but it is no miracle — and overdoing it can cause discomfort or blockages."
      },
      {
        q: "TikTok's grinder salad went viral by chopping ingredients on what?",
        options: ["A bagel", "A whole sandwich, cut in a deli grinder style", "A baking sheet", "A wooden board with a knife"],
        correct: 3,
        explainer: "TikTok's grinder salad sandwich tossed shredded lettuce with red wine vinegar, mayo, pepperoncini and garlic on a board, piled it over deli meats and cheese on a toasted hoagie roll, and went mega-viral in 2022."
      },
      {
        q: "Pasta chips, another TikTok trend, are made by:",
        options: ["Frying raw pasta", "Boiling pasta, tossing in oil and parmesan, then air-frying until crispy", "Baking lasagna sheets with salt", "Microwaving spaghetti"],
        correct: 1,
        explainer: "TikTok-style pasta chips boil bowtie or penne pasta, toss with olive oil, parmesan and seasoning, then air-fry at around 200 °C / 400 °F until crunchy. They became a viral snack hack in 2021."
      },
      {
        q: "Which seemingly bizarre 'girl dinner' trend went viral in 2023?",
        options: ["Eating only desserts", "Plates of random snacks, charcuterie-style as a meal", "Eating breakfast at midnight", "Skipping dinner entirely"],
        correct: 1,
        explainer: "Girl dinner went viral in summer 2023 with TikTokers posting plates of pickles, cheese, bread, fruit and other random bites as a low-effort 'meal.' It echoed older 'snack plate' culture and sparked health debate."
      },
      {
        q: "The 'sleepy girl mocktail' trend in 2023 mainly involved:",
        options: ["Magnesium powder + tart cherry juice + sparkling water before bed", "Chamomile and milk", "Hot toddy without alcohol", "Lavender lemonade"],
        correct: 0,
        explainer: "The sleepy girl mocktail combines magnesium glycinate powder, tart cherry juice and prebiotic soda or sparkling water. Tart cherries contain melatonin and magnesium is linked to relaxation, though scientific evidence for the combo is mixed."
      }
    ]
  },
  {
    slug: "quiz-spicy-chicken-sandwich-wars",
    title: "Chicken Sandwich Wars: Popeyes vs Chick-fil-A",
    description: "How a single 2019 tweet sparked the great chicken sandwich war, why Nashville hot is so brutal, and the truth about your favorite spicy combos.",
    topic: "food-trends",
    emoji: "🥪",
    lang: "en",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "When did Popeyes launch the chicken sandwich that started 'The Chicken Sandwich Wars'?",
        options: ["2015", "August 2019", "January 2021", "2018"],
        correct: 1,
        explainer: "Popeyes launched its Classic Chicken Sandwich on August 12, 2019. After a viral Twitter spat with Chick-fil-A, demand was so high that Popeyes sold out nationwide within about two weeks."
      },
      {
        q: "Which chain held the dominant chicken sandwich throne BEFORE 2019?",
        options: ["KFC", "Chick-fil-A", "Wendy's", "Bojangles"],
        correct: 1,
        explainer: "Chick-fil-A's pressure-fried, pickle-topped chicken sandwich on a buttered bun had been the gold standard for decades. The Popeyes launch directly targeted it and sparked the 'wars' on social media."
      },
      {
        q: "What is the key style of Nashville hot chicken?",
        options: ["Sweet and tangy glaze", "Fried chicken brushed with a paste of cayenne, brown sugar and lard", "Smoked over hickory", "Grilled with chili rub"],
        correct: 1,
        explainer: "Nashville hot chicken is fried, then brushed with a paste of cayenne, brown sugar, lard or oil and spices. Originated at Prince's Hot Chicken in Nashville, the result is a fiery, glossy red crust served on white bread with pickles."
      },
      {
        q: "Why are pickles served on classic Nashville hot chicken and fried chicken sandwiches?",
        options: ["Just for color", "Acidic vinegar cuts the fat and balances the heat", "They keep the chicken moist", "Tradition only"],
        correct: 1,
        explainer: "Acidic pickle slices cut through the rich, greasy fried coating and provide contrast to spicy flavors. The cool vinegar also tamps down the burn of cayenne-based hot rubs."
      },
      {
        q: "Chick-fil-A's chicken is cooked using:",
        options: ["Deep frying in canola oil", "Pressure frying in fully refined peanut oil", "Air frying", "Grilling on a flat top"],
        correct: 1,
        explainer: "Chick-fil-A pressure-fries its sandwich filets in fully refined peanut oil, a process founder Truett Cathy adopted after experimenting with pressure cookers in the 1960s. Peanut oil's high smoke point gives the crispy texture."
      },
      {
        q: "Why is Chick-fil-A always closed on Sundays?",
        options: ["Saves electricity", "Founder Truett Cathy's religious observance", "Staffing reasons", "Maintenance day"],
        correct: 1,
        explainer: "Chick-fil-A has been closed on Sundays since founder S. Truett Cathy opened his first restaurant in 1946. A devout Southern Baptist, he wanted employees to have a day for rest and worship."
      },
      {
        q: "McDonald's launched its Crispy Chicken Sandwich line to compete in:",
        options: ["2010", "February 2021", "2018", "2023"],
        correct: 1,
        explainer: "McDonald's introduced its new line of crispy, deluxe and spicy chicken sandwiches in the US in February 2021, partly as a direct response to the success of Popeyes' and Chick-fil-A's offerings."
      },
      {
        q: "Which spice gives most spicy sauces their burn?",
        options: ["Allicin", "Capsaicin from chili peppers", "Piperine from black pepper", "Curcumin from turmeric"],
        correct: 1,
        explainer: "Capsaicin is the active compound in chili peppers that activates TRPV1 heat receptors in the mouth. It is what makes hot sauces, Nashville hot rubs, and spicy chicken sandwiches feel hot, even though no actual temperature change happens."
      },
      {
        q: "Drinks high in what tend to soothe spicy heat best?",
        options: ["Water", "Soda", "Milk fat (casein protein)", "Beer"],
        correct: 2,
        explainer: "Capsaicin is oil-soluble, so water mostly spreads it around. Whole milk and yogurt work better because casein protein binds capsaicin and washes it off pain receptors."
      },
      {
        q: "The 'Da Bomb' hot sauce, infamous on Hot Ones, scores roughly:",
        options: ["10,000 SHU", "135,000 SHU", "2 million SHU", "16 million SHU"],
        correct: 2,
        explainer: "Da Bomb Beyond Insanity clocks in around 135,600 Scoville Units. Hot Ones gets higher with sauces around 2 million SHU. For reference, jalapeño is ~5,000 SHU, habanero ~250,000, pure capsaicin 16 million."
      }
    ]
  }
];
