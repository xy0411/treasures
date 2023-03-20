<template>
  <div class="superTable">
    <el-table :data="tableData" border style="width: 100%" class="super-table">
      <el-table-column type="index" width="55" align="center" label="序号" />
      <template v-for="it in tableInfo" :key="it.label">
        <el-table-column
          :prop="it.prop"
          :label="it.label"
          :width="it.width"
          :align="it.align"
        >
          <template #default="scope">
            <template v-if="it.prop !== 'date'">
              <span v-html="scope.row[it.prop]"></span>
            </template>
            <template v-else>
              <el-input v-model="scope.row.date"></el-input>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-model:current-page="paginations.currentPage"
      v-model:page-size="paginations.pageSize"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next"
      :total="paginations.total"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableInfo: [],
      tableName: [
        ["name", "姓名", "", "center"],
        ["age", "出生日期", "", "center"],
        ["team", "所属运动队", "", "center"],
        ["date", "填写日期", "", "center"],
      ],
      tableData: [
        {
          date: "2013年3月13日",
          name: "Kawhi Leonard",
          age: "1991年6月29日",
          team: "洛杉矶快船队",
        },
        {
          date: "2013年3月13日",
          name: "Paul George",
          age: "1990年5月2日",
          team: "洛杉矶快船队",
        },
        {
          date: "2013年3月13日",
          name: "Stephen Curry",
          age: "1988年3月14日",
          team: "金州勇士队",
        },
        {
          date: "2013年3月13日",
          name: "Luka Dončić",
          age: "1999年2月28日",
          team: "达拉斯独行侠队",
        },
        {
          date: "2013年3月13日",
          name: "James Harden",
          age: "1989年8月26日",
          team: "费城76人队",
        },
        {
          date: "2013年3月13日",
          name: "Trae Young",
          age: "1998年9月19日",
          team: "亚特兰大老鹰队",
        },
        {
          date: "2013年3月13日",
          name: "Kevin Durant",
          age: "1988年9月29日",
          team: "菲尼克斯太阳队",
        },
        {
          date: "2013年3月13日",
          name: "LeBron James",
          age: "1984年12月30日",
          team: "洛杉矶湖人队",
        },
        {
          date: "2013年3月13日",
          name: "Anthony Davis",
          age: "1993年3月11日",
          team: "洛杉矶湖人队",
        },
        {
          date: "2013年3月13日",
          name: "Kyrie Irving",
          age: "1992年3月23日",
          team: "达拉斯独行侠队",
        },
      ],
      paginations: {
        pageSize: 20,
        currentPage: 1,
        total: 10,
      },
    };
  },
  methods: {
    transformationTableName(arr1, arr2) {
      arr1.forEach((it, index) => {
        arr2.push({
          prop: it[0],
          label: it[1],
          width: it[2],
          align: it[3],
        });
      });
      return arr2;
    },
  },
  mounted() {
    this.transformationTableName(this.tableName, this.tableInfo);
  },
};
</script>

<style lang="less" scoped>
.superTable {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  .super-table {
    flex-grow: 1;
  }
}
</style>