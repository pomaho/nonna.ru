// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nonna - лучший паркет!',
        }
    },
    css: ['@/assets/scss/app.scss'],
    devtools: { enabled: true }
})
