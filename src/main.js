import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store/index'
import './index.css'
import ShowNotif from '@/components/ShowNotif'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('ShowNotif', ShowNotif)
app.mount('#app')
