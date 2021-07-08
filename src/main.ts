import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '_a/sass/global.scss'


createApp(App)
.use(store)
.use(router)
.mount('#app')
