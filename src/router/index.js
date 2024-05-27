import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '../api/authService'
import GreetingView from '@/views/GreetingView.vue'
import AuthView from '@/views/AuthView.vue'
// import HomePageView from '@/views/HomepageView.vue'
// import LoginView from '@/views/LoginView.vue'
// import RegistrationView from '@/views/RegistrationView.vue'

// const GreetingView = () => import('@/views/GreetingView.vue')
// const AuthView = () => import('@/views/AuthView.vue')
const HomePageView = () => import('@/views/HomepageView.vue')
const LoginView = () => import('@/views/LoginView.vue')
const RegistrationView = () => import('@/views/RegistrationView.vue')

const BASE = import.meta.env.VITE_BASE_URL_FRONT

const routes = [
  { path: `${BASE}/`, component: GreetingView, name: 'greeting' },
  {
    path: `${BASE}/auth`,
    component: AuthView,
    redirect: `${BASE}/auth/login`,
    children: [
      { path: 'login', component: LoginView, name: 'login' },
      { path: 'registration', component: RegistrationView, name: 'register' }
    ]
  },
  { path: `${BASE}/map`, component: HomePageView, name: 'home' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  base: BASE
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'register', 'greeting']
  const { name } = to
  if (authService.isLoggedIn() && authRoutes.includes(name)) {
    next({ name: 'home' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})
