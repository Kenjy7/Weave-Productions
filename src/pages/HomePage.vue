<script setup>
// De homepagina is een stapel secties. Volgorde wijzigen of een sectie toevoegen gebeurt hier.
import HeroSection from '../components/sections/HeroSection.vue'
import IntroSection from '../components/sections/IntroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import ProcessSection from '../components/sections/ProcessSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ValuesSection from '../components/sections/ValuesSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import { toonProjecten } from '../composables/projecten'
import { useHead } from '@unhead/vue'
import { seo, organisatieSchema } from '../content/seo'
import { usePaginaHead } from '../composables/paginaHead'

usePaginaHead({ ...seo.home, pad: '/' })
useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(organisatieSchema) }],
})
</script>

<template>
  <HeroSection />
  <IntroSection />
  <ServicesSection />
  <ProcessSection />
  <ProjectsSection v-if="toonProjecten" />
  <ValuesSection />
  <AboutSection />
  <ContactSection />
</template>
