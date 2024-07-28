<template>
    <div class="show-mobile-nav-container" >
        <div @click="showMobileMenu = true">
            <svg class="hamburger-menu-icon" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="32" height="4" fill="#DEDEDE"/>
                <rect y="10.5" width="32" height="4" fill="#DEDEDE"/>
                <rect y="20.5" width="32" height="4" fill="#DEDEDE"/>
            </svg>
        </div>
        <MenuMobileSidenav @closeMobileMenu="showMobileMenu = false" :showMobileMenu="showMobileMenu"/>
    </div>
</template>

<script setup>
const showMobileMenu = ref(false);
const show = ref(true);

const closeMobileMenu = () => {
    this.$emit('closeMobileMenu')
};
</script>
