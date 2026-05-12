<template>
    <a class="min-w-[300px] max-w-[320px] bg-white rounded-xl border border-[#D9DEE4]" href="https://www.instagram.com/qadamschool_bzh/">
        <div class="bg-[#F1F1F1] w-full h-96 flex items-center justify-center rounded-t-xl">
            <slot></slot>
        </div>
        <div class="p-3">
            <p class="mb-6">Дәстүрге арналған ауызашарда оқушыларымыздың әкелерімен бас қостық! ...</p>
            <div class="flex items-center justify-between">
                <button class="transition active:scale-95 duration-100 ease-in-out cursor-pointer flex items-ceenter gap-2 border py-1 px-3 rounded-full">
                    <img src="../assets/insta.svg" alt="">
                    <p>qadamschool</p>
                </button>
                <p>{{newsDate}}</p>
            </div>
        </div>
    </a>
</template>
<script setup>
const props = defineProps({
  newsDate: {
    type: String,
    required: true,
  },
});
</script>