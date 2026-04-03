<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
const {locale} = useI18n();
const newsId = ref(parseFloat(route.params.id) || null);
const news = ref(null);

const fetchNewsById = async (id) => {
    const response = await $fetch(`${useRuntimeConfig().public.apiBase}/site-news-many/${id}`, {
        query: {
            populate: '*',
        },
        headers: {
            authorization: `Bearer ${useRuntimeConfig().public.bearerToken}`,
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
        const newsLocalized = localizedId !== newsId.value
            ? await fetchNewsById(localizedId)
            : newsDefault;

        const newses = {
            [newsDefault?.locale]: newsDefault,
            [newsLocalized?.locale]: newsLocalized,
        };

        news.value = newses[locale.value] || newsDefault;
    } catch (error) {
        console.error(error);
        news.value = null;
    }
});

useHead(() => ({
    meta: [
        {name: 'description', content: news.value?.name},
        {name: 'og:description', content: news.value?.name},
        {name: 'twitter:description', content: news.value?.name},
        {name: 'og:title', content: news.value?.name}
    ],
    titleTemplate: '%s - ' + news.value?.name,
}));

</script>

<template>
    <div class="news-page">
        <div v-if="!news">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else>
            <section class="news-intro-section intro-section">
                <div class="container">
                    <div class="nonna-container">
                        <WidgetsHeader/>
                        <div class="section-content">
                            <h1>{{ news.name }}</h1>
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
                            <p class="text" v-html="news.description"></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

</style>
