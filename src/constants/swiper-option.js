import { Autoplay, Grid, Pagination } from 'swiper';

export const swiperOptions = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 2,
        fill: 'row',
    },
    spaceBetween: 16,
    modules: [Pagination, Grid, Autoplay],
    pagination: {
        el: '[data-promo-pagination]',
        bulletClass: 'slider__pagination-item',
        bulletActiveClass: 'slider__pagination-item--active',
    },
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    touchReleaseOnEdges: true,
};
