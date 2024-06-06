<template>
    <section
        :class="'intro-section ' + cssClass"
        :style="{
            'background-image': `url('/images/${background}')`,
        }"
    >
        <div class="shading"></div>
        <div class="container">
            <div class="nonna-container">
                <WidgetsHeader v-if="withHeader"/>
                <div class="section-content">
                    <h1 v-html="title"></h1>
                    <p v-html="text"></p>
                    <nuxt-link v-if="button" :to="'/'" class="nonna-btn" aria-current="page">{{ button }}</nuxt-link>
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
