<template>
    <div class="w-full flex justify-center">
        <div class="w-3/4 flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-12">
            <!-- Text Section -->
            <div class="flex-1 max-w-xl">
                <h2 class="text-2xl font-bold">
                    {{$t('orda.group.title')}}
                </h2>
                <p class="mt-4 text-gray-700">
                    {{$t('orda.group.symbol')}}
                </p>
                <p class="mt-4 text-gray-700">
                    {{$t('orda.group.family')}}
                </p>
                <p class="mt-4 text-gray-700">
                    {{$t('orda.group.save')}}

                </p>
            </div>

            <!-- 2x2 Grid Section -->
            <div class="flex-1 grid grid-cols-2 gap-4">
                <img src="../assets/orda-4.png" alt="">
                <img src="../assets/orda-3.png" alt="">
                <img src="../assets/orda-2.png" alt="">
                <img src="../assets/orda-1.png" alt="">
            </div>
        </div>
    </div>
</template>