import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./core/services/store";
import ApiService from "./core/services/api.service";
import "./core/plugins/fontAwesone";
import VueTheMask from 'vue-the-mask'

ApiService.init()
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
