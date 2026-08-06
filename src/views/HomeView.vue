<script setup>
import { firewalkers } from '@/data/firewalkers.js'
import ChapterButton from '@/components/ChapterButton.vue'
</script>

<template>
  <main>
    <h1>START READING</h1>
    <ChapterButton
      v-for="(chapter, index) in firewalkers.chapters"
      :key="index"
      :chapter="index"
      :locked="chapter[0].locked"
    />
  </main>
</template>

<style scoped>
main {
  padding-top: 5rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  font-size: 2rem;
}
</style>
