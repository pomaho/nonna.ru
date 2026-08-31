<script setup lang="ts">
const policySectionsByLocale = {
    ru: [
        {
            title: '1. Общие положения',
            items: [
                '1.1. Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей сайта https://nonna.design.',
                '1.2. Оператором Сайта является ООО "ПРОФИ Т", ИНН 7811628286, КПП 781101001, ОГРН 1167847439154, дата образования — 15.11.2016, юридический адрес: 192012, г. Санкт-Петербург, вн. тер. г. Муниципальный Округ Рыбацкое, пр-кт Обуховской Обороны, д. 271, литера А, помещ. 228. Генеральный директор — Югай Альбина Ильгиновна.',
                '1.3. Используя Сайт, вы соглашаетесь с условиями данной Политики. Если вы не согласны с условиями Политики, пожалуйста, не используйте наш Сайт.',
            ],
        },
        {
            title: '2. Персональные данные',
            items: [
                '2.1. Мы собираем и обрабатываем следующие персональные данные: имя, электронная почта, номер телефона, а также другие данные, которые вы предоставляете нам добровольно.',
                '2.2. Персональные данные обрабатываются в следующих целях: для предоставления услуг, запрашиваемых пользователем, для связи с пользователем и для улучшения качества наших услуг.',
            ],
        },
        {
            title: '3. Защита персональных данных',
            items: [
                '3.1. Мы принимаем все необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.',
                '3.2. Доступ к персональным данным имеют только уполномоченные лица, которые обязаны соблюдать конфиденциальность.',
            ],
        },
        {
            title: '4. Использование файлов cookie',
            items: [
                '4.1. Сайт может использовать файлы cookie для улучшения работы и повышения удобства использования.',
                '4.2. Вы можете настроить ваш браузер на отказ от использования файлов cookie, однако это может повлиять на функциональность Сайта.',
            ],
        },
        {
            title: '5. Передача данных третьим лицам',
            items: [
                '5.1. Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством.',
            ],
        },
        {
            title: '6. Изменения в Политике',
            items: [
                '6.1. Мы оставляем за собой право вносить изменения в данную Политику. Все изменения будут опубликованы на этой странице.',
                '6.2. Рекомендуем регулярно проверять Политику на предмет изменений.',
            ],
        },
        {
            title: '7. Контактная информация',
            items: [
                '7.1. Если у вас есть вопросы или предложения по поводу данной Политики, пожалуйста, свяжитесь с нами по электронной почте: egorova@evropoly-home.com.',
            ],
        },
        {
            title: '8. Заключительные положения',
            items: [
                '8.1. Настоящее Пользовательское соглашение вступает в силу с момента его опубликования на Сайте и действует до тех пор, пока не будет отменено.',
                '8.2. Используя Сайт, вы подтверждаете, что ознакомлены с условиями данного соглашения и принимаете их.',
            ],
        },
    ],
    en: [
        {
            title: '1. General Provisions',
            items: [
                '1.1. This Privacy Policy governs the procedure for processing and protecting personal data of users of the website https://nonna.design.',
                '1.2. The website operator is LLC "PROFI T", TIN 7811628286, KPP 781101001, OGRN 1167847439154, established on November 15, 2016, registered address: Premises 228, Litera A, 271 Obukhovskoy Oborony Ave., Municipal District Rybatskoye, Saint Petersburg, 192012, Russian Federation. General Director: Albina Ilginovna Yugay.',
                '1.3. By using the Website, you agree to the terms of this Policy. If you do not agree with the terms of the Policy, please do not use the Website.',
            ],
        },
        {
            title: '2. Personal Data',
            items: [
                '2.1. We collect and process the following personal data: name, email address, phone number, and any other data that you voluntarily provide to us.',
                '2.2. Personal data is processed for the following purposes: to provide services requested by the user, to communicate with the user, and to improve the quality of our services.',
            ],
        },
        {
            title: '3. Personal Data Protection',
            items: [
                '3.1. We take all necessary measures to protect personal data from unauthorized access, modification, disclosure, or destruction.',
                '3.2. Only authorized persons who are obliged to maintain confidentiality have access to personal data.',
            ],
        },
        {
            title: '4. Use of Cookies',
            items: [
                '4.1. The Website may use cookies to improve performance and enhance user convenience.',
                '4.2. You may configure your browser to refuse cookies; however, this may affect the functionality of the Website.',
            ],
        },
        {
            title: '5. Transfer of Data to Third Parties',
            items: [
                '5.1. We do not transfer your personal data to third parties without your consent, except in cases provided for by law.',
            ],
        },
        {
            title: '6. Changes to the Policy',
            items: [
                '6.1. We reserve the right to amend this Policy. All changes will be published on this page.',
                '6.2. We recommend that you regularly review this Policy for updates.',
            ],
        },
        {
            title: '7. Contact Information',
            items: [
                '7.1. If you have any questions or suggestions regarding this Policy, please contact us by email at: egorova@evropoly-home.com.',
            ],
        },
        {
            title: '8. Final Provisions',
            items: [
                '8.1. This User Agreement comes into force from the moment it is published on the Website and remains valid until revoked.',
                '8.2. By using the Website, you confirm that you have read the terms of this agreement and accept them.',
            ],
        },
    ],
} as const;

const {t, locale} = useI18n();
const policySections = computed(() => policySectionsByLocale[locale.value as 'ru' | 'en'] || policySectionsByLocale.ru);
useHead(() => {
    const description = t('policy-page-description');
    return {
        titleTemplate: `%s - ${t('policy-conf')}`,
        meta: [
            {name: 'description', content: description},
            {name: 'og:description', content: description},
            {name: 'twitter:description', content: description},
            {name: 'og:title', content: description}
        ]
    };
});
</script>

<template>
    <div class="privacy-policy-page">
        <SectionsIntro
            :title="$t('policy-page-title')"
            :text="$t('policy-page-text')"
            :background="`contacts/section-1-bg.webp`"
            :with-header="true"
        />

        <section class="privacy-policy-content">
            <div class="container">
                <div class="privacy-policy-card">
                    <p class="privacy-policy-lead">
                        {{ $t('policy-conf') }}
                    </p>

                    <div
                        v-for="(section, index) in policySections"
                        :key="index"
                        class="privacy-policy-section"
                    >
                        <h2>{{ section.title }}</h2>
                        <p
                            v-for="(item, itemIndex) in section.items"
                            :key="itemIndex"
                        >
                            {{ item }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.privacy-policy-content {
    background: linear-gradient(180deg, #ede7dd 0%, #f7f3ed 100%);
    color: #1d1d1d;
    padding: 100px 0;
}

.privacy-policy-card {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(29, 29, 29, 0.08);
    box-shadow: 0 30px 80px rgba(29, 29, 29, 0.08);
    padding: 56px;
}

.privacy-policy-lead {
    border-bottom: 1px solid rgba(29, 29, 29, 0.12);
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 32px;
    padding-bottom: 24px;
}

.privacy-policy-section + .privacy-policy-section {
    margin-top: 32px;
}

.privacy-policy-section h2 {
    font-size: 28px;
    margin-bottom: 16px;
}

.privacy-policy-section p {
    color: rgba(29, 29, 29, 0.82);
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 14px;
}

@media (max-width: 767.98px) {
    .privacy-policy-content {
        padding: 60px 0;
    }

    .privacy-policy-card {
        padding: 28px 20px;
    }

    .privacy-policy-lead {
        font-size: 18px;
    }

    .privacy-policy-section h2 {
        font-size: 22px;
    }

    .privacy-policy-section p {
        font-size: 16px;
    }
}
</style>
