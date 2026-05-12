<template>
    <div class="w-full flex justify-center">
        <div class="bg-white md:p-8 p-1 w-full md:w-3/4 px-4 md:px-0">
            <div>
                <h1 class="text-3xl font-bold">{{ $t('enrollment.hero.title') }} Qadam School?</h1>
                <p>{{ $t('enrollment.info.text') }}</p>
            </div>
            <div class="flex flex-col gap-10 mt-8">
                <!-- Step Component -->
                <div class="w-full flex items-start gap-6">
                    <div class="hidden md:block text-[#E87C43] text-8xl font-bold w-20 text-center">1</div>
                    <div class="bg-[#F3F5F8] flex flex-col gap-4 p-6 rounded-md flex-1">
                        <div class="flex items-start gap-2">
                            <h3 class="block md:hidden text-2xl md:text-3xl font-bold text-[#E87C43]">1.</h3>
                            <h3 class="text-2xl md:text-3xl font-bold">{{ $t('enrollment.info.request-title') }}</h3>
                        </div>

                        <div class="border-b border-[#D9DEE4] w-full" />
                        <p>
                            {{ $t('enrollment.info.request-text') }}
                        </p>
                        <button @click="handleShowModal"
                            class="transition active:scale-95 duration-100 ease-in-out cursor-pointer w-full md:w-auto bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded self-start">
                            {{ $t('enrollment.info.request-btn') }}
                        </button>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="w-full flex items-start gap-6">
                    <div class="hidden md:block text-[#E87C43] text-8xl font-bold w-20 text-center">2</div>
                    <div class="bg-[#F3F5F8] flex flex-col gap-4 p-6 rounded-md flex-1">
                        <div class="flex items-start gap-2">
                            <h3 class="block md:hidden text-2xl md:text-3xl font-bold text-[#E87C43]">2.</h3>
                            <h3 class="text-2xl md:text-3xl font-bold">{{ $t('enrollment.info.record-title') }}</h3>
                        </div>
                        <div class="border-b border-[#D9DEE4] w-full" />
                        <p>
                            {{ $t('enrollment.info.record-text') }}
                        </p>
                        <ul class="flex flex-col gap-2 pl-2">
                            <li class="flex items-start gap-2">
                                <img class="w-4 h-4 mt-1" src="../assets/enrollment-1.svg" alt="arrow" />
                                <span>{{ $t('enrollment.info.record-child') }}</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img class="w-4 h-4 mt-1" src="../assets/enrollment-1.svg" alt="arrow" />
                                <span>
                                    {{ $t('enrollment.info.record-child-2') }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="w-full flex items-start gap-6">
                    <div class="hidden md:block text-[#E87C43] text-8xl font-bold w-20 text-center">3</div>
                    <div class="bg-[#F3F5F8] flex flex-col gap-4 p-6 rounded-md flex-1">
                        <div class="flex items-start gap-2">
                            <h3 class="block md:hidden text-2xl md:text-3xl font-bold text-[#E87C43]">3.</h3>
                            <h3 class="text-2xl md:text-3xl font-bold">{{ $t('enrollment.info.documents-title') }}</h3>
                        </div>
                        <div class="border-b border-[#D9DEE4] w-full" />
                        <p>
                            {{ $t('enrollment.info.documents-text') }}
                        </p>
                        <h3 class="uppercase font-bold text-[#E9834E]">
                            {{ $t('enrollment.info.documents-footer') }}

                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits();

const handleShowModal = () => {
    emit('showModal');
};
</script>