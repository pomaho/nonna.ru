<template>
    <div class="parquet-page">
        <section class="parquet-intro-section intro-section">
            <div class="container">
                <div class="nonna-container">
                    <WidgetsHeader/>
                    <div class="section-content">
                        <h1>{{ $t('parquet-intro-heading') }}</h1>
                        <p>{{ $t('parquet-intro-text') }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="two-columns">
            <div class="container">
                <div class="row">
                    <div class="column-1 col-lg-4 col-12">
                        <p class="wood-type">{{ parquet.woodType }}</p>
                        <img class="main-image" :src="parquet.image" alt="">
                    </div>
                    <div class="column-2 col-lg-8 col-12">
                        <h3 class="heading">{{ parquet.name }}</h3>
                        <p class="text">{{ parquet.description }}</p>
                        <nuxt-link :to="'/collection'" class="nonna-btn black-text-btn" aria-current="page">
                            {{ $t('parquet-back-to-collection-button') }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="specification-section">
            <div class="container">
                <h2 class="specification-heading">{{ $t('parquet-specifications-heading') }}</h2>
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <td><h4  class="specification-name">{{ $t('parquet-country') }}</h4></td>
                        <td><p class="specification-value">{{ parquet.country }}</p></td>
                    </tr>
                    <tr>
                        <td><h4  class="specification-name">{{ $t('parquet-wood-type') }}</h4></td>
                        <td><p class="specification-value">{{ parquet.woodType }}</p></td>
                    </tr>
                    <tr>
                        <td><h4  class="specification-name">{{ $t('parquet-color') }}</h4></td>
                        <td><p class="specification-value">{{ parquet.color }}</p></td>
                    </tr>
                    <tr>
                        <td><h4  class="specification-name">{{ $t('parquet-pattern') }}</h4></td>
                        <td><p class="specification-value">{{ parquet.pattern }}</p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section class="parquet-projects">
            <div class="container">
                <p class="parquet-used-projects">{{ $t('parquet-used-in-projects') }} {{ parquet.name }}</p>
                <div class="row gy-4">
                    <div class="col-xl-4 col-lg-6 col-12" v-for="(image, index) in parquet.projectImages" :key="index">
                        <img class="parquet-project-image" :src="image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const parquet = {
    name: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак \n' +
        '16*185*1600-2400',
    description: 'Паркет производится на фабрике полного цикла от поставки сырья до готовой продукции. На фабрике работает отдел по созданию уникальных выкрасов и дизайнов поверхности. Мы следим за всеми новинками и трендами в области напольных деревянных покрытий,  всегда идем в ногу со временем. Паркет NONNA имеет трёхслойную конструкцию – верхний и нижний слои из дуба, средний слой из хвойных пород. Такая конструкция успешно применяется в Европе не один десяток лет.',
    image: '/images/categories/parket/image-1.jpeg',
    pattern: 'Елочка',
    woodType: 'Дуб',
    country: 'Россия',
    color: 'светло-бежевый',
    coating: 'браш лак',
    size: '16*185*1600-2400',
    decor: 'Декор',
    projectImages: [
        '/images/categories/parket/image-1.jpeg',
        '/images/categories/parket/image-1.jpeg',
        '/images/categories/parket/image-1.jpeg'
    ]
};

</script>

<style scoped>

</style>
