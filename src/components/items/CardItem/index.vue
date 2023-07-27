<template>
    <div class="card__item" :style="{ backgroundImage: image ? `url(${image})` : null }">
        <div v-if="props.text" class="card__item-text">
            <p v-for="(item, index) in props.text" :key="index" class="uppercase-text">
                {{ item }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardItem',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    icon: { type: String, default: '' },
    path: { type: String, default: '' },
    format: { type: String, default: '' },
    text: { type: Object, default: () => ({}) },
});

const image = computed(() => {
    if (!props.icon) return null;
    return `/public/${props.path}/${props.icon}.${props.format}`;
});
</script>

<style src="./styles.scss" lang="scss" scoped />
