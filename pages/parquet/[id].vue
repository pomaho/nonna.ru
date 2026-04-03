<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
const {locale} = useI18n();
const parquetId = ref(route.params.id || null);
const parquet = ref(null);
const projects = ref([]);

const content = computed(() => ({
    categoryContent: Array.isArray(projects.value)
        ? projects.value.filter((project) => project.parquet?.id === parquet.value?.id)
        : [],
    categoriesType: 'collection'
}));

const fetchParquetById = async (id) => {
    const response = await $fetch(`${useRuntimeConfig().public.apiBase}/parquets/${id}`, {
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
        const parquetDefault = await fetchParquetById(parquetId.value);
        const localizedId = parquetDefault?.localizations?.length
            ? parquetDefault.localizations[0].id
            : parquetId.value;
        const parquetLocalized = localizedId !== parquetId.value
            ? await fetchParquetById(localizedId)
            : parquetDefault;

        const parquets = {
            [parquetDefault?.locale]: parquetDefault,
            [parquetLocalized?.locale]: parquetLocalized,
        };

        parquet.value = parquets[locale.value] || parquetDefault;

        const projectsResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/projects`, {
            query: {
                locale: locale.value,
                populate: '*',
            },
            headers: {
                authorization: `Bearer ${useRuntimeConfig().public.bearerToken}`,
            },
        });

        projects.value = projectsResponse?.data || [];
    } catch (error) {
        console.error(error);
        parquet.value = null;
        projects.value = [];
    }
});

useHead(() => ({
    meta: [
        {name: 'description', content: parquet.value?.name},
        {name: 'og:description', content: parquet.value?.name},
        {name: 'twitter:description', content: parquet.value?.name},
        {name: 'og:title', content: parquet.value?.name}
    ],
    titleTemplate: '%s - ' + parquet.value?.name,
}));

</script>

<template>
    <div class="parquet-page">
        <section class="parquet-intro-section intro-section">
            <div class="container">
                <div class="nonna-container">
                    <WidgetsHeader/>
                    <div class="section-content">
                        <h1>{{ $t('parquet-intro-heading') }}</h1>
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

                            <div class="parquet-specifications">
                                <div class="specs-row">
                                    <div class="specification-name"><p>{{ $t('parquet-country') }}:</p></div>
                                    <div class="specification-value"><p>{{ parquet.country?.name }}</p></div>
                                </div>
                                <div class="specs-row">
                                    <div class="specification-name"><p>{{ $t('parquet-wood-type') }}:</p></div>
                                    <div class="specification-value"><p>{{ parquet.wood?.name }}</p></div>
                                </div>
                                <div class="specs-row">
                                    <div class="specification-name"><p>{{ $t('parquet-color') }}:</p></div>
                                    <div class="specification-value"><p>{{ parquet.color?.name }}</p></div>
                                </div>
                            </div>

                            <nuxt-link :to="localePath('/collection')" class="nonna-btn black-text-btn" aria-current="page">
                                {{ $t('parquet-back-to-collection-button') }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="parquet-images" v-if="parquet.images && parquet.images.length">
                <div class="container">
                    <div class="images-container">
                        <img class="main-image" v-for="(image, index) in parquet.images" :src="useRuntimeConfig().public.apiBaseFiles + image.url" alt="">
                    </div>
                </div>
            </section>

            <SectionsListOfContent
                :description="`${$t('parquet-used-in-projects')} ${parquet.name}`"
                :content="content"
                :content-type="'project'"
            />
        </div>
    </div>
</template>
