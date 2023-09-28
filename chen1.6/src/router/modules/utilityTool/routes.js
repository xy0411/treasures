export default {
	path: "/utilityTool",
	name: "utilityTool",
	icon: "Tools",
	component: () => import("@pages/utilityTool/utilityTool.vue"),
	meta: {
		title: "实用工具"
	},
	children: [
		{
			path: "decrypt",
			icon: "Key",
			component: () => import("@pages/utilityTool/children/decrypt.vue"),
			meta: {
				title: "密码解密"
			}
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
