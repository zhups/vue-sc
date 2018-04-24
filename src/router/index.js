import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import classify from '@/pages/classify'
import cart from '@/pages/cart'
import my from '@/pages/my'
import seek from '@/pages/seek'
import productInfo from '@/pages/productInfo'
import home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/index',
          component: index
        },
        {
          path: '/classify',
          component: classify
        },
        {
          path: '/cart',
          component: cart
        },
        {
          path: '/my',
          component: my
        },
        {
          path: '/seek',
          component: seek
        },
        {
          path: '/',
          component: index
        }
      ]
    },
    {
      path: '/productInfo',
      component: productInfo
    }
  ]
})
