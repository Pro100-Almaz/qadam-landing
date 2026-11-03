import { createApp } from 'vue'
import './style.css'
import HomePage from './views/HomePage.vue';
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
            component: () => import('./views/MissionPage.vue')
        },
        {
            path: '/team',
            component: () => import('./views/TeamPage.vue')
        },
        {
            path: '/parents',
            component: () => import('./views/ParentsPage.vue')
        },
        {
            path: '/academic',
            component: () => import('./views/AcademicPage.vue')
        },
        {
            path: '/extra',
            component: () => import('./views/ExtraPage.vue')
        },
        {
            path: '/price',
            component: () => import('./views/PricePage.vue')
        },
        {
            path: '/enrollment',
            component: () => import('./views/EnrollmentPage.vue')
        },
        {
            path: '/orda',
            component: () => import('./views/OrdaPage.vue')
        },
        {
            path: '/register',
            component: () => import('./views/RegisterPage.vue')
        },
        {
            path: '/attestation',
            component: () => import('./views/AttestationPage.vue')
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
