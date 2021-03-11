import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Recommend from '@/pages/recommend'
import Detail from '@/pages/detail'
import Login from '@/pages/login'
import Order from '@/pages/order'
import Cart from '@/pages/cart'
import Gherror from '@/pages/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 默认跳转到推荐页面
      redirect: '/recommend'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/recommend',
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        },
        {
          path: '/order',
          name: 'order',
          component: Order
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/error',
      name: 'error',
      component: Gherror
    }
  ]
})
