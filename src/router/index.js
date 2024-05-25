import { createRouter, createWebHistory } from 'vue-router'

const GreetingView = () => import('../views/GreetingView.vue')
const AuthView = () => import('../views/AuthView.vue')
const HomePageView = () => import('../views/HomepageView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegistrationView = () => import('../views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingView },
  {
    path: '/auth',
    component: AuthView,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginView },
      { path: 'registration', component: RegistrationView }
    ]
  },
  { path: '/map', component: HomePageView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const authRoutes = ['login', 'registration']
//   const { name } = to

//   if (authService.isLoggedIn() && authRoutes.includes(name)) {
//     next({ name: 'homepage' })
//   } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })
