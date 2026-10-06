<script setup>
import { contact } from '../../content/home'
import { bedrijf } from '../../content/bedrijf'

const mailLink = `mailto:${bedrijf.email}?subject=${encodeURIComponent(contact.mailOnderwerp)}`
</script>

<template>
  <section class="contact on-dark" id="contact" aria-labelledby="contact-titel">
    <div class="pattern band" aria-hidden="true"></div>
    <div class="wrap contact-inner">
      <p class="label">{{ contact.label }}</p>
      <h2 id="contact-titel">{{ contact.titel }}</h2>
      <p class="lead">{{ contact.intro }}</p>
      <div class="actions">
        <a class="btn btn-primary" :href="mailLink">Stuur een mail</a>
        <a class="btn btn-ghost" :href="`tel:${bedrijf.telefoonLink}`">Bel {{ bedrijf.telefoon }}</a>
      </div>
      <p class="direct">
        <a :href="`mailto:${bedrijf.email}`">{{ bedrijf.email }}</a>
        <span aria-hidden="true">·</span>
        <a :href="bedrijf.linkedin" rel="noopener">Senne op LinkedIn</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.contact { background: var(--olijf); color: var(--creme); padding-bottom: clamp(72px, 9vw, 128px); }
.band { height: clamp(96px, 14vw, 200px); }
.contact-inner { padding-top: clamp(56px, 7vw, 96px); }
h2 { font-size: clamp(32px, 5vw, 60px); line-height: 1.08; max-width: 14ch; margin-bottom: 24px; }
.lead { color: var(--tekst-op-donker); max-width: 32em; margin-bottom: 36px; }
.direct { display: flex; flex-wrap: wrap; gap: 4px 10px; margin: 28px 0 0; color: var(--tekst-op-donker); font-size: 15px; }
.direct a { color: var(--zand); }
</style>
