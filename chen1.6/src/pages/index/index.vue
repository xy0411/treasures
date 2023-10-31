<template>
	<div class="index"></div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		console.log("hi~", this.$t("auth.name"));

		// console.log(import.meta.env);
	},
	methods: {
		
	}
};
</script>

<style lang="less" scoped>
.index {
	height: 100%;
	background-image: url("@/assets/images/welcome.png");
	background-size: 100% 100%;
}
</style>