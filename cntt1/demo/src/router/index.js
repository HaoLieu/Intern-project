import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import ContainerView from '../views/ContainerView.vue'
import ContactView from '../views/ContactView.vue'
import DestinationView from '../views/DestinationView.vue'
import TourPackagesView from '../views/TourPackagesView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: HomePageView
  },
  {
    path: '/container',
    component: ContainerView
  },
  {
    path: '/contact',
    component: ContactView
  },
  {
    path: '/destination',
    component: DestinationView
  },
  {
    path: '/tourpakages',
    component: TourPackagesView
  },
  {
    path: '/login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
