// v-reveal: laat een blok zacht verschijnen zodra het in beeld komt.
//   v-reveal       → zacht omhoog en zichtbaar
//   v-reveal:kop   → sectiekop: de draad trekt zich, de rest komt zacht in beeld
// Bewust spaarzaam: één reveal per blok, niet per rij.

import { minderBeweging } from './scroll'

let observer
function getObserver() {
  observer ??= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      }
    })
  }, { rootMargin: '0px 0px -10% 0px' })
  return observer
}

export const reveal = {
  mounted(el, binding) {
    if (minderBeweging() || !('IntersectionObserver' in window)) return
    // Staat het element bij het laden al in beeld, dan niet verbergen (anders flitst de tekst)
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
    el.classList.add('reveal')
    if (binding.arg) el.classList.add(`reveal-${binding.arg}`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
