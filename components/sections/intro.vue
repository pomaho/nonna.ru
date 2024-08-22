<template>
    <section
        :class="'intro-section ' + cssClass"
        :style="{
            'background-image': `url('/images/${background}')`,
        }"
    >
        <div class="shading"></div>
        <WidgetsHeader v-if="withHeader"/>
        <div class="container">
            <div class="nonna-container">
                <div class="section-content">
                    <h1 class="intro-section-heading" v-html="title.replaceAll('--br--', '<br/>')"></h1>
                    <p class="intro-section-text" v-html="text.replaceAll('--br--', '<br/>')"></p>
                    <nuxt-link v-if="button" :to="localePath('/' + buttonLink)" class="nonna-btn" aria-current="page">{{ button }}</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    background: {
        type: String,
    },
    title:{
        type: String,
    },
    text: {
        type: String,
    },
    button: {
        type: String,
        default: '',
    },
    buttonLink: {
        type: String,
        default: '',
    },
    withHeader: {
        type: Boolean,
        default: false,
    },
    cssClass: {
        type: String,
        default: '',
    }
});
</script>

<style scoped>

</style>
