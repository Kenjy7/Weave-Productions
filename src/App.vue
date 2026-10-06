<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

function naarInhoud() {
  const main = document.getElementById('main')
  main?.focus()
  main?.scrollIntoView()
}
</script>

<template>
  <a class="skip" href="#main" @click.prevent="naarInhoud">Ga naar de inhoud</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style>
#main:focus { outline: none; }
</style>
