<template>
    <teleport to="body">
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm"
            @click.self="closeModal">
            <div class="bg-white rounded-2xl shadow-xl w-full mx-4 md:mx-0 max-w-md" @keydown.esc="closeModal" tabindex="0">
                <!-- Header -->
                <div class="bg-gradient-to-r from-orange-500 to-yellow-300 p-6 rounded-t-2xl">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-2xl font-extrabold text-black leading-snug">{{ $t('modal.send-request') }}</h2>
                            <p class="text-black text-lg font-bold">{{ $t('modal.contact-you') }}</p>
                        </div>
                        <button @click="closeModal" class="transition active:scale-95 duration-100 ease-in-out cursor-pointer text-black text-2xl font-bold">&times;</button>
                    </div>
                </div>

                <!-- Body -->
                <div class="p-6 space-y-4">
                    <!-- Имя -->
                    <div>
                        <label class="block mb-1 font-semibold">{{ $t('question.name') }}</label>
                        <input v-model="name" type="text" placeholder="ФИО"
                            class="w-full border rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring focus:border-blue-400" />
                    </div>

                    <!-- Телефон -->
                    <div>
                        <label class="block mb-1 font-semibold">Телефон</label>
                        <div class="relative">
                            <input v-model="phone" type="tel" placeholder="+7 (___) ___-__-__"
                                class="w-full border rounded-lg px-4 py-2 pr-12 text-gray-800 focus:outline-none focus:ring focus:border-blue-400" />
                            <div class="absolute inset-y-0 right-3 flex items-center">
                                <img src="https://flagcdn.com/w40/kz.png" alt="Kazakhstan" class="w-6 h-4" />
                            </div>
                        </div>
                    </div>

                    <!-- Класс -->
                    <div>
                        <label class="block mb-2 font-semibold">{{ $t('modal.student-grade') }}</label>
                        <div class="grid grid-cols-7 gap-2 text-center">
                            <div v-for="n in 7" :key="n" class="flex flex-col items-center gap-1">
                                <label class="w-6 h-6 relative">
                                    <input type="checkbox"
                                        class="peer appearance-none w-full h-full bg-white border border-gray-300 rounded cursor-pointer checked:bg-green-600 checked:border-green-600"
                                        v-model="selected" :value="n" />
                                    <svg class="absolute inset-0 w-full h-full text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                                        viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M20.292 5.708a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586l10.292-10.292a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </label>
                                <span class="text-sm font-medium">{{ n }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Submit -->
                    <div>
                        <button @click="sendToWhatsApp"
                            class="transition active:scale-95 duration-100 ease-in-out cursor-pointer w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900">
                            {{ $t('question.send-request') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits();

const name = ref('');
const phone = ref('');
const selected = ref([]);

const closeModal = () => {
    emit('close');
};
function sendToWhatsApp() {
    const targetNumber = '77003357676';
    const grades = selected.value.length > 0 ? selected.value.join(', ') : 'Не выбран';

    const message = `Имя: ${name.value}\nТелефон: ${phone.value}\nКлассы: ${grades}\nИнтересует Qadam School.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${targetNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

</script>