<template>
  <section id="hero" class="hero-outer">
    <div class="section hero">
      <div class="copy">
        <p class="eyebrow">Baked to order in the {{ site.area }}</p>

        <h1>Sharing homemade desserts,<br />inspired by family recipes.</h1>

        <p class="lede">
          438 Bakes is Caitlin's home bakery — cookies and other desserts in small batches, using
          real butter and two generations of love you can taste. Order what you like, pick it up
          warm.
        </p>

        <div class="ctas">
          <a href="#menu" class="btn primary">See the menu</a>
          <a href="#order" class="btn secondary">Place an order</a>
        </div>
      </div>

      <div class="art" aria-hidden="true">
        <svg viewBox="0 0 360 360">
          <circle cx="180" cy="188" r="164" fill="var(--surface-alt)" />
          <ellipse cx="196" cy="268" rx="118" ry="14" fill="var(--cocoa)" opacity="0.14" />

          <!-- Oat crumble bar. Length slopes down-right, depth up-right, so the
               block sits flat instead of reading as a ramp. -->
          <g>
            <!-- Front face: oat topping, jam, shortbread base. -->
            <polygon points="168,182 280,202 280,220 168,200" fill="var(--honey)" />
            <polygon points="168,200 280,220 280,232 168,212" fill="var(--jam)" />
            <polygon points="168,212 280,232 280,256 168,236" fill="var(--cream)" />
            <polygon points="168,182 280,202 280,256 168,236" fill="var(--cocoa)" opacity="0.08" />

            <!-- Right face, shaded harder to turn the corner. -->
            <polygon points="280,202 324,166 324,184 280,220" fill="var(--honey)" />
            <polygon points="280,220 324,184 324,196 280,232" fill="var(--jam)" />
            <polygon points="280,232 324,196 324,220 280,256" fill="var(--cream)" />
            <polygon points="280,202 324,166 324,220 280,256" fill="var(--cocoa)" opacity="0.22" />

            <!-- Top face with scattered oat flakes. -->
            <polygon points="168,182 280,202 324,166 212,146" fill="var(--honey)" />
            <g fill="var(--cream)" opacity="0.9">
              <rect x="191" y="171" width="14" height="6" rx="3" transform="rotate(-14 198 174)" />
              <rect x="221" y="163" width="14" height="6" rx="3" transform="rotate(20 228 166)" />
              <rect x="222" y="179" width="14" height="6" rx="3" transform="rotate(6 229 182)" />
              <rect x="216" y="156" width="14" height="6" rx="3" transform="rotate(-22 223 159)" />
              <rect x="250" y="173" width="14" height="6" rx="3" transform="rotate(12 257 176)" />
              <rect x="254" y="187" width="14" height="6" rx="3" transform="rotate(-8 261 190)" />
              <rect x="254" y="158" width="14" height="6" rx="3" transform="rotate(26 261 161)" />
              <rect x="283" y="174" width="14" height="6" rx="3" transform="rotate(16 290 177)" />
              <rect x="277" y="162" width="14" height="6" rx="3" transform="rotate(-18 284 165)" />
              <rect x="275" y="184" width="14" height="6" rx="3" transform="rotate(8 282 187)" />
            </g>
          </g>

          <!-- Chocolate chip cookie, scaled down and set in front. -->
          <g transform="translate(112 212) scale(0.61) translate(-180 -174)">
            <path
              d="M180 61C204.4 60.9 234.5 81.6 253.5 100.5C272.5 119.3 293.9 149.4 294 174C294.1 198.6 273.2 229.6 254.2 248.2C235.2 266.9 204.4 286.4 180 286C155.6 285.6 126.4 264.8 107.9 246.1C89.4 227.5 69.1 198.2 69 174C68.9 149.8 88.7 120 107.2 101.2C125.7 82.3 155.6 61.1 180 61Z"
              fill="var(--honey)"
            />
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
          </g>

          <g fill="var(--honey)">
            <circle cx="72" cy="276" r="5" />
            <circle cx="196" cy="284" r="4.5" />
            <circle cx="330" cy="238" r="4" />
          </g>
        </svg>
      </div>
    </div>

    <div class="trust-wrapper">
      <ul class="trust section">
        <li v-for="item in trust" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { site, trust } from '../data/site.js'
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
  font-family: var(--font-label);
  max-width: var(--col-max);
  margin: auto;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  justify-content: space-between;
}

.trust-wrapper {
  border-top: 1px solid var(--line);
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
