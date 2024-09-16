import './style/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode' // para habilitar o dark mode essa classe dark-mode tem que ser inserida na tag html
    }
  }
})

app.mount('#app')
