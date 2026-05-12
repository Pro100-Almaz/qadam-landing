<template>
    <div class="w-full flex justify-center">
        <div class="bg-white p-8 w-full md:w-3/4 px-4 md:px-0">
            <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 md:gap-4 mt-6">
                <div class="col-span-2 mb-2 md:mb-0">
                    <h2 class="w-2/3 text-3xl font-bold text-black mb-2">{{ $t('academic.methods.title') }}</h2>
                    <h3 class="text-sm">
                        {{ $t('academic.methods.text') }}
                    </h3>
                </div>
                <FeatureItem title="Mindfulness" :description="t('academic.methods.learn')" />
            </div> 
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                <FeatureItem :title="t('academic.methods.study')" :description="t('academic.methods.study-text')" />
                <FeatureItem :title="t('academic.methods.individual')" :description="t('academic.methods.individual-text')" />
                <FeatureItem :title="t('academic.methods.experiment')" :description="t('academic.methods.experiment-text')" />
                <FeatureItem :title="t('academic.methods.gaming')" :description="t('academic.methods.gaming-text')" />
                <FeatureItem :title="t('academic.methods.self')" :description="t('academic.methods.self-text')" />
                <FeatureItem :title="t('academic.methods.culture')" :description="t('academic.methods.culture-text')" />
            </div>
        </div>
    </div>
</template> 

<script setup>
import FeatureItem from './featureItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>