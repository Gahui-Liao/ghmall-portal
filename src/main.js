// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 使用element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {post, get} from './http/axios'

import URL from './http/api'
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$URL = URL

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
