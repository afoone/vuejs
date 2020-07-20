import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import CarList from '../views/CarList'
import Cars from '../views/Cars'
import CarForm from '../components/CarForm';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars/',
    name: 'Cars',
    component: Cars
  },

  {
    path: '/cars/add',
    name: 'CarForm',
    component: CarForm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
