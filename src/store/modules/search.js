
const state = {
    inputValue: "",
    isOnPage: false,
};

const getters = {
    inputValue: state => state.inputValue,
    isOnPage: state => state.isOnPage,
};

const actions = {
    addInputValue({ commit }, e) {
        e.preventDefault();
        commit("setInputValue", e.target[0].value);
    }
};

const mutations = {
    setInputValue: (state, payload) => {
        state.inputValue = payload;
        return location.reload();
    },
    setIsOnPage: (state, payload) => state.isOnPage = payload
}

export default { state, getters, actions, mutations };
















