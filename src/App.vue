<script setup>

</script>

<template>
  <main>
    <div id="display">
      <router-view />
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

</style>
