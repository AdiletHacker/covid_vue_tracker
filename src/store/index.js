import Vuex from 'vuex';
import Vue from 'vue';
import virus_data from './modules/virus_data';
import createPersistedState from "vuex-persistedstate";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    virus_data
  },
  plugins: [createPersistedState()]
});
