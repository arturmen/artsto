import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Product from './components/Product.vue';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:name',
      name: 'product',
      component: Product,
      title: "Product"
    }
  ]
})

export default router
