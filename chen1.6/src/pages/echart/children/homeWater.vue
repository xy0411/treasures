<template>
  <div class="home">
    <h1>echarts流体图示例</h1>
    <div ref="draw1" id="draw1"></div>
    <div ref="draw2"></div>
    <div ref="draw3"></div>
    <div ref="draw4"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
import "echarts-liquidfill"
import ele from 'element-resize-detector'
export default {
  data () {
    return {

    }
  },
  methods: {
    DrawChart1 () {
      let value = 0.5
	    let data = [value, value, value]
      let myChart = echarts.init(this.$refs.draw1)
      let options = {
        title: [
          {
            text: "太阳",
            x: "25%",
            y: 30,
            textAlign: "center",
            textStyle: {
              color: "#a1a1a1",
              fontSize: 16,
              fontFamily: "Microsoft Yahei",
              fontWeight: "100",
              textAlign: "center"
            }
          },
          {
            text: "月亮",
            x: "75%",
            y: 30,
            textAlign: "center",
            textStyle: {
              color: "#a1a1a1",
              fontSize: 16,
              fontFamily: "Microsoft Yahei",
              fontWeight: "100",
              textAlign: "center"
            }
          },
          {
            text: (value * 100).toFixed(0) + "%",
            left: "25%",
            top: "38%",
            textAlign: "center",
            textStyle: {
              fontSize: "50",
              fontWeight: "300",
              color: "#a06a0a",
              textAlign: "center",
              textBorderColor: "rgba(0, 0, 0, 0)",
              textShadowColor: "#fff",
              textShadowBlur: "0",
              textShadowOffsetX: 0,
              textShadowOffsetY: 1
            }
          },
          {
            text: (value * 100).toFixed(0) + "%",
            left: "75%",
            top: "38%",
            textAlign: "center",
            textStyle: {
              fontSize: "50",
              fontWeight: "300",
              color: "#02456d",
              textAlign: "center",
              textBorderColor: "rgba(0, 0, 0, 0)",
              textShadowColor: "#fff",
              textShadowBlur: "0",
              textShadowOffsetX: 0,
              textShadowOffsetY: 1
            }
          }
        ],
        series: [
          {
            type: "liquidFill",
            radius: "50%",
            z: 6,
            center: ["25%", "50%"],
            color: [
              {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(251, 173, 23, 0)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(251, 173, 23, .2)"
                  },
                  {
                    offset: 0,
                    color: "rgba(251, 173, 23, 1)"
                  }
                ],
                globalCoord: false
              }
            ],
            data: data,
            backgroundStyle: {
              borderWidth: 1,
              color: "transparent"
            },
            label: {
              normal: {
                formatter: ""
              }
            },
            outline: {
              show: true,
              itemStyle: {
                borderWidth: 0
              },
              borderDistance: 0
            }
          },
          {
            name: "第二层白边",
            type: "pie",
            z: 3,
            radius: ["0%", "55%"],
            center: ["25%", "50%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#fefefe"
                      },
                      {
                        offset: 1,
                        color: "#e7e8ea"
                      }
                    ])
                  }
                }
              },
              {
                value: 0,
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "最外绿边",
            type: "pie",
            z: 1,
            radius: ["0%", "58%"],
            center: ["25%", "50%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#fdc56e"
                }
              },
              {
                value: 0,
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            type: "liquidFill",
            radius: "50%",
            z: 6,
            center: ["75%", "50%"],
            color: ["#c1dce7", "#90d3f0", "#009bdb"],
            data: [0.6, { value: 0.5, direction: "left" }, 0.4, 0.3],
            backgroundStyle: {
              borderWidth: 1,
              color: "transparent"
            },
            label: {
              normal: {
                formatter: ""
              }
            },
            outline: {
              show: true,
              itemStyle: {
                borderWidth: 0
              },
              borderDistance: 0
            }
          },
          {
            name: "第二层白边",
            type: "pie",
            z: 3,
            radius: ["0%", "55%"],
            center: ["75%", "50%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#fefefe"
                      },
                      {
                        offset: 1,
                        color: "#e7e8ea"
                      }
                    ])
                  }
                }
              },
              {
                value: 0,
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "最外蓝边",
            type: "pie",
            z: 1,
            radius: ["0%", "58%"],
            center: ["75%", "50%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false
                }
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#07a2e3"
                }
              },
              {
                value: 0,
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          }
        ]
      }
      myChart.setOption(options)
      // 使用element-resize-detector插件自适应
      ele().listenTo(this.$refs.draw1, function(e) {
        myChart.resize();
      })
    }
  },
  mounted () {
    this.DrawChart1()
  }
}
</script>

<style lang='less' scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  #draw1 {
    width: 100%;
    height: 60%;
  }
}
</style>