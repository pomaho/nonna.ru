<template>
    <section
        :class="'list-of-content-section ' + cssClass"
    >
        <div class="container">
            <p>Паркет производится на фабрике полного цикла от поставки сырья до готовой продукции. На фабрике работает
                отдел по созданию уникальных выкрасов и дизайнов поверхности. Мы следим за всеми новинками и трендами в
                области напольных деревянных покрытий, всегда идем в ногу со временем. Паркет NONNA имеет трёхслойную
                конструкцию – верхний и нижний слои из дуба, средний слой из хвойных пород. Такая конструкция успешно
                применяется в Европе не один десяток лет.</p>
            <div class="category-links">
                <nav class="navbar navbar-expand-xs">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <nuxt-link :to="'/collection'" class="category-link nav-link" aria-current="page">
                                    {{ $t('show-all-button') }}
                                </nuxt-link>
                            </li>

                            <li class="nav-item" v-for="(category, index) in categories" :key="index">
                                <nuxt-link :to="`/collection/${category.id}`" class="category-link nav-link"
                                           aria-current="page">
                                    {{ category.name }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="row g-3">
                <div class="col-xl-4 col-lg-6 col-12" v-for="(content, index) in categoryContent" :key="index">
                    <div class="hover-box">
                        <nuxt-link :to="'/collection/' + content.id">
                            <img class="category-content" :src="`/images/categroies/parket/${content.image}`"
                                 alt="картинка для контента">
                            <div class="content-box flex-centered">
                                <p>Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400</p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
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

const categories = [
    {
        id: 1,
        name: 'Дуб',
    },
    {
        id: 2,
        name: 'Дуб термо',
    },
    {
        id: 3,
        name: 'Ясень',
    },
    {
        id: 4,
        name: 'Ясень термо',
    },
]

const categoryContent = [
    {
        image: 'image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: 'image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: 'image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: 'image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: 'image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
    {
        image: 'image-1.jpeg',
        description: 'Инженерная доска NONNA Дуб "23/1" экстра-рустик браш лак 16*185*1600-2400',
    },
];

</script>

<style scoped>

</style>
