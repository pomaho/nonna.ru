<template>
    <div class="trailer-page">
        <SectionsIntroVideoBg
            :video="'https://www.eurohome.pro/assets/video/video2.mp4'"
            :video-webm="'https://www.eurohome.pro/assets/video/video2.webm'"
        />
        <section class="two-images first">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-12">
                        <div class="column-1">
                            <img class="main-image" src="/images/trailer/trailer-page-1.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 col-12">
                        <div class="column-2">
                            <img class="main-image" src="/images/trailer/trailer-page-2.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="trailer-desc">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-12">
                        <div class="column-1">
                            <img class="main-image" src="/images/trailer/trailer-desc.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="column-2">
                            <p class="trailer-desc-text">{{$t('trailer-desc-text')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="two-images second">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-12">
                        <div class="column-1">
                            <img class="main-image" src="/images/trailer/trailer-page-3.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 col-12">
                        <div class="column-2">
                            <img class="main-image" src="/images/trailer/trailer-page-4.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

const description = 'Nonna - лучший паркет! Трейлер';
useHead({
    titleTemplate: `%s - Трейлер`,
    meta: [
        {name: 'description', content: description },
        {name: 'description', content: description},
        {name: 'og:description', content: description},
        {name: 'twitter:description', content: description},
        {name: 'og:title', content: description}
    ]
});

</script>

<style scoped>

</style>
