<template>
    <div class="news-page">
        <div v-if="pending">
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
                            <img class="main-image" :src="news.image" alt="">
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

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
debugger;
const {locale} = useI18n();
const newsId = ref(parseFloat(route.params.id) || null);

const {
    pending,
    data: news
} = useFetch(`${useRuntimeConfig().public.apiBase}/site-news-many/${newsId.value}?locale=${locale.value}&populate=*`, {
    lazy: false,
    server: false,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (news) => {
        const data = news.data;
        const attributesKeys = Object.keys(data);
        const _news = {};
        attributesKeys.forEach((attributeKey) => {
            const value = data[attributeKey];
            if (value) {
                if (attributeKey === 'image') {
                    _news.image = useRuntimeConfig().public.apiBaseFiles + value.url;
                } else if (typeof value === 'object') {
                    _news[attributeKey] = value.name;
                } else {
                    _news[attributeKey] = value;
                }
            }
        });
        debugger;
        return _news;
    }
});

</script>

<style scoped>

</style>
