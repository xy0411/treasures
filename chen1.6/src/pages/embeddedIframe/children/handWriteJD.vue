<template>
	<div class="handWriteJD">
		<iframe class="iframe" :src="url" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: "./JD/jd.html" // 真的是手打的喔，2022年1月16号，陈亚男老师给我的寒假作业，南京雨花台区上海联蔚数科技术有限公司，不过，样式除了上面一部分其他都是抄的，没想到老师竟然是为了让我练css的，...
		};
	}
};
</script>

<style lang="less" scoped>
.handWriteJD {
	height: 100%;
	.iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
}
</style>
