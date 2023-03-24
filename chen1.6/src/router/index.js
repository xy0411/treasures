import { createRouter, createWebHashHistory } from 'vue-router'

// import login from './modules/login/routes'
import index from './modules/index/routes'
import echart from './modules/echart/routes'
import animation from './modules/animation/routes'
import superTable from './modules/superTable/routes'
import dataScreen from './modules/dataScreen/routes'
import externalLink from './modules/externalLink/routes'
import embeddedIframe from './modules/embeddedIframe/routes'
import conjecture from './modules/conjecture/routes'
import error from './modules/error/routes'

// 未作路由优先级排序，可暂时通过routes顺序设置
const routes = [
    index,
    // login,
    dataScreen,
    superTable,
    embeddedIframe,
    echart,
    conjecture,
    animation,
    externalLink,
    error
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.length === 0) {
      next('/error')
    } else {
      next() // 放行
    }
  })

export default router;