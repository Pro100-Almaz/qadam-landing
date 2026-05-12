<template>
    <div class="w-full flex justify-center">
        <div class="w-full md:w-3/4 px-4 md:px-0">
            <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-14 mb-12">
                <h2 class="text-4xl w-full md:w-1/3 font-bold">
                    {{ $t('mission.info.about') }} Qadam School
                </h2>
                <div class="w-full md:w-2/3 flex flex-col gap-6">
                    <p class="text-xl font-bold text-[#E87C43]">{{ $t('mission.info.title') }}</p>
                    <p class="text-xl">{{ $t('mission.info.create') }}</p>
                </div>
            </div>
            <div class="w-full border-b border-[#D9DEE4] mb-4"></div>

            <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-14 my-12">
                <h2 class="text-4xl w-full md:w-1/3 font-bold">
                    {{ $t('mission.hero.title') }}
                </h2>
                <div class="w-full md:w-2/3 flex flex-col gap-6">
                    <p class="text-xl">{{ $t('mission.info.teach') }}</p>
                </div>
            </div>
            <div class="w-full border-b border-[#D9DEE4] mb-4"></div>

            <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-14 my-12">
                <h2 class="text-4xl w-full md:w-1/3 font-bold">
                    {{ $t('mission.info.vision') }}
                </h2>
                <div class="w-full md:w-2/3 flex flex-col gap-6">
                    <p class="text-xl">{{ $t('mission.info.become') }}</p>
                </div>
            </div>
        </div>

    </div>
</template>