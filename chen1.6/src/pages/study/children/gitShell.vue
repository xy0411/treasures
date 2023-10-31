<template>
	<div class="gitShell">
		<ul class="infinite-list" style="overflow: auto">
			<li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
			<el-backtop target=".infinite-list" :right="100" :bottom="100" />
		</ul>
		<el-button class="printTxt" @click="printTxt">导出文档</el-button>
	</div>
</template>

<script setup>
const count = ref([
	`工作区内容更新到暂存区
git add`,

	`暂存区内容提交到仓库
git commit`,

	`比较暂存区和工作区文件差异
git diff`,

	`撤销工作区内容修改
git checkout <file>
git checkout --`,

	`回退版本
git reset`,

	`删除暂存区内容，工作区不变
git rm`,

	`创建git仓库
git init 目录地址`,

	`拷贝版本库内容
git clone 仓库名/本地目录`,

	`显示当前git配置信息
git config --list`,

	`查看历史提交记录
git log`,

	`创建分支
git branch`,

	`切换分支
git checkout <branch>`,

	`合并分支
git merge`,

	`删除分支
git branch -d`
]);

const printTxt = () => {
	let text = ''
	count.value.forEach(it=>{
		text = text+it+'\n'
	});
	let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
	const tmpLink = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);

    tmpLink.href = objectUrl;
    tmpLink.download = 'git命令';
    document.body.appendChild(tmpLink);
    tmpLink.click();

    document.body.removeChild(tmpLink);
    URL.revokeObjectURL(objectUrl);
};
</script>

<style lang="less" scoped>
.gitShell {
	height: 100%;
	position: relative;
	.printTxt {
		position: absolute;
		top: 10%;
		right: 10%;
	}
	.infinite-list {
		height: 100%;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.infinite-list .infinite-list-item {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 50px;
		background: var(--el-color-primary-light-9);
		margin: 10px;
		padding: 0 20px;
		// color: var(--el-color-primary);
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.infinite-list .infinite-list-item + .list-item {
		margin-top: 10px;
	}
}
</style>
