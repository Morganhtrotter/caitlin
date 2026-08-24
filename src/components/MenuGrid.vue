<template>
  <section id="menu" class="section menu">
    <div class="menu-head">
      <div>
        <p class="eyebrow">The menu</p>
        <h2>The bakes</h2>
        <p class="sub">
          Everything is made in small batches to order. Tap the items you want and they'll be
          waiting for you in the order form below.
        </p>
      </div>

      <div class="filters" role="group" aria-label="Filter menu by category">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="chip"
          :class="{ active: active === cat }"
          :aria-pressed="active === cat"
          @click="active = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <ul class="grid">
      <li v-for="item in visible" :key="item.id" class="card">
        <div class="photo">
          <img v-if="item.image" :src="item.image" :alt="item.name" loading="lazy" />
          <span v-else class="photo-placeholder" aria-hidden="true">{{ initials(item.name) }}</span>
          <span v-if="item.tags.length" class="badge">{{ item.tags[0] }}</span>
        </div>

        <div class="body">
          <p class="cat">
            {{ item.category }}
          </p>
          <h3>{{ item.name }}</h3>
          <p class="desc">
            {{ item.description }}
          </p>

          <details v-if="item.ingredients?.length" class="ingredients">
            <summary>
              Ingredients
              <span class="count">{{ item.ingredients.length }}</span>
            </summary>
            <p class="ingredients-list">{{ item.ingredients.join(', ') }}</p>
          </details>

          <dl class="specs">
            <div v-if="item.allergens?.length" class="spec allergens">
              <dt>Contains</dt>
              <dd>{{ item.allergens.join(', ') }}</dd>
            </div>
            <div v-if="item.netWeight" class="spec">
              <dt>Net wt</dt>
              <dd>{{ item.netWeight }}</dd>
            </div>
          </dl>

          <div class="foot">
            <p class="price">
              <strong>${{ item.price }}</strong>
              <span>/ {{ item.unit }}</span>
            </p>
            <button
              type="button"
              class="add"
              :class="{ on: isSelected(item.id) }"
              @click="toggle(item.id)"
            >
              {{ isSelected(item.id) ? 'Added ✓' : 'Add to order' }}
            </button>
          </div>
        </div>
      </li>
    </ul>

    <p class="note">
      Don't see what you're after? Custom flavours, dietary swaps and larger orders are all possible
      — just ask.
    </p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { menu } from '../data/site.js'
import { useOrder } from '../composables/useOrder.js'

const { isSelected, toggle } = useOrder()

const categories = ['All', ...new Set(menu.map((m) => m.category))]
const active = ref('All')

const visible = computed(() =>
  active.value === 'All' ? menu : menu.filter((m) => m.category === active.value)
)

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}
</script>

<style scoped>
.menu {
  padding-top: clamp(3.5rem, 7vw, 5.5rem);
  padding-bottom: clamp(3.5rem, 7vw, 5.5rem);
}

.menu-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  line-height: 1.1;
}

.sub {
  color: var(--muted);
  max-width: 48ch;
  margin-top: 0.75rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.chip {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--muted);
  transition:
    background-color 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease;
}

.chip:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.chip.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lift);
}

.photo {
  position: relative;
  aspect-ratio: 4 / 3;
  background: linear-gradient(140deg, var(--surface-alt), var(--honey));
  display: grid;
  place-items: center;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-placeholder {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--surface);
  opacity: 0.85;
  letter-spacing: 0.02em;
}

.badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: var(--paper);
  color: var(--accent);
  font-family: var(--font-label);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
}

.body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.cat {
  font-family: var(--font-label);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.35rem;
}

h3 {
  font-size: 1.25rem;
  line-height: 1.2;
}

.desc {
  color: var(--muted);
  font-size: 0.92rem;
  margin-top: 0.5rem;
}

.ingredients {
  margin-top: 0.75rem;
}

.ingredients summary {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  list-style: none;
  font-family: var(--font-label);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  cursor: pointer;
  user-select: none;
  width: fit-content;
}

.ingredients summary::-webkit-details-marker {
  display: none;
}

.ingredients summary::before {
  content: '';
  width: 0.5em;
  height: 0.5em;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  transition: transform 0.18s ease;
  flex-shrink: 0;
}

.ingredients[open] summary::before {
  transform: rotate(45deg);
}

.ingredients summary:hover {
  color: var(--accent);
}

.ingredients summary .count {
  background: var(--surface-alt);
  color: var(--muted);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
}

.ingredients-list {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.5;
  text-transform: capitalize;
}

.specs {
  margin: 0.75rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.spec {
  display: flex;
  gap: 0.4rem;
  font-size: 0.82rem;
  line-height: 1.4;
}

.spec dt {
  flex-shrink: 0;
  font-weight: 600;
  color: var(--muted);
}

.spec dd {
  margin: 0;
  color: var(--muted);
}

.spec.allergens dt {
  color: var(--accent);
}

.spec.allergens dd {
  color: var(--ink);
  font-weight: 500;
}

.foot {
  margin-top: auto;
  padding-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.price {
  font-size: 0.85rem;
  color: var(--muted);
}

.price strong {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ink);
  margin-right: 0.25rem;
}

.add {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  white-space: nowrap;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.add:hover {
  background: var(--accent);
  color: var(--accent-ink);
}

.add.on {
  background: var(--accent);
  color: var(--accent-ink);
}

.note {
  margin-top: 2rem;
  color: var(--muted);
  font-size: 0.95rem;
  text-align: center;
}
</style>
