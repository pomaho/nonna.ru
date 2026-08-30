<template>
    <section
        :class="'intro-section video-section' + cssClass"
    >
        <WidgetsHeader />
        <video v-if="video || videoWebm"
               class="video-background"
               preload="none"
               controls=""
               poster="/images/about/video-poster.png" width="100%">
            <source v-if="video" :src="video" type="video/mp4">
            <source v-if="videoWebm" :src="videoWebm" type="video/webm">
            Sorry, your browser does not support HTML5 video.
        </video>
        <img v-else
             class="video-background"
             src="/images/about/video-poster.png"
             alt="Nonna">
    </section>
</template>

<script setup>
defineProps({
    video: {
        type: String,
        default: '',
    },
    videoWebm: {
        type: String,
        default: '',
    },
    cssClass: {
        type: String,
        default: '',
    }
});
</script>

<style scoped>

</style>
