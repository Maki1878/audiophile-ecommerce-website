import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:category',
    name: 'Category',
    component: () => import('@/views/Category.vue'),
    props: true,
  },
  {
    path: '/:category/:productSlug',
    name: 'Product',
    component: () => import('@/views/Product.vue'),
    props: true,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/Checkout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
