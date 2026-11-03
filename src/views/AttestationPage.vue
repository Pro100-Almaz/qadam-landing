<template>
    <div>
        <enrollmentHero :title="t('attestation.title')" />
        <div class="py-20 bg-white">
            <div class="w-full flex justify-center">
                <div class="w-full md:w-3/4 px-4 md:px-0 flex flex-col gap-12">
                    <div class="flex flex-col gap-4 max-w-3xl">
                        <h2 class="text-3xl md:text-4xl font-bold text-balance">{{ t('attestation.heading') }}</h2>
                        <p class="text-lg text-pretty">{{ t('attestation.text') }}</p>
                        <p v-if="SAMPLE" class="self-start bg-[#FFF1E8] border border-[#E87C43] rounded-md px-4 py-3">
                            {{ t('attestation.sample') }}
                        </p>
                    </div>

                    <div v-if="GROUPS.length" class="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)] gap-10 lg:gap-16">
                        <!-- Section index -->
                        <nav :aria-label="t('attestation.sections')" class="hidden lg:block sticky top-28 self-start">
                            <p class="font-bold mb-4">{{ t('attestation.sections') }}</p>
                            <ol class="flex flex-col gap-3 border-l border-[#D9DEE4]">
                                <li v-for="g in GROUPS" :key="g.id">
                                    <a :href="`#${g.id}`" class="block -ml-px pl-4 border-l border-transparent hover:border-[#E87C43] hover:text-[#E87C43]">
                                        {{ t(`attestation.groups.${g.id}`) }}
                                        <span class="text-[#5B6472] whitespace-nowrap">· {{ g.docs.length }}</span>
                                    </a>
                                </li>
                            </ol>
                            <div class="mt-10 flex flex-col gap-2 text-sm">
                                <p class="font-bold">{{ t('attestation.contact') }}</p>
                                <a href="tel:+77750072377" class="hover:text-[#E87C43]">+7 775 007 23 77</a>
                                <a href="https://wa.me/77003357676" target="_blank" rel="noopener" class="hover:text-[#E87C43]">WhatsApp</a>
                            </div>
                        </nav>

                        <div class="flex flex-col gap-14">
                            <section v-for="g in GROUPS" :key="g.id" :id="g.id" class="scroll-mt-28">
                                <h3 class="text-2xl font-bold mb-4 text-balance">{{ t(`attestation.groups.${g.id}`) }}</h3>
                                <ul class="border-t border-[#D9DEE4]">
                                    <li v-for="doc in g.docs" :key="doc.file" class="border-b border-[#D9DEE4] flex items-center gap-4 md:gap-6 py-4">
                                        <span class="shrink-0 w-12 h-14 rounded-md bg-[#F3F5F8] text-[#E87C43] font-bold text-xs uppercase flex items-center justify-center" aria-hidden="true">
                                            {{ ext(doc.file) }}
                                        </span>
                                        <div class="flex-1 min-w-0">
                                            <a :href="href(doc)" target="_blank" rel="noopener"
                                                class="text-lg font-semibold text-pretty hover:text-[#E87C43]">
                                                {{ doc.title[locale] || doc.title.ru }}
                                            </a>
                                            <p class="text-sm text-[#4A5361] mt-1">{{ ext(doc.file).toUpperCase() }} · {{ t('attestation.updated') }} {{ doc.updated }}</p>
                                        </div>
                                        <a :href="href(doc)" target="_blank" rel="noopener"
                                            class="shrink-0 hidden sm:inline font-semibold underline underline-offset-4 hover:text-[#E87C43]">{{ t('attestation.open') }}</a>
                                        <a :href="href(doc)" :download="doc.file" :aria-label="`${t('attestation.download')}: ${doc.title[locale] || doc.title.ru}`"
                                            class="shrink-0 w-11 h-11 rounded-full border border-[#D9DEE4] flex items-center justify-center hover:border-[#E87C43] hover:text-[#E87C43] transition-colors">
                                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </section>

                            <div class="lg:hidden flex flex-col gap-2">
                                <p class="font-bold">{{ t('attestation.contact') }}</p>
                                <a href="tel:+77750072377" class="text-xl font-bold hover:text-[#E87C43] w-fit">+7 775 007 23 77</a>
                            </div>
                        </div>
                    </div>

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

// Sample (watermarked) documents until the real ones arrive. Set to false once replaced.
const SAMPLE = true;

// Files live in public/docs/attestation/. Group titles: locales → attestation.groups.<id>
const GROUPS = [
    { id: 'legal', docs: [
        { file: 'ustav.pdf', updated: '03.11.2026', title: { ru: 'Устав ТОО «Qadam School»', kz: '«Qadam School» ЖШС жарғысы' } },
        { file: 'license.pdf', updated: '03.11.2026', title: { ru: 'Лицензия на образовательную деятельность с приложением', kz: 'Білім беру қызметіне лицензия және қосымшасы' } },
        { file: 'registration.pdf', updated: '03.11.2026', title: { ru: 'Справка о государственной регистрации юридического лица', kz: 'Заңды тұлғаны мемлекеттік тіркеу туралы анықтама' } },
    ] },
    { id: 'education', docs: [
        { file: 'program.pdf', updated: '03.11.2026', title: { ru: 'Образовательная программа школы', kz: 'Мектептің білім беру бағдарламасы' } },
        { file: 'curriculum.pdf', updated: '03.11.2026', title: { ru: 'Рабочий учебный план на 2026–2027 учебный год', kz: '2026–2027 оқу жылына арналған жұмыс оқу жоспары' } },
        { file: 'schedule.pdf', updated: '03.11.2026', title: { ru: 'Расписание учебных занятий', kz: 'Оқу сабақтарының кестесі' } },
    ] },
    { id: 'staff', docs: [
        { file: 'staff.pdf', updated: '03.11.2026', title: { ru: 'Сведения о педагогических кадрах и их квалификации', kz: 'Педагог кадрлар және олардың біліктілігі туралы мәліметтер' } },
    ] },
    { id: 'facilities', docs: [
        { file: 'sanitary.pdf', updated: '03.11.2026', title: { ru: 'Санитарно-эпидемиологическое заключение', kz: 'Санитариялық-эпидемиологиялық қорытынды' } },
        { file: 'facilities.pdf', updated: '03.11.2026', title: { ru: 'Справка о материально-технической базе', kz: 'Материалдық-техникалық база туралы анықтама' } },
    ] },
    { id: 'quality', docs: [
        { file: 'results.pdf', updated: '03.11.2026', title: { ru: 'Мониторинг качества знаний обучающихся', kz: 'Білім алушылардың білім сапасының мониторингі' } },
        { file: 'self-assessment.pdf', updated: '03.11.2026', title: { ru: 'Отчёт о самооценке организации образования', kz: 'Білім беру ұйымының өзін-өзі бағалау есебі' } },
    ] },
];

const ext = (file) => file.split('.').pop();
const href = (doc) => `/docs/attestation/${doc.file}`;
</script>
