<script setup>
// Kop van een sectie: nummer + label op een dunne draad, daaronder de titel.
defineProps({
  nummer: Number,
  label: String,
  titel: String,
  id: String,       // id van de h2, voor aria-labelledby op de sectie
  intro: String,
})

const nr = (n) => String(n).padStart(2, '0')
</script>

<template>
  <div class="sectie-kop">
    <p class="draad">
      <span v-if="nummer" class="nr">{{ nr(nummer) }}</span>
      <span class="label">{{ label }}</span>
    </p>
    <div class="body" :class="{ 'met-naast': intro }">
      <h2 :id="id">{{ titel }}</h2>
      <p v-if="intro" class="intro">{{ intro }}</p>
    </div>
  </div>
</template>

<style scoped>
.draad { display: flex; align-items: center; gap: 14px; margin: 0 0 clamp(28px, 3vw, 40px); }
.draad::after { content: ""; flex: 1; height: 1px; background: currentColor; opacity: .18; }
.nr { font: 600 13px/1 var(--font-tekst); letter-spacing: .08em; color: var(--brons); font-variant-numeric: tabular-nums; }
.label { margin: 0; }
h2 { max-width: 16ch; }
.intro { margin: 28px 0 0; max-width: 26em; color: var(--tekst-2); font-size: 18px; }
@media (min-width: 961px) {
  .met-naast { display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px; align-items: end; }
  .met-naast .intro { margin: 0; justify-self: end; }
}

.on-dark .nr { color: var(--zand); }
.on-dark .intro { color: var(--tekst-op-donker); }
</style>
