<template>
  <fragment>
    <b-col sm="6" v-for="country in searchCountries" :key="country.country" class="mb-3">
      <b-card bg-variant="dark" text-variant="white">
        <b-card-title>{{country.country}}</b-card-title>
        <b-card-text>Cases: {{country.cases}} | Today: {{country.todayCases}} | Active: {{country.active}}</b-card-text>
        <b-card-text>Deaths: {{country.deaths}} | Today: {{country.todayDeaths}}</b-card-text>
        <b-card-text>Recovered: {{country.recovered}} | Critical: {{country.critical}}</b-card-text>
      </b-card>
    </b-col>
  </fragment>
</template>

<script>
export default {
  name: "PaginationList",
  props: ["searchCountries"]
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