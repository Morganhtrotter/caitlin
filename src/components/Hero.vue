<template>
  <section id="hero" class="hero-outer">
    <div class="section hero">
      <div class="copy">
        <p class="eyebrow">Baked to order in the {{ site.area }}</p>

        <h1>Sharing homemade desserts,<br />inspired by family recipes.</h1>

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
          <ellipse cx="180" cy="292" rx="118" ry="14" fill="var(--cocoa)" opacity="0.16" />
          <!-- Cookie body: hand-shaped edge rather than a perfect circle. -->
          <path
            d="M180 61C204.4 60.9 234.5 81.6 253.5 100.5C272.5 119.3 293.9 149.4 294 174C294.1 198.6 273.2 229.6 254.2 248.2C235.2 266.9 204.4 286.4 180 286C155.6 285.6 126.4 264.8 107.9 246.1C89.4 227.5 69.1 198.2 69 174C68.9 149.8 88.7 120 107.2 101.2C125.7 82.3 155.6 61.1 180 61Z"
            fill="var(--honey)"
          />
          <!-- Lighter centre leaves a toasted rim around the edge. -->
          <circle cx="180" cy="174" r="92" fill="var(--cream)" opacity="0.22" />
          <g fill="var(--cocoa)">
            <circle cx="135" cy="134" r="15" />
            <circle cx="205" cy="119" r="13" />
            <circle cx="235" cy="179" r="16" />
            <circle cx="160" cy="199" r="14" />
            <circle cx="120" cy="204" r="11" />
            <circle cx="190" cy="234" r="13" />
            <circle cx="248" cy="222" r="10" />
          </g>
          <g fill="var(--honey)">
            <circle cx="309" cy="271" r="6" />
            <circle cx="325" cy="255" r="3.5" />
            <circle cx="57" cy="264" r="4.5" />
          </g>
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
