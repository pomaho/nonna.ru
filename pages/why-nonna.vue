<script setup>
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const {locale, t} = useI18n();
const videoUrl = locale.value === 'ru' ? 'nonna-water.mp4' : 'nonna-water.mp4';
// const description = 'Nonna - лучший паркет! Новости';
const description = t('seo-page-description');
useHead({
    titleTemplate: `%s - Почему Nonna?`,
    meta: [
        {name: 'description', content: description},
        {name: 'description', content: description},
        {name: 'og:description', content: description},
        {name: 'twitter:description', content: description},
        {name: 'og:title', content: description}
    ]
});

</script>

<template>
    <div class="news-page">
        <SectionsIntro
            :title="$t(`why-nonna-intro-section-title`)"
            :text="$t(`why-nonna-intro-section-text`)"
            :background="`why-nonna/section-1-bg.jpeg`"
            :with-header="true"
        />

        <section class="list-of-content-section">
            <div class="container">
                <p v-html="$t('why-nonna-list-content-description').replaceAll('--br--', '<br/>')"></p>
                <div class="row g-3">
                    <div class="col-xl-4 col-lg-6 col-12" v-for="(image, index) in images" :key="index">
                        <div class="hover-box" v-if="image">
                            <img class="category-content"
                                 :src="`/images/why-nonna/why-nonna-${image}.jpg`"
                                 alt="картинка для контента">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="why-nonna video-section clearfix">
            <div class="container clearfix">
                <video class="video-background clearfix"
                       preload="none"
                       controls=""
                       poster="/images/why-nonna/video-poster.png" width="100%">
                    <source :src="`/${videoUrl}`" type="video/mp4">
                    Sorry, your browser does not support HTML5 video.
                </video>
                <p class="video-description" v-html="$t('why-nonna-list-content-video-description').replaceAll('--br--', '<br/>')"></p>
            </div>
        </section>
    </div>
    <SectionsIntro
        :title="$t(`why-nonna-cleanup-section-title`)"
        :text="$t(`why-nonna-cleanup-section-text`)"
        :background="`why-nonna/section-cleanup-bg.jpg`"
        :with-header="true"
    />

</template>

<style scoped>

</style>
