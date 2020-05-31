

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="p-3">
      <div class="container">
        <b-navbar-brand to="/">Covid-Tracker</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/countries">All Countries</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit="addInputValue">
              <b-form-input :value="inputValue" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: mapGetters(["inputValue"]),
  methods: {
    ...mapActions(["addInputValue"]),
    // addData(e) {
    //   this.$set(this.$store.state.search, "inputValue", e.target.parentNode[0].value)
    // }
  },
};
</script>


<style scoped>
</style>>







