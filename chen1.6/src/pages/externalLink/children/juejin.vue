<template>
	<div class="juejin">
		<div class="a-content">
			掘金文档：
			<a href="https://juejin.cn/user/3257170069299741" target="_blank">https://juejin.cn/user/3257170069299741</a>
			🍒🍉🍊
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		gotoGitHub() {
			window.open("https://juejin.cn/user/3257170069299741");
		}
	},
	mounted() {
		this.gotoGitHub();
	}
};
</script>

<style lang="less" scoped>
.juejin {
	height: 100%;
	font-size: 1.4rem;
	.a-content {
		width: max-content;
		margin: 4% auto;
		font-weight: bold;
	}
}
</style>
