<script setup>
import FotoOfPatroon from '../FotoOfPatroon.vue'
import { over } from '../../content/home'
import { bedrijf } from '../../content/bedrijf'
</script>

<template>
  <section class="about" id="over" aria-labelledby="over-titel">
    <div class="wrap about-grid">
      <div class="about-visual pattern-light">
        <FotoOfPatroon :src="over.foto" :alt="over.fotoAlt" />
      </div>
      <div class="about-copy">
        <p class="label">{{ over.label }}</p>
        <h2 id="over-titel">{{ over.titel }}</h2>
        <p v-for="alinea in over.alineas" :key="alinea">{{ alinea }}</p>
        <p class="sign">
          <img src="/assets/logo/weave-symbool-kleur.svg" alt="" width="40" height="29">
          <span><strong>{{ bedrijf.eigenaar }}</strong><br>{{ bedrijf.functie }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { padding: 0 0 clamp(72px, 10vw, 140px); }
.about-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(32px, 6vw, 96px); align-items: center; }
.about-visual { aspect-ratio: 4 / 5; border-radius: var(--radius); overflow: hidden; background-size: 40px 81px; }
h2 { margin-bottom: 24px; }
.about-copy p { color: var(--tekst-2); max-width: 34em; }
.about-copy .sign { display: flex; align-items: center; gap: 16px; margin-top: 32px; color: var(--olijf); line-height: 1.4; font-size: 15px; }
.sign strong { font-weight: 600; }

@media (max-width: 960px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-visual { aspect-ratio: 16 / 9; }
}
</style>
