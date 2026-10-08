<script setup>
import FotoOfPatroon from '../FotoOfPatroon.vue'
import WeefPatroon from '../WeefPatroon.vue'
import { hero } from '../../content/home'
import { bedrijf } from '../../content/bedrijf'
import { useAnkerOpnieuw } from '../../composables/scroll'

const ankerOpnieuw = useAnkerOpnieuw()

// "Eventbureau in Gent · …" zodra de regio is ingevuld
const label = bedrijf.regio ? hero.label.replace('Eventbureau', `Eventbureau in ${bedrijf.regio}`) : hero.label

// Titel woord voor woord, elk woord iets later
const woorden = hero.titel.split(' ')
</script>

<template>
  <section class="hero" id="top">
    <div class="wrap">
      <div class="kop">
        <!-- Het label zit in de h1: zo staat "eventbureau" in de belangrijkste kop voor Google -->
        <h1>
          <span class="label opkomen">{{ label }}</span>
          <span class="titel">
            <template v-for="(woord, i) in woorden" :key="i">
              <span class="woord"><span :style="{ animationDelay: `${0.1 + i * 0.07}s` }">{{ woord }}</span></span>{{ ' ' }}
            </template>
          </span>
        </h1>
        <div class="zijkant opkomen" style="animation-delay: .5s">
          <p class="lead">{{ hero.intro }}</p>
          <ul class="kenmerken">
            <li v-for="kenmerk in hero.kenmerken" :key="kenmerk">{{ kenmerk }}</li>
          </ul>
          <RouterLink :to="{ hash: hero.verder.hash }" class="tekstlink omlaag" @click="ankerOpnieuw(hero.verder.hash)">{{ hero.verder.label }}</RouterLink>
        </div>
      </div>

      <!-- Zonder foto weeft het draadpatroon zichzelf; met foto komt die er bovenop -->
      <div class="beeld">
        <WeefPatroon />
        <FotoOfPatroon :src="hero.foto" :alt="hero.fotoAlt" />
      </div>

      <p class="fineprint">{{ hero.klanten }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: clamp(40px, 6vw, 96px) 0 0; }

.kop {
  display: grid; grid-template-columns: 1.7fr 1fr; gap: 32px clamp(40px, 5vw, 80px); align-items: start;
  margin-bottom: clamp(48px, 6vw, 88px);
}
h1 .label { display: block; margin-bottom: clamp(28px, 3vw, 40px); }
/* Rechterkolom begint op dezelfde hoogte als de titel (onder het label) */
.zijkant { padding-top: calc(16px + clamp(28px, 3vw, 40px) + 1.2vh); }
.titel { display: block; max-width: 13ch; font-size: clamp(44px, min(6.4vw, 12vh), 100px); }
/* Elk woord schuift omhoog uit een masker (ruimte onderaan voor de g en j) */
.woord { display: inline-block; overflow: hidden; vertical-align: top; padding: 0 .08em .22em 0; margin: 0 -.08em -.22em 0; }
.woord > span { display: inline-block; animation: woordOp 1.1s var(--ease) both; }
.lead { font-size: clamp(17px, 1.3vw, 19px); color: var(--tekst-2); max-width: 28em; margin: 0 0 24px; padding-top: 2px; }

.kenmerken { margin-bottom: 28px; max-width: 28em; border-bottom: 1px solid var(--linnen); font-size: 15px; color: var(--olijf); }
.kenmerken li { padding: 10px 0; border-top: 1px solid var(--linnen); }

.beeld {
  position: relative; aspect-ratio: 21 / 9; border-radius: var(--radius); overflow: hidden;
  background: var(--olijf);
  animation: beeldOpen 1.4s var(--ease) .25s both;
}
.beeld :deep(img) { position: absolute; inset: 0; animation: fotoIn 2.2s var(--ease) .25s both; }
@keyframes beeldOpen { from { clip-path: inset(100% 0 0 0 round var(--radius)); } to { clip-path: inset(0 0 0 0 round var(--radius)); } }
@keyframes fotoIn { from { transform: scale(1.08); } to { transform: none; } }
.fineprint { margin: 20px 0 0; font-size: 14px; color: var(--tekst-2); }

@media (max-width: 960px) {
  .kop { grid-template-columns: 1fr; }
  .zijkant { padding-top: 0; }
  .beeld { aspect-ratio: 4 / 3; }
}
</style>
