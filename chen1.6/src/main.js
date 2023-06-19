import { createApp } from 'vue'
import App from './App.vue'
import router from '@router/index'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/App.less'
import httpUtil from '@utils/render.http.js'

import i18n from './language/index'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.config.globalProperties.$httpUtil = httpUtil

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(i18n).use(pinia).mount('#app')
