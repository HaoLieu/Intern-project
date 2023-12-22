import { createStore } from 'vuex'
import customerModule from './modules/customer/index.js'
import partnerModule from './modules/partner/index.js'
import exclusiveModule from './modules/exclusiveBoard/index.js'
import unionNewsModule from './modules/unionNews/index.js'
import aitsNewsModule from './modules/aitsNews/index.js'
import sportCultureNewsModule from './modules/sportCultureNews/index.js'
import projectModule from './modules/project/index.js'
import galleryModule from './modules/gallery/index.js'
import vnAirlinesNewsModule from './modules/vnAirlinesNews/index.js'
import documentsModule from './modules/documents/index.js'

// import axios from 'axios'

const store = createStore({
  modules: {
    customers: customerModule,
    partners: partnerModule,
    exclusiveBoard: exclusiveModule,
    unionNews: unionNewsModule,
    projects: projectModule,
    galleries: galleryModule,
    aitsNews: aitsNewsModule,
    vnAirlinesNews: vnAirlinesNewsModule,
    sportCultureNews: sportCultureNewsModule,
    documents: documentsModule
  },
  state () {
    return {
      navItems: [
        {
          id: 1,
          name: 'Trang chủ',
          link: '/'
        },
        {
          id: 2,
          name: 'Về Aits',
          link: '/about'
        },
        {
          id: 3,
          name: 'Sản phẩm',
          link: '/products'
        },
        {
          id: 4,
          name: 'Tin tức',
          link: '/news'
        },
        {
          id: 5,
          name: 'Quan hệ cổ đông',
          link: '/shareholder'
        }
      ],
      loginRouteGuard: false
    }
  }
  // mutations: {
  //   refreshedData (state) {
  //     axios.get('http://localhost:9513/api/menu').then((response) => {
  //       state.navItems = response.data
  //     })
  //   }
  // }
})

export default store
