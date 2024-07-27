<template>
    <div class="category-links">
        <nav class="navbar navbar-expand-xs">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <span
                            class="category-link nav-link"
                            :class="{
                                active: currentCategory === 'all'
                            }"
                            @click="changeCategory($event, 'all')"
                        >
                            {{ $t('show-all-button') }}
                        </span>
                    </li>

                    <li class="nav-item" v-for="(category, index) in categories" :key="index">
                        <span
                            class="category-link nav-link"
                            :class="{
                                active: currentCategory === category.name.toString()
                            }"
                            @click="changeCategory($event, category.name)"
                        >
                            {{ category.name }}
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
defineProps({
    categories: Array,
    changeCategory: Function,
    currentCategory: String,
})
</script>
