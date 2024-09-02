<template>
    <section
        :class="'intro-section video-section' + cssClass"
    >
        <WidgetsHeader />
        <video class="video-background"
               preload="none"
               controls=""
               poster="/images/about/video-poster.png" width="100%">
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
const videoUrl = locale.value === 'ru' ? 'IMG_0821.mp4' : 'IMG_0812.mp4';

</script>

<style scoped>

</style>
