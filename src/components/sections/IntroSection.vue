<script setup>
import { intro } from '../../content/home'
import { useAnkerOpnieuw } from '../../composables/scroll'

const ankerOpnieuw = useAnkerOpnieuw()
</script>

<template>
  <section class="intro" id="intro">
    <div class="wrap">
      <p v-reveal class="statement">{{ intro.deel1 }} <span>{{ intro.deel2 }}</span></p>

      <div v-reveal class="oproep">
        <p>{{ intro.oproep }}</p>
        <div class="actions">
          <RouterLink :to="{ hash: intro.knopPrimair.hash }" class="btn btn-primary btn-pijl" @click="ankerOpnieuw(intro.knopPrimair.hash)">{{ intro.knopPrimair.label }}</RouterLink>
          <RouterLink :to="{ hash: intro.knopSecundair.hash }" class="tekstlink" @click="ankerOpnieuw(intro.knopSecundair.hash)">{{ intro.knopSecundair.label }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro { padding: var(--sectie-ruimte) 0; }
.statement {
  font: 500 clamp(28px, 4.2vw, 60px)/1.14 var(--font-kop);
  letter-spacing: -0.03em; max-width: 24ch; margin: 0;
}
.statement span { color: var(--steen); }

.oproep {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px 48px;
  margin-top: clamp(48px, 6vw, 80px); padding-top: clamp(28px, 3vw, 40px);
  border-top: 1px solid var(--lijn-licht);
}
.oproep p { margin: 0; font: 500 clamp(20px, 1.8vw, 24px)/1.3 var(--font-kop); letter-spacing: -0.01em; }
.actions { align-items: center; gap: 12px 28px; }
</style>
