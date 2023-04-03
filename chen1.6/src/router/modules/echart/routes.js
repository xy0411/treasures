export default {
    path: '/echart',
    name: 'echart',
    icon: 'PieChart',
    component: () => import('@pages/echart/echart.vue'),
    meta: {
        title: 'echarts图形'
    },
    children: [
        {
            path: 'homeWater',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/homeWater.vue'),
            meta: {
                title: '水型图'
            }
        },
        {
            path: 'ranking',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/ranking.vue'),
            meta: {
                title: '柱状图'
            }
        },
        {
            path: 'linkage',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/linkage.vue'),
            meta: {
                title: '折线图'
            }
        },
        {
            path: 'broken',
            icon: 'CollectionTag',
            component: () => import('@pages/echart/children/broken.vue'),
            meta: {
                title: '饼柱图联动'
            }
        }
    ],
    isSub: true // 判断菜单下是否有多个子菜单
}
