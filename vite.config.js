import { writeFileSync, rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { siteUrl } from './src/content/seo.js'

// Pagina's die Google mag indexeren (privacy en 404 staan op noindex)
const sitemapPaden = ['/']

function maakSitemap() {
  const vandaag = new Date().toISOString().slice(0, 10)
  const urls = sitemapPaden
    .map((pad) => `  <url>\n    <loc>${siteUrl}${pad}</loc>\n    <lastmod>${vandaag}</lastmod>\n  </url>`)
    .join('\n')
  writeFileSync(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
}

export default defineConfig({
  plugins: [vue()],
  build: {
    assetsDir: '_app', // gehashte bestanden van Vite; eigen foto's/logo's staan in /assets
  },
  ssgOptions: {
    dirStyle: 'flat',          // dist/privacy.html, dist/404.html
    formatting: 'minify',
    script: 'async',
    onFinished() {
      maakSitemap()
      rmSync('dist/.vite', { recursive: true, force: true }) // intern bestand, hoeft niet online
    },
  },
})
