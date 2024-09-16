import axios from 'axios'

const productionHost = import.meta.env.VITE_PROD_HOST
const developmentHost = import.meta.env.VITE_DEV_HOST

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? productionHost : developmentHost
}) 

export default api
