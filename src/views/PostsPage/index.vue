<template>
    <section class="section-content">
        <UILoader v-if="loaderSore.loading" />
        <div class="container-content">
            <PostsList />
        </div>
    </section>
</template>

<script>
export default {
    name: 'PostsPage',
};
</script>

<script setup>
import { useLoaderStore } from '@/stores/loader-store';
import UILoader from '@/components/ui/UILoader/index.vue';
import PostsList from '@/components/lists/PostsList/index.vue';

const loaderSore = useLoaderStore();
</script>
