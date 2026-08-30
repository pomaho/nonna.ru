<template>
  <a
    class="phone-link"
    :href="phoneHref"
    v-html="sanitizeCmsHtml(phone)"
  ></a>
</template>

<script setup>
import {cmsHtmlToPhone, sanitizeCmsHtml} from '~/utils/sanitize-cms-html.mjs';

const props = defineProps({
    phone: {
        type: String,
    }
});

const phoneHref = computed(() => {
    const phoneNumber = cmsHtmlToPhone(props.phone);
    return phoneNumber ? `tel:${phoneNumber}` : undefined;
});
</script>
