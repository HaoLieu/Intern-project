import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import NewsView from '../views/NewsView.vue'
import ShareHolderView from '../views/ShareHolderView.vue'
import ContactView from '../views/ContactView.vue'
import RecruitmentView from '../views/RecruitmentView.vue'
import LoginPage from '../components/back-end/LoginPage.vue'
import MenuBackEnd from '../components/back-end/MenuBackEnd.vue'
import AitsBackEnd from '../components/back-end/AitsBackEnd.vue'
import UnionBackEnd from '../components/back-end/UnionBackEnd.vue'
import VnAirlinesBackEnd from '../components/back-end/VnAirlinesBackEnd.vue'
import sportCultureBackEnd from '../components/back-end/SportCultureBackEnd.vue'
import GalleryBackEnd from '../components/back-end/GalleryBackEnd.vue'
import NotFound from '../views/NotFoundView.vue'

import AitsNewsDetail from '../components/news-section/AitsNewsDetail.vue'
import UnionNewsDetail from '../components/news-section/UnionNewsDetail.vue'
import VnAirlinesNewsDetail from '../components/news-section/VnAirlinesNewsDetail.vue'
import SpCulNewsDetail from '../components/news-section/SpCulNewsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  // News/id
  {
    path: '/news/139/:id',
    name: 'AitsNewsDetail',
    component: AitsNewsDetail,
    props: true
  },
  {
    path: '/news/137/:id',
    name: 'UnionNewsDetail',
    component: UnionNewsDetail,
    props: true
  },
  {
    path: '/news/138/:id',
    name: 'VnAirlinesNewsDetail',
    component: VnAirlinesNewsDetail,
    props: true
  },
  {
    path: '/news/146/:id',
    name: 'SpCulNewsDetail',
    component: SpCulNewsDetail,
    props: true
  },
  {
    path: '/shareholder',
    name: 'shareholder',
    component: ShareHolderView
  },
  {
    path: '/tuyendung',
    name: 'tuyendung',
    component: RecruitmentView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/be/menu',
    name: 'menu',
    component: MenuBackEnd
  },
  {
    path: '/be/aits',
    name: 'aits',
    component: AitsBackEnd
  },
  {
    path: '/be/union',
    name: 'union',
    component: UnionBackEnd
  },
  {
    path: '/be/vnairlines',
    name: 'vnairlines',
    component: VnAirlinesBackEnd
  },
  {
    path: '/be/sportCultureBackEnd',
    name: 'sportCultureBackEnd',
    component: sportCultureBackEnd
  },
  {
    path: '/be/gallery',
    name: 'gallery',
    component: GalleryBackEnd
  },
  {
    path: '/:NotFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { top: 0, left: 0, behavior: 'smooth' }
  },
  routes
})

export default router
