import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },{
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children:[
      {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Users.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
