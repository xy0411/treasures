<template>
	<div class="doubleTable">
        <el-table
			:data="tableData"
            ref="leftTable"
			border
			style="width: 48%"
			class="super-table"
			v-loading="loading"
			element-loading-text="拼命加载中..."
		>
			<el-table-column type="index" width="55" align="center" label="序号" />
			<template v-for="it in tableInfo" :key="it.label">
				<el-table-column :prop="it.prop" :label="it.label" :width="it.width" :align="it.align">
					<template #default="scope">
						<span v-html="scope.row[it.prop]"></span>
					</template>
				</el-table-column>
			</template>
		</el-table>
        <el-table
			:data="tableData"
            ref="rightTable"
			border
			style="width: 48%"
			class="super-table"
			v-loading="loading"
			element-loading-text="拼命加载中..."
		>
			<el-table-column type="index" width="55" align="center" label="序号" />
			<template v-for="it in tableInfo" :key="it.label">
				<el-table-column :prop="it.prop" :label="it.label" :width="it.width" :align="it.align">
					<template #default="scope">
						<span v-html="scope.row[it.prop]"></span>
					</template>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
            leftTableScroll: '',
            rightTableScroll: '',
			tableInfo: [],
			tableName: [
				["name", "名称", "220", "center"],
				["age", "出生日期", "220", "center"],
				["team", "位置", "220", "center"],
				["date", "填写日期", "220", "center"]
			],
			tableData: [],
			tableDataTem: [],
			loading: true
		};
	},
	methods: {
		transformationTableName(arr1, arr2) {
			arr1.forEach((it, index) => {
				arr2.push({
					prop: it[0],
					label: it[1],
					width: it[2],
					align: it[3]
				});
			});
			return arr2;
		},
        listenScrollTop() {
            this.leftTableScroll.addEventListener('scroll', ()=>{
                this.rightTableScroll.scrollTop = this.leftTableScroll.scrollTop
                this.rightTableScroll.scrollLeft = this.leftTableScroll.scrollLeft
            })
            this.rightTableScroll.addEventListener('scroll', ()=>{
                this.leftTableScroll.scrollTop = this.rightTableScroll.scrollTop
                this.leftTableScroll.scrollLeft = this.rightTableScroll.scrollLeft
            })
        }
	},
	mounted() {
        for(let i = 0; i < 100; i++) {
            this.tableDataTem.push({
                date: "2023年9月25日",
                name: "Kyrie Irving",
                age: "1992年3月23日",
                team: "达拉斯独行侠队"
            })
        }
		this.transformationTableName(this.tableName, this.tableInfo);
        this.tableData = this.tableDataTem;
        this.loading = false;

        // 没想到这俩小子能嵌套这么深，我的个天耶
        this.leftTableScroll = this.$refs.leftTable.$refs.bodyWrapper.childNodes[0].childNodes[0]
        this.rightTableScroll = this.$refs.rightTable.$refs.bodyWrapper.childNodes[0].childNodes[0]

        this.listenScrollTop()
	}
};
</script>

<style lang="less" scoped>
.doubleTable {
	height: 100%;
    display: flex;
    justify-content: space-between;
    .super-table {
        height: 100%;
	}
}
</style>
