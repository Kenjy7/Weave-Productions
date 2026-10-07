// Alle teksten van de homepagina. Huisstijl: je-vorm, "wij", korte zinnen (brandboek hfst. 02).

export const navigatie = [
  { label: 'Diensten', hash: '#diensten' },
  { label: 'Aanpak', hash: '#aanpak' },
  { label: 'Projecten', hash: '#projecten', alleenAlsProjecten: true },
  { label: 'Over Mij', hash: '#over' },
]

export const hero = {
  label: 'Eventbureau · Eventproductie & coördinatie',
  titel: 'Wij weven jouw event tot één geheel.',
  // Eerst kennismaken: wie we zijn en wat we doen. De oproep komt pas in de volgende sectie.
  intro: 'Weave Productions is het eventbureau van Senne Van Herreweghe. Wij nemen de productie en coördinatie van je event op ons: planning, leveranciers, techniek en de mensen op de vloer.',
  kenmerken: ['Bedrijfsevents', 'Eigen projecten', 'Eén aanspreekpunt'],
  verder: { label: 'Lees verder', hash: '#intro' },
  klanten: 'Onder meer voor DPG Media',
  // Brede foto onder de titel: public/assets/foto/hero.jpg (liggend, min. 2400 px breed).
  // Zolang het bestand er niet is, toont de site het draadpatroon.
  foto: '/assets/foto/hero.jpg',
  fotoAlt: 'Sfeerbeeld van een event van Weave Productions',
}

export const intro = {
  deel1: 'Een event bestaat uit tientallen losse draden.',
  deel2: 'Wij zorgen dat ze van begin tot eind in elkaar geweven worden.',
  oproep: 'Benieuwd wat we voor jouw event kunnen doen?',
  knopPrimair: { label: 'Plan een gesprek', hash: '#contact' },
  knopSecundair: { label: 'Bekijk onze aanpak', hash: '#aanpak' },
}

export const diensten = {
  label: 'Diensten',
  titel: 'Alles wat een event nodig heeft. Eén iemand die het overziet.',
  intro: 'Je kan ons inschakelen voor het volledige event of voor één onderdeel. In beide gevallen weet je bij wie je terechtkunt.',
  items: [
    { titel: 'Planning en draaiboek', tekst: 'Eén planning waar iedereen mee werkt. Een draaiboek dat tot op de minuut klopt.' },
    { titel: 'Leveranciers', tekst: 'Locatie, catering, decor, verhuur. Wij zoeken, vergelijken en stemmen af.' },
    { titel: 'Techniek', tekst: 'Klank, licht en beeld. We spreken de taal van de technici, zodat jij dat niet hoeft.' },
    { titel: 'Timing en regie', tekst: 'Op de dag zelf houden we de klok in het oog. Elk onderdeel start wanneer het moet.' },
    { titel: 'Mensen op de vloer', tekst: 'Crew, sprekers, artiesten en gasten. Iedereen weet waar hij moet zijn en wat er verwacht wordt.' },
  ],
}

export const aanpak = {
  label: 'Aanpak',
  titel: 'Van eerste idee tot afbraak.',
  stappen: [
    { titel: 'Kennismaken', tekst: 'We luisteren naar wat je voor ogen hebt. Doel, publiek, budget en datum.' },
    { titel: 'Plannen', tekst: 'Een helder voorstel, één planning en een draaiboek. Je weet altijd waar we staan.' },
    { titel: 'Afstemmen', tekst: 'Locatie, leveranciers en techniek. Wij brengen alles samen en houden het overzicht.' },
    { titel: 'De dag zelf', tekst: 'Wij staan op de vloer, van opbouw tot de laatste gast. Jij geniet van je event.' },
    { titel: 'Afbraak en nazorg', tekst: 'Alles netjes afgebroken en afgerekend. Daarna een korte evaluatie: wat houden we, wat kan beter?' },
  ],
}

// Projecten: zet `zichtbaar` op true zodra er echte foto's en teksten zijn.
// Tijdens het ontwikkelen (npm run dev) is de sectie altijd zichtbaar als concept.
// Foto's in public/assets/projecten/ (liggend, min. 1600 px breed), enkel met toestemming van de klant.
// Het eerste project wordt breed getoond.
export const projecten = {
  zichtbaar: false,
  label: 'Projecten',
  titel: 'Een greep uit wat we samen weefden.',
  items: [
    { foto: '/assets/projecten/project-1.jpg', alt: '[Beschrijf wat er op de foto te zien is]', type: '[Type event]', klant: '[Klant]', jaar: '[Jaar]', titel: '[Naam van het project]', tekst: '[Eén of twee zinnen: wat was de vraag, wat deden wij.]' },
    { foto: '/assets/projecten/project-2.jpg', alt: '[Beschrijf wat er op de foto te zien is]', type: '[Type event]', klant: '[Klant]', jaar: '[Jaar]', titel: '[Naam van het project]', tekst: '[Eén of twee zinnen: wat was de vraag, wat deden wij.]' },
    { foto: '/assets/projecten/project-3.jpg', alt: '[Beschrijf wat er op de foto te zien is]', type: '[Type event]', klant: '[Klant]', jaar: '[Jaar]', titel: '[Naam van het project]', tekst: '[Eén of twee zinnen: wat was de vraag, wat deden wij.]' },
  ],
}

export const waarden = {
  label: 'Waar je op kan rekenen',
  titel: 'Zakelijk waar het moet, speels waar het kan.',
  items: [
    { titel: 'Verbindend', tekst: 'We brengen mensen, partners en onderdelen samen. Eén aanspreekpunt, één verhaal.' },
    { titel: 'Betrouwbaar', tekst: 'Afspraken worden nagekomen. Op de dag zelf hoef jij je geen zorgen te maken.' },
    { titel: 'Verzorgd', tekst: 'Oog voor detail, van de planning tot de laatste kabel. Rustig en professioneel.' },
    { titel: 'Met een knipoog', tekst: 'Events zijn plezier. Dat mag je merken, ook achter de schermen.' },
  ],
}

// Foto van Senne: public/assets/foto/senne.jpg (staand 4:5, min. 1000 px breed).
// Zolang het bestand er niet is, toont de site het draadpatroon.
export const over = {
  label: 'Over Senne',
  titel: 'Eén aanspreekpunt dat alle draden in handen houdt.',
  foto: '/assets/foto/senne.jpg',
  fotoAlt: 'Senne Van Herreweghe aan het werk op een event',
  alineas: [
    'Achter Weave Productions staat Senne Van Herreweghe. Als freelancer verzorgt hij de productie en coördinatie van events: van bedrijfsevents voor klanten zoals DPG Media tot kleinere eigen projecten.',
  ],
  // Groot uitgelicht, als belofte
  belofte: 'Rust op de vloer, een draaiboek dat klopt, en iemand die opneemt als je belt.',
}

export const contact = {
  label: 'Contact',
  titel: 'Nog vragen? Stuur gerust een berichtje.',
  intro: 'Vertel kort wat je plant: wat voor event, wanneer en voor hoeveel mensen. Je krijgt snel een antwoord.',
  mailOnderwerp: 'Nieuw event',
}
