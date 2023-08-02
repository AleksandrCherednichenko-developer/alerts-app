<template>
    <section class="section-content product__list">
        <div v-for="(itemRow,index) in productItems" :key="index" class="product__list-row">
            <CardItem
                v-for="(item, indexItem) in itemRow"
                :key="indexItem"
                :icon="item"
                path="product-items"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductSection',
};
</script>

<script setup>
import { ref } from 'vue';
import CardItem from '@/components/items/CardItem/index.vue';
import { mockArrItems, splitArrayToRows } from '@/plugins/helpers';

const productItems = ref(splitArrayToRows(mockArrItems));
</script>

<style src="./styles.scss" lang="scss" scoped />
