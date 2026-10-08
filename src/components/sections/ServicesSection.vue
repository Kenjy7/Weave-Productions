<script setup>
import SectieKop from '../SectieKop.vue'
import { diensten } from '../../content/home'

defineProps({ nummer: Number })
</script>

<template>
  <section class="sectie band-creme" id="diensten" aria-labelledby="diensten-titel">
    <div class="wrap">
      <SectieKop :nummer="nummer" :label="diensten.label" :titel="diensten.titel" :intro="diensten.intro" id="diensten-titel" />

      <ol v-reveal class="lijst">
        <li v-for="dienst in diensten.items" :key="dienst.titel">
          <h3>{{ dienst.titel }}</h3>
          <p>{{ dienst.tekst }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.lijst { margin-top: clamp(56px, 7vw, 96px); }

li {
  position: relative;
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px clamp(32px, 6vw, 96px); align-items: baseline;
  padding: clamp(28px, 3vw, 40px) 0; border-top: 1px solid var(--lijn-licht);
}
li:last-child { border-bottom: 1px solid var(--lijn-licht); }
/* De draad loopt over de rij bij hover */
li::before {
  content: ""; position: absolute; left: 0; top: -1px; height: 1px; width: 100%;
  background: var(--olijf); transform: scaleX(0); transform-origin: left;
  transition: transform .8s var(--ease);
}
li:hover::before { transform: scaleX(1); }
h3 {
  font-weight: 500; font-size: clamp(24px, 2.4vw, 32px); letter-spacing: -0.02em;
  transition: transform .5s var(--ease);
}
li:hover h3 { transform: translateX(8px); }
li p { margin: 0; color: var(--tekst-2); max-width: 30em; font-size: 17px; }

@media (max-width: 760px) {
  li { grid-template-columns: 1fr; gap: 8px; }
}
</style>
