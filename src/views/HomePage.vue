<script setup>
import schoolHeader from '../components/schoolHeader.vue';
import heroInfo from '../components/heroInfo.vue';
import schoolQualities from '../components/schoolQualities.vue';
import schoolNews from '../components/schoolNews.vue';
import schoolReason from '../components/schoolReason.vue';
import shoolAdmissions from '../components/shoolAdmissions.vue';
import schoolLife from '../components/schoolLife.vue';
import schoolQuestions from '../components/schoolQuestions.vue';
import schoolFooter from '../components/schoolFooter.vue';
import Modal from '../components/popUp.vue'
import { ref } from 'vue';
const showModal = ref(false);
const openModal = () => {
    showModal.value = true;
}
</script>

<template>
    <div>
        <div class="relative">
            <schoolHeader />
            <img class="w-full h-screen object-cover" src="../assets/IMG_2336.png" alt="School Image">
            <heroInfo @showModal="openModal"/>
        </div>
        <div class="w-full flex justify-center absolute bottom-15">
            <schoolQualities />
        </div>
        <div class="md:mt-60 mt-150">
            <schoolNews />
        </div>
        <div class="mt-20">
            <schoolReason @showModal="openModal"/>
        </div>
        <div class="mt-20">
            <shoolAdmissions />
        </div>
        <div class="mt-20 bg-white">
            <div>
                <schoolLife />
            </div>
            <div class="mt-20">
                <schoolQuestions />
            </div>
        </div>
        <div>
            <schoolFooter />
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
