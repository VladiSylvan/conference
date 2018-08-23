import axios from "axios";
// initial state
const state = {
  all: null,
  states: null
};

// getters
const getters = {};

// actions
const actions = {
  postNumber({ state, commit, rootState }, number) {
    axios
      .post(rootState.api + "/dida-number", {
        number: number,
        start_time: "",
        end_time: ""
      })
      .then(response => {
        this.$router.push({ name: "numbers" });
      });
  },
  getNumber({ state, commit, rootState }) {
    axios.get(rootState.api + "/dida-number").then(response => {
      commit("saveNumbers", response.data);
    });
  },
  putNumber({ state, commit, rootState }) {
    axios.put(rootState.api + "/dida-number/" + rootState.user.id);
  },
  deleteNumber({ state, commit, rootState }) {
    axios.delete(rootState.api + "/dida-number/" + rootState.user.id);
  },
  getStates({ state, commit, rootState }) {
    axios.get(rootState.api + "/dida-number/states").then(response => {
      state.states = response.data;
    });
  }
  // getPrefix({ state, commit, rootState }, prefix) {
  //   axios.get(state.api + "/dida-number/" + prefix).then(response => {
  //     state.areaCode = response.data.area_code;
  //   });
  // }
};

// mutations
const mutations = {
  saveNumbers(state, numbers) {
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
