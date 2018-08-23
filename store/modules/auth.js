import axios from "axios";
// initial state
const state = {};

// getters
const getters = {};

// actions
const actions = {
  getUserFromLocalStorage({ state, commit, rootState }) {
    if (window.localStorage.getItem("user") !== null) {
      commit("setUser", JSON.parse(window.localStorage.getItem("user")));
      commit("authToken", window.localStorage.getItem("token"));
    } else {
      this.$router.push({ name: "auth-login" });
    }
  },

  register({ state, commit, rootState }, user) {
    axios
      .post(rootState.api + "/auth/register", user)
      .then(response => {
        commit("setUser", response.data.user);
        commit("authToken", response.data.token);
        commit("setToken", response.data.token);
        this.$router.push({ name: "user" });
      })
      .catch(error => {
        commit("catchError", error);
      });
  },
  login({ state, commit, rootState }, user) {
    axios
      .post(rootState.api + "/auth/login", {
        email: user.email,
        password: user.password
      })
      .then(response => {
        commit("setUser", response.data.user);
        commit("authToken", response.data.token);
        commit("setToken", response.data.token);
        this.$router.push({ name: "user" });
      })
      .catch(error => {
        commit("catchError", error);
      });
  },

  signout({ state, commit, rootState }) {
    commit("unsetAll");
    this.$router.push({ name: "auth-login" });
  },

  ForgotPassword({ state, commit, rootState }, email) {
    axios
      .post(rootState.api + "/auth/forget_password", { email: email })
      .then(response => {
        this.$router.push({
          name: "password-success",
          params: { name: "forgot" }
        });
        // state.authError = null;
      })
      .catch(error => {
        commit("catchError", error);
      });
  },
  ResetConfirmation({ state, commit, rootState }, reset) {
    axios
      .post(
        rootState.api + "/auth/password/confirmation/" + reset.reset_token,
        {
          new_password: reset.new_password,
          repeat_new_password: reset.repeat_new_password
        }
      )
      .then(response => {
        this.$router.push({
          name: "password-success",
          params: { name: "reset" }
        });
      })
      .catch(error => {
        commit("catchError", error);
      });
  },
  verifyToken({ state, commit, rootState }, token) {
    axios.get(rootState.api + "/auth/verify_token/" + token).catch(error => {
      this.$router.push({
        name: "password-success",
        params: { name: "old-token" }
      });
    });
  }
};

// mutations
const mutations = {
  setUser(state, user) {
    window.localStorage.setItem("user", JSON.stringify(user));
  },
  setToken(state, token) {
    window.localStorage.setItem("token", token);
  },
  unsetAll() {
    window.localStorage.clear();
    window.localStorage.setItem("logout", Date.now());
    state.user = null;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
