<template>
    <div :style="`background-image: url(${parentsImage});`"
        class="w-full h-[70vh] flex justify-center w-3/4 bg-cover bg-no-repeat">
        <schoolHeader />
        <div class="w-4/5 flex">
            <div class="w-full flex flex-col justify-end text-white gap-14 md:gap-30 mt-26 py-6">
                <div>
                    <p @click="router.go(-1)" class="hidden md:flex cursor-pointer">← {{ $t('globalWords.main') }}</p>
                    <p @click="router.go(-1)" class="md:hidden flex cursor-pointer">← {{ $t('globalWords.main-adaptive')
                        }}</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex flex-col gap-4">

                        <h1 class="text-6xl md:text-7xl font-bold">{{ $t('parents.hero.title') }}</h1>
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
                    <div class="hidden md:flex gap-2 items-center">
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
        </div>
    </div>
</template>
<script setup>
import schoolHeader from './schoolHeader.vue';
import parentsImage from '../assets/parents-1.png';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>