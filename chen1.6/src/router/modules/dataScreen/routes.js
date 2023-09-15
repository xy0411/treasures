export default {
	path: "/dataScreen",
	name: "dataScreen",
	icon: "Film",
	component: () => import("@pages/dataScreen/dataScreen.vue"),
	meta: {
		title: "趣味大屏",
		menuShow: false // 脱离菜单全屏展示
	}
};
