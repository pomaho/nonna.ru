<template>
    <section :class="'list-of-content-section ' + cssClass">
        <div class="container">
            <p>{{ description }}</p>
            <WidgetsCategoryLinks :categories="content.categories" />
            <WidgetsCategoryContent :categoryContent="content.categoryContent" />
        </div>
    </section>
</template>

<script setup>
defineProps({
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
</script>

<style scoped>

</style>
