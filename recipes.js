/* ============================================
   ANONGLUTO? - Filipino Recipe Finder
   recipes.js — Recipe Database + JS Logic
   Group: Abad, Aguda, Calvo, Matibag, Pomarejos
   CpET 245 — Multimedia System
   ============================================ */

// ============================================
// ANSWER: let nr = 2;
// console.log(nr++); → prints 2 (post-increment: returns THEN increments)
// console.log(nr);   → prints 3 (nr is now 3)
// ============================================

// ============================================
// RECIPE DATABASE — 30 Recipes
// ============================================
const recipes = [

  // ── MANOK ──────────────────────────────────

  {
    id: 1,
    name: "Adobong Manok",
    category: "Manok",
    description: "Classic Filipino chicken braised in soy sauce, vinegar, and garlic. The most iconic Filipino dish.",
    ingredients: ["manok", "toyo", "suka", "bawang", "sibuyas", "paminta", "mantika"],
    ingredientDetails: ["1 kg chicken, cut into pieces", "1/2 cup soy sauce", "1/3 cup vinegar", "6 cloves garlic, crushed", "1 onion, sliced", "1 tsp black pepper", "3 tbsp cooking oil", "3 bay leaves"],
    instructions: [
      "Marinate chicken in soy sauce, vinegar, garlic, and pepper for at least 30 minutes.",
      "Heat oil in a pan over medium-high heat. Saute onions until soft.",
      "Add marinated chicken. Sear until lightly browned on all sides.",
      "Pour in the marinade. Add bay leaves.",
      "Bring to a boil, then lower heat. Simmer for 30-40 minutes.",
      "Adjust seasoning with salt or a pinch of sugar.",
      "Serve hot with steamed rice."
    ],
    cookingTime: 50,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/adobong manok.jpg",
    tags: ["classic", "popular", "stew"]
  },

  {
    id: 2,
    name: "Tinolang Manok",
    category: "Manok",
    description: "Comforting chicken soup with ginger, papaya, and malunggay. Perfect for rainy days.",
    ingredients: ["manok", "luya", "sibuyas", "bawang", "patis", "mantika"],
    ingredientDetails: ["1 kg chicken", "2 thumbs ginger, sliced", "1 onion", "4 cloves garlic", "2 tbsp fish sauce", "2 tbsp cooking oil", "Sayote or green papaya", "Malunggay or chili leaves"],
    instructions: [
      "Saute ginger, garlic, and onions in oil until fragrant.",
      "Add chicken pieces. Cook until lightly browned.",
      "Add fish sauce. Stir and cook for 2 minutes.",
      "Pour in water (about 4 cups). Bring to a boil.",
      "Simmer for 20 minutes. Skim foam if needed.",
      "Add sayote/papaya. Cook until tender, about 8 minutes.",
      "Add malunggay leaves. Season and serve hot."
    ],
    cookingTime: 40,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/tinolang manok.jpg",
    tags: ["soup", "healthy", "comfort"]
  },

  {
    id: 3,
    name: "Bistek na Manok",
    category: "Manok",
    description: "Chicken marinated in calamansi and soy sauce, pan-fried with caramelized onions.",
    ingredients: ["manok", "toyo", "calamansi", "sibuyas", "bawang", "paminta", "mantika"],
    ingredientDetails: ["500g chicken breast, sliced thin", "1/4 cup soy sauce", "1/4 cup calamansi juice", "2 onions, sliced into rings", "4 cloves garlic", "1 tsp pepper", "3 tbsp oil"],
    instructions: [
      "Marinate chicken in calamansi, soy sauce, and pepper for 1 hour.",
      "Heat oil in a pan. Pan-fry chicken until golden. Set aside.",
      "In the same pan, saute garlic then onion rings until caramelized.",
      "Pour remaining marinade. Simmer for 2 minutes.",
      "Return chicken to pan. Mix with sauce.",
      "Cook 2 more minutes. Serve hot."
    ],
    cookingTime: 35,
    servings: 3,
    difficulty: "Katamtaman",
    image: "images/recipe/bistek na manok.jpg",
    tags: ["pan-fried", "citrus", "quick"]
  },

  {
    id: 4,
    name: "Arroz Caldo",
    category: "Manok",
    description: "Filipino chicken rice porridge with ginger, garlic, and calamansi. Great when sick.",
    ingredients: ["manok", "luya", "bawang", "sibuyas", "patis", "mantika", "calamansi"],
    ingredientDetails: ["500g chicken", "2 thumbs ginger", "6 cloves garlic", "1 onion", "2 tbsp fish sauce", "2 tbsp oil", "1 cup glutinous rice", "Calamansi for serving"],
    instructions: [
      "Saute garlic, ginger, and onions in oil until fragrant.",
      "Add chicken pieces. Cook until slightly browned.",
      "Add glutinous rice. Toast for 2 minutes, stirring.",
      "Pour in 6 cups of water. Bring to a boil.",
      "Simmer for 25-30 minutes, stirring occasionally.",
      "Season with fish sauce and pepper.",
      "Serve with calamansi, fried garlic, and boiled egg."
    ],
    cookingTime: 50,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/arroz caldo.jpg",
    tags: ["porridge", "comfort", "sick-day"]
  },

  {
    id: 5,
    name: "Kalderetang Manok",
    category: "Manok",
    description: "Spanish-inspired chicken stew with tomato sauce, potatoes, and bell peppers.",
    ingredients: ["manok", "kamatis", "patatas", "sibuyas", "bawang", "mantika", "paminta"],
    ingredientDetails: ["1 kg chicken", "1 cup tomato sauce", "2 potatoes, cubed", "1 carrot, cubed", "1 onion", "4 cloves garlic", "3 tbsp oil", "Bell peppers"],
    instructions: [
      "Saute garlic and onions until fragrant.",
      "Add chicken. Brown on all sides.",
      "Add tomato sauce and 1 cup water. Bring to a boil.",
      "Add potatoes and carrots. Simmer for 20 minutes.",
      "Add bell peppers. Season with salt, pepper, and sugar.",
      "Simmer until vegetables are tender.",
      "Serve hot with rice."
    ],
    cookingTime: 55,
    servings: 5,
    difficulty: "Katamtaman",
    image: "images/recipe/kalderetang manok.jpg",
    tags: ["stew", "spanish", "hearty"]
  },

  {
    id: 6,
    name: "Chicken Sotanghon Soup",
    category: "Manok",
    description: "Clear chicken soup with sotanghon noodles and vegetables. Light and filling.",
    ingredients: ["manok", "bawang", "sibuyas", "patis", "mantika"],
    ingredientDetails: ["500g chicken", "100g sotanghon noodles, soaked", "4 cloves garlic", "1 onion", "2 tbsp fish sauce", "2 tbsp oil", "Celery or spring onions"],
    instructions: [
      "Boil chicken in water with onion until tender. Shred chicken.",
      "Saute garlic and onion in oil.",
      "Add shredded chicken and fish sauce.",
      "Pour chicken broth (from boiling). Bring to a boil.",
      "Add soaked sotanghon noodles. Cook 3-5 minutes.",
      "Season with salt and pepper.",
      "Top with spring onions. Serve hot."
    ],
    cookingTime: 40,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/chicken sotanghon soup.jpg",
    tags: ["soup", "noodles", "light"]
  },

  // ── BABOY ──────────────────────────────────

  {
    id: 7,
    name: "Sinigang na Baboy",
    category: "Baboy",
    description: "Sour pork soup with tamarind broth and mixed vegetables. The national soup.",
    ingredients: ["baboy", "kamatis", "sibuyas", "patis", "bawang"],
    ingredientDetails: ["500g pork belly or ribs", "2 tomatoes", "1 onion", "2 tbsp fish sauce", "4 cloves garlic", "1 packet sinigang mix", "Kangkong, sitaw, or radish"],
    instructions: [
      "Boil pork in water until tender, about 30-40 minutes. Skim foam.",
      "Add tomatoes and onions. Simmer 10 minutes.",
      "Add sinigang mix. Stir well.",
      "Add harder vegetables first (radish, sitaw).",
      "Season with fish sauce and pepper.",
      "Add kangkong last. Cook 1-2 minutes only.",
      "Serve hot with rice and patis on the side."
    ],
    cookingTime: 60,
    servings: 4,
    difficulty: "Katamtaman",
    image: "images/recipe/sinigang na baboy.jpg",
    tags: ["soup", "sour", "comfort"]
  },

  {
    id: 8,
    name: "Lechon Kawali",
    category: "Baboy",
    description: "Crispy deep-fried pork belly with golden crackling skin. Party favorite.",
    ingredients: ["baboy", "bawang", "paminta", "asin", "mantika"],
    ingredientDetails: ["1 kg pork belly", "6 cloves garlic", "1 tbsp peppercorns", "1 tbsp salt", "Oil for deep frying", "3 bay leaves"],
    instructions: [
      "Boil pork belly with garlic, bay leaves, peppercorns, and salt for 45 minutes.",
      "Drain and let cool completely. Pat skin very dry.",
      "Refrigerate uncovered for 2 hours or overnight.",
      "Heat oil to 350°F/180°C in a deep pan.",
      "Deep fry pork skin-side down for 15 minutes.",
      "Flip and fry other side for 10 minutes until crispy.",
      "Drain, chop, and serve with lechon sauce."
    ],
    cookingTime: 90,
    servings: 4,
    difficulty: "Mahirap",
    image: "images/recipe/lechong kawali.jpg",
    tags: ["fried", "crispy", "party"]
  },

  {
    id: 9,
    name: "Pork Menudo",
    category: "Baboy",
    description: "Classic Filipino pork stew with potatoes, carrots, and tomato sauce.",
    ingredients: ["baboy", "kamatis", "patatas", "sibuyas", "bawang", "mantika", "paminta"],
    ingredientDetails: ["500g pork, cubed", "1 cup tomato sauce", "2 potatoes, cubed", "1 carrot, cubed", "1 onion", "4 cloves garlic", "3 tbsp oil"],
    instructions: [
      "Saute garlic and onions.",
      "Add pork. Brown on all sides.",
      "Add tomato sauce and 1 cup water. Simmer 20 minutes.",
      "Add potatoes and carrots. Cook until tender.",
      "Add bell peppers and raisins if available.",
      "Season with salt and pepper.",
      "Simmer 10 more minutes. Serve."
    ],
    cookingTime: 50,
    servings: 5,
    difficulty: "Katamtaman",
    image: "images/recipe/pork menudo.jpg",
    tags: ["stew", "classic", "hearty"]
  },

  {
    id: 10,
    name: "Pork Adobo",
    category: "Baboy",
    description: "Tender pork braised in soy sauce and vinegar. A Filipino pantry staple.",
    ingredients: ["baboy", "toyo", "suka", "bawang", "sibuyas", "paminta", "mantika"],
    ingredientDetails: ["1 kg pork belly", "1/2 cup soy sauce", "1/3 cup vinegar", "6 cloves garlic", "1 onion", "1 tsp peppercorns", "3 tbsp oil", "Bay leaves"],
    instructions: [
      "Marinate pork in soy sauce, vinegar, and garlic for 1 hour.",
      "Saute onions in oil until soft.",
      "Add pork. Sear until browned.",
      "Pour marinade and add bay leaves.",
      "Simmer on low for 40-45 minutes until tender.",
      "Optionally fry the cooked pork for extra crispiness.",
      "Serve with steamed rice."
    ],
    cookingTime: 65,
    servings: 5,
    difficulty: "Madali",
    image: "images/recipe/pork adobo.jpg",
    tags: ["classic", "popular", "stew"]
  },

  {
    id: 11,
    name: "Sisig",
    category: "Baboy",
    description: "Sizzling chopped pork with calamansi, chili, and onions. Born in Pampanga.",
    ingredients: ["baboy", "sibuyas", "sili", "calamansi", "mantika", "paminta"],
    ingredientDetails: ["500g pork face/ears or liempo", "2 onions, minced", "3 red chili, chopped", "4 calamansi, juiced", "3 tbsp oil", "1 tsp pepper", "1 raw egg (optional)"],
    instructions: [
      "Boil pork until tender, about 1 hour.",
      "Grill or pan-fry until skin is crispy.",
      "Chop pork very finely.",
      "Heat a sizzling plate or cast iron pan with oil.",
      "Add chopped pork and minced onions. Mix.",
      "Season with calamansi juice, chili, salt, and pepper.",
      "Top with raw egg while still sizzling. Serve immediately."
    ],
    cookingTime: 80,
    servings: 3,
    difficulty: "Mahirap",
    image: "images/recipe/sisig.jpg",
    tags: ["sizzling", "pampanga", "pulutan"]
  },

  {
    id: 12,
    name: "Ginisang Baboy at Kamatis",
    category: "Baboy",
    description: "Simple sauteed pork with tomatoes and onions. Quick everyday ulam.",
    ingredients: ["baboy", "kamatis", "sibuyas", "bawang", "mantika", "asin"],
    ingredientDetails: ["300g pork, thinly sliced", "3 tomatoes, chopped", "1 onion, sliced", "4 cloves garlic", "2 tbsp oil", "Salt and pepper to taste"],
    instructions: [
      "Saute garlic and onions in oil until soft.",
      "Add pork. Cook until no longer pink.",
      "Add tomatoes. Mash slightly while cooking.",
      "Cook until tomatoes release their juice.",
      "Season with salt and pepper.",
      "Add a splash of water if too dry.",
      "Simmer 5 more minutes. Serve with rice."
    ],
    cookingTime: 20,
    servings: 3,
    difficulty: "Madali",
    image: "images/recipe/ginisang baboy at kamatis.jpg",
    tags: ["quick", "simple", "everyday"]
  },

  // ── ISDA ───────────────────────────────────

  {
    id: 13,
    name: "Paksiw na Isda",
    category: "Isda",
    description: "Fish stewed in vinegar with ginger and garlic. Simple and flavorful.",
    ingredients: ["isda", "suka", "luya", "bawang", "asin", "paminta"],
    ingredientDetails: ["500g bangus or any fish", "1 cup vinegar", "2 thumbs ginger, sliced", "4 cloves garlic", "1 tsp salt", "1 tsp pepper", "1/4 cup water"],
    instructions: [
      "Arrange fish in a single layer in a pan.",
      "Add vinegar, water, ginger, garlic, salt, and pepper.",
      "Do NOT stir — just let it be.",
      "Bring to a boil over medium heat.",
      "Lower heat. Simmer uncovered for 15-20 minutes.",
      "Add eggplant or ampalaya if available.",
      "Serve hot with rice."
    ],
    cookingTime: 30,
    servings: 3,
    difficulty: "Madali",
    image: "images/recipe/paksiw na isda.jpg",
    tags: ["stew", "sour", "simple"]
  },

  {
    id: 14,
    name: "Pritong Isda",
    category: "Isda",
    description: "Simple crispy fried fish. A Filipino pantry staple for any meal.",
    ingredients: ["isda", "asin", "mantika"],
    ingredientDetails: ["2 whole tilapia or bangus", "1 tbsp salt", "Oil for frying", "Calamansi for serving"],
    instructions: [
      "Clean and score the fish on both sides.",
      "Rub generously with salt inside and out.",
      "Pat dry with paper towels.",
      "Heat plenty of oil in a pan over high heat.",
      "Fry fish without moving for 4-5 minutes per side.",
      "Remove when golden and crispy.",
      "Serve with calamansi, vinegar dip, or rice."
    ],
    cookingTime: 15,
    servings: 2,
    difficulty: "Madali",
    image: "images/recipe/pritong isda.jpg",
    tags: ["fried", "quick", "simple"]
  },

  {
    id: 15,
    name: "Escabeche",
    category: "Isda",
    description: "Sweet and sour fried fish with colorful bell peppers and carrots.",
    ingredients: ["isda", "suka", "asukal", "kamatis", "sibuyas", "bawang", "mantika"],
    ingredientDetails: ["1 whole fish", "1/4 cup vinegar", "1/4 cup sugar", "1/2 cup tomato sauce", "1 onion", "4 cloves garlic", "Oil for frying", "Bell peppers and carrots"],
    instructions: [
      "Season and deep fry fish until golden. Set aside.",
      "Saute garlic, onion, and ginger.",
      "Add tomato sauce, vinegar, sugar, and water.",
      "Add bell peppers and carrots. Simmer until sauce thickens.",
      "Season with salt.",
      "Pour sweet-sour sauce over fried fish.",
      "Serve immediately."
    ],
    cookingTime: 40,
    servings: 4,
    difficulty: "Katamtaman",
    image: "images/recipe/escabeche.jpg",
    tags: ["sweet-sour", "fried", "colorful"]
  },

  {
    id: 16,
    name: "Inihaw na Bangus",
    category: "Isda",
    description: "Grilled milkfish stuffed with tomatoes, onions, and ginger. Classic Filipino BBQ.",
    ingredients: ["isda", "kamatis", "sibuyas", "luya", "calamansi", "asin"],
    ingredientDetails: ["1 whole bangus (milkfish)", "2 tomatoes, diced", "1 onion, diced", "2 thumbs ginger, sliced", "4 calamansi, juiced", "1 tbsp salt", "2 tbsp oil"],
    instructions: [
      "Clean bangus and make a slit along the belly.",
      "Rub salt and calamansi inside and out. Let sit 15 minutes.",
      "Stuff the belly with tomatoes, onions, and ginger.",
      "Brush with oil. Wrap in foil if preferred.",
      "Grill over medium charcoal for 15-20 minutes per side.",
      "Check if cooked through by flaking the thickest part.",
      "Serve with toyo-calamansi dipping sauce."
    ],
    cookingTime: 45,
    servings: 3,
    difficulty: "Katamtaman",
    image: "images/recipe/inihaw na bangus.jpg",
    tags: ["grilled", "healthy", "classic"]
  },

  {
    id: 17,
    name: "Sinigang na Isda",
    category: "Isda",
    description: "Sour fish soup with tamarind broth. Light, healthy, and comforting.",
    ingredients: ["isda", "kamatis", "sibuyas", "patis", "bawang"],
    ingredientDetails: ["500g fish (bangus, tilapia, or salmon)", "2 tomatoes", "1 onion", "2 tbsp fish sauce", "1 packet sinigang mix", "Kangkong or sitaw", "1 green chili"],
    instructions: [
      "Bring 4 cups water to a boil.",
      "Add tomatoes, onions, and sinigang mix.",
      "Add fish carefully. Simmer 10 minutes.",
      "Season with fish sauce.",
      "Add vegetables. Cook 3-5 minutes.",
      "Add green chili last.",
      "Serve hot with rice."
    ],
    cookingTime: 25,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/sinigang na isda.jpg",
    tags: ["soup", "sour", "healthy"]
  },

  // ── GULAY ──────────────────────────────────

  {
    id: 18,
    name: "Pinakbet",
    category: "Gulay",
    description: "Mixed vegetable stew with shrimp paste. An Ilocano classic loaded with nutrients.",
    ingredients: ["baboy", "kamatis", "sibuyas", "bawang", "bagoong", "mantika"],
    ingredientDetails: ["200g pork", "2 tomatoes", "1 onion", "4 cloves garlic", "3 tbsp shrimp paste", "3 tbsp oil", "Squash, sitaw, talong, okra, ampalaya"],
    instructions: [
      "Saute garlic and onions in oil.",
      "Add pork. Brown for 5 minutes.",
      "Add shrimp paste and tomatoes. Mash tomatoes slightly.",
      "Add harder vegetables first: squash.",
      "Add sitaw and talong. Toss gently.",
      "Add okra and ampalaya last.",
      "Cover and steam on low heat 10 minutes. Do not over-stir."
    ],
    cookingTime: 30,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/pinakbet.jpg",
    tags: ["vegetables", "ilocano", "healthy"]
  },

  {
    id: 19,
    name: "Chopsuey",
    category: "Gulay",
    description: "Stir-fried mixed vegetables with chicken or shrimp. Colorful and nutritious.",
    ingredients: ["manok", "sibuyas", "bawang", "toyo", "mantika"],
    ingredientDetails: ["200g chicken or shrimp", "1/2 cabbage", "1 carrot, sliced", "1 onion", "4 cloves garlic", "2 tbsp soy sauce", "3 tbsp oil", "Cauliflower, snow peas, bell pepper"],
    instructions: [
      "Saute garlic and onions.",
      "Add chicken or shrimp. Cook through.",
      "Add harder vegetables: carrots, cauliflower.",
      "Add cabbage, snow peas, and bell peppers.",
      "Season with soy sauce, oyster sauce, and pepper.",
      "Add quail eggs if available.",
      "Serve immediately while vegetables are crisp."
    ],
    cookingTime: 25,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/chopsuey.jpg",
    tags: ["stir-fry", "colorful", "quick"]
  },

  {
    id: 20,
    name: "Ginisang Monggo",
    category: "Gulay",
    description: "Sauteed mung beans with pork and ampalaya leaves. Classic Friday dish.",
    ingredients: ["baboy", "kamatis", "sibuyas", "bawang", "patis", "mantika"],
    ingredientDetails: ["1 cup mung beans", "100g pork", "2 tomatoes", "1 onion", "4 cloves garlic", "2 tbsp fish sauce", "3 tbsp oil", "Ampalaya leaves"],
    instructions: [
      "Boil mung beans until tender, about 30 minutes.",
      "Saute garlic, onions, and tomatoes.",
      "Add pork. Cook until browned.",
      "Pour in boiled mung beans with broth.",
      "Season with fish sauce and pepper.",
      "Add ampalaya leaves or kangkong.",
      "Simmer 5 minutes. Serve hot."
    ],
    cookingTime: 45,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/ginisang monggo.jpg",
    tags: ["beans", "friday", "healthy"]
  },

  {
    id: 21,
    name: "Tortang Talong",
    category: "Gulay",
    description: "Grilled eggplant omelette — a Filipino breakfast staple.",
    ingredients: ["talong", "itlog", "sibuyas", "bawang", "mantika", "asin"],
    ingredientDetails: ["4 eggplants", "4 eggs", "1 onion, minced", "4 cloves garlic, minced", "3 tbsp oil", "Salt and pepper"],
    instructions: [
      "Grill eggplants over open flame until charred and soft.",
      "Peel off the burnt skin. Flatten with a fork.",
      "Beat eggs. Season with salt and pepper.",
      "Dip each eggplant in beaten egg.",
      "Pan-fry in hot oil until golden on both sides.",
      "Optionally saute ground pork with garlic and onion to layer inside.",
      "Serve with tomato ketchup or rice."
    ],
    cookingTime: 30,
    servings: 4,
    difficulty: "Katamtaman",
    image: "images/recipe/tortang talong.jpg",
    tags: ["omelette", "breakfast", "quick"]
  },

  {
    id: 22,
    name: "Ginisang Repolyo",
    category: "Gulay",
    description: "Simple sauteed cabbage with ground pork. Budget-friendly and delicious.",
    ingredients: ["repolyo", "baboy", "sibuyas", "bawang", "toyo", "mantika"],
    ingredientDetails: ["1/2 head cabbage, shredded", "200g ground pork", "1 onion", "4 cloves garlic", "2 tbsp soy sauce", "3 tbsp oil"],
    instructions: [
      "Saute garlic until golden. Add onions.",
      "Add ground pork. Cook until browned.",
      "Add cabbage. Toss well.",
      "Season with soy sauce and pepper.",
      "Cook 3-5 minutes. Cabbage should still have a slight crunch.",
      "Add a splash of water if too dry.",
      "Serve immediately with rice."
    ],
    cookingTime: 20,
    servings: 3,
    difficulty: "Madali",
    image: "images/recipe/ginisang repolyo.jpg",
    tags: ["quick", "simple", "budget"]
  },

  {
    id: 23,
    name: "Ginisang Togue",
    category: "Gulay",
    description: "Sauteed bean sprouts with tofu and vegetables. Fast and healthy.",
    ingredients: ["tofu", "sibuyas", "bawang", "toyo", "mantika", "kamatis"],
    ingredientDetails: ["200g bean sprouts (togue)", "1 block tofu, cubed", "1 onion", "4 cloves garlic", "2 tbsp soy sauce", "2 tbsp oil", "1 tomato"],
    instructions: [
      "Fry tofu in oil until golden. Set aside.",
      "In the same pan, saute garlic, onion, and tomato.",
      "Add bean sprouts. Toss quickly on high heat.",
      "Add tofu back. Season with soy sauce.",
      "Cook only 2-3 minutes — don't overcook.",
      "Add carrots or bell pepper for color if available.",
      "Serve immediately."
    ],
    cookingTime: 15,
    servings: 3,
    difficulty: "Madali",
    image: "images/recipe/ginisang togue.jpg",
    tags: ["quick", "healthy", "vegetable"]
  },

  // ── ITLOG ──────────────────────────────────

  {
    id: 24,
    name: "Sinangag na Itlog",
    category: "Itlog",
    description: "Garlic fried rice with egg. The classic Filipino breakfast silog base.",
    ingredients: ["itlog", "bawang", "mantika", "asin"],
    ingredientDetails: ["3 cups leftover rice (cold)", "2 eggs", "8 cloves garlic, minced", "3 tbsp oil", "Salt and pepper"],
    instructions: [
      "Heat oil in a wok or pan on high heat.",
      "Fry garlic until golden and crispy. Set half aside.",
      "Crack eggs into remaining oil. Scramble lightly.",
      "Add cold rice. Break up clumps quickly.",
      "Toss on high heat for 3-5 minutes.",
      "Season with salt and pepper.",
      "Top with reserved crispy garlic. Serve."
    ],
    cookingTime: 10,
    servings: 2,
    difficulty: "Madali",
    image: "images/recipe/sinangag na itlog.jpg",
    tags: ["breakfast", "quick", "rice"]
  },

  {
    id: 25,
    name: "Pritong Itlog at Kamatis",
    category: "Itlog",
    description: "Fried egg with fresh tomato salad. The simplest, most satisfying Filipino meal.",
    ingredients: ["itlog", "kamatis", "sibuyas", "mantika", "asin"],
    ingredientDetails: ["2 eggs", "2 tomatoes, sliced", "1 onion, sliced", "2 tbsp oil", "Salt and bagoong or patis to taste"],
    instructions: [
      "Slice tomatoes and onions. Season with salt or bagoong. Set aside.",
      "Heat oil in a pan over medium heat.",
      "Crack eggs. Fry sunny side up or as desired.",
      "Season egg with salt.",
      "Plate the fried egg alongside the tomato-onion salad.",
      "Drizzle a bit of the tomato juice over rice.",
      "Serve with hot rice."
    ],
    cookingTime: 8,
    servings: 1,
    difficulty: "Madali",
    image: "images/recipe/pritong itlog at kamatis.jpg",
    tags: ["breakfast", "super-quick", "budget"]
  },

  {
    id: 26,
    name: "Egg Drop Soup",
    category: "Itlog",
    description: "Simple egg drop soup with vegetables. Warming, fast, and filling.",
    ingredients: ["itlog", "sibuyas", "bawang", "mantika", "asin"],
    ingredientDetails: ["3 eggs", "1 onion", "4 cloves garlic", "2 tbsp oil", "4 cups water or broth", "Salt and pepper", "Spring onions"],
    instructions: [
      "Saute garlic and onion in oil.",
      "Add water or broth. Bring to a boil.",
      "Beat eggs in a bowl.",
      "Slowly drizzle beaten eggs while stirring the soup in circles.",
      "Season with salt and pepper.",
      "Add spring onions or malunggay.",
      "Serve hot."
    ],
    cookingTime: 12,
    servings: 2,
    difficulty: "Madali",
    image: "images/recipe/egg drop soup.jpg",
    tags: ["soup", "quick", "simple"]
  },

  // ── SABAW / SOPAS ──────────────────────────

  {
    id: 27,
    name: "Lugaw",
    category: "Sopas",
    description: "Plain rice porridge with garlic and ginger. Healing food for when you're unwell.",
    ingredients: ["bawang", "sibuyas", "luya", "patis", "mantika"],
    ingredientDetails: ["1 cup rice", "2 thumbs ginger", "6 cloves garlic", "1 onion", "2 tbsp fish sauce", "2 tbsp oil", "6 cups water"],
    instructions: [
      "Saute garlic, ginger, and onion in oil.",
      "Add rice. Toast for 2 minutes.",
      "Pour in water. Bring to a boil.",
      "Simmer 20-25 minutes stirring often until porridge-like.",
      "Season with fish sauce and pepper.",
      "Top with fried garlic, spring onion, boiled egg.",
      "Serve with calamansi on the side."
    ],
    cookingTime: 35,
    servings: 3,
    difficulty: "Madali",
    image: "images/recipe/lugaw.jpg",
    tags: ["porridge", "healing", "simple"]
  },

  {
    id: 28,
    name: "Misua with Patola",
    category: "Sopas",
    description: "Thin rice noodle soup with sponge gourd and ground pork. Light and comforting.",
    ingredients: ["baboy", "sibuyas", "bawang", "mantika", "patis"],
    ingredientDetails: ["100g misua noodles", "200g ground pork", "1 sponge gourd (patola), sliced", "1 onion", "4 cloves garlic", "2 tbsp oil", "2 tbsp fish sauce"],
    instructions: [
      "Saute garlic and onion.",
      "Add ground pork. Cook until browned.",
      "Add 4 cups water. Bring to a boil.",
      "Add patola. Cook 3 minutes.",
      "Add misua noodles. Cook 2 minutes only.",
      "Season with fish sauce and pepper.",
      "Serve immediately before noodles get too soft."
    ],
    cookingTime: 20,
    servings: 3,
    difficulty: "Madali",
    image: "images/recipe/misua at patola.jpg",
    tags: ["noodles", "soup", "light"]
  },

  // ── MERYENDA / SPECIAL ─────────────────────

  {
    id: 29,
    name: "Tokwa at Baboy",
    category: "Baboy",
    description: "Crispy tofu and boiled pork with a vinegar-soy dipping sauce. Great pulutan.",
    ingredients: ["tofu", "baboy", "toyo", "suka", "sibuyas", "sili", "mantika"],
    ingredientDetails: ["2 blocks firm tofu", "300g boiled pork", "3 tbsp soy sauce", "2 tbsp vinegar", "1 red onion, minced", "2 chili, sliced", "Oil for frying"],
    instructions: [
      "Boil pork until tender. Slice into small pieces.",
      "Fry tofu in hot oil until golden and crispy. Slice.",
      "Mix soy sauce, vinegar, onion, and chili for sauce.",
      "Arrange tofu and pork on a plate.",
      "Pour the dipping sauce over or serve on the side.",
      "Garnish with spring onions.",
      "Serve as appetizer or with rice."
    ],
    cookingTime: 45,
    servings: 4,
    difficulty: "Katamtaman",
    image: "images/recipe/tokwa't baboy.jpg",
    tags: ["pulutan", "tofu", "appetizer"]
  },

  {
    id: 30,
    name: "Adobong Kangkong",
    category: "Gulay",
    description: "Water spinach cooked adobo-style with soy sauce and vinegar. Fast and delicious.",
    ingredients: ["toyo", "suka", "bawang", "sibuyas", "mantika", "asin"],
    ingredientDetails: ["1 bundle kangkong, cut", "2 tbsp soy sauce", "2 tbsp vinegar", "5 cloves garlic, crushed", "1 onion", "2 tbsp oil"],
    instructions: [
      "Saute garlic in oil until golden.",
      "Add onions. Cook until soft.",
      "Add kangkong. Toss quickly.",
      "Add soy sauce and vinegar.",
      "Cook on high heat for 2-3 minutes only.",
      "Do not overcook — kangkong should stay bright green.",
      "Serve immediately with rice."
    ],
    cookingTime: 10,
    servings: 2,
    difficulty: "Madali",
    image: "images/recipe/adobong kangkong.jpg",
    tags: ["quick", "budget", "adobo-style"]
  },


  // ── SINIGANG NA HIPON ─────────────────────

  {
    id: 33,
    name: "Sinigang na Hipon",
    category: "Hipon",
    description: "Sour tamarind soup with fresh shrimp and vegetables. Light, flavorful, and quintessentially Filipino.",
    ingredients: ["hipon", "kamatis", "sibuyas", "patis", "bawang", "sitaw"],
    ingredientDetails: ["500g fresh shrimp, whole", "2 tomatoes, quartered", "1 onion, quartered", "2 tbsp fish sauce", "4 cloves garlic", "1 bundle sitaw, cut", "1 packet sinigang mix", "Kangkong or pechay"],
    instructions: [
      "Bring 4 cups of water to a boil in a pot.",
      "Add tomatoes, onions, and garlic. Boil for 5 minutes.",
      "Add sinigang mix. Stir well to dissolve.",
      "Add sitaw (string beans). Cook for 3 minutes.",
      "Add shrimp. Cook for 3-5 minutes until shells turn orange-red.",
      "Season with fish sauce. Add kangkong last and cook 1 minute.",
      "Serve hot with rice and extra patis on the side."
    ],
    cookingTime: 25,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/sinigang na hipon.jpg",
    tags: ["soup", "sour", "seafood", "healthy"]
  },

  {
    id: 34,
    name: "Ginataang Kalabasa",
    category: "Gulay",
    description: "Creamy Filipino squash dish cooked in coconut milk with shrimp and string beans. Rich, savory, and comforting.",
    ingredients: ["kalabasa", "gata", "hipon", "sitaw", "sibuyas", "bawang"],
    ingredientDetails: [
      "500g kalabasa, peeled and cubed",
      "250g shrimp, cleaned",
      "1 bundle sitaw, cut into 2-inch pieces",
      "2 cups coconut milk (gata)",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp cooking oil",
      "1 tbsp fish sauce",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a pan over medium heat.",
      "Sauté garlic until fragrant, then add onions and cook until soft.",
      "Add shrimp and cook for 2 minutes until slightly pink.",
      "Add kalabasa (squash) and stir for 1 minute.",
      "Pour in coconut milk (gata). Bring to a gentle boil.",
      "Lower heat and simmer for 10-12 minutes until the squash becomes tender.",
      "Add sitaw (string beans) and cook for another 3-5 minutes.",
      "Season with fish sauce, salt, and pepper to taste.",
      "Stir gently to avoid mashing the squash.",
      "Serve hot with steamed rice."
    ],
    cookingTime: 30,
    servings: 4,
    difficulty: "Madali",
    image: "images/recipe/ginataang kalabasa at sitaw.jpg",
    tags: ["gulay", "creamy", "healthy", "filipino"]
  }

]; // END OF RECIPES

