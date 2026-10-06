import HomePage from './pages/HomePage.vue'
import { minderBeweging, headerOffset } from './composables/scroll'

export const routes = [
  { path: '/', component: HomePage },
  { path: '/privacy', component: () => import('./pages/PrivacyPage.vue') },
  // Onbekende adressen: Netlify toont dan 404.html (gemaakt uit deze route)
  { path: '/404', component: () => import('./pages/NotFoundPage.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFoundPage.vue') },
]

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  if (to.hash) {
    // De header is sticky: hou de sectie eronder vrij
    return { el: to.hash, top: headerOffset(), behavior: minderBeweging() ? 'auto' : 'smooth' }
  }
  return { top: 0 }
}
