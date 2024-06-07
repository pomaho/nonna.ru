
<template>
    <div class="social-icons">
        <ul>
            <li v-for="(social, index) in Object.keys(contacts.socials)">
                <a target="_blank" :href="contacts.socials[social]">
                    <div :class="'contact-icon ' + social + '-contact-icon'"></div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import contacts from '~/data/contacts.json';
</script>
