<template>
    <div class="bg-white p-6 max-w-sm text-black">
      <div class="flex flex-col items-start space-x-3">
        <div class="mb-2">
            <slot></slot>
        </div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>
      <ul class="mt-3 space-y-2 text-sm">
        <li v-for="(item, index) in items" :key="index" class="list-disc ml-5">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    items: Array,
  });
  </script>
  