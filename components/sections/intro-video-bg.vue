<template>
    <section
        :class="'intro-section video-section' + cssClass"
    >
        <WidgetsHeader />
        <video class="video-background"
               :src="`/${videoUrl}`"
               controls=""
               poster="/images/about/video-poster.png" width="100%">
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

</script>

<style scoped>

</style>
