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

<script setup>
const {locale} = useI18n();
const {
    pending,
    data: news
} = useFetch(`${useRuntimeConfig().public.apiBase}/site-news-many?locale=${locale.value}&populate=*`, {
    lazy: false,
    server: false,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (newses) => {
        const data = newses.data.map((news) => {
            const attributesKeys = Object.keys(news);
            const _parquet = {};
            attributesKeys.forEach((attributeKey) => {
                const value = news[attributeKey];
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
            return _parquet;
        });
        return data;
    }
});

const content = ref({
    categoryContent: news,
    categoriesType: 'collection'
});

</script>

<style scoped>

</style>
