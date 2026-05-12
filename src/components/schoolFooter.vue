<template>
    <div class="w-full flex justify-center bg-[#383838]">
        <div class="w-3/4 mt-20">
            <div class="flex flex-col md:flex-row justify-between mb-10">
                <div class="flex items-start my-2 md:my-0">
                    <img src="../assets/logo_color_white_svg 1.svg" alt="logo">
                </div>
                <div class="text-white flex flex-col justify-between">
                    <div>
                        <h6 class="font-bold mb-3">{{ $t('footer.address') }}</h6>
                        <!-- <p>{{ $t('footer.address1') }}</p> -->
                        <p>{{ $t('footer.address2') }} 19\1</p>
                    </div>
                    <div>
                        <h6 class="font-bold mb-3">{{ $t('footer.contacts') }}</h6>
                        <div>
                            <div class="flex gap-2 mb-1">
                                <img src="../assets/Group.svg" alt="">
                                <p>+7 775 007 23 77</p>
                            </div>
                            <div class="flex gap-2">
                                <img src="../assets/watsup.svg" alt="">
                                <p>+7 700 335 76 76</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 class="font-bold mb-3">{{ $t('footer.social') }}</h6>
                        <div class="flex gap-2">
                            <a href="https://www.instagram.com/qadamschool">
                                <img src="../assets/Frame 84.svg" alt="instagram">
                            </a>
                            <a href="https://wa.me/77003357676">
                                <img src="../assets/Frame 85.svg" alt="watsup">
                            </a>

                            <a href="https://www.youtube.com/">
                                <img src="../assets/Frame 86.svg" alt="youtube">
                            </a>
                        </div>
                    </div>
                </div>
                <img class="md:w-1/2 w-full object-cover my-2" src="../assets/map.png" alt="">
            </div>

            <div class="border-b border-[#D9DEE4] h-auto" />

            <div class="text-white mt-12 flex flex-col flex-col-reverse md:flex-row  justify-between mb-14">
                <div class="flex items-end">
                    <p class="text-[#B4B4B4]">© Qadam School, 2025</p>
                </div>
                <div class="flex flex-col gap-3">
                    <p>{{ $t('footer.mission') }}</p>
                    <p>{{ $t('footer.command') }}</p>
                    <p>{{ $t('footer.parents') }}</p>
                </div>
                <div class="flex flex-col gap-3">
                    <p>{{ $t('footer.program') }}</p>
                    <p>{{ $t('footer.extra') }}</p>
                    <p>{{ $t('footer.system') }}</p>
                </div>
                <div class="flex flex-col gap-3">
                    <p>{{ $t('footer.payment') }}</p>
                    <p>{{ $t('footer.enrollment') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>