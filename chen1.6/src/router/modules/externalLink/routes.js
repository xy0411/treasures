export default {
	path: "/externalLink",
	name: "externalLink",
	icon: "Paperclip",
	component: () => import("@pages/externalLink/externalLink.vue"),
	meta: {
		title: "外部链接"
	},
	children: [
		{
			path: "github",
			icon: "Promotion",
			component: () => import("@pages/externalLink/children/github.vue"),
			meta: {
				title: "GitHub 仓库"
			}
		},
		{
			path: "juejin",
			icon: "Promotion",
			component: () => import("@pages/externalLink/children/juejin.vue"),
			meta: {
				title: "掘金文档"
			}
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
