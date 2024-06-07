<template>
    <section class="footer">
        <div class="container">
            <h2>Контакты</h2>
            <div class="row">
                <div class="footer-column col-xl-6 col-lg-6 col-12">
                    <img class="footer-logo" src="/images/eurohome_logo.png" alt="Eurohome logo">
                    <p class="footer-text"> Мы - это команда лучших специалистов!<br/>
                        Вы - это наши любимые партнеры и клиенты!<br/>
                        Спасибо, что выбираете нас.</p>

                    <div class="footer-social">
                        <WidgetsSocialIcons />
                        <nuxt-link :to="'/'" class="conf-policy nav-link" aria-current="page">Политика конфидециальности</nuxt-link>
                    </div>
                </div>
                <div class="footer-column col-xl-6 col-lg-6 col-12">
                    <div class="contact-icon phone-contact-icon"></div>
                    <WidgetsPhoneLink :phone="contacts.phone"/>
                    <WidgetsAddress />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import contacts from '~/data/contacts.json';
</script>
