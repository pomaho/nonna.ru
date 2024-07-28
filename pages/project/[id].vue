<script setup>
import {useRoute} from 'vue-router';
const route = useRoute();
const {locale} = useI18n();
const projectId = ref(parseFloat(route.params.id) || null);
const fetchParams = {
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (response) => response.data
};

const projectsApiUrl = `${useRuntimeConfig().public.apiBase}/projects/`;
const {data: projectDefault} = await useFetch(`${projectsApiUrl}${projectId.value}?populate=*`, fetchParams);

const localizedId = projectDefault.value?.localizations && projectDefault.value?.localizations.length ? projectDefault.value.localizations[0].id : projectId.value;
const {data: projectLocalized} = await useFetch(`${projectsApiUrl}${localizedId}?populate=*`, fetchParams);

const projects = {
    [projectDefault.value?.locale]: projectDefault.value,
    [projectLocalized.value?.locale]: projectLocalized.value,
}

const project = ref(projects[locale.value] || projectDefault.value);
</script>

<template>
    <div class="project-page">
        <div v-if="!project">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else>
            <section class="project-intro-section intro-section">
                <div class="container">
                    <div class="nonna-container">
                        <WidgetsHeader/>
                        <div class="section-content">
                            <h1>{{ project.name }}</h1>
                            <p class="project-static-desc">Любой интерьер от классики до модерна.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-8 col-12">
                            <img class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + project.image?.url" alt="">
                        </div>
                        <div class="column-2 col-lg-4 col-12">
                            <div class="text" v-html="project.description"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section :class="'list-of-content-section'">
                <div class="container">
                    <p>{{ $t('project-parquet-usage') }}
                        <nuxt-link class="parquet-link" :to="`/parquet/${project.parquet?.id}`">
                            {{ project.parquet?.name }}
                        </nuxt-link>
                    </p>


                    <div class="row g-3">
                        <div v-if="project.media" class="col-xl-4 col-lg-6 col-12" v-for="(media, index) in project.media" :key="index">
                            <div class="hover-box" v-if="media && index < project.media?.length - 1">
                                <img class="category-content" :src="useRuntimeConfig().public.apiBaseFiles + media.url" alt="картинка для контента">
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
                            <img v-if="project.media && project.media.length" class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + project.media[project.media?.length - 1].url" alt="">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
