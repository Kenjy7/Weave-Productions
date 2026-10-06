<script setup>
import { seo } from '../content/seo'
import { usePaginaHead } from '../composables/paginaHead'

usePaginaHead({ ...seo.nietGevonden, pad: '/404', indexeren: false })
</script>

<template>
  <section class="niet-gevonden">
    <div class="wrap">
      <p class="label">404</p>
      <h1>Deze draad loopt dood.</h1>
      <p>De pagina die je zoekt bestaat niet (meer). Geen zorgen, de rest van het event loopt gewoon verder.</p>
      <RouterLink to="/" class="btn btn-primary">Naar de homepagina</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.niet-gevonden { padding: clamp(72px, 12vw, 160px) 0; min-height: 60vh; }
h1 { max-width: 14ch; margin-bottom: 20px; }
p:not(.label) { color: var(--tekst-2); max-width: 32em; margin-bottom: 32px; }
</style>
