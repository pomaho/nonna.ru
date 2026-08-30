<script setup>
import {sanitizeCmsHtml} from '~/utils/sanitize-cms-html.mjs';

const {locale} = useI18n();
const fetchParams = {
    transform: (response) => response.data
};

const {data: contacts} = await useFetch(`${useRuntimeConfig().public.apiBase}/contacts?locale=${locale.value}&populate=*`, fetchParams);

</script>

<template>
    <div class="address-container">
        <ul>
            <li v-for="(address, index) in contacts">
                <h4 v-html="sanitizeCmsHtml(address.address)"></h4>
            </li>
        </ul>
    </div>
</template>
