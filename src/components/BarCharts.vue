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
#container {
  height: 400px;
}

.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>