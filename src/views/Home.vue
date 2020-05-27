<template>
  <div class="container">
    <MainInfo v-bind:globalData="globalData" />
    <BarCharts v-bind:countriesData="countriesData" />
  </div>
</template>

<script>
import MainInfo from "../components/MainInfo";
import BarCharts from "../components/BarCharts";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
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
  methods: mapActions(["getGlobalData", "getCountriesData"]),

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


