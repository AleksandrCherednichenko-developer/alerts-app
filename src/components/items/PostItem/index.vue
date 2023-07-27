<template>
    <router-link :to="{ name: ROUTE_NAMES.POST_DETAIL_PAGE.routeName, params: { id: props.id }}">
        <div class="post__item">
            <div class="post__item-info">
                <p>Post: {{ props.id }}</p>
                <p>Author: {{ props.userId }}</p>
            </div>
            <h6 class="title post__item-title text-ellipsis">
                Title: {{ props.title }}
            </h6>
            <div class="post__item-text">
                <p class="uppercase-first-symbol">
                    {{ props.body }}
                </p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'PostItem',
};
</script>

<script setup>
import { ROUTE_NAMES } from '@/router/routes-name';

const props = defineProps({
    id: { type: [Number, String], default: 0 },
    userId: { type: [Number, String], default: 0 },
    title: { type: String, default: '' },
    body: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
