import { useRoute } from 'vue-router'

export const minderBeweging = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Ruimte boven een sectie zodat ze niet onder de sticky header verdwijnt
export const headerOffset = () => (document.querySelector('.site-header')?.offsetHeight ?? 84) + 12

// De router negeert een klik op een anker dat al in de URL staat. Dan scrollen we zelf.
export function useAnkerOpnieuw() {
  const route = useRoute()
  return (hash) => {
    if (route.path !== '/' || route.hash !== hash) return
    const el = document.querySelector(hash)
    if (!el) return
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - headerOffset(),
      behavior: minderBeweging() ? 'auto' : 'smooth',
    })
  }
}
