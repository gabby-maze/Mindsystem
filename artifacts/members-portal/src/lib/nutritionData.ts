export type FuelCategoryId = "recovery" | "energy" | "focus" | "build" | "quick";

export interface Recipe {
  id: string;
  number: string;
  name: string;
  why: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  athleteTip: string;
  protein: string;
  carbs: string;
  fat: string;
  pdfUrl?: string;
}

export interface FuelCategory {
  id: FuelCategoryId;
  label: string;
  accentColor: string;
  tagline: string;
  overview: {
    paragraphs: string[];
    when: string;
    lookFor: string[];
    avoid: string[];
    lawTieIn: string;
  };
  recipes: Recipe[];
}

function makeRecipes(categoryId: FuelCategoryId, names: string[], whys: string[], tips: string[]): Recipe[] {
  const defaults: Record<FuelCategoryId, { ingredients: string[]; instructions: string[]; protein: string; carbs: string; fat: string }> = {
    recovery: { ingredients: ["Recipe ingredients coming soon"], instructions: ["Full recipe instructions coming soon"], protein: "25g", carbs: "35g", fat: "8g" },
    energy: { ingredients: ["Recipe ingredients coming soon"], instructions: ["Full recipe instructions coming soon"], protein: "15g", carbs: "55g", fat: "6g" },
    focus: { ingredients: ["Recipe ingredients coming soon"], instructions: ["Full recipe instructions coming soon"], protein: "12g", carbs: "28g", fat: "14g" },
    build: { ingredients: ["Recipe ingredients coming soon"], instructions: ["Full recipe instructions coming soon"], protein: "40g", carbs: "30g", fat: "10g" },
    quick: { ingredients: ["Recipe ingredients coming soon"], instructions: ["Full recipe instructions coming soon"], protein: "10g", carbs: "20g", fat: "8g" },
  };
  return names.map((name, i) => ({
    id: `${categoryId}-${i + 1}`,
    number: String(i + 1).padStart(2, "0"),
    name,
    why: whys[i] ?? "Full description coming soon.",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1–2",
    ingredients: defaults[categoryId].ingredients,
    instructions: defaults[categoryId].instructions,
    athleteTip: tips[i] ?? "Prep a batch on Sunday and keep portions ready for the week.",
    protein: defaults[categoryId].protein,
    carbs: defaults[categoryId].carbs,
    fat: defaults[categoryId].fat,
  }));
}

