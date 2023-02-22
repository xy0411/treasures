export default {
    path: '/echart',
    name: 'echart',
    component: () => import('@pages/echart/echart.vue'),
    children: [
        {
            path: 'homeWater',
            component: () => import('@pages/echart/children/homeWater.vue'),
        },
        {
            path: 'ranking',
            component: () => import('@pages/echart/children/ranking.vue')
        },
        {
            path: 'linkage',
            component: () => import('@pages/echart/children/linkage.vue')
        },
        {
            path: 'broken',
            component: () => import('@pages/echart/children/broken.vue')
        }
    ]
}
