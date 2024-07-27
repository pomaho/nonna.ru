<template>
    <section :class="'list-of-content-section ' + cssClass">
        <div class="container">
            <p>{{ description }}</p>
            <WidgetsCategoryLinks v-if="showCategories && content.categories"
                :categories="content.categories"
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
    },
    showCategories: {
        type: Boolean,
        default: true,
    }
});

const currentCategory = ref('all');

const filteredCategoryContent = computed(() => {
    if (currentCategory.value === 'all') {
        return props.content.categoryContent;
    }
    return props.content.categoryContent.filter((content) => content.wood === currentCategory.value);
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
