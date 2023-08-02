<template>
    <section class="main-promo__section section-content">
        <div class="container-content">
            <Swiper
                class="slider"
                v-bind="swiperOptions"
                @swiper="setSwiperInstance"
            >
                <SwiperSlide
                    v-for="item in sliderItems"
                    :key="item.id"
                    class="slider__item"
                >
                    <CardItem
                        :icon="item.icon"
                        :text="item.text"
                        path="main-slider"
                    />
                </SwiperSlide>
            </Swiper>

            <div
                class="slider__pagination"
                data-promo-pagination
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainSliderSection',
};
</script>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import CardItem from '@/components/items/CardItem/index.vue';
import { swiperOptions } from '@/constants/swiper-option';
import { sliderItems } from '@/constants/mock-data';

const swiper = ref(null);

const setSwiperInstance = swiperInstance => {
    swiper.value = swiperInstance;
};
</script>

<style src="./styles.scss" lang="scss" scoped />
