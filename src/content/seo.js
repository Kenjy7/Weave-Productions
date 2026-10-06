// Alles wat Google en sociale media te zien krijgen.
import { bedrijf } from './bedrijf.js'

// Het domein waarop de site live staat (zonder / op het einde)
export const siteUrl = 'https://weave-productions.be'

export const seo = {
  home: {
    titel: 'Weave Productions · Eventproductie en coördinatie',
    omschrijving: 'Eventbureau van Senne Van Herreweghe. Planning, leveranciers, techniek en regie op de dag zelf: één aanspreekpunt, van eerste idee tot afbraak.',
  },
  privacy: {
    titel: 'Privacyverklaring · Weave Productions',
    omschrijving: 'Hoe Weave Productions omgaat met je gegevens.',
  },
  nietGevonden: {
    titel: 'Pagina niet gevonden · Weave Productions',
    omschrijving: 'Deze pagina bestaat niet (meer).',
  },
  // Afbeelding bij het delen op LinkedIn, WhatsApp, enz. (1200 × 630)
  deelAfbeelding: '/assets/og/weave-productions-og.png',
}

// Structured data voor Google (schema.org)
export const organisatieSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: bedrijf.naam,
  url: siteUrl,
  logo: `${siteUrl}/assets/logo/weave-horizontaal-kleur.png`,
  image: `${siteUrl}${seo.deelAfbeelding}`,
  description: seo.home.omschrijving,
  slogan: bedrijf.tagline,
  email: bedrijf.email,
  telephone: bedrijf.telefoonLink,
  vatID: bedrijf.btw,
  areaServed: { '@type': 'Country', name: 'België' },
  knowsAbout: ['Eventproductie', 'Eventcoördinatie', 'Bedrijfsevents', 'Draaiboek', 'Eventplanning'],
  founder: { '@type': 'Person', name: bedrijf.eigenaar, jobTitle: bedrijf.functie, sameAs: [bedrijf.linkedin] },
  sameAs: [bedrijf.linkedin],
}
