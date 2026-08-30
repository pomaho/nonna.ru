<template>
    <div class="contacts-page">
        <SectionsIntro
            :title="$t(`contacts-intro-section-title`)"
            :text="$t(`contacts-intro-section-text`)"
            :background="`contacts/section-1-bg.jpeg`"
            :with-header="true"
        />
        <SectionsContacts />
    </div>
</template>

<script setup>
const {t} = useI18n();
useHead(() => {
    const description = t('seo-page-description');
    return {
        titleTemplate: `%s - ${t('menu-item-contacts')}`,
        meta: [
            {name: 'description', content: description},
            {name: 'og:description', content: description},
            {name: 'twitter:description', content: description},
            {name: 'og:title', content: description}
        ]
    };
});

</script>
<style scoped>

</style>
