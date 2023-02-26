<script setup lang="ts">
import UserPhotos from "./UserPhotos.vue";
</script>

<template>
  <div class="pt-4">
    <div class="flex gap-4">
      <div class="mr-auto flex flex-col gap-4 justify-center">
        <p class="font-bold text-6xl">
          Konv Suu
        </p>
        <p class="text-xl">
          Beautiful and high quality images created by the world's best photographers.
        </p>
      </div>
      <div class="w-1/5 rounded overflow-hidden rotate-12">
        <img src="https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="">
      </div>
      <div class="w-1/5 rounded overflow-hidden -rotate-12">
        <img src="https://images.unsplash.com/photo-1677328155487-7c604ed8b561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="">
      </div>
      <div class="w-1/5 rounded overflow-hidden rotate-12">
        <img src="https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt="">
      </div>
    </div>
    <div class="mt-12">
      <h1 class="font-bold text-5xl">
        Photos
      </h1>
      <UserPhotos />
    </div>
  </div>
</template>

