<template>
    <div class="full flex justify-center bg-white pt-20">
        <div class="w-full md:w-3/4 px-4 md:px-0 pt-8 flex flex-col gap-4">
            <h1 class="text-3xl font-bold"> <span> {{$t('mission.system.title-work')}}</span> {{$t('mission.system.title')}}</h1>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="w-full md:w-2/5 bg-[#F3F5F8] p-4 rounded-xl flex flex-col gap-4">
                    <h2 class="text-2xl font-bold">{{$t('mission.system.title-week')}}</h2>
                    <p>{{$t('mission.system.text-week')}}</p>
                    <p>{{$t('mission.system.text-week-time')}}</p>
                    <p>{{$t('mission.system.text-week-improve')}}</p>
                </div>
                <img class="w-full md:w-3/5" src="../assets/orda-5.png" alt="">
            </div>
            <div class="flex flex-col md:flex-row gap-4">
                <img class="w-full md:w-3/5" src="../assets/orda-6.png" alt="">
                <div class="w-full md:w-2/5 bg-[#F3F5F8] p-4 rounded-xl flex flex-col gap-4">
                    <h2 class="text-2xl font-bold">{{$t('mission.system.title-year')}}</h2>
                    <p>{{$t('mission.system.text-year')}}</p>
                    <p>{{$t('mission.system.text-year-time')}}</p>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="w-full md:w-2/5 bg-[#F3F5F8] p-4 rounded-xl flex flex-col gap-4">
                    <h2 class="text-2xl font-bold">{{$t('mission.system.title-total-year')}}</h2>
                    <p>{{$t('mission.system.text-total-year')}}</p>
                    <p>{{$t('mission.system.text-total-year-time')}}</p>
                </div>
                <img class="w-full md:w-3/5" src="../assets/orda-7.png" alt="">
            </div>
        </div>
    </div>
</template>