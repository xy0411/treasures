<template>
	<div class="mysqlShell">
		<ul class="infinite-list" style="overflow: auto">
			<li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
			<el-backtop target=".infinite-list" :right="100" :bottom="100" />
		</ul>
		<el-button class="printTxt" @click="printTxt">导出文档</el-button>
	</div>
</template>

<script setup>
const count = ref([
	`登录 mysql -u root -p`,

	`退出 exit`,
	`查询数据库 show databases;`,
	`创建数据库 create database 数据库名;`,
	`删除数据库 drop database 数据库名;`,
	`选择数据库 use 数据库名;`,
	``,
	`创建数据表 create table 表名 (字段名 primary key 类型 是否为空 是否自增..., 字段名 unique 类型 是否为空 是否自增..., ....)engine=innodb default charset=utf8;`,
	`删除数据表 drop table 表名`,
	`表字段操作`,
	`1.添加列 alter table 表名 add column 列名 类型 【first|after 字段名】;`,
	`2.修改列的类型或约束 alter table 表名 modify column 列名 新类型 【新约束】;`,
	`3.修改列名 alter table 表名 change column 旧列名 新列名 类型;`,
	`4.删除列 alter table 表名 drop column 列名;`,
	`5.修改表名 alter table 表名 rename 【to】 新表名;`,
	`6.将某一列放到第一列 alter table 表名 modify column 列名 类型 first;`,
	``,
	`插入数据 insert into 表名 (字段名,...) values (对应字段的数据,...)`,
	`插入数据,避免主键重复，屏蔽后续重复主键数据插入 insert ignore into 表名 (字段名,...) values (对应字段的数据,...)`,
	``,
	`查询数据 select * from 表名`,
	`查询表中数据总条数 select count(*) from 表名`,
	`求和 select sum(求和字段名) from 表名;`,
	`不包含 select * from 表名 where 字段名 not like '%片段%';`,
	`排序 select * from 表名 order by 字段名 asc/desc;`,
	`查询表中数据某一字段在范围区间内 select * from 表名 where 字段名 between 范围一 and 范围二`,
	`where子句 1、可以使用and或者or指定一个或多个条件 2、可用于select、delete、update命令 3、where 字段名 in (...)`,
	`连接查询(多表查询) 左连接left join 右连接right join`,
	`like子句 1、如果没有使用百分号%,like子句与等号=的效果是一样的 2、like子句中使用百分号%字符来表示任意字符 3、可以使用and或者or指定一个或多个条件 4、可以在where子句中使用like子句`,
	`union操作符 连接两个以上的select语句的结果到一个结果集合中。多个select语句会删除重复的数据。 1、union all 可选，返回所有结果集，包含重复数据 2、union distinct 可选,删除结果集中重复的数据。默认情况union操作符已经删除重复数据。`,
	`排序 在select语句中使用order by子句来读取排序后的数据。默认情况是升序。 1、可以使用任何字段来作为排序的条件,从而返回排序后的查询结果 2、可以设定多个字段来排序。考虑到该字段名的数据有重复的情况 3、可以使用asc、desc关键字来设置查询结果是升序或降序排列。默认情况下是升序排列 4、可以添加where...like子句来设置条件`,
	`分组 select 字段名 from 表名 group by 字段名 having 分组后条件;`,
	`限制取出数量 select 字段名 from limit 数量 offset 偏移量;`,
	``,
	`修改数据 update 表名 set 字段名1='修改的值1',字段名2='修改的值2',...`,
	``,
	`删除数据 delete from 表名 // 如果没有where语句,表中所有数据将会被删除`,
	`清空表内数据,重置自增主键 truncate table 表名;`
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
	tmpLink.download = "mysql命令";
	document.body.appendChild(tmpLink);
	tmpLink.click();

	document.body.removeChild(tmpLink);
	URL.revokeObjectURL(objectUrl);
};
</script>

<style lang="less" scoped>
.mysqlShell {
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
		// height: 50px;
		min-height: 50px;
		height: auto;
		background: var(--el-color-primary-light-9);
		margin: 10px;
		padding: 2px 20px;
		// color: var(--el-color-primary);
		font-size: 14px;
		// overflow: hidden;
		// white-space: nowrap;
		// text-overflow: ellipsis;
	}
	.infinite-list .infinite-list-item + .list-item {
		margin-top: 10px;
	}
}
</style>
