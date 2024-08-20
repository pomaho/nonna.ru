<template>
    <section class="footer">
        <div class="container">
            <h2>{{$t('menu-item-contacts')}}</h2>
            <div class="row">
                <div class="footer-column col-xl-6 col-lg-6 col-12">
                    <MediaLogo/>

                    <div class="footer-social">
                        <WidgetsSocialIcons />
                    </div>
                </div>
                <div class="footer-column col-xl-6 col-lg-6 col-12">
                    <div class="contact-icon phone-contact-icon"></div>
                    <WidgetsAddress />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
</script>
