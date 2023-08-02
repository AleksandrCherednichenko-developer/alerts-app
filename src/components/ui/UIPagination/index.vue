<template>
    <div class="pagination__wrapper">
        <div class="pagination__buttons">
            <PaginationButton
                v-if="!(firstPageSelected)"
                left
                double-icon
                aria-label="first page"
                @click="goToFirstPage"
            />
            <PaginationButton
                :is-disabled="firstPageSelected"
                left
                aria-label="previous page"
                @click="goToPrevPage"
            />
        </div>

        <form class="pagination__pages" @submit.prevent="updateOffset(inputValue)">
            <BaseInput
                :model-value="inputValue"
                input-number
                integer-number
                class="pagination__pages-input"
                @update:model-value="(val)=>inputValue=val"
            />
            <span class="pagination__pages-divider">/</span>
            <span class="pagination__pages-count">{{ props.pagesCount }}</span>
        </form>

        <Multiselect
            v-model="limit"
            :options="defaultLimits"
            class="pagination__select"
            :searchable="false"
            clear-on-select
            :allow-empty="false"
            :show-labels="false"
            @select="updateLimit"
        />

        <div class="pagination__buttons">
            <PaginationButton
                :is-disabled="lastPageSelected"
                aria-label="next page"
                @click="goToNextPage"
            />
            <PaginationButton
                v-if="!(lastPageSelected)"
                aria-label="last page"
                double-icon
                @click="goToLastPage"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'UIPagination',
};
</script>

<script setup>
import { computed, ref } from 'vue';
import Multiselect from 'vue-multiselect';
import PaginationButton from '@/components/ui/buttons/PaginationButton/index.vue';
import BaseInput from '@/components/ui/inputs/BaseInput/index.vue';
import { defaultLimit, defaultLimits, defaultOffset } from '@/constants/default-variables';

const props = defineProps({
    offset: { type: Number, default: defaultOffset },
    limit: { type: Number, default: defaultLimit },
    pagesCount: { type: Number, default: 0 },
});

const offset = ref(props.offset);
const limit = ref(props.limit);
const inputValue = ref(offset.value + 1);
const firstPageSelected = computed(() => offset.value === 0);
const lastPageSelected = computed(() => (offset.value === props.pagesCount - 1) || (props.pagesCount === 0));

const emit = defineEmits(['update-offset', 'update-limit']);

const updateOffset = (val = null) => {
    if (val !== null) {
        offset.value = Math.min(val - 1, props.pagesCount - 1);
    }
    inputValue.value = offset.value + 1;
    offset.value = Math.max(0, Math.min(offset.value, props.pagesCount - 1));
    emit('update-offset', offset.value);
};

const updateLimit = value => {
    offset.value = 0;
    emit('update-limit', value);
};

const goToNextPage = () => {
    if (offset.value === props.pagesCount - 1) return;
    offset.value += 1;
    updateOffset();
};

const goToPrevPage = () => {
    if (offset.value === 0) return;
    offset.value -= 1;
    updateOffset();
};

const goToFirstPage = () => {
    offset.value = 0;
    updateOffset();
};

const goToLastPage = () => {
    offset.value = props.pagesCount - 1;
    updateOffset();
};
</script>

<style src="./styles.scss" lang="scss" scoped />
