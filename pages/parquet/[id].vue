<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
const {locale} = useI18n();
const parquetId = ref(route.params.id || null);
const fetchParams = {
    server: true,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (parquet) => parquet.data
};

const parquetsApiUrl = `${useRuntimeConfig().public.apiBase}/parquets/`;
const {data: parquetDefault} = await useFetch(`${parquetsApiUrl}${parquetId.value}?populate=*`, fetchParams);

const localizedId = parquetDefault.value?.localizations && parquetDefault.value?.localizations.length ? parquetDefault.value.localizations[0].id : parquetId.value;
const {data: parquetLocalized} = await useFetch(`${parquetsApiUrl}${localizedId}?populate=*`, fetchParams);

const parquets = {
    [parquetDefault.value?.locale]: parquetDefault.value,
    [parquetLocalized.value?.locale]: parquetLocalized.value,
}

const parquet = ref(parquets[locale.value] || parquetDefault.value);

useHead({
    meta: [
        {name: 'description', content: parquet.value?.name},
        {name: 'og:description', content: parquet.value?.name},
        {name: 'twitter:description', content: parquet.value?.name},
        {name: 'og:title', content: parquet.value?.name}
    ],
    titleTemplate: '%s - ' + parquet.value?.name,
});

</script>

<template>
    <div class="parquet-page">
        <section class="parquet-intro-section intro-section">
            <div class="container">
                <div class="nonna-container">
                    <WidgetsHeader/>
                    <div class="section-content">
                        <h1>{{ $t('parquet-intro-heading') }}</h1>
                        <p>{{ $t('parquet-intro-text') }}</p>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="!parquet">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-4 col-12">
                            <p class="wood-type">{{ parquet.wood?.name }}</p>
                            <img class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + parquet.image.url" alt="">
                        </div>
                        <div class="column-2 col-lg-8 col-12">
                            <h3 class="heading">{{ parquet.name }}</h3>
                            <div class="text" v-html="parquet.description"></div>
                            <nuxt-link :to="localePath('/collection')" class="nonna-btn black-text-btn" aria-current="page">
                                {{ $t('parquet-back-to-collection-button') }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="specification-section">
                <div class="container">
                    <h2 class="specification-heading">{{ $t('parquet-specifications-heading') }}</h2>
                    <table class="table table-bordered">
                        <tbody>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-country') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.country?.name }}</p></td>
                        </tr>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-wood-type') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.wood?.name }}</p></td>
                        </tr>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-color') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.color?.name }}</p></td>
                        </tr>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-pattern') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.type_of_picture?.name }}</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section class="parquet-projects">
                <div class="container">
                    <p class="parquet-used-projects">{{ $t('parquet-used-in-projects') }} {{ parquet.name }}</p>
                    <div class="row gy-4">
                        <div class="col-xl-4 col-lg-6 col-12" v-for="(image, index) in parquet.projectImages"
                             :key="index">
                            <img class="parquet-project-image" :src="image"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
