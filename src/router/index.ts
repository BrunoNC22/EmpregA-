import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Home from '../views/Home.vue'
import FreeCourses from '../components/free-courses/FreeCourses.vue'
import Opportunities from '../components/opportunities/Opportunities.vue'

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
    },
    {
      path: '/opportunities',
      name: 'opportunities',
      component: Opportunities
    }
  ]
})

export default router