<template>
    <div>
        <enrollmentHero :title="$t('register.nav')" />
        <div class="py-20 bg-white">
            <registerForm />
        </div>
        <schoolFooter />
    </div>
</template>
<script setup>
import enrollmentHero from '../components/enrollmentHero.vue';
import registerForm from '../components/registerForm.vue';
import schoolFooter from '../components/schoolFooter.vue';
</script>
