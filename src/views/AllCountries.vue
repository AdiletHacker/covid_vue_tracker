<template>
  <transition name="slide-fade">
    <b-container v-if="show" class="mb-5 container" fluid>
      <div v-if="isFound" class="container mb-3" align="right">
        <b-button @click="removeInputValue('')" variant="secondary">Return to the List</b-button>
      </div>
      <b-card-group class="mb-3">
        <PaginationList :searchCountries="searchCountries" />
      </b-card-group>
      <Pagination
        :perPage="perPage"
        :currentPage="currentPage"
        :countries="countries"
        :addCurrentPage="addCurrentPage"
      />
    </b-container>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PaginationList from "../components/Pagination/PaginationList";
import Pagination from "../components/Pagination/Pagination";
export default {
  name: "AllCountries",
  components: { PaginationList, Pagination },
  computed: mapGetters(["countries", "inputValue", "currentPage", "isFound"]),
  methods: {
    ...mapActions(["addCurrentPage", "getCountriesData", "removeInputValue"])
  },

  data() {
    return {
      searchCountries: [],
      perPage: 10,
      show: false
    };
  },

  mounted() {
    this.show = true;
    this.$set(this.$store.state.search, "isOnPage", true);
  },
  beforeDestroy() {
    this.show = false;
    this.$set(this.$store.state.search, "isOnPage", false);
  },

  created() {
    this.getCountriesData();

    const countriesCopy = [...this.countries];
    this.searchCountries = countriesCopy.filter(country => {
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

    const lastIndex = this.currentPage * this.perPage;
    const firstIndex = lastIndex - this.perPage;
    this.searchCountries = this.searchCountries.slice(firstIndex, lastIndex);
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>