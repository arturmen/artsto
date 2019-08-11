import Vue from 'vue'
import App from './App.vue'
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import vueHeadful from 'vue-headful';
import {VueMasonryPlugin} from 'vue-masonry';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonryPlugin)



Vue.use(VueMasonry);

Vue.component('vue-headful', vueHeadful);
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

library.add(faBars)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
