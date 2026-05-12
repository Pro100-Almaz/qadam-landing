<template>
    <div
        class="relative w-full h-[50vh] md:h-[70vh] flex justify-center  w-3/4 bg-gradient-to-r from-[#eaac3f] to-[#eee03c]">
        <schoolHeader />
        <div class="w-4/5 flex">
            <div class="w-full flex flex-col justify-end text-white gap-14 md:gap-24 mt-26 py-4 z-9">
                <div>
                    <p @click="router.go(-1)" class="hidden md:flex cursor-pointer">← {{ $t('globalWords.main') }}</p>
                    <p @click="router.go(-1)" class="md:hidden flex cursor-pointer">← {{ $t('globalWords.main-adaptive')
                        }}</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-3xl md:text-7xl font-bold">{{ $t('team.hero.title') }}</h1>
                        <div class="w-full border-b border-white"></div>
                        <router-link to="/team">
                            <div class="flex justify-between items-center">
                                <p>{{ $t('team.hero.title') }}</p><img src="../assets/arrow-right.svg"
                                    alt="arrow-right">
                            </div>
                        </router-link>
                        <div class="w-full border-b border-white"></div>
                        <router-link to="/parents">
                            <div class="flex justify-between items-center">
                                <p>{{ $t('parents.hero.title') }}</p>
                                <img src="../assets/arrow-right.svg" alt="arrow-right">
                            </div>
                        </router-link>
                        <div class="w-full border-b border-white"></div>
                    </div>
                    <div class="hidden md:flex flex gap-2 items-center">
                        <a href="https://www.instagram.com/qadamschool?igsh=cHFneHYzYWc2cXZ5">
                            <img class="w-15 h-15" src="../assets/insta_white.svg" alt="">
                        </a>
                        <a href="https://wa.me/+77003357676">
                            <img class="w-15 h-15" src="../assets/whatsup_white.svg" alt="">
                        </a>
                        <img class="w-15 h-15" src="../assets/youtube_white.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="flex absolute w-full md:w-1/4 right-0 bottom-0 flex-col justify-between z-1">
                <img src="../assets/up.svg" alt="Question Up" />
                <img src="../assets/down.svg" alt="Question Down" />
            </div>
        </div>
    </div>
</template>
<script setup>
import schoolHeader from './schoolHeader.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>