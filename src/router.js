import { createRouter, createWebHistory } from 'vue-router';
import authGuard from './authGuard';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import HelloWorld from './components/HelloWorld.vue';
import ProductDetail from './components/ProductDetail.vue';
import LoginPage from "./components/LoginPage";

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/product/:id', component: ProductDetail },
    {
        path: '/test',
        children: [
            { path: '', component: HelloWorld },
            { path: 'home', component: Home },
            { path: 'contact', component: Contact },
        ],
    },
    { path: '/lazyload-home', component: () => import('./components/Home.vue') },
    { path: '/lazyload-contact', component: () => import('./components/Contact.vue') },
    { path: '/login', component: LoginPage },
    { path: '/auth-home', component: Home, beforeEnter: authGuard },
    { path: '/auth-contact', component: Contact, beforeEnter: authGuard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;