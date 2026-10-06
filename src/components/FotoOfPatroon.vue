<script setup>
// Toont een foto. Bestaat het bestand (nog) niet, dan verdwijnt de <img> en blijft
// de achtergrond van de ouder (het draadpatroon) zichtbaar.
import { ref, onMounted } from 'vue'

defineProps({ src: String, alt: String })

const zichtbaar = ref(true)
const img = ref(null)

onMounted(() => {
  // Kan al mislukt zijn vóór Vue de pagina overnam
  if (img.value?.complete && img.value.naturalWidth === 0) zichtbaar.value = false
})
</script>

<template>
  <img v-if="zichtbaar" ref="img" :src="src" :alt="alt" loading="lazy" @error="zichtbaar = false">
</template>

<style scoped>
img { width: 100%; height: 100%; object-fit: cover; }
</style>
