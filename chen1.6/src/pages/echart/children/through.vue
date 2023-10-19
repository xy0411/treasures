<template>
	<div class="through">
		<div ref="map" id="map"></div>
		<el-button class="back" @click="drawChart('back')" :disabled="name === '中国'">返回上一场景</el-button>
	</div>
</template>

<script>
import * as echarts from "echarts";
import ele from "element-resize-detector";
import { getChinaMap, getHuNanMap, getChenZhouMap, getZingXingMap } from "@/api/map.js";
export default {
	data() {
		return {
			name: '',
			myChart: null,
			address: 'China'
		};
	},
	mounted() {
		this.drawChart();
	},
	methods: {
		async backLstMap() {
			switch (this.name) {
				case '湖南':
					this.name = '中国'
					return await getChinaMap()
				case '郴州':
					this.name = '湖南'
					return await getHuNanMap()
				case '资兴':
					this.name = '郴州'
					return await getChenZhouMap()
				default:
					this.name = '资兴'
					return 
			}
		},
		async changeMapData() {
			switch (this.name) {
				case '湖南':
					return await getHuNanMap()
				case '郴州':
					return await getChenZhouMap()
				case '资兴':
					return await getZingXingMap()
				default:
					return await getChinaMap()
			}
		},
		async drawChart(bol) {
			try {
				if(this.myChart) {
					this.myChart.dispose() // 必须要销毁之前的实例，不然会重复事件
				}
				this.myChart = echarts.init(this.$refs.map);
				this.myChart.showLoading(); // 显示loading动画

				let res

				if(bol) {
					res = await this.backLstMap();
				} else {
					res = await this.changeMapData();
				}

				this.myChart.hideLoading(); // 关闭loading动画
				echarts.registerMap(this.address, res.data);
				let options = {
					tooltip: {
						alawaysShowContent: true, // 是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容。(其实鼠标离开后一样会消失)
						enterable: true, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
						formatter: function (params) {
							// 提示框浮层内容格式器,并添加链接
							let value
							// 江苏 9
							// 广东 18
							// 湖南 17
							if(params.dataIndex === 17 && params.name === '湖南省') {
								value = '郴州市'
							} else if(params.dataIndex === 9 && params.name === '郴州市') {
								value = '资兴市'
							} else if(params.dataIndex === 10 && params.name === '资兴市') {
								value = '我的家乡'
							}
                            // console.log(params);
							let a =
								`<br> <a href="javascript:void(0);" style="color: red;">点击查看</a>`;
							if(params.dataIndex === 17 || params.dataIndex === 9 || params.dataIndex === 10){
								return params.name + ":" + value + a;
							} else {
								return 
							}
						},
						renderMode: 'html',
						appendToBody: true
					},
					series: [
						{
							type: "map",
							map: this.address,
							label: {
								show: true
							},
							roam: true
						},
						{
							type: "effectScatter",
							effectType: "ripple",
							coordinateSystem: "geo",
						}
					]
				};
				this.myChart.setOption(options);
				this.myChart.on('click', params => {
					// console.log(123, params);
					if(params.name.includes('湖南') || params.name.includes('郴州') || params.name.includes('资兴')) {
						this.name = params.name.substring(0, params.name.length - 1)
						if(params.name.includes('湖南')) {
							this.address = 'HuNan'
							this.drawChart()
						} else if(params.name.includes('郴州')) {
							this.address = 'ChenZhou'
							this.drawChart()
						} else if(params.name.includes('资兴') && params.dataIndex !== 0) {
							this.address = 'ZingXing'
							this.drawChart()
						} else {
							this.address = ''
						}
					}
				})
				// 使用element-resize-detector插件自适应
				ele().listenTo(this.$refs.map, (e) => {
					this.myChart.resize();
				});
			} catch (error) {
				console.log(error);
				this.myChart.hideLoading();
			}
		}
	}
};
</script>

<style lang="less" scoped>
.through {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	#map {
		background: rgb(9, 15, 68);
		width: 100%;
		height: 100%;
	}
	.back {
		position: absolute;
		top: 10%;
		right: 10%;
	}
}
</style>
