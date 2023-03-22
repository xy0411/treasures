<template>
  <div class="linkage">
    <div class="echart-header">echarts柱状图饼图毫无违和的联动</div>
    <div class="com-loss-chart">
      <div class="com-loss-chart-left">
        <div id="area-ele" ref="areaEle"></div>
      </div>
      <div class="com-loss-chart-right">
        <div class="chart-right-rec">
          <div class="right-rec-table">
            <div id="total-ele-ala" ref="totalEleAla"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import ele from "element-resize-detector";
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawChart3();
  },
  methods: {
    // 区域用电分析、合计电量及占比分析开启联动
    drawChart3() {
      echarts.init(this.$refs.areaEle).dispose(); // 由于柱状图数据太多，导致无法重新渲染数据，需要销毁原chart 2023/2/20
      var myChart = echarts.init(this.$refs.areaEle);
      let options = {
        title: {
          text: "",
          left: "center",
          textStyle: {
            fontSize: "18",
          },
        },
        legend: {
          data: ['A', 'B', 'C'],
          bottom: "0%",
          icon: "roundRect",
          itemWidth: 24,
          itemHeight: 12,
          textStyle: {
            // color: '#fff',
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
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
            align: "left",
          },
        },
        grid: {
          // 与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
          top: "16%",
          bottom: "8%",
          left: "4%",
          right: "4%",
          containLabel: true, // 『防止标签溢出』
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              // color: 'rgb(167,169,179)'
            },
          },
          axisTick: {
            show: true,
          },
          data: [
            '1日',
            '2日',
            '3日',
            '4日',
            '5日',
            '6日',
            '7日',
            '8日',
            '9日',
            '10日'
          ],
        },
        yAxis: [
          {
            name: "",
            axisLine: {
              lineStyle: {
                // color: '#fff'
              },
              show: false,
            },
            nameTextStyle: {
              // padding: [0, 60, 0, 0]
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                // color: 'rgb(31,62,123)',
                type: "solid",
              },
            },
          },
        ],
        dataset: {
          source: [
            ["product", "A", "B", "C"],
            ["1日", 43.3, 85.8, 93.7],
            ["2日", 83.1, 73.4, 55.1],
            ["3日", 86.4, 65.2, 82.5],
            ["4日", 72.4, 53.9, 39.1],
            ["5日", 43.3, 85.8, 93.7],
            ["6日", 83.1, 73.4, 55.1],
            ["7日", 86.4, 65.2, 82.5],
            ["8日", 72.4, 53.9, 39.1],
            ["9日", 43.3, 85.8, 93.7],
            ["10日", 83.1, 73.4, 55.1]
          ],
        },
        series: [
          {
            type: "bar",
            color: "rgb(79,129,189)",
            barWidth: "7", // 宽度随左边树的选中节点而定
            label: {
              color: "#fff",
              formatter: (value) => {
                return this.formatNum(value.data[1]);
              },
            },
          },
          {
            type: "bar",
            color: "rgb(192,80,77)",
            barWidth: "7",
            label: {
              color: "#fff",
              formatter: (value) => {
                return this.formatNum(value.data[1]);
              },
            },
          },
          {
            type: "bar",
            color: "rgb(155,187,89)",
            barWidth: "7",
            label: {
              color: "#fff",
              formatter: (value) => {
                return this.formatNum(value.data[1]);
              },
            },
          },
        ],
      };
      myChart.resize();
      myChart.setOption(options);

      var myChart1 = echarts.init(this.$refs.totalEleAla);
      let options1 = {
        title: {
          text: "",
          subtext: this.formatNum('100%'),
          // top: 'middle',
          // left: 'middle',
          top: "40%",
          left: "48.6%",
          textStyle: {
            color: "rgb(116,136,179)",
            fontSize: "20",
          },
          textAlign: "center",
          textVerticalAlign: "center",
          subtextStyle: {
            color: "rgb(116,136,179)",
            fontSize: "18",
          },
        },
        legend: {
          bottom: "0%",
          itemWidth: 24,
          itemHeight: 12,
          textStyle: {
            // color: '#fff'
          },
          icon: "roundRect",
        },
        tooltip: {
          // show: true,
          trigger: "item",
          // formatter: '{b}<br />占{d}%',
          formatter: (params) => {
            // console.log(params);
            return (
              params.marker +
              params.name +
              ": " +
              this.formatNum(params.value[1]) +
              "<br/>" +
              "占比" +
              params.percent +
              "%"
            );
          },
          backgroundColor: "rgb(255,255,255)",
          showContent: true,
          triggerOn: "mousemove",
          textStyle: {
            color: "blank",
          },
          borderWidth: 1,
        },
        dataset: {
          source: [
              ['name', 'num'],
              ['A', '49.51'],
              ['B', '22.58'],
              ['C', '27.91']
          ]
        },
        color: ["rgb(194,53,49)", "rgb(47,69,84)", "rgb(97,160,168)"], // 调色盘
        series: [
          {
            type: "pie",
            bottom: "25%",
            radius: ["48%", "65%"],
            center: ["50%", "58%"],
            // radius: [0, 45],
            label: {
              // 饼图图形上的文本标签
              show: false,
              formatter: "{b}: {d}%",
              position: "inside", // 标签的位置
              triggerOn: "mousemove",
              // color: '#fff',
            },
            avoidLabelOverlap: false,
            emphasis: {
              disable: false,
              scale: false,
              focus: "none",
              label: {
                show: false,
              },
            },
            legendHoverLink: true,
            selectedMode: "single"
          },
        ],
      };
      myChart1.setOption(options1);

      // 使用element-resize-detector插件自适应
      ele().listenTo(this.$refs.areaEle, function (e) {
        myChart.resize();
      });
      ele().listenTo(this.$refs.totalEleAla, function (e) {
        myChart1.resize();
      });

      myChart.group = "group1";

      // 初始化取消联动
      myChart1.group = "";
      echarts.connect("");

      // 图例点击事件时开启联动 2022/11/16(也算是在之前的园区账单费用统计总览的基础上优化了)
      // 这里不知道为啥只需要一个settimeout => 因为当点击事件开启联动之后同时会调动另外一个点击事件
      myChart.on("legendselectchanged", function (obj) {
        myChart1.group = "group1";
        echarts.connect("group1");
      });
      myChart1.on("legendselectchanged", function (obj) {
        myChart1.group = "group1";
        echarts.connect("group1");
        setTimeout(() => {
          myChart1.group = "";
          echarts.connect("");
        }, 1);
      });
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
.linkage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .echart-header {
    font-size: 1.4rem;
    font-weight: bold;
  }
  #total-ele-ala {
    width: 100%;
  }
  #area-ele {
    width: 100%;
    height: 100%;
  }
  .com-loss-chart {
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1%;
    .com-loss-chart-left {
      width: 75%;
    }
    .com-loss-chart-right {
      width: 24%;
      height: 100%;
      .chart-right-rec {
        height: 100%;
        .right-rec-table {
          div {
            height: 100%;
          }
          width: 100%;
          height: 90%;
          position: relative;
          .no-data {
            position: absolute;
            right: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(122, 105, 105);
          }
        }
      }
    }
  }
}
</style>