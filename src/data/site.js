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
  leadTime: '72 hours',
  leadTimeDays: 3,
}

export const menu = [
  {
    id: 'brown-butter-chocolate-chip',
    name: 'Brown Butter Chocolate Chip',
    category: 'Cookies',
    price: 24,
    unit: 'dozen',
    description:
      'Brown butter, dark chocolate and a finish of flaky sea salt. Crisp at the edge, soft through the middle.',
    tags: ['Best seller'],
    image: null,
  },
  {
    id: 'cinnamon-morning-buns',
    name: 'Cinnamon Morning Buns',
    category: 'Pastry',
    price: 32,
    unit: 'half dozen',
    description:
      'Laminated over three days, rolled in cinnamon sugar and baked to order the morning you pick up.',
    tags: ['Bake-to-order'],
    image: null,
  },
  {
    id: 'lemon-olive-oil-loaf',
    name: 'Lemon Olive Oil Loaf',
    category: 'Cakes',
    price: 28,
    unit: 'loaf',
    description:
      'Meyer lemon, good olive oil and a thin sugar glaze. Keeps beautifully for three days.',
    tags: [],
    image: null,
  },
  {
    id: 'seasonal-galette',
    name: 'Seasonal Fruit Galette',
    category: 'Pastry',
    price: 34,
    unit: '9-inch',
    description:
      'All-butter crust with whatever is best at the market that week — stone fruit, berries or apples.',
    tags: ['Seasonal'],
    image: null,
  },
  {
    id: 'celebration-cake',
    name: 'Celebration Cake',
    category: 'Cakes',
    price: 85,
    unit: '6-inch, serves 8',
    description:
      'Two-layer cake finished in Swiss meringue buttercream. Flavour and decoration chosen with you.',
    tags: ['Custom'],
    image: null,
  },
  {
    id: 'focaccia',
    name: 'Rosemary Focaccia',
    category: 'Bread',
    price: 18,
    unit: 'half sheet',
    description:
      'Slow-fermented overnight, dimpled with olive oil, rosemary and sea salt. Baked the day of pickup.',
    tags: [],
    image: null,
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
