<template>
	<div class="embeddedIframe">
		<iframe class="iframe" :src="url" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: "http://zhongguose.com/#pinlan"
		};
	}
};
</script>

<style lang="less" scoped>
.embeddedIframe {
	height: 100%;
	.iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
}
</style>
