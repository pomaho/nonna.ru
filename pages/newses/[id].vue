<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
const {locale} = useI18n();
const newsId = ref(parseFloat(route.params.id) || null);
const fetchParams = {
    server: true,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (parquet) => parquet.data
};

const newsesApiUrl = `${useRuntimeConfig().public.apiBase}/site-news-many/`;
const {data: newsDefault} = await useFetch(`${newsesApiUrl}${newsId.value}?populate=*`, fetchParams);

const localizedId = newsDefault.value?.localizations && newsDefault.value?.localizations.length ? newsDefault.value.localizations[0].id : newsId.value;
const {data: newsLocalized} = await useFetch(`${newsesApiUrl}${localizedId}?populate=*`, fetchParams);

const newses = {
    [newsDefault.value?.locale]: newsDefault.value,
    [newsLocalized.value?.locale]: newsLocalized.value,
};

const news = ref(newses[locale.value] || newsDefault.value);

useHead({
    meta: [
        {name: 'description', content: news.value?.name},
        {name: 'og:description', content: news.value?.name},
        {name: 'twitter:description', content: news.value?.name},
        {name: 'og:title', content: news.value?.name}
    ],
    titleTemplate: '%s - ' + news.value?.name,
});

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
