// Alles wat Google, AI-assistenten en sociale media te zien krijgen.
import { bedrijf, adresRegel } from './bedrijf.js'
import { diensten, faq } from './home.js'

// Het domein waarop de site live staat (zonder / op het einde)
export const siteUrl = 'https://weave-productions.be'

const regio = bedrijf.regio

export const seo = {
  home: {
    // Max. ± 60 tekens, anders kapt Google af
    titel: regio
      ? `Eventbureau ${regio} · Weave Productions`
      : 'Weave Productions · Eventbureau voor productie & coördinatie',
    // Max. ± 155 tekens
    omschrijving: `Eventbureau van Senne Van Herreweghe${regio ? ` in ${regio}` : ''}. Planning, leveranciers, techniek en regie op de dag zelf: één aanspreekpunt, van idee tot afbraak.`,
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

// ── Structured data (schema.org) ───────────────────────────────────────────────
// Eén samenhangende graph: organisatie, oprichter, website, pagina, diensten en FAQ.

const id = (naam) => `${siteUrl}/#${naam}`

const werkgebied = [
  ...(regio ? [{ '@type': 'Place', name: regio }] : []),
  { '@type': 'Country', name: bedrijf.land },
]

function postadres() {
  if (!adresRegel()) return undefined
  return {
    '@type': 'PostalAddress',
    streetAddress: bedrijf.adres.straat,
    postalCode: bedrijf.adres.postcode,
    addressLocality: bedrijf.adres.gemeente,
    addressCountry: 'BE',
  }
}

export function homeSchema() {
  const adres = postadres()

  const organisatie = {
    // Met een adres wordt het ook een lokale dienstverlener (goed voor Google Maps / lokale zoekresultaten)
    '@type': adres ? ['Organization', 'ProfessionalService'] : 'Organization',
    '@id': id('organisatie'),
    name: bedrijf.naam,
    url: `${siteUrl}/`,
    logo: { '@type': 'ImageObject', url: `${siteUrl}/assets/logo/weave-horizontaal-kleur.png`, width: 1200, height: 372 },
    image: `${siteUrl}${seo.deelAfbeelding}`,
    description: bedrijf.omschrijving,
    slogan: bedrijf.tagline,
    email: bedrijf.email,
    telephone: bedrijf.telefoonLink,
    vatID: bedrijf.btw,
    ...(adres && { address: adres }),
    areaServed: werkgebied,
    founder: { '@id': id('senne') },
    knowsAbout: ['Eventproductie', 'Eventcoördinatie', 'Bedrijfsevents', 'Draaiboek', 'Eventplanning', 'Eventtechniek'],
    sameAs: bedrijf.profielen,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diensten',
      itemListElement: diensten.items.map((dienst) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: dienst.titel,
          description: dienst.tekst,
          serviceType: 'Eventproductie en eventcoördinatie',
          provider: { '@id': id('organisatie') },
          areaServed: werkgebied,
        },
      })),
    },
  }

  const senne = {
    '@type': 'Person',
    '@id': id('senne'),
    name: bedrijf.eigenaar,
    jobTitle: bedrijf.functie,
    worksFor: { '@id': id('organisatie') },
    sameAs: [bedrijf.linkedin],
  }

  const website = {
    '@type': 'WebSite',
    '@id': id('website'),
    url: `${siteUrl}/`,
    name: bedrijf.naam,
    inLanguage: 'nl-BE',
    publisher: { '@id': id('organisatie') },
  }

  const pagina = {
    '@type': 'WebPage',
    '@id': id('webpagina'),
    url: `${siteUrl}/`,
    name: seo.home.titel,
    description: seo.home.omschrijving,
    inLanguage: 'nl-BE',
    isPartOf: { '@id': id('website') },
    about: { '@id': id('organisatie') },
    primaryImageOfPage: `${siteUrl}${seo.deelAfbeelding}`,
  }

  const vragen = {
    '@type': 'FAQPage',
    '@id': id('faq'),
    inLanguage: 'nl-BE',
    isPartOf: { '@id': id('webpagina') },
    mainEntity: faq.vragen.map((v) => ({
      '@type': 'Question',
      name: v.vraag,
      acceptedAnswer: { '@type': 'Answer', text: v.antwoord },
    })),
  }

  return { '@context': 'https://schema.org', '@graph': [organisatie, senne, website, pagina, vragen] }
}
