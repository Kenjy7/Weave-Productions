<script setup>
import { bedrijf } from '../content/bedrijf'
import { seo } from '../content/seo'
import { usePaginaHead } from '../composables/paginaHead'

usePaginaHead({ ...seo.privacy, pad: '/privacy', indexeren: false })

// Laat deze tekst nalezen vóór livegang. Wijzigt er iets aan de verwerking? Pas dan ook de datum aan.
const bijgewerkt = '6 oktober 2026'
const adres = bedrijf.adres ?? '[adres volgt]'
</script>

<template>
  <article class="doc">
    <div class="wrap">
      <p class="label">Privacy</p>
      <h1>Privacyverklaring</h1>
      <p class="meta">Laatst bijgewerkt op {{ bijgewerkt }}</p>

      <p>We gaan zorgvuldig om met je gegevens. Hieronder lees je kort en duidelijk wat we bijhouden, waarom, en wat je rechten zijn.</p>

      <h2>Wie zijn wij?</h2>
      <p>
        {{ bedrijf.naam }} is de handelsnaam van {{ bedrijf.eigenaar }}, {{ adres }}, België.
        Ondernemings- en btw-nummer {{ bedrijf.btw }}.
        Je bereikt ons via <a :href="`mailto:${bedrijf.email}`">{{ bedrijf.email }}</a>
        of op <a :href="`tel:${bedrijf.telefoonLink}`">{{ bedrijf.telefoon }}</a>.
      </p>

      <h2>Welke gegevens verwerken we?</h2>
      <p>Deze website heeft geen formulieren en geen accounts. We krijgen alleen gegevens als jij ons zelf mailt of belt. Dat zijn dan:</p>
      <ul>
        <li>je naam, e-mailadres en eventueel je telefoonnummer en bedrijf;</li>
        <li>wat je ons vertelt over je event of vraag.</li>
      </ul>

      <h2>Waarom en op welke grond?</h2>
      <ul>
        <li>Om je vraag te beantwoorden en een offerte te maken: dat is een stap vóór een overeenkomst (art. 6.1.b AVG).</li>
        <li>Om een event voor je te organiseren: uitvoering van de overeenkomst (art. 6.1.b AVG).</li>
        <li>Om facturen en boekhouding bij te houden: wettelijke plicht (art. 6.1.c AVG).</li>
      </ul>

      <h2>Hoe lang bewaren we ze?</h2>
      <p>Vragen zonder vervolg verwijderen we na uiterlijk twee jaar. Gegevens van klanten bewaren we zolang de samenwerking loopt. Boekhoudkundige stukken bewaren we zo lang als de wet vraagt (in België tien jaar).</p>

      <h2>Met wie delen we ze?</h2>
      <p>We verkopen je gegevens nooit. We delen ze alleen als dat nodig is:</p>
      <ul>
        <li>met {{ bedrijf.hosting }}, dat deze website host;</li>
        <li>met {{ bedrijf.domeinEnMail }}, dat onze domeinnaam en e-mail beheert;</li>
        <li>met leveranciers voor jouw event, en alleen wat zij nodig hebben (bv. een naam voor de gastenlijst), na overleg met jou;</li>
        <li>met onze boekhouder.</li>
      </ul>

      <h2>Cookies en tracking</h2>
      <p>Deze website plaatst geen cookies en gebruikt geen analytics, advertentiepixels of andere trackers. De lettertypes staan op onze eigen server, er wordt dus niets bij Google of andere partijen opgehaald. Daarom zie je ook geen cookiebanner.</p>
      <p>Onze hostingpartij kan technische serverlogs bijhouden (zoals je IP-adres en het tijdstip van je bezoek) om de site veilig en bereikbaar te houden. Dat is ons gerechtvaardigd belang (art. 6.1.f AVG).</p>
      <p>Netlify is gevestigd in de Verenigde Staten. Voor die doorgifte buiten de EU gelden passende waarborgen, zoals de standaardcontractbepalingen van de Europese Commissie in de verwerkersovereenkomst van Netlify.</p>
      <p>Op de website staat een link naar LinkedIn. Pas als je daarop klikt, kom je op de site van LinkedIn terecht, en dan geldt hun privacybeleid.</p>

      <h2>Jouw rechten</h2>
      <p>Je mag altijd vragen om je gegevens in te kijken, te verbeteren, te laten wissen of over te dragen. Je kan ook bezwaar maken of de verwerking laten beperken. Stuur gerust een mail naar <a :href="`mailto:${bedrijf.email}`">{{ bedrijf.email }}</a>. We antwoorden binnen een maand.</p>
      <p>Ben je niet tevreden over hoe we met je gegevens omgaan? Dan kan je een klacht indienen bij de <a href="https://www.gegevensbeschermingsautoriteit.be" rel="noopener">Gegevensbeschermingsautoriteit</a>, Drukpersstraat 35, 1000 Brussel.</p>
    </div>
  </article>
</template>

<style scoped>
.doc { padding: clamp(48px, 7vw, 96px) 0 clamp(72px, 9vw, 128px); }
.wrap { max-width: 760px; }
h1 { font-size: clamp(36px, 5vw, 48px); margin-bottom: 16px; }
h2 { font-size: 24px; margin: 48px 0 12px; }
p, li { color: #4A4C3F; }
ul { list-style: disc; padding-left: 1.2em; margin-bottom: 1em; }
li { margin-bottom: 6px; }
.meta { color: var(--tekst-2); font-size: 15px; }
</style>
