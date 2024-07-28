<script setup>
const {locale} = useI18n();
const fetchParams = {
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (response) => response.data
};

const {data: parquets} = await useFetch(`${useRuntimeConfig().public.apiBase}/parquets?locale=${locale.value}&populate=*`, fetchParams);

const {data: categories} = await useFetch(`${useRuntimeConfig().public.apiBase}/woods?locale=${locale.value}`, fetchParams);

const content = ref({
    categories,
    categoryContent: parquets,
});

</script>


<template>
    <div class="collection-page">
        <SectionsIntro
            :title="$t(`collection-intro-section-title`)"
            :text="$t(`collection-intro-section-text`)"
            :button="$t(`collection-intro-section-button`)"
            :background="`collection/section-1-bg.jpeg`"
            :with-header="true"
        />
        <div v-if="!parquets || !categories">
            <p class="color: black;">Loading....</p>
        </div>
        <SectionsListOfContent v-else
                               :description="$t('collection-list-content-description')"
                               :content="content"
                               :content-type="'parquet'"
                               :category-prop="'wood'"
        />
    </div>
</template>
