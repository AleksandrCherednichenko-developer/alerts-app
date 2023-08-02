<template>
    <div class="posts__list-wrapper">
        <div class="posts__list">
            <PostItem v-for="item in items" :key="item.id" v-bind="item" />
        </div>
        <UIPagination
            v-show="items.length"
            :offset="offset"
            :limit="limit"
            :pages-count="pages"
            @update-offset="onUpdateOffset"
            @update-limit="onUpdateLimit"
        />
    </div>
</template>

<script>
export default {
    name: 'PostsList',
};
</script>

<script setup>
import { computed, onMounted, ref } from 'vue';
import UIPagination from '@/components/ui/UIPagination/index.vue';
import PostItem from '@/components/items/PostItem/index.vue';
import { usePostsStore } from '@/stores/posts-store';
import { defaultLimit, defaultOffset } from '@/constants/default-variables';

const postsStore = usePostsStore();
const offset = ref(defaultOffset);
const limit = ref(defaultLimit);
const items = computed(() => postsStore.postsList.slice(offset.value * limit.value, (offset.value * limit.value) + limit.value));
const pages = computed(() => Math.ceil(postsStore.totalValue / limit.value));

const onUpdateOffset = value => {
    offset.value = value;
};

const onUpdateLimit = value => {
    limit.value = value;
};

onMounted(() => {
    postsStore.getPostsList();
});
</script>

<style src="./styles.scss" lang="scss" scoped />
