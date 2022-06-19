// saravanakumar323py@gmail.com
import store from '../store/index'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function isAuth (to, from, next) {
  if (store.getters['auth/user']) {
    next()
  } else {
    next('/login')
  }
}

function loginGuard (to, from, next) {
  if (store.getters['auth/user']) {
    next('/')
  } else {
    next()
  }
}

function logoutGuard (to, from, next) {
  if (!store.getters['auth/user']) {
    next('/login')
  } else {
    next()
  }
}

// function isAdmin (to, from, next) {
//   if (store.getters['auth/isAdmin']) {
//     next()
//   } else {
//     next('/')
//   }
// }

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatView.vue'),
    beforeEnter: isAuth
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: loginGuard
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue'),
    beforeEnter: logoutGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
