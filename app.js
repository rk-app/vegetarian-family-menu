const WEEKS = [
  {
    label: "Week 1",
    theme: "Eggs + lentils foundation",
    highlight: "Iron + B12 from eggs and lentils; Ontario apples, carrots, kale",
    meals: [
      ["Mon", "Scrambled eggs, whole-grain toast, apple slices", "Cheese + hummus wrap, cucumber, milk", "Red lentil dal, basmati (½ white/½ brown), steamed broccoli", "Yogurt + berries; banana + thin peanut butter", "Iron + C"],
      ["Tue", "Iron-fortified oatmeal, milk, pear", "Leftover dal in thermos + yogurt", "Veggie omelette (spinach, mushroom, cheddar), roasted carrots, toast", "Cheese cubes + crackers; apple sauce", "B12 + greens"],
      ["Wed", "Greek yogurt parfait, granola, frozen blueberries", "Egg salad sandwich, carrot sticks, orange", "Black bean tacos, salsa, avocado, shredded lettuce + cheese", "Hummus + soft peppers; milk", "Protein + fibre"],
      ["Thu", "Boiled eggs, toast, kiwi", "Leftover taco fillings in quesadilla", "Tofu + bok choy stir-fry, brown rice, sesame", "Cottage cheese + peach; oat rings", "Calcium + zinc"],
      ["Fri", "Whole-grain pancakes, yogurt, maple drizzle", "Pasta with pea pesto + cherry tomatoes", "Chickpea curry, naan or roti, cucumber raita", "Smoothie (milk, banana, spinach); crackers", "Iron + calcium"],
      ["Sat", "Veggie frittata square, toast, fruit", "Grilled cheese, tomato soup, apple", "Baked sweet potato boats with black beans, corn, cheese", "Trail mix for adults; soft cheese stick for toddler", "Orange veg"],
      ["Sun", "French toast, berries, milk", "Leftover sweet potato boats", "Mushroom + lentil shepherd’s pie, green beans", "Yogurt; pear slices", "Batch iron meal"],
    ],
    groceries: [
      ["Produce (Ontario fall)", "Apples, pears, carrots, broccoli, kale/spinach, mushrooms, cucumbers, peppers, lettuce, tomatoes, sweet potatoes, green beans, banana, kiwi, avocado, garlic, onion, ginger, lemon"],
      ["Protein & dairy", "Eggs (2–3 dozen), milk 1–2%, plain Greek yogurt, cheddar, cottage cheese, firm tofu, dried red lentils, canned black beans, canned chickpeas, peanut butter (smooth)"],
      ["Grains & pantry", "Whole-grain bread/wraps, oats, brown + white rice, pasta, tortillas, naan or flour for roti, iron-fortified cereal, hummus, salsa, canned tomatoes, olive oil, mild curry spices"],
      ["Frozen", "Blueberries or mixed berries, corn, spinach (backup), peas for pesto"],
    ],
    batch: [
      "Cook a big pot of red lentils Sunday — freeze half",
      "Hard-boil 6 eggs for grab snacks/lunches",
      "Wash and cut carrots/cucumber for the week",
    ],
  },
  {
    label: "Week 2",
    theme: "Squash season + egg dinners",
    highlight: "Butternut/pumpkin for vitamin A; eggs 3–4×; dark greens daily",
    meals: [
      ["Mon", "Eggs in a hole, orange segments", "Lentil soup (frozen from W1) + toast + cheese", "Butternut squash mac & cheese with peas", "Yogurt; apple + cheese", "Calcium + A"],
      ["Tue", "Overnight oats with chia, milk, apple", "Leftover mac, cucumber", "Shakshuka (eggs in tomato sauce), whole-grain toast, salad", "Hummus + pita; banana", "B12 + lycopene"],
      ["Wed", "Toast with ricotta + honey, berries", "Bean burrito bowl leftovers prep", "Quinoa + roasted veg bowl, chickpeas, tahini drizzle", "Smoothie; crackers + cheese", "Zinc + iron"],
      ["Thu", "Scramble with leftover roasted veg", "Cheese + bean quesadilla, salsa", "Egg fried rice (day-old rice), edamame, steamed bok choy", "Yogurt; pear", "Protein density"],
      ["Fri", "Fortified cereal, milk, banana", "Pasta primavera with white beans", "Paneer or halloumi + pepper fajitas (or extra-firm tofu)", "Carrot sticks + hummus; milk", "Calcium"],
      ["Sat", "Weekend omelette bar (cheese, spinach, tomato)", "Leftover fajitas", "Pumpkin/lentil soup, grilled cheese dippers", "Apple crisp yogurt cup", "Comfort + iron"],
      ["Sun", "Yogurt bowls, granola, fruit", "Soup + toast", "Spinach + ricotta lasagna (or stuffed shells), side salad", "Cheese; soft fruit", "Batch freeze slices"],
    ],
    groceries: [
      ["Produce", "Butternut or sugar pumpkin, spinach/kale, bok choy, peppers, tomatoes, cucumbers, carrots, apples, pears, oranges, banana, berries (fresh or frozen), salad greens, onion, garlic"],
      ["Protein & dairy", "Eggs, milk, yogurt, ricotta, mozzarella or cheddar, paneer/halloumi or extra tofu, canned white beans, chickpeas, edamame (frozen), tahini, peanut butter"],
      ["Grains & pantry", "Pasta (incl. shells/lasagna sheets), quinoa, rice, tortillas, pita, whole-grain bread, oats, chia seeds, canned crushed tomatoes, vegetable broth, mild spices"],
      ["Frozen / backup", "Peas, spinach, berries; leftover W1 lentils if any"],
    ],
    batch: [
      "Roast a tray of squash + root veg midweek",
      "Cook quinoa once — use for bowls and toddler soft mash",
      "Freeze lasagna portions for a busy night later",
    ],
  },
  {
    label: "Week 3",
    theme: "Bean variety + family one-pots",
    highlight: "Rotate legumes for iron/zinc; eggs midweek; Ontario cabbage & apples",
    meals: [
      ["Mon", "Boiled eggs, toast, apple", "Leftover lasagna or soup", "Three-sisters style chili (beans, corn, squash), rice or cornbread", "Yogurt; banana PB toast fingers", "Iron pot"],
      ["Tue", "Oatmeal with ground flax + milk", "Chili bowls with cheese", "Egg + potato hash, sautéed cabbage, ketchup for toddler", "Cottage cheese; grapes (halved)", "B12 + greens"],
      ["Wed", "Yogurt + fortified cereal mix", "Hummus plate: pita, soft veg, cheese, fruit", "Spaghetti with lentil tomato sauce, side salad", "Smoothie; crackers", "Toddler-friendly iron"],
      ["Thu", "Scrambled eggs, fruit", "Leftover pasta", "Baked falafel or soft chickpea patties, tzatziki, rice, cucumber", "Apple + cheese; milk", "Plant protein"],
      ["Fri", "Toast with avocado + egg", "Bean + cheese burritos", "Cauliflower + chickpea tray bake, yogurt sauce, couscous", "Yogurt; pear", "Zinc + C"],
      ["Sat", "Pancakes or waffles, berries, milk", "Leftover tray bake", "Mushroom stroganoff (yogurt or cream), egg noodles, peas", "Cheese stick; fruit", "Comfort Saturday"],
      ["Sun", "Frittata with leftover veg", "Soup + sandwich", "Vegetable biryani-style rice with eggs on top, raita, mild mango chutney", "Yogurt; soft fruit", "Week close protein"],
    ],
    groceries: [
      ["Produce", "Cabbage, cauliflower, mushrooms, cucumbers, carrots, apples, bananas, grapes (seedless), salad, avocado, potatoes, onion, garlic, cilantro or parsley, lemon"],
      ["Protein & dairy", "Eggs, milk, yogurt (for tzatziki/raita), cheddar, cottage cheese, canned kidney + black beans, dried/canned lentils, chickpeas (extra for patties), hummus"],
      ["Grains & pantry", "Spaghetti, egg noodles or pasta, rice, couscous, tortillas, pita, bread, oats, ground flax, cornmeal (optional), tomato sauce/paste, mild spices, peanut butter"],
      ["Frozen", "Corn, peas, squash cubes if fresh squash is gone, berries"],
    ],
    batch: [
      "Double the chili — freeze 4 adult portions",
      "Mix chickpea patties ahead; freeze uncooked between parchment",
      "Prep tzatziki once for 2–3 meals",
    ],
  },
  {
    label: "Week 4",
    theme: "Reset pantry + freezer use",
    highlight: "Use leftovers/freezer; fill gaps with eggs, dairy, fortified foods",
    meals: [
      ["Mon", "Fortified cereal, milk, orange", "Egg salad on crackers or wrap", "Frozen chili or dal night + fresh salad + yogurt", "Banana PB; cheese", "Use freezer"],
      ["Tue", "Eggs, toast, kiwi or apple", "Cheese toast, leftover soup, fruit", "Tofu scramble tacos or burritos, salsa, avocado", "Yogurt; carrot hummus", "Iron + B12"],
      ["Wed", "Oatmeal, milk, raisins (chopped for toddler)", "Leftover tacos", "Baked potato bar: beans, cheese, broccoli, yogurt dollop", "Smoothie; crackers", "Calcium night"],
      ["Thu", "Yogurt parfait", "Hummus + egg + veg plate", "Mild miso or broth veg noodle soup with soft egg", "Apple; milk", "Warm zinc meal"],
      ["Fri", "Pancakes from mix or batter, fruit", "Pasta + frozen peas + Parmesan", "Pizza night: whole-grain crust, tomato, mozzarella, spinach", "Yogurt; pear", "Family fun"],
      ["Sat", "Big brunch omelette, toast, fruit salad", "Leftover pizza or sandwiches", "White bean + kale stew, crusty bread, cheese", "Cottage cheese; berries", "Greens + protein"],
      ["Sun", "French toast, berries", "Stew leftovers", "Meal-prep reset: quiche or sheet-pan eggs + big salad; freeze extras", "Yogurt; banana", "Prep next month"],
    ],
    groceries: [
      ["Produce (fill gaps)", "Broccoli/kale, salad greens, potatoes, peppers, tomatoes, avocado, apples, bananas, oranges/kiwi, onion, garlic, lemon — buy only what freezer doesn’t cover"],
      ["Protein & dairy", "Eggs, milk, yogurt, mozzarella, cheddar, Parmesan, firm tofu, canned white beans, peanut butter, hummus restock"],
      ["Grains & pantry", "Bread, wraps, pasta, rice if low, pizza dough or naan bases, oats, fortified cereal, canned tomatoes, mild miso or broth, salsa"],
      ["Frozen / check first", "Use chili, dal, lasagna, berries, peas, spinach before buying duplicates"],
    ],
    batch: [
      "Inventory freezer before shopping — Week 4 is a use-up week",
      "Make one quiche/frittata for Mon–Tue lunches",
      "Restock spice staples and peanut butter if low",
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderWeek(index) {
  const week = WEEKS[index];
  const mealRows = week.meals
    .map(
      (row) =>
        `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`
    )
    .join("");

  const groceries = week.groceries
    .map(
      ([title, items]) =>
        `<div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(items)}</p></div>`
    )
    .join("");

  const batch = week.batch.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  return `
    <p class="theme">${escapeHtml(week.theme)}</p>
    <p class="highlight">${escapeHtml(week.highlight)}</p>
    <h3>Meals</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Snacks</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>${mealRows}</tbody>
      </table>
    </div>
    <h3>Grocery list</h3>
    <div class="grocery-grid">${groceries}</div>
    <h3>Batch / prep</h3>
    <ul class="batch-list">${batch}</ul>
  `;
}

const panel = document.getElementById("week-panel");
const tabs = [...document.querySelectorAll(".week-tabs button")];

function selectWeek(index) {
  tabs.forEach((tab, i) => {
    tab.setAttribute("aria-selected", i === index ? "true" : "false");
  });
  panel.innerHTML = renderWeek(index);
  panel.style.animation = "none";
  // force reflow for a light refresh motion
  void panel.offsetWidth;
  panel.style.animation = "";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectWeek(Number(tab.dataset.week));
  });
});

selectWeek(0);
