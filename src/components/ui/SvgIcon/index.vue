<template>
    <component
        :is="svgIcon"
        :key="props.name"
        :aria-label="`icon-${props.name}`"
        class="icon-svg"
        :class="`icon-${props.name}`"
    />
</template>

<script>
export default {
    name: 'SvgIcon',
};
</script>

<script setup>
import { ref, defineProps, onMounted, watchEffect, computed } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    pathToIcon: { type: String, default: '' },
});

const iconName = computed(() => props.name ?? 'no-image');
const svgIcon = ref(null);

const getIcon = async () => {
    if (!props.name) return;

    const data = !props.pathToIcon
        ? import(`../../../assets/icons/${iconName.value}.svg`)
        : import(`../../../assets/icons/${props.pathToIcon}/${iconName.value}.svg`);

    svgIcon.value = await data;
};

onMounted(() => {
    watchEffect(() => {
        getIcon();
    });
});
</script>

<style src="./styles.scss" lang="scss" scoped />
