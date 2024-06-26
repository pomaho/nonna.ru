<template>
    <section
        class="two-columns"
        :class="{
            rtl: rtl
        }"
    >
        <div class="container">
            <div class="row">
                <div class="column-1 col-lg-4 col-12">
                    <img class="main-image" :src="image" alt="">
                </div>
                <div class="column-2 col-lg-8 col-12">
                    <h2 class="heading">{{$t(description.heading)}}</h2>
                    <p class="text">{{$t(description.text)}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        required: true,
        default: '',
    },
    description: {
        type: Object,
        required: true,
        default: {},
    },
    rtl: {
        type: Boolean,
        default: false,
    },
});
</script>
