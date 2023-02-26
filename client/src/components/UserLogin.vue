<script setup lang="ts">
import { isDark } from "../composable/dark";
</script>

<template>
  <div class="mx-auto my-0 w-96 flex gap-8 flex-col items-center">
    <div class="w-full">
      <img v-if="isDark" class="w-full" src="../logo/uli-dark.svg" alt="uli gallery">
      <img v-else class="w-full" src="../logo/uli.svg" alt="uli gallery">
    </div>
    <div class="w-full login">
      <input type="text" placeholder="Username" class="w-full bg-transparent py-4 pl-4 outline-none duration-500 rounded-xl">
    </div>
    <div class="w-full login">
      <input type="password" placeholder="Password" class="w-full bg-transparent py-4 pl-4 outline-none duration-500 rounded-xl">
    </div>
    <a class="cursor-pointer hover:underline hover:decoration-wavy text-2xl">Sign In</a>
  </div>
</template>

<style scoped>
.login > input {
  border: 1px solid #88888850;
}

.login > input:focus {
  border: 1px solid #000;
}

html.dark .login > input:focus {
  border-color: #ffffff;
}
</style>
