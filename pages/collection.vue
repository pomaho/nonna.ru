<template>
    <div class="collection-page">
        <SectionsIntro
            :title="$t(`collection-intro-section-title`)"
            :text="$t(`collection-intro-section-text`)"
            :button="$t(`collection-intro-section-button`)"
            :background="`collection/section-1-bg.jpeg`"
            :with-header="true"
        />
        <div v-if="pending || pendingCats">
            <p class="color: black;">Loading....</p>
        </div>
        <SectionsListOfContent v-else
            :description="$t('collection-list-content-description')"
            :content="content"
            :content-type="'parquet'"
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
} = useFetch(`${useRuntimeConfig().public.apiBase}/woods?locale=${locale.value}`, {
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
    categoryContent: parquets,
});

</script>

<style scoped>

</style>
