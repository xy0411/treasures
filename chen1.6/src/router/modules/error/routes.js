export default {
    path: '/error',
    name: 'error',
    title: '',
    component: () => import('@pages/error/error.vue'),
    meta: {
        menuShow: false // 脱离菜单全屏展示
    }
}