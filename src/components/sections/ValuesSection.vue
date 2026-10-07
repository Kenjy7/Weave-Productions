<script setup>
import SectieKop from '../SectieKop.vue'
import { waarden } from '../../content/home'

defineProps({ nummer: Number })
</script>

<template>
  <section class="sectie" aria-labelledby="waarden-titel">
    <div class="wrap">
      <SectieKop :nummer="nummer" :label="waarden.label" :titel="waarden.titel" id="waarden-titel" />
      <ul class="raster">
        <li v-for="(waarde, i) in waarden.items" :key="waarde.titel" v-reveal :style="{ transitionDelay: `${i * 80}ms` }">
          <svg class="teken" viewBox="0 0 1000 730" aria-hidden="true"><path d="M95 95 365 640 635 95M365 95 635 640 905 95" /></svg>
          <h3>{{ waarde.titel }}</h3>
          <p>{{ waarde.tekst }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.raster {
  display: grid; grid-template-columns: repeat(4, 1fr);
  margin-top: clamp(56px, 7vw, 96px);
  border-top: 1px solid var(--lijn-licht);
}
li { padding: clamp(28px, 3vw, 40px) clamp(20px, 2.4vw, 32px) 0 0; }
li + li { padding-left: clamp(20px, 2.4vw, 32px); border-left: 1px solid var(--lijn-licht); }
.teken { width: 30px; height: 22px; margin-bottom: 40px; fill: none; stroke: var(--zand); stroke-width: 100; stroke-linecap: round; stroke-linejoin: round; }
h3 { margin-bottom: 12px; }
p { margin: 0; color: var(--tekst-2); }

@media (max-width: 960px) {
  .raster { grid-template-columns: 1fr 1fr; border-top: 0; }
  li, li + li { padding: 32px 24px 32px 0; border-left: 0; border-top: 1px solid var(--lijn-licht); }
  li:nth-child(even) { padding-left: 24px; border-left: 1px solid var(--lijn-licht); }
}
@media (max-width: 560px) {
  .raster { grid-template-columns: 1fr; }
  li:nth-child(even) { padding-left: 0; border-left: 0; }
}
</style>
