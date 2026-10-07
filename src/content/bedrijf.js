// Bedrijfsgegevens. Pas hier aan, dan verandert het overal op de site (ook voor Google en AI).

export const bedrijf = {
  naam: 'Weave Productions',
  eigenaar: 'Senne Van Herreweghe',
  functie: 'Eventproducer',
  tagline: 'Van begin tot eind, één geheel.',

  // Dé omschrijving van Weave. Gebruik exact deze zin ook op LinkedIn, Google Bedrijfsprofiel,
  // in e-mailhandtekeningen enz. Dezelfde zin overal helpt Google en AI om Weave te herkennen
  // (er bestaan veel andere bedrijven met "Weave" in de naam).
  omschrijving: 'Weave Productions is het eventbureau van Senne Van Herreweghe. Wij nemen de productie en coördinatie van je event op ons: planning, leveranciers, techniek en de mensen op de vloer.',

  email: 'senne@weave-productions.be',
  telefoon: '0494 26 36 74',
  telefoonLink: '+32494263674',
  linkedin: 'https://www.linkedin.com/in/senne-van-herreweghe-34413b295/',

  // Alle profielen van Weave/Senne elders op het web (LinkedIn, Google Bedrijfsprofiel, Instagram, …).
  // Google en AI gebruiken deze lijst om te weten dat het om hetzelfde bedrijf gaat.
  profielen: [
    'https://www.linkedin.com/in/senne-van-herreweghe-34413b295/',
  ],

  btw: 'BE 1042.887.778',

  // Werkgebied, bv. 'Gent' of 'Oost-Vlaanderen'. Verschijnt dan in de titel voor Google,
  // de hero, de FAQ en de structured data. null = niet tonen.
  regio: null,
  land: 'België',

  // TODO vóór livegang: verplicht volgens WER art. XII.6 (geografisch adres, geen postbus).
  adres: {
    straat: null,     // bv. 'Voorbeeldstraat 1'
    postcode: null,   // bv. '9000'
    gemeente: null,   // bv. 'Gent'
  },

  hosting: 'Netlify, Inc. (Verenigde Staten)',
  domeinEnMail: 'Combell NV (België)',
}

// Adres als één regel, of null zolang het niet volledig is
export function adresRegel(b = bedrijf) {
  const { straat, postcode, gemeente } = b.adres
  return straat && postcode && gemeente ? `${straat}, ${postcode} ${gemeente}` : null
}
