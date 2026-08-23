# 438 Bakes

Caitlin's home bakery — Vue 3 + Vite, deployed to GitHub Pages.

Live: **https://Morganhtrotter.github.io/caitlin/**

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/caitlin/
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # eslint
npm run format   # prettier
```

## Editing the site content

Almost everything Caitlin needs to change lives in **`src/data/site.js`**:

- `site` — bakery name, contact email, Instagram handle, pickup area, lead time
- `menu` — the items, prices, units, descriptions and badges
- `steps` — the three "how it works" cards

No component edits needed to add, remove, reprice, or reword a menu item.

### Adding a photo to a menu item

1. Drop the image into `src/assets/` (landscape, roughly 4:3, ~1200px wide).
2. Import it at the top of `src/data/site.js` and set the item's `image` field:

```js
import cookies from '../assets/cookies.jpg'
// ...
{ id: 'brown-butter-chocolate-chip', image: cookies, /* ... */ }
```

Items with `image: null` fall back to a warm gradient tile with the item's initials.

The About section's portrait placeholder lives in `src/components/About.vue`.

## How ordering works

There is no backend. The order form composes a pre-filled `mailto:` link with the
selected items, pickup date and notes — the customer's own mail app opens and they
press send. Nothing is transmitted from the page itself, so there is no server to
run, no form service to pay for, and no customer data stored anywhere.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to the `gh-pages` branch. GitHub Pages serves from that branch.

**One-time GitHub setup:** Settings → Pages → Source = "Deploy from a branch",
Branch = `gh-pages`, folder = `/ (root)`.

### Moving to a custom domain later

1. Set `base: '/'` in `vite.config.js`.
2. Add `public/CNAME` containing the bare domain (e.g. `438bakes.com`).
3. Add `cname: 438bakes.com` under the deploy step's `with:` in the workflow.
4. Point the domain's DNS at GitHub Pages, then set it in Settings → Pages.
