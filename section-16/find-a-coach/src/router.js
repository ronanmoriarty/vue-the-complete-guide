import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../src/pages/coaches/List.vue';
import CoachDetail from '../src/pages/coaches/Detail.vue';
import CoachRegistration from '../src/pages/coaches/Registration.vue';
import CoachContact from '../src/pages/requests/Contact.vue';
import RequestsList from '../src/pages/requests/List.vue';
import UserAuth from '../src/pages/auth/UserAuth.vue';
import NotFound from '../src/pages/NotFound.vue';

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
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsList },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;