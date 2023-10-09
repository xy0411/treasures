export default {
	path: "/embeddedIframe",
	name: "embeddedIframe",
	icon: "Platform",
	component: () => import("@pages/embeddedIframe/embeddedIframe.vue"),
	meta: {
		title: "内嵌页面"
	},
	children: [
		{
			path: "chinaColor",
			icon: "Medal",
			component: () => import("@pages/embeddedIframe/children/chinaColor.vue"),
			meta: {
				title: "中国色"
			}
		},
		{
			path: "handWriteJD",
			icon: "GoldMedal",
			component: () => import("@pages/embeddedIframe/children/handWriteJD.vue"),
			meta: {
				title: "手写的京东"
			}
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
