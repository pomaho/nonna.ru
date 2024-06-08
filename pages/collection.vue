<template>
    <div class="collection-page">
        <SectionsIntro
            :title="$t(`collection-intro-section-title`)"
            :text="$t(`collection-intro-section-text`)"
            :button="$t(`collection-intro-section-button`)"
            :background="`collection/section-1-bg.jpeg`"
            :with-header="true"
        />
        <SectionsListOfContent
            :description="$t('collection-list-content-description')"
            :content="content"
        />
    </div>
</template>

<script setup>

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


const categoryContent = [
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[0].id,
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[0].id,
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[2].id,
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[3].id,
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
        categoryId: categories[3].id,
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
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
