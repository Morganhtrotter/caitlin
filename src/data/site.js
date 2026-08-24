// ─────────────────────────────────────────────────────────────────────────────
// Everything Caitlin needs to edit lives in this file.
// Change text, prices and menu items here — no component edits required.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: '438 Bakes',
  tagline: 'Small-batch baking, made to order.',
  // TODO: swap in the real ordering email + handle before launch.
  email: 'hello@438bakes.com',
  instagram: '438bakes',
  instagramUrl: 'https://instagram.com/438bakes',
  area: 'San Francisco Bay Area',
  leadTimeDays: 3,
}

// Short reassurances shown under the hero.
export const trust = [
  'Baked fresh to order',
  'Local pickup',
  'Family Recipes',
]

export const menu = [
  {
    id: 'classic-chocolate-chip-cookie',
    name: `Classic Chocolate Chip Cookie's`,
    category: 'Cookies',
    price: 20,
    unit: 'dozen',
    description: `My Grandma's classic Chocolate Chip Cookie recipe. Crisp at the edge, soft through the middle.`,
    tags: ['Best seller'],
    image: null,
    ingredients: [
      'Flour',
      'Salt',
      'Unsalted Butter',
      'Brown sugar',
      'Granulated sugar',
      'Eggs',
      'Vanilla extract',
      'Baking soda',
      'Semi-sweet chocolate chips',
    ],
    allergens: ['Wheat', 'Egg', 'Milk', 'Soy'],
    netWeight: '1 lb 4 oz (570 g)',
  },
  {
    id: 'oatmeal-pecan-chocolate-chip',
    name: `Oatmeal Pecan Chocolate Chip Cookie's`,
    category: 'Cookies',
    price: 25,
    unit: 'dozen',
    description: 'A random request from my dad quickly turned into a family favorite.',
    tags: [],
    image: null,
    ingredients: [
      'Flour',
      'Rolled old fashioned oats',
      'Unsalted butter',
      'Brown sugar',
      'Granulated sugar',
      'Egg',
      'Vanilla extract',
      'Baking soda',
      'Baking powder',
      'Maple syrup',
      'Cinnamon',
      'Salt',
      'Pecans',
      'Nutmeg',
      'Semi-sweet chocolate chips',
    ],
    allergens: ['Wheat', 'Egg', 'Milk', 'Soy', 'Tree nuts (pecans)'],
    netWeight: '1 lb 6 oz (620 g)',
  },
  {
    id: 'pistachio-double-chocolate-chip',
    name: `Pistachio Double Chocolate Chip Cookie's`,
    category: 'Cookies',
    price: 30,
    unit: 'dozen',
    description: 'A craving turned into our new favorite cookie.',
    tags: ['New'],
    image: null,
    ingredients: [
      'Flour',
      'Unsalted butter',
      'Brown sugar',
      'Granulated sugar',
      'Eggs',
      'Vanilla extract',
      'Baking soda',
      'Salt',
      'Pistachios',
      'White chocolate chips',
      'Dark chocolate chips',
    ],
    allergens: ['Wheat', 'Egg', 'Milk', 'Soy', 'Tree nuts (pistachios)'],
    netWeight: '1 lb 5 oz (595 g)',
  },
  {
    id: 'caramel-bar',
    name: 'Caramel Bar',
    category: 'Dessert Bar',
    price: 54,
    unit: '9-inch x 11-inch',
    description: 'They are as good as they sound. Enough said.',
    tags: ['Best Seller'],
    image: null,
    ingredients: [
      'Flour',
      'Rolled old fashioned oats',
      'Unsalted butter',
      'Brown sugar',
      'Eggs',
      'Baking soda',
      'Salt',
      'Semi-sweet chocolate chips',
      'Whipping cream',
      `Werther's original chewy caramels`,
    ],
    allergens: ['Wheat', 'Egg', 'Milk', 'Soy'],
    netWeight: '3 lb 8 oz (1.6 kg)',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Pick your bakes',
    body: 'Browse the menu and note what you would like and roughly how much. Custom cakes welcome.',
  },
  {
    n: '02',
    title: 'Send the request',
    body: `Fill in the order form and it opens a pre-written email. Caitlin confirms availability and the total, usually within a day.`,
  },
  {
    n: '03',
    title: 'Collect it fresh',
    body: 'Pay on confirmation, then pick up locally on your chosen date. Everything is baked that morning.',
  },
]
