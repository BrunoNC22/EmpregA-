import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Home from '../views/Home.vue'
import FreeCourses from '../components/free-courses/FreeCourses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: FreeCourses
    }
  ]
})

export default router