export const FUEL_CATEGORIES: FuelCategory[] = [
  {
    id: "recovery",
    label: "Recovery Fuel",
    accentColor: "#00D4C8",
    tagline: "What you eat after you work to rebuild faster.",
    overview: {
      paragraphs: [
        "After you train, your body is in repair mode. What you eat in the first 30–45 minutes after practice determines how fast you recover, how sore you are tomorrow, and how ready you are for the next session.",
        "Recovery fuel is protein to rebuild muscle and carbohydrates to restore glycogen. It is not optional it is the difference between building and breaking down. Most athletes skip this window and wonder why they are always tired and sore.",
        "The goal is simple: get protein and carbs into your body within 45 minutes of finishing. It doesn't have to be a full meal. A shake, some yogurt with fruit, chocolate milk anything that delivers both. Then eat a full meal within 2 hours.",
      ],
      when: "Within 30–45 minutes after practice or competition. Follow with a full meal within 2 hours.",
      lookFor: [
        "Complete proteins chicken, eggs, dairy, Greek yogurt, cottage cheese",
        "Fast-digesting carbohydrates fruit, white rice, sweet potato",
        "Fluids + electrolytes to rehydrate",
        "Aim for roughly 20–30g protein and 40–60g carbs",
      ],
      avoid: [
        "High-fat foods in the immediate recovery window they slow digestion",
        "Skipping recovery fuel entirely even busy schedules need a 5-minute solution",
        "High-fiber foods right after training they can cause GI distress",
        "Waiting more than 2 hours to eat a real meal",
      ],
      lawTieIn: "Recovery is not rest it is work you do for tomorrow. The athlete who shows up to the next practice recovered is the athlete who builds faster.",
    },
    recipes: makeRecipes(
      "recovery",
      [
        "Hamburger Pasta",
        "Chicken & Brown Rice Bowl",
        "Greek Yogurt Berry Parfait",
        "Turkey & Avocado Wrap",
        "Salmon Sweet Potato Plate",
        "Peanut Butter Banana Toast",
        "Cottage Cheese Fruit Bowl",
        "Veggie Egg Scramble",
        "Overnight Recovery Oats",
        "Tuna Quinoa Bowl",
      ],
      [
        "One-pan family-style meal with ground beef and pasta delivering the protein and carbohydrate combination ideal for muscle repair and glycogen restoration after practice or competition.",
        "A classic combination lean protein from chicken plus complex carbs from brown rice rebuilds muscle and restores energy.",
        "Greek yogurt delivers 15–20g protein per cup with live cultures that support gut health and recovery.",
        "A portable recovery option that travels well to tournaments and away games.",
        "Omega-3s in salmon reduce inflammation, making it one of the best recovery proteins available.",
        "Quick, portable, and delivers protein plus fast-acting carbs without any cooking.",
        "Cottage cheese is high in casein protein a slow-digesting protein ideal for overnight muscle repair.",
        "Eggs are a complete protein. Pairing with vegetables adds micronutrients essential for tissue repair.",
        "Prep the night before so post-practice recovery fuel is ready the second you need it.",
        "High protein, complete amino acids, and anti-inflammatory omega-3s in one bowl.",
      ],
      [
        "Best as a post-practice dinner or post-competition recovery meal. Also works the night before a competition eaten 3–4 hours before bed to load glycogen overnight. Avoid within 2–3 hours before competition.",
        "Double the recipe and keep it in containers for 3 days of post-practice meals.",
        "Use full-fat Greek yogurt the extra fat keeps you fuller longer and improves nutrient absorption.",
        "Make 5 wraps on Sunday night and grab one after every practice this week.",
        "Bake a sheet of salmon fillets and sweet potatoes together at 400°F 25 minutes, done.",
        "Keep a loaf of whole grain bread, a jar of PB, and bananas in your kitchen at all times.",
        "The best recovery bowl that requires zero cooking just open, mix, eat.",
        "Add a handful of spinach to any egg scramble. You won't taste it and it adds iron and folate.",
        "Make 5 jars on Sunday. Breakfast and recovery fuel handled for the whole week.",
        "Mix canned tuna, cooked quinoa, diced cucumber, lemon juice, and olive oil. 10 minutes flat.",
      ],
    ).map((r, i) => i !== 0 ? r : {
      ...r,
      prepTime: "10 min",
      cookTime: "25 min",
      servings: "6",
      protein: "38g",
      carbs: "52g",
      fat: "16g",
      pdfUrl: "hamburger-pasta.pdf",
      ingredients: [
        "1 lb elbow macaroni (dry)",
        "1 lb ground beef",
        "1 tbsp avocado oil",
        "1 cup chopped onions",
        "1 cup shredded lettuce",
        "½ cup chopped pickles",
        "2 tbsp steak seasoning (such as Montreal Steak Seasoning)",
        "8 oz block cheddar cheese, shredded",
        "3 tbsp flour",
        "2 tbsp butter",
        "3 cups milk",
      ],
      instructions: [
        "Cook pasta in salted water until al dente. Drain and set aside.",
        "In a large pan, heat avocado oil. Brown the ground beef with steak seasoning.",
        "In a separate saucepan, melt butter. Whisk in flour to form a roux. Slowly add milk, stirring until smooth. Add shredded cheddar and stir until melted.",
        "Combine pasta, beef mixture, and cheese sauce. Top with onions, lettuce, and pickles. Mix well and serve.",
      ],
    }),
  },
  {
    id: "energy",
    label: "Energy Fuel",
    accentColor: "#FF2D78",
    tagline: "What you eat before you compete to show up ready.",
    overview: {
      paragraphs: [
        "Pre-competition nutrition is not about eating more it is about eating right and eating at the right time. The goal is stable blood sugar, enough fuel in the tank, and nothing that creates sluggishness or GI issues on the court.",
        "Energy fuel is timed carbohydrates, moderate protein, and low fat and fiber in the hours before competition. Fat and fiber slow digestion the last thing you want before a game is food sitting in your stomach on the court.",
        "Timing matters as much as content. A full meal 3–4 hours before, a lighter snack 60–90 minutes before, and something small (banana, rice cake, sports drink) right before if needed. Experiment in practice never try something new on game day.",
      ],
      when: "Full meal 3–4 hours before. Light snack 60–90 minutes before. Small top-off 15–30 minutes before if needed.",
      lookFor: [
        "Easy-digesting carbohydrates white rice, pasta, bread, banana, oatmeal",
        "Moderate lean protein chicken, turkey, eggs",
        "Familiar foods your body knows game day is not the time to experiment",
        "Consistent hydration starting the night before",
      ],
      avoid: [
        "High-fat foods within 2 hours of competition",
        "High-fiber foods beans, raw vegetables, whole grains too close to game time",
        "New or unfamiliar foods on competition day",
        "Under-fueling showing up to compete with an empty tank is a performance killer",
      ],
      lawTieIn: "You cannot perform beyond what you've prepared for. Fueling the game starts the night before, not 30 minutes before tip-off.",
    },
    recipes: makeRecipes(
      "energy",
      [
        "Pre-Game Pasta with Marinara",
        "Banana Almond Butter Toast",
        "Champion Morning Oatmeal",
        "Rice Cakes with Honey & PB",
        "Mango Pineapple Smoothie",
        "Everything Bagel with Egg",
        "Baked Sweet Potato with Butter",
        "Whole Grain Waffles with Maple",
        "Carb-Loading Grain Bowl",
        "No-Bake Energy Bites",
      ],
      [
        "The classic pre-game meal complex carbs from pasta load glycogen stores without weighing you down.",
        "Fast, portable, and delivers quick carbs plus healthy fat and protein in under 5 minutes.",
        "A warm, steady-energy breakfast that keeps blood sugar stable through a long morning game.",
        "The simplest pre-game snack fast carbs, a little protein and fat, and nothing that upsets your stomach.",
        "A light, easy-to-digest liquid meal for athletes who get nervous before games and can't eat solids.",
        "A complete pre-game meal with fast-digesting carbs and protein ready in 10 minutes.",
        "One of the cleanest carb sources available easy to digest, satisfying, and versatile.",
        "A tournament morning staple. Make a double batch the night before and reheat in the morning.",
        "Layers of rice, quinoa, and avocado build a high-carb base without fiber overload.",
        "Make a big batch on Sunday and grab 2–3 as a pre-game snack all week.",
      ],
      [
        "Eat this the night before a morning game, not the morning of. Let it work overnight.",
        "Keep bananas and almond butter in your bag at all times. Best emergency pre-game fuel.",
        "Cook oatmeal with milk instead of water for more protein and calories without extra effort.",
        "Plain rice cakes with honey and a little PB are the most underrated athlete snack in existence.",
        "Freeze mango chunks and keep them portioned in bags. Just blend and go.",
        "Keep hard-boiled eggs in the fridge all week. Game-morning breakfast done in 3 minutes.",
        "Batch-cook sweet potatoes on Sunday. Microwave one in 2 minutes for a fast pre-game carb source.",
        "Freeze individual waffles and toast them directly no prep, tournament-ready breakfast.",
        "Use leftover rice and quinoa from the week. Add avocado and a fried egg and you have a game-day bowl.",
        "Roll into balls and freeze. They last 2 weeks and travel perfectly to tournaments.",
      ],
    ),
  },
  {
    id: "focus",
    label: "Focus Fuel",
    accentColor: "#2B8BF5",
    tagline: "What supports brain function, clarity, and emotional regulation.",
    overview: {
      paragraphs: [
        "Focus is a physical state, not just a mental one. The brain runs on glucose, and when blood sugar drops, focus and emotional regulation drop with it. This is not motivation it is biology.",
        "Focus fuel is steady energy foods that release slowly, support hydration, and reduce inflammation. Omega-3 fatty acids, antioxidants, and stable blood sugar are the three pillars of brain performance. When an athlete is under-fueled or eating in ways that spike and crash blood sugar, the mental gaps multiply.",
        "This is the fuel that closes the gap between what an athlete knows and what she can execute under pressure. A technically sound player who can't stay mentally sharp in the third quarter is leaving performance on the table. Focus fuel addresses that gap at the cellular level.",
      ],
      when: "Throughout the day, especially on competition days and high-stress practice days. Focus fuel is a daily habit, not a pre-game ritual.",
      lookFor: [
        "Omega-3 rich foods salmon, walnuts, flaxseed, chia seeds",
        "Antioxidant-rich foods blueberries, dark chocolate, leafy greens",
        "Slow-digesting carbs oats, quinoa, sweet potato",
        "Consistent hydration even mild dehydration reduces focus and decision-making",
      ],
      avoid: [
        "High-sugar foods that spike and crash blood sugar",
        "Skipping meals a brain that hasn't been fed cannot focus",
        "Excessive caffeine it spikes cortisol and increases anxiety",
        "Highly processed foods they create inflammation that affects brain function",
      ],
      lawTieIn: "The mental game is a physical game. You cannot think your way to focus when your body hasn't been fueled for it. Build the brain the same way you build the body consistently, over time.",
    },
    recipes: makeRecipes(
      "focus",
      [
        "Berry-Spinach Recovery Smoothie",
        "Salmon Avocado Toast",
        "Walnut & Dark Chocolate Trail Mix",
        "Chia Seed Pudding",
        "Avocado Egg Bites",
        "Green Goddess Smoothie",
        "Apple Walnut Slices with Cinnamon",
        "Mixed Berry Greek Yogurt",
        "Dark Chocolate Almond Bark",
        "Rainbow Veggie Hummus Plate",
      ],
      [
        "30g of protein plus antioxidants from berries, iron from spinach, calcium from yogurt, and omega-3s from walnuts and flaxseed. Drink within 45 minutes of training for best recovery.",
        "Omega-3s from salmon plus healthy fat from avocado one of the most powerful focus-support meals in the library.",
        "Walnuts are shaped like a brain for a reason. Their omega-3 content supports neural function and reduces cognitive inflammation.",
        "Chia seeds deliver omega-3s, fiber, and slow-release energy made the night before for zero-effort focus fuel.",
        "Eggs deliver choline a nutrient critical for memory and focus that most athletes are deficient in.",
        "Spinach, banana, and almond butter deliver magnesium, potassium, and steady energy that supports focus for hours.",
        "A simple snack that stabilizes blood sugar and delivers brain-healthy fats with zero prep time.",
        "Greek yogurt plus antioxidant-rich berries plus omega-3-rich walnuts in one bowl.",
        "Dark chocolate (70%+) improves blood flow to the brain and supports focus. A small amount goes a long way.",
        "Hydrating vegetables with hummus delivers fiber, protein, and healthy fat steady energy without a spike.",
      ],
      [
        "Best after intense practices or games and on strength-training days. Not ideal right before competition as high fiber may slow digestion.",
        "Use leftover salmon from dinner the night before. Keep a ripe avocado on the counter always.",
        "Make a big bag at the beginning of the week. Grab a handful before every practice.",
        "Make 5 jars on Sunday night. A week of focus fuel ready in the fridge.",
        "Bake a full muffin tin of egg bites on Sunday. Grab 2 every morning, done.",
        "The key is real spinach not spinach-flavored anything. Use 2 big handfuls.",
        "Keep walnuts and apples in your backpack. This snack is ready anywhere, anytime.",
        "Add the walnuts right before eating to keep them crunchy. Use local honey if you can find it.",
        "Make a batch, break it into pieces, and keep it in an airtight container. Lasts 2 weeks.",
        "Prep the veggies on Sunday. A full plate ready to grab in the fridge all week.",
      ],
    ).map((r, i) => i !== 0 ? r : {
      ...r,
      prepTime: "3 min",
      cookTime: "0 min",
      servings: "1",
      protein: "30g",
      carbs: "35g",
      fat: "8g",
      pdfUrl: "berry-spinach-smoothie.pdf",
      ingredients: [
        "12 oz water",
        "1 cup spinach",
        "2 cups frozen mixed berries",
        "½ cup plain low-fat yogurt",
        "2 scoops vanilla protein powder",
        "1 tbsp walnuts",
        "1 tbsp ground flaxseed",
      ],
      instructions: [
        "Add all ingredients to a blender.",
        "Blend until smooth and creamy.",
        "Serve cold and drink within 45 minutes of training for best recovery.",
      ],
    }),
  },
  {
    id: "build",
    label: "Build Fuel",
    accentColor: "#982FF7",
    tagline: "What supports muscle development and physical growth.",
    overview: {
      paragraphs: [
        "Building an athlete's body is a long-term project not something that happens in one meal or one week. The decisions made today show up in the body 6 weeks from now. Build fuel is about consistency over intensity.",
        "Build fuel is consistent high-quality protein throughout the day, enough total calories to support growth and training load, and micronutrients that support bone density and hormonal health. Under-fueling is the most common mistake young female athletes make, and it is the one with the longest-term consequences.",
        "The goal is 0.7–1g of protein per pound of body weight per day, spread across 3–5 meals. Not all in one shake. Protein synthesis the process of actually building muscle requires a steady supply throughout the day. Front-loading all your protein in one meal defeats the purpose.",
      ],
      when: "Throughout the day in 3–5 evenly spaced meals. Prioritize protein with every meal. Don't wait until dinner to hit your protein target.",
      lookFor: [
        "Complete proteins with all essential amino acids meat, eggs, dairy, soy",
        "Total daily protein: roughly 0.7–1g per pound of body weight",
        "Enough total calories you cannot build muscle in a caloric deficit",
        "Calcium and Vitamin D for bone density especially critical for female athletes",
      ],
      avoid: [
        "Chronic under-eating the most common mistake in female youth athletics",
        "Skipping meals during high training volume periods",
        "Relying on one large protein source per day instead of spreading intake",
        "Restricting carbohydrates carbs spare protein for muscle building instead of energy",
      ],
      lawTieIn: "Building the body is a daily commitment, not a weekly event. Consistency is the only variable that compounds. Show up to every meal the way you show up to every practice.",
    },
    recipes: makeRecipes(
      "build",
      [
        "Buffalo Chicken Dip",
        "Ground Beef & Veggie Stir Fry",
        "Triple-Source Protein Bowl",
        "Egg White Power Scramble",
        "Protein Pancake Stack",
        "Turkey Meatball Meal Prep",
        "Lentil & Chicken Soup",
        "Tuna Power Salad",
        "Cottage Cheese Protein Bowl",
        "Baked Chicken & Quinoa",
      ],
      [
        "32g of protein per serving with zero cooking required. Shredded chicken and whipped cottage cheese deliver complete amino acids in a format that works as a snack, post-practice fuel, or tournament day staple.",
        "Ground beef delivers complete protein plus zinc and iron two minerals female athletes commonly run low on.",
        "Layering Greek yogurt, cottage cheese, and protein powder creates a 50g+ protein meal that doesn't feel like a supplement.",
        "Egg whites are pure protein. Pairing with a whole egg adds essential fat-soluble vitamins.",
        "A high-protein breakfast that makes hitting your daily protein target easier without eating chicken at 7am.",
        "Turkey meatballs are a lean, versatile protein source. Batch-prep and use them across multiple meals.",
        "Lentils deliver plant-based protein plus iron, folate, and slow carbs a complete build meal for recovery days.",
        "Canned tuna is one of the highest protein-to-cost foods available. Keep it stocked always.",
        "Cottage cheese is high in casein a slow-digesting protein that continues amino acid delivery for hours.",
        "The simplest high-protein meal prep recipe in the library. Four ingredients, one pan, done for 4 days.",
      ],
      [
        "Best after practice or games and as a high-protein afternoon snack. Avoid right before intense activity as spice and dairy may upset some stomachs.",
        "Add eggs to the last minute of cooking for extra protein. Serve over rice or eat straight from the pan.",
        "Use full-fat Greek yogurt and full-fat cottage cheese. Dietary fat is not the enemy in a build phase.",
        "A 4-egg-white to 1-whole-egg ratio is the standard. Don't skip the whole egg the yolk has choline.",
        "Freeze extra pancakes flat on a baking sheet, then bag them. Toast from frozen in 2 minutes.",
        "Use an ice cream scoop to portion meatballs evenly. Bake at 400°F for 20 minutes no flipping needed.",
        "Make a big pot on Sunday. This freezes perfectly and is ready in 3 minutes from the microwave.",
        "Use olive oil and lemon dressing healthy fat helps you absorb the fat-soluble vitamins in the greens.",
        "Add a tablespoon of nut butter and a scoop of protein powder to amp up the calorie and protein content.",
        "Use chicken thighs instead of breast for more calories and flavor during high-training-volume weeks.",
      ],
    ).map((r, i) => i !== 0 ? r : {
      ...r,
      prepTime: "10 min",
      cookTime: "0 min",
      servings: "6",
      protein: "32g",
      carbs: "3g",
      fat: "7g",
      pdfUrl: "buffalo-chicken-dip.pdf",
      ingredients: [
        "3 cups cooked, shredded chicken breast",
        "1½ cups whipped cheese (blend cottage cheese until smooth and creamy)",
        "¼–½ cup buffalo sauce (adjust for spice tolerance)",
        "¼ cup plain Greek yogurt (optional, for extra creaminess)",
        "Optional: chopped green onions, garlic powder, or onion powder",
        "Dippers: carrot sticks, celery sticks, whole wheat or seeded crackers (2–3g fiber per serving)",
      ],
      instructions: [
        "Add cottage cheese to a blender and blend until completely smooth. This is your whipped cheese.",
        "In a large bowl, mix whipped cheese, buffalo sauce, and Greek yogurt if using.",
        "Fold in shredded chicken until evenly coated.",
        "Chill or serve immediately. No baking required.",
      ],
    }),
  },
  {
    id: "quick",
    label: "Quick Fuel",
    accentColor: "#C42BEE",
    tagline: "Fast, practical options for busy athlete schedules.",
    overview: {
      paragraphs: [
        "Athlete schedules are brutal early morning practice, school, afternoon training, tournaments that run all day. Quick fuel is not a compromise. It is a system that keeps the athlete fueled when the clock is working against her.",
        "Quick fuel is not junk food it is smart, portable, practical nutrition that works when there is no time to cook. The goal is options that travel well, require no or minimal prep, and still deliver real fuel: protein, carbs, or healthy fat depending on the timing.",
        "The key is preparation, not willpower. An athlete who has a quick fuel kit ready a bag of trail mix, some rice cakes, hard-boiled eggs prepped on Sunday never has to choose between bad options. Build the system once. Use it all week.",
      ],
      when: "Between meals, during tournaments, on travel days, or any time a full meal isn't possible and training or competition is within 2 hours.",
      lookFor: [
        "Single-ingredient or minimal-ingredient foods",
        "Options that don't require refrigeration for travel",
        "Foods that deliver protein, carbs, or healthy fat not just calories",
        "Things that can be batch-prepped on Sunday for the whole week",
      ],
      avoid: [
        "Vending machine defaults chips, cookies, candy they create energy crashes",
        "Going longer than 4 hours without eating anything on training or competition days",
        "Relying on sports drinks as a meal replacement they are hydration tools, not fuel",
        "Waiting until you're starving to figure out what to eat",
      ],
      lawTieIn: "Preparation is the performance skill no one talks about. An athlete who has her quick fuel ready is already ahead of the one who shows up hoping for the best.",
    },
    recipes: makeRecipes(
      "quick",
      [
        "Acai Bowl",
        "PB & Banana Rice Cakes",
        "Power Trail Mix",
        "Prep & Freeze Smoothie Pouches",
        "Hard-Boiled Egg Pack",
        "Grab-and-Go Overnight Oats",
        "Jerky & Fruit Pack",
        "String Cheese & Apple Slices",
        "Tournament Day Snack Box",
        "No-Bake Energy Date Balls",
      ],
      [
        "Natural sugars and carbohydrates from frozen acai and fruit give a clean energy base without heaviness. No baking, no cooking, ready in 5 minutes.",
        "The most portable 2-minute snack in the library. Delivers steady energy and is easy on the stomach.",
        "A customizable mix that travels anywhere, lasts for weeks, and delivers real fuel in minutes.",
        "Pre-blend, freeze flat in bags, and blend or thaw on the go. Tournament smoothies without the blender.",
        "The simplest high-protein portable snack that exists. Zero additives, zero prep on game day.",
        "Made the night before in a mason jar. Grab it from the fridge and eat on the drive.",
        "High protein from jerky, fast carbs from fruit, healthy fat from almonds. A complete quick fuel combo.",
        "Four ingredients, zero cooking, ready in 2 minutes. One of the most consistently useful snacks in the library.",
        "A full snack strategy for a long tournament day planned in advance so decisions are already made.",
        "No baking required. Make 20 in 20 minutes on Sunday. Lasts all week.",
      ],
      [
        "Keep toppings bite-sized for easier eating. Not right before intense activity as the liquid base and fruit sugars can cause GI discomfort mid-competition if eaten too close to game time.",
        "Keep a bag of rice cakes and a jar of PB at school or in your tournament bag permanently.",
        "Make a big batch with 1 cup each of walnuts, almonds, pumpkin seeds, dark chocolate chips, and dried cherries.",
        "Use zip-lock bags. Freeze flat so they stack. Thaw in a cooler on tournament days.",
        "Hard-boil a full dozen eggs on Sunday. Pack 2–3 in a small container with salt and hot sauce.",
        "The trick is oats, not instant oats. Regular oats in almond milk overnight = real sustained energy.",
        "Use high-quality jerky with low sodium. Pair with an apple and a small bag of almonds.",
        "Keep string cheese and apples in the fridge at all times. This snack is never more than 2 minutes away.",
        "Pack the box the night before a tournament. Lay out everything needed so morning is automatic.",
        "Use Medjool dates they're softer and sweeter. Roll in shredded coconut to keep them from sticking.",
      ],
    ).map((r, i) => i !== 0 ? r : {
      ...r,
      prepTime: "5 min",
      cookTime: "0 min",
      servings: "2",
      protein: "5g",
      carbs: "45g",
      fat: "6g",
      pdfUrl: "acai-bowl.pdf",
      ingredients: [
        "2 frozen acai packets",
        "1 cup frozen berries (strawberries, blueberries, raspberries) or mango/pineapple",
        "½–¾ cup liquid (water, milk alternative, or fruit juice)",
        "Toppings: granola (about ½ cup per bowl)",
        "Toppings: coconut flakes",
        "Toppings: fresh fruit (banana, strawberries, kiwi, blueberries)",
        "Toppings: drizzle of nut butter (1–2 tbsp)",
        "Toppings: honey or agave (1 tsp–1 tbsp)",
        "Toppings: chia seeds",
      ],
      instructions: [
        "Blend acai packets, frozen fruit, and liquid until thick and creamy. Start with less liquid and add as needed.",
        "Scoop into bowls.",
        "Add toppings in colorful rows or fun patterns.",
      ],
    }),
  },
];

export const FUEL_CATEGORY_MAP: Record<FuelCategoryId, FuelCategory> = Object.fromEntries(
  FUEL_CATEGORIES.map(c => [c.id, c])
) as Record<FuelCategoryId, FuelCategory>;
