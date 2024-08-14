<template>
    <section
        :class="'intro-section ' + cssClass"
    >
        <video class="video-background"
            src="/IMG_9095.M4V"
            controls=""
            poster="/images/about/video-poster.png" width="100%">
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
    cssClass: {
        type: String,
        default: '',
    }
});
</script>

<style scoped>

</style>
