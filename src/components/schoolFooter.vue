<template>
    <div class="w-full flex justify-center bg-[#383838]">
        <div class="w-full px-6 md:px-0 md:w-3/4 mt-16 md:mt-20">
            <div class="flex flex-col md:flex-row justify-between gap-8 mb-10">
                <div class="flex items-start my-2 md:my-0">
                    <img src="../assets/logo_color_white_svg 1.svg" alt="logo">
                </div>
                <div class="text-white flex flex-col justify-between gap-6">
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
                                <a href="tel:+77750072377" class="hover:text-orange-400">+7 775 007 23 77</a>
                            </div>
                            <div class="flex gap-2">
                                <img src="../assets/watsup.svg" alt="">
                                <a href="https://wa.me/77003357676" target="_blank" rel="noopener" class="hover:text-orange-400">+7 700 335 76 76</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 class="font-bold mb-3">{{ $t('footer.social') }}</h6>
                        <div class="flex gap-2">
                            <a href="https://www.instagram.com/qadamschool" target="_blank" rel="noopener" aria-label="Instagram">
                                <img src="../assets/Frame 84.svg" alt="instagram">
                            </a>
                            <a href="https://wa.me/77003357676" target="_blank" rel="noopener" aria-label="WhatsApp">
                                <img src="../assets/Frame 85.svg" alt="watsup">
                            </a>

                            <a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">
                                <img src="../assets/Frame 86.svg" alt="youtube">
                            </a>
                        </div>
                    </div>
                </div>
                <img class="md:w-1/2 w-full object-cover rounded-lg" src="../assets/map.png" alt="Map">
            </div>

            <div class="border-b border-[#D9DEE4] h-auto" />

            <div class="text-white mt-12 flex flex-col-reverse md:flex-row justify-between gap-8 mb-14">
                <div class="flex items-end">
                    <p class="text-[#B4B4B4]">© Qadam School, 2025</p>
                </div>
                <div class="flex flex-col gap-3">
                    <RouterLink to="/mission" class="hover:text-orange-400">{{ $t('footer.mission') }}</RouterLink>
                    <RouterLink to="/team" class="hover:text-orange-400">{{ $t('footer.command') }}</RouterLink>
                    <RouterLink to="/parents" class="hover:text-orange-400">{{ $t('footer.parents') }}</RouterLink>
                </div>
                <div class="flex flex-col gap-3">
                    <RouterLink to="/academic" class="hover:text-orange-400">{{ $t('footer.program') }}</RouterLink>
                    <RouterLink to="/extra" class="hover:text-orange-400">{{ $t('footer.extra') }}</RouterLink>
                    <RouterLink to="/orda" class="hover:text-orange-400">{{ $t('footer.system') }}</RouterLink>
                </div>
                <div class="flex flex-col gap-3">
                    <RouterLink to="/price" class="hover:text-orange-400">{{ $t('footer.payment') }}</RouterLink>
                    <RouterLink to="/enrollment" class="hover:text-orange-400">{{ $t('footer.enrollment') }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>