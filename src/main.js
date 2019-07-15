import Vue from 'vue'
import App from './App.vue'
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import vueHeadful from 'vue-headful';
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry);

Vue.component('vue-headful', vueHeadful);


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
