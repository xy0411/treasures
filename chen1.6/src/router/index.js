import { createRouter, createWebHashHistory } from 'vue-router'

// import login from './modules/login/routes'
import index from './modules/index/routes'
import echart from './modules/echart/routes'
import animation from './modules/animation/routes'
import superTable from './modules/superTable/routes'
import dataScreen from './modules/dataScreen/routes'
import externalLink from './modules/externalLink/routes'

// 未作路由优先级排序，可暂时通过routes顺序设置
const routes = [
    index,
    // login,
    dataScreen,
    superTable,
    echart,
    animation,
    externalLink
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;