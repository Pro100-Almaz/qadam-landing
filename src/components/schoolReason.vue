<template>
    <div class="w-full flex flex-col items-center py-10 bg-white">
        <div class="w-3/4">
            <!-- Header Section -->
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-4xl font-bold">{{ $t('reason.title') }} Qadam School?</h1>
                <button @click="handleShowModal"
                    class="cursor-pointer hidden md:block bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded cursor-pointer">
                    {{ $t('main-btn') }}
                </button>
            </div>

            <!-- Academic Program Section -->
            <div class="rounded-xl p-px bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
                <div class="flex flex-col sm:flex-row">
                    <div
                        class="w-full sm:w-1/2 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none bg-gradient-to-r from-[#eaac3f] to-[#eee03c] px-6 pt-8">
                        <span class="bg-white px-3 py-1 rounded-full text-sm font-semibold">{{ $t('reason.method')
                            }}</span>
                        <h3 class="text-2xl font-bold mt-4">
                            {{ $t('reason.interesting') }}
                        </h3>
                        <button class="transition active:scale-95 duration-100 ease-in-out cursor-pointer active:scale-95 duration-100 ease-in-out cursor-pointer hidden md:block mt-4 border border-black px-4 py-2 rounded-md font-semibold">
                            {{ $t('reason.program') }}
                        </button>
                        <div class="flex justify-end">
                            <img src="../assets/Clip path group.svg" alt="">
                        </div>
                    </div>

                    <ul
                        class="w-full sm:w-1/2 flex flex-col gap-2 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none bg-white p-6">
                        <li>✦ {{ $t('reason.author') }}</li>
                        <li>✦ {{ $t('reason.EAL') }}</li>
                        <li>✦ {{ $t('reason.hours') }}</li>
                        <li>✦ {{ $t('reason.study') }}</li>
                        <li>✦ {{ $t('reason.individual') }}</li>
                        <li>✦ Mindfulness</li>
                        <li>✦ {{ $t('reason.gaming') }}</li>
                        <li>✦ {{ $t('reason.experiment') }}</li>
                        <li>✦ {{ $t('reason.culture') }}</li>
                    </ul>
                </div>
            </div>


            <!-- Details Section -->
            <div class="bg-white flex flex-col sm:flex-row border border-gray-300 rounded-xl py-7">
                <!-- Academic Features -->
                <div class="w-full sm:w-1/2 rounded-l-xl p-6  pt-8">
                    <span class="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">{{ $t('reason.extra')
                        }}</span>
                    <h3 class="text-2xl font-bold mt-4">
                        <span class="text-orange-500">{{ $t('reason.types') }}</span> {{ $t('reason.choose') }}
                    </h3>
                    <button class="transition active:scale-95 duration-100 ease-in-out cursor-pointer hidden md:blockmt-4 border border-black px-4 py-2 rounded-md font-semibold">
                        {{ $t('reason.more') }}
                    </button>
                </div>

                <div class="border-l border-[#D9DEE4] h-auto" />


                <!-- Extracurricular Features -->
                <ul class="w-full sm:w-1/2 rounded-r-xl p-6 flex flex-col gap-2">
                    <li>✦ {{ $t('reason.study-hours') }}</li>
                    <li>✦ {{ $t('reason.eating') }}</li>
                    <li>✦ {{ $t('reason.sport') }}</li>
                    <li>✦ {{ $t('reason.art') }}</li>
                    <li>✦ {{ $t('reason.music') }}</li>
                    <li>✦ {{ $t('reason.dance') }}</li>
                    <li>✦ {{ $t('reason.tech') }}</li>
                    <li>✦ {{ $t('reason.history') }}</li>
                </ul>
            </div>
            <button @click="handleShowModal"
                class="transition active:scale-95 duration-100 ease-in-out cursor-pointer my-4 w-full flex justify-center md:hidden bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded">
                {{ $t('main-btn') }}
            </button>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits();

const handleShowModal = () => {
    console.log('showModal')
    emit('showModal');
};
</script>
