<template>
    <div>
        <SectionsIntro
            v-for="(section, index) in sections.data"
            :key="index"
            :title="section.title"
            :text="section.text"
            :button="section.button"
            :background="section.background"
            :with-header="index === 0"
        />
    </div>
</template>

<script setup lang="ts">
import sections from '../data/home-sections.json'
</script>

<style scoped>

</style>
