<script setup>
const {locale, t} = useI18n();
const parquets = ref([]);
const categories = ref([]);
const isLoading = ref(true);

const content = computed(() => ({
    categories: Array.isArray(categories.value) ? categories.value : [],
    categoryContent: Array.isArray(parquets.value) ? parquets.value : [],
}));

onMounted(async () => {
    try {
        const [parquetsResponse, categoriesResponse] = await Promise.all([
            $fetch(`${useRuntimeConfig().public.apiBase}/parquets`, {
                query: {
                    locale: locale.value,
                    populate: '*',
                },
            }),
            $fetch(`${useRuntimeConfig().public.apiBase}/woods`, {
                query: {
                    locale: locale.value,
                },
            }),
        ]);

        parquets.value = parquetsResponse?.data || [];
        categories.value = categoriesResponse?.data || [];
    } catch (error) {
        console.error(error);
        parquets.value = [];
        categories.value = [];
    } finally {
        isLoading.value = false;
    }
});

useHead(() => {
    const description = t('seo-page-description');
    return {
        titleTemplate: `%s - ${t('menu-item-collection')}`,
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
    <div class="collection-page">
        <SectionsIntro
            :title="$t(`collection-intro-section-title`)"
            :text="$t(`collection-intro-section-text`)"
            :background="`collection/section-1-bg.webp`"
            :with-header="true"
        />
        <div v-if="isLoading">
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
