<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <div class="px-16 py-4">
    <RouterView />
  </div>
</template>
