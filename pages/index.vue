<template>
    <div class="home-page">
        <SectionsIntro
            v-for="(number, index) in sections"
            :class="`intro-section-${index}`"
            :key="index"
            :title="$t(`home-section-${number}-title`)"
            :text="$t(`home-section-${number}-text`)"
            :button="$t(`home-section-${number}-button`)"
            :buttonLink="buttonLinks[number - 1]"
            :background="`home/section-${number}-bg.webp`"
            :with-header="index === 0"
        />
    </div>
</template>

<script setup>
const sections = [1, 2, 3, 4, 5, 6, 7];
const buttonLinks =[
    'about',
    'about',
    'collection',
    'projects',
    'about',
    'about',
    'about',
]

const {t} = useI18n();
useHead(() => {
    const description = t('seo-page-description');
    const pageTitle = t('seo-home-title');

    return {
        titleTemplate: `%s - ${pageTitle}`,
        meta: [
            {name: 'description', content: description},
            {name: 'og:description', content: description},
            {name: 'twitter:description', content: description},
            {name: 'og:title', content: description}
        ]
    };
});

</script>

<style scoped>

</style>
