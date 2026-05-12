<template>
    <div class="w-full flex justify-center">
        <div class="bg-white p-0 px-4 md:px-0 md:p-8 w-full md:w-3/4 h-full">
            <div class="flex flex-col md:flex-row justify-between gap-20 mb-10">
                <h1 class="w-4/5 text-3xl font-bold">
                    {{ $t('payment.info.title') }}
                    Qadam School
                </h1>
                <p>
                    {{ $t('payment.info.text') }}
                </p>
            </div>
            <div class="w-full flex flex-col md:flex-row gap-8 h-full">
                <div class="w-full md:w-5/7">
                    <h3 class="my-4 text-3xl font-bold">{{ $t('payment.info.details-title') }}:</h3>
                    <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                    <div class="flex flex flex-col md:flex-row gap-2 mt-8">
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.unique-title') }}</h4>
                                <p>{{ $t('payment.info.unique-text') }}</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.resources-title') }}</h4>
                                <p>{{ $t('payment.info.resources-text') }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-2 mt-8">
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.foods-title') }}</h4>
                                <p>{{ $t('payment.info.foods-text') }}</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.thing-title') }}</h4>
                                <p>{{ $t('payment.info.thing-text') }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-2 mt-8">
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.eng-title') }}</h4>
                                <p>{{ $t('payment.info.eng-text') }}</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.time-title') }}</h4>
                                <p>{{ $t('payment.info.time-text') }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-2 mt-8">
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">
                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.extra-title') }}</h4>
                                <p>{{ $t('payment.info.extra-text') }}</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{ $t('payment.info.report-title') }}</h4>
                                <p>{{ $t('payment.info.report-text') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-2/7 bg-[#F3F5F8] p-4">
                    <div class="flex h-full flex-col justify-between">
                        <div>
                            <h1 class="text-3xl font-bold mb-4">{{ $t('footer.payment') }}</h1>
                            <hr>
                            <div class="mt-4">
                                <p>{{ $t('payment.info.study') }}:</p>
                                <h1 class="text-4xl text-[#E87C43] font-bold">3 015 000 ₸</h1>
                            </div>
                            <div class="mt-4">
                                <p>{{ $t('payment.info.food') }}:</p>
                                <h1 class="text-4xl text-[#E87C43] font-bold">585 000 ₸</h1>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 items-center">
                            <p>{{ $t('payment.info.full') }}</p>
                            <button @click="handleShowModal"
                                class="transition active:scale-95 duration-100 ease-in-out cursor-pointer bg-gradient-to-r w-full from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded">
                                {{ $t('main-btn') }}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="w-5/7 mt-10">
                <h3 class="my-4 text-3xl font-bold">{{ $t('payment.info.details-not-title') }}:</h3>
                <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                <div class="flex-col md:flex gap-2 mt-8">
                    <div class="w-1/2 flex items-start">
                        <img class="p-1 pr-2" src="../assets/price-3.svg" alt="">

                        <div class="display flex flex-col gap-2">
                            <h4 class="text-xl font-bold">{{ $t('payment.info.drive-title') }}</h4>
                            <p>{{ $t('payment.info.drive-text') }}</p>
                        </div>
                    </div>
                    <div class="w-1/2 flex items-start">
                        <img class="p-1 pr-2" src="../assets/price-3.svg" alt="">
                        <div class="display flex flex-col gap-2">
                            <h4 class="text-xl font-bold">{{ $t('payment.info.uniform-title') }}</h4>
                        </div>
                    </div>
                </div>
            </div>

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
