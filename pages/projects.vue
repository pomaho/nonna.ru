<script setup>
const {locale} = useI18n();
const fetchParams = {
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (response) => response.data
};

const {data: projects} = await useFetch(`${useRuntimeConfig().public.apiBase}/projects?locale=${locale.value}&populate=*`, fetchParams);

const {data: categories} = await useFetch(`${useRuntimeConfig().public.apiBase}/type-of-properties?locale=${locale.value}`, fetchParams);


const content = ref({
    categories,
    categoryContent: projects,
    categoriesType: 'collection'
});

const description = 'Nonna - лучший паркет! Проекты';
useHead({
    titleTemplate: `%s - Проекты`,
    meta: [
        {name: 'description', content: description },
        {name: 'description', content: description},
        {name: 'og:description', content: description},
        {name: 'twitter:description', content: description},
        {name: 'og:title', content: description}
    ]
});

</script>


<template>
    <div class="projects-page">
        <SectionsIntro
            :title="$t(`projects-intro-section-title`)"
            :text="$t(`projects-intro-section-text`)"
            :background="`projects/section-1-bg.jpeg`"
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
