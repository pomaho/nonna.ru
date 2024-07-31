export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nonna - лучший паркет!',
            meta: [
                {
                    name: 'theme-color',
                    content: '#303030',
                    media: '(prefers-color-scheme: light)'
                },
                {
                    name: 'theme-color',
                    content: '#303030',
                    media: '(prefers-color-scheme: dark)'
                },
                {
                    name: 'description',
                    content: 'Nonna - лучший паркет!'
                },
                {
                    name: 'og:description',
                    content: 'Nonna - лучший паркет!'
                },
                {
                    name: 'twitter:description',
                    content: 'Nonna - лучший паркет!'
                },
                {
                    name: 'og:title',
                    content: 'Nonna - лучший паркет!'
                },
            ],
        },
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
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            apiBase: process.env.BASE_API_URL,
            apiBaseFiles: process.env.BASE_API_FILES_URL,
            url: process.env.SITE_URL,
            bearerToken: process.env.API_BEARER_TOKEN,
        }
    },
})
