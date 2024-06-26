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
        />
    </div>
</template>

<script setup>

const categoryContent = [
    {
        image: '/images/projects/project1.png',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[0].id,
    },
    {
        image: '/images/projects/project1.png',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[0].id,
    },
    {
        image: '/images/projects/project1.png',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[2].id,
    },
    {
        image: '/images/projects/project1.png',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[3].id,
    },
    {
        image: '/images/projects/project1.png',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[3].id,
    },
    {
        image: '/images/projects/project1.png',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[1].id,
    },
];

const content = {
    categories,
    categoryContent,
    categoriesType: 'collection'
}

</script>

<style scoped>

</style>
