<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { navigatie } from '../content/home'
import { toonProjecten } from '../composables/projecten'
import { useAnkerOpnieuw } from '../composables/scroll'

const links = navigatie.filter((item) => !item.alleenAlsProjecten || toonProjecten)

const open = ref(false)
const gescrold = ref(false)
const toggle = ref(null)
const route = useRoute()
const ankerOpnieuw = useAnkerOpnieuw()

watch(() => route.fullPath, () => { open.value = false })

function onScroll() { gescrold.value = window.scrollY > 8 }
function onKeydown(e) {
  if (e.key === 'Escape' && open.value) {
    open.value = false
    toggle.value?.focus()
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': gescrold }">
    <div class="wrap header-inner">
      <RouterLink :to="{ path: '/', hash: '#top' }" class="brand" @click="ankerOpnieuw('#top')" aria-label="Weave Productions, naar boven">
        <img src="/assets/logo/weave-horizontaal-kleur.png" alt="Weave Productions" width="240" height="74">
      </RouterLink>

      <button
        ref="toggle"
        class="nav-toggle"
        :aria-expanded="open"
        aria-controls="nav"
        :aria-label="open ? 'Menu sluiten' : 'Menu openen'"
        @click="open = !open"
      >
        <span></span><span></span>
      </button>

      <nav id="nav" class="nav" :class="{ 'is-open': open }" aria-label="Hoofdmenu" @click="e => e.target.closest('a') && (open = false)">
        <RouterLink v-for="link in links" :key="link.hash" :to="{ path: '/', hash: link.hash }" @click="ankerOpnieuw(link.hash)">
          {{ link.label }}
        </RouterLink>
        <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn btn-primary btn-sm" @click="ankerOpnieuw('#contact')">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255, 255, 255, .92);
  backdrop-filter: saturate(1.4) blur(10px);
  -webkit-backdrop-filter: saturate(1.4) blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color .3s;
}
.site-header.is-scrolled { border-bottom-color: var(--linnen); }
.header-inner { display: flex; align-items: center; justify-content: space-between; height: var(--header-h); }
.brand img { width: 168px; height: auto; margin-left: -6px; }

.nav { display: flex; align-items: center; gap: 36px; }
.nav a:not(.btn) {
  color: var(--olijf); text-decoration: none; font-size: 16px;
  background: linear-gradient(var(--brons), var(--brons)) 0 100% / 0 2px no-repeat;
  padding: 4px 0; transition: background-size .3s var(--ease);
}
.nav a:not(.btn):hover { background-size: 100% 2px; }
.nav-toggle { display: none; }

@media (max-width: 760px) {
  .brand img { width: 144px; }
  .nav-toggle {
    display: grid; place-content: center; gap: 6px;
    width: 44px; height: 44px; border: 0; background: none; cursor: pointer; margin-right: -10px;
  }
  .nav-toggle span { display: block; width: 22px; height: 2px; background: var(--olijf); border-radius: 2px; transition: transform .3s var(--ease); }
  .nav-toggle[aria-expanded="true"] span:first-child { transform: translateY(4px) rotate(45deg); }
  .nav-toggle[aria-expanded="true"] span:last-child { transform: translateY(-4px) rotate(-45deg); }

  .nav {
    display: none;
    position: absolute; top: var(--header-h); left: 0; right: 0;
    flex-direction: column; align-items: stretch; gap: 0;
    background: var(--wit); padding: 8px var(--gutter) 24px;
    border-bottom: 1px solid var(--linnen);
  }
  .nav.is-open { display: flex; }
  .nav a:not(.btn) { padding: 14px 0; border-bottom: 1px solid var(--linnen); font-size: 18px; background: none; }
  .nav .btn { margin-top: 20px; }
}
</style>
