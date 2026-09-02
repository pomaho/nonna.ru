<script setup>
import {useRoute} from 'vue-router';
import {cmsHtmlToText, sanitizeCmsHtml} from '~/utils/sanitize-cms-html.mjs';
const route = useRoute();
const {locale} = useI18n();
const projectId = ref(parseFloat(route.params.id) || null);
const project = ref(null);
const isLoading = ref(true);
const projectTitle = computed(() => cmsHtmlToText(project.value?.name));

const fetchProjectById = async (id) => {
    const response = await $fetch(`${useRuntimeConfig().public.apiBase}/projects/${id}`, {
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
        const projectDefault = await fetchProjectById(projectId.value);
        const localizedId = projectDefault?.localizations?.length
            ? projectDefault.localizations[0].id
            : projectId.value;
        let projectLocalized = projectDefault;

        if (localizedId !== projectId.value) {
            try {
                projectLocalized = await fetchProjectById(localizedId);
            } catch (error) {
                console.error(error);
            }
        }

        const projects = {
            [projectDefault?.locale]: projectDefault,
            [projectLocalized?.locale]: projectLocalized,
        };

        project.value = projects[locale.value] || projectDefault;
    } catch (error) {
        console.error(error);
        project.value = null;
    } finally {
        isLoading.value = false;
    }
});

useHead(() => ({
    meta: [
        {name: 'description', content: projectTitle.value},
        {name: 'og:description', content: projectTitle.value},
        {name: 'twitter:description', content: projectTitle.value},
        {name: 'og:title', content: projectTitle.value}
    ],
    titleTemplate: '%s - ' + projectTitle.value,
}));

</script>

<template>
    <div class="project-page">
        <div v-if="isLoading">
            <p class="pending-message">Loading...</p>
        </div>
        <div v-else-if="!project">
            <p class="pending-message">{{ $t('content-unavailable') }}</p>
        </div>
        <div v-else>
            <section class="project-intro-section intro-section">
                <WidgetsHeader/>
                <div class="container">
                    <div class="nonna-container">
                        <div class="section-content">
                            <h1 v-html="sanitizeCmsHtml(project.name)"></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="two-columns">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-12 col-12">
                            <img class="main-image" :src="useRuntimeConfig().public.apiBaseFiles + project.image?.url" alt="">
                            <div class="text" v-html="sanitizeCmsHtml(project.description)"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="project.author || project.author_instagram" class="two-columns section-author">
                <div class="container">
                    <div class="row">
                        <div class="column-1 col-lg-6 col-12">
                            <div class="contact-icon instagram-contact-icon"></div>
                            <p v-if="project.author" class="author-text">{{ $t('project-author') }} <br>{{ project.author }}</p>
                            <a v-if="project.author_instagram" class="instagram-link" target="_blank" rel="noopener noreferrer" :href="`https://instagram.com/${project.author_instagram}`">@{{project.author_instagram}}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section :class="'list-of-content-section'">
                <div class="container">
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
