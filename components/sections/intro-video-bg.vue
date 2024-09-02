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
const videoUrl = locale.value === 'ru' ? 'IMG_0821.MP4' : 'IMG_0812.MP4';

</script>

<style scoped>

</style>
