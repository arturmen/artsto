import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Products from './components/Products.vue';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:name/:colour',
      name: 'product',
      component: Product,
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
