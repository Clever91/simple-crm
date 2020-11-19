import { createRouter, createWebHistory } from 'vue-router'

// view
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Category from '../views/Categories.vue'
import DetailRecord from '../views/DetailRecord.vue'
import History from '../views/Histories.vue'
import Planning from '../views/Planning.vue'
import Profile from '../views/Profile.vue'
import Record from '../views/Record.vue'
import Register from '../views/Register.vue'

// route
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'auth' },
    component: Register
  },
  {
    path: '/categories',
    name: 'category',
    meta: { layout: 'main' },
    component: Category
  },
  {
    path: '/detail/record',
    name: 'detail-record',
    meta: { layout: 'main' },
    component: DetailRecord
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: History
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: Planning
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: Profile
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: Record
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
