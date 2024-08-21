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
            :background="`home/section-${number}-bg.jpeg`"
            :with-header="index === 0"
        />
    </div>
</template>

<script setup>
const sections = [1, 2, 3, 4, 5, 6, 7];
const buttonLinks =[
    'about',
    'trailer',
    'collection',
    'projects',
    'about',
    'about',
    'about',
]

const description = 'Nonna - лучший паркет! Главная';
useHead({
    titleTemplate: `%s - Главная`,
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
