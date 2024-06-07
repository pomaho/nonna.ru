
<template>
    <div class="address-container">
        <ul>
            <li v-for="(address, index) in contacts.addresses">
                <h4 v-html="$t(address.city)"></h4>
                <p v-html="$t(address.address)"></p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import contacts from '~/data/contacts.json';
</script>
