<script setup>
import SectieKop from '../SectieKop.vue'
import { contact } from '../../content/home'
import { bedrijf } from '../../content/bedrijf'

defineProps({ nummer: Number })

const mailLink = `mailto:${bedrijf.email}?subject=${encodeURIComponent(contact.mailOnderwerp)}`

const kanalen = [
  { label: 'E-mail', waarde: bedrijf.email, href: `mailto:${bedrijf.email}` },
  { label: 'Telefoon', waarde: bedrijf.telefoon, href: `tel:${bedrijf.telefoonLink}` },
  { label: 'LinkedIn', waarde: bedrijf.eigenaar, href: bedrijf.linkedin, extern: true },
]
</script>

<template>
  <section class="contact on-dark" id="contact" aria-labelledby="contact-titel">
    <div class="pattern band" aria-hidden="true"></div>
    <div class="wrap inner">
      <SectieKop :nummer="nummer" :label="contact.label" :titel="contact.titel" id="contact-titel" />

      <div class="grid">
        <div>
          <p class="lead">{{ contact.intro }}</p>
          <a class="btn btn-primary btn-pijl" :href="mailLink">Stuur een mail</a>
        </div>
        <ul class="kanalen">
          <li v-for="kanaal in kanalen" :key="kanaal.label">
            <a :href="kanaal.href" :rel="kanaal.extern ? 'noopener' : undefined">
              <span class="k-label">{{ kanaal.label }}</span>
              <span class="k-waarde">{{ kanaal.waarde }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact { background: var(--olijf); color: var(--creme); padding-bottom: var(--sectie-ruimte); }
.band { height: clamp(72px, 10vw, 140px); }
.inner { padding-top: clamp(72px, 9vw, 128px); }
.inner :deep(h2) { font-size: clamp(36px, 5.6vw, 76px); max-width: 13ch; }

.grid {
  display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(40px, 7vw, 112px); align-items: start;
  margin-top: clamp(48px, 6vw, 80px);
}
.lead { color: var(--tekst-op-donker); max-width: 28em; margin-bottom: 36px; font-size: 18px; }

.kanalen { border-top: 1px solid var(--olijf-lijn); }
li { border-bottom: 1px solid var(--olijf-lijn); }
li a {
  display: grid; grid-template-columns: 110px 1fr auto; align-items: center; gap: 16px;
  padding: 22px 0; color: var(--creme); text-decoration: none;
}
li a::after {
  content: ""; width: 16px; height: 16px; background: var(--zand);
  -webkit-mask: var(--pijl) center / contain no-repeat; mask: var(--pijl) center / contain no-repeat;
  transition: transform .35s var(--ease);
}
li a:hover::after { transform: translateX(4px); }
.k-label { font: 600 12px/1 var(--font-tekst); text-transform: uppercase; letter-spacing: .16em; color: var(--zand); }
.k-waarde { font: 500 clamp(17px, 1.7vw, 22px)/1.3 var(--font-kop); letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
li a:hover .k-waarde { text-decoration: underline; text-decoration-color: var(--zand); text-underline-offset: 6px; text-decoration-thickness: 1px; }

@media (max-width: 960px) {
  .grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  li a { grid-template-columns: 1fr auto; }
  .k-label { grid-column: 1 / -1; }
}
</style>
