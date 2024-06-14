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
			icon: "Loading",
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
		},
		{
			path: "encrypt",
			icon: "Lock",
			component: () => import("@pages/conjecture/children/encrypt.vue"),
			meta: {
				title: "密码加密"
			}
		},
		{
			path: "doubleTable",
			icon: "Link",
			component: () => import("@pages/conjecture/children/doubleTable.vue"),
			meta: {
				title: "双表格滚动条同步"
			}
		},
		{
			path: "carouselAvatar",
			icon: "magic-stick",
			component: () => import("@pages/conjecture/children/carouselAvatar.vue"),
			meta: {
				title: "轮播头像"
			}
		},
		{
			path: "electronRelaxWindows",
			icon: "monitor",
			component: () => import("@pages/conjecture/children/electronRelaxWindows.vue"),
			meta: {
				title: "electron摸鱼小窗口"
			}
		},
		{
			path: "threeByLql",
			icon: "Platform",
			component: () => import("@pages/conjecture/children/threeByLql.vue"),
			meta: {
				title: "钱老板的粒子效果"
			}
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
