<script setup lang="ts">
import ordaHero from '../components/ordaHero.vue';
import ordaInfo from '../components/ordaInfo.vue';
import ordaGroup from '../components/ordaGroup.vue';
import ordaReason from '../components/ordaReason.vue';
import schoolNews from '../components/schoolNews.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import ordaSystem from '../components/ordaSystem.vue';
import ordaMore from '../components/ordaMore.vue';
</script>

<template>
    <div>
        <ordaHero />
        <div class="bg-white pt-10">
            <ordaInfo />
        </div>

        <div class="pt-20">
            <ordaGroup />
        </div>
        <div class="bg-white mt-20 pb-20">
            <ordaReason />
        </div>
        <div>
            <ordaSystem/>
        </div>
        <div>
            <ordaMore/>
        </div>
        <div class="my-20">
            <schoolNews />
        </div>
        <div class="bg-white">
            <schoolQuestions class="py-20" />
        </div>
        <div>
            <schoolFooter />
        </div>
    </div>
</template>