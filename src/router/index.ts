import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      nome: 'login',
      component: Login
    }
  ]
})

export default router