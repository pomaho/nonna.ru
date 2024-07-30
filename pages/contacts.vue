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

<script setup lang="ts">
</script>

<style scoped>

</style>
