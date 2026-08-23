<template>
  <section id="about" class="section about">
    <div class="portrait">
      <div class="portrait-frame" aria-hidden="true">
        <span>Photo of Caitlin</span>
      </div>
    </div>

    <div class="copy">
      <p class="eyebrow">About</p>
      <h2>Hi, I'm Caitlin.</h2>
      <p>
        438 Bakes started the way most home bakeries do — friends asking for one more batch. I bake
        out of my own kitchen in small runs, which means I can be fussy about the things that
        matter: real butter, good chocolate, long ferments, and fruit bought the week it's actually
        in season.
      </p>
      <p>
        Nothing sits on a shelf. Every order is baked the morning you collect it, so what you pick
        up is what came out of my oven that day.
      </p>

      <a href="#order" class="btn primary">Order something sweet</a>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding-top: clamp(3.5rem, 7vw, 5.5rem);
  padding-bottom: clamp(3.5rem, 7vw, 5.5rem);
}

.portrait-frame {
  aspect-ratio: 4 / 5;
  border-radius: var(--radius);
  background: linear-gradient(150deg, var(--surface-alt), var(--honey));
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  font-family: var(--font-label);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--surface);
}

h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  line-height: 1.1;
}

.copy p {
  color: var(--muted);
  margin-top: 1rem;
  max-width: 54ch;
}

.copy .btn {
  margin-top: 1.75rem;
}

@media (max-width: 52rem) {
  .about {
    grid-template-columns: 1fr;
  }

  .portrait-frame {
    aspect-ratio: 16 / 10;
  }
}
</style>
