<template>
    <span class="row-shadow" :style="positionStyle" />
</template>

<script>
export default {
    name: 'UIRowShadow',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    top: { type: [String], default: 'auto' },
    bottom: { type: [String], default: 'auto' },
    right: { type: [String], default: 'auto' },
    left: { type: [String], default: 'auto' },
});

const positionStyle = computed(() => {
    return `
    top:${props.top};
    bottom:${props.bottom};
    left:${props.left};
    right:${props.right};
    `;
});
</script>

<style src="./styles.scss" lang="scss" scoped />
