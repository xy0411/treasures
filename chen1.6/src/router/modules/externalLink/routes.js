export default {
    path: '/externalLink',
    name: 'externalLink',
    title: 'External Link',
    icon: 'Paperclip',
    component: () => import('@pages/externalLink/externalLink.vue'),
    children: [
        {
            path: 'github',
            title: 'GitHub 仓库',
            icon: 'Promotion',
            component: () => import('@pages/externalLink/children/github.vue'),
        },
        {
            path: 'juejin',
            title: '掘金文档',
            icon: 'Promotion',
            component: () => import('@pages/externalLink/children/juejin.vue')
        }
    ],
    isSub: true // 判断菜单下是否有多个子菜单
}
