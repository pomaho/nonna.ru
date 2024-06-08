<template>
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
</template>

<script setup>
defineProps({
    categories: Array,
})
</script>
