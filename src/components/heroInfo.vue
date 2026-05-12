<template>
    <div class="w-full flex justify-center absolute bottom-30 left-0 px-8 py-6">
        <div class="w-3/4 flex flex-col items-start justify-between text-white">
            <h1 class="text-6xl font-bold mb-4">Qadam School</h1>
            <p class="mb-4">Qadam School – {{ $t('header.body') }}</p>
            <button class="transition active:scale-95 duration-100 ease-in-out cursor-pointer bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded"  @click="handleShowModal">
                {{ $t('main-btn') }}
            </button>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits();

const handleShowModal = () => {
    emit('showModal');
};
</script>