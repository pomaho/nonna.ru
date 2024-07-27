<template>
    <div class="projects-page">
        <SectionsIntro
            :title="$t(`projects-intro-section-title`)"
            :text="$t(`projects-intro-section-text`)"
            :button="$t(`projects-intro-section-button`)"
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

<script setup>

const {locale} = useI18n();
const {
    pending,
    data: projects
} = useFetch(`${useRuntimeConfig().public.apiBase}/projects?locale=${locale.value}&populate=*`, {
    lazy: false,
    server: false,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (parquets) => {
        const data = parquets.data.map((parquet) => {
            const attributesKeys = Object.keys(parquet);
            const _parquet = {};
            attributesKeys.forEach((attributeKey) => {
                const value = parquet[attributeKey];
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

const {
    pendingCats,
    data: categories
} = useFetch(`${useRuntimeConfig().public.apiBase}/type-of-properties?locale=${locale.value}`, {
    lazy: false,
    server: false,
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (categories) => {
        return categories.data;
    }
});


const content = ref({
    categories,
    categoryContent: projects,
    categoriesType: 'collection'
});

</script>

<style scoped>

</style>
