<script setup lang="ts">
import { friends } from "../composable/mock";
</script>

<template>
  <div class="mt-8 flex flex-col items-center gap-4">
    <div v-for="friend in friends" :key="friend.username" class="friend">
      <p class="font-bold text-4xl cursor-pointer duration-500">
        {{ friend.name }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.friend {
  position: relative;
  z-index: 10001;
}
.friend > p:hover {
  transform: rotate(12deg) scale(3);
  text-shadow: 5px 0 rgba(0, 0 , 0, 0.1);
}

html.dark .friend > p:hover {
  text-shadow: 5px 0 rgba(255, 255 , 255, 0.1);
}
</style>
