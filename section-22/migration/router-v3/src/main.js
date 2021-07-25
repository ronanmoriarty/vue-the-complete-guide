import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import WelcomeScreen from './pages/WelcomeScreen.vue';
import UsersList from './pages/UsersList.vue';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WelcomeScreen },
        { path: '/users', component: UsersList }
    ]
});
const app = createApp(App);

app.use(router);

router.isReady().then(() => {
    app.mount('#app');
});
