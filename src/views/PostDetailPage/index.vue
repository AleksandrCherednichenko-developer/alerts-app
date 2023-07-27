<template>
    <section class="section-content container-content">
        <UILoader v-if="loaderSore.loading" />
        <div v-else class="post__page">
            <div class="post__page-info">
                <p>Post: {{ postsStore.postInfo.id }}</p>
                <p>Author: {{ postsStore.postInfo.userId }}</p>
            </div>
            <BaseInput v-model="postsStore.postInfo.title" class="post__page-input" label-text="Post title:" />
            <BaseInput v-model="postsStore.postInfo.body" class="post__page-input" label-text="Post text:" />
            <div class="post__page-buttons">
                <SimpleButton
                    text="Delete"
                    icon-name="delete"
                    css-modifier="delete"
                    @click="deletePost"
                />
                <SimpleButton
                    text="Save"
                    icon-name="save"
                    css-modifier="save"
                    @click="saveChanged"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PostDetailPage',
};
</script>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import UILoader from '@/components/ui/UILoader/index.vue';
import { useLoaderStore } from '@/stores/loader-store';
import { usePostsStore } from '@/stores/posts-store';
import BaseInput from '@/components/ui/inputs/BaseInput/index.vue';
import SimpleButton from '@/components/ui/buttons/SimpleButton/index.vue';
import { ROUTE_NAMES } from '@/router/routes-name';

const route = useRoute();
const router = useRouter();
const loaderSore = useLoaderStore();
const postsStore = usePostsStore();

const deletePost = async () => {
    const resp = await postsStore.deletePost(route.params.id);
    if (resp) return router.push({ name: ROUTE_NAMES.POSTS_PAGE.routeName });
};

const saveChanged = () => {
    postsStore.changePostInfo(route.params.id, { title: postsStore.postInfo.title, body: postsStore.postInfo.body });
};

onMounted(() => {
    postsStore.getPostById(route.params.id);
});
</script>

<style src="./styles.scss" lang="scss" scoped />
