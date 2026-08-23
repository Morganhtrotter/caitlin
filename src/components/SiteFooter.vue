<template>
  <footer class="footer-outer">
    <div class="section footer">
      <a href="#hero" class="brand">
        <span class="mark">438</span>
        <span class="wordmark">Bakes</span>
      </a>

      <p class="tagline">
        {{ site.tagline }}
      </p>

      <ul class="links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#ordering">How it works</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a :href="site.instagramUrl" target="_blank" rel="noopener">Instagram</a>
        </li>
      </ul>

      <p class="fine">
        © {{ year }} {{ site.name }} · Baked in the {{ site.area }} · Made in a home kitchen
      </p>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../data/site.js'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer-outer {
  background: var(--ink);
  color: var(--paper);
}

.footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
  justify-items: center;
  gap: 1rem;
  text-align: center;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
}

.mark {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1;
  color: var(--accent-ink);
  background: var(--accent);
  border-radius: 50%;
  width: 2.1rem;
  height: 2.1rem;
  display: grid;
  place-items: center;
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
}

.tagline {
  font-family: var(--font-display);
  font-size: 1.1rem;
  opacity: 0.85;
}

.links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.75rem;
  margin: 0.5rem 0 0;
  padding: 0;
  font-size: 0.9rem;
}

.links a:hover {
  color: var(--honey);
}

.fine {
  margin-top: 1rem;
  font-size: 0.78rem;
  opacity: 0.6;
}
</style>
