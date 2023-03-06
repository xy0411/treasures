import { createRouter, createWebHashHistory } from 'vue-router'

// import login from './modules/login/routes'
import index from './modules/index/routes'
import echart from './modules/echart/routes'
import animation from './modules/animation/routes'

// 未作路由优先级排序，可暂时通过routes顺序设置
const routes = [
    index,
    // login,
    echart,
    animation
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;