

<template>
  <div class="globalInfo mb-5">
    <b-card-group deck class="mt-5">
      <b-card bg-variant="dark" text-variant="white">
        <b-card-subTitle class="mb-2">Global</b-card-subTitle>
        <b-card-Title>Coronavirus cases</b-card-Title>
        <b-card-text>{{globalData[0]}}</b-card-text>
      </b-card>

      <b-card bg-variant="dark" text-variant="white">
        <b-card-subTitle class="mb-2">Global</b-card-subTitle>
        <b-card-Title>Deaths</b-card-Title>
        <b-card-text>{{globalData[1]}}</b-card-text>
      </b-card>

      <b-card bg-variant="dark" text-variant="white">
        <b-card-subTitle class="mb-2">Global</b-card-subTitle>
        <b-card-Title>Recovered</b-card-Title>
        <b-card-text>{{globalData[2]}}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  props: ["globalData"],
};
</script>


<style scoped>

@media only screen and (max-width: 1000px) {
  .card-deck {
    display: flex;
    flex-flow: column;
  }
  .card-deck .card {
    margin-bottom: 15px;
  }
}
</style>>







