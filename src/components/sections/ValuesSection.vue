<script setup>
import { waarden } from '../../content/home'
</script>

<template>
  <section class="values" aria-labelledby="waarden-titel">
    <div class="wrap">
      <div class="values-head">
        <p class="label">{{ waarden.label }}</p>
        <h2 id="waarden-titel">{{ waarden.titel }}</h2>
      </div>
      <ul class="value-grid">
        <li v-for="waarde in waarden.items" :key="waarde.titel" v-reveal>
          <h3>{{ waarde.titel }}</h3>
          <p>{{ waarde.tekst }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.values { padding: clamp(72px, 10vw, 140px) 0; }
.values-head { max-width: 640px; margin-bottom: clamp(36px, 5vw, 56px); }
.value-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
li { background: var(--linnen); border-radius: var(--radius); padding: clamp(28px, 3.5vw, 44px); }
h3 { margin-bottom: 10px; }
p { margin: 0; color: var(--tekst-2); max-width: 30em; }
/* De laatste waarde ("met een knipoog") valt bewust uit de toon */
li:last-child { background: var(--olijf); color: var(--creme); }
li:last-child p { color: var(--tekst-op-donker); }

@media (max-width: 760px) {
  .value-grid { grid-template-columns: 1fr; }
}
</style>
