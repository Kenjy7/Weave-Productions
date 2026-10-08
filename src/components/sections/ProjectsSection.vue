<script setup>
import FotoOfPatroon from '../FotoOfPatroon.vue'
import SectieKop from '../SectieKop.vue'
import { projecten } from '../../content/home'

defineProps({ nummer: Number })
</script>

<template>
  <section class="sectie" id="projecten" aria-labelledby="projecten-titel">
    <div class="wrap">
      <SectieKop :nummer="nummer" :label="projecten.label" :titel="projecten.titel" id="projecten-titel" />
      <ul v-reveal class="project-grid">
        <li v-for="(project, i) in projecten.items" :key="project.foto" class="project" :class="{ 'project-lg': i === 0 }">
          <figure class="project-media pattern">
            <FotoOfPatroon :src="project.foto" :alt="project.alt" />
          </figure>
          <p class="project-meta">{{ [project.type, project.klant, project.jaar].filter(Boolean).join(' · ') }}</p>
          <h3>{{ project.titel }}</h3>
          <p>{{ project.tekst }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.project-grid { margin-top: clamp(56px, 7vw, 96px); display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(32px, 4vw, 48px) 24px; }
.project-lg { grid-column: 1 / -1; }
.project-media { margin: 0 0 20px; aspect-ratio: 4 / 3; border-radius: var(--radius); overflow: hidden; }
.project-lg .project-media { aspect-ratio: 21 / 9; }
.project-meta { font: 600 13px/1.4 var(--font-tekst); text-transform: uppercase; letter-spacing: .12em; color: var(--brons); margin-bottom: 8px; }
h3 { margin-bottom: 6px; }
.project p:last-child { color: var(--tekst-2); max-width: 36em; margin: 0; }

@media (max-width: 760px) {
  .project-grid { grid-template-columns: 1fr; }
  .project-lg .project-media { aspect-ratio: 4 / 3; }
}
</style>
