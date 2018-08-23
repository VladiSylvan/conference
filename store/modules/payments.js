import axios from "axios";
// initial state
const state = {
  all: null
};

// getters
const getters = {};

// actions
const actions = {
  // payments
  getPayments({ state, commit, rootState }) {
    axios.get(rootState.api + "/payment").then(response => {
      commit("setPayments", response.data);
    });
  },
  postPayments({ state, commit, rootState }) {
    axios.post(rootState.api + "/payment").then(response => {});
  },
  putPayments({ state, commit, rootState }) {
    axios.put(rootState.api + "/payment").then(response => {});
  },
  deletePayments({ state, commit, rootState }) {
    axios.delete(rootState.api + "/payment").then(response => {});
  }
};

// mutations
const mutations = {
  setPayments(state, numbers) {
    state.all = numbers;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
