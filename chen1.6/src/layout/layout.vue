<template>
	<el-container class="container">
		<el-aside class="left">
			<div class="left-logo" @click="()=>{ this.$router.push('/') }">
				<img src="https://cn.vitejs.dev/logo-with-shadow.png" alt="" />
				<!-- <h3 v-show="!isExpand">器材管理系统</h3> -->
			</div>
			<el-menu
				:default-active="currentRoute"
				class="menu-vertical"
				:collapse="isExpand"
				background-color="rgb(0,21,41)"
				text-color="rgb(166,173,180)"
				:collapse-transition="true"
				:unique-opened="true"
				router="true"
			>
				<template v-for="item in routers" :key="item.name">
					<template v-if="item.name != 'error'">
						<template v-if="item.isSub">
							<el-sub-menu :index="item.path">
								<template #title>
									<el-icon :size="18">
										<component :is="item.icon"></component>
									</el-icon>
									<span>{{ item.meta.title }}</span>
								</template>
								<template v-for="it in item.children" :key="it.path">
									<el-menu-item :index="`${item.path}/${it.path}`">
										<el-icon :size="18">
											<component :is="it.icon"></component>
										</el-icon>
										{{ it.meta.title }}
									</el-menu-item>
								</template>
							</el-sub-menu>
						</template>
						<template v-else>
							<el-menu-item :index="item.path">
								<el-icon :size="18">
									<component :is="item.icon"></component>
								</el-icon>
								<template #title>
									{{ item.meta.title }}
								</template>
							</el-menu-item>
						</template>
					</template>
				</template>
			</el-menu>
		</el-aside>
		<el-container class="right">
			<el-header class="right-header" height="55px">
				<div class="right-header-collapse">
					<el-icon v-if="isExpand" @click="changeExpand"><i-ep-Expand /></el-icon>
					<el-icon v-else @click="changeExpand"><i-ep-Fold /></el-icon>
					<el-breadcrumb separator-icon="ArrowRight" class="breadcrumb">
						<template v-for="it in route.currentRoute.value.matched" :key="it.name">
							<el-breadcrumb-item>{{ it.meta.title }}</el-breadcrumb-item>
						</template>
					</el-breadcrumb>
				</div>
				<div class="right-header-avatar">
					<el-dropdown trigger="hover" class="user-dropdown pointer">
						<el-icon class="right-gap pointer operation"><Operation /></el-icon>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item
									:style="{
										color: selectSize == 'default' ? 'rgb(64,149,255)' : ''
									}"
									@click="changeConfigsSize('default')"
									>default</el-dropdown-item
								>
								<el-dropdown-item
									:style="{
										color: selectSize == 'samll' ? 'rgb(64,149,255)' : ''
									}"
									@click="changeConfigsSize('samll')"
									>samll</el-dropdown-item
								>
								<el-dropdown-item
									:style="{
										color: selectSize == 'large' ? 'rgb(64,149,255)' : ''
									}"
									@click="changeConfigsSize('large')"
									>large</el-dropdown-item
								>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
					<span class="right-gap zh-en pointer" @click="changeLanguage">
						<sapn v-if="isZh">中</sapn>
						<sapn v-else>英</sapn>
					</span>
					<el-icon class="right-gap pointer" @click="showDrawer"><Connection /></el-icon>
					<el-icon class="right-gap pointer" @click="enlargeOrshrink"><FullScreen /></el-icon>
					<span class="right-gap">{{ userName }}</span>
					<el-dropdown trigger="click" class="user-dropdown pointer">
						<span class="el-dropdown-link">
							<el-avatar :src="img" />
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item
									@click="
										() => {
											this.$router.push('/');
										}
									"
									>首页</el-dropdown-item
								>
								<el-dropdown-item @click="showDialogPersonalValuesVisible">个人信息</el-dropdown-item>
								<el-dropdown-item @click="showDialogChangePersonalValuesVisible">修改信息</el-dropdown-item>
								<el-dropdown-item disabled>一个秘密</el-dropdown-item>
								<el-dropdown-item @click="exit" divided>退出</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</el-header>
			<el-main class="right-main">
				<router-view class="view"></router-view>
			</el-main>
			<el-footer class="right-footer" height="30px">2023 Created by 9894.</el-footer>
			<el-dialog v-model="dialogPersonalValuesVisible" title="个人信息详细" class="personal-values-dialog" draggable>
				<el-form label-width="120px">
					<el-form-item label="姓名">
						<el-input disabled v-model="userValues.name" />
					</el-form-item>
					<el-form-item label="年龄">
						<el-input disabled v-model="userValues.age" />
					</el-form-item>
					<el-form-item label="详细">
						<el-input type="textarea" disabled v-model="userValues.textareas" />
					</el-form-item>
				</el-form>
			</el-dialog>
			<el-dialog v-model="dialogChangePersonalValuesVisible" title="修改个人信息" class="personal-values-dialog" draggable>
				<el-form label-width="120px">
					<el-form-item label="姓名">
						<el-input v-model="userValues.name" />
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="userValues.age" />
					</el-form-item>
					<el-form-item label="详细">
						<el-input type="textarea" v-model="userValues.textareas" />
					</el-form-item>
					<el-form-item>
						<el-button @click="changeUserValues">保存</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
			<el-drawer v-model="drawer" title="修改主题配置" :with-header="true" :show-close="false" class="layout-drawer">
				<p>Hi there!</p>
				<p>抱歉暂时无法修改任何主题配置!</p>
				<!-- <div class="layout-form">
          <div class="layout-form-item">
            <span>底部栏显示</span>
            <el-switch v-model="showFooter" @change="changFooterShow(showFooter)" />
          </div>
        </div> -->
			</el-drawer>
		</el-container>
	</el-container>
