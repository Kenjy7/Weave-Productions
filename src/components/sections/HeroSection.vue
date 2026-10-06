<script setup>
import { hero } from '../../content/home'
import { useAnkerOpnieuw } from '../../composables/scroll'

const ankerOpnieuw = useAnkerOpnieuw()
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="label">{{ hero.label }}</p>
        <h1>{{ hero.titel }}</h1>
        <p class="lead">{{ hero.intro }}</p>
        <div class="actions">
          <RouterLink :to="{ hash: hero.knopPrimair.hash }" class="btn btn-primary" @click="ankerOpnieuw(hero.knopPrimair.hash)">{{ hero.knopPrimair.label }}</RouterLink>
          <RouterLink :to="{ hash: hero.knopSecundair.hash }" class="btn btn-ghost" @click="ankerOpnieuw(hero.knopSecundair.hash)">{{ hero.knopSecundair.label }}</RouterLink>
        </div>
        <p class="fineprint">{{ hero.klanten }}</p>
      </div>

      <div class="hero-visual">
        <div class="pattern" aria-hidden="true"></div>
        <figure class="runsheet" aria-label="Voorbeeld van een draaiboek">
          <figcaption>
            <span class="label">Draaiboek</span>
            <span class="runsheet-meta">voorbeeld</span>
          </figcaption>
          <ol>
            <li v-for="regel in hero.draaiboek" :key="regel.tijd" :class="{ 'is-now': regel.nu }">
              <time>{{ regel.tijd }}</time><span>{{ regel.taak }}</span>
            </li>
          </ol>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: clamp(40px, 7vw, 96px) 0 clamp(64px, 8vw, 112px); }
.hero-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: clamp(32px, 5vw, 72px); align-items: center; }
h1 { max-width: 11ch; margin-bottom: 28px; }
.lead { font-size: clamp(17px, 1.5vw, 19px); color: var(--tekst-2); max-width: 34em; margin-bottom: 36px; }
.fineprint { margin: 28px 0 0; font-size: 15px; color: var(--tekst-2); }

.hero-visual { position: relative; aspect-ratio: 1 / 1.05; }
.hero-visual > .pattern { position: absolute; inset: 0; border-radius: var(--radius); }

.runsheet {
  position: absolute; left: clamp(16px, 3vw, 32px); bottom: clamp(16px, 3vw, 32px);
  width: min(340px, calc(100% - 32px)); margin: 0;
  background: var(--wit); border-radius: 16px; padding: 22px 24px 14px;
}
figcaption { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
.runsheet .label { margin: 0; font-size: 12px; }
.runsheet-meta { font-size: 13px; color: var(--tekst-2); }
li {
  display: grid; grid-template-columns: 52px 1fr; gap: 12px;
  padding: 10px 0; border-top: 1px solid var(--linnen); font-size: 15px; line-height: 1.4;
}
time { font-variant-numeric: tabular-nums; font-weight: 600; }
.is-now { position: relative; }
.is-now time { color: var(--brons); }
.is-now::before {
  content: ""; position: absolute; left: -24px; top: 10px; bottom: 10px; width: 3px;
  background: var(--brons); border-radius: 0 3px 3px 0;
}

@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-visual { aspect-ratio: auto; padding: clamp(96px, 22vw, 200px) clamp(16px, 3vw, 32px) clamp(16px, 3vw, 32px); }
  .runsheet { position: relative; left: auto; bottom: auto; width: min(380px, 100%); }
}
</style>
