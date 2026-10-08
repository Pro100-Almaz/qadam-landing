<template>
    <div class="w-full flex justify-center bg-white py-10 px-6 md:px-0">
        <div class="flex justify-between w-full md:w-3/4 bg-gradient-to-r from-[#eaac3f] to-[#eee03c] px-6 md:px-8 py-8 rounded-lg">
            <!-- Left Side - Text Content -->
            <div class="sm:w-3/5 w-full flex flex-col justify-center">
                <h1 class="text-black text-2xl font-bold">
                    {{ $t('question.title') }} Qadam school?
                </h1>
                <p class="text-black/80 mt-2">{{ $t('question.request') }}</p>

                <!-- Form -->
                <form class="mt-6 gap-4" @submit.prevent="sendToWhatsApp">
                    <div class="flex flex-col md:flex-row gap-2 mb-3">
                        <div class="flex flex-col w-full">
                            <label for="q-name" class="text-black font-semibold">{{ $t('question.name') }}</label>
                            <input id="q-name" v-model="name" type="text" autocomplete="name" required class="input-field" />
                        </div>
                        <div class="w-full">
                            <label for="q-phone" class="text-black block font-semibold">Телефон</label>
                            <div class="relative">
                                <input id="q-phone" v-model="phone" type="tel" autocomplete="tel" required minlength="10" placeholder="+7 (___) ___-__-__"
                                    class="input-field pr-12" />
                                <div class="absolute inset-y-0 right-3 flex items-center">
                                    <img src="https://flagcdn.com/w40/kz.png" alt="Kazakhstan" class="w-6 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="transition active:scale-95 duration-100 ease-in-out submit-button">{{ $t('question.send-request') }}</button>
                </form>
            </div>

            <!-- Right Side - Decorative Images -->
            <div class="hidden md:flex w-1/5 flex-col justify-center gap-4">
                <img src="../assets/question_vector_up.svg" alt="" />
                <img src="../assets/question_vector_down.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const phone = ref('');

function sendToWhatsApp() {
    const targetNumber = '77003357676';
    const message = `Имя: ${name.value}\nТелефон: ${phone.value}\nИнтересует Qadam School, источник: Landing Page.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${targetNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}
</script>

<style scoped>
.input-field {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    outline: none;
}

.input-field:focus-visible {
    box-shadow: 0 0 0 2px black;
}

.submit-button {
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    width: 100%;
}

.submit-button:hover {
    background-color: #333;
}
</style>