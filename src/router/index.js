import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ImageView from '../views/ImageView.vue'
import GifView from '../views/GifView.vue'

const routes = [
  {
    path: '/',
    name: 'Images',
    component: ImageView
  },
  {
    path: '/gifs',
    name: 'GIFs',
    component: GifView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
