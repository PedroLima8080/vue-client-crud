import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./core/services/store";
import ApiService from "./core/services/api.service";
import VueTheMask from 'vue-the-mask'
import mixins from './core/services/mixins'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "./core/plugins/fontAwesone";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

ApiService.init()

Vue.use(VueTheMask)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.mixin(mixins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
