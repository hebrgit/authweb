import { createApp } from 'vue'
import './assets/fonts/iconfont.css'
import './assets/css/message.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import api from './request'
const app = createApp(App)
app.config.globalProperties.$http = api
app.use(router)
app.use(ElementPlus,{  zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')

