export default {
    path: '/embeddedIframe',
    name: 'embeddedIframe',
    icon: 'Platform',
    component: () => import('@pages/embeddedIframe/embeddedIframe.vue'),
    meta: {
        title: '内嵌页面'
    }
}