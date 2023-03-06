export default {
    path: '/echart',
    name: 'echart',
    title: 'Echarts',
    icon: 'PieChart',
    component: () => import('@pages/echart/echart.vue'),
    children: [
        {
            path: 'homeWater',
            title: '水型图',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/homeWater.vue'),
        },
        {
            path: 'ranking',
            title: '柱状图',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/ranking.vue')
        },
        {
            path: 'linkage',
            title: '折线图',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/linkage.vue')
        },
        {
            path: 'broken',
            title: '饼柱图联动',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/broken.vue')
        }
    ],
    isSub: true // 判断菜单下是否有多个子菜单
}
