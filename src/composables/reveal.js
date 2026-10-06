// v-reveal: laat een element zacht verschijnen zodra het in beeld komt.

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer
function getObserver() {
  observer ??= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      }
    })
  }, { rootMargin: '0px 0px -8% 0px' })
  return observer
}

export const reveal = {
  mounted(el) {
    if (reduced() || !('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
