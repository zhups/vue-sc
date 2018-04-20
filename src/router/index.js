import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import classify from '@/pages/classify'
import cart from '@/pages/cart'
import my from '@/pages/my'
import seek from '@/pages/seek'
import productInfo from '@/pages/productInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: productInfo
    }
  ]
})
