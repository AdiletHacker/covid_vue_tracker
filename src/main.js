import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
