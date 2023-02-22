import { createRouter, createWebHashHistory } from 'vue-router'

import login from './modules/login/routes'
import index from './modules/index/routes'
import home from './modules/echart/routes'
import animation from './modules/animation/routes'

const routes = [
    animation,
    login,
    index,
    home
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;