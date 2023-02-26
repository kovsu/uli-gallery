<script setup lang="ts">
import { images } from "../composable/mock";
</script>

<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-1/3 h-96 cursor-pointer flex justify-center items-center">
      <div class="w-11/12 h-5/6 add flex flex-col justify-center items-center text-gray-300">
        <Icon icon="material-symbols:add" />
        <p>Upload Image</p>
      </div>
    </div>
    <figure v-for="(image, index) in images" :key="index" class="w-1/3 h-96 overflow-hidden cursor-pointer">
      <img class="w-full h-full object-cover hover:scale-125 duration-300" :src="image.url" alt="">
      <figcaption>
        <p>title</p>
      </figcaption>
    </figure>
  </div>
  <button class="load">
    Load More
  </button>
</template>

<style scoped>
.add {
  border-radius: 10px;
  border: 2px dashed #ccc;
}

.load {
  display: block;
  width: 12rem;
  margin: 2rem auto;
  padding: 1.2rem 2.43rem;
  border-radius: 2px;
  border: 1px solid #000;
}

html.dark .load {
  border-color: #fff;
}
</style>
