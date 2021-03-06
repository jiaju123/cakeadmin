import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Car from '@/components/car/car'
import Category from '@/components/category/category'
import Cateadd from '@/components/category/cateadd'
import Cateedit from '@/components/category/cateedit'
import Goods from '@/components/goods/goods'
import Goodadd from '@/components/goods/goodadd'
import Goodedit from '@/components/goods/goodedit'
import User from '@/components/suser/suser'
import Main from '@/components/main'
import Address from '@/components/address/address'
import Orders from '@/components/orders/orders'
import Suser from '@/components/user/user'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path:'/',
          redirect:'/admin'
      },
      {
        path: '/admin',
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
                  path: '/cateedit/:id',
                  component: Cateedit
              },
              {
                  path: '/cateadd',
                  component: Cateadd
              },
              {
                  path: '/goods',
                  component: Goods
              },
              {
                path:'/goodadd',
                  component:Goodadd
              },
              {
                  path:'/goodedit',
                  component:Goodedit
              },
              {
                  path: '/orders',
                  component: Orders
              },
              {
                  path: '/suser',
                  component: User
              },
              {
                  path: '/address',
                  component: Address
              },
              {
                  path: '/user',
                  component: Suser
              },
          ]
      },
  ]
})
