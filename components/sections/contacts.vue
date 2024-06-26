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
                        v-for="(contact, index) in contacts.addresses" :key="index">
                        <h3 class="heading">{{$t(contact.city)}}</h3>
                        <h3 class="heading">{{$t(contact.address)}}</h3>
                        <p class="text">{{$t(contact.workTime)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import contacts from '~/data/contacts.json';
</script>
