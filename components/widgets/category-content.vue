<template>
    <div class="row g-3">
        <div class="col-xl-4 col-lg-6 col-12" v-for="(content, index) in categoryContent" :key="index">
            <div class="hover-box" v-if="content">
                <nuxt-link :to="localePath(`/${contentType}/${content.id}`)">
                    <img class="category-content" :src="useRuntimeConfig().public.apiBaseFiles + content.image?.url" alt="картинка для контента">
                    <div class="content-box flex-centered">
                        <p>{{ content.name }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    categoryContent: Array,
    contentType: {
        type: String,
        default: '',
    },
})
</script>
