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

		// this.liandoLogin()
	},
	methods: {
		async liandoLogin() {
			const res = await this.$httpUtil.ajax({
				url: "https://ems.liando.cn:8080/g-systems/system/login",
				method: "Get",
				params: {
					userNo: "联东管理员",
					userPwd: "v9DMsRN+GSQO/KzSCOwCpQ==",
					loginType: "01"
				}
			});
			console.log("res:", res);
		}
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