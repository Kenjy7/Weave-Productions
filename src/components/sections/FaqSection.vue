<script setup>
// Native <details>: werkt zonder JavaScript, met het toetsenbord, en de antwoorden
// staan altijd in de HTML (zodat Google en AI ze kunnen lezen).
import SectieKop from '../SectieKop.vue'
import { faq } from '../../content/home'

defineProps({ nummer: Number })
</script>

<template>
  <section class="sectie" id="faq" aria-labelledby="faq-titel">
    <div class="wrap grid">
      <SectieKop :nummer="nummer" :label="faq.label" :titel="faq.titel" id="faq-titel" />

      <div class="lijst">
        <details v-for="(item, i) in faq.vragen" :key="item.vraag" :open="i === 0">
          <summary>
            <h3>{{ item.vraag }}</h3>
            <span class="plus" aria-hidden="true"></span>
          </summary>
          <p>{{ item.antwoord }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lijst { margin-top: clamp(56px, 7vw, 96px); border-top: 1px solid var(--lijn-licht); }
details { border-bottom: 1px solid var(--lijn-licht); }

summary {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  padding: clamp(22px, 2.4vw, 30px) 0; cursor: pointer; list-style: none;
}
summary::-webkit-details-marker { display: none; }
summary h3 {
  font-weight: 500; font-size: clamp(19px, 1.7vw, 23px); letter-spacing: -0.015em;
  transition: transform .5s var(--ease);
}
summary:hover h3 { transform: translateX(6px); }

/* Plus dat een min wordt */
.plus { position: relative; flex: none; width: 16px; height: 16px; }
.plus::before, .plus::after {
  content: ""; position: absolute; left: 0; top: 7px; width: 16px; height: 1.5px;
  background: var(--olijf); transition: transform .4s var(--ease);
}
.plus::after { transform: rotate(90deg); }
details[open] .plus::after { transform: rotate(0deg); }

details p { margin: 0; padding: 0 0 clamp(24px, 2.6vw, 32px); max-width: 44em; color: var(--tekst-2); font-size: 17px; }

@media (min-width: 961px) {
  .grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: clamp(48px, 7vw, 112px); align-items: start; }
  .grid :deep(.sectie-kop) { position: sticky; top: calc(var(--header-h) + 36px); }
  .lijst { margin-top: 0; }
}
</style>
