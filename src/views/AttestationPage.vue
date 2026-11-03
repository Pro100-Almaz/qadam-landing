<template>
    <div>
        <enrollmentHero :title="t('attestation.title')" />
        <div class="py-20 bg-white">
            <div class="w-full flex justify-center">
                <div class="w-full md:w-3/4 px-4 md:px-0 flex flex-col gap-10">
                    <div class="flex flex-col gap-4 max-w-3xl">
                        <h2 class="text-3xl md:text-4xl font-bold text-balance">{{ t('attestation.heading') }}</h2>
                        <p class="text-lg text-pretty">{{ t('attestation.text') }}</p>
                    </div>

                    <ul v-if="DOCS.length" class="border-t border-[#D9DEE4]">
                        <li v-for="doc in DOCS" :key="doc.file" class="border-b border-[#D9DEE4]">
                            <a :href="`/docs/attestation/${doc.file}`" target="_blank" rel="noopener"
                                class="group flex items-center gap-4 md:gap-6 py-5 hover:text-[#E87C43]">
                                <span class="shrink-0 w-14 h-14 rounded-md bg-[#F3F5F8] text-[#E87C43] font-bold text-sm uppercase flex items-center justify-center">
                                    {{ doc.file.split('.').pop() }}
                                </span>
                                <span class="flex-1 text-lg font-semibold text-pretty">{{ doc.title[locale] || doc.title.ru }}</span>
                                <span class="shrink-0 hidden sm:inline font-semibold underline underline-offset-4">{{ t('attestation.open') }}</span>
                                <img src="../assets/arrow-right.svg" alt="" class="shrink-0 w-5 invert transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
                            </a>
                        </li>
                    </ul>

                    <div v-else class="bg-[#F3F5F8] rounded-md p-6 md:p-10 flex flex-col gap-3">
                        <p class="text-2xl font-bold">{{ t('attestation.emptyTitle') }}</p>
                        <p class="text-lg">{{ t('attestation.emptyText') }}</p>
                        <a href="tel:+77750072377" class="text-xl font-bold hover:text-[#E87C43] w-fit">+7 775 007 23 77</a>
                    </div>
                </div>
            </div>
        </div>
        <schoolFooter />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import enrollmentHero from '../components/enrollmentHero.vue';
import schoolFooter from '../components/schoolFooter.vue';

const { t, locale } = useI18n();

// Files live in public/docs/attestation/. Add one entry per document:
// { file: 'ustav.pdf', title: { ru: 'Устав школы', kz: 'Мектеп жарғысы' } },
const DOCS = [];
</script>
