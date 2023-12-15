import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import TheHeader from './components/header/TheHeader.vue'
import TheFooter from './components/footer/TheFooter.vue'
import BaseContentBox from './components/ui/BaseContentBox.vue'
import BaseProductsButton from './components/ui/BaseProductsButton'
import BaseProductsCard from './components/ui/BaseProductsCard'
import BackEndNav from './components/back-end/BackEndNav.vue'

import store from './store/index.js'

const app = createApp(App)

app.use(store)

app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)
app.component('the-be-nav', BackEndNav)
app.component('BaseContentBox', BaseContentBox)
app.component('base-products-button', BaseProductsButton)
app.component('base-products-card', BaseProductsCard)

app.use(router).mount('#app')
