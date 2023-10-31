export default {
	path: "/study",
	name: "study",
	icon: "Star",
	component: () => import("@pages/study/study.vue"),
	meta: {
		title: "学习资料"
	},
	children: [
		{
			path: "gitShell",
			icon: "Loading",
			component: () => import("@pages/study/children/gitShell.vue"),
			meta: {
				title: "git命令"
			}
		},
        {
			path: "mysqlShell",
			icon: "Loading",
			component: () => import("@pages/study/children/mysqlShell.vue"),
			meta: {
				title: "mysql语句"
			}
		},
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
