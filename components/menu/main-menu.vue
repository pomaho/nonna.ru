<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(menuItem, index) in menu.items" :key="index">
                        <nuxt-link :to="menuItem.href" class="nav-link" aria-current="page">{{ $t(menuItem.text) }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import menu from '~/data/menu.json';
const { $bs } = useNuxtApp();
onMounted(() => {
    try {
        const collapse = new $bs.Collapse('#navbarSupportedContent');
        collapse.show();
        const collapse1 = new $bs.Collapse('#navbarNav');
        collapse1.show();
    } catch (e) {
        console.log('Bootstrap error: ', e);
    }
});
</script>
