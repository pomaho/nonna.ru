<template>
    <section
        :class="'intro-section video-section' + cssClass"
    >
        <div>
            <div class="container">
                <WidgetsHeader />
            </div>
            <video class="video-background"
                   src="/IMG_9095.M4V"
                   controls=""
                   poster="/images/about/video-poster.png" width="100%">
                Sorry, your browser does not support HTML5 video.
            </video>
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
