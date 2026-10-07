<script setup>
import { bedrijf } from '../content/bedrijf'
import { navigatie } from '../content/home'
import { toonProjecten } from '../composables/projecten'

const links = navigatie.filter((item) => !item.alleenAlsProjecten || toonProjecten)
const jaar = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer on-dark">
    <div class="wrap">
      <div class="kolommen">
        <div class="merk">
          <img src="/assets/logo/weave-horizontaal-kleur-op-donker.png" alt="Weave Productions" width="200" height="62" loading="lazy">
          <p class="tagline">{{ bedrijf.tagline }}</p>
        </div>

        <nav aria-label="Footermenu">
          <p class="kop">Menu</p>
          <ul>
            <li v-for="link in links" :key="link.hash">
              <RouterLink :to="{ path: '/', hash: link.hash }">{{ link.label }}</RouterLink>
            </li>
            <li><RouterLink :to="{ path: '/', hash: '#contact' }">Contact</RouterLink></li>
          </ul>
        </nav>

        <div>
          <p class="kop">Contact</p>
          <address>
            <a :href="`mailto:${bedrijf.email}`">{{ bedrijf.email }}</a><br>
            <a :href="`tel:${bedrijf.telefoonLink}`">{{ bedrijf.telefoon }}</a><br>
            <a :href="bedrijf.linkedin" rel="noopener">LinkedIn</a>
          </address>
        </div>

        <div>
          <p class="kop">Gegevens</p>
          <p class="gegevens">
            {{ bedrijf.naam }}<br>
            {{ bedrijf.eigenaar }}<br>
            <template v-if="bedrijf.adres">{{ bedrijf.adres }}<br></template>
            Btw {{ bedrijf.btw }}
          </p>
        </div>
      </div>

      <p class="legal">
        <span>© {{ jaar }} {{ bedrijf.naam }}</span>
        <RouterLink to="/privacy">Privacyverklaring</RouterLink>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--olijf-diep); color: var(--tekst-op-donker); padding: clamp(64px, 8vw, 112px) 0 32px; font-size: 15px; }

.kolommen { display: grid; grid-template-columns: 1.6fr 1fr 1.2fr 1fr; gap: 40px; }
.merk img { width: 168px; margin: -4px 0 20px -6px; }
.tagline { font: 500 17px/1.4 var(--font-kop); color: var(--creme); margin: 0; }
.kop { font: 600 12px/1 var(--font-tekst); text-transform: uppercase; letter-spacing: .16em; color: var(--zand); margin: 6px 0 18px; }
ul li { margin-bottom: 8px; }
address, .gegevens { font-style: normal; line-height: 1.9; margin: 0; }
a { color: var(--creme); text-decoration: none; }
a:hover { text-decoration: underline; text-decoration-color: var(--zand); text-underline-offset: 4px; }
address a { line-height: 1.9; }

.legal {
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px 24px;
  margin: clamp(56px, 7vw, 88px) 0 0; padding-top: 24px; border-top: 1px solid var(--olijf-lijn); font-size: 14px;
}
.legal a { color: var(--tekst-op-donker); }

@media (max-width: 960px) {
  .kolommen { grid-template-columns: 1fr 1fr; }
  .merk { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .kolommen { grid-template-columns: 1fr; }
}
</style>
