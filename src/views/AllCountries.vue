<template :key="inputValue">
  <b-container class="mb-5 container" fluid>
    <Pagination
      :perPage="perPage"
      :currentPage="currentPage"
      :countries="countries"
      @update="setCurrentPage"
    />
    <b-card-group class="mt-5">
      <PaginationList :searchCountries="searchCountries" />
    </b-card-group>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import PaginationList from "../components/Pagination/PaginationList";
import Pagination from "../components/Pagination/Pagination";
export default {
  name: "AllCountries",
  components: { PaginationList, Pagination },
  computed: {
    ...mapGetters(["countries", "inputValue"])
  },

  data() {
    return {
      searchCountries: [],
      perPage: 10,
      currentPage: 1
    };
  },

  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    }
  },

  mounted() {
    this.$set(this.$store.state.search, "isOnPage", true);
  },
  beforeDestroy() {
    this.$set(this.$store.state.search, "isOnPage", false);
  },

  created() {
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
</style>