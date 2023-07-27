<template>
    <button
        type="submit"
        :disabled="props.disabled"
        :class="['button-submit', 'uppercase-text', {'button-load-shadow':props.disabled}] "
    >
        Create account
    </button>
</template>

<script>
export default {
    name: 'SubmitButton',
};
</script>

<script setup>
const props = defineProps({
    disabled: { type: Boolean },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
