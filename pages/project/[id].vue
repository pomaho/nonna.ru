<template>
    <div class="project-page">
        <div v-if="pending">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else>
            <section class="project-intro-section intro-section">
                <div class="container">
                    <div class="nonna-container">
                        <WidgetsHeader/>
                        <div class="section-content">
                            <h1>{{ project.name }}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-8 col-12">
                            <img class="main-image" :src="project.image" alt="">
                        </div>
                        <div class="column-2 col-lg-4 col-12">
                            <p class="text" v-html="project.description"></p>
                        </div>
                    </div>
                </div>
            </section>

            <section :class="'list-of-content-section'">
                <div class="container">
                    <p>{{ $t('project-parquet-usage') }}
                        <nuxt-link class="parquet-link" :to="`/parquet/${project.parquet.id}`">
                            {{ project.parquet.name }}
                        </nuxt-link>
                    </p>


                    <div class="row g-3">
                        <div class="col-xl-4 col-lg-6 col-12" v-for="(media, index) in project.media" :key="index">
                            <div class="hover-box" v-if="media && index < project.media.length - 1">
                                <img class="category-content" :src="`${media}`" alt="картинка для контента">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="two-columns section-author">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-6 col-12">
                            <div class="contact-icon instagram-contact-icon"></div>
                            <p class="author-text">{{ $t('project-author') }} {{ project.author }}</p>
                            <a class="instagram-link" target="_blank" :href="`https://instagram.com/${project.author_instagram}`">@{{project.author_instagram}}</a>
                        </div>
                        <div class="column-2 col-lg-6 col-12">
                            <img class="main-image" :src="project.media[project.media.length - 1]" alt="">
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
const projectId = ref(parseFloat(route.params.id) || null);

const {
    pending,
    data: project
} = useFetch(`${useRuntimeConfig().public.apiBase}/projects/${projectId.value}?locale=${locale.value}&populate=*`, {
    lazy: false,
    server: false,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (project) => {
        const data = project.data;
        const attributesKeys = Object.keys(data);
        const _project = {};
        attributesKeys.forEach((attributeKey) => {
            const value = data[attributeKey];
            if (value) {
                if (attributeKey === 'image') {
                    _project.image = useRuntimeConfig().public.apiBaseFiles + value.url;
                } else if (attributeKey === 'media' && value && value.length) {
                    _project.media = value.map((media) => useRuntimeConfig().public.apiBaseFiles + media.url);
                } else if (attributeKey === 'parquet' && value) {
                    _project[attributeKey] = value;
                } else if (typeof value === 'object') {
                    _project[attributeKey] = value.name;
                } else {
                    _project[attributeKey] = value;
                }
            }
        });
        debugger;
        return _project;
    }
});

</script>

<style scoped>

</style>
