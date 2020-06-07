<template>
  <div class="container">
    <MainInfo :globalData="globalData" />
    <BarCharts :countriesData="countriesData" />
  </div>
</template>

<script>
import MainInfo from "../components/MainInfo";
import BarCharts from "../components/BarCharts";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: mapActions(["getGlobalData", "getCountriesData"]),
  components: {
    MainInfo,
    BarCharts
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
  min-height: 200vh;
  background-color: #1a1b1e;
  color: white;
}
</style>


