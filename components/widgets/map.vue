<template>
    <div v-if="safeMapLink" class="map-widget">
        <iframe :src="safeMapLink"
                class="iframe-map"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script setup>
import {sanitizeMapEmbedUrl} from '~/utils/sanitize-map-url.mjs';

const props = defineProps({
    mapLink: {
        type: String,
        default: '',
    }
})

const safeMapLink = computed(() => sanitizeMapEmbedUrl(props.mapLink));
</script>
