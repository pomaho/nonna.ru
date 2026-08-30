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
    <section
        class="two-columns"
    >
        <div class="container">
            <div class="row">
                <div class="column-1 col-lg-4 col-12">
                    <img class="main-image" src="/images/contacts/contact-image.png" alt="">
                </div>
                <div class="column-2 col-lg-8 col-12">
                    <div
                        class="contacts-container"
                        :class="{
                            first: index === 0,
                        }"
                        v-for="(contact, index) in contactsSafe" :key="index">
                        <h3 class="heading" v-html="sanitizeCmsHtml(contact.address)"></h3>
                        <h4 class="sub-heading" v-html="sanitizeCmsHtml(contact.sub_address)"></h4>
                        <p class="text" v-html="sanitizeCmsHtml(contact.work_time)"></p>
                        <WidgetsPhoneLink :phone="contact.phone"/>
                        <WidgetsMap :mapLink="contact.map_link"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
