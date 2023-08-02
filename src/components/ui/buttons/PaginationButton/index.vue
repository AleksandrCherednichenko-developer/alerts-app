<template>
    <button class="pagination-button">
        <span
            v-if="!props.doubleIcon"
            class="pagination-button__icon"
            :data-state="props.isDisabled ? 'disabled' : ''"
            :class="[ props.left ? 'left' : 'right' ]"
        >
            <i /><i />
        </span>

        <span
            v-else
            class="pagination-button__icon pagination-button__icon--double-icon"
            :class="[ props.left ? 'left' : 'right' ]"
        >
            <i /><i /><i />
        </span>
    </button>
</template>

<script>
export default {
    name: 'PaginationButton',
};
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isDisabled: { type: Boolean },
    left: { type: Boolean },
    doubleIcon: { type: Boolean },
});

</script>

<style src='./styles.scss' lang='scss' scoped />
