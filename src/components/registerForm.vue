<template>
    <div class="w-full flex justify-center">
        <div class="w-full md:w-3/4 px-4 md:px-0 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-16">
            <!-- Intro -->
            <div class="flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start">
                <h2 class="text-3xl md:text-4xl font-bold text-balance">{{ t('register.title') }}</h2>
                <p class="text-lg text-pretty max-w-prose">{{ t('register.sub') }}</p>
                <div class="border-b border-[#D9DEE4]" />
                <div class="flex flex-col gap-2">
                    <p class="font-semibold">{{ t('register.questions') }}</p>
                    <a :href="`tel:${PHONE_TEL}`" class="text-xl font-bold hover:text-[#E87C43] w-fit">{{ PHONE }}</a>
                    <a :href="WA" target="_blank" rel="noopener" class="underline underline-offset-4 hover:text-[#E87C43] w-fit">{{ t('register.wa') }}</a>
                </div>
            </div>

            <!-- Form / success -->
            <Transition name="reg" mode="out-in">
                <div v-if="done" key="done" class="bg-[#F3F5F8] rounded-md p-6 md:p-10 flex flex-col gap-5 items-start" role="status">
                    <div class="w-14 h-14 rounded-full bg-[#E87C43] text-white flex items-center justify-center" aria-hidden="true">
                        <svg viewBox="0 0 24 24" class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-bold">{{ t('register.doneTitle') }}</h3>
                    <p class="text-lg max-w-prose">{{ t('register.doneText') }}</p>
                    <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <a :href="WA" target="_blank" rel="noopener"
                            class="transition active:scale-95 duration-100 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded text-center">
                            {{ t('register.wa') }}
                        </a>
                        <button type="button" @click="reset"
                            class="transition active:scale-95 duration-100 cursor-pointer border border-black font-semibold px-6 py-3 rounded hover:bg-black hover:text-white">
                            {{ t('register.another') }}
                        </button>
                    </div>
                </div>

                <form v-else key="form" ref="formEl" class="bg-[#F3F5F8] rounded-md p-6 md:p-10 flex flex-col gap-8" novalidate @submit.prevent="submit">
                    <fieldset class="flex flex-col gap-5">
                        <legend class="text-2xl font-bold mb-5">{{ t('register.child') }}</legend>
                        <label class="field">
                            <span>{{ t('register.childName') }} *</span>
                            <input v-model.trim="form.child_name" name="child_name" required autocomplete="off" />
                        </label>
                        <label class="field sm:max-w-xs">
                            <span>{{ t('register.birth') }} *</span>
                            <input v-model="form.birth_date" name="birth_date" type="date" required :max="today" />
                        </label>

                        <div class="flex flex-col gap-2" role="radiogroup" :aria-label="t('register.grade')">
                            <span class="font-semibold text-sm">{{ t('register.grade') }} *</span>
                            <div class="flex flex-wrap gap-2">
                                <label v-for="g in GRADES" :key="g" class="pill">
                                    <input v-model="form.grade" type="radio" name="grade" :value="String(g)" class="sr-only" />
                                    {{ g === 0 ? t('register.gradeZero') : g }}
                                </label>
                            </div>
                        </div>

                        <label class="field">
                            <span>{{ t('register.when') }} *</span>
                            <select v-model="form.quarter" name="quarter" required>
                                <option v-for="q in 5" :key="q" :value="String(q - 1)">{{ t(`register.whens.${q - 1}`) }}</option>
                            </select>
                        </label>

                        <div class="flex flex-col gap-2" role="radiogroup" :aria-label="t('register.lang')">
                            <span class="font-semibold text-sm">{{ t('register.lang') }} *</span>
                            <div class="flex flex-wrap gap-2">
                                <label v-for="l in ['kk', 'ru']" :key="l" class="pill">
                                    <input v-model="form.lang" type="radio" name="lang" :value="l" class="sr-only" />
                                    {{ t(`register.langs.${l}`) }}
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div class="border-b border-[#D9DEE4]" />

                    <fieldset class="flex flex-col gap-5">
                        <legend class="text-2xl font-bold mb-5">{{ t('register.parent') }}</legend>
                        <label class="field">
                            <span>{{ t('register.parentName') }} *</span>
                            <input v-model.trim="form.parent_name" name="parent_name" required autocomplete="name" />
                        </label>
                        <div class="grid gap-5 sm:grid-cols-2">
                            <label class="field">
                                <span>{{ t('register.phone') }} *</span>
                                <input v-model.trim="form.parent_phone" name="parent_phone" type="tel" required autocomplete="tel" inputmode="tel" />
                            </label>
                            <label class="field">
                                <span>Email *</span>
                                <input v-model.trim="form.parent_email" name="parent_email" type="email" required autocomplete="email" aria-describedby="reg-email-hint" />
                                <small id="reg-email-hint" class="text-sm text-[#4A5361] font-normal">{{ t('register.emailHint') }}</small>
                            </label>
                        </div>
                        <label class="field">
                            <span>{{ t('register.note') }}</span>
                            <textarea v-model="form.parent_note" name="parent_note" rows="3" maxlength="1000" :placeholder="t('register.notePh')" />
                        </label>
                        <!-- honeypot -->
                        <input v-model="form.website" name="website" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />
                    </fieldset>

                    <div class="flex flex-col gap-4">
                        <label class="flex gap-3 items-start cursor-pointer">
                            <input v-model="form.consent" type="checkbox" class="check" />
                            <span>{{ t('register.consent') }}
                                <a :href="`https://admissions.qadam.edu.kz/consent?lang=${ui}`" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-[#E87C43]">{{ t('register.consentLink') }}</a> *</span>
                        </label>
                        <label class="flex gap-3 items-start cursor-pointer">
                            <input v-model="form.marketing_consent" type="checkbox" class="check" />
                            <span>{{ t('register.marketing') }}</span>
                        </label>
                    </div>

                    <p v-if="error" role="alert" class="bg-red-50 text-red-800 border border-red-200 rounded-md px-4 py-3">{{ error }}</p>

                    <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button type="submit" :disabled="!form.consent || sending"
                            class="transition active:scale-95 duration-100 cursor-pointer bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold text-lg px-8 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">
                            {{ sending ? t('register.sending') : t('register.submit') }}
                        </button>
                        <p class="text-sm text-[#4A5361]">{{ t('register.required') }}</p>
                    </div>
                </form>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { computed, nextTick, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const PHONE = '+7 775 007 23 77';
const PHONE_TEL = '+77750072377';
const WA = 'https://wa.me/77003357676';
const GRADES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const today = new Date().toISOString().slice(0, 10);

// Admissions API speaks 'kk', the landing uses 'kz'
const ui = computed(() => (locale.value === 'kz' ? 'kk' : 'ru'));

const blank = () => ({
    child_name: '', birth_date: '', grade: '1', quarter: '0', lang: ui.value,
    parent_name: '', parent_phone: '+7 ', parent_email: '', parent_note: '', website: '',
    consent: false, marketing_consent: false,
});

const form = reactive(blank());
const formEl = ref(null);
const error = ref('');
const sending = ref(false);
const done = ref(false);

async function submit() {
    error.value = '';
    if (!formEl.value.checkValidity()) { formEl.value.reportValidity(); return; }
    if (form.parent_phone.replace(/\D/g, '').length < 11) { error.value = t('register.phoneError'); return; }

    sending.value = true;
    try {
        // Proxied to admissions.qadam.edu.kz (vercel.json rewrite / vite dev proxy)
        const r = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...form, ui: ui.value }),
        });
        const j = await r.json().catch(() => ({}));
        if (!r.ok) { error.value = j.error || t('register.netError'); return; }
        done.value = true;
        window.gtag?.('event', 'generate_lead', { form: 'diagnostic_register' });
    } catch {
        error.value = t('register.netError');
    } finally {
        sending.value = false;
    }
}

