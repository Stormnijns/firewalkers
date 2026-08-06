<script setup lang="ts">
import { useRoute } from 'vue-router'
import { firewalkers } from '@/data/firewalkers'
import MangaPage from '@/components/MangaPage.vue'
import { computed } from 'vue'

const route = useRoute()
const chapter = computed(() => Number(route.params.id ?? 0))
</script>

<template>
  <RouterLink to="/">
    <button id="back-btn">BACK</button>
  </RouterLink>
  <h1>CHAPTER {{ chapter }}: {{ firewalkers.chapters[chapter][0].description || "???" }} </h1>
  <MangaPage
    v-for="page in firewalkers.chapters[chapter]"
    :key="page.page"
    manga="firewalkers"
    :chapter="chapter"
    :page="page"
  />
</template>

<style scoped>
.page {
  background: whitesmoke;
  margin-bottom: 1rem;
}
a {
  text-decoration: none;
}

#back-btn {
  margin-left: 1rem;
  position: fixed;
  left: 0;
  z-index: 99;
}

button {
  background: linear-gradient(135deg, #00bfff, #008cff);
  color: white;

  border: none;
  border-radius: 0.6rem;

  min-width: 4rem;
  height: 2.5rem;

  margin: 0.25rem;
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05rem;

  cursor: pointer;

  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.2s ease;
}

button:hover {
  background: linear-gradient(135deg, #3fd1ff, #00a6ff);
  transform: translateY(-2px);
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
}

button:active {
  transform: translateY(1px);
  box-shadow: 0 0.15rem 0.3rem rgba(0, 0, 0, 0.2);
}
</style>
