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
                        format="svg"
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
import { Grid, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import UIRowShadow from '@/components/ui/UIRowShadow/index.vue';
import CardItem from '@/components/items/CardItem/index.vue';

const swiper = ref(null);
const swiperOptions = {
    // slidesPerView: 3,
    // grid: { rows: 2 },

    grid: {
        rows: 2,
        fill: 'row',
    },
    slidesPerView: 3,

    spaceBetween: 16,
    modules: [Pagination, Grid],
    pagination: {
        el: '[data-promo-pagination]',
        bulletClass: 'slider__pagination-item',
        bulletActiveClass: 'slider__pagination-item--active',
        // clickable: false,
    },
    // autoplay: {
    //     delay: 9000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
    // loop: true,
    // touchReleaseOnEdges: true,
};

const setSwiperInstance = swiperInstance => {
    swiper.value = swiperInstance;
};

const sliderItems = [
    {
        id: 1,
        'content-icon': false,
        text: {
            'text-1': 'Trusted by',
            'text-2': '16',
            'text-3': 'dealers',
        },
    },
    {
        id: 2,
        'content-icon': true,
        icon: 'slide-1',
    },
    {
        id: 3,
        'content-icon': true,
        icon: 'slide-2',
    },
    {
        id: 4,
        'content-icon': true,
        icon: 'slide-3',
    },
    {
        id: 5,
        'content-icon': true,
        icon: 'slide-4',
    },
    {
        id: 6,
        'content-icon': true,
        icon: 'slide-5',
    },
    {
        id: 7,
        'content-icon': false,
        text: {
            'text-1': 'Trusted by',
            'text-2': '16',
            'text-3': 'dealers',
        },
    },
    {
        id: 8,
        'content-icon': true,
        icon: 'slide-1',
    },
    {
        id: 9,
        'content-icon': true,
        icon: 'slide-2',
    },
    {
        id: 10,
        'content-icon': true,
        icon: 'slide-3',
    },
    {
        id: 11,
        'content-icon': true,
        icon: 'slide-4',
    },
    {
        id: 12,
        'content-icon': true,
        icon: 'slide-5',
    },
    {
        id: 7,
        'content-icon': false,
        text: {
            'text-1': 'Trusted by',
            'text-2': '16',
            'text-3': 'dealers',
        },
    },
    {
        id: 8,
        'content-icon': true,
        icon: 'slide-1',
    },
    {
        id: 9,
        'content-icon': true,
        icon: 'slide-2',
    },
    {
        id: 10,
        'content-icon': true,
        icon: 'slide-3',
    },
    {
        id: 11,
        'content-icon': true,
        icon: 'slide-4',
    },
    {
        id: 12,
        'content-icon': true,
        icon: 'slide-5',
    },
];
</script>

<style src="./styles.scss" lang="scss" scoped />
