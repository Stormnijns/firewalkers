<script setup>
import MangaPage from "./components/MangaPage.vue";
import { firewalkers } from "./data/firewalkers";
</script>

<template>
  <main>
    <div id="display">
      <MangaPage
        v-for="page in firewalkers"
        :key="page.page"
        manga="firewalkers"
        :chapter="1"
        :page="page"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  width: 100%;
}

#display {
  margin: 1rem;
  width: min(900px, 100%);
}
.page {
  background: whitesmoke;
  margin-bottom: 1rem;
}
</style>
