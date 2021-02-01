import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ghmall from '@/components/ghmall'
import Recommend from '@/components/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ghmall',
      name: 'ghmall',
      // 默认跳转到推荐，实现默认页面
      redirect: '/recommend',
      component: Ghmall,
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        }
      ]
    }
  ]
})