async function reset() {
    Object.assign(form, blank());
    done.value = false;
    await nextTick();
    formEl.value?.querySelector('input')?.focus();
}
</script>

<style scoped>
@reference "../style.css";

.field { @apply flex flex-col gap-2 font-semibold text-sm; }
.field input, .field select, .field textarea {
    @apply w-full bg-white border border-[#D9DEE4] rounded-lg px-4 py-3 text-base font-normal text-black;
}
.field textarea::placeholder { @apply text-[#5B6472]; }
.field input:focus-visible, .field select:focus-visible, .field textarea:focus-visible {
    @apply outline-none border-[#E87C43] ring-2 ring-[#E87C43]/30;
}
.pill {
    @apply cursor-pointer select-none bg-white border border-[#D9DEE4] rounded-full px-4 min-w-11 h-11 inline-flex items-center justify-center font-semibold transition-colors duration-150;
}
.pill:hover { @apply border-[#E87C43]; }
.pill:has(:checked) { @apply bg-[#E87C43] border-[#E87C43] text-white; }
.pill:has(:focus-visible) { @apply ring-2 ring-offset-2 ring-[#E87C43]; }
.check { @apply mt-1 w-5 h-5 shrink-0 cursor-pointer accent-[#E87C43]; }

.reg-enter-active, .reg-leave-active { transition: opacity 300ms cubic-bezier(0.25, 1, 0.5, 1), transform 300ms cubic-bezier(0.25, 1, 0.5, 1); }
.reg-enter-from { opacity: 0; transform: translateY(12px); }
.reg-leave-to { opacity: 0; }
@media (prefers-reduced-motion: reduce) {
    .reg-enter-active, .reg-leave-active { transition: opacity 150ms linear; }
    .reg-enter-from { transform: none; }
}
</style>
