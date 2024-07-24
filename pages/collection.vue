<template>
    <div class="collection-page">
        <SectionsIntro
            :title="$t(`collection-intro-section-title`)"
            :text="$t(`collection-intro-section-text`)"
            :button="$t(`collection-intro-section-button`)"
            :background="`collection/section-1-bg.jpeg`"
            :with-header="true"
        />
        <div v-if="pending">
            <p class="color: black;">Loading....</p>
        </div>
        <SectionsListOfContent v-else
            :description="$t('collection-list-content-description')"
            :content="content"
        />
    </div>
</template>

<script setup>
const {locale} = useI18n();
const {
    pending,
    data: parquets
} = useFetch(`${useRuntimeConfig().public.apiBase}/parquets?locale=${locale.value}&populate=*`, {
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
                if (attributeKey === 'image') {
                    _parquet.image = useRuntimeConfig().public.apiBaseFiles + value.url;
                } else if (typeof value === 'object') {
                    _parquet[attributeKey] = value.name;
                } else if (value) {
                    _parquet[attributeKey] = value;
                }
            });
            return _parquet;
        });
        return data;
    }
});

const categories = [
    {
        id: 1,
        name: 'Дуб',
    },
    {
        id: 2,
        name: 'Дуб термо',
    },
    {
        id: 3,
        name: 'Ясень',
    },
    {
        id: 4,
        name: 'Ясень термо',
    },
];

const content = ref({
    categories,
    categoryContent: parquets,
    categoriesType: 'collection'
});

</script>

<style scoped>

</style>
