<template>
  <a class="phone-link" :href="`tel:${phone}`" v-html="phone"></a>
</template>

<script setup>
defineProps({
    phone: {
        type: String,
    }
});
</script>
