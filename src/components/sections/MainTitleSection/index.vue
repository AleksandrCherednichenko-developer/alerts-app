<template>
    <section class="main-title__section section-content" :class="cssModifier">
        <UIRowShadow
            v-if="hasShadow"
            :top="shadowTop"
            :bottom="shadowBottom"
            :left="shadowLeft"
            :right="shadowRight"
        />
        <div class="container-content">
            <h2 class="title text-title uppercase-text">
                {{ props.text }}
            </h2>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainTitleSection',
};
</script>

<script setup>
import UIRowShadow from '@/components/ui/UIRowShadow/index.vue';

const props = defineProps({
    text: { type: String, default: '' },
    hasShadow: { type: Boolean },
    shadowTop: { type: [String], default: 'auto' },
    shadowBottom: { type: [String], default: 'auto' },
    shadowLeft: { type: [String], default: 'auto' },
    shadowRight: { type: [String], default: 'auto' },
    cssModifier: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
