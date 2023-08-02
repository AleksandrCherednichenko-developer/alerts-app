import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from '@/router/routes-name';

export const useLoaderStore = defineStore('loader', () => {
    const router = useRouter();
    const loading = ref(false);

    const startLoad = () => {
        loading.value = true;
    };

    const stopLoad = () => {
        loading.value = false;
    };

    const redirectInMain = () => {
        router.push({ name: ROUTE_NAMES.MAIN_PAGE.routeName });
    };

    return {
        loading,
        startLoad,
        stopLoad,
        redirectInMain,
    };
});
