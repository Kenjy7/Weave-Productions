import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { reveal } from './composables/reveal'
import './styles/tokens.css'
import './styles/base.css'

// Bij `npm run build` wordt elke pagina vooraf als HTML gemaakt (goed voor Google),
// in de browser neemt Vue het daarna over.
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app }) => {
    app.directive('reveal', reveal)
  },
)
