<script setup lang="ts">
const policySections = [
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
];

const {t} = useI18n();
const description = t('policy-page-description');

useHead({
    titleTemplate: `%s - ${t('policy-conf')}`,
    meta: [
        {name: 'description', content: description},
        {name: 'description', content: description},
        {name: 'og:description', content: description},
        {name: 'twitter:description', content: description},
        {name: 'og:title', content: description}
    ]
});
</script>

<template>
    <div class="privacy-policy-page">
        <SectionsIntro
            :title="$t('policy-page-title')"
            :text="$t('policy-page-text')"
            :background="`contacts/section-1-bg.jpeg`"
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
