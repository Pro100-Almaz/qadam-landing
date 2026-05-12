<template>
    <div class="relative w-full h-[70vh] flex justify-center">
        <div :style="`background-image: url(${extraImage});`"
            class="absolute inset-0 w-full h-full bg-center bg-no-repeat brightness-50 z-0"></div>

        <div class="relative z-10 w-3/4">
            <schoolHeader />
            <div class="flex">
                <div class="w-full flex flex-col justify-end text-white gap-20 md:gap-30 mt-30 py-6">
                    <div>
                        <p class="hidden md:flex">← {{ $t('globalWords.main') }}</p>
                        <p class="md:hidden flex">← {{ $t('globalWords.main-adaptive') }}</p>
                    </div>
                    <div class="flex justify-between">
                        <div class="w-full md:w-1/2 flex flex-col gap-4">
                            <h1 class="text-4xl md:text-7xl font-bold">
                                {{ $t('extra.hero.title') }}
                            </h1>
                            <div class="w-full border-b border-white"></div>
                            <div class="flex justify-between items-center">
                                <p>{{$t('payment.hero.title')}}</p><img src="../assets/arrow-right.svg"
                                    alt="arrow-right">
                            </div>
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
    </div>
</template>

<script setup>
import schoolHeader from '../components/schoolHeader.vue';
import extraImage from '../assets/extra-1.png';
</script>