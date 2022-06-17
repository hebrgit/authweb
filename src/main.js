import { createApp } from 'vue'
import './assets/fonts/iconfont.css'
import './assets/css/message.css'

import App from './App.vue'
import router from './router'
import api from './request'
const app = createApp(App)
app.config.globalProperties.$http = api
app.use(router)
app.mount('#app')

