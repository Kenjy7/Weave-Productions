# Weave Productions — website

Vue 3 + Vite. Huisstijl volgens het brandboek (olijf en zand).

## Starten

```bash
npm install
npm run dev      # lokaal bekijken op http://localhost:5173
npm run build    # elke pagina vooraf als HTML in dist/ (dit doet Netlify automatisch)
npm run preview  # de gebouwde versie lokaal bekijken
```

## Waar pas je wat aan?

| Wat | Waar |
|---|---|
| Teksten van de homepagina | `src/content/home.js` |
| Bedrijfsgegevens (mail, telefoon, btw, adres, LinkedIn) | `src/content/bedrijf.js` |
| Kleuren en lettertypes | `src/styles/tokens.css` |
| Knoppen, labels, patroon (algemeen) | `src/styles/base.css` |
| Volgorde van de secties | `src/pages/HomePage.vue` |
| Eén sectie (opmaak + stijl) | `src/components/sections/…Section.vue` |
| Header en footer | `src/components/SiteHeader.vue`, `SiteFooter.vue` |
| Privacyverklaring | `src/pages/PrivacyPage.vue` |
| Titels en omschrijvingen voor Google, domein, structured data | `src/content/seo.js` |
| Welke pagina's in de sitemap staan | `sitemapPaden` in `vite.config.js` |
| Deelafbeelding (LinkedIn, WhatsApp) | `public/assets/og/weave-productions-og.png` (1200 × 630) |
| Foto's, logo's, fonts | `public/assets/…` |

## Foto's toevoegen

- **Senne:** `public/assets/foto/senne.jpg` (staand 4:5, min. 1000 px breed).
- **Projecten:** `public/assets/projecten/project-1.jpg` enz. (liggend, min. 1600 px breed).
  Vul de teksten in `src/content/home.js` in en zet `projecten.zichtbaar` op `true`.
  Tijdens `npm run dev` is de projectsectie altijd zichtbaar als concept.
- Geen stockfoto's, en bij klantevents altijd eerst toestemming vragen (brandboek hfst. 06).
- Ontbreekt een foto, dan toont de site het draadpatroon.

## Een nieuwe sectie toevoegen

1. Maak `src/components/sections/NieuweSection.vue` (kopieer een bestaande als vertrekpunt).
2. Zet de teksten in `src/content/home.js`.
3. Voeg de component toe in `src/pages/HomePage.vue`.
4. Moet ze in het menu? Voeg ze toe aan `navigatie` in `src/content/home.js`.

## Een nieuwe pagina toevoegen

1. Maak `src/pages/NieuwePagina.vue`.
2. Voeg een route toe in `src/router.js`.
3. Roep `usePaginaHead({ titel, omschrijving, pad })` aan in de pagina (zie `PrivacyPage.vue`).
4. Moet Google ze vinden? Voeg het pad toe aan `sitemapPaden` in `vite.config.js`.

## Vindbaarheid (SEO)

- Elke pagina wordt bij de build vooraf als volledige HTML gemaakt (vite-ssg), zodat Google alles meteen leest.
- `robots.txt` en `sitemap.xml` (automatisch gemaakt bij elke build).
- Per pagina: titel, omschrijving, canonieke URL, deelgegevens (Open Graph) en `noindex` waar nodig.
- Structured data (schema.org `Organization`) op de homepagina.
- Een echte 404-pagina.

## Vóór livegang

- [ ] Adres invullen in `src/content/bedrijf.js` (wettelijk verplicht, WER art. XII.6).
- [ ] Privacyverklaring laten nalezen.
- [ ] Netlify: site koppelen aan de repo, domein `weave-productions.be` toevoegen, DNS bij Combell aanpassen.
- [ ] Google Search Console: domein verifiëren (TXT-record bij Combell) en `https://weave-productions.be/sitemap.xml` indienen.
- [ ] Google Bedrijfsprofiel aanmaken (gratis, belangrijk om lokaal gevonden te worden).
