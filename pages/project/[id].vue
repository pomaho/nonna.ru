<script setup>
import {useRoute} from 'vue-router';
const route = useRoute();
const {locale} = useI18n();
const projectId = ref(parseFloat(route.params.id) || null);
const project = ref(null);

const fetchProjectById = async (id) => {
    const response = await $fetch(`${useRuntimeConfig().public.apiBase}/projects/${id}`, {
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
        const projectDefault = await fetchProjectById(projectId.value);
        const localizedId = projectDefault?.localizations?.length
            ? projectDefault.localizations[0].id
            : projectId.value;
        const projectLocalized = localizedId !== projectId.value
            ? await fetchProjectById(localizedId)
            : projectDefault;

        const projects = {
            [projectDefault?.locale]: projectDefault,
            [projectLocalized?.locale]: projectLocalized,
        };

        project.value = projects[locale.value] || projectDefault;
    } catch (error) {
        console.error(error);
        project.value = null;
    }
});

useHead(() => ({
    meta: [
        {name: 'description', content: project.value?.name},
        {name: 'og:description', content: project.value?.name},
        {name: 'twitter:description', content: project.value?.name},
        {name: 'og:title', content: project.value?.name}
    ],
    titleTemplate: '%s - ' + project.value?.name,
}));

</script>

<template>
    <div class="project-page">
        <div v-if="!project">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else>
            <section class="project-intro-section intro-section">
                <WidgetsHeader/>
                <div class="container">
                    <div class="nonna-container">
                        <div class="section-content">
                            <h1 v-html="project.name"></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-12 col-12">
                            <img class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + project.image?.url" alt="">
                            <div class="text" v-html="project.description"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="two-columns section-author">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-6 col-12">
                            <div class="contact-icon instagram-contact-icon"></div>
                            <p class="author-text">{{ $t('project-author') }} <br>{{ project.author }}</p>
                            <a class="instagram-link" target="_blank" :href="`https://instagram.com/${project.author_instagram}`">@{{project.author_instagram}}</a>
                        </div>
                        <!--div class="column-2 col-lg-6 col-12">
                            <img v-if="project.media && project.media.length" class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + project.media[project.media?.length - 1].url" alt="">
                        </div-->
                    </div>
                </div>
            </section>

            <section :class="'list-of-content-section'">
                <div class="container">
                    <!--p>{{ $t('project-parquet-usage') }}
                        <nuxt-link class="parquet-link" :to="localePath(`/parquet/${project.parquet?.id}`)">
                            {{ project.parquet?.name }}
                        </nuxt-link>
                    </p-->
                    <div class="row g-3">
                        <div v-if="project.media" class="col-xl-4 col-lg-6 col-12" v-for="(media, index) in project.media" :key="index">
                            <div class="hover-box" v-if="media && index < project.media?.length">
                                <img class="category-content" :src="useRuntimeConfig().public.apiBaseFiles + media.url" alt="картинка для контента">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
