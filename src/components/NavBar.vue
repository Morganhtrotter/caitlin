<template>
  <header class="nav-outer">
    <nav class="nav section">
      <a href="#hero" class="brand">
        <span class="mark">438</span>
        <span class="wordmark">Bakes</span>
      </a>

      <ul class="links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#ordering">How it works</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a href="#order" class="btn primary nav-cta">Place an order</a>
        </li>
      </ul>

      <button
        class="toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span :class="{ open: isOpen }" />
      </button>
    </nav>

    <ul v-if="isOpen" class="flyout">
      <li>
        <a href="#menu" @click="isOpen = false">Menu</a>
      </li>
      <li>
        <a href="#ordering" @click="isOpen = false">How it works</a>
      </li>
      <li>
        <a href="#about" @click="isOpen = false">About</a>
      </li>
      <li>
        <a href="#order" @click="isOpen = false">Place an order</a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.nav-outer {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
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
  letter-spacing: -0.02em;
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}

.links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  font-size: 0.92rem;
  font-weight: 500;
}

.links a:not(.nav-cta):hover {
  color: var(--accent);
}

.nav-cta {
  padding: 0.55rem 1.1rem;
  font-size: 0.88rem;
}

.toggle {
  display: none;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  padding: 0;
  position: relative;
}

.toggle span,
.toggle span::before,
.toggle span::after {
  content: '';
  position: absolute;
  left: 0.3rem;
  right: 0.3rem;
  height: 1.5px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.2s ease;
}

.toggle span {
  top: 50%;
}

.toggle span::before {
  top: -0.42rem;
}

.toggle span::after {
  top: 0.42rem;
}

.toggle span.open {
  background: transparent;
}

.toggle span.open::before {
  top: 0;
  transform: rotate(45deg);
}

.toggle span.open::after {
  top: 0;
  transform: rotate(-45deg);
}

.flyout {
  list-style: none;
  margin: 0;
  padding: 0 var(--gutter) 1.25rem;
  display: none;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid var(--line);
}

@media (max-width: 46rem) {
  .links {
    display: none;
  }

  .toggle {
    display: block;
  }

  .flyout {
    display: flex;
  }
}
</style>
