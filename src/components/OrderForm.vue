<template>
  <section id="order" class="order-outer">
    <div class="section order">
      <div class="intro">
        <p class="eyebrow">Place an order</p>
        <h2>Tell me what you'd like</h2>
        <p class="sub">
          Fill this in and it opens a pre-written email in your mail app — nothing is sent until you
          hit send yourself. I'll reply with availability and the final total, usually within a day.
          Please allow {{ site.leadTime }} notice.
        </p>

        <ul class="contact">
          <li>
            <span>Email</span>
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          </li>
          <li>
            <span>Instagram</span>
            <a :href="site.instagramUrl" target="_blank" rel="noopener">@{{ site.instagram }}</a>
          </li>
          <li>
            <span>Pickup</span>
            <p>{{ site.area }}</p>
          </li>
        </ul>
      </div>

      <form class="form" @submit.prevent="submit">
        <div class="selected">
          <div class="selected-head">
            <h3>Your order</h3>
            <button v-if="selected.length" type="button" class="clear" @click="clear">Clear</button>
          </div>

          <p v-if="!selected.length" class="empty">
            Nothing picked yet — choose items from the menu above, or just describe what you want in
            the notes.
          </p>

          <ul v-else>
            <li v-for="item in selected" :key="item.id">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">${{ item.price }} / {{ item.unit }}</span>
              <button
                type="button"
                class="remove"
                :aria-label="`Remove ${item.name}`"
                @click="toggle(item.id)"
              >
                ×
              </button>
            </li>
          </ul>

          <p v-if="selected.length" class="estimate">
            Estimated total <strong>${{ estimate }}</strong>
            <span>— one of each, before any custom work</span>
          </p>
        </div>

        <div class="fields">
          <label>
            <span>Your name</span>
            <input v-model="form.name" type="text" required autocomplete="name" />
          </label>

          <label>
            <span>Email</span>
            <input v-model="form.email" type="email" required autocomplete="email" />
          </label>

          <label>
            <span>Pickup date</span>
            <input v-model="form.date" type="date" :min="minDate" />
          </label>

          <label class="full">
            <span>Notes <em>— quantities, flavours, allergies, the occasion</em></span>
            <textarea v-model="form.notes" rows="4" />
          </label>
        </div>

        <button type="submit" class="btn primary submit">Open my order email →</button>

        <p class="fallback">
          Mail app not opening? Copy the details to
          <a :href="`mailto:${site.email}`">{{ site.email }}</a> or DM
          <a :href="site.instagramUrl" target="_blank" rel="noopener">@{{ site.instagram }}</a
          >.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { menu, site } from '../data/site.js'
import { useOrder } from '../composables/useOrder.js'

const { selectedIds, toggle, clear } = useOrder()

const form = reactive({
  name: '',
  email: '',
  date: '',
  notes: '',
})

const selected = computed(() => menu.filter((m) => selectedIds.value.includes(m.id)))

const estimate = computed(() => selected.value.reduce((sum, m) => sum + m.price, 0))

// Earliest pickup respects the stated lead time.
const minDate = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + site.leadTimeDays)
  return d.toISOString().slice(0, 10)
})

function submit() {
  const lines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Preferred pickup date: ${form.date || 'flexible'}`,
    '',
    'Items:',
    ...(selected.value.length
      ? selected.value.map((m) => `  • ${m.name} — $${m.price} / ${m.unit}`)
      : ['  (see notes)']),
    '',
    'Notes:',
    form.notes || '  —',
    '',
    'Thank you!',
  ]

  const subject = `Order request from ${form.name}`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join('\n'))}`
}
</script>

<style scoped>
.order-outer {
  background: var(--surface-alt);
  border-top: 1px solid var(--line);
}

.order {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2rem, 5vw, 4rem);
  padding-top: clamp(3.5rem, 7vw, 5.5rem);
  padding-bottom: clamp(3.5rem, 7vw, 5.5rem);
  align-items: start;
}

h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  line-height: 1.1;
}

.sub {
  color: var(--muted);
  margin-top: 1rem;
  max-width: 44ch;
}

.contact {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.contact li {
  border-top: 1px solid var(--line);
  padding-top: 0.75rem;
}

.contact span {
  display: block;
  font-family: var(--font-label);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.2rem;
}

.contact a:hover {
  color: var(--accent);
}

/* Form -------------------------------------------------------------------- */

.form {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(1.25rem, 3vw, 2rem);
  box-shadow: var(--shadow);
}

.selected-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.selected h3 {
  font-size: 1.15rem;
}

.clear {
  background: none;
  border: none;
  padding: 0;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--muted);
  text-decoration: underline;
}

.clear:hover {
  color: var(--accent);
}

.empty {
  color: var(--muted);
  font-size: 0.92rem;
  margin-top: 0.6rem;
}

.selected ul {
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.selected li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--surface-alt);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  font-size: 0.92rem;
}

.item-name {
  font-weight: 500;
}

.item-price {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.85rem;
  white-space: nowrap;
}

.remove {
  background: none;
  border: none;
  padding: 0 0.15rem;
  font-size: 1.15rem;
  line-height: 1;
  color: var(--muted);
}

.remove:hover {
  color: var(--accent);
}

.estimate {
  margin-top: 0.9rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.estimate strong {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--ink);
}

.fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.75rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--line);
}

.fields label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 500;
}

.fields label em {
  font-style: normal;
  font-weight: 400;
  color: var(--muted);
}

.fields .full {
  grid-column: 1 / -1;
}

input,
textarea {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--ink);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  width: 100%;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: var(--accent);
}

.submit {
  margin-top: 1.5rem;
  width: 100%;
  justify-content: center;
}

.fallback {
  margin-top: 0.9rem;
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
}

.fallback a {
  color: var(--accent);
  text-decoration: underline;
}

@media (max-width: 52rem) {
  .order {
    grid-template-columns: 1fr;
  }

  .fields {
    grid-template-columns: 1fr;
  }
}
</style>
