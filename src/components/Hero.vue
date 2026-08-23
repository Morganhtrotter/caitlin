<template>
  <section id="hero" class="hero-outer">
    <div class="section hero">
      <div class="copy">
        <p class="eyebrow">Baked to order in the {{ site.area }}</p>

        <h1>Small-batch bakes,<br />made the day you get them.</h1>

        <p class="lede">
          438 Bakes is Caitlin's home bakery — cookies, cakes, pastry and bread in small batches,
          using real butter and whatever fruit is best that week. Order what you like, pick it up
          warm.
        </p>

        <div class="ctas">
          <a href="#menu" class="btn primary">See the menu</a>
          <a href="#order" class="btn secondary">Place an order</a>
        </div>
      </div>

      <div class="art" aria-hidden="true">
        <svg viewBox="0 0 360 360">
          <circle cx="180" cy="176" r="164" fill="var(--surface-alt)" />
          <ellipse cx="180" cy="288" rx="128" ry="15" fill="var(--ink)" opacity="0.09" />
          <rect x="76" y="196" width="208" height="88" rx="10" fill="var(--honey)" />
          <rect x="76" y="228" width="208" height="14" fill="var(--accent)" opacity="0.55" />
          <rect x="108" y="124" width="144" height="74" rx="9" fill="var(--honey)" />
          <path
            d="M108 133c0-5 4-9 9-9h126c5 0 9 4 9 9v9c-9 0-9 8-18 8s-9-8-18-8-9 8-18 8-9-8-18-8-9 8-18 8-9-8-18-8-9 8-18 8-9-8-18-8v-9z"
            fill="var(--cream)"
          />
          <circle cx="180" cy="110" r="13" fill="var(--accent)" />
          <path
            d="M180 97c1-8 6-12 12-13"
            stroke="var(--accent)"
            stroke-width="3"
            stroke-linecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>

    <ul class="trust section">
      <li v-for="item in trust" :key="item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { site } from '../data/site.js'

const trust = [
  'Baked fresh to order',
  'Local pickup',
  `${site.leadTime} notice`,
  'Custom cakes welcome',
]
</script>

<style scoped>
.hero-outer {
  border-bottom: 1px solid var(--line);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding-top: clamp(3rem, 7vw, 5.5rem);
  padding-bottom: clamp(2rem, 5vw, 3.5rem);
}

h1 {
  font-size: clamp(2.4rem, 5.4vw, 4.1rem);
  line-height: 1.03;
  font-weight: 600;
  margin: 0;
}

.lede {
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 46ch;
  margin: 1.4rem 0 0;
}

.ctas {
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.art svg {
  width: 100%;
  height: auto;
  max-width: 26rem;
  margin-inline: auto;
}

.trust {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 2.5rem;
  margin: 0;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  border-top: 1px solid var(--line);
  font-family: var(--font-label);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.trust li {
  display: flex;
  align-items: center;
  gap: 0.55em;
}

.trust li::before {
  content: '';
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background: var(--accent);
  flex: none;
}

@media (max-width: 52rem) {
  .hero {
    grid-template-columns: 1fr;
  }

  .art {
    order: -1;
  }

  .art svg {
    max-width: 15rem;
  }
}
</style>
