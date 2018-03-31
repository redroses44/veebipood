import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/Product'
import ViewProduct from '@/ViewProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/viewproduct/:id',
      name: 'ViewProduct',
      component: ViewProduct
    }
  ]
})
