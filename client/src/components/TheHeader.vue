<script setup lang='ts'>
import { useToggle } from "@vueuse/core";
import { useRouter } from "vue-router";
import { isDark } from "../composable/dark";

const toggleDark = useToggle(isDark);
const router = useRouter();

function toUser() {
  router.push("/user");
}

function toHome() {
  router.push("/");
}
</script>

<template>
  <header class="px-16 py-6 flex items-center">
    <div class="cursor-pointer" @click="toHome">
      <img v-if="isDark" class="h-24" src="../logo/uli-dark.svg" alt="uli gallery">
      <img v-else class="h-24" src="../logo/uli.svg" alt="uli gallery">
    </div>
    <div class="ml-auto flex gap-6">
      <div @click="toggleDark()">
        <Icon v-if="isDark" icon="ri:sun-fill" />
        <Icon v-else icon="ri:moon-fill" />
      </div>
      <a href="https://github.com/kovsu" target="_blank">
        <Icon icon="mdi:github" />
      </a>
      <button @click="toUser">
        <Icon icon="mdi:user-outline" />
      </button>
    </div>
  </header>
</template>
