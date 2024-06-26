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
        />
    </div>
</template>

<script setup>
const categories = [
    {
        id: 1,
        name: 'Жилая квартира',
    },
    {
        id: 2,
        name: 'Дом',
    },
    {
        id: 3,
        name: 'Коммерческая',
    },
    {
        id: 4,
        name: 'Horeca',
    },
];


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
