import axios from "axios";
// import Cookie from "js-cookie";
const Cookie = process.browser ? require("js-cookie") : undefined;
// initial state
const state = {};

// getters
const getters = {};

// actions
const actions = {
  register({ state, commit, rootState }, user) {
    axios
      .post(rootState.api + "/auth/register", user)
      .then(response => {
        commit("setUser", response.data);
        commit("authToken", response.data.token);
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
        commit("setUser", response.data);
        commit("authToken", response.data.token);
        this.$router.push({ name: "user" });
      })
      .catch(error => {
        console.log(error);
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
  setUser(state, data) {
    if (process.SERVER_BUILD) return;
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("user", JSON.stringify(data.user));
    Cookie.set("jwt", data.token);
    Cookie.set("user", JSON.stringify(data.user));
  },
  unsetAll() {
    if (process.SERVER_BUILD) return;
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    Cookie.remove("jwt");
    Cookie.remove("user");
    window.localStorage.setItem("logout", Date.now());
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