// ============================================
// INGREDIENT CATEGORIES — Find Recipe Page
// ============================================
const ingredientCategories = {
  proteins: {
    title: "Proteins",
    icon: "fa-drumstick-bite",
    items: [
      { key: "manok",  label: "Manok (Chicken)", icon: "fa-drumstick-bite" },
      { key: "baboy",  label: "Baboy (Pork)",    icon: "fa-bacon" },
      { key: "isda",   label: "Isda (Fish)",      icon: "fa-fish" },
      { key: "itlog",  label: "Itlog (Egg)",      icon: "fa-egg" },
      { key: "tofu",   label: "Tofu",             icon: "fa-cube" },
      { key: "hipon",  label: "Hipon (Shrimp)",   icon: "fa-shrimp" }
    ]
  },
  vegetables: {
    title: "Vegetables",
    icon: "fa-carrot",
    items: [
      { key: "sibuyas",  label: "Sibuyas (Onion)",    icon: "fa-circle" },
      { key: "bawang",   label: "Bawang (Garlic)",    icon: "fa-sun" },
      { key: "kamatis",  label: "Kamatis (Tomato)",   icon: "fa-apple-whole" },
      { key: "patatas",  label: "Patatas (Potato)",   icon: "fa-cookie" },
      { key: "repolyo",  label: "Repolyo (Cabbage)",  icon: "fa-leaf" },
      { key: "talong",   label: "Talong (Eggplant)",  icon: "fa-seedling" },
      { key: "sayote",   label: "Sayote",             icon: "fa-lemon" },
      { key: "kalabasa", label: "Kalabasa (Squash)",   icon: "fa-pepper-hot" },
      { key: "sitaw",    label: "Sitaw (String Beans)",icon: "fa-leaf" },
      { key: "luya",     label: "Luya (Ginger)",      icon: "fa-cookie-bite" },
      { key: "kangkong", label: "Kangkong",           icon: "fa-seedling" }
    ]
  },
  seasonings: {
    title: "Seasonings & Sauces",
    icon: "fa-mortar-pestle",
    items: [
      { key: "asin",     label: "Asin (Salt)",        icon: "fa-grip-dots" },
      { key: "paminta",  label: "Paminta (Pepper)",   icon: "fa-pepper-hot" },
      { key: "toyo",     label: "Toyo (Soy Sauce)",   icon: "fa-bottle-droplet" },
      { key: "suka",     label: "Suka (Vinegar)",     icon: "fa-wine-bottle" },
      { key: "patis",    label: "Patis (Fish Sauce)", icon: "fa-fish" },
      { key: "bagoong",  label: "Bagoong (Shrimp Paste)", icon: "fa-jar" },
      { key: "calamansi",label: "Calamansi",          icon: "fa-lemon" },
      { key: "asukal",   label: "Asukal (Sugar)",     icon: "fa-cube" }
    ]
  },
  others: {
    title: "Others",
    icon: "fa-basket-shopping",
    items: [
      { key: "mantika",  label: "Mantika (Cooking Oil)", icon: "fa-oil-can" },
      { key: "gata",     label: "Gata (Coconut Milk)",   icon: "fa-glass-water" },
      { key: "sili",     label: "Sili (Chili)",          icon: "fa-pepper-hot" }
    ]
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getDifficultyValue(difficulty) {
  const map = { "Madali": 1, "Katamtaman": 2, "Mahirap": 3 };
  return map[difficulty] || 2;
}

function getDifficultyStars(difficulty) {
  const value = getDifficultyValue(difficulty);
  let stars = '';
  for (let i = 1; i <= 3; i++) {
    stars += `<i class="fa-solid fa-star star ${i <= value ? 'filled' : ''}"></i>`;
  }
  return stars;
}

function getRandomRecipes(count) {
  return [...recipes].sort(() => 0.5 - Math.random()).slice(0, count);
}

function isFavorite(recipeId) {
  return JSON.parse(localStorage.getItem('anongluto_favorites') || '[]').includes(recipeId);
}

function toggleFavorite(recipeId) {
  let favs = JSON.parse(localStorage.getItem('anongluto_favorites') || '[]');
  favs = favs.includes(recipeId) ? favs.filter(id => id !== recipeId) : [...favs, recipeId];
  localStorage.setItem('anongluto_favorites', JSON.stringify(favs));
  return favs.includes(recipeId);
}

// ============================================
// WEIGHTED INGREDIENT SCORING
// Proteins = 3pts, Vegetables = 2pts, Seasonings = 1pt
// Makes matching smarter even with 1-2 ingredients
// ============================================

const ingredientWeights = {
  // Proteins — highest weight
  manok: 3, baboy: 3, isda: 3, itlog: 3,
  tofu: 3, hipon: 3,
  // Vegetables — medium weight
  sibuyas: 2, bawang: 2, kamatis: 2, patatas: 2,
  repolyo: 2, talong: 2, sayote: 2, kalabasa: 2,
  sitaw: 2, luya: 2, kangkong: 2,
  // Seasonings — lower weight
  asin: 1, paminta: 1, toyo: 1, suka: 1,
  patis: 1, bagoong: 1, calamansi: 1,
  asukal: 1, mantika: 1, gata: 2, sili: 1
};

function getWeightedScore(recipe, selectedSet) {
  let score = 0;
  recipe.ingredients.forEach(ing => {
    if (selectedSet.has(ing)) {
      score += ingredientWeights[ing] || 1;
    }
  });
  return score;
}

// ============================================
// RECIPE CARD HTML
// ============================================

// ============================================
// RECIPE CARD — with Missing Ingredients
// + Quick Meal + Budget badges
// ============================================

function createRecipeCard(recipe, options = {}) {
  const { showMatch = false, matchPercent = 0 } = options;
  const favClass = isFavorite(recipe.id) ? 'active' : '';

  // Missing ingredients display
  let missingHTML = '';
  if (showMatch && recipe.missingIngredients && recipe.missingIngredients.length > 0) {
    const missingList = recipe.missingIngredients.slice(0, 3).join(', ');
    const almostDone  = recipe.missingIngredients.length === 1;
    const nearlyDone  = recipe.missingIngredients.length === 2;

    missingHTML = `
      <div class="missing-ingredients">
        ${almostDone
          ? '<span class="badge-almost">⭐ Only 1 Missing!</span>'
          : nearlyDone
          ? '<span class="badge-almost">Almost Complete!</span>'
          : ''}
        <p class="missing-label">
          <i class="fa-solid fa-xmark" style="color:var(--rust-red);"></i>
          Kulang: <strong>${missingList}</strong>
          ${recipe.missingIngredients.length > 3
            ? `<em>+${recipe.missingIngredients.length - 3} more</em>`
            : ''}
        </p>
      </div>
    `;
  }

  // Match progress bar
  let matchBarHTML = '';
  if (showMatch && matchPercent > 0) {
    const barColor = matchPercent === 100
      ? 'var(--deep-green)'
      : matchPercent >= 60
      ? 'var(--warm-orange)'
      : 'var(--rust-red)';
    matchBarHTML = `
      <div class="match-progress-wrap">
        <div class="match-progress-bar">
          <div class="match-progress-fill"
               style="width:${matchPercent}%;background:${barColor};">
          </div>
        </div>
        <span class="match-progress-label">${matchPercent}% match</span>
      </div>
    `;
  }

  // Quick meal badge (under 20 mins)
  const quickBadge = recipe.cookingTime <= 20
    ? '<span class="badge-quick">⚡ Quick Meal</span>'
    : '';

  // Budget badge
  const budgetBadge = recipe.tags.includes('budget') || recipe.tags.includes('simple')
    ? '<span class="badge-budget">💰 Budget</span>'
    : '';

  return `
    <div class="recipe-card fade-in" data-recipe-id="${recipe.id}" data-category="${recipe.category}">
      <div class="recipe-card-img">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'">
        <span class="recipe-card-badge">${recipe.category}</span>
        <button class="recipe-favorite ${favClass}"
          onclick="event.stopPropagation(); toggleFavoriteCard(this, ${recipe.id})"
          title="Save to favorites">
          <i class="fa-solid fa-heart"></i>
        </button>
        ${showMatch && matchPercent > 0 ? `<div class="match-badge">${matchPercent}% Match</div>` : ''}
      </div>
      <div class="recipe-card-body">
        <div class="card-badges-row">${quickBadge}${budgetBadge}</div>
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        ${matchBarHTML}
        ${missingHTML}
        <div class="recipe-card-meta">
          <span><i class="fa-regular fa-clock"></i> ${recipe.cookingTime} min</span>
          <span><i class="fa-solid fa-utensils"></i> ${recipe.servings} servings</span>
          <div class="difficulty-stars">${getDifficultyStars(recipe.difficulty)}</div>
        </div>
        <div style="margin-top:14px;">
          <button class="btn btn-primary btn-sm" onclick="openRecipeModal(${recipe.id})">
            <i class="fa-solid fa-eye"></i> View Recipe
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// SMART MATCHING ENGINE
// Matches ANY ingredient — not just exact types
// ============================================

// ============================================
// SMART MATCHING ENGINE — Weighted + Adaptive
// Works even with only 1-2 ingredients selected
// ============================================

function findMatchingRecipes(selectedIngredients) {
  if (!selectedIngredients || selectedIngredients.length === 0) return [];

  const expandedSelected = new Set(selectedIngredients);

  const results = recipes.map(recipe => {
    const recipeIngs  = recipe.ingredients;
    const matched     = recipeIngs.filter(ing => expandedSelected.has(ing));
    const missing     = recipeIngs.filter(ing => !expandedSelected.has(ing));
    const matchPercent = Math.round((matched.length / recipeIngs.length) * 100);
    const weightScore  = getWeightedScore(recipe, expandedSelected);

    return {
      ...recipe,
      matchPercent,
      matchedCount:        matched.length,
      missingCount:        missing.length,
      missingIngredients:  missing,
      weightScore
    };
  });

  return results
    .filter(r => r.matchedCount >= 1)
    .sort((a, b) => {
      // Sort by weighted score first, then matchPercent, then fewest missing
      if (b.weightScore !== a.weightScore) return b.weightScore - a.weightScore;
      if (b.matchPercent !== a.matchPercent) return b.matchPercent - a.matchPercent;
      return a.missingCount - b.missingCount;
    });
}

// ============================================
// FEATURED RECIPES — Home Page
// ============================================

function loadFeaturedRecipes() {
  const container = document.getElementById('featured-recipes-grid');
  if (!container) return;
  container.innerHTML = getRandomRecipes(6).map(r => createRecipeCard(r)).join('');
}

// ============================================
// INGREDIENT SELECTOR — Find Recipe Page
// ============================================

function renderIngredientSelector() {
  const container = document.getElementById('ingredient-categories');
  if (!container) return;

  let html = '';
  for (const [, category] of Object.entries(ingredientCategories)) {
    html += `
      <div class="ingredient-category">
        <h3><i class="fa-solid ${category.icon}"></i> ${category.title}</h3>
        <div class="ingredient-grid">
          ${category.items.map(item => `
            <div class="ingredient-checkbox">
              <input type="checkbox" id="ing-${item.key}" value="${item.key}">
              <label for="ing-${item.key}">
                <i class="fa-solid ${item.icon}"></i> ${item.label}
              </label>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

// ============================================
// FIND RECIPE — Main Function
// ============================================

function findRecipes() {
  const selected = Array.from(
    document.querySelectorAll('.ingredient-checkbox input:checked')
  ).map(cb => cb.value);

  const resultsGrid      = document.getElementById('results-grid');
  const loadingContainer = document.getElementById('loading-container');
  const noResults        = document.getElementById('no-results');
  const resultsCount     = document.getElementById('results-count');
  const resultsSection   = document.getElementById('results-section');

  if (selected.length === 0) {
    alert('Piliin muna ang kahit isang ingredient!');
    return;
  }

  // Reset UI
  if (resultsGrid)      resultsGrid.innerHTML = '';
  if (noResults)        noResults.classList.remove('active');
  if (resultsSection)   resultsSection.style.display = 'block';
  if (loadingContainer) loadingContainer.classList.add('active');

  // Simulate processing delay for UX
  setTimeout(() => {
    const matches = findMatchingRecipes(selected);

    if (loadingContainer) loadingContainer.classList.remove('active');

    if (matches.length === 0) {
      if (noResults)    noResults.classList.add('active');
      if (resultsCount) resultsCount.innerHTML = '<span>0</span> recipes found';
      return;
    }

    if (resultsCount) {
      // Group label
      const perfect = matches.filter(r => r.matchPercent === 100).length;
      const partial  = matches.filter(r => r.matchPercent < 100).length;
      resultsCount.innerHTML =
        `<span>${matches.length}</span> recipe${matches.length !== 1 ? 's' : ''} found
        ${perfect > 0 ? `&nbsp;·&nbsp;<span style="color:var(--deep-green)">${perfect} perfect match${perfect>1?'es':''}</span>` : ''}
        ${partial > 0 ? `&nbsp;·&nbsp;<span style="color:var(--rust-red)">${partial} partial match${partial>1?'es':''}</span>` : ''}`;
    }

    if (resultsGrid) {
      resultsGrid.innerHTML = matches.map(r =>
        createRecipeCard(r, { showMatch: true, matchPercent: r.matchPercent })
      ).join('');
    }

    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 1200);
}

// ============================================
// CLEAR ALL
// ============================================

function clearAllIngredients() {
  document.querySelectorAll('.ingredient-checkbox input').forEach(cb => cb.checked = false);
  const ids = ['results-grid','no-results','results-count'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.innerHTML = ''; el.classList.remove('active'); }
  });
  const rs = document.getElementById('results-section');
  if (rs) rs.style.display = 'none';
}

// ============================================
// SORT RESULTS
// ============================================

function sortResults() {
  const sortValue  = document.getElementById('sort-select')?.value || 'match';
  const resultsGrid = document.getElementById('results-grid');
  if (!resultsGrid) return;

  const cards = Array.from(resultsGrid.querySelectorAll('.recipe-card'));
  const data  = cards.map(card => {
    const id      = parseInt(card.dataset.recipeId);
    const recipe  = recipes.find(r => r.id === id);
    const matchTxt = card.querySelector('.match-badge')?.textContent || '0';
    return { card, recipe, matchPercent: parseInt(matchTxt) || 0 };
  });

  data.sort((a, b) => {
    if (sortValue === 'time')       return a.recipe.cookingTime - b.recipe.cookingTime;
    if (sortValue === 'difficulty') return getDifficultyValue(a.recipe.difficulty) - getDifficultyValue(b.recipe.difficulty);
    return b.matchPercent - a.matchPercent; // default: match
  });

  resultsGrid.innerHTML = '';
  data.forEach(({ card }) => {
    card.classList.remove('fade-in');
    void card.offsetWidth;
    card.classList.add('fade-in');
    resultsGrid.appendChild(card);
  });
}

// ============================================
// ALL RECIPES — Live Search
// ============================================

function liveSearch(query) {
  const grid = document.getElementById('all-recipes-grid');
  if (!grid) return;

  const q = query.toLowerCase().trim();
  let visible = 0;

  grid.querySelectorAll('.recipe-card').forEach(card => {
    const id      = parseInt(card.dataset.recipeId);
    const recipe  = recipes.find(r => r.id === id);
    const text    = `${recipe.name} ${recipe.description} ${recipe.category} ${recipe.ingredients.join(' ')} ${recipe.tags.join(' ')}`.toLowerCase();
    const show    = q === '' || text.includes(q);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const noR = document.getElementById('no-results-search');
  if (noR) noR.classList.toggle('active', visible === 0 && q !== '');
}

// ============================================
// ALL RECIPES — Category Filter
// ============================================

function filterByCategory(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  document.querySelectorAll('#all-recipes-grid .recipe-card').forEach(card => {
    card.style.display = (category === 'All' || card.dataset.category === category) ? '' : 'none';
  });
}

// ============================================
// ALL RECIPES — Load Grid
// ============================================

function loadAllRecipes() {
  const grid = document.getElementById('all-recipes-grid');
  if (!grid) return;
  grid.innerHTML = recipes.map(r => createRecipeCard(r)).join('');
}

// ============================================
// RECIPE MODAL
// ============================================

// ============================================
// RECIPE MODAL — with Built-in Cooking Timer
// ============================================

let timerInterval  = null;
let timerSeconds   = 0;
let timerRunning   = false;

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  document.getElementById('timer-start').disabled = true;
  document.getElementById('timer-pause').disabled = false;
  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      document.getElementById('timer-display').textContent = '⏰ Time is up!';
      document.getElementById('timer-display').style.color = 'var(--rust-red)';
      showToast('⏰ Cooking time is up!');
      return;
    }
    timerSeconds--;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('timer-start').disabled = false;
  document.getElementById('timer-pause').disabled = true;
}

function resetTimer(cookingTime) {
  clearInterval(timerInterval);
  timerRunning  = false;
  timerSeconds  = cookingTime * 60;
  updateTimerDisplay();
  document.getElementById('timer-start').disabled = false;
  document.getElementById('timer-pause').disabled = true;
  const display = document.getElementById('timer-display');
  if (display) display.style.color = 'var(--deep-green)';
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent =
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }
}

function openRecipeModal(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  // Reset timer when opening modal
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = recipe.cookingTime * 60;

  const overlay   = document.getElementById('recipe-modal');
  const modalImg  = document.getElementById('modal-img');
  const modalBody = document.getElementById('modal-body');

  if (modalImg) { modalImg.src = recipe.image; modalImg.alt = recipe.name; }

  if (modalBody) {
    modalBody.innerHTML = `
      <h2>${recipe.name}</h2>
      <p class="modal-description">${recipe.description}</p>
      <div class="modal-meta">
        <div class="modal-meta-item">
          <i class="fa-regular fa-clock"></i> ${recipe.cookingTime} minutes
        </div>
        <div class="modal-meta-item">
          <i class="fa-solid fa-utensils"></i> ${recipe.servings} servings
        </div>
        <div class="modal-meta-item">
          <i class="fa-solid fa-layer-group"></i> ${recipe.difficulty}
        </div>
        <div class="modal-meta-item">
          <i class="fa-solid fa-tag"></i> ${recipe.category}
        </div>
      </div>

      <!-- COOKING TIMER -->
      <div class="cooking-timer">
        <h3><i class="fa-solid fa-stopwatch"></i> Cooking Timer</h3>
        <div id="timer-display" class="timer-display">
          ${String(recipe.cookingTime).padStart(2,'0')}:00
        </div>
        <div class="timer-buttons">
          <button class="btn btn-green btn-sm" id="timer-start"
            onclick="startTimer()">
            <i class="fa-solid fa-play"></i> Start
          </button>
          <button class="btn btn-sm" id="timer-pause"
            onclick="pauseTimer()" disabled
            style="background:var(--rust-red);color:white;">
            <i class="fa-solid fa-pause"></i> Pause
          </button>
          <button class="btn btn-sm" id="timer-reset"
            onclick="resetTimer(${recipe.cookingTime})"
            style="background:var(--cream);color:var(--deep-green);border:2px solid var(--cream-dark);">
            <i class="fa-solid fa-rotate-left"></i> Reset
          </button>
        </div>
      </div>

      <div class="modal-section">
        <h3><i class="fa-solid fa-basket-shopping"></i> Ingredients</h3>
        <ul class="modal-ingredients">
          ${recipe.ingredientDetails.map(d =>
            `<li><i class="fa-solid fa-check"></i> ${d}</li>`
          ).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3><i class="fa-solid fa-fire-burner"></i> Instructions</h3>
        <ol class="modal-instructions">
          ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>

      <div class="modal-section">
        <h3><i class="fa-solid fa-tags"></i> Tags</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${recipe.tags.map(tag => `
            <span style="padding:6px 14px;background:var(--cream);
              border-radius:50px;font-size:0.85rem;
              color:var(--deep-green);font-weight:500;">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn btn-primary" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print Recipe
        </button>
        <button class="btn btn-outline" onclick="closeRecipeModal()">
          <i class="fa-solid fa-xmark"></i> Close
        </button>
      </div>
    `;
  }

  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
  clearInterval(timerInterval);
  timerRunning = false;
  const overlay = document.getElementById('recipe-modal');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// FAVORITES
// ============================================

function toggleFavoriteCard(btn, recipeId) {
  const isNowFav = toggleFavorite(recipeId);
  btn.classList.toggle('active', isNowFav);
  showToast(isNowFav ? 'Added to favorites! ❤️' : 'Removed from favorites');
}

// ============================================
// TOAST
// ============================================

function showToast(message) {
  const existing = document.querySelector('.toast-popup');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-popup';
  toast.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
    background:var(--deep-green);color:var(--cream);
    padding:12px 28px;border-radius:50px;font-weight:500;
    font-size:0.9rem;z-index:3000;
    box-shadow:0 4px 20px rgba(0,0,0,0.2);
    animation:fadeIn 0.3s ease;
    font-family:'Poppins',sans-serif;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
  document.querySelector('.hamburger')?.classList.toggle('active');
  document.querySelector('.nav-links')?.classList.toggle('active');
}

// ============================================
// ACTIVE NAV LINK
// ============================================

function setActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();

  // Hamburger
  document.querySelector('.hamburger')?.addEventListener('click', toggleMobileMenu);

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.hamburger')?.classList.remove('active');
      document.querySelector('.nav-links')?.classList.remove('active');
    });
  });

  // Modal close on outside click
  document.getElementById('recipe-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeRecipeModal();
  });

  // Close modal on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeRecipeModal();
  });

  // Load page content
  loadFeaturedRecipes();
  renderIngredientSelector();
  loadAllRecipes();
});

