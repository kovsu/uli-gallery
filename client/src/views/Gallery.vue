<script setup lang="ts">
import { images } from "../composable/mock";
const unit = Math.round(images.value.length / 3);
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-x-8">
      <div v-for="i in unit" :key="i" class="grid grid-cols-1 gap-y-6">
        <figure v-for="(image, index) in images.slice((i - 1) * unit, i * unit)" :key="index" class="rounded overflow-hidden relative show">
          <img :src="image.url" class="h-full object-cover">
          <figcaption class="absolute left-0 right-0 bottom-0 px-8 py-4 flex items-center justify-between font-bold text-white">
            <p class="text-3xl">
              {{ image.title }}
            </p>
            <p class="text-3xl">
              {{ image.time }}
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show > img,
.show > figcaption {
  transition: 0.3s;
}

.show > figcaption {
  opacity: 0;
  visibility: none;
  transform: scale(0.8);
}

.show:hover > img {
  filter: brightness(60%);
}

.show:hover > figcaption {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
</style>
