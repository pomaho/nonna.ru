<script setup>
const {locale} = useI18n();
const contacts = ref([]);
const contactsSafe = computed(() => Array.isArray(contacts.value) ? contacts.value : []);

onMounted(async () => {
    try {
        const response = await $fetch(`${useRuntimeConfig().public.apiBase}/contacts`, {
            query: {
                locale: locale.value,
                populate: '*',
            },
            headers: {
                authorization: `Bearer ${useRuntimeConfig().public.bearerToken}`,
            },
        });

        contacts.value = response?.data?.map((contact) => contact?.attributes ?? contact) || [];
    } catch (error) {
        console.error(error);
        contacts.value = [];
    }
});

</script>

<template>
    <div class="address-container">
        <ul>
            <li v-for="(contact, index) in contactsSafe" :key="index">
                <h4 v-html="contact.address"></h4>
                <WidgetsPhoneLink :phone="contact.phone"/>
            </li>
        </ul>
    </div>
</template>
