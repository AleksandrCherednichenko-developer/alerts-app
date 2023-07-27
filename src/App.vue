<template>
    <UIHeader />
    <router-view />
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue';
import throttle from 'lodash.throttle';
import { useBreakpoints } from '@/composables/breakpoints';
import UIHeader from '@/components/ui/UIHeader/index.vue';

const breakpoints = useBreakpoints();
const windowWidth = ref(window.innerWidth);
provide('windowWidth', windowWidth);
const windowHeight = ref(window.innerHeight);
provide('windowHeight', windowHeight);

const isXl = computed(() => windowWidth.value < breakpoints.horizontal.xl);
const isLg = computed(() => windowWidth.value < breakpoints.horizontal.lg);
const isMd = computed(() => windowWidth.value < breakpoints.horizontal.md);
const isSm = computed(() => windowWidth.value < breakpoints.horizontal.sm);
const isXs = computed(() => windowWidth.value < breakpoints.horizontal.xs);

const isHXl = computed(() => windowHeight.value < breakpoints.vertical.xl);
const isHLg = computed(() => windowHeight.value < breakpoints.vertical.lg);
const isHMd = computed(() => windowHeight.value < breakpoints.vertical.md);
const isHSm = computed(() => windowHeight.value < breakpoints.vertical.sm);
const isHXs = computed(() => windowHeight.value < breakpoints.vertical.xs);

const breakpointHorizontal = computed(() => {
    return Object.entries(breakpoints.horizontal).reverse().find(([_, value]) => windowWidth.value < value)?.[0] ?? 'default';
});

provide('isXl', isXl);
provide('isLg', isLg);
provide('isMd', isMd);
provide('isSm', isSm);
provide('isXs', isXs);

provide('isHXl', isHXl);
provide('isHLg', isHLg);
provide('isHMd', isHMd);
provide('isHSm', isHSm);
provide('isHXs', isHXs);

provide('breakpointHorizontal', breakpointHorizontal);

const setCssVars = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

const onResize = throttle(() => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
    setCssVars();
}, 500);

onMounted(async () => {
    setCssVars();
    window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
});
</script>

<style scoped>

</style>
