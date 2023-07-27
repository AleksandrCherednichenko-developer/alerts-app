<template>
    <button
        class="toggle__password-button"
        type="button"
        role="switch"
        aria-label="toggle-password"
        @click="toggle"
    >
        <SvgIcon
            v-show="value"
            name="eye"
            class="icon"
        />
        <SvgIcon
            v-show="!value"
            name="eye-closed"
            class="icon"
        />
    </button>
</template>

<script>
export default {
    name: 'PasswordToggle',
};
</script>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
    get () { return props.modelValue; },
    set (value) { emit('update:modelValue', value); },
});

const toggle = () => {
    value.value = !value.value;
};
</script>

<style src="./styles.scss" lang="scss" scoped />
