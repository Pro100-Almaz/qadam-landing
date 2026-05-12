<template>
  <div class="relative rounded-xl overflow-hidden shadow-lg h-120">
    <!-- Image -->
    <slot></slot>

    <!-- Overlay gradient and text -->
    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
      <h3 class="text-white text-lg font-semibold mb-1">
        {{ title }}
      </h3>
      <p class="text-gray-200 text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>