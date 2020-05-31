<template :key="inputValue">
  <b-container class="mb-5 container" fluid>
    <b-card-group class="mt-5">
      <b-col sm="6" v-for="country in searchCountries" :key="country.country" class="mb-3">
        <b-card bg-variant="dark" text-variant="white">
          <b-card-title>{{country.country}}</b-card-title>
          <b-card-text>Cases: {{country.cases}} | Today: {{country.todayCases}} | Active: {{country.active}}</b-card-text>
          <b-card-text>Deaths: {{country.deaths}} | Today: {{country.todayDeaths}}</b-card-text>
          <b-card-text>Recovered: {{country.recovered}} | Critical: {{country.critical}}</b-card-text>
        </b-card>
      </b-col>
    </b-card-group>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AllCountries",
  computed: mapGetters(["countries", "inputValue"]),

  data() {
    return {
      searchCountries: []
    };
  },

  created() {
    this.searchCountries = this.countries.filter(country => {
      const name = country.country.toLowerCase();
      const value = this.inputValue.toLowerCase();
      return name.indexOf(value) !== -1;
    });

    this.searchCountries.map(country => {
      for (const key in country) {
        if (Number.isInteger(country[key])) {
          country[key] = country[key]
            .toString()
            .replace(/(.)(?=(\d{3})+$)/g, "$1,");
        }
      }
    });
  }
};
</script>

<style scoped>
@media only screen and (max-width: 1000px) {
  .col-sm-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.card-text {
  margin: 0;
}
</style>