import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/api/authService'

const GreetingView = () => import('../views/GreetingView.vue')
const AuthView = () => import('../views/AuthView.vue')
const HomePageView = () => import('../views/HomepageView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegistrationView = () => import('../views/RegistrationView.vue')

const routes = [
  { path: '/goit-vue-project', component: GreetingView, name: 'greeting' },
  {
    path: '/goit-vue-project/auth',
    component: AuthView,
    redirect: '/goit-vue-project/auth/login',
    children: [
      { path: 'login', component: LoginView, name: 'login' },
      { path: 'registration', component: RegistrationView, name: 'register' }
    ]
  },
  { path: '/goit-vue-project/map', component: HomePageView, name: 'home' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration', 'greeting']
  const { name } = to
  if (authService.isLoggedIn() && authRoutes.includes(name)) {
    next({ name: 'home' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})
