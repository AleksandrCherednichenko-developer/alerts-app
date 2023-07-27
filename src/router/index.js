import { createRouter, createWebHashHistory } from 'vue-router';
import { ROUTE_DEFINITIONS } from '@/router/router-defenition';

const routes = [
    ROUTE_DEFINITIONS.MAIN_PAGE,
    ROUTE_DEFINITIONS.POSTS_PAGE,
    ROUTE_DEFINITIONS.POST_DETAIL_PAGE,
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior (to) {
        return to.hash ? { el: to.hash } : { top: 0 };
    },
});

router.onError(error => {
    if (error.message.includes('Failed to fetch dynamically imported module')) {
        window.location = '/';
    }
});

export default router;
