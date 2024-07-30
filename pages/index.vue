<template>
    <div class="home-page">
        <SectionsIntro
            v-for="(number, index) in sections"
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

<script setup lang="ts">
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
</script>

<style scoped>

</style>
