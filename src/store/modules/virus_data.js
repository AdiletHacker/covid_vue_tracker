import axios from "axios";

const state = {
    global: {},
    countries: []
};

const getters = {
    global: state => state.global,
    countries: state => state.countries,
};

const actions = {
    async getGlobalData({ commit }) {
        const res = await axios.get("https://coronavirus-19-api.herokuapp.com/all");
        commit("setGlobalData", res.data);
    },
    async getCountriesData({ commit }) {
        const res = await axios.get("https://coronavirus-19-api.herokuapp.com/countries");
        commit("setCountriesData", res.data);
    },
};

const mutations = {
    setGlobalData: (state, payload) => state.global = payload,
    setCountriesData: (state, payload) => state.countries = payload,
};

export default { state, getters, actions, mutations };
















