<template>
  <div class="ranking">
    <div class="echart-header">echarts横向柱状图排序</div>
    <div ref="checkIn" id="checkIn"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
import ele from 'element-resize-detector'
export default {
  data() {
    return {
        data: [
            ['name', 'num'],
            ['深圳市南山区腾讯大厦1', '666666'],
            ['深圳市南山区腾讯大厦2', '555555'],
            ['深圳市南山区腾讯大厦3', '444444'],
            ['深圳市南山区腾讯大厦4', '333333'],
            ['深圳市南山区腾讯大厦5', '222222'],
            ['深圳市南山区腾讯大厦6', '111111'],
        ]
    }
  },
  mounted() {
    this.drawChart3()
  },
  methods: {
    // 入住租客
    drawChart3(){
        let myChart = echarts.init(document.getElementById('checkIn'))
        let options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: params => {
                    return params[0].value[0] + '<br/>' + params[0].marker +  '入驻面积: ' + this.formatNum(params[0].value[1]) + '㎡'
                },
                textStyle: {
                    align: 'left'
                },
            },
            grid: {
                // 与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
               top: 12,
               //bottom: 3,
               bottom: 6,
               //left: '50%',
               left: 180,
               right: '6%',
            },
            xAxis: {
                type: 'value',
                show: false,
                boundaryGap: true,
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                },
                minInterval: 50,
            },
            yAxis: {
                type: 'category',
                inverse: true,
                axisLabel: {
                    inside: true,
                    color: '#fff',
                    // align: 'center',
                    verticalAlign: 'middle',
                    margin: -160,
                    formatter: (params, index) => {
                        if(params.length > 10) {
                            params = params.slice(0, 10) + '...'
                        }
                        if((index+1)==1){
                            return `{${index+1}|${index+1}} {fixed|${params}}`
                        }else if((index+1)==2){
                            return `{${index+1}|${index+1}} {fixed|${params}}`
                        }else if((index+1)==3){
                            return `{${index+1}|${index+1}} {fixed|${params}}`
                        }else {
                            return `{4|${index+1}} {fixed|${params}}`
                        }
                    },
                    rich: {
                        fixed: {
                            // width: 140,
                            align: 'left'
                        },
                        1: {
                            align: 'center',
                            width: 15,
                            height: 15,
                            backgroundColor: 'rgb(248,180,19)',
                            color: 'rgb(28,33,82)',
                            borderRadius: 15,
                        },
                        2: {
                            align: 'center',
                            width: 15,
                            height: 15,
                            backgroundColor: 'rgb(226,225,235)',
                            color: 'rgb(28,33,82)',
                            borderRadius: 15,
                        },
                        3: {
                            align: 'center',
                            width: 15,
                            height: 15,
                            backgroundColor: 'rgb(241,112,31)',
                            color: 'rgb(28,33,82)',
                            borderRadius: 15,
                        },
                        4: {
                            align: 'center',
                            width: 15,
                            height: 15,
                            backgroundColor: 'rgb(204,203,204)',
                            color: 'rgb(28,33,82)',
                            borderRadius: 15,
                        },
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                }
            },
            dataset: {
                source: this.data
            },
            series: [
                {
                    type: 'bar',
                    color: 'rgb(0,153,255)',
                    barWidth: "4",
                    label: {
                        show: true,
                        position: 'insideBottomRight',
                        color: '#fff',
                        formatter: (value) => {
                            return this.formatNum(value.data[1])
                        }
                    },
                    encode: {
                        x: 'num'
                    },
                    itemStyle: {
                        barBorderRadius: [34, 34, 34, 34]
                    },
                    // barCategoryGap: "60%"
                }
            ]
        }
        document.getElementById('checkIn').style.height = (this.data.length - 1)*10.6 - 12 + '%' // 根据数据自适应
        myChart.setOption(options)
        // 使用element-resize-detector插件自适应
        ele().listenTo(this.$refs.checkIn, function(e) {
            myChart.resize();
        })
    },
    // 千分位显示
    formatNum(value) {
        if (!value && value !== 0) return 0;
        let str = value.toString();
        let reg =
            str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
        return str.replace(reg, "$1,");
    }
  }
}
</script>

<style lang='less' scoped>
.ranking {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .echart-header {
    font-size: .3rem;
    font-weight: bold;
  }
  #checkIn {
    border-radius: 2%;
    background: rgb(9, 15, 68);
    width: 60%;
    height: 55%;
  }
}
</style>