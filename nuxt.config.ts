export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nonna',
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
                    content: 'Nonna'
                },
                {
                    name: 'og:description',
                    content: 'Nonna'
                },
                {
                    name: 'twitter:description',
                    content: 'Nonna'
                },
                {
                    name: 'og:title',
                    content: 'Nonna'
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
        apiProxyTarget: process.env.API_PROXY_TARGET || 'http://cms:1337',
        apiBearerToken: process.env.API_BEARER_TOKEN || '',
        public: {
            apiBase: process.env.BASE_API_URL || '/api',
            apiBaseFiles: process.env.BASE_API_FILES_URL || '',
            url: process.env.SITE_URL || 'http://localhost:3000',
        }
    },
})
