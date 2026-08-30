<script setup>
import {sanitizeCmsHtml} from '~/utils/sanitize-cms-html.mjs';

const {locale} = useI18n();
const contacts = ref([]);
const contactsSafe = computed(() => Array.isArray(contacts.value) ? contacts.value : []);

const loadContacts = async () => {
    try {
        const response = await $fetch(`${useRuntimeConfig().public.apiBase}/contacts`, {
            query: {
                locale: locale.value,
                populate: '*',
            },
        });

        contacts.value = response?.data?.map((contact) => contact?.attributes ?? contact) || [];
    } catch (error) {
        console.error(error);
        contacts.value = [];
    }
};

onMounted(loadContacts);
watch(locale, loadContacts);

</script>

<template>
    <div class="address-container">
        <ul>
            <li v-for="(contact, index) in contactsSafe" :key="index">
                <h4 v-html="sanitizeCmsHtml(contact.address)"></h4>
                <WidgetsPhoneLink :phone="contact.phone"/>
            </li>
        </ul>
    </div>
</template>
