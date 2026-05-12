<template>
    <div class="w-full flex justify-center">
        <div
            class="flex flex-col w-full md:w-3/4 px-4 md:px-0 md:flex-row justify-between items-start px-6 py-10 space-y-6 md:space-y-0">
            <div class="text-black font-bold text-3xl flex flex-col items-start">
                <p>{{$t('orda.info.title')}}</p>
                <p>{{$t('orda.info.title-system')}}</p>
            </div>

            <div class="max-w-xl space-y-4 text-sm text-black">
                <p class="text-xl text-orange-500 font-semibold uppercase">{{$t('orda.info.text')}}</p>
                <p> {{$t('orda.info.aim')}}  </p>
            </div>
        </div>
    </div>
</template>