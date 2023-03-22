<template>
  <div class="broken">
    <div class="echart-header">echarts柱状图折线图混合</div>
    <div id="comloss"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import ele from "element-resize-detector";
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    this.drawChart3();
  },
  methods: {
    // 综合损耗分析
    drawChart3(){
        let myChart = echarts.init(document.getElementById('comloss'))
        let options = {
            title: {
                text: '',
                left: 'center',
                textStyle: {
                    fontSize: '18'
                }
            },
            legend: {
                bottom: '0%',
                itemWidth: 24,
                itemHeight: 6,
                // textStyle: {
                //     // color: '#fff',
                // }
                data: [
                    {
                        icon: 'rect',
                        name: 'A'
                    },
                    {
                        icon: 'rect',
                        name: 'B'
                    },
                    {
                        icon: 'rect',
                        name: 'C'
                    },
                    {
                        icon: 'rect',
                        name: 'D'
                    },
                    {
                        name: 'E'
                    }
                ]
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                // formatter: params => {
                //     // console.log(params);
                //     return  params[0].value[0] + '<br/>' + 
                //     params[0].marker + params[0].seriesName + '：' + this.formatNum(params[0].value[1]) + '元' + '<br/>' + 
                //     params[1].marker + params[1].seriesName + '：' + this.formatNum(params[0].value[2]) + '元' + '<br/>' + 
                //     params[2].marker + params[2].seriesName + '：' + this.formatNum(params[0].value[3]) + '元/kWh' + '<br/>' + 
                //     params[3].marker + params[3].seriesName + '：' + this.formatNum(params[0].value[4]) + '元/kWh'
                // },
                textStyle: {
                    align: 'left'
                },
            },
            grid: {
                // 与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
               top: '16%',
               bottom: '18%',
               left: '9%',
               right: '9.4%',
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        // color: 'rgb(167,169,179)'
                    }
                },
                data: ['10-11', '10-10', '10-09', '10-08', '10-07', '10-06', '10-05', '10-04', '10-03', '10-02', '10-01', '09-30', '09-29', '09-28', '09-27', 
                '09-26', '09-25', '09-24', '09-23', '09-22', '09-21', '09-20', '09-19', '09-18', '09-17', '09-16', '09-15', '09-14', '09-13', '09-12'],
                axisTick: {
                    show: false
                }
            },
            yAxis: [
                {
                    name: '',
                    axisLine: {
                        lineStyle: {
                            // color: '#fff'
                        },
                        show: false
                    },
                    nameTextStyle: {
                        padding: [0, 60, 0, 0]
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // color: 'rgb(31,62,123)',
                            type: 'solid'
                        }
                    }
                },
                {
                    name: '',
                    axisLine: {
                        lineStyle: {
                            // color: '#fff'
                        },
                        show: false
                    },
                    nameTextStyle: {
                        padding: [0, 0, 0, 80]
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgb(31,62,123)',
                            type: 'dashed'
                        }
                    }
                },
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        },
                        show: false
                    },
                },
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        },
                        show: false
                    },
                }
            ],
            dataset: {
                source: [
                    ['product', 'A', 'B', 'C', 'D', 'E'],
                    ['10-11', 43.3, 85.8, 93.7, 10, 1.2],
                    ['10-10', 83.1, 73.4, 55.1, 50, 2.4],
                    ['10-09', 86.4, 65.2, 82.5, 77, 5.1],
                    ['10-08', 72.4, 53.9, 39.1, 66, 3.6],
                    ['10-07', 43.3, 85.8, 93.7, 10, 4.2],
                    ['10-06', 83.1, 73.4, 55.1, 50, 1.8],
                    ['10-05', 86.4, 65.2, 82.5, 77, 1.3],
                    ['10-04', 72.4, 53.9, 39.1, 66, 6],
                    ['10-03', 43.3, 85.8, 93.7, 10, 3.1],
                    ['10-02', 83.1, 73.4, 55.1, 50, 2.3],
                    ['10-01', 86.4, 65.2, 82.5, 77, 2.9],
                    ['09-30', 72.4, 53.9, 39.1, 66, 4.5],
                    ['09-29', 43.3, 85.8, 93.7, 10, 1.2],
                    ['09-28', 83.1, 73.4, 55.1, 50, 2.4],
                    ['09-27', 86.4, 65.2, 82.5, 77, 5.1],
                    ['09-26', 72.4, 53.9, 39.1, 66, 3.6],
                    ['09-25', 43.3, 85.8, 93.7, 10, 4.2],
                    ['09-24', 83.1, 73.4, 55.1, 50, 1.8],
                    ['09-23', 86.4, 65.2, 82.5, 77, 1.3],
                    ['09-22', 72.4, 53.9, 39.1, 66, 6],
                    ['09-21', 43.3, 85.8, 93.7, 10, 3.1],
                    ['09-20', 83.1, 73.4, 55.1, 50, 2.3],
                    ['09-19', 86.4, 65.2, 82.5, 77, 2.9],
                    ['09-18', 72.4, 53.9, 39.1, 66, 4.5],
                    ['09-17', 86.4, 65.2, 82.5, 77, 1.3],
                    ['09-16', 72.4, 53.9, 39.1, 66, 6],
                    ['09-15', 43.3, 85.8, 93.7, 10, 3.1],
                    ['09-14', 83.1, 73.4, 55.1, 50, 2.3],
                    ['09-13', 86.4, 65.2, 82.5, 77, 2.9],
                    ['09-12', 72.4, 53.9, 39.1, 66, 4.5],
                ]
            },
            series: [
                {
                    type: 'bar',
                    color: 'rgb(79,129,189)',
                    // barWidth: "5",
                    label: {
                        color: '#fff',
                        formatter: (value) => {
                            return this.formatNum(value.data[1])
                        }
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(192,80,77)',
                    // barWidth: "5",
                    label: {
                        color: '#fff',
                        formatter: (value) => {
                            return this.formatNum(value.data[1])
                        }
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(155,187,89)',
                    // barWidth: "5",
                    label: {
                        color: '#fff',
                        formatter: (value) => {
                            return this.formatNum(value.data[1])
                        }
                    }
                },
                {
                    type: 'bar',
                    color: 'rgb(128,100,162)',
                    // barWidth: "5",
                    label: {
                        color: '#fff',
                        formatter: (value) => {
                            return this.formatNum(value.data[1])
                        }
                    }
                },
                {
                    type: 'line',
                    color: 'rgb(75,172,198)',
                    yAxisIndex: 1,
                    smooth: true,
                    label: {
                        color: '#fff',
                        formatter: (value) => {
                            return this.formatNum(value.data[1])
                        }
                    },
                    // symbol: "none",
                    markLine: {
                        data: [
                            [
                                { name: '好累，想躺平', xAxis: '10-11', yAxis: 2, symbol: 'none', lineStyle: { color: '#000' } },
                                { name: '', xAxis: '09-12', yAxis: 2, symbol: 'none' }
                            ]
                        ],
                        label: {
                            // position: 'middle',
                            normal: { textStyle: { baseline: 'bottom', align: 'right' } }, // 真没想到
                            // padding: [0, 0, 20, 0],
                            fontWeight: 'bold'
                        }
                    }
                }
            ],
        }
        myChart.resize()
        myChart.setOption(options)
        // 使用element-resize-detector插件自适应
        ele().listenTo(document.getElementById('comloss'), function(e) {
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
    },
  },
};
</script>

<style lang='less' scoped>
.broken {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .echart-header {
    font-size: 1.4rem;
    font-weight: bold;
  }
  #comloss {
    width: 60%;
    height: 55%;
  }
}
</style>