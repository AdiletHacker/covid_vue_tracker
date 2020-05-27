<template>
  <div>
    <highcharts :options="options" ref="lineCharts"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import stockInit from "highcharts/modules/stock";

stockInit(Highcharts);
exportingInit(Highcharts);

export default {
  name: "BarCharts",

  props: ["countriesData"],

  components: {
    highcharts: Chart
  },

  data() {
    return {
      options: {
        chart: {
          backgroundColor: "#1A1B1E",
          type: "column"
        },
        title: {
          text: "15 most infected countries",
          style: {
            color: "white",
            fontSize: "25px",
            fontFamily: "Verdana, sans-serif"
          }
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "12px",
              fontFamily: "Verdana, sans-serif"
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Cases per countries"
          }
        },
        legend: {
          enabled: false
        },
        series: [
          {
            name: "Population",
            data: this.countriesData.map(el => [el.country, +el.cases]),
            dataLabels: {
              enabled: false
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>

</style>