function filterFavorites() {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'Favorites');
  });

  const favs = JSON.parse(localStorage.getItem('anongluto_favorites') || '[]');
  const grid = document.getElementById('all-recipes-grid');

  grid.querySelectorAll('.recipe-card').forEach(card => {
    const id = parseInt(card.dataset.recipeId);
    card.style.display = favs.includes(id) ? '' : 'none';
  });

  // Show message if no favorites yet
  const noR = document.getElementById('no-results-search');
  const visible = favs.length;
  if (noR) {
    noR.classList.toggle('active', visible === 0);
    if (visible === 0) {
      noR.querySelector('p').textContent = 
        'Wala ka pang naka-save na recipe. I-click ang ❤️ sa kahit anong recipe!';
    }
  }
}

// ============================================
// RANDOM ULAM SUGGESTION
// ============================================

function suggestRandomUlam() {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  showToast(`🍚 Subukan mo: ${random.name}!`);
  setTimeout(() => openRecipeModal(random.id), 600);
}

// ============================================
// SMART INGREDIENT SUGGESTIONS
// Shows what ingredients pair well with selected
// ============================================

const ingredientPairs = {
  manok:    ["bawang", "sibuyas", "toyo", "luya", "patis"],
  baboy:    ["bawang", "sibuyas", "toyo", "suka", "kamatis"],
  isda:     ["luya", "bawang", "suka", "kamatis", "calamansi"],
  itlog:    ["bawang", "sibuyas", "kamatis", "mantika", "toyo"],
  tofu:     ["toyo", "sibuyas", "bawang", "kamatis", "suka"],
  hipon:    ["bawang", "sibuyas", "kamatis", "calamansi", "sili"],
  bawang:   ["sibuyas", "kamatis", "mantika", "toyo"],
  sibuyas:  ["bawang", "kamatis", "mantika"],
  kamatis:  ["sibuyas", "bawang", "patis"],
  toyo:     ["suka", "bawang", "sibuyas", "calamansi"],
  gata:     ["luya", "bawang", "sibuyas", "kalabasa", "sitaw"]
};

