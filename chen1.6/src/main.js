import { createApp } from 'vue'
import App from './App.vue'
import router from '@router/index'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
