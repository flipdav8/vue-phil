<script>
/* eslint-disable */
//import { Bar, mixins } from "vue-chartjs";
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

import chartjsPluginAnnotation from "chartjs-plugin-annotation";

export default {
  //extends: Bar,
  extends: Line,
  mixins: [reactiveProp],
  props: [],
  data() {
    return {
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        animation: {
          duration: 0 // general animation time
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom",
          labels: {
            // fontColor: "rgb(166, 164, 244, 1)"
          }
        },
        scales: {
          xAxes: [
            {
              //  type: "time",
              //position: 'top',
              scaleLabel: {
                labelString: "Time",
                display: false,
                fontColor: "transparent"
              },
              ticks: {
                display: false,

                autoSkip: true,
                maxTicksLimit: 0,
                maxRotation: 0,
                //min: 0,
                //max: 1001,
                //beginAtZero: false,
                //labelOffset: -2,
                fontColor: "rgb(66, 164, 244, 0)",
                callback: function(value, index, values) {
                  return value + "s";
                }
              },
              gridLines: {
                drawBorder: false,
                display: false,
                //offsetGridLines: true
                color: "blue"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                labelString: "Arch Height",
                display: true,
                fontColor: "transparent"
              },

              ticks: {
                //display: false,
                autoSkip: true,
                maxTicksLimit: 2,
                fontColor: "rgb(66, 164, 244, 0)",
                min: 0,
                max: 1024,
                callback: function(value, index, values) {
                  if (value === 1024) {
                    return "Max";
                  } else if (value === 0) {
                    return "min";
                  } else {
                    return "";
                  }
                }
              },
              gridLines: {
                drawBorder: false,
                display: false,
                color: [
                  "rgba(0, 0, 0, 0)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)",
                  "rgba(0, 0, 0, 0.1)"
                ]
              }
            }
          ]
        },
        annotation: {
          drawTime: "beforeDatasetsDraw", // (default)

          events: ["click"],

          dblClickSpeed: 350 // ms (default)

          // annotations: [
          //   {
          //     //drawTime: "afterDraw", // overrides annotation.drawTime if set
          //     id: "a-line-1", // optional
          //     type: "line",
          //     mode: "vertical",
          //     scaleID: "x-axis-0",
          //     value: { x: 333 },
          //     borderColor: "green",
          //     borderWidth: 3,
          //     borderDash: [2, 2]
          //   },
          //   {
          //     // drawTime: "afterDraw", // overrides annotation.drawTime if set
          //     id: "a-line-2", // optional
          //     type: "line",
          //     mode: "vertical",
          //     scaleID: "x-axis-0",
          //     value: { x: 666 },
          //     borderColor: "red",
          //     borderWidth: 3,
          //     borderDash: [2, 2]
          //   }
          // ]
        }
      }
    };
  },
  mounted() {
    // this.chartData is created in the mixin. // NO NEED TO ADD AS A PROP MANUALLY
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  },

  methods: {
    // I think this method is testing add new tick limits dynamically?
    test() {
      //this.renderChart(this.chartData, this.options);
      //this.$data._chart.config.options.scales.xAxes[0].ticks.maxTicksLimit = 50;
      //this.$data._chart.update();
      //console.log(this.$data._chart.config.options.scales);
      let newLimit = 50;
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              //type: "time",
              ticks: {
                autoSkip: true,
                maxTicksLimit: newLimit
              }
            }
          ]
        }
      };
      this.renderChart(this.chartData, this.options);
    }
  }
};
</script>