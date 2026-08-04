<script setup lang="ts">
import type {MangaPage, MangaPanel} from "@/data/firewalkers";

const props = defineProps<{
  manga: string;
  page: MangaPage;
}>();

const assetPath = `${import.meta.env.BASE_URL}manga`;

function panelStyle(panel: MangaPanel) {
  return {
    ...(panel.right !== undefined && { right: panel.right + "%" }),
    ...(panel.left !== undefined && { left: panel.left + "%" }),

    top: panel.top + "rem",
    width: panel.scale + "%",

    border: panel.border,

    transform: `rotate(${panel.rotation ?? 0}deg)`,
    zIndex: panel.zIndex ?? 1,
  };
}
</script>

<template>
  <section
    class="page"
    :style="{ height: page.height + 'rem' }"
  >
    <img
      v-for="panel in page.panels"
      :key="panel.src"
      :src="`${assetPath}/${manga}/${panel.src}`"
      class="panel"
      :style="panelStyle(panel)"
    />
  </section>
</template>

<style scoped>
.page {
  position: relative;
  width: 100%;
}

.panel {
  position: absolute;
}
</style>
