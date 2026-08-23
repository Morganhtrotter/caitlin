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
    id: 'classic-chocolate-chip-cookie',
    name: `Classic Chocolate Chip Cookie's`,
    category: 'Cookies',
    price: 20,
    unit: 'dozen',
    description:
      `My Grandma's classic Chocolate Chip Cookie recipe. Crisp at the edge, soft through the middle.`,
    tags: ['Best seller'],
    image: null,
  },
  {
    id: 'oatmeal-pecan-chocolate-chip',
    name: `Oatmeal Pecan Chocolate Chip Cookie's`,
    category: 'Cookies',
    price: 25,
    unit: 'dozen',
    description:
      'A random request from my dad quickly turned into a family favorite.',
    tags: [],
    image: null,
  },
  {
    id: 'pistachio-double-chocolate-chip',
    name: `Pistachio Double Chocolate Chip Cookie's`,
    category: 'Cookies',
    price: 30,
    unit: 'dozen',
    description:
      'A craving turned into our new favorite cookie.',
    tags: ['New'],
    image: null,
  },
  {
    id: 'caramel-bar',
    name: 'Caramel Bar',
    category: 'Dessert Bar',
    price: 54,
    unit: '9-inch x 11-inch',
    description:
      'They are as good as they sound. Enough said.',
    tags: ['Best Seller'],
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
