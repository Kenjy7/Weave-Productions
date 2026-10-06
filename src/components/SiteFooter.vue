<script setup>
import { bedrijf } from '../content/bedrijf'

const jaar = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer on-dark">
    <div class="wrap footer-inner">
      <img src="/assets/logo/weave-horizontaal-kleur-op-donker.png" alt="Weave Productions" width="180" height="56" loading="lazy">
      <p class="tagline">{{ bedrijf.tagline }}</p>
      <address>
        {{ bedrijf.naam }} · {{ bedrijf.eigenaar }}<br>
        <template v-if="bedrijf.adres">{{ bedrijf.adres }}<br></template>
        Btw {{ bedrijf.btw }}<br>
        <a :href="`mailto:${bedrijf.email}`">{{ bedrijf.email }}</a> ·
        <a :href="`tel:${bedrijf.telefoonLink}`">{{ bedrijf.telefoon }}</a><br>
        <a :href="bedrijf.linkedin" rel="noopener">LinkedIn</a>
      </address>
      <p class="legal">© {{ jaar }} {{ bedrijf.naam }} · <RouterLink to="/privacy">Privacyverklaring</RouterLink></p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--olijf); color: var(--tekst-op-donker); border-top: 1px solid var(--olijf-lijn); padding: 48px 0 40px; font-size: 15px; }
.footer-inner { display: grid; grid-template-columns: auto 1fr auto; gap: 24px 48px; align-items: start; }
.footer-inner img { width: 150px; margin-left: -5px; }
.tagline { font-family: var(--font-kop); font-weight: 500; color: var(--creme); margin: 6px 0 0; }
address { font-style: normal; line-height: 1.7; }
a { color: var(--zand); }
.legal { grid-column: 1 / -1; margin: 16px 0 0; padding-top: 24px; border-top: 1px solid var(--olijf-lijn); font-size: 14px; }

@media (max-width: 960px) {
  .footer-inner { grid-template-columns: 1fr; }
}
</style>
