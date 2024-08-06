<template>
    <div class="map-widget">
        <iframe :src="mapLink"
                class="iframe-map"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script setup>
defineProps({
    mapLink: {
        type: String,
        default: '',
    }
})
</script>
