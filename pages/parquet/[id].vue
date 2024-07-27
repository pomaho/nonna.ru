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
        <div v-if="pending">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-4 col-12">
                            <p class="wood-type">{{ parquet.wood }}</p>
                            <img class="main-image" :src="parquet.image" alt="">
                        </div>
                        <div class="column-2 col-lg-8 col-12">
                            <h3 class="heading">{{ parquet.name }}</h3>
                            <p class="text" v-html="parquet.description"></p>
                            <nuxt-link :to="'/collection'" class="nonna-btn black-text-btn" aria-current="page">
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
                            <td><p class="specification-value">{{ parquet.country }}</p></td>
                        </tr>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-wood-type') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.wood }}</p></td>
                        </tr>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-color') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.color }}</p></td>
                        </tr>
                        <tr>
                            <td><h4 class="specification-name">{{ $t('parquet-pattern') }}</h4></td>
                            <td><p class="specification-value">{{ parquet.type_of_picture }}</p></td>
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

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
debugger;
const {locale} = useI18n();
const parquetId = ref(parseFloat(route.params.id) || null);

const {
    pending,
    data: parquet
} = useFetch(`${useRuntimeConfig().public.apiBase}/parquets/${parquetId.value}?locale=${locale.value}&populate=*`, {
    lazy: false,
    server: false,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (parquet) => {
        const data = parquet.data;
        const attributesKeys = Object.keys(data);
        const _parquet = {};
        attributesKeys.forEach((attributeKey) => {
            const value = data[attributeKey];
            if (value) {
                if (attributeKey === 'image') {
                    _parquet.image = useRuntimeConfig().public.apiBaseFiles + value.url;
                } else if (typeof value === 'object') {
                    _parquet[attributeKey] = value.name;
                } else {
                    _parquet[attributeKey] = value;
                }
            }
        });
        debugger;
        return _parquet;
    }
});

</script>

<style scoped>

</style>
