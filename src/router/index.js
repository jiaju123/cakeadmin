import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Car from '@/components/car/car'
import Category from '@/components/category/category'
import Goods from '@/components/goods/goods'
import User from '@/components/user/user'
import Main from '@/components/main'
import Address from '@/components/address/address'
import Orders from '@/components/orders/orders'

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        component: Login
      },
      {
          path:'/main',
          component:Main,
          children:[
              {
                  path: '/car',
                  component: Car
              },
              {
                  path: '/category',
                  component: Category
              },
              {
                  path: '/goods',
                  component: Goods
              },
              {
                  path: '/orders',
                  component: Orders
              },
              {
                  path: '/user',
                  component: User
              },
              {
                  path: '/address',
                  component: Address
              },
              {
                  path: '/suser',
                  component: Suser
              },
          ]
      },
  ]
})
