import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produk from '../views/Produk.vue'
import Detail from '../views/Detail.vue'
import Keranjang from '../views/Keranjang.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Produk',
    name: 'Produk',
    component: Produk
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
