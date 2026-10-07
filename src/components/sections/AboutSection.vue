<script setup>
import FotoOfPatroon from '../FotoOfPatroon.vue'
import SectieKop from '../SectieKop.vue'
import { over } from '../../content/home'
import { bedrijf } from '../../content/bedrijf'

defineProps({ nummer: Number })
</script>

<template>
  <section class="sectie band-creme" id="over" aria-labelledby="over-titel">
    <div class="wrap">
      <SectieKop :nummer="nummer" :label="over.label" :titel="over.titel" id="over-titel" />

      <div class="grid">
        <div class="visual pattern-light" v-reveal>
          <FotoOfPatroon :src="over.foto" :alt="over.fotoAlt" />
        </div>
        <div class="tekst">
          <p v-for="alinea in over.alineas" :key="alinea">{{ alinea }}</p>
          <blockquote v-reveal>
            <p>{{ over.belofte }}</p>
          </blockquote>
          <p class="sign">
            <img src="/assets/logo/weave-symbool-kleur.svg" alt="" width="40" height="29">
            <span><strong>{{ bedrijf.eigenaar }}</strong><br>{{ bedrijf.functie }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid; grid-template-columns: 1fr 1.15fr; gap: clamp(40px, 7vw, 112px); align-items: end;
  margin-top: clamp(56px, 7vw, 96px);
}
.visual { aspect-ratio: 4 / 5; border-radius: var(--radius); overflow: hidden; }
.tekst > p:first-child { color: var(--tekst-2); max-width: 32em; font-size: 18px; }
blockquote { margin: clamp(40px, 5vw, 64px) 0; padding-left: 28px; border-left: 2px solid var(--zand); }
blockquote p {
  margin: 0; font: 500 clamp(24px, 2.6vw, 34px)/1.25 var(--font-kop); letter-spacing: -0.02em; color: var(--olijf);
}
.sign { display: flex; align-items: center; gap: 16px; margin: 0; line-height: 1.4; font-size: 15px; }
.sign strong { font-weight: 600; }
.sign span { color: var(--tekst-2); }
.sign strong { color: var(--olijf); }

@media (max-width: 960px) {
  .grid { grid-template-columns: 1fr; }
  .visual { aspect-ratio: 16 / 10; }
}
</style>
