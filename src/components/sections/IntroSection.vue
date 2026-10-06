<script setup>
import { intro } from '../../content/home'
</script>

<template>
  <section class="intro">
    <div class="wrap">
      <p v-reveal class="statement">{{ intro.deel1 }} <span>{{ intro.deel2 }}</span></p>
    </div>
  </section>
</template>

<style scoped>
.intro { padding: clamp(56px, 9vw, 128px) 0; border-top: 1px solid var(--linnen); }
.statement {
  font: 500 clamp(26px, 3.6vw, 46px)/1.22 var(--font-kop);
  letter-spacing: -0.02em; max-width: 26ch; margin: 0;
}
.statement span { color: var(--tekst-2); }
</style>
