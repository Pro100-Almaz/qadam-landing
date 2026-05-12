<template>
    <div>
        <extraHero/>
        <div class="py-20 bg-white">
            <extraInfo />
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
<script setup>
import extraHero from '../components/extraHero.vue';
import extraInfo from '../components/extraInfo.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import schoolNews from '../components/schoolNews.vue';
</script>