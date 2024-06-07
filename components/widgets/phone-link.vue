<template>
  <a class="phone-link" :href="`tel:${phone}`">{{ phone }}</a>
</template>

<script setup>
defineProps({
    phone: {
        type: String,
    }
});
</script>
