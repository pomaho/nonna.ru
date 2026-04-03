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
                        v-for="(contact, index) in contacts" :key="index">
                        <h3 class="heading" v-html="contact.address"></h3>
                        <h4 class="sub-heading" v-html="contact.sub_address"></h4>
                        <p class="text" v-html="contact.work_time"></p>
                        <WidgetsPhoneLink :phone="contact.phone"/>
                        <WidgetsMap :mapLink="contact.map_link"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
