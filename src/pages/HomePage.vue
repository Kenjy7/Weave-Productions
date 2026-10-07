<script setup>
// De homepagina is een stapel secties. Volgorde wijzigen of een sectie toevoegen gebeurt hier.
import HeroSection from '../components/sections/HeroSection.vue'
import IntroSection from '../components/sections/IntroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import ProcessSection from '../components/sections/ProcessSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ValuesSection from '../components/sections/ValuesSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import { toonProjecten } from '../composables/projecten'
import { useHead } from '@unhead/vue'
import { seo, homeSchema } from '../content/seo'
import { usePaginaHead } from '../composables/paginaHead'

usePaginaHead({ ...seo.home, pad: '/' })
useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(homeSchema()) }],
})

// Genummerde secties (01, 02, …). De nummering past zich vanzelf aan.
const secties = [
  ServicesSection,
  ProcessSection,
  ...(toonProjecten ? [ProjectsSection] : []),
  ValuesSection,
  AboutSection,
  FaqSection,
  ContactSection,
]
</script>

<template>
  <HeroSection />
  <IntroSection />
  <component :is="sectie" v-for="(sectie, i) in secties" :key="i" :nummer="i + 1" />
</template>
