

<template>
  <div class="mb-5">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="p-3">
      <div class="container">
        <b-navbar-brand to="/">Covid-Tracker</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/countries">All Countries</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav v-if="isOnPage" class="ml-auto">
            <b-nav-form @submit="addValue">
              <b-form-input
                :value="inputValue"
                size="sm"
                class="mr-sm-2"
                type="search"
                placeholder="Search"
              ></b-form-input>
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
  computed: mapGetters(["inputValue", "isOnPage"]),
  methods: {
    ...mapActions(["addInputValue", "addCurrentPage"]),
    addValue(e) {
      e.preventDefault();
      this.addInputValue(e);
      this.addCurrentPage(1);
    }
  }
};
</script>


<style scoped>
</style>>







