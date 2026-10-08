<template>
    <div class="w-full flex justify-center">
        <div class="w-full px-6 md:px-0 md:w-3/4">
            <div class="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-gray-300">
                <h1 class="text-4xl font-bold">
                    {{ $t('admissions.title') }}<span class="text-orange-500">Qadam School?</span>
                </h1>
                <RouterLink to="/enrollment"
                    class="transition active:scale-95 duration-100 ease-in-out border border-black px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
                    {{ $t('reason.more') }}
                </RouterLink>
            </div>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div v-for="(step, index) in steps" :key="index" class="flex items-start gap-4">
                    <span
                        class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-2xl font-bold rounded-full">
                        {{ index + 1 }}
                    </span>
                    <div>
                        <h2 class="font-bold text-lg">{{ step.title }}</h2>
                        <p class="text-gray-600 mt-2">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();
const steps = computed(() => [
    {
        title: t('admissions.step1'),
        description: t('admissions.step1-text'),
    },
    {
        title: t('admissions.step2'),
        description: t('admissions.step2-text'),
    },
    {
        title: t('admissions.step3'),
        description: t('admissions.step3-text'),
    },
    {
        title: t('admissions.step4'),
        description: t('admissions.step4-text')
    }
]);
</script>

<style scoped></style>
