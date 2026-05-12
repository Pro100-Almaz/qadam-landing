<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4">
            <div class="flex justify-between items-center pb-4 border-b border-gray-300">
                <h1 class="text-4xl font-bold">
                    {{ $t('admissions.title') }}<span class="text-orange-500">Qadam School?</span>
                </h1>
                <button
                    class="transition active:scale-95 duration-100 ease-in-out cursor-pointer hidden md:block border border-black px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
                    {{ $t('reason.more') }}
                </button>
            </div>
            <div class="mt-6 flex flex-col md:flex-row md:gap-2 space-y-6">
                <div v-for="(step, index) in steps" :key="index" class="flex items-start space-x-4">
                    <span
                        class="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-2xl font-bold rounded-full">
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
