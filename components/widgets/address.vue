<script setup>
const {locale} = useI18n();
const {
    data: contacts,
    error,
    refresh,
} = await useFetch('/api/contacts', {
    query: computed(() => ({
        locale: locale.value,
        populate: '*',
    })),
    default: () => [],
});

onMounted(() => {
    if (!contacts.value?.length || error.value) {
        refresh();
    }
});

</script>

<template>
    <div class="address-container">
        <ul>
            <li v-for="(contact, index) in contacts" :key="index">
                <h4 v-html="contact.address"></h4>
                <WidgetsPhoneLink :phone="contact.phone"/>
            </li>
        </ul>
    </div>
</template>
