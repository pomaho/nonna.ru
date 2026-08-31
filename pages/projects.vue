<script setup>
const {locale, t} = useI18n();
const projects = ref([]);
const categories = ref([]);

const content = computed(() => ({
    categories: Array.isArray(categories.value) ? categories.value : [],
    categoryContent: Array.isArray(projects.value) ? projects.value : [],
    categoriesType: 'collection'
}));

onMounted(async () => {
    try {
        const [projectsResponse, categoriesResponse] = await Promise.all([
            $fetch(`${useRuntimeConfig().public.apiBase}/projects`, {
                query: {
                    locale: locale.value,
                    populate: '*',
                },
            }),
            $fetch(`${useRuntimeConfig().public.apiBase}/type-of-properties`, {
                query: {
                    locale: locale.value,
                },
            }),
        ]);

        projects.value = projectsResponse?.data || [];
        categories.value = categoriesResponse?.data || [];
    } catch (error) {
        console.error(error);
        projects.value = [];
        categories.value = [];
    }
});

useHead(() => {
    const description = t('seo-page-description');
    return {
        titleTemplate: `%s - ${t('menu-item-projects')}`,
        meta: [
            {name: 'description', content: description},
            {name: 'og:description', content: description},
            {name: 'twitter:description', content: description},
            {name: 'og:title', content: description}
        ]
    };
});

</script>


<template>
    <div class="projects-page">
        <SectionsIntro
            :title="$t(`projects-intro-section-title`)"
            :text="$t(`projects-intro-section-text`)"
            :background="`projects/section-1-bg.webp`"
            :with-header="true"
        />
        <SectionsListOfContent
            :description="$t('projects-list-content-description')"
            :content="content"
            :content-type="'project'"
            :category-prop="'type_of_property'"
        />
    </div>
</template>

<style scoped>

</style>
