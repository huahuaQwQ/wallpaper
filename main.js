
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
// 引入封装后的axios
import axios from './utils/request/request.js'
Vue.prototype.$axios = axios


//引入vuex
import store from '@/store/store.js'
//把vuex定义成全局组件
Vue.prototype.$store = store
//-------------------------------------------------------------------
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif