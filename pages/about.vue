<template>
    <div class="about-page">
        <SectionsIntroVideoBg />
        <SectionsIntro
            v-for="(number, index) in sections"
            :key="index"
            :title="$t(`about-section-${number}-title`)"
            :text="$t(`about-section-${number}-text`)"
            :background="`about/section-${number}-bg.jpeg`"
            :with-header="false"
        />
    </div>
</template>

<script setup lang="ts">
const sections = [1, 2, 3, 4, 5, 6];
const description = 'Nonna - лучший паркет! - О нас';
useHead({
    titleTemplate: '%s - О нас',
    meta: [
        {name: 'description', content: description },
        {name: 'description', content: description},
        {name: 'og:description', content: description},
        {name: 'twitter:description', content: description},
        {name: 'og:title', content: description}
    ]
});

</script>

<style scoped>

</style>
