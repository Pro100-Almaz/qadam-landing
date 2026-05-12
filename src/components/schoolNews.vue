<template>
    <div class="w-full flex flex-col">
        <!-- Header Section -->
        <div class="w-full flex justify-center">
            <div class="w-3/4">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-4xl font-bold">{{ $t('news.title') }}</h1>
                    <button class="transition active:scale-95 duration-100 ease-in-out cursor-pointer hidden md:block border border-black px-4 py-2 rounded-md">
                        {{ $t('news.all') }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Carousel Section -->
        <div class="w-full flex justify-center">
            <div class="w-3/4 relative">
                <!-- Left Arrow -->
                <div class="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 p-2">
                    <button @click="scrollLeft"
                        class="transition active:scale-95 duration-100 ease-in-out cursor-pointer z-10 bg-white p-2 px-3 shadow-md rounded-full text-xl">
                        ‹
                    </button>
                </div>

                <!-- Scrollable container -->
                <div ref="carousel" class="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar">
                    <newsCard :news-date="formatDate(0)">
                        <img class="w-full h-full rounded-t-xl object-cover" src="../assets/carousel_1.png" alt="">
                    </newsCard>
                    <newsCard :news-date="formatDate(3)">
                        <img class="w-full h-full object-cover rounded-t-xl" src="../assets/carousel_2.png" alt="">
                    </newsCard>
                    <newsCard :news-date="formatDate(5)">
                        <img class="w-full h-full object-cover rounded-t-xl" src="../assets/carousel_3.png" alt="">
                    </newsCard>
                    <newsCard :news-date="formatDate(5)">
                        <img class="w-full h-full object-cover rounded-t-xl" src="../assets/carousel_4.png" alt="">
                    </newsCard>
                    <newsCard :news-date="formatDate(7)">
                        <img class="w-full h-full object-cover rounded-t-xl" src="../assets/carousel_3.png" alt="">
                    </newsCard>
                    <newsCard :news-date="formatDate(7)">
                        <img class="w-full h-full object-cover rounded-t-xl" src="../assets/carousel_4.png" alt="">
                    </newsCard>
                </div>

                <!-- Right Arrow -->
                <div class="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 p-2">
                    <button @click="scrollRight"
                        class="transition active:scale-95 duration-100 ease-in-out cursor-pointer z-10 bg-white p-2 px-3 shadow-md rounded-full text-xl">
                        ›
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import newsCard from './newsCard.vue'

const carousel = ref(null)

const scrollLeft = () => {
    carousel.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
    carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
}

const formatDate = (daysAgo) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toLocaleDateString('ru-RU')
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