function showSmartSuggestions(selected) {
  const box = document.getElementById('smart-suggestions');
  if (!box) return;

  if (selected.length === 0) { box.style.display = 'none'; return; }

  // Collect suggested ingredients not yet selected
  const suggestionCount = {};
  selected.forEach(ing => {
    const pairs = ingredientPairs[ing] || [];
    pairs.forEach(p => {
      if (!selected.includes(p)) {
        suggestionCount[p] = (suggestionCount[p] || 0) + 1;
      }
    });
  });

  const suggestions = Object.entries(suggestionCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([ing]) => ing);

  if (suggestions.length === 0) { box.style.display = 'none'; return; }

  box.style.display = 'block';
  box.innerHTML = `
    <p><i class="fa-solid fa-lightbulb"></i>
      <strong>Suggested ingredients:</strong>
    </p>
    <div class="suggestion-chips">
      ${suggestions.map(s => `
        <button class="suggestion-chip"
          onclick="addSuggestedIngredient('${s}')">
          + ${s}
        </button>
      `).join('')}
    </div>
  `;
}

function addSuggestedIngredient(ing) {
  const checkbox = document.getElementById(`ing-${ing}`);
  if (checkbox) {
    checkbox.checked = true;
    showToast(`✅ ${ing} added!`);
    // Re-run suggestions after adding
    const selected = Array.from(
      document.querySelectorAll('.ingredient-checkbox input:checked')
    ).map(cb => cb.value);
    showSmartSuggestions(selected);
  }
}