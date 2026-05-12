<template>
    <div
      class="absolute w-full md:w-3/4 grid grid-cols-1 auto-rows-fr gap-4
             md:grid-cols-3 md:gap-0 md:bg-white rounded-2xl
             md:divide-x md:divide-[#D9DEE4]">
  
      <Card
        class="h-full rounded-2xl md:rounded-l-2xl md:rounded-r-none"
        :title="$t('main-standarts.title-internal')"
        :items="[
          $t('main-standarts.text-PYP-internal'),
          $t('main-standarts.text-subjects-internal'),
          $t('main-standarts.text-teachers-internal'),
        ]"
      >
        <img class="w-6" src="../assets/frame_15.svg" alt="">
      </Card>
  
      <Card
        class="h-full rounded-2xl md:rounded-none"
        :title="$t('main-standarts.title-innovation')"
        :items="[
          $t('main-standarts.title-study'),
          $t('main-standarts.title-gaming'),
          $t('main-standarts.title-reflex'),
        ]"
      >
        <img class="w-6" src="../assets/frame_16.svg" alt="">
      </Card>
  
      <Card
        class="h-full rounded-2xl md:rounded-r-2xl md:rounded-l-none"
        :title="$t('main-standarts.title-individual')"
        :items="[
          $t('main-standarts.title-strong'),
          $t('main-standarts.title-plan'),
          $t('main-standarts.title-growth'),
        ]"
      >
        <img class="w-6" src="../assets/frame_17.svg" alt="">
      </Card>
    </div>
  </template>
  
  <script setup>
  import Card from "./Card.vue";
  </script>
  
  <style scoped></style>
  