<script setup>
// Het draadpatroon uit het brandboek, als lijnen die zichzelf weven:
// eerst de draden in de ene richting, daarna kruisen ze in de andere richting.
// Hoek = de poten van de W (270:545). Zonder beweging staat het patroon er gewoon.
// Het weven start pas als het patroon in beeld komt.
import { ref, onMounted, onBeforeUnmount } from 'vue'

const B = 1600            // breedte viewBox
const H = 900             // hoogte viewBox
const afstand = 40        // tussen twee draden (zoals het CSS-patroon)
const dx = (H * 270) / 545

const aantal = Math.ceil((B + dx) / afstand) + 1
const heen = Array.from({ length: aantal }, (_, i) => {
  const x = i * afstand - dx
  return `M${x.toFixed(1)} 0L${(x + dx).toFixed(1)} ${H}`
})
const svg = ref(null)
const wacht = ref(false)
let io

onMounted(() => {
  const r = svg.value.getBoundingClientRect()
  if (r.top < window.innerHeight * 0.85) return // al in beeld: meteen weven
  wacht.value = true
  io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { wacht.value = false; io.disconnect() }
  }, { threshold: 0.25 })
  io.observe(svg.value)
})
onBeforeUnmount(() => io?.disconnect())

const terug = Array.from({ length: aantal }, (_, i) => {
  const x = i * afstand
  return `M${x.toFixed(1)} 0L${(x - dx).toFixed(1)} ${H}`
})
</script>

<template>
  <svg ref="svg" class="weef" :class="{ wacht }" :viewBox="`0 0 ${B} ${H}`" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g class="heen">
      <path v-for="(d, i) in heen" :key="'h' + i" :d="d" pathLength="1" :style="{ '--i': i }" />
    </g>
    <g class="terug">
      <path v-for="(d, i) in terug" :key="'t' + i" :d="d" pathLength="1" :style="{ '--i': i }" />
    </g>
  </svg>
</template>

<style scoped>
.weef { position: absolute; inset: 0; width: 100%; height: 100%; }
path {
  fill: none; stroke: var(--zand); stroke-opacity: .4; stroke-width: 1.2; vector-effect: non-scaling-stroke;
  stroke-dasharray: 1; stroke-dashoffset: 1;
  animation: weef 1.6s var(--ease) forwards;
  animation-delay: calc(.35s + var(--i) * 22ms);
}
/* Wacht tot het patroon in beeld komt */
.wacht path { animation-play-state: paused; }
/* De kruisende draden starten wanneer de eerste richting halfweg is */
.terug path { animation-delay: calc(1.05s + var(--i) * 22ms); }

@keyframes weef { to { stroke-dashoffset: 0; } }

@media (prefers-reduced-motion: reduce) {
  path { stroke-dashoffset: 0; }
}
</style>
