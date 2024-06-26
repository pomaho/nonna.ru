<template>
    <div class="bespoke-page">
        <SectionsIntro
            :title="$t(`bespoke-intro-section-title`)"
            :text="$t(`bespoke-intro-section-text`)"
            :button="$t(`bespoke-intro-section-button`)"
            :background="`bespoke/section-1-bg.jpeg`"
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
</script>

<style scoped>

</style>
