export default {
    path: '/conjecture',
    name: 'conjecture',
    title: 'Fantastic ideas',
    icon: 'Star',
    component: () => import('@pages/conjecture/conjecture.vue'),
    children: [
        {
            path: 'deadlock',
            title: '无限加载',
            icon: 'Lock',
            component: () => import('@pages/conjecture/children/deadlock.vue'),
        },
        {
            path: 'mockData',
            title: 'mock数据',
            icon: 'DataBoard',
            component: () => import('@pages/conjecture/children/mockData.vue'),
        }
    ],
    isSub: true // 判断菜单下是否有多个子菜单
}
