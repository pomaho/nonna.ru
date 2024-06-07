<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">Коллекции</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">На заказ
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">О нас</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">Проекты
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">Новости
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">Трейлер
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="'/'" class="nav-link" aria-current="page">Контакты
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
const { $bs } = useNuxtApp();

onMounted(() => {
    try {
        const collapse = new $bs.Collapse('#navbarSupportedContent');
        collapse.show();
        const collapse1 = new $bs.Collapse('#navbarNav');
        collapse1.show();
    } catch (e) {
        console.log('Bootstrap error: ', e);
    }
});
</script>
