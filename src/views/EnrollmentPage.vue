<template>
    <div>
        <enrollmentHero/>
        <div class="py-20 bg-white">
            <enrollmentInfo @showModal="openModal"/>
        </div>

        <div class="my-20">
            <schoolNews />
        </div>
        <div class="bg-white">
            <schoolQuestions class="py-20"/>
        </div>
        <div>
            <schoolFooter/>
        </div>
        <Modal v-if="showModal" @close="showModal = false">
            <p>This is the modal content.</p>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <button class="px-4 py-2 bg-gray-200 rounded" @click="showModal = false">Cancel</button>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                </div>
            </template>
        </Modal>
    </div>
</template>
<script setup>
import enrollmentInfo from '../components/enrollmentInfo.vue';
import enrollmentHero from '../components/enrollmentHero.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import schoolNews from '../components/schoolNews.vue';
import Modal from '../components/popUp.vue'
import { ref } from 'vue';
const showModal = ref(false);
const openModal = () => {
    showModal.value = true;
}
</script> 