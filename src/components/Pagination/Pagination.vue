<template>
  <fragment>
    <div class="overflow-auto">
      <b-pagination
        :total-rows="countries.length"
        :per-page="perPage"
        align="center"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        v-model="localCurrentPage"
      ></b-pagination>
    </div>
  </fragment>
</template>

<script>
export default {
  name: "Pagination",
  props: ["perPage", "countries", "addCurrentPage", "currentPage"],
  data() {
      return {
          localCurrentPage: this.currentPage
      }
  },
  watch: {
    localCurrentPage(e) {
      this.addCurrentPage(e)
    }
  }
};
</script>


<style scoped>

.b-pagination /deep/ li .page-link {
  background: #343A40;
  color: white;
  border-color: #343A40;
}

.b-pagination /deep/ li.active .page-link { 
  background: rgb(41, 40, 40);
}
</style>