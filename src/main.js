import { createApp } from 'vue'
import './style.css'
import HomePage from './views/HomePage.vue';
import MissionPage from './views/MissionPage.vue';
import TeamPage from './views/TeamPage.vue';
import ParentsPage from './views/ParentsPage.vue';
import AcademicPage from './views/AcademicPage.vue';
import ExtraPage from './views/ExtraPage.vue';
import PricePage from './views/PricePage.vue';
import EnrollmentPage from './views/EnrollmentPage.vue';
import OrdaPage from './views/OrdaPage.vue';
import App from './App.vue'
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {},
});

const loadedLocales = new Set();

export async function loadLocale(lang) {
    if (loadedLocales.has(lang)) {
        i18n.global.locale.value = lang;
        return;
    }
    const messages = await import(`./locales/${lang}.json`);
    i18n.global.setLocaleMessage(lang, messages.default);
    loadedLocales.add(lang);
    i18n.global.locale.value = lang;
}

import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/mission',
            component: MissionPage
        },
        {
            path: '/team',
            component: TeamPage
        },
        {
            path: '/parents',
            component: ParentsPage
        },
        {
            path: '/academic',
            component: AcademicPage
        },
        {
            path: '/extra',
            component: ExtraPage
        },
        {
            path: '/price',
            component: PricePage
        },
        {
            path: '/enrollment',
            component: EnrollmentPage
        },
        {
            path: '/orda',
            component: OrdaPage
        },
        {
            path: '/rus',
            component: HomePage
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return { top: 0 }
        }
    }
})

const app = createApp(App).use(router).use(i18n);

router.beforeEach(async (to) => {
    const lang = to.path === '/rus' ? 'ru' : (localStorage.getItem('lang') || 'kz');
    await loadLocale(lang);
});

app.mount('#app')
