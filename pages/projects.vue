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
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: '/images/categroies/parket/image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
];

const content = {
    categories,
    categoryContent,
}
</script>

<style scoped>

</style>
