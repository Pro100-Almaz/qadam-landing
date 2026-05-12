<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { loadLocale } from "../main.js";

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const route = useRoute();
const { locale } = useI18n();
const availableLangs = [
    { code: "kz", label: "ҚАЗ" },
    { code: "ru", label: "РУС" }
];

const selectedLang = ref(route.path === '/rus' ? 'ru' : (localStorage.getItem("lang") || "kz"));

watch(() => route.path, (path) => {
    if (path === '/rus') {
        selectedLang.value = 'ru';
    }
});

watch(selectedLang, (newLang) => {
    localStorage.setItem("lang", newLang);
    loadLocale(newLang);
});
</script>

<template>
    <header
        class="fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-6 flex items-center header justify-between border-b border-white z-50 bg-transparent">
        <div class="relative md:hidden">
            <select v-model="selectedLang"
                class="bg-transparent border border-white text-white px-2 py-1 rounded-md focus:outline-none">
                <option v-for="lang in availableLangs" :key="lang.code" :value="lang.code" class="text-black">
                    {{ lang.label }}
                </option>
            </select>
        </div>
        <RouterLink to="/" class="md:hidden">
            <img src="../assets/logo_color_white_svg 1.svg" alt="School Logo"
                class="h-8 w-auto max-w-full object-contain">
        </RouterLink>

        <div class="hidden md:flex items-center gap-4 w-full justify-between">
            <button
                class="transition active:scale-95 duration-100 ease-in-out cursor-pointer flex items-center gap-2 border border-white text-white px-4 py-2 rounded-md">
                <a href="https://dashboard.qadam.edu.kz/">
                    {{ $t('header.parent-portal') }}
                </a>
                <img src="../assets/login.svg" alt="">
            </button>

            <RouterLink to="/">
                <img src="../assets/logo_color_white_svg 1.svg" alt="School Logo" class="h-10">
            </RouterLink>

            <div class="flex items-center gap-10 text-white">
                <p>+7 775 007 23 77</p>
                <div class="relative">
                    <select v-model="selectedLang"
                        class="bg-transparent border  border-white text-white px-2 py-1 rounded-md focus:outline-none">
                        <option v-for="lang in availableLangs" :key="lang.code" :value="lang.code" class="text-black">
                            {{ lang.label }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <button @click="toggleMenu"
            class="md:ml-10 ml-0 transition active:scale-95 duration-100 ease-in-out cursor-pointer">
            <img class="w-8" src="../assets/burger.svg" alt="Menu">
        </button>
    </header>

    <div class="z-99 fixed top-0 right-0 h-full w-full md:w-1/3 w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-xl"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">

        <div class="h-full flex flex-col justify-between">
            <!-- Top Section -->
            <div>
                <div class="p-6 flex justify-between items-center border-b">
                    <img src="../assets/logo-dark.svg" alt="Qadam Logo" class="h-10">
                    <button @click="toggleMenu"
                        class="transition active:scale-95 duration-100 ease-in-out cursor-pointer text-black text-2xl">✖</button>
                </div>

                <nav class="p-6">
                    <ul class="space-y-4 text-lg">
                        <li class="font-bold flex gap-2">
                            <img src="../assets/Polygon.svg" alt="">
                            <p active-class="text-orange-500">{{ $t('mission.info.about') }}</p>
                        </li>
                        <li class="pl-6">
                            <router-link to="/mission" class="hover:text-orange-500" active-class="text-orange-500">{{
                                $t('mission.hero.title') }}</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/team" class="hover:text-orange-500" active-class="text-orange-500">{{
                                $t('team.hero.title') }}</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/parents" class="hover:text-orange-500" active-class="text-orange-500">{{
                                $t('parents.hero.title') }}</router-link>
                        </li>
                        <li class="font-bold flex gap-2">
                            <img src="../assets/Polygon.svg" alt="">
                            <p active-class="text-orange-500">Программа</p>
                        </li>
                        <li class="pl-6">
                            <router-link to="/academic" class="hover:text-orange-500" active-class="text-orange-500">{{
                                $t('academic.hero.title') }}</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/extra" class="hover:text-orange-500" active-class="text-orange-500"> {{
                                $t('extra.hero.title') }}</router-link>
                        </li>
                        <li class="pl-6">
                            <router-link to="/orda" class="hover:text-orange-500" active-class="text-orange-500">{{
                                $t('orda.info.title') }}</router-link>
                        </li>
                        <li class="font-bold mt-4">
                            <router-link to="/price" class="hover:text-orange-500" active-class="text-orange-500">{{
                                $t('payment.hero.title') }}</router-link>
                        </li>
                        <li class="font-bold">
                            <router-link to="/enrollment" class="hover:text-orange-500"
                                active-class="text-orange-500">{{ $t('admissions.hero.title') }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- Bottom Section -->
            <div class="p-6 flex justify-between">
                <div>
                    <p class="font-bold mb-2">Телефон</p>
                    <div class="space-y-2">
                        <div class="flex gap-2">
                            <img src="../assets/phone-dark.svg" alt="">
                            <p>+7 775 007 23 77</p>
                        </div>
                        <div class="flex gap-2">
                            <img src="../assets/watsup-dark.svg" alt="">
                            <p>+7 700 335 76 76</p>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4 mt-4 items-end">
                    <img class="w-10 h-10" src="../assets/Frame 84.svg" alt="">
                    <img class="w-10 h-10" src="../assets/Frame 85.svg" alt="">
                    <img class="w-10 h-10" src="../assets/Frame 86.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
