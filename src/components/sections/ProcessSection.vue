<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SectieKop from '../SectieKop.vue'
import { aanpak } from '../../content/home'

defineProps({ nummer: Number })

// De draad weeft zich mee met het scrollen
const draad = ref(null)
const getekend = ref(0)
const pad = 'M0 60 L100 10 L200 110 L300 10 L400 110 L500 10 L600 110 L700 10 L800 110 L900 10 L1000 60'

function teken() {
  if (!draad.value) return
  const r = draad.value.getBoundingClientRect()
  const vh = window.innerHeight
  getekend.value = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.55)))
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    getekend.value = 1
    return
  }
  teken()
  window.addEventListener('scroll', teken, { passive: true })
  window.addEventListener('resize', teken)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', teken)
  window.removeEventListener('resize', teken)
})
</script>

<template>
  <section class="process sectie on-dark" id="aanpak" aria-labelledby="aanpak-titel">
    <div class="wrap">
      <SectieKop :nummer="nummer" :label="aanpak.label" :titel="aanpak.titel" id="aanpak-titel" />

      <div ref="draad" class="thread" aria-hidden="true">
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none">
          <path class="thread-bg" :d="pad" />
          <path class="thread-line" :d="pad" pathLength="1" :style="{ strokeDashoffset: 1 - getekend }" />
        </svg>
      </div>

      <ol class="steps">
        <li v-for="(stap, i) in aanpak.stappen" :key="stap.titel">
          <span class="step-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ stap.titel }}</h3>
          <p>{{ stap.tekst }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process { background: var(--olijf); color: var(--creme); }

.thread { margin: clamp(56px, 7vw, 96px) 0 12px; height: 80px; }
.thread svg { width: 100%; height: 100%; overflow: visible; }
.thread path { fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
.thread-bg { stroke: var(--olijf-lijn); }
.thread-line { stroke: var(--zand); stroke-dasharray: 1; transition: stroke-dashoffset .1s linear; }

.steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 28px; }
li { padding-top: 20px; border-top: 1px solid var(--olijf-lijn); }
.step-num {
  display: block; color: var(--zand);
  font: 500 clamp(32px, 3vw, 44px)/1 var(--font-kop); letter-spacing: -0.03em; margin-bottom: 28px;
  font-variant-numeric: tabular-nums;
}
h3 { font-size: 20px; margin-bottom: 10px; }
li p { margin: 0; color: var(--tekst-op-donker); font-size: 16px; }

@media (max-width: 960px) {
  .steps { grid-template-columns: 1fr 1fr; }
  .thread { display: none; }
}
@media (max-width: 760px) {
  .steps { grid-template-columns: 1fr; gap: 0; }
  li { display: grid; grid-template-columns: 60px 1fr; padding: 24px 0; }
  .step-num { grid-row: span 2; margin: 0; font-size: 28px; }
}
</style>
