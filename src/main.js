import '@/assets/styles/main.scss';

import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import { options } from '@/plugins/toast-options';

const app = createApp(App)
    .use(router)
    .use(createPinia())
    .use(Toast, options);

app.mount('#app');
