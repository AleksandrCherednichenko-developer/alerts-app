<template>
    <header class="header">
        <div class="header__inner container-content">
            <UILogo />
            <BurgerButton @click="router.push({ name: ROUTE_NAMES.POSTS_PAGE.routeName })" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import UILogo from '@/components/ui/UILogo/index.vue';
import BurgerButton from '@/components/ui/buttons/BurgerButton/index.vue';
import { ROUTE_NAMES } from '@/router/routes-name';

const router = useRouter();
</script>

<style src="./styles.scss" lang="scss" scoped />
