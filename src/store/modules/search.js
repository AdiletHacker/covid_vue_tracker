
const state = {
    inputValue: "",
    isOnPage: false,
    isFound: false
};

const getters = {
    inputValue: state => state.inputValue,
    isOnPage: state => state.isOnPage,
    isFound: state => state.isFound,
};

const actions = {
    addInputValue({ commit, state }, e) {
        if (e.target[0].value) state.isFound = true;
        commit("setInputValue", e.target[0].value);
    },
    removeInputValue({ commit, state }, e) {
        state.isFound = false;
        commit("setInputValue", e);
    }
};

const mutations = {
    setInputValue: (state, payload) => state.inputValue = payload,
    setIsOnPage: (state, payload) => state.isOnPage = payload
}

export default { state, getters, actions, mutations };
















