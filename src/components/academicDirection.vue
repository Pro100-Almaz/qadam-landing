<template>
    <div class="w-full flex justify-center">
        <div class="w-full md:w-3/4 py-10 px-4 md:px-0">
            <div class="flex justify-between items-center mb-10">
                <h2 class="text-3xl font-bold">
                    <span class="text-orange-500">{{$t('academic.directions.keys')}}</span> {{$t('academic.directions.title')}}
                </h2>
                <button @click="handleShowModal"
                    class="transition active:scale-95 duration-100 ease-in-out cursor-pointer hidden md:flex bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
                    {{ $t('main-btn') }}
                </button>
            </div>

            <div class="flex flex-col md:flex-row gap-6">
                <div class="bg-white rounded-xl shadow p-6 flex-1">
                    <h3 class="font-bold text-3xl mb-4">{{$t('academic.directions.math-title')}}</h3>
                    <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                    <p class="mb-2">{{$t('academic.directions.math-text')}}:</p>
                    <ul class="font-bold mb-4 space-y-1">
                        <li>{{$t('academic.directions.math')}}</li>
                        <li>{{$t('academic.directions.science')}}</li>
                        <li>{{$t('academic.directions.modelling')}}</li>
                    </ul>
                    <p class="text-sm mb-2">
                        {{$t('academic.directions.math-body')}}
                    </p>
                    <p class="text-sm">
                        {{$t('academic.directions.math-footer')}}
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow p-6 flex-1">
                    <h3 class="font-bold text-3xl mb-4">{{$t('academic.directions.languages-title')}}</h3>
                    <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                    <p class="mb-2">{{$t('academic.directions.languages-text')}}:</p>
                    <ul class="font-bold mb-4 space-y-1">
                        <li>{{$t('academic.directions.kaz')}}</li>
                        <li>{{$t('academic.directions.rus')}}</li>
                        <li>{{$t('academic.directions.eng')}}</li>
                    </ul>
                    <p class="text-sm">
                        {{$t('academic.directions.languages-body')}}
                    </p>
                </div>

                <!-- Проектное обучение -->
                <div class="bg-white rounded-xl shadow p-6 flex-1">
                    <h3 class="font-bold text-3xl mb-4">{{$t('academic.directions.project-title')}}</h3>
                    <div class="w-full border-b border-[#D9DEE4] mb-4"></div>
                    <p class="text-sm mb-2">
                        {{$t('academic.directions.project-text')}}
                    </p>
                    <p class="text-sm">
                        {{$t('academic.directions.project-body')}}
                    </p>
                </div>
                <button @click="handleShowModal"
                    class="transition active:scale-95 duration-100 ease-in-out cursor-pointer flex justify-center md:hidden bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
                    {{ $t('main-btn') }}
                </button>
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

<style scoped></style>