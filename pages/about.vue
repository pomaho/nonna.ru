<template>
    <div class="about-page">
        <SectionsIntro
            v-for="(number, index) in sections"
            :key="index"
            :title="$t(`about-section-${number}-title`)"
            :text="$t(`about-section-${number}-text`)"
            :background="`about/section-${number}-bg.jpeg`"
            :with-header="index === 0"
        />
    </div>
</template>

<script setup lang="ts">
const sections = [1, 2, 3, 4, 5, 6];
</script>

<style scoped>

</style>
