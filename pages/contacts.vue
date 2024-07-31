<template>
    <div class="contacts-page">
        <SectionsIntro
            :title="$t(`contacts-intro-section-title`)"
            :text="$t(`contacts-intro-section-text`)"
            :background="`contacts/section-1-bg.jpeg`"
            :with-header="true"
        />
        <SectionsContacts />
        <SectionsContactsMap />
    </div>
</template>

<script setup>
const description = 'Nonna - лучший паркет! Контакты';
useHead({
    titleTemplate: `%s - Контакты`,
    meta: [
        {name: 'description', content: description },
        {name: 'description', content: description},
        {name: 'og:description', content: description},
        {name: 'twitter:description', content: description},
        {name: 'og:title', content: description}
    ]
});

</script>
<style scoped>

</style>
