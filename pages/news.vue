<script setup>
const {locale} = useI18n();
const fetchParams = {
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (response) => response.data
};

const {data: news} = await useFetch(`${useRuntimeConfig().public.apiBase}/site-news-many?locale=${locale.value}&populate=*`, fetchParams);

const content = ref({
    categoryContent: news,
    categoriesType: 'collection'
});

</script>

<template>
    <div class="news-page">
        <SectionsIntro
            :title="$t(`news-intro-section-title`)"
            :text="$t(`news-intro-section-text`)"
            :background="`news/section-1-bg.jpeg`"
            :with-header="true"
        />
        <SectionsListOfContent
            :showCategories="false"
            :description="$t('news-list-content-description')"
            :content="content"
            :content-type="'newses'"
        />
    </div>
</template>

<style scoped>

</style>
