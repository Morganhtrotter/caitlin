<template>
  <section id="ordering" class="how-outer">
    <div class="section how">
      <div class="head">
        <p class="eyebrow">How it works</p>
        <h2>Three steps, no app required</h2>
      </div>

      <ol class="steps">
        <li v-for="step in steps" :key="step.n">
          <span class="n">{{ step.n }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { steps } from '../data/site.js'
</script>

<style scoped>
.how-outer {
  background: var(--surface-alt);
  border-block: 1px solid var(--line);
}

.how {
  padding-top: clamp(3.5rem, 7vw, 5rem);
  padding-bottom: clamp(3.5rem, 7vw, 5rem);
}

.head {
  margin-bottom: 2.5rem;
}

h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  line-height: 1.1;
}

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
}

.steps li {
  border-top: 2px solid var(--accent);
  padding-top: 1.1rem;
}

.n {
  font-family: var(--font-label);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--accent);
}

.steps h3 {
  font-size: 1.3rem;
  margin-top: 0.4rem;
}

.steps p {
  color: var(--muted);
  margin-top: 0.5rem;
  font-size: 0.95rem;
}
</style>