</template>

<script>
import router from "@/router/index";
import screenfull from "screenfull";
import { useCommon } from "@store/index";
import { computed } from "vue";
import img from "@/assets/images/billie.png"; // el-avatar组件，发现使用本地图片路径无法显示,使用引入的方法解决
export default {
	data() {
		let route = computed(() => router);
		let size = computed(() => useCommon().configs.size);
		let locale = computed(() => useCommon().configs.locale);
		return {
			img: img,
			route: route,
			userName: "",
			currentRoute: "/",
			isExpand: false,
			routers: router.options.routes,
			dialogPersonalValuesVisible: false,
			dialogChangePersonalValuesVisible: false,
			userValues: {},
			isZh: locale,
			selectSize: size,
			drawer: false
		};
	},
	methods: {
		showDrawer() {
			this.drawer = !this.drawer;
		},
		changeConfigsSize(val) {
			useCommon().changeConfigsSize(val);
		},
		changeLanguage() {
			useCommon().changeConfigsLanguage();
		},
		changeExpand() {
			this.isExpand = !this.isExpand;
		},
		listeningWindow() {
			window.onresize = () => {
				return (() => {
					let screenWidth = document.body.clientWidth;
					if (screenWidth < 1200) this.isExpand = true;
					if (screenWidth > 1200) this.isExpand = false;
				})();
			};
		},
		enlargeOrshrink() {
			screenfull.toggle();
		},
		exit() {
			ElMessage({
				type: "error",
				message: "糟糕, 退出失败！"
				// duration: 0, // duration为0则不会自动关闭
				// showClose: true // 显示关闭按钮
			});
		},
		showDialogPersonalValuesVisible() {
			this.dialogPersonalValuesVisible = true;
		},
		showDialogChangePersonalValuesVisible() {
			this.dialogChangePersonalValuesVisible = true;
		},
		changeUserValues() {
			useCommon().changePersonalUserValues(this.userValues);
			this.dialogChangePersonalValuesVisible = false;
			this.userName = useCommon().userValues.name;
		}
	},
	mounted() {
		// 页面刷新获取当前路由地址，选中菜单
		this.currentRoute = router.currentRoute._value.path;
		// console.log(123, router);
		// 监听浏览器大小，收缩菜单侧栏
		this.listeningWindow();
		this.userValues = JSON.parse(JSON.stringify(useCommon().userValues));
		this.userName = useCommon().userValues.name;
	},
	watch: {
		$route: {
			handler(val, old) {
				// console.log(val.path);
				this.currentRoute = val.path
			}
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	height: 100vh;
	display: flex;
	.left {
		width: auto;
		overflow: hidden;
		background-color: rgb(0, 21, 41);
		.left-logo {
			cursor: pointer;
			width: 100%;
			background-color: rgb(0, 21, 41);
			border-right: 1px;
			color: #fff;
			height: 55px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			img {
				width: 30px;
				height: 30px;
			}
		}
		.menu-vertical {
			height: 100%;
			border-right: 1px;
			overflow-y: auto;
		}
		.menu-vertical::-webkit-scrollbar {
			width: 0;
		}
		.menu-vertical:not(.el-menu--collapse) {
			width: 220px;
			// min-height: 400px;
		}
	}
	.right {
		flex-grow: 1;
		background-color: rgb(239, 241, 244);
		.right-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			font-size: 16px;
			.right-header-collapse {
				display: flex;
				align-items: center;
				.el-icon {
					cursor: pointer;
				}
				.breadcrumb {
					margin-left: 10px;
				}
			}
			.right-header-avatar {
				display: flex;
				align-items: center;
				.right-gap {
					padding-right: 20px;
				}
				.pointer {
					cursor: pointer;
				}
				.zh-en {
					font-size: 14px;
				}
				.operation {
					font-size: 18px;
				}
			}
		}
		.right-main {
			padding: 12px 10px;
			.view {
				background-color: #fff;
			}
		}
		:deep(.layout-drawer) {
			width: 350px !important;
			.layout-form {
				.layout-form-item {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
		}
		.right-main > div {
			overflow: hidden;
		}
		.right-footer {
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 14px;
		}
	}
}
</style>
