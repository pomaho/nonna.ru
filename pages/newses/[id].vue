<script setup>
import {useRoute} from 'vue-router';
import {cmsHtmlToText, sanitizeCmsHtml} from '~/utils/sanitize-cms-html.mjs';

const route = useRoute();
const {locale} = useI18n();
const newsId = ref(parseFloat(route.params.id) || null);
const news = ref(null);
const isLoading = ref(true);

const fetchNewsById = async (id) => {
    const response = await $fetch(`${useRuntimeConfig().public.apiBase}/site-news-many/${id}`, {
        query: {
            populate: '*',
        },
    });

    return response?.data?.attributes
        ? {
            id: response.data.id,
            ...response.data.attributes,
        }
        : response?.data || null;
};

onMounted(async () => {
    try {
        const newsDefault = await fetchNewsById(newsId.value);
        const localizedId = newsDefault?.localizations?.length
            ? newsDefault.localizations[0].id
            : newsId.value;
        let newsLocalized = newsDefault;

        if (localizedId !== newsId.value) {
            try {
                newsLocalized = await fetchNewsById(localizedId);
            } catch (error) {
                console.error(error);
            }
        }

        const newses = {
            [newsDefault?.locale]: newsDefault,
            [newsLocalized?.locale]: newsLocalized,
        };

        news.value = newses[locale.value] || newsDefault;
    } catch (error) {
        console.error(error);
        news.value = null;
    } finally {
        isLoading.value = false;
    }
});

const newsTitle = computed(() => cmsHtmlToText(news.value?.name));

useHead(() => ({
    meta: [
        {name: 'description', content: newsTitle.value},
        {name: 'og:description', content: newsTitle.value},
        {name: 'twitter:description', content: newsTitle.value},
        {name: 'og:title', content: newsTitle.value}
    ],
    titleTemplate: '%s - ' + newsTitle.value,
}));

</script>

<template>
    <div class="news-page">
        <div v-if="isLoading">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else-if="!news">
            <p class="pending-message">{{ $t('content-unavailable') }}</p>
        </div>
        <div v-else>
            <section class="news-intro-section intro-section">
                <div class="container">
                    <div class="nonna-container">
                        <WidgetsHeader/>
                        <div class="section-content">
                            <h1 v-html="sanitizeCmsHtml(news.name)"></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-4 col-12">
                            <img class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + news.image?.url" alt="">
                        </div>
                        <div class="column-2 col-lg-8 col-12">
                            <p class="text" v-html="sanitizeCmsHtml(news.description)"></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

</style>
