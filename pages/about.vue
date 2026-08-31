<template>
    <div class="about-page">
        <SectionsIntroVideoBg :video="aboutVideo" />
        <SectionsIntro
            v-for="(number, index) in sections"
            :class="`about-section-${number}`"
            :key="index"
            :title="$t(`about-section-${number}-title`)"
            :text="$t(`about-section-${number}-text`)"
            :background="`about/section-${number}-bg.webp`"
            :with-header="false"
        />
    </div>
</template>

<script setup lang="ts">
const sections = [1, 2, 3, 4, 5, 6];
const {locale, t} = useI18n();
const aboutVideo = computed(() => locale.value === 'ru' ? '/IMG_0821.mp4' : '/IMG_0819.mp4');
useHead(() => {
    const description = t('seo-page-description');
    return {
        titleTemplate: `%s - ${t('menu-item-about-us')}`,
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
