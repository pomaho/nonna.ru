<template>
    <div>
        <SectionsIntro
            v-for="(number, index) in sections"
            :key="index"
            :title="$t(`home-section-${number}-title`)"
            :text="$t(`home-section-${number}-text`)"
            :button="$t(`home-section-${number}-button`)"
            :background="`home/section-${number}-bg.jpeg`"
            :with-header="index === 0"
        />
    </div>
</template>

<script setup lang="ts">
const sections = [1, 2, 3, 4, 5, 6, 7];
</script>

<style scoped>

</style>
