<template>
    <div class="bespoke-page">
        <SectionsIntro
            :title="$t(`bespoke-intro-section-title`)"
            :text="$t(`bespoke-intro-section-text`)"
            :button="$t(`bespoke-intro-section-button`)"
            :buttonLink="'about'"
            :background="`bespoke/section-1-bg.webp`"
            :with-header="true"
        />
        <SectionsTwoColumnsLeftOrRight
            v-for="(bespoke, index) in bespokes.items" :key="index"
            :image="bespoke.image"
            :description="bespoke.description"
            :rtl="index % 2 !== 0"
        />
    </div>
</template>

<script setup>
import bespokes from '~/data/bespoke.json';
const {t} = useI18n();
useHead(() => {
    const description = t('seo-page-description');
    return {
        titleTemplate: `%s - ${t('menu-item-bespoke')}`,
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
