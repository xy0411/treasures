<template>
	<div class="error">
		<span class="error_content"> 404:您访问的网页不存在! </span>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.error {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.error_content {
		font-size: 16px;
	}
}
</style>
