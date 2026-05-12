<template>
    <div class="full flex justify-center">
        <div class="w-full md:w-3/4 px-4 md:px-0 pt-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-2">
                    <h1 class="text-4xl font-bold mb-8">{{ $t('orda.reason.title') }}</h1>
                    <p>{{ $t('orda.reason.text') }}</p>
                </div>
                <div class="border border-[#D9DEE4] flex flex-col gap-2 rounded-lg bg-white p-3">
                    <img class="mb-2 w-11 h-11" src="../assets/orda-3.svg" alt="">
                    <p>{{ $t('mission.aims.improve') }}</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">

                <div class="border border-[#D9DEE4] flex flex-col gap-2 rounded-lg bg-white p-3">
                    <img class="mb-2 w-11 h-11" src="../assets/orda-2.svg" alt="">
                    <p>{{ $t('mission.aims.format') }}</p>
                </div>
                <div class="border border-[#D9DEE4] flex flex-col gap-2 rounded-lg bg-white p-3">
                    <img class="mb-2 w-11 h-11" src="../assets/orda-1.svg" alt="">
                    <p>{{ $t('mission.aims.create') }}</p>
                </div>
                <div class="border border-[#D9DEE4] flex flex-col gap-2 rounded-lg bg-white p-3">
                    <img class="mb-2 w-11 h-11" src="../assets/orda-4.svg" alt="">
                    <p>{{ $t('mission.aims.friend') }}</p>
                </div>
            </div>


        </div>
    </div>
</template>