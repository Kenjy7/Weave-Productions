<script setup>
import SectieKop from '../SectieKop.vue'
import { waarden } from '../../content/home'

defineProps({ nummer: Number })

const nr = (i) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section class="sectie" aria-labelledby="waarden-titel">
    <div class="wrap">
      <SectieKop :nummer="nummer" :label="waarden.label" :titel="waarden.titel" :intro="waarden.intro" id="waarden-titel" />

      <ul v-reveal class="raster">
        <li v-for="(waarde, i) in waarden.items" :key="waarde.titel">
          <span class="nr">{{ nr(i) }}</span>
          <h3>{{ waarde.titel }}</h3>
          <p>{{ waarde.tekst }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.raster {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px clamp(24px, 3vw, 48px);
  margin-top: clamp(56px, 7vw, 96px);
}
li { position: relative; padding-top: 28px; border-top: 1px solid var(--lijn-licht); }
/* Bij hover loopt de draad over de bovenrand, zoals bij de diensten */
li::before {
  content: ""; position: absolute; left: 0; top: -1px; width: 100%; height: 1px;
  background: var(--olijf); transform: scaleX(0); transform-origin: left; transition: transform .8s var(--ease);
}
li:hover::before { transform: scaleX(1); }

.nr { display: block; margin-bottom: 40px; font: 600 13px/1 var(--font-tekst); letter-spacing: .08em; color: var(--brons); font-variant-numeric: tabular-nums; }
h3 { font-weight: 500; font-size: clamp(22px, 2vw, 26px); letter-spacing: -0.015em; margin-bottom: 12px; }
p { margin: 0; color: var(--tekst-2); max-width: 26em; }

@media (max-width: 960px) {
  .raster { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .raster { grid-template-columns: 1fr; gap: 32px; }
  .nr { margin-bottom: 20px; }
}
</style>
