<template>
    <section
        :class="'intro-section video-section' + cssClass"
    >
        <WidgetsHeader />
        <video class="video-background"
               preload="none"
               :src="`/${videoUrl}`"
               controls=""
               poster="/images/about/video-poster.png" width="100%">
            <source :src="`/${videoUrlWebm}`" type="video/webm">
            <source :src="`/${videoUrl}`" type="video/mp4">
            Sorry, your browser does not support HTML5 video.
        </video>
    </section>
</template>

<script setup>
defineProps({
    cssClass: {
        type: String,
        default: '',
    }
});
const {locale} = useI18n();
const videoUrl = locale.value === 'ru' ? 'IMG_0821_H.m4v' : 'IMG_0812.m4v';
const videoUrlWebm = locale.value === 'ru' ? 'IMG_0821_H.webm' : 'IMG_0812.webm';

</script>

<style scoped>

</style>
