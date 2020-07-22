import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from './router.js'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount('#app')
