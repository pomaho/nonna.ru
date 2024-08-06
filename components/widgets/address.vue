<script setup>
const {locale} = useI18n();
const fetchParams = {
    headers: {
        authorization: 'Bearer ' + useRuntimeConfig().public.bearerToken,
    },
    transform: (response) => response.data
};

const {data: contacts} = await useFetch(`${useRuntimeConfig().public.apiBase}/contacts?locale=${locale.value}&populate=*`, fetchParams);

</script>

<template>
    <div class="address-container">
        <ul>
            <li v-for="(contact, index) in contacts">
                <h4 v-html="contact.address"></h4>
                <WidgetsPhoneLink :phone="contact.phone"/>
            </li>
        </ul>
    </div>
</template>
