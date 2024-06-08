<template>
    <section :class="'list-of-content-section ' + cssClass">
        <div class="container">
            <p>{{ description }}</p>
            <WidgetsCategoryLinks
                :categories="content.categories"
                :categoriesType="content.categoriesType"
                :change-category="changeCategory"
                :current-category="currentCategory"
            />
            <WidgetsCategoryContent :categoryContent="filteredCategoryContent" />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    content: Object,
    description: {
        type: String,
        default: '',
    },
    cssClass: {
        type: String,
        default: '',
    }
});

const currentCategory = ref('all');

const filteredCategoryContent = computed(() => {
    if (currentCategory.value === 'all') {
        return props.content.categoryContent;
    }
    return props.content.categoryContent.filter((content) => content.categoryId === parseFloat(currentCategory.value));
});

const changeCategory = ($event, category) => {
    if (currentCategory.value === category.toString()) {
        return;
    }

    currentCategory.value = category.toString();
};
</script>

<style scoped>

</style>
