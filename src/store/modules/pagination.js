

const state = {
    currentPage: 1
};
const getters = {
    currentPage: state => state.currentPage
};
const actions = {
    addCurrentPage({ commit }, page) {
        commit("setCurrentPage", page)
    }
};
const mutations = {
    setCurrentPage: (state, page) => {
        state.currentPage = page;
        return location.reload()
    }
};


export default { state, getters, actions, mutations };
















