<template>
  <fragment>
    <div class="overflow-auto">
      <b-pagination
        :total-rows="countries.length"
        :per-page="perPage"
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
  props: ["perPage", "currentPage", "countries", "setCurrentPage"],
  data() {
      return {
          localCurrentPage: this.currentPage
      }
  },
  watch: {
    localCurrentPage(e) {
      //this.$emit("update", e);
      this.$set(this.$parent, 'currentPage', e);
      console.log(this.$parent.currentPage)
    }
  }
};
</script>


<style scoped>
</style>