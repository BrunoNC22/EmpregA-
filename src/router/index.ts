import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Home from '../views/Home.vue'
import FreeCourses from '../components/free-courses/FreeCourses.vue'
import MainFrame from '../components/main-frame/MainFrame.vue'

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

      path: '/nqp98d78yqui398dy780qyodh89a70yodiuoahd78ye1278eywq89s', // gambiarra que funciona
      component: MainFrame,
      children: [
        {
          path: "/cursos",
          name: "Cursos",
          component: FreeCourses
        }
      ]
    },
  ]
})

export default router