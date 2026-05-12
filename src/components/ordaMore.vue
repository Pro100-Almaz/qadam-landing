<template>
    <div class="full flex justify-center bg-white pt-20">
        <div class="w-full md:w-3/4 px-4 md:px-0 pt-8 flex flex-col gap-4 py-10">
            <h1 class="text-3xl font-bold">{{$t('mission.game.title')}}</h1>
            <div class="flex gap-10">
                <div class="w-1/2 flex flex-col gap-4">
                    <p>{{$t('mission.game.gaming')}}</p>
                    <p class="uppercase font-bold text-[#E87C43]">{{$t('mission.game.help')}}</p>
                </div>
                <div class="w-1/2 flex flex-col gap-4">
                    <p>{{$t('mission.game.form')}}</p>
                    <p>{{$t('mission.game.social')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>