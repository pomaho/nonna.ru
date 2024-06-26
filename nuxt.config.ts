// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nonna - лучший паркет!',
        }
    },
    css: ['@/assets/css/main.css', '@/assets/scss/app.scss'],
    modules: ['@nuxtjs/i18n'],
    i18n: {
        // Module Options
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_except_default',
        defaultLocale: 'ru', // Default Language
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en.json',
                name: 'ENG',
            },
            {
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru.json',
                name: 'РУС',
            },
        ],
    },
    devtools: {enabled: true}
})
