<template>
    <div class="w-full flex justify-center bg-white pt-10">
        <div class="w-full p-4 md:p-0 md:w-3/4 ">
            <h3 class="text-4xl font-bold mb-8">{{ $t('team.info.founder') }}</h3>
            <div class="w-full md:w-1/2 bg-[#F3F5F8] flex flex-col gap-4 mb-10 p-4 rounded-xl">
                <div class="flex flex-col md:flex-row justify-evenly gap-4">
                    <img class="w-1/2 rounded-xl" src="../assets/team-main.png" alt="">
                    <div class="flex flex-col justify-center">
                        <h4 class="uppercase text-[#E87C43] font-semibold text-xl">{{ $t('team.info.founder') }}</h4>
                        <h3 class="text-2xl font-bold">Сейсенбай Шакарим</h3>
                        <p>{{ $t('team.info.founder-title') }}</p>
                    </div>
                </div>
                <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                <div class="flex flex-col">
                    <p>{{ $t('team.info.experience') }}:</p>
                    <ul class="list-disc p-4">
                        <li>{{ $t('team.info.founder-job-1') }}</li>
                        <li>{{ $t('team.info.founder-job-2') }}</li>
                        <li>{{ $t('team.info.founder-job-3') }}</li>
                        <li>{{ $t('team.info.founder-job-4') }}</li>
                    </ul>
                </div>
            </div>
            <h1 class="text-4xl font-bold my-8">{{ $t('team.info.filial-2') }}</h1>

            <div class="flex flex-col md:flex-row justify-between gap-8">
                <jobCard class="w-full md:w-1/2" :position="t('team.info.director')" :name="'Борлыкбаева Райхан'"
                    :job="t('team.info.director-title')" :description1="t('team.info.director-job-1')" :description2="t('team.info.director-job-2')" :description3="t('team.info.director-job-3')"  :description4="t('team.info.director-job-4')">
                    <img class="w-full rounded-xl" src="../assets/team-5.png" alt="">
                </jobCard>
                <jobCard class="w-full md:w-1/2" :position="t('team.info.co-study-director')"
                    :name="'Каримова Динара Тахировна'" :job="t('team.info.co-study-director-title')"
                    :description1="t('team.info.co-study-director-job-1')" :description2="t('team.info.co-study-director-job-2')" :description3="t('team.info.co-study-director-job-3')" :description4="t('team.info.co-study-director-job-4')" :description5="t('team.info.co-study-director-job-5')">
                    <img class="w-full rounded-xl" src="../assets/team-4.png" alt="">
                </jobCard>
            </div>
            <h1 class="text-4xl font-bold my-8">{{ $t('team.info.filial-1') }}</h1>
            <div class="flex flex-col md:flex-row justify-between gap-8 mb-10">
                <jobCard class="w-full md:w-1/2" :position="t('team.info.director')" :name="'Абитаева Малика'"
                    :job="$t('team.info.founder-title')" :description1="t('team.info.director-jobs-1')" :description2="t('team.info.director-jobs-2')" :description3="t('team.info.director-jobs-3')" :description4="t('team.info.director-jobs-4')">
                    <img class="w-full rounded-xl" src="../assets/team-2.png" alt="">
                </jobCard>
                <jobCard class="w-full md:w-1/2" :position="t('team.info.co-director')" :name="'Тенел Колбайкызы'"
                    :job="t('team.info.co-director-title')" :description1="t('team.info.co-director-job')" :description2="t('team.info.co-director-job-1')" :description3="t('team.info.co-director-job-2')">
                    <img class="w-full rounded-xl" src="../assets/team-3.png" alt="">
                </jobCard>
            </div>
        </div>
    </div>
</template>
<script setup>
import jobCard from './jobCard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>