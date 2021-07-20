import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import RequestsList from '../src/pages/requests/List.vue';
import NotFound from '../src/pages/NotFound.vue';
import store from './store/index.js';
const CoachDetail = defineAsyncComponent(() => import('../src/pages/coaches/Detail.vue'));
const CoachRegistration = defineAsyncComponent(() => import('../src/pages/coaches/Registration.vue'));
const CoachContact = defineAsyncComponent(() => import('../src/pages/requests/Contact.vue'));
const CoachesList = defineAsyncComponent(() => import('../src/pages/coaches/List.vue'));
const UserAuth = defineAsyncComponent(() => import('../src/pages/auth/UserAuth.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true, // so that :id route parameter is passed into the id prop on the component
            children: [
                { path: 'contact', component: CoachContact }
            ]
        },
        { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
        { path: '/requests', component: RequestsList, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach((to, _, next) => {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if(to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});
export default router;