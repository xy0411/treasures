export default {
	path: "/conjecture",
	name: "conjecture",
	icon: "Star",
	component: () => import("@pages/conjecture/conjecture.vue"),
	meta: {
		title: "奇思妙想"
	},
	children: [
		{
			path: "deadlock",
			icon: "Lock",
			component: () => import("@pages/conjecture/children/deadlock.vue"),
			meta: {
				title: "无限加载"
			}
		},
		{
			path: "mockData",
			icon: "DataBoard",
			component: () => import("@pages/conjecture/children/mockData.vue"),
			meta: {
				title: "mock数据"
			}
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
