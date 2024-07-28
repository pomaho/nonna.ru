<script setup>
import menu from '~/data/menu.json';
defineProps({
    showMobileMenu: Boolean,
});
</script>

<template>
    <div>
        <div :class="{
            'sidenav-menu': true,
            'show': showMobileMenu
        }">
            <div class="overflow-y-auto">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(menuItem, index) in menu.items" :key="index">
                        <nuxt-link :to="localePath(menuItem.href)" class="nav-link" aria-current="page">{{ $t(menuItem.text) }}</nuxt-link>
                    </li>
                </ul>
                <WidgetsLanguage />
            </div>
            <div class="close-mobile-menu">
                <img
                    src="/close-mobile-menu.png"
                    @click="$emit('closeMobileMenu')"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full hover:text-gray-700"
                    alt="close-mobile-menu"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
