export default {
    path: '/dataScreen',
    name: 'dataScreen',
    title: '数据大屏',
    icon: 'Film',
    component: () => import('@pages/dataScreen/dataScreen.vue'),
    meta: {
        menuShow: false // 脱离菜单全屏展示
    }
}