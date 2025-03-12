import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';
import AddProduct from '../components/AddProduct.vue';
import EditProduct from '../components/EditProduct.vue';

const routes = [
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetails },
  { path: '/products/add', component: AddProduct },
  { path: '/products/edit/:id', component: EditProduct },
  { path: '/', redirect: '/products' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;