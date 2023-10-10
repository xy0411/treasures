<template>
	<div class="electronRelaxWindows">
		<el-input class="input" v-model.trim="url"></el-input>
        <el-button @click="GoTo">Go {{ url }}</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: 'https://www.bilibili.com'
		};
	},
	methods: {
		GoTo() {
            window.open(this.url)
        }
	}
};
</script>

<style lang="less" scoped>
.electronRelaxWindows {
	height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .input {
        width: 300px;
        margin-right: 30px;
    }
}
</style>
