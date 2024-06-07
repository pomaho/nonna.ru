
<template>
    <div class="address-container">
        <ul>
            <li v-for="(address, index) in contacts.addresses">
                <h4 v-html="address.city"></h4>
                <p v-html="address.address"></p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import contacts from '~/data/contacts.json';
</script>
