<script setup lang="ts">
import MissionHero from '../components/MissionHero.vue';
import missionInfo from '../components/missionInfo.vue';
import missionAims from '../components/missionAims.vue';
import schoolNews from '../components/schoolNews.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
</script>

<template>
    <div>
        <MissionHero />
        <div class="bg-white">
            <div class="pt-20">
                <missionInfo />
            </div>
            <div class="w-full flex justify-center">
                <div class="w-3/4">
                    <img src="../assets/mission_image.png" alt="">
                </div>
            </div>
            <div class="mt-20 pb-20">
                <missionAims />
            </div>
        </div>
        <div class="my-20">
            <schoolNews />
        </div>
        <div class="bg-white">
            <schoolQuestions class="py-20"/>
        </div>
        <div>
            <schoolFooter/>
        </div>
    </div>
</template>