import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';

const GoBack = defineAsyncComponent(() => import('./components/GoBack.vue'));
const BaseButton = defineAsyncComponent(() => import('./components/BaseButton.vue'));

const app = createApp(App);
app.use(store);
app.use(router);

app.component('GoBack', GoBack);
app.component('BaseButton', BaseButton);

app.mount('#app');
