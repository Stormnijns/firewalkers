<script setup lang="ts">
const props = defineProps<{
  chapter: number
  locked?: boolean
}>()
</script>

<template>
  <RouterLink
    v-if="!props.locked"
    :to="`/chapter/${props.chapter}`"
  >
    <button>
      CHAPTER {{ props.chapter }}
    </button>
  </RouterLink>

  <button
    v-else
    class="locked"
    disabled
  >
    CHAPTER {{ props.chapter }}
  </button>
</template>

<style scoped>
a {
  text-decoration: none;
}

button {
  background: linear-gradient(135deg, #00bfff, #008cff);
  color: white;

  border: none;
  border-radius: 0.6rem;

  min-width: 8rem;

  margin: 0.5rem;
  padding: .5rem 1.5rem;

  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.05rem;

  cursor: pointer;

  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.2s ease;
}

button:hover:not(:disabled) {
  background: linear-gradient(135deg, #3fd1ff, #00a6ff);
  transform: translateY(-2px);
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.25);
}

button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 0.15rem 0.3rem rgba(0, 0, 0, 0.2);
}

/* Locked style */
button.locked {
  background: #777;
  color: #ddd;
  cursor: not-allowed;
  box-shadow: none;
}

button.locked:hover {
  transform: none;
}
</style>
