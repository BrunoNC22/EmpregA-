import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Profile from '../views/Profile.vue'
import FreeCourses from '../components/free-courses/FreeCourses.vue'

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
      name: 'login',
      component: Login
    },
    {
      path: '/free-courses',
      name: 'free_courses',
      component: FreeCourses
    }
  ]
})

export default router