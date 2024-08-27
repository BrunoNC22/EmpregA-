import './style/main.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
