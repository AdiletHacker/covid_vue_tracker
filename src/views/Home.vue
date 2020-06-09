<template>
  <div class="container">
    <MainInfo :globalData="globalData" />
    <BarCharts :countriesData="countriesData" />
    <Three />
  </div>
</template>

<script>
import MainInfo from "../components/MainInfo";
import BarCharts from "../components/BarCharts";
import Three from "../components/Three";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: mapActions(["getGlobalData", "getCountriesData"]),
  components: {
    MainInfo,
    BarCharts,
    Three
  },
  data() {
    return {
      globalData: [],
      countriesData: []
    };
  },
  computed: mapGetters(["global", "countries"]),

  created() {
    this.getGlobalData();
    this.getCountriesData();

    for (const key in this.global) {
      this.globalData.push(
        this.global[key].toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")
      );
    }

    this.countriesData = this.countries.slice(1, 16);
  }
};
</script>

<style>
body {
  min-height: 2000px;
  background-color: #1a1b1e;
  color: white;
}
</style>


