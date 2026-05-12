<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="flex items-start gap-4 border border-[#D9DEE4] p-2 px-3">
    <div class="flex-shrink-0">
      <img class="h-8 w-8 mt-1" src="../assets/academic-2.svg" alt="icon" />
    </div>
    <div class="flex flex-col">
      <h4 class="font-semibold text-black text-base">{{ title }}</h4>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>
