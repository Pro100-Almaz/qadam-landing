<script setup>
import teamInfo from '../components/teamInfo.vue';
import schoolHeader from '../components/schoolHeader.vue';
import teamHeader from '../components/teamHeader.vue';
import schoolNews from '../components/schoolNews.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
</script>
<template>
    <div>
        <div class="relative">
            <schoolHeader />
            <teamHeader /> 
        </div>
        <div>
            <teamInfo />
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