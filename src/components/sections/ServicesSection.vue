<script setup>
import { diensten } from '../../content/home'

const nummer = (i) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section class="services" id="diensten" aria-labelledby="diensten-titel">
    <div class="wrap services-grid">
      <div class="services-head">
        <p class="label">{{ diensten.label }}</p>
        <h2 id="diensten-titel">{{ diensten.titel }}</h2>
        <p>{{ diensten.intro }}</p>
      </div>
      <ol class="service-list">
        <li v-for="(dienst, i) in diensten.items" :key="dienst.titel" v-reveal>
          <span class="num">{{ nummer(i) }}</span>
          <div>
            <h3>{{ dienst.titel }}</h3>
            <p>{{ dienst.tekst }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.services { padding: 0 0 clamp(72px, 10vw, 140px); }
.services-grid { display: grid; grid-template-columns: 1fr 1.25fr; gap: clamp(32px, 6vw, 96px); align-items: start; }
.services-head { position: sticky; top: calc(var(--header-h) + 36px); }
.services-head h2 { margin-bottom: 20px; }
.services-head p:last-child { color: var(--tekst-2); max-width: 30em; }

li {
  position: relative;
  display: grid; grid-template-columns: 56px 1fr; gap: 16px;
  padding: 30px 0; border-top: 1px solid var(--lijn-licht);
}
li:last-child { border-bottom: 1px solid var(--lijn-licht); }
li::before {
  content: ""; position: absolute; left: 0; top: -1px; height: 1px; width: 100%;
  background: var(--brons); transform: scaleX(0); transform-origin: left;
  transition: transform .6s var(--ease);
}
li:hover::before { transform: scaleX(1); }
.num { font: 600 14px/1.9 var(--font-tekst); color: var(--brons); letter-spacing: .06em; }
h3 { margin-bottom: 6px; }
li p { margin: 0; color: var(--tekst-2); max-width: 32em; }

@media (max-width: 960px) {
  .services-grid { grid-template-columns: 1fr; }
  .services-head { position: static; }
}
@media (max-width: 760px) {
  li { grid-template-columns: 40px 1fr; }
}
</style>
