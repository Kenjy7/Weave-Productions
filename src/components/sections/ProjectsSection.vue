<script setup>
import FotoOfPatroon from '../FotoOfPatroon.vue'
import { projecten } from '../../content/home'
</script>

<template>
  <section class="projects" id="projecten" aria-labelledby="projecten-titel">
    <div class="wrap">
      <div class="projects-head">
        <p class="label">{{ projecten.label }}</p>
        <h2 id="projecten-titel">{{ projecten.titel }}</h2>
      </div>
      <ul class="project-grid">
        <li v-for="(project, i) in projecten.items" :key="project.foto" v-reveal class="project" :class="{ 'project-lg': i === 0 }">
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
.projects { padding: clamp(72px, 10vw, 140px) 0 0; }
.projects-head { max-width: 640px; margin-bottom: clamp(36px, 5vw, 56px); }
.project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(32px, 4vw, 48px) 24px; }
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
