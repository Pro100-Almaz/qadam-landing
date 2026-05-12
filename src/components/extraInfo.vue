<template>
  <div class="w-full flex justify-center">
    <div class="bg-white p-8 w-3/4">
      <div>
        <h1 class="text-3xl font-bold">
          {{$t('extra.info.title')}}<br />
          {{$t('extra.info.title-info')}}
        </h1>
        <p>{{$t('extra.info.text')}}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <extraItem class="h-full" :title="t('extra.info.sport')" :description="t('extra.info.sport-text')">
          <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-2.jpg" alt="" />
        </extraItem>
        <extraItem class="h-full" :title="t('extra.info.music')" :description="t('extra.info.music-text')">
          <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-4.jpg" alt="" />
        </extraItem>
        <extraItem class="h-full"  :title="t('extra.info.tech')" :description="t('extra.info.tech-text')">
          <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-6.jpg" alt="" />
        </extraItem>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
        <extraItem class="h-full" :title="t('extra.info.art')" :description="t('extra.info.art-text')">
          <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-3.jpg" alt="" />
        </extraItem>
        <extraItem class="h-full" :title="t('extra.info.dance')" :description="t('extra.info.dance-text')">
          <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-5.jpg" alt="" />
        </extraItem>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import extraItem from './extraItem.vue'

const { t } = useI18n()
</script>