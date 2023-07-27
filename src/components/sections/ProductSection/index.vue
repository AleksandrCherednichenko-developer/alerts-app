<template>
    <section class="section-content product__list">
        <div v-for="(itemRow,index) in productItems" :key="index" class="product__list-row">
            <CardItem
                v-for="(item, indexItem) in itemRow"
                :key="indexItem"
                :icon="item"
                path="product-items"
                format="png"
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

// const arrItems = Array.from({ length: 5 }, (_, i) => `image-${i + 1}.png`);// использовал бы этот код если были бы все изображения
const arrItems = Array.from({ length: 26 }, (_, i) => `image${(i % 5) + 1}`);
function splitArray (array) {
    const firstPartLength = Math.floor(array.length / 3) - 1;
    const secondPartLength = firstPartLength + 1;
    const thirdPartLength = firstPartLength;
    const firstPart = array.slice(0, firstPartLength);
    const secondPart = array.slice(firstPartLength, firstPartLength + secondPartLength);
    const thirdPart = array.slice(firstPartLength + secondPartLength, firstPartLength + secondPartLength + thirdPartLength);
    return [firstPart, secondPart, thirdPart];
}
const productItems = ref(splitArray(arrItems));
</script>

<style src="./styles.scss" lang="scss" scoped />
