<template>
    <section class="contacts-map">
        <div class="container">
            <iframe :src="mapLink"
                    class="iframe-map"
                    style="border:0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
</template>

<script setup>
defineProps({
    mapLink: {
        type: String,
        default: '',
    }
})
</script>
