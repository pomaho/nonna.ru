<template>
    <section
        :class="'intro-section ' + cssClass"
    >
        <video class="video-background" preload="auto" autoplay loop="loop" muted="muted">
            <source :src="video" type="video/mp4">
            <source :src="videoWebm" type="video/webm">
            Sorry, your browser does not support HTML5 video.
        </video>
        <div class="shading"></div>
        <div class="container">
            <div class="nonna-container">
                <WidgetsHeader />
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    video: {
        type: String,
    },
    videoWebm: {
        type: String,
    },
    cssClass: {
        type: String,
        default: '',
    }
});
</script>

<style scoped>

</style>
