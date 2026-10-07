<script setup>
import FotoOfPatroon from '../FotoOfPatroon.vue'
import { hero } from '../../content/home'
import { useAnkerOpnieuw } from '../../composables/scroll'

const ankerOpnieuw = useAnkerOpnieuw()
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap">
      <p class="label opkomen">{{ hero.label }}</p>

      <div class="kop">
        <h1 class="opkomen" style="animation-delay: .08s">{{ hero.titel }}</h1>
        <div class="zijkant opkomen" style="animation-delay: .22s">
          <p class="lead">{{ hero.intro }}</p>
          <ul class="kenmerken">
            <li v-for="kenmerk in hero.kenmerken" :key="kenmerk">{{ kenmerk }}</li>
          </ul>
          <RouterLink :to="{ hash: hero.verder.hash }" class="tekstlink omlaag" @click="ankerOpnieuw(hero.verder.hash)">{{ hero.verder.label }}</RouterLink>
        </div>
      </div>

      <div class="beeld pattern opkomen" style="animation-delay: .35s">
        <FotoOfPatroon :src="hero.foto" :alt="hero.fotoAlt" />
      </div>

      <p class="fineprint">{{ hero.klanten }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: clamp(40px, 6vw, 96px) 0 0; }

.kop {
  display: grid; grid-template-columns: 1.7fr 1fr; gap: 32px clamp(40px, 5vw, 80px); align-items: start;
  margin-bottom: clamp(48px, 6vw, 88px);
}
h1 { max-width: 13ch; font-size: clamp(44px, min(6.4vw, 12vh), 100px); }
.lead { font-size: clamp(17px, 1.3vw, 19px); color: var(--tekst-2); max-width: 28em; margin: 10px 0 24px; }

.kenmerken { margin-bottom: 28px; max-width: 28em; border-bottom: 1px solid var(--linnen); font-size: 15px; color: var(--olijf); }
.kenmerken li { padding: 10px 0; border-top: 1px solid var(--linnen); }

.beeld { aspect-ratio: 21 / 9; border-radius: var(--radius); overflow: hidden; }
.fineprint { margin: 20px 0 0; font-size: 14px; color: var(--tekst-2); }

@media (max-width: 960px) {
  .kop { grid-template-columns: 1fr; }
  .beeld { aspect-ratio: 4 / 3; }
}
</style>
