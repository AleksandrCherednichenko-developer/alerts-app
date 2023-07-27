import { ROUTE_NAMES } from '@/router/routes-name';

export const ROUTE_DEFINITIONS = {
    MAIN_PAGE: {
        path: '/',
        name: ROUTE_NAMES.MAIN_PAGE.routeName,
        component: () => import('@/views/MainPage/index.vue'),
    },
    POSTS_PAGE: {
        path: '/posts-list',
        name: ROUTE_NAMES.POSTS_PAGE.routeName,
        component: () => import('@/views/PostsPage/index.vue'),
    },
    POST_DETAIL_PAGE: {
        path: '/posts-list/:id',
        name: ROUTE_NAMES.POST_DETAIL_PAGE.routeName,
        component: () => import('@/views/PostDetailPage/index.vue'),
    },
};
