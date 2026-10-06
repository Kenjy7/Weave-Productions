import { useHead } from '@unhead/vue'
import { siteUrl, seo } from '../content/seo'

// Titel, omschrijving, canonieke URL en deelgegevens voor één pagina.
export function usePaginaHead({ titel, omschrijving, pad, indexeren = true }) {
  const url = `${siteUrl}${pad}`
  const afbeelding = `${siteUrl}${seo.deelAfbeelding}`

  useHead({
    title: titel,
    link: indexeren ? [{ rel: 'canonical', href: url }] : [],
    meta: [
      { name: 'description', content: omschrijving },
      { name: 'robots', content: indexeren ? 'index, follow' : 'noindex, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'nl_BE' },
      { property: 'og:site_name', content: 'Weave Productions' },
      { property: 'og:title', content: titel },
      { property: 'og:description', content: omschrijving },
      { property: 'og:url', content: url },
      { property: 'og:image', content: afbeelding },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Weave Productions — Van begin tot eind, één geheel.' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  })
